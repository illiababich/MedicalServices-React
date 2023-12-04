import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  PATCH_USER,
  GET_USERS_FAILURE,
  UserPatch,
} from './model'
import { createAction } from 'typesafe-actions'
import { User } from './model'

export const getUsersFetch = createAction(GET_USERS_FETCH)<void>()

export const getUsersSuccess = createAction(GET_USERS_SUCCESS)<User[]>()

export const getUsersFailure = createAction(GET_USERS_FAILURE)<any>()

export const setUser = createAction(PATCH_USER)<UserPatch>()
