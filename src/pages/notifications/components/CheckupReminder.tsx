import React, { useState } from 'react'
import NotificationContext from '../contexts/NotificationContext'
import Button from '../../../components/Button'
import { ButtonType, ButtonColor, Size } from '../../../constants/enums'
import { Link } from 'react-router-dom'
import AppointmentModal from '../../patientDashboard/appointmentModal/AppointmentModal'

interface CheckupReminderProps {
  monthsSinceLastCheckup: number
}

function CheckupReminder(props: CheckupReminderProps) {
  const { monthsSinceLastCheckup } = props
  const context = React.useContext(NotificationContext)

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col'>
        <span>{`It's been ${monthsSinceLastCheckup} months since your last check-up.`}</span>
        <div className='flex justify-center p-2'>
          <Link to='/'>
            <Button
              type={ButtonType.BUTTON}
              color={ButtonColor.PRIMARY}
              size={Size.MEDIUM}
              onClick={() => setIsAppointmentModalOpen(true)}
            >
              <p className='font-roman'>Book appointment</p>
            </Button>
          </Link>
        </div>
      </div>
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  )
}

export default CheckupReminder
