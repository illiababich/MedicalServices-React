export const GET_SERVICE_PROVIDERS_FETCH = 'GET_SERVICE_PROVIDERS_FETCH'
export const GET_SERVICE_PROVIDERS_SUCCESS = 'GET_SERVICE_PROVIDERS_SUCCESS'
export const GET_SERVICE_PROVIDERS_FAILURE = 'GET_SERVICE_PROVIDERS_FAILURE'

export interface ServiceProvider {
  id: number
  name: string
}

export interface ServiceProviderState {
  serviceProviders: ServiceProvider[]
  loading: boolean
  error: string | null
}
