import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    DEMO, DEMO_SUCCESS, DEMO_FAILURE, SECOND_DEMO,
    SECOND_DEMO_SUCCESS, SECOND_DEMO_FAILURE
} from '../constants'

import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';
import Path from './../../config/path';

//** Epic Middlewares For Auth **//
export default class AuthEpic {

    //Epic middleware for login
    static signinEpic = (action$) =>
        action$.ofType(SIGNIN)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.LOGIN, payload)
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: SIGNIN_SUCCESS,
                                payload: response
                            });
                        }
                        return Observable.of({
                            type: SIGNIN_FAILURE,
                            payload: "email and password not matched ! Try Again "
                        });
                    });
            })

    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(SIGNUP)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.SIGNUP, payload)
                    .switchMap(({ response }) => {
                        if (response.err) {
                            return Observable.of({
                                type: SIGNUP_FAILURE,
                                payload: response.err
                            });
                        }
                        return Observable.of({
                            type: SIGNUP_SUCCESS,
                            payload: response
                        });
                    });
            })

    // Epic demo
    static demoEpic = (action$) =>
        action$.ofType(DEMO)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.GITHUB)
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: DEMO_SUCCESS,
                                payload: response
                            });
                        }
                        return Observable.of({
                            type: DEMO_FAILURE,
                            payload: "email and password not matched ! Try Again "
                        });
                    });
            })

    // Second Epic demo
    static secondDemoEpic = (action$) =>
        action$.ofType(SECOND_DEMO)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.LOGIN, payload)
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: SECOND_DEMO_SUCCESS,
                                payload: response
                            });
                        }
                        return Observable.of({
                            type: SECOND_DEMO_FAILURE,
                            payload: "email and password not matched ! Try Again "
                        });
                    });
            })

}