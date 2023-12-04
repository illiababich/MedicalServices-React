import React from 'react'
import { Timeslot } from '../../../store/timeslots/model'

interface AppointmentModalContextInterface {
  selectedTimeslot: Timeslot | null
  setSelectedTimeslot: (value: Timeslot | null) => void
}

const AppointmentModalContext =
  React.createContext<AppointmentModalContextInterface | null>(null)

export default AppointmentModalContext
