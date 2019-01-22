import * as React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';
import { RootState } from '../Store/state';
import { addListener } from '../Store/navigation';

function ReduxNavigation(props: any) {
    const { dispatch, nav } = props;
    const navigation = ReactNavigation.addNavigationHelpers({
        dispatch,
        state: nav,
        addListener
    });

    return <AppNavigation navigation={navigation} />;
}

const mapStateToProps = (state: RootState) => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
