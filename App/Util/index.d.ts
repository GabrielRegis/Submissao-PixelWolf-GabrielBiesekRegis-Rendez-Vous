import { Action, AnyAction, Reducer, ReducersMapObject } from 'redux';
export interface ActionTypes {
    [key: string]: string;
}

export interface ActionConfig {
    [key: string]: string[] | ActionCreator | {[key: string]: any} | null;
}

export type ActionCreator = (...args: any[]) => Action;

export interface ActionCreators {
    [key: string]: ActionCreator;
}

export function createActions(config: ActionConfig, options?: {prefix?: string}): {Types: ActionTypes, Creators: ActionCreators };

/**
 * Creates a reducer.
 * @param {object} initialState - The initial state for this reducer.
 * @param {object} handlers - Keys are action types (strings), values are reducers (functions).
 * @return {Reducer<S>} A reducer object.
 */
export function createReducer<S>(initialState: S, handlers: ReducersMapObject): Reducer<S>;

export function createTypes(types: string, options?: {prefix?: string, [key: string]: any}): ActionTypes;

/**
 * Allows your reducers to be reset.
 *
 * @param {string} typeToReset - The action type to listen for.
 * @param {Reducer<T>} originalReducer - The reducer to wrap.
 */
export function resettableReducer<S>(type: string, originalReducer: Reducer<S>): Reducer<S>;

export function resettableReducer<S>(type: string): (originalReducer: Reducer<S>) => Reducer<S>;

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;