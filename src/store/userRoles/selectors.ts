import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectRolesState = (state: ApplicationState) => state.userRoles

export const getRoles = createSelector(
  selectRolesState,
  (currentState) => currentState.roles,
)
