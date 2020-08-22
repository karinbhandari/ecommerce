//  Basically apicall file file
import { takeLatest, ForkEffect, fork } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './conts';
import { loginWorker, signupWorker } from './worker';

function* loginWatcher(): Generator {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}

function* signupWatcher(): Generator {
  yield takeLatest(LOGIN_REQUEST, signupWorker);
}

export const authWatchers: ForkEffect[] = [fork(loginWatcher), fork(signupWatcher)];
