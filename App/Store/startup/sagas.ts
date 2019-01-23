import { is } from 'ramda';
import Reactotron from 'reactotron-react-native';
import { Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

export function* startup(action?: Action): SagaIterator {
    NavigationActions.navigate({
        routeName: 'MenuScreen',
        params: {}
    });
}
