import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectTimeslotsState = (state: ApplicationState) => state.timeslots

export const getTimeslots = createSelector(
  selectTimeslotsState,
  (currentState) => currentState.timeslots,
)

export const getTimeslotsError = createSelector(
  selectTimeslotsState,
  (currentState) => currentState.error,
)
