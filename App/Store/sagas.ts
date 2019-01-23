import { all, takeLatest } from 'redux-saga/effects';
import { StartupActions } from './startup';
import { startup } from './startup/sagas';

export default function* rootSagas() {
    yield all([takeLatest(StartupActions.startup, startup)]);
}
