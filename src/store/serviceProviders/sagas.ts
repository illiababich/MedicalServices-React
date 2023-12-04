import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import { GET_SERVICE_PROVIDERS_FETCH } from './model'
import { fetchServiceProviders } from './api'
import { AxiosResponse } from 'axios'
import {
  getServiceProvidersSuccess,
  getServiceProvidersFailure,
} from './actions'

export function* getServiceProviders(): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const response = yield call(fetchServiceProviders)
    const { data } = response
    yield put(getServiceProvidersSuccess(data))
  } catch (error) {
    yield put(getServiceProvidersFailure(error))
  }
}

export default function* serviceProvidersSaga() {
  yield takeEvery(GET_SERVICE_PROVIDERS_FETCH, getServiceProviders)
}
