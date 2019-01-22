declare module 'reduxsauce' {
    import { AnyAction, Reducer } from 'redux';

    export interface Actions {
        [action: string]: string[] | null;
    }

    export interface ActionTypes {
        [action: string]: string;
    }

    export interface ActionCreators {
        [action: string]: (...args: any[]) => AnyAction;
    }

    export interface Handlers<S> {
        [action: string]: (state: S, action: ActionOf<any>) => S;
    }

    interface Options {
        prefix: string;
    }

    interface CreatedActions {
        Types: ActionTypes;
        Creators: ActionCreators;
    }

    export interface Action {
        type: string;
    }
    export interface ActionOf<T> extends Action {
        payload: T;
    }

    export interface RootActionOf<T> extends Action {
        payload: T;
    }

    export function createReducer<S>(initialState: object, handlers: Handlers<S>): Reducer<S>;
    export function createTypes(types: string, options?: Options): ActionTypes;
    export function createActions(actions: Actions, options?: Options): CreatedActions;
}
