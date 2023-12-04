import React from 'react'
import clsx from 'clsx'
import { Timeslot } from '../../../store/timeslots/model'
import { formatAppointmentTime } from '../../../utils/format'
import AppointmentModalContext from '../../patientDashboard/contexts/AppointmentModalContext'

interface TimeslotCardProps {
  timeslot: Timeslot
}

export function TimeslotCard(props: TimeslotCardProps) {
  const { timeslot } = props
  const { startTime, endTime, serviceProviderName } = timeslot
  const context = React.useContext(AppointmentModalContext)
  const setSelectedTimeslot = context?.setSelectedTimeslot
  const selectedTimeslot = context?.selectedTimeslot
  const isSelected = selectedTimeslot?.id === timeslot.id

  const formattedStartTime = formatAppointmentTime(startTime)
  const formattedEndTime = formatAppointmentTime(endTime)

  return (
    <div
      className={clsx(
        'my-2 rounded-xl shadow-md shadow-blue border border-gray-200 cursor-pointer',
        isSelected ? 'bg-light-blue' : 'bg-white',
      )}
      onClick={() => {
        if (setSelectedTimeslot) {
          setSelectedTimeslot(timeslot)
        }
      }}
    >
      <div className='px-6 py-4'>
        <p className='font-bold'>
          {formattedStartTime} - {formattedEndTime}
        </p>
        <p className='font-roman'>{serviceProviderName}</p>
      </div>
    </div>
  )
}
