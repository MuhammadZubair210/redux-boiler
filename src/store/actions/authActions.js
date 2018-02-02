import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, DEMO_SUCCESS, DEMO,
    SECOND_DEMO,SECOND_DEMO_SUCCESS,SECOND_DEMO_FAILURE
} from '../constants'

export default class AuthActions {

    static signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }
    static signupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }
    static signupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }
    static signin(user) {
        return {
            type: SIGNIN,
            payload: user
        }
    }
    static signinSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }
    static demo(user) {
        return {
            type: DEMO,
            payload: user
        }
    }
    static demoSuccess(data) {
        return {
            type: DEMO_SUCCESS,
            payload: data
        }
    }

    static seconddemo(user) {
        return {
            type: SECOND_DEMO,
            payload: user
        }
    }
    static seconddemoSuccess(data) {
        return {
            type: SECOND_DEMO_SUCCESS,
            payload: data
        }
    }
    static signinFailure(error) {
        return {
            type: SECOND_DEMO_FAILURE,
            error: error
        }
    }

    static signinFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }
    static logout() {
        return {
            type: LOGOUT
        }
    }
    static logoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }
    static logoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }
}