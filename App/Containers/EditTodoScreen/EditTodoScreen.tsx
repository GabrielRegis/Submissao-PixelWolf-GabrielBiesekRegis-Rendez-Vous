import * as React from 'react';
import { View, Text, TextStyle, TouchableOpacity, BackHandler } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './EditTodoScreenStyles';
import { Todo } from '../../Model/Todo';
import { TodoCategory } from '../../Model/TodoCategory';
import uuid from 'react-native-uuid';
import { NavigationScreenProp } from 'react-navigation';
import ImageButton from '../../Components/ImageButton/ImageButton';
import LabeledTextField from '../../Components/LabeledTextField/LabeledTextField';
import * as Animatable from 'react-native-animatable';
import { ImmutableTodoState } from '../../Store/todos/state';
import { TodoActions } from '../../Store/todos/actions';
import { RootState } from '../../Store/state';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import DatePicker from 'react-native-date-picker';
import I18n from '../../I18n/I18n';

export namespace EditTodoScreen {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
        todosState: ImmutableTodoState;
        todosActions: TodoActions;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        updatedTodo: Todo;
        isEditingTodo: boolean;
        todoCategories: TodoCategory[];
        titleError: boolean;
        date: Date;
    }
}

export class EditTodoScreen extends React.Component<EditTodoScreen.Props, EditTodoScreen.State> {
    constructor(props: EditTodoScreen.Props, context?: any) {
        super(props, context);

        const categories = this.props.navigation.getParam('todoCategories', []);
        const todo: Todo = this.props.navigation.getParam('todo', { id: uuid.v1(), category: categories[0], date: new Date() });

        this.state = {
            isEditingTodo: todo.title !== null && todo.title !== undefined,
            updatedTodo: todo,
            todoCategories: categories,
            date: todo.date ? new Date(todo.date.toString()) : new Date(),
            titleError: false
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack = () => {
        this.onOkPressed();
        return true;
    };

    onTitleChanged = (titleAux: string) => {
        this.setState({
            updatedTodo: {
                ...this.state.updatedTodo,
                title: titleAux
            },
            titleError: false
        });
    };

    onDescriptionChanged = (descriptionAux: string) => {
        this.setState({
            updatedTodo: {
                ...this.state.updatedTodo,
                description: descriptionAux
            }
        });
    };

    onCategoryChangePressed = () => {
        if (this.state.updatedTodo.category) {
            const currentTodoCategory = this.state.updatedTodo.category;
            const realCurrentCategory = this.state.todoCategories.find((category: TodoCategory) => {
                return category.title === currentTodoCategory.title;
            });
            const currentCategoryIndex = this.state.todoCategories.indexOf(realCurrentCategory ? realCurrentCategory : {});
            const nextCategory = this.state.todoCategories[(currentCategoryIndex + 1) % this.state.todoCategories.length];
            this.setState({
                updatedTodo: {
                    ...this.state.updatedTodo,
                    category: nextCategory
                }
            });
        }
    };

    onOkPressed = () => {
        if (!this.state.updatedTodo.title) {
            this.setState({
                titleError: true
            });
            return;
        }

        if (this.state.isEditingTodo) {
            this.props.todosActions.editTodo(this.state.updatedTodo);
            this.props.navigation.pop();
            return;
        }
        this.props.todosActions.addTodo(this.state.updatedTodo);
        this.props.navigation.pop();
    };

    onDeletePressed = () => {
        if (this.state.isEditingTodo) {
            this.props.todosActions.deleteTodo(this.state.updatedTodo);
        }
        this.props.navigation.pop();
    };

    onDateChanged = (dateAux: Date) => {
        this.setState({
            updatedTodo: {
                ...this.state.updatedTodo,
                date: dateAux
            },
            date: dateAux
        });
    };

    public render() {
        const category = this.state.updatedTodo.category ? this.state.updatedTodo.category : {};

        return (
            <View style={styles.mainContainer}>
                <View style={[styles.centeredRow, styles.padding, styles.navbar, { backgroundColor: category.color }]}>
                    <Text style={styles.navbarText}>{category.title}</Text>
                    <View style={styles.leftAlignedRow}>
                        <ImageButton onPress={this.onDeletePressed} style={styles.marginLeft} iconStyle={[styles.navbarIconButton]} iconName={'trash-alt'} />
                        <ImageButton onPress={this.onOkPressed} style={styles.marginLeft} iconStyle={[styles.navbarIconButton]} iconName={'check'} />
                    </View>
                </View>
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer} style={[styles.fullContainer, styles.padding]}>
                    <View style={[styles.centeredRow]}>
                        <LabeledTextField
                            style={styles.flex3}
                            value={this.state.updatedTodo.title}
                            onTextChanged={this.onTitleChanged}
                            color={category.color}
                            label={I18n.t(['EditTodoScreen', 'titleLabel'])}
                            error={this.state.titleError}
                            maxLength={50}
                        />
                        <Animatable.View duration={400} iterationCount={4} delay={400} animation={'pulse'} style={styles.centeredColumn}>
                            <ImageButton
                                onPress={this.onCategoryChangePressed}
                                style={styles.marginLeft}
                                iconStyle={[styles.iconButton, { color: category.color } as TextStyle]}
                                iconName={category.icon}
                            />
                        </Animatable.View>
                    </View>
                    <LabeledTextField
                        value={this.state.updatedTodo.description}
                        onTextChanged={this.onDescriptionChanged}
                        color={category.color}
                        label={I18n.t(['EditTodoScreen', 'descriptionLabel'])}
                        maxLength={100}
                    />
                    <DatePicker
                        fadeToColor={'none'}
                        textColor={category.color}
                        style={styles.datePicker}
                        locale={'pt'}
                        date={this.state.date}
                        onDateChange={this.onDateChanged}
                    />
                    <View style={styles.centeredRow}>
                        <TouchableOpacity
                            onPress={this.onOkPressed}
                            style={[styles.centeredRow, styles.saveButton, styles.xSmallMarginTop, { backgroundColor: category.color }]}>
                            <Text style={styles.saveButtonText}>{I18n.t(['EditTodoScreen', 'saveLabel'])}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState): Pick<EditTodoScreen.Props, 'todosState'> => ({
    todosState: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>): Pick<EditTodoScreen.Props, 'todosActions'> => {
    return {
        todosActions: bindActionCreators(TodoActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodoScreen);
