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

    console.tron = Reactotron;
}