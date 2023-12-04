import {
  AuthState,
  LOGIN_FAILURE,
  LOGIN_FETCH,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'
import { LoginResponse } from './model'

const initialState: AuthState = {
  loginResponse: {
    lastCheckupDate: null,
    bearer: null,
  },
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type AuthAction = ActionType<ActionsType>

const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action,
): AuthState => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_FETCH:
      return LoginFetch(state)
    case LOGIN_SUCCESS:
      return LoginSuccess(state, payload)
    case LOGIN_FAILURE:
      return LoginFailure(state, payload)
    case LOGOUT_SUCCESS:
      return LogOutSuccess(state)
    case LOGOUT_FAILURE:
      return LogOutFailure(state, payload)
    default:
      return state
  }
}

export default authReducer

const LoginFetch = (state: AuthState) => ({
  ...state,
  loginResponse: {
    lastCheckupDate: null,
    bearer: null,
  },
  loading: true,
  error: null,
})

export const LoginSuccess = (state: AuthState, payload: LoginResponse) => ({
  ...state,
  loginResponse: payload,
  loading: false,
  error: null,
})

const LoginFailure = (state: AuthState, payload: any) => ({
  ...state,
  loginResponse: {
    lastCheckupDate: null,
    bearer: null,
  },
  loading: false,
  error: payload,
})

export const LogOutSuccess = (state: AuthState) => ({
  ...state,
  loginResponse: {
    lastCheckupDate: null,
    bearer: null,
  },
  loading: false,
  error: null,
})

const LogOutFailure = (state: AuthState, payload: any) => ({
  ...state,
  loginResponse: {
    lastCheckupDate: null,
    bearer: null,
  },
  loading: false,
  error: payload,
})
