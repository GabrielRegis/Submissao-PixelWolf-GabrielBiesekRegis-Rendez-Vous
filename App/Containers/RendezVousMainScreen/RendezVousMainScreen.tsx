import * as React from 'react';
import { View, TextInput } from 'react-native';
import { LoginActions } from '../../Store/login/actions';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../Store/state';
import styles from './RendezVousMainScreenStyles';

export namespace Login {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {}

    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}
export default class RendezVousMainScreen extends React.Component<Login.Props, Login.State> {
    constructor(props: Login.Props, context?: any) {
        super(props, context);
        this.state = {};
    }

    componentWillReceiveProps(newProps: Login.Props) {
        //
    }

    public render() {
        return (
            <View style={[styles.fullContainer, styles.padding]}>
                <View style={styles.centeredRow}>
                    <TextInput />
                </View>
            </View>
        );
    }
}

// const mapStateToProps = (state: RootState): Pick<Login.Props, 'login'> => ({
//     login: state.login
// });

// const mapDispatchToProps = (dispatch: Dispatch<RootState>): Pick<Login.Props, 'actions'> => {
//     return {
//         actions: bindActionCreators(LoginActions, dispatch)
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LoginScreen);
