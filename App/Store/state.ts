import { NavigationState } from './navigation';
import { ImmutableLoginState } from './login/state';

export interface RootState {
    login: ImmutableLoginState;
    nav: NavigationState;
}
