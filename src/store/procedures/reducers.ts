import { Reducer } from 'react'
import { ActionType } from 'typesafe-actions'
import {
  CREATE_PROCEDURE,
  CREATE_PROCEDURE_FAILURE,
  DELETE_PROCEDURE,
  DELETE_PROCEDURE_FAILURE,
  GET_PROCEDURES_FAILURE,
  GET_PROCEDURES_FETCH,
  GET_PROCEDURES_SUCCESS,
  MODIFY_PROCEDURE,
  MODIFY_PROCEDURE_FAILURE,
  ProceduresState,
  Provider,
} from './model'

const initialState: ProceduresState = {
  procedures: [],
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type ProceduresAction = ActionType<ActionsType>

const proceduresReducer: Reducer<ProceduresState, ProceduresAction> = (
  state = initialState,
  action,
): ProceduresState => {
  const { type, payload } = action
  switch (type) {
    case GET_PROCEDURES_FETCH:
      return setGetProceduresFetch(state)
    case GET_PROCEDURES_SUCCESS:
      return setGetProceduresSuccess(state, payload)
    case GET_PROCEDURES_FAILURE:
      return setGetProceduresFailure(state, payload)
    case CREATE_PROCEDURE:
      return setCreateProcedure(state)
    case CREATE_PROCEDURE_FAILURE:
      return setCreateProcedureFailure(state, payload)
    case MODIFY_PROCEDURE:
      return setModifyProcedure(state)
    case MODIFY_PROCEDURE_FAILURE:
      return setModifyProcedureFailure(state, payload)
    case DELETE_PROCEDURE:
      return setDeleteProcedure(state)
    case DELETE_PROCEDURE_FAILURE:
      return setDeleteProcedureFailure(state, payload)
    default:
      return state
  }
}

export default proceduresReducer

const setGetProceduresFetch = (state: ProceduresState) => ({
  ...state,
  procedures: [],
  loading: true,
  error: null,
})

const setGetProceduresSuccess = (
  state: ProceduresState,
  payload: Provider[],
) => ({
  ...state,
  procedures: payload,
  loading: false,
  error: null,
})

const setGetProceduresFailure = (state: ProceduresState, payload: any) => ({
  ...state,
  procedures: [],
  loading: false,
  error: payload,
})

const setCreateProcedure = (state: ProceduresState) => ({
  ...state,
  procedures: [],
  loading: true,
  error: null,
})

const setCreateProcedureFailure = (state: ProceduresState, payload: any) => ({
  ...state,
  procedures: [],
  loading: false,
  error: payload,
})

const setModifyProcedure = (state: ProceduresState) => ({
  ...state,
  procedures: [],
  loading: true,
  error: null,
})

const setModifyProcedureFailure = (state: ProceduresState, payload: any) => ({
  ...state,
  procedures: [],
  loading: false,
  error: payload,
})

const setDeleteProcedure = (state: ProceduresState) => ({
  ...state,
  procedures: [],
  loading: true,
  error: null,
})

const setDeleteProcedureFailure = (state: ProceduresState, payload: any) => ({
  ...state,
  procedures: [],
  loading: false,
  error: payload,
})
