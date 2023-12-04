import {
  LOGIN_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LoginAction,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './model'
import { createAction } from 'typesafe-actions'
import { NavigateFunction } from 'react-router-dom'
import { LoginResponse } from './model'

export const loginFetch = createAction(LOGIN_FETCH)<{
  loginData: LoginAction
  callback: NavigateFunction
}>()

export const loginSuccess = createAction(LOGIN_SUCCESS)<LoginResponse>()

export const loginFailure = createAction(LOGIN_FAILURE)<any>()

export const logOutSuccess = createAction(LOGOUT_SUCCESS)<{
  callback: NavigateFunction
}>()

export const logOutFailure = createAction(LOGOUT_FAILURE)<any>()
