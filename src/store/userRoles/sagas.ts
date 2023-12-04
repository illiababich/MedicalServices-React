import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import { POST_USER_ROLE, REMOVE_USER_ROLE, GET_ROLES_FETCH } from './model'
import { getUsersFetch } from '../users/sagas'
import { setUserRole, removeUserRole, fetchRoles } from './api'
import { AxiosResponse } from 'axios'
import { getRolesFailure, getRolesSuccess } from './actions'

type SetUserRoleActionType = typeof setUserRole
type RemoveUserRoleActionType = typeof removeUserRole

export function* postUserRole({
  payload,
}: ActionType<SetUserRoleActionType>): Generator<StrictEffect, void, any> {
  try {
    yield call(setUserRole, payload)
    yield call(getUsersFetch)
  } catch (error) {
    yield put(getRolesFailure(error))
  }
}

export function* removeRoleFromUser({
  payload,
}: ActionType<RemoveUserRoleActionType>): Generator<StrictEffect, void, any> {
  try {
    yield call(removeUserRole, payload)
    yield call(getUsersFetch)
  } catch (error) {
    yield put(getRolesFailure(error))
  }
}

export function* getRolesFetch(): Generator<StrictEffect, void, AxiosResponse> {
  try {
    const response = yield call(fetchRoles)
    const { data } = response
    yield put(getRolesSuccess(data))
  } catch (error) {
    yield put(getRolesFailure(error))
  }
}

export default function* userRolesSaga() {
  yield takeEvery(POST_USER_ROLE, postUserRole)
  yield takeEvery(REMOVE_USER_ROLE, removeRoleFromUser)
  yield takeEvery(GET_ROLES_FETCH, getRolesFetch)
}
