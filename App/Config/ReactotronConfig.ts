import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import ImmutableObject from 'seamless-immutable';
import Config from '../Config/DebugConfig';

if (Config.useReactotron) {
    Reactotron.configure({ name: 'App' })
        .useReactNative()
        .use(reduxPlugin({ onRestore: ImmutableObject }))
        .use(sagaPlugin())
        .connect();

    Reactotron.clear();

    const noop = () => undefined;

    if (__DEV__) {
        console.tron = Reactotron;
    } else {
        console.tron = {
            configure: noop,
            connect: noop,
            use: noop,
            useReactNative: noop,
            clear: noop,
            log: noop,
            logImportant: noop,
            display: noop,
            error: noop
        };
    }
}
