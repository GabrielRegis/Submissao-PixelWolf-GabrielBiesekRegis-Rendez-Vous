import { createAction } from 'redux-actions';
import { StartupTypes } from './types';

const actions = {
    startup: createAction(StartupTypes.STARTUP)
};

export const StartupActions = actions;
