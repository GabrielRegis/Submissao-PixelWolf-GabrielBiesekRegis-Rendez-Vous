import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TodoCardStyles';
import ImageButton from '../ImageButton/ImageButton';
import Interactable from 'react-native-interactable';
import { Todo } from '../../Model/Todo';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Checkbox from '../Checkbox/Checkbox';
import * as Animatable from 'react-native-animatable';

export namespace TodoCard {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        onTodoDeletePressed: (todo: Todo) => void;
        onEditTodoPressed: (todo: Todo) => void;
        onTodoChecked: (checked: boolean, todoIndex: number) => void;
        index: number;
        todo: Todo;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        isOpened: boolean;
    }
}

export default class TodoCard extends React.Component<TodoCard.Props, TodoCard.State> {
    animatableView: Animatable.View | null = null;
    constructor(props: TodoCard.Props, context?: any) {
        super(props, context);
        this.state = {
            isOpened: false
        };
    }

    componentDidMount() {
        if (this.animatableView && this.animatableView.zoomIn) {
            this.animatableView.zoomIn(400);
        }
    }

    onDeletePressed = () => {
        if (this.animatableView && this.animatableView.fadeOut) {
            this.animatableView.fadeOut(300).then(() => {
                this.props.onTodoDeletePressed(this.props.todo);
            });
        }
    };

    onTodoPressed = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    public render() {
        const categoryIcon = this.props.todo.category && this.props.todo.category.icon ? this.props.todo.category.icon : 'carrot';
        const todoDate = this.props.todo.date ? moment(this.props.todo.date).format('HH:mm - DD/MM/YY') : '';
        const categoryColor = this.props.todo.category && this.props.todo.category.color ? this.props.todo.category.color : 'white';
        const componentsCategoryAndStatusStyle = {
            color: categoryColor,
            opacity: this.props.todo.isChecked ? 0.5 : 1,
            textDecorationLine: this.props.todo.isChecked ? 'line-through' : 'none'
        };

        return (
            <Animatable.View
                ref={(ref) => (this.animatableView = ref)}
                duration={200}
                transition={'height'}
                style={[
                    styles.shadowView2,
                    styles.todoContainer,
                    styles.mainTodoContainer,
                    { backgroundColor: categoryColor },
                    { height: this.state.isOpened ? 120 : 90 }
                ]}>
                <View style={[styles.positionAbsolute, styles.centeredRow, styles.leftAlignedRow, styles.padding]}>
                    <ImageButton onPress={this.onDeletePressed} iconName="trash-alt" />
                    <ImageButton onPress={() => this.props.onEditTodoPressed(this.props.todo)} style={styles.marginLeft} iconName="pencil-alt" />
                </View>
                <Interactable.View horizontalOnly={true} snapPoints={[{ x: 0 }, { x: 150 }]}>
                    <Animatable.View duration={200} transition={'height'} style={[styles.todoContainer, { height: this.state.isOpened ? 120 : 90 }]}>
                        <View style={styles.todoLeftContainer}>
                            <View style={[styles.marker, { backgroundColor: categoryColor }]} />
                            <TouchableOpacity onPress={this.onTodoPressed}>
                                <View style={[styles.leftAlignedColumn, styles.marginLeft]}>
                                    <Text style={[styles.todoTitleText, componentsCategoryAndStatusStyle]}>{this.props.todo.title}</Text>
                                    <Animatable.Text
                                        duration={250}
                                        transition={['opacity', 'height']}
                                        style={[
                                            styles.todoDateText,
                                            styles.xSmallMarginTop,
                                            componentsCategoryAndStatusStyle,
                                            { opacity: this.state.isOpened ? 1 : 0, height: this.state.isOpened ? 20 : 0 }
                                        ]}>
                                        {this.props.todo.description}
                                    </Animatable.Text>
                                    <Text style={[styles.todoDateText, styles.xSmallMarginTop, componentsCategoryAndStatusStyle]}>{todoDate}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.todoRightContainer, styles.marginRight]}>
                            <Icon style={[styles.todoCategoryIcon, componentsCategoryAndStatusStyle]} name={categoryIcon} />
                            <Checkbox
                                isChecked={this.props.todo.isChecked}
                                onCheckedChanged={(checked) => this.props.onTodoChecked(checked, this.props.index)}
                                style={styles.marginLeft}
                                color={categoryColor}
                            />
                        </View>
                    </Animatable.View>
                </Interactable.View>
            </Animatable.View>
        );
    }
}
