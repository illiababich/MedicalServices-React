import React, { useState, useContext } from 'react'
import ActionButton from '../../../components/ActionButton'
import { ActionButtonType } from '../../../constants/enums'
import { ActionButtonShape } from '../../../constants/enums'
import { formatAppointmentTime } from '../../../utils/format'
import { Appointment } from '../../../store/userAppointments/model'
import AppointmentModal from '../appointmentModal/AppointmentModal'
import DeleteModal from '../../../components/DeleteModal'
import PatientDashboardContext from '../contexts/PatientDashboardContext'

function AppointmentCard(props: {
  appointment: Appointment
  upcoming?: boolean
}) {
  const { upcoming, appointment } = props
  const { serviceProviderName, startTime, endTime } = appointment.timeslot
  const { procedures } = appointment
  const context = useContext(PatientDashboardContext)
  const deleteUserAppointment = context?.deleteUserAppointment

  const year = startTime.getFullYear()
  const weekDay = startTime.toLocaleString('default', {
    weekday: 'long',
  })
  const day = startTime.getUTCDate()
  const month = startTime.toLocaleString('default', { month: 'long' })
  const appointmentStart = formatAppointmentTime(startTime)
  const appointmentEnd = formatAppointmentTime(endTime)
  const proceduresNames = procedures.map((procedure) => procedure.name)

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <div className='grid w-96 2xl:w-3/12 grid-cols-8 rounded-xl overflow-hidden shadow-[2px_2px_5px_3px_rgba(0,0,0,0.25)]'>
        <div className='col-span-7 flex flex-col my-5 gap-y-2 text-left items-start ml-10 pr-5 '>
          <span className='text-lg font-medium'>
            {weekDay}, {day} {month} {year}
          </span>
          <span className='text-3xl font-bold'>
            {appointmentStart} - {appointmentEnd}
          </span>
          <span className='py-2 '>{proceduresNames.join(', ')}</span>
          <span className='text-sm'>{serviceProviderName}</span>
        </div>
        {upcoming && (
          <div className='flex flex-col '>
            <ActionButton
              type={ActionButtonType.EDIT}
              shape={ActionButtonShape.RELATIVE}
              onClick={() => setIsAppointmentModalOpen(true)}
            />
            <ActionButton
              type={ActionButtonType.DELETE}
              shape={ActionButtonShape.RELATIVE}
              onClick={() => setIsDeleteModalOpen(true)}
            />
          </div>
        )}
      </div>
      <AppointmentModal
        appointment={appointment}
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={() => deleteUserAppointment!(appointment.id)}
      />
    </>
  )
}

export default AppointmentCard
