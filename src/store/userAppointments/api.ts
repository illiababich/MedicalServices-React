import { serverClient } from '..'
import { AppointmentRequest } from './model'

export async function fetchUserAppointments() {
  return await serverClient.get('/appointments/user')
}

export async function setUserAppointment(appointment: AppointmentRequest) {
  return await serverClient.post('/appointments', appointment)
}

export async function patchUserAppointment(appointment: AppointmentRequest) {
  const { id } = appointment
  return await serverClient.patch(`/appointments/${id}`, appointment)
}

export async function deleteUserAppointment(id: number) {
  return await serverClient.delete(`/appointments/${id}`)
}
