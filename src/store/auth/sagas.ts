import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import { LOGIN_FETCH, LOGOUT_SUCCESS } from './model'
import {
  loginSuccess,
  loginFailure,
  loginFetch,
  logOutSuccess,
  logOutFailure,
} from './actions'
import { fetchAuthToken } from './api'
import { ActionType } from 'typesafe-actions'
import { AxiosResponse } from 'axios'
import { DecodeJWTToken } from '../../utils/decodeJWTToken'
import { Role } from '../../constants/enums'
import { NavigateFunction } from 'react-router-dom'

function redirect(callback: NavigateFunction, path: string) {
  callback(path)
}

export function* setAuthTokenFetch({
  payload,
}: ActionType<typeof loginFetch>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { loginData, callback } = payload
    const { data } = yield call(fetchAuthToken, loginData)
    yield put(loginSuccess(data))
    const userRoles: Array<string> = DecodeJWTToken(data.bearer)
    if (userRoles.includes(Role.ADMIN)) yield call(redirect, callback, '/admin')
    else if (userRoles.includes(Role.MANAGER))
      yield call(redirect, callback, '/manager')
    else if (userRoles.includes(Role.PATIENT))
      yield call(redirect, callback, '/')
    else if (userRoles.includes(Role.SERVICE_PROVIDER))
      yield call(redirect, callback, '/procedures')
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export function* logOut({
  payload,
}: ActionType<typeof logOutSuccess>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { callback } = payload
    yield call(logOutSuccess, { callback })
    yield call(redirect, callback, '/login')
  } catch (error) {
    yield put(logOutFailure(error))
  }
}

export default function* authTokenSaga() {
  yield takeEvery(LOGIN_FETCH, setAuthTokenFetch)
  yield takeEvery(LOGOUT_SUCCESS, logOut)
}
