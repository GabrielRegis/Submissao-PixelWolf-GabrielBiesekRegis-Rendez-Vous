import { AnyAction, Reducer } from 'redux';
import { createReducer } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';
import { ImmutableTodoState, TodoState } from './state';
import { TodoActionType } from './types';
import { Todo } from '../../Model/Todo';

const INITIAL_STATE: ImmutableTodoState = Immutable.from<TodoState>({
    todos: []
});

const addTodo: Reducer<ImmutableTodoState> = (state: ImmutableTodoState, { payload }: AnyAction & { payload?: Todo }) => {
    if (payload) {
        const updatedTodos = state.todos.concat([payload]);
        return state.merge({ todos: updatedTodos });
    }

    return state;
};

const editTodo: Reducer<ImmutableTodoState> = (state: ImmutableTodoState, { payload }: AnyAction & { payload?: Todo }) => {
    if (payload) {
        const todoIndex = state.todos.findIndex((todo: Todo) => {
            return todo.id === payload.id;
        });

        console.tron.log(todoIndex);

        if (todoIndex !== -1) {
            const updatedTodos: Todo[] = Object.assign([], state.todos);
            updatedTodos[todoIndex] = payload;
            return state.merge({ todos: updatedTodos });
        }
    }

    return state;
};

const deleteTodo: Reducer<ImmutableTodoState> = (state: ImmutableTodoState, { payload }: AnyAction & { payload?: Todo }) => {
    if (payload) {
        const filteredTodos = state.todos.filter((todo: Todo) => {
            return todo.id !== payload.id;
        });
        return state.merge({ todos: filteredTodos });
    }

    return state;
};

const TodoReducer = createReducer<ImmutableTodoState>(INITIAL_STATE, {
    [TodoActionType.ADD_TODO]: addTodo,
    [TodoActionType.EDIT_TODO]: editTodo,
    [TodoActionType.DELETE_TODO]: deleteTodo
});

export default TodoReducer;
