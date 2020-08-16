import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './counter.interfaces';
import { AppState } from '../rootReducer';
import { AppActions, AppStateType } from '../types';

const counterReducer = (state = AppState.counter, action: AppActions): AppStateType['counter'] => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1,
      };
    case RESET_COUNTER:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
