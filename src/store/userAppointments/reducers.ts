import {
  GET_USER_APPOINTMENTS_FETCH,
  GET_USER_APPOINTMENTS_SUCCESS,
  GET_USER_APPOINTMENTS_FAILURE,
} from './model'
import { Appointment, AppointmentState, POST_USER_APPOINTMENT } from './model'
import { ActionType } from 'typesafe-actions'
import { Reducer } from 'react'
import { PATCH_USER_APPOINTMENT, DELETE_USER_APPOINTMENT } from './model'

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
}

type ActionsType = typeof import('./actions')
type AppointmentAction = ActionType<ActionsType>

const userAppointmentsReducer: Reducer<AppointmentState, AppointmentAction> = (
  state = initialState,
  action,
): AppointmentState => {
  const { type, payload } = action
  if (type === GET_USER_APPOINTMENTS_FETCH) {
    return setGetUserAppointmentsFetch(state)
  } else if (type === GET_USER_APPOINTMENTS_SUCCESS) {
    return setGetUserAppointmentsSuccess(state, payload)
  } else if (type === GET_USER_APPOINTMENTS_FAILURE) {
    return setGetUserAppointmentsFailure(state, payload)
  } else if (type === POST_USER_APPOINTMENT) {
    return setPostUserAppointment(state)
  } else if (type === PATCH_USER_APPOINTMENT) {
    return setPostUserAppointment(state)
  } else if (type === DELETE_USER_APPOINTMENT) {
    return setPostUserAppointment(state)
  } else {
    return state
  }
}

export default userAppointmentsReducer

const setGetUserAppointmentsFetch = (state: AppointmentState) => ({
  ...state,
  appointments: [],
  loading: true,
  error: null,
})

const setGetUserAppointmentsSuccess = (
  state: AppointmentState,
  payload: Appointment[],
) => ({
  ...state,
  appointments: payload,
  loading: false,
  error: null,
})

const setGetUserAppointmentsFailure = (
  state: AppointmentState,
  payload: any,
) => ({
  ...state,
  appointments: [],
  loading: false,
  error: payload,
})

const setPostUserAppointment = (state: AppointmentState) => ({
  ...state,
  appointments: state.appointments,
  loading: false,
  error: null,
})
