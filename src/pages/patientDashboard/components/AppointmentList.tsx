import React, { useState } from 'react'
import AppointmentCard from './AppointmentCard'
import { Appointment } from '../../../store/userAppointments/model'
import { RoundButtonType } from '../../../constants/enums'
import RoundButton from '../../../components/RoundButton'
import AppointmentModal from '../appointmentModal/AppointmentModal'

interface AppointmentListProps {
  userAppointments: Appointment[]
  upcoming?: boolean
}

function AppointmentList(props: AppointmentListProps) {
  const { userAppointments, upcoming } = props
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  return (
    <div className='flex justify-center'>
      <div className='justify-center flex flex-wrap w-10/12 gap-x-20 gap-y-10 md:justify-start'>
        {userAppointments.map((appointment) => {
          return (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              upcoming={upcoming}
            />
          )
        })}
        {upcoming && (
          <RoundButton
            type={RoundButtonType.ADD}
            onClick={() => setIsAppointmentModalOpen(true)}
          />
        )}
      </div>
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  )
}

export default AppointmentList
