import { serverClient } from '..'
import { ProcedureBodyData } from './model'

export async function fetchProcedures() {
  return await serverClient.get('/procedures')
}

export async function addNewProcedures(payload: ProcedureBodyData) {
  return await serverClient.post(`/procedures`, payload)
}

export async function modifyProcedureApi(
  id: number,
  procedure: ProcedureBodyData,
) {
  return await serverClient.patch(`/procedures/${id}`, procedure)
}

export async function deleteProcedureApi(id: number) {
  return await serverClient.delete(`/procedures/${id}`)
}
