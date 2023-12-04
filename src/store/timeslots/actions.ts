import {
  GET_TIMESLOTS_FETCH,
  GET_TIMESLOTS_SUCCESS,
  GET_TIMESLOTS_FAILURE,
  CREATE_TIMESLOTS,
} from './model'
import { GroupTimeslotsBy } from '../../constants/enums'
import { createAction } from 'typesafe-actions'
import { Timeslot } from './model'

export const getTimeslotsFetch = createAction(GET_TIMESLOTS_FETCH)<{
  available: boolean
  groupedBy: GroupTimeslotsBy
} | void>()

export const getTimeslotsSuccess = createAction(GET_TIMESLOTS_SUCCESS)<
  Record<string, Timeslot[]>
>()

export const getTimeslotsFailure = createAction(GET_TIMESLOTS_FAILURE)<any>()

export const createTimeslots = createAction(CREATE_TIMESLOTS)<Timeslot[]>()
