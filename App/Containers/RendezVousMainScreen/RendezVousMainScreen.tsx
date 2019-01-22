import * as React from 'react';
import { View, Text, ListRenderItemInfo, FlatList } from 'react-native';
import { LoginActions } from '../../Store/login/actions';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../Store/state';
import styles from './RendezVousMainScreenStyles';
import ImageButton from '../../Components/ImageButton/ImageButton';
import SearchField from '../../Components/SearchField/SearchField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Todo } from '../../Model/Todo';
import { TodoCategory } from '../../Model/TodoCategory';
import { Colors } from '../../Themes';
import I18n from '../../I18n/I18n';
import moment from 'moment';
import Interactable from 'react-native-interactable';

export namespace Login {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {}

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        todos: Todo[];
    }
}

export default class RendezVousMainScreen extends React.Component<Login.Props, Login.State> {
    constructor(props: Login.Props, context?: any) {
        super(props, context);

        const categories: TodoCategory[] = [
            { title: I18n.t(['RendezVousMainScreen', 'athleticsCategoryLabel']), color: Colors.colors.randezvousOrange, icon: 'dumbbell' },
            { title: I18n.t(['RendezVousMainScreen', 'socialCategoryLabel']), color: Colors.colors.rendezvousBlue, icon: 'users' },
            { title: I18n.t(['RendezVousMainScreen', 'educationCategoryLabel']), color: Colors.colors.rendezvousPink, icon: 'university' },
            { title: I18n.t(['RendezVousMainScreen', 'foodCategoryLabel']), color: Colors.colors.rendezvousGreen, icon: 'carrot' }
        ];

        this.state = {
            todos: [
                {
                    id: '1',
                    title: 'Minha todo',
                    description: 'Fazer unhas Fazer unhas Fazer unhas Fazer unhas Fazer unhas',
                    date: new Date(),
                    category: categories[0],
                    isChecked: false
                },
                { id: '2', title: 'Minha todo', description: 'Fazer unhas', date: new Date(), category: categories[1], isChecked: false },
                { id: '3', title: 'Minha todo', description: 'Fazer unhas', date: new Date(), category: categories[2], isChecked: false },
                { id: '4', title: 'Minha todo', description: 'Fazer unhas', date: new Date(), category: categories[3], isChecked: false }
            ]
        };
    }

    componentWillReceiveProps(newProps: Login.Props) {
        //
    }

    onFiltersPressed = () => {
        //
    };

    onTodoChecked = (checked: boolean, todo: ListRenderItemInfo<Todo>) => {
        const updatedTodos = this.state.todos;
        updatedTodos[todo.index].isChecked = checked;

        console.tron.log(updatedTodos);

        this.setState({
            todos: updatedTodos
        });
    };

    onTodoEditPress = (todo: Todo) => {
        //
    };

    onTodoDeletePressed = (todo: Todo) => {
        const updatedTodos = this.state.todos.filter((todoAux: Todo) => {
            return todo.id !== todoAux.id;
        });

        this.setState({
            todos: updatedTodos
        });
    };

    renderTodo = (item: ListRenderItemInfo<Todo>) => {
        if (item.item.id === '') {
            //
        }

        const categoryIcon = item.item.category && item.item.category.icon ? item.item.category.icon : 'carrot';
        const todoDate = item.item.date ? moment(item.item.date).format('HH:mm - DD/MM/YY') : '';
        const categoryColor = item.item.category && item.item.category.color ? item.item.category.color : 'white';
        const componentsCategoryAndStatusStyle = {
            color: categoryColor,
            opacity: item.item.isChecked ? 0.5 : 1,
            textDecorationLine: item.item.isChecked ? 'line-through' : 'none'
        };

        return (
            <View style={[styles.shadowView2, styles.todoContainer, { backgroundColor: categoryColor }]}>
                <View style={[styles.positionAbsolute, styles.centeredRow, styles.leftAlignedRow, styles.padding]}>
                    <ImageButton onPress={() => this.onTodoDeletePressed(item.item)} iconName="trash" />
                    <ImageButton style={styles.marginLeft} iconName="pencil" />
                </View>
                <Interactable.View horizontalOnly={true} snapPoints={[{ x: 0 }, { x: 150 }]} style={styles.todoContainer}>
                    <View style={styles.todoLeftContainer}>
                        <View style={[styles.marker, { backgroundColor: categoryColor }]} />
                        <View style={[styles.leftAlignedColumn, styles.marginLeft]}>
                            <Text style={[styles.todoTitleText, componentsCategoryAndStatusStyle]}>{item.item.title}</Text>
                            <Text style={[styles.todoDateText, styles.xSmallMarginTop, componentsCategoryAndStatusStyle]}>{item.item.description}</Text>
                            <Text style={[styles.todoDateText, styles.xSmallMarginTop, componentsCategoryAndStatusStyle]}>{todoDate}</Text>
                        </View>
                    </View>
                    <View style={[styles.todoRightContainer, styles.marginRight]}>
                        <Icon style={[styles.todoCategoryIcon, componentsCategoryAndStatusStyle]} name={categoryIcon} />
                        <Checkbox onCheckedChanged={(checked) => this.onTodoChecked(checked, item)} style={styles.marginLeft} color={categoryColor} />
                    </View>
                </Interactable.View>
            </View>
        );
    };

    public render() {
        return (
            <View style={[styles.fullContainer, styles.smallPadding]}>
                <View style={[styles.centeredRow, styles.paddingHorizontal]}>
                    <SearchField />
                    <ImageButton style={styles.marginLeft} onPress={this.onFiltersPressed} iconName={'filter'} />
                </View>
                <FlatList
                    keyExtractor={(item: Todo, index: number) => index.toString()}
                    style={styles.smallMarginTop}
                    data={this.state.todos}
                    extraData={this.state}
                    renderItem={this.renderTodo}
                />
            </View>
        );
    }
}

// const mapStateToProps = (state: RootState): Pick<Login.Props, 'login'> => ({
//     login: state.login
// });

// const mapDispatchToProps = (dispatch: Dispatch<RootState>): Pick<Login.Props, 'actions'> => {
//     return {
//         actions: bindActionCreators(LoginActions, dispatch)
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LoginScreen);
