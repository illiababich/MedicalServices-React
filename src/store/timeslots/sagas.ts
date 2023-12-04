import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import { GET_TIMESLOTS_FETCH, CREATE_TIMESLOTS } from './model'
import { getTimeslotsSuccess, getTimeslotsFailure } from './actions'
import { fetchTimeslots, postTimeslots } from './api'
import { ActionType } from 'typesafe-actions'
import axios, { AxiosResponse } from 'axios'

type ActionsType = typeof import('./actions')

export function* getTimeslotsFetch({
  payload,
}: ActionType<ActionsType>): Generator<StrictEffect, void, AxiosResponse> {
  try {
    const response = yield call(fetchTimeslots, payload)
    const { data } = response
    yield put(getTimeslotsSuccess(data))
  } catch (error) {
    yield put(getTimeslotsFailure(error))
  }
}

export function* createTimeslots({
  payload,
}: ActionType<ActionsType>): Generator<StrictEffect, void, any> {
  try {
    yield call(postTimeslots, payload)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(getTimeslotsFailure(error.message))
    } else {
      yield put(getTimeslotsFailure('Something went wrong'))
    }
  }
}

export default function* timeslotsSaga() {
  yield takeEvery(GET_TIMESLOTS_FETCH, getTimeslotsFetch)
  yield takeEvery(CREATE_TIMESLOTS, createTimeslots)
}
