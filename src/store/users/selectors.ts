import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectUsersState = (state: ApplicationState) => state.users

export const getUsers = createSelector(
  selectUsersState,
  (currentState) => currentState.users,
)

export const getUsersError = createSelector(
  selectUsersState,
  (currentState) => currentState.error,
)
