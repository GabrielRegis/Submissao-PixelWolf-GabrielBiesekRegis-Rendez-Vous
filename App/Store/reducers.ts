/// <reference types="@types/webpack-env" />
import { combineReducers, Reducer } from 'redux';
import rootSagas from './sagas';
import { NavigationReducer } from './navigation';
import configureStore from './store';
import { RootState } from './state';
import TodoReducer from './todos/reducers';
export const reducers: Reducer<RootState> = combineReducers<RootState>({
    nav: NavigationReducer,
    todos: TodoReducer
});

export const createApplicationStore = () => {
    // tslint:disable-next-line:prefer-const
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSagas);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('./sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas);
            });
        });
    }

    return store;
};
