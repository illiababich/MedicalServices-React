import { GET_USERS_FETCH, GET_USERS_SUCCESS, PATCH_USER } from './model'
import { UsersState, User } from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type UsersAction = ActionType<ActionsType>

const usersReducer: Reducer<UsersState, UsersAction> = (
  state = initialState,
  action,
): UsersState => {
  const { type, payload } = action
  switch (type) {
    case GET_USERS_FETCH:
      return setGetUsersFetch(state)
    case GET_USERS_SUCCESS:
      return setGetUsersSuccess(state, payload)
    case PATCH_USER:
      return setPatchUser(state)
    default:
      return state
  }
}

export default usersReducer

const setGetUsersFetch = (state: UsersState) => ({
  ...state,
  users: [],
  loading: true,
  error: null,
})

const setGetUsersSuccess = (state: UsersState, payload: User[]) => ({
  ...state,
  users: payload,
  loading: false,
  error: null,
})

const setPatchUser = (state: UsersState) => ({
  ...state,
  users: state.users,
  loading: false,
  error: null,
})
