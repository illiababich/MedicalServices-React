import {
  POST_USER_ROLE,
  GET_ROLES_FETCH,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAILURE,
  REMOVE_USER_ROLE,
} from './model'
import { Role } from './model'
import { createAction } from 'typesafe-actions'

export const setUserRole = createAction(POST_USER_ROLE)<Role>()

export const removeUserRole = createAction(REMOVE_USER_ROLE)<Role>()

export const getRolesFetch = createAction(GET_ROLES_FETCH)<void>()

export const getRolesSuccess = createAction(GET_ROLES_SUCCESS)<Role[]>()

export const getRolesFailure = createAction(GET_ROLES_FAILURE)<any>()
