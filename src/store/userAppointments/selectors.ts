import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectUserAppointmentsState = (state: ApplicationState) =>
  state.userAppointments

export const getUserAppointments = createSelector(
  selectUserAppointmentsState,
  (currentState) => currentState.appointments,
)

export const getUserAppointmentsError = createSelector(
  selectUserAppointmentsState,
  (currentState) => currentState.error,
)
