import * as React from 'react';
import { View } from 'react-native';

import styles from './LaunchScreenStyles';

export namespace Launch {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {}

    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}

export class LaunchScreen extends React.Component<Launch.Props, Launch.State> {
    constructor(props: Launch.Props, context?: any) {
        super(props, context);
    }

    public render() {
        return <View style={styles.mainContainer}>{/*  */}</View>;
    }
}

// const mapStateToProps = (state: RootState): Pick<Launch.Props, 'login'> => ({
//     login: state.login
// });

// const mapDispatchToProps = (dispatch: Dispatch<RootState>): Pick<Launch.Props, 'actions'> => {
//     return {
//         actions: bindActionCreators(LoginActions, dispatch)
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
