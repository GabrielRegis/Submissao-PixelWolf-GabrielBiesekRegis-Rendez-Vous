import * as React from 'react';
import { Provider } from 'react-redux';
import '../Config';
import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';
import { createApplicationStore } from '../Store/reducers';

export const AppStore = createApplicationStore();

class App extends React.Component {
    public render() {
        return (
            <Provider store={AppStore}>
                <RootContainer />
            </Provider>
        );
    }
}
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);


