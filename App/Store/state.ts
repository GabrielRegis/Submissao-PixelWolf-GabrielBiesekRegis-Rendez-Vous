import { NavigationState } from './navigation';
import { ImmutableTodoState } from './todos/state';

export interface RootState {
    nav: NavigationState;
    todos: ImmutableTodoState;
}
