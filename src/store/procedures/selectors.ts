import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectProceduresState = (state: ApplicationState) =>
  state.procedures

export const getProcedures = createSelector(
  selectProceduresState,
  (currentState) => currentState.procedures,
)
