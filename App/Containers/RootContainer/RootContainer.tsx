import * as React from 'react';
import { StatusBar, View } from 'react-native';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import styles from './RootContainerStyles';

// tslint:disable-next-line:no-empty-interface
interface Props {}

// tslint:disable-next-line:no-empty-interface
interface State {}

export default class RootContainer extends React.Component<Props, State> {
    public render() {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle="light-content" />
                <ReduxNavigation />
            </View>
        );
    }
}
