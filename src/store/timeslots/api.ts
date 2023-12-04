import { GroupTimeslotsBy } from '../../constants/enums'
import { serverClient } from '..'
import { Timeslot } from './model'

export async function fetchTimeslots(payload?: {
  available: boolean
  groupedBy: GroupTimeslotsBy
}) {
  return await serverClient({
    url: '/timeslots',
    method: 'GET',
    params: payload,
  })
}

export async function postTimeslots(payload: Timeslot[]) {
  return await serverClient.post('/timeslots', payload)
}
