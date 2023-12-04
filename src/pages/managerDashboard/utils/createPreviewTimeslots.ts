import { formatAppointmentTime } from '../../../utils/format'
import { addMinutes } from 'date-fns'
import { PreviewTimeslotInterface } from '../components/PreviewTimeslot'

export const createPreviewTimeslots = (
  startTime: Date,
  endTime: Date,
  timeslotInterval: number,
) => {
  const previewTimeslots: Record<string, PreviewTimeslotInterface[]> = {}

  while (startTime < endTime) {
    const hour = String(startTime.getHours())
    const timeslot = {
      startTime: formatAppointmentTime(startTime),
      endTime: formatAppointmentTime(addMinutes(startTime, timeslotInterval)),
      disabled: false,
    }

    if (Object.hasOwn(previewTimeslots, hour)) {
      previewTimeslots[hour].push(timeslot)
    } else {
      previewTimeslots[hour] = [timeslot]
    }

    startTime = addMinutes(startTime, timeslotInterval)
  }
  return previewTimeslots
}
