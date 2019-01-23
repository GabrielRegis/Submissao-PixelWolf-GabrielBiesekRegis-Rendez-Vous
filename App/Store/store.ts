import { applyMiddleware, compose, createStore, Reducer, Middleware, GenericStoreEnhancer, StoreCreator, Store } from 'redux';
import sagaMiddlewareFactory, { Monitor, SagaIterator, SagaMiddleware } from 'redux-saga';
import Config from '../Config/DebugConfig';
import { RootState } from './state';
import { navMiddleware } from './navigation';
import ReduxPersist from '../Config/ReduxPersist';
import RehydrationServices from '../Services/RehydrationServices';
import { autoRehydrate } from 'redux-persist';

export default (rootReducer: Reducer<RootState>, rootSaga: () => SagaIterator) => {
    const middleware: Middleware[] = [];
    const enhancers: GenericStoreEnhancer[] = [];

    let opts = {};
    if (Config.useReactotron) {
        const sagaMonitor: Monitor = console.tron.createSagaMonitor();
        opts = { sagaMonitor };
    }

    const sagaMiddleware: SagaMiddleware<Monitor> = sagaMiddlewareFactory(opts);

    middleware.push(sagaMiddleware);
    middleware.push(navMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    if (ReduxPersist.active) {
        enhancers.push(autoRehydrate());
    }

    const createAppropriateStore: StoreCreator = Config.useReactotron ? console.tron.createStore : createStore;

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store: Store<RootState> = createAppropriateStore(rootReducer, composeEnhancers(...enhancers));

    if (ReduxPersist.active) {
        RehydrationServices.updateReducers(store);
    }

    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware
    };
};
