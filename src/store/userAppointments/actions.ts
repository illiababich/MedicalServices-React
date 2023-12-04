import {
  GET_USER_APPOINTMENTS_FETCH,
  GET_USER_APPOINTMENTS_SUCCESS,
  GET_USER_APPOINTMENTS_FAILURE,
  POST_USER_APPOINTMENT,
  PATCH_USER_APPOINTMENT,
  DELETE_USER_APPOINTMENT,
} from './model'
import { createAction } from 'typesafe-actions'
import { Appointment, AppointmentRequest } from './model'

export const getUserAppointmentsFetch = createAction(
  GET_USER_APPOINTMENTS_FETCH,
)<void>()

export const getUserAppointmentsSuccess = createAction(
  GET_USER_APPOINTMENTS_SUCCESS,
)<Appointment[]>()

export const getUserAppointmentsFailure = createAction(
  GET_USER_APPOINTMENTS_FAILURE,
)<any>()

export const setUserAppointment = createAction(
  POST_USER_APPOINTMENT,
)<AppointmentRequest>()

export const patchUserAppointment = createAction(
  PATCH_USER_APPOINTMENT,
)<AppointmentRequest>()

export const deleteUserAppointment = createAction(
  DELETE_USER_APPOINTMENT,
)<number>()
