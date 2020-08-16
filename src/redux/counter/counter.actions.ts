// Let's write type-safe action using
// type-safe action library
import { action } from 'typesafe-actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './counter.interfaces';

const incrementCounter = () => action(INCREMENT_COUNTER);

const decrementCounter = () => action(DECREMENT_COUNTER);

const resetCounter = () => action(RESET_COUNTER);

// examples for data return action creators
// export const loadDataSuccess = (data: Array<object>) =>
//   action(ActionTypes.LOAD_DATA_SUCCESS, data);

// export const failure = (error: object) => action(ActionTypes.FAILURE, error);

export { incrementCounter, decrementCounter, resetCounter };
