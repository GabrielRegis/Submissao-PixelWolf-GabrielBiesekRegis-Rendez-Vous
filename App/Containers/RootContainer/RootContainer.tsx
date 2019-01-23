import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import ReduxPersist from '../../Config/ReduxPersist';
import ReduxNavigation from '../../Navigation/ReduxNavigation';

import styles from './RootContainerStyles';
import { StartupActions } from '../../Store/startup';

interface Props {
    startup: () => void;
}

// tslint:disable-next-line:no-empty-interface
interface State {}

export class RootContainer extends React.Component<Props, State> {
    public componentDidMount() {
        if (!ReduxPersist.active) {
            this.props.startup();
        }
    }

    public render() {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle="light-content" />
                <ReduxNavigation />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch: any): Props => ({
    startup: () => dispatch(StartupActions.startup())
});

export default connect(
    null,
    mapDispatchToProps
)(RootContainer);
