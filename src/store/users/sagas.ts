import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import { GET_USERS_FETCH, PATCH_USER } from './model'
import { getUsersSuccess, getUsersFailure } from './actions'
import { fetchUsers, setUser } from './api'
import { AxiosResponse } from 'axios'
import { getRolesFetch } from '../userRoles/sagas'
import { ActionType } from 'typesafe-actions'

type PatchUserActionType = typeof setUser

export function* getUsersFetch(): Generator<StrictEffect, void, AxiosResponse> {
  try {
    const response = yield call(fetchUsers)
    const { data } = response
    yield put(getUsersSuccess(data))
    yield call(getRolesFetch)
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

export function* patchUser({
  payload,
}: ActionType<PatchUserActionType>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    yield call(setUser, payload)
    yield call(getUsersFetch)
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS_FETCH, getUsersFetch)
  yield takeEvery(PATCH_USER, patchUser)
}
