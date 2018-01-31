import { combineEpics } from 'redux-observable';

import AuthEpic from './authEpic'

const rootEpic = combineEpics(
    AuthEpic.signupEpic,
    AuthEpic.signinEpic,
    AuthEpic.demoEpic
);

export default rootEpic;