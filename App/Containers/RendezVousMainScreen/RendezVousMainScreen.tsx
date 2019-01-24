import * as React from 'react';
import { View, Text, ListRenderItemInfo, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../Store/state';
import styles from './RendezVousMainScreenStyles';
import ImageButton from '../../Components/ImageButton/ImageButton';
import SearchField from '../../Components/SearchField/SearchField';
import { Todo } from '../../Model/Todo';
import { TodoCategory } from '../../Model/TodoCategory';
import { Colors } from '../../Themes';
import I18n from '../../I18n/I18n';
import TodoCard from '../../Components/TodoCard/TodoCard';
import { ImmutableTodoState } from '../../Store/todos/state';
import { TodoActions } from '../../Store/todos/actions';
import { NavigationScreenProp } from 'react-navigation';
import _ from 'lodash';
import { Filters } from '../../Model/Filters';
import Icon from 'react-native-vector-icons/FontAwesome5';

export namespace RendezVousMainScreen {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
        todosState: ImmutableTodoState;
        todosActions: TodoActions;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        filteredTodos: Todo[];
        todoCategories: TodoCategory[];
        search: string | null;
        filters: Filters;
    }
}

export class RendezVousMainScreen extends React.Component<RendezVousMainScreen.Props, RendezVousMainScreen.State> {
    constructor(props: RendezVousMainScreen.Props) {
        super(props);

        const categories: TodoCategory[] = [
            { title: I18n.t(['RendezVousMainScreen', 'athleticsCategoryLabel']), color: Colors.colors.randezvousOrange, icon: 'dumbbell' },
            { title: I18n.t(['RendezVousMainScreen', 'socialCategoryLabel']), color: Colors.colors.rendezvousBlue, icon: 'users' },
            { title: I18n.t(['RendezVousMainScreen', 'educationCategoryLabel']), color: Colors.colors.rendezvousPink, icon: 'university' },
            { title: I18n.t(['RendezVousMainScreen', 'foodCategoryLabel']), color: Colors.colors.rendezvousGreen, icon: 'carrot' }
        ];

        this.state = {
            filteredTodos: [],
            todoCategories: categories,
            search: null,
            filters: { filterByCompletedTasks: true, filterByPendingTasks: true }
        };
    }

    componentDidMount() {
        this.filterTodos(this.props.todosState.todos);
    }

    componentWillReceiveProps = (newProps: RendezVousMainScreen.Props) => {
        this.filterTodos(newProps.todosState.todos);
    };

    resetFilters = () => {
        this.setState({
            filters: { filterByPendingTasks: true, filterByCompletedTasks: true },
            search: null
        });
    };

    filterTodos = (todos: Todo[]) => {
        const search = this.state.search ? this.state.search : '';

        const filteredTodos: Todo[] = Object.assign([], todos).filter((todo: Todo) => {
            return (this.state.filters.filterByCompletedTasks && todo.isChecked) || (this.state.filters.filterByPendingTasks && !todo.isChecked);
        });

        const searchFilteredTodods = filteredTodos.filter((todo: Todo) => {
            const title = (todo.title ? todo.title : '').toLocaleLowerCase();
            const description = (todo.description ? todo.description : '').toLocaleLowerCase();

            return title.includes(search) || description.includes(search);
        });

        searchFilteredTodods.push({});
        this.setState({
            filteredTodos: searchFilteredTodods
        });
    };

    onFiltersPressed = () => {
        this.props.navigation.push('FiltersScreen', { onFiltersUpdate: this.onFiltersUpdate, filters: this.state.filters });
    };

    onFiltersUpdate = (newFilters: Filters) => {
        this.setState(
            {
                filters: newFilters
            },
            () => {
                this.filterTodos(this.props.todosState.todos);
            }
        );
    };

    onTodoChecked = (checked: boolean, todoIndex: number) => {
        const updatedTodos: Todo[] = Object.assign([], this.state.filteredTodos);
        updatedTodos[todoIndex] = {
            ...updatedTodos[todoIndex],
            isChecked: checked
        };
        this.props.todosActions.editTodo(updatedTodos[todoIndex]);
    };

    onTodoEditPress = (todoAux: Todo) => {
        this.props.navigation.push('EditTodoScreen', { todo: todoAux, todoCategories: this.state.todoCategories });
    };

    onTodoDeletePressed = (todo: Todo) => {
        this.props.todosActions.deleteTodo(todo);
    };

    onAddTodoPressed = () => {
        this.props.navigation.push('EditTodoScreen', { todoCategories: this.state.todoCategories });
    };

    onSearchTextChanged = (search: string) => {
        _.debounce(() => {
            const lowercasedSearch = search.toLocaleLowerCase();

            this.setState({
                search: lowercasedSearch
            });

            this.filterTodos(this.props.todosState.todos);
        }, 500)();
    };

    renderTodo = (item: ListRenderItemInfo<Todo>) => {
        if (item.item.id === undefined) {
            return (
                <TouchableOpacity onPress={this.onAddTodoPressed} style={[styles.shadowView2, styles.centeredColumn, styles.addTodoButton]}>
                    <Icon name={'plus-circle'} style={styles.addTodoButtonText} />
                </TouchableOpacity>
            );
        }
        return (
            <TodoCard
                todo={item.item}
                index={item.index}
                onTodoChecked={this.onTodoChecked}
                onEditTodoPressed={this.onTodoEditPress}
                onTodoDeletePressed={this.onTodoDeletePressed}
            />
        );
    };

    render() {
        return (
            <View style={[styles.fullContainer, styles.smallPadding]}>
                <View style={[styles.centeredRow, styles.paddingHorizontal]}>
                    <SearchField onChangeText={this.onSearchTextChanged} />
                    <ImageButton style={styles.marginLeft} onPress={this.onFiltersPressed} iconName={'bars'} />
                </View>
                <FlatList
                    keyExtractor={(item: Todo) => (item.id ? item.id : '')}
                    style={[styles.smallMarginTop, styles.flex1]}
                    data={this.state.filteredTodos}
                    extraData={this.state}
                    renderItem={this.renderTodo}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: RootState): Pick<RendezVousMainScreen.Props, 'todosState'> => ({
    todosState: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>): Pick<RendezVousMainScreen.Props, 'todosActions'> => {
    return {
        todosActions: bindActionCreators(TodoActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RendezVousMainScreen);
