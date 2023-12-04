import { connect } from 'react-redux'
import PatientDashboard from './components/PatientDashboard'
import {
  getUserAppointments,
  getUserAppointmentsError,
} from '../../store/userAppointments/selectors'
import {
  getUserAppointmentsFetch,
  setUserAppointment,
  patchUserAppointment,
} from '../../store/userAppointments/actions'
import { getProcedures } from '../../store/procedures/selectors'
import { getProceduresFetch } from '../../store/procedures/actions'
import { deleteUserAppointment } from '../../store/userAppointments/actions'

const mapStateToProps = (state: any) => ({
  appointments: getUserAppointments(state),
  providers: getProcedures(state),
  error: getUserAppointmentsError(state),
})

const mapDispatchToProps = {
  getUserAppointmentsFetch,
  getProceduresFetch,
  setUserAppointment,
  patchUserAppointment,
  deleteUserAppointment,
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard)
