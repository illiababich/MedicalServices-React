import {
  GET_TIMESLOTS_FETCH,
  GET_TIMESLOTS_SUCCESS,
  GET_TIMESLOTS_FAILURE,
  CREATE_TIMESLOTS,
} from './model'
import { TimeslotsState, Timeslot } from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'

const initialState: TimeslotsState = {
  timeslots: {},
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type TimeslotsAction = ActionType<ActionsType>

const timeslotsReducer: Reducer<TimeslotsState, TimeslotsAction> = (
  state = initialState,
  action,
): TimeslotsState => {
  const { type, payload } = action
  switch (type) {
    case GET_TIMESLOTS_FETCH:
      return setGetTimeslotsFetch(state)
    case GET_TIMESLOTS_SUCCESS:
      return setGetTimeslotsSuccess(state, payload)
    case GET_TIMESLOTS_FAILURE:
      return setGetTimeslotsFailure(state, payload)
    case CREATE_TIMESLOTS:
      return setCreateTimeslots(state)
    default:
      return state
  }
}

export default timeslotsReducer

const setGetTimeslotsFetch = (state: TimeslotsState) => ({
  ...state,
  timeslots: {},
  loading: true,
  error: null,
})

const setGetTimeslotsSuccess = (
  state: TimeslotsState,
  payload: Record<string, Timeslot[]>,
) => ({
  ...state,
  timeslots: payload,
  loading: false,
  error: null,
})

const setGetTimeslotsFailure = (state: TimeslotsState, payload: any) => ({
  ...state,
  timeslots: {},
  loading: false,
  error: payload,
})

const setCreateTimeslots = (state: TimeslotsState) => ({
  ...state,
  timeslots: {},
  loading: true,
  error: null,
})
