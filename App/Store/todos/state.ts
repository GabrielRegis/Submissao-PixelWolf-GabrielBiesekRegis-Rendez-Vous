import { ImmutableObject } from 'seamless-immutable';
import { Todo } from '../../Model/Todo';

export interface TodoState {
    todos: Todo[];
}

export type ImmutableTodoState = ImmutableObject<TodoState>;
