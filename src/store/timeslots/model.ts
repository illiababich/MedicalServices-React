export const GET_TIMESLOTS_FETCH = 'GET_TIMESLOTS_FETCH'
export const GET_TIMESLOTS_SUCCESS = 'GET_TIMESLOTS_SUCCESS'
export const GET_TIMESLOTS_FAILURE = 'GET_TIMESLOTS_FAILURE'
export const CREATE_TIMESLOTS = 'POST_TIMESLOTS'

export interface Timeslot {
  id?: number
  startTime: Date
  endTime: Date
  serviceProviderId?: number
  serviceProviderName?: string
  userId?: number
  userFullName?: string
  startTimeDate?: string
}

export interface TimeslotsState {
  timeslots: Record<string, Timeslot[]>
  loading: boolean
  error: string | null
}
