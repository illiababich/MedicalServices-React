import {
  GET_SERVICE_PROVIDERS_FETCH,
  GET_SERVICE_PROVIDERS_SUCCESS,
  GET_SERVICE_PROVIDERS_FAILURE,
  ServiceProvider,
  ServiceProviderState,
} from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'

const initialState: ServiceProviderState = {
  serviceProviders: [],
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type ServiceProviderAction = ActionType<ActionsType>

const serviceProvidersReducer: Reducer<
  ServiceProviderState,
  ServiceProviderAction
> = (state = initialState, action): ServiceProviderState => {
  const { type, payload } = action
  switch (type) {
    case GET_SERVICE_PROVIDERS_FETCH:
      return setGetServiceProvidersFetch(state)
    case GET_SERVICE_PROVIDERS_SUCCESS:
      return setGetServiceProvidersSuccess(state, payload)
    case GET_SERVICE_PROVIDERS_FAILURE:
      return setGetServiceProvidersFailure(state, payload)
    default:
      return state
  }
}

export default serviceProvidersReducer

const setGetServiceProvidersFetch = (state: ServiceProviderState) => ({
  ...state,
  serviceProviders: [],
  loading: true,
  error: null,
})

const setGetServiceProvidersSuccess = (
  state: ServiceProviderState,
  payload: ServiceProvider[],
) => ({
  ...state,
  serviceProviders: payload,
  loading: false,
  error: null,
})

const setGetServiceProvidersFailure = (
  state: ServiceProviderState,
  payload: any,
) => ({
  ...state,
  serviceProviders: [],
  loading: false,
  error: payload,
})
