import React, { useEffect } from 'react'
import PageTitle from '../../../components/PageTitle'
import AppointmentList from './AppointmentList'
import {
  Appointment,
  AppointmentRequest,
} from '../../../store/userAppointments/model'
import PatientDashboardContext from '../contexts/PatientDashboardContext'
import { Provider } from '../../../store/procedures/model'

interface AppointmentPageProps {
  appointments: Appointment[]
  getUserAppointmentsFetch: () => void
  getProceduresFetch: () => void
  setUserAppointment: (payload: AppointmentRequest) => void
  patchUserAppointment: (payload: AppointmentRequest) => void
  deleteUserAppointment: (payload: number) => void
  providers: Provider[]
  error: string | null
}

function PatientDashboard(props: AppointmentPageProps) {
  const {
    appointments,
    getUserAppointmentsFetch,
    getProceduresFetch,
    setUserAppointment,
    patchUserAppointment,
    deleteUserAppointment,
    providers,
    error,
  } = props

  useEffect(() => {
    getUserAppointmentsFetch()
  }, [])

  const patientDashboardContext = {
    getProceduresFetch: getProceduresFetch,
    setUserAppointment: setUserAppointment,
    patchUserAppointment: patchUserAppointment,
    deleteUserAppointment: deleteUserAppointment,
    providers: providers,
    error: error,
  }

  return (
    <div>
      <PageTitle title='Upcoming Appointments' />
      <PatientDashboardContext.Provider value={patientDashboardContext}>
        <AppointmentList
          upcoming
          userAppointments={appointments.filter(
            (appointment) => appointment.timeslot.endTime >= new Date(),
          )}
        />
      </PatientDashboardContext.Provider>
      <PageTitle title='Previous Appointments' />
      <AppointmentList
        userAppointments={appointments.filter(
          (appointment) => appointment.timeslot.endTime < new Date(),
        )}
      />
    </div>
  )
}

export default PatientDashboard
