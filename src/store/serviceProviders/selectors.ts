import { createSelector } from 'reselect'
import { ApplicationState } from '../rootReducer'

export const selectServiceProvidersState = (state: ApplicationState) =>
  state.serviceProviders

export const getServiceProviders = createSelector(
  selectServiceProvidersState,
  (currentState) => currentState.serviceProviders,
)
