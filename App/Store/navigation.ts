import { NavigationAction, NavigationState } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { RootState } from './state';
import AppNavigation from '../Navigation/AppNavigation';

export const navMiddleware = createReactNavigationReduxMiddleware('root', (state: RootState) => state.nav);
export const addListener = createReduxBoundAddListener('root');

export const NavigationReducer = (state: NavigationState, action: NavigationAction) => {
    const newState = AppNavigation.router.getStateForAction(action, state);
    return newState || state;
};

export type NavigationState = NavigationState;
