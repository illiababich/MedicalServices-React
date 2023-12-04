export const POST_USER_ROLE = 'POST_USER_ROLE'
export const REMOVE_USER_ROLE = 'REMOVE_USER_ROLE'
export const GET_ROLES_FETCH = 'GET_ROLES_FETCH'
export const GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS'
export const GET_ROLES_FAILURE = 'GET_ROLES_FAILURE'

export interface Role {
  id: number
  role: string
}

export interface UserRoleState {
  roles: Role[]
  loading: boolean
  error: string | null
}
