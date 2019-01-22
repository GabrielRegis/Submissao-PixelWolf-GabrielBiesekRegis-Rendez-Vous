import { createAction } from 'redux-actions';
import { LoginActionType } from './types';
import { Omit } from 'react-redux';
import { Authentication } from '../../Model/Authentication';

export const LoginActions = {
    check: createAction(LoginActionType.CHECK_TOKEN),

    checkTokenSuccess: createAction(LoginActionType.CHECK_TOKEN_SUCCESS),

    login: createAction<Omit<Authentication, 'token'>>(LoginActionType.LOGIN),

    loginSuccess: createAction<Omit<Authentication, 'password'>>(LoginActionType.LOGIN_SUCCESS),

    loginError: createAction(LoginActionType.LOGIN_ERROR)
};
export type LoginActions = typeof LoginActions;