import { createAction } from 'redux-actions';
import { TodoActionType } from './types';
import { Todo } from '../../Model/Todo';

export const TodoActions = {
    addTodo: createAction<Todo>(TodoActionType.ADD_TODO),
    editTodo: createAction<Todo>(TodoActionType.EDIT_TODO),
    deleteTodo: createAction<Todo>(TodoActionType.DELETE_TODO)
};
export type TodoActions = typeof TodoActions;
