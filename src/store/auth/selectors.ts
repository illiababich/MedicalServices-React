import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectAuthState = (state: ApplicationState) => state.auth

export const getAuthToken = createSelector(
  selectAuthState,
  (currentState) => currentState.loginResponse?.bearer,
)

export const getLastCheckupDate = createSelector(
  selectAuthState,
  (currentState) => currentState.loginResponse?.lastCheckupDate,
)

export const getAuthError = createSelector(
  selectAuthState,
  (currentState) => currentState.error,
)
