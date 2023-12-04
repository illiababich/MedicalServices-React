import {
  GET_SERVICE_PROVIDERS_FETCH,
  GET_SERVICE_PROVIDERS_SUCCESS,
  GET_SERVICE_PROVIDERS_FAILURE,
} from './model'
import { createAction } from 'typesafe-actions'
import { ServiceProvider } from './model'

export const getServiceProvidersFetch = createAction(
  GET_SERVICE_PROVIDERS_FETCH,
)<void>()

export const getServiceProvidersSuccess = createAction(
  GET_SERVICE_PROVIDERS_SUCCESS,
)<ServiceProvider[]>()

export const getServiceProvidersFailure = createAction(
  GET_SERVICE_PROVIDERS_FAILURE,
)<any>()
