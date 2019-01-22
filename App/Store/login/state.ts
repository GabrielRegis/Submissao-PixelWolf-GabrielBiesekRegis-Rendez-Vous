import { HttpRequestStatus } from '../../Model/HttpRequestStatus';
import { ImmutableObject } from 'seamless-immutable';

export interface LoginState {
    username?: string | null;
    password?: string | null;
    status?: HttpRequestStatus | null;
    token?: string | null;
}

export type ImmutableLoginState = ImmutableObject<LoginState>;
