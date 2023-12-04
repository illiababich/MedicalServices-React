import { AddTimeslotsProps } from '../components/AddTimeslotsModal'
import { Timeslot } from '../../../store/timeslots/model'

export const filterTimeslots = (
  previewTimeslots: AddTimeslotsProps,
  date: string,
  provider: number,
) => {
  const formattedTimeslots: Timeslot[] = []

  Object.values(previewTimeslots.timeslots).map((timeslots) => {
    timeslots.forEach((timeslot) => {
      if (timeslot.disabled) return
      const formattedTimeslot = {
        startTime: new Date(`${date} ${timeslot.startTime}`),
        endTime: new Date(`${date} ${timeslot.endTime}`),
        serviceProviderId: provider,
      }
      formattedTimeslots.push(formattedTimeslot)
    })
  })

  return formattedTimeslots
}
