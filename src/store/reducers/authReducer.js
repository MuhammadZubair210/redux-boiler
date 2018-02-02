import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    DEMO_SUCCESS, DEMO, DEMO_FAILURE,
    SECOND_DEMO, SECOND_DEMO_SUCCESS, SECOND_DEMO_FAILURE
} from '../constants'
const initialState = {
    data: {},
    userdata: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                userdata: {},
                data: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                userdata: action.payload,
                isLoading: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case SIGNIN:
            return {
                ...state,
                data: {},
                userdata: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                userdata: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                userdata: {},
                data: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case DEMO:
            return {
                ...state,
                data: {},
                userdata: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case DEMO_SUCCESS:
            return {
                ...state,
                userdata: {},
                data: action.payload,
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case DEMO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        case SECOND_DEMO:
            return {
                ...state,
                data: {},
                userdata: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SECOND_DEMO_SUCCESS:
            return {
                ...state,
                userdata: {},
                data: action.payload,
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SECOND_DEMO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        default:
            return state
    }
}