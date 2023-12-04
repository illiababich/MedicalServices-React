import {
  POST_USER_ROLE,
  REMOVE_USER_ROLE,
  UserRoleState,
  GET_ROLES_FETCH,
  GET_ROLES_SUCCESS,
  Role,
} from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'

const initialState: UserRoleState = {
  roles: [],
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type UsersRolesAction = ActionType<ActionsType>

const userRolesReducer: Reducer<UserRoleState, UsersRolesAction> = (
  state = initialState,
  action,
): UserRoleState => {
  const { type, payload } = action
  if (type === POST_USER_ROLE) {
    return setPostUserRole(state)
  } else if (type === REMOVE_USER_ROLE) {
    return setRemoveUserRole(state)
  } else if (type === GET_ROLES_FETCH) {
    return setGetRolesFetch(state)
  } else if (type === GET_ROLES_SUCCESS) {
    return setGetRolesSuccess(state, payload)
  } else {
    return state
  }
}

export default userRolesReducer

const setPostUserRole = (state: UserRoleState) => ({
  ...state,
  roles: state.roles,
  loading: true,
  error: null,
})

const setRemoveUserRole = (state: UserRoleState) => ({
  ...state,
  roles: state.roles,
  loading: true,
  error: null,
})

const setGetRolesFetch = (state: UserRoleState) => ({
  ...state,
  roles: [],
  loading: true,
  error: null,
})

const setGetRolesSuccess = (state: UserRoleState, payload: Role[]) => ({
  ...state,
  roles: payload,
  loading: false,
  error: null,
})
