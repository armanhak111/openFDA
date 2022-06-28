import { createSelector } from 'reselect';

import { TState } from '../types';

const main = (state: TState) => state.main;

export const getLoadingState = createSelector(main, (items) => items.loading);
export const getCurrentMode = createSelector(main, (items) => items.currentMode);
export const getCurrentData = createSelector(main, (items) => items.data);
