import { AxiosResponse } from 'axios'
import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects'
import {
  createProcedure,
  createProcedureFailure,
  deleteProcedure,
  deleteProcedureFailure,
  getProceduresFailure,
  getProceduresSuccess,
  modifyProcedure,
  modifyProcedureFailure,
} from './actions'
import {
  addNewProcedures,
  deleteProcedureApi,
  fetchProcedures,
  modifyProcedureApi,
} from './api'
import {
  CREATE_PROCEDURE,
  DELETE_PROCEDURE,
  GET_PROCEDURES_FETCH,
  MODIFY_PROCEDURE,
} from './model'
import { ActionType } from 'typesafe-actions'

export function* getProceduresFetch(): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const response = yield call(fetchProcedures)
    const { data } = response
    yield put(getProceduresSuccess(data))
  } catch (error) {
    yield put(getProceduresFailure(error))
  }
}

export function* createProcedures({
  payload,
}: ActionType<typeof createProcedure>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { procedureData, callback } = payload
    yield call(addNewProcedures, procedureData)
    yield call(callback)
    yield call(getProceduresFetch)
  } catch (error) {
    yield put(createProcedureFailure(error))
  }
}

export function* modifyProcedures({
  payload,
}: ActionType<typeof modifyProcedure>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { id, procedure, callback } = payload
    yield call(modifyProcedureApi, id, procedure)
    yield call(callback)
    yield call(getProceduresFetch)
  } catch (error) {
    yield put(modifyProcedureFailure(error))
  }
}

export function* deleteProcedures({
  payload,
}: ActionType<typeof deleteProcedure>): Generator<
  StrictEffect,
  void,
  AxiosResponse
> {
  try {
    const { id, callback } = payload
    yield call(deleteProcedureApi, id)
    yield call(callback)
    yield call(getProceduresFetch)
  } catch (error) {
    yield put(deleteProcedureFailure(error))
  }
}

export default function* proceduresSaga() {
  yield takeEvery(GET_PROCEDURES_FETCH, getProceduresFetch)
  yield takeEvery(CREATE_PROCEDURE, createProcedures)
  yield takeEvery(MODIFY_PROCEDURE, modifyProcedures)
  yield takeEvery(DELETE_PROCEDURE, deleteProcedures)
}
