import {
  GET_PROCEDURES_FETCH,
  GET_PROCEDURES_SUCCESS,
  GET_PROCEDURES_FAILURE,
  CREATE_PROCEDURE,
  CREATE_PROCEDURE_FAILURE,
  MODIFY_PROCEDURE,
  MODIFY_PROCEDURE_FAILURE,
  ProcedureBodyData,
  DELETE_PROCEDURE,
  DELETE_PROCEDURE_FAILURE,
} from './model'
import { createAction } from 'typesafe-actions'
import { Provider } from './model'

export const getProceduresFetch = createAction(GET_PROCEDURES_FETCH)<void>()

export const getProceduresSuccess = createAction(GET_PROCEDURES_SUCCESS)<
  Provider[]
>()

export const getProceduresFailure = createAction(GET_PROCEDURES_FAILURE)<any>()

export const createProcedure = createAction(CREATE_PROCEDURE)<{
  procedureData: ProcedureBodyData
  callback: () => void
}>()

export const createProcedureFailure = createAction(
  CREATE_PROCEDURE_FAILURE,
)<any>()

export const modifyProcedure = createAction(MODIFY_PROCEDURE)<{
  id: number
  procedure: ProcedureBodyData
  callback: () => void
}>()

export const modifyProcedureFailure = createAction(
  MODIFY_PROCEDURE_FAILURE,
)<any>()

export const deleteProcedure = createAction(DELETE_PROCEDURE)<{
  id: number
  callback: () => void
}>()

export const deleteProcedureFailure = createAction(
  DELETE_PROCEDURE_FAILURE,
)<any>()
