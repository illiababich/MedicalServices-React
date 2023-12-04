import { createContext } from 'react'
import { AppointmentRequest } from '../../../store/userAppointments/model'
import { Provider } from '../../../store/procedures/model'

interface PatientDashboardContextInterface {
  getProceduresFetch: () => void
  setUserAppointment: (payload: AppointmentRequest) => void
  patchUserAppointment: (payload: AppointmentRequest) => void
  deleteUserAppointment: (id: number) => void
  providers: Provider[]
  error: string | null
}

const PatientDashboardContext =
  createContext<PatientDashboardContextInterface | null>(null)

export default PatientDashboardContext
