import { LoginActions } from './actions';
import { put, call } from 'redux-saga/effects';
import { ActionOf } from 'reduxsauce';
import { ApiResponse } from 'apisauce';
import { Authentication } from '../../Model/Authentication';
import { SagaIterator } from 'redux-saga';
import { setAuthToken } from '../../Services/Api/index';

// export function* login(action: ActionOf<Authentication>): SagaIterator {
//     const response: ApiResponse<Authentication> = yield call(authentication.login, action.payload);
//     if (response.ok) {
//         setAuthToken(String(response.data!.id_token));
//     }

//     response.ok ? yield put(LoginActions.loginSuccess(response.data!)) : yield put(LoginActions.loginError());
// }
