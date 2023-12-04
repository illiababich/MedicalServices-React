export const GET_PROCEDURES_FETCH = 'GET_PROCEDURES_FETCH'
export const GET_PROCEDURES_SUCCESS = 'GET_PROCEDURES_SUCCESS'
export const GET_PROCEDURES_FAILURE = 'GET_PROCEDURES_FAILURE'
export const CREATE_PROCEDURE = 'CREATE_PROCEDURE'
export const CREATE_PROCEDURE_FAILURE = 'CREATE_PROCEDURE_FAILURE'
export const MODIFY_PROCEDURE = 'MODIFY_PROCEDURE'
export const MODIFY_PROCEDURE_FAILURE = 'MODIFY_PROCEDURE_FAILURE'
export const DELETE_PROCEDURE = 'DELETE_PROCEDURE'
export const DELETE_PROCEDURE_FAILURE = 'DELETE_PROCEDURE_FAILURE'

export interface Provider {
  id: number
  name: string
  procedures: Procedure[]
}

export interface Procedure {
  id: number
  name: string
  description: string
  price: number
}

export interface ProcedureBodyData {
  procedureName: string
  price: number
  description: string
}

export interface ProceduresState {
  procedures: Provider[]
  loading: boolean
  error: string | null
}
