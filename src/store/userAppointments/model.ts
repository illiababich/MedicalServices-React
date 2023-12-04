import { Procedure } from '../procedures/model'
import { Timeslot } from '../timeslots/model'

export const GET_USER_APPOINTMENTS_FETCH = 'GET_USER_APPOINTMENTS_FETCH'
export const GET_USER_APPOINTMENTS_SUCCESS = 'GET_USER_APPOINTMENTS_SUCCESS'
export const GET_USER_APPOINTMENTS_FAILURE = 'GET_USER_APPOINTMENTS_FAILURE'
export const POST_USER_APPOINTMENT = 'POST_USER_APPOINTMENT'
export const PATCH_USER_APPOINTMENT = 'PATCH_USER_APPOINTMENT'
export const DELETE_USER_APPOINTMENT = 'DELETE_USER_APPOINTMENT'

export interface Appointment {
  id: number
  timeslot: Timeslot
  comment: string
  procedures: Procedure[]
}

export interface AppointmentRequest {
  id?: number
  timeslotId: number
  comment: string
  procedures: Procedure[]
}

export interface AppointmentState {
  appointments: Appointment[]
  loading: boolean
  error: string | null
}
