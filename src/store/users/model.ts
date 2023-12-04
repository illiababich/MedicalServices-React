import { Role } from '../userRoles/model'

export const GET_USERS_FETCH = 'GET_USERS_FETCH'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const PATCH_USER = 'PATCH_USER'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export interface User {
  id: number
  email: string
  fullName: string
  birthDate: Date
  roles: Role[]
  lastCheckupDate: Date
}

export interface UserPatch {
  id?: number
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  birthDate?: Date
  enabled?: boolean
  lastCheckupDate?: Date
  roles?: Role[]
}

export interface UsersState {
  users: User[]
  loading: boolean
  error: string | null
}
