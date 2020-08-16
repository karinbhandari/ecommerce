import { Store } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as rootActions from './rootActions';

export interface ExtendedStore extends Store {
  runSagaTask: Function;
  sagaTask: any;
}

export type AppActions = ActionType<typeof rootActions>;

export interface AppStateType {
  readonly counter: {
    count: number;
  };
  readonly product: {
    searchedProductsResp: Array;
    searchedProductsErr: object;
  };
  // readonly auth: {
  //   token: string;
  // };
}
