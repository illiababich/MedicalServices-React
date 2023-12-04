import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects'
import {
  GET_USER_APPOINTMENTS_FETCH,
  POST_USER_APPOINTMENT,
  PATCH_USER_APPOINTMENT,
  DELETE_USER_APPOINTMENT,
} from './model'
import {
  getUserAppointmentsSuccess,
  getUserAppointmentsFailure,
} from './actions'
import {
  fetchUserAppointments,
  setUserAppointment,
  patchUserAppointment,
  deleteUserAppointment,
} from './api'
import { AxiosResponse, isAxiosError } from 'axios'
import { ActionType } from 'typesafe-actions'

export function* getUserAppointmentsFetch(): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { data } = yield call(fetchUserAppointments)
    yield put(getUserAppointmentsSuccess(data))
  } catch (error) {
    yield put(getUserAppointmentsFailure(error))
  }
}

export function* postUserAppointment({
  payload,
}: ActionType<typeof setUserAppointment>): Generator<StrictEffect, void, any> {
  try {
    yield call(setUserAppointment, payload)
    yield call(getUserAppointmentsFetch)
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getUserAppointmentsFailure(error.message))
    } else {
      yield put(getUserAppointmentsFailure('Something went wrong'))
    }
  }
}

export function* editUserAppointment({
  payload,
}: ActionType<typeof patchUserAppointment>): Generator<
  StrictEffect,
  void,
  any
> {
  try {
    yield call(patchUserAppointment, payload)
    yield call(getUserAppointmentsFetch)
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getUserAppointmentsFailure(error.message))
    } else {
      yield put(getUserAppointmentsFailure('Something went wrong'))
    }
  }
}

export function* removeUserAppointment({
  payload,
}: ActionType<typeof deleteUserAppointment>): Generator<
  StrictEffect,
  void,
  any
> {
  try {
    yield call(deleteUserAppointment, payload)
    yield call(getUserAppointmentsFetch)
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getUserAppointmentsFailure(error.message))
    } else {
      yield put(getUserAppointmentsFailure('Something went wrong'))
    }
  }
}

export default function* userAppointmentsSaga() {
  yield takeEvery(GET_USER_APPOINTMENTS_FETCH, getUserAppointmentsFetch)
  yield takeEvery(POST_USER_APPOINTMENT, postUserAppointment)
  yield takeEvery(PATCH_USER_APPOINTMENT, editUserAppointment)
  yield takeEvery(DELETE_USER_APPOINTMENT, removeUserAppointment)
}
