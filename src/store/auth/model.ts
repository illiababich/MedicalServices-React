export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export interface AuthState {
  loginResponse: LoginResponse
  loading: boolean
  error: string | null
}

export interface LoginAction {
  email: string
  password: string
}

export interface LoginResponse {
  lastCheckupDate: string | null
  bearer: string | null
}
