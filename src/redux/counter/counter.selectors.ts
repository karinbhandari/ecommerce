import { createSelector } from 'reselect';
import { AppStateType } from '../types.d';

const selectCounter = (state: AppStateType) => {
  return state.counter;
};

const getCount = createSelector(
  [selectCounter],
  (counter: AppStateType['counter']): number => counter.count
);

export { getCount };
