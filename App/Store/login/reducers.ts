import { AnyAction, Reducer } from 'redux';
import { createReducer } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';
import { ImmutableLoginState, LoginState } from './state';
import { LoginActionType } from './types';
import { HttpRequestStatus } from '../../Model/HttpRequestStatus';
import { Authentication } from '../../Model/Authentication';

const INITIAL_STATE: ImmutableLoginState = Immutable.from<LoginState>({
    status: HttpRequestStatus.NOOP
});

const check: Reducer<ImmutableLoginState> = (state: ImmutableLoginState) => state;

const checkTokenSuccess: Reducer<ImmutableLoginState> = (state: ImmutableLoginState, { payload }: AnyAction & { payload?: Authentication }) => {
    return payload ? state.merge({ status: HttpRequestStatus.ONGOING, username: payload.username }) : state;
};

const login: Reducer<ImmutableLoginState> = (state: ImmutableLoginState, { payload }: AnyAction & { payload?: Authentication }) => {
    return payload ? state.merge({ status: HttpRequestStatus.ONGOING, username: payload.username }) : state;
};

const loginSuccess: Reducer<ImmutableLoginState> = (state: ImmutableLoginState, {  }: AnyAction & { payload?: Authentication }) => {
    return state.merge({ status: HttpRequestStatus.SUCCESS });
};

const loginError: Reducer<ImmutableLoginState> = (state: ImmutableLoginState) => {
    return state.merge({ status: HttpRequestStatus.ERROR });
};

const LoginReducer = createReducer<ImmutableLoginState>(INITIAL_STATE, {
    [LoginActionType.CHECK_TOKEN]: check,
    [LoginActionType.CHECK_TOKEN_SUCCESS]: checkTokenSuccess,
    [LoginActionType.LOGIN]: login,
    [LoginActionType.LOGIN_SUCCESS]: loginSuccess,
    [LoginActionType.LOGIN_ERROR]: loginError
});

export default LoginReducer;
