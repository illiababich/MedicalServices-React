import { connect } from 'react-redux'
import ManagerDashboard from './components/ManagerDashboard'
import {
  createTimeslots,
  getTimeslotsFetch,
} from '../../store/timeslots/actions'
import { getTimeslots } from '../../store/timeslots/selectors'
import { getServiceProviders } from '../../store/serviceProviders/selectors'
import { getServiceProvidersFetch } from '../../store/serviceProviders/actions'
import { getTimeslotsError } from '../../store/timeslots/selectors'

const mapStateToProps = (state: any) => ({
  serviceProviders: getServiceProviders(state),
  timeslots: getTimeslots(state),
  error: getTimeslotsError(state),
})

const mapDispatchToProps = {
  createTimeslots,
  getServiceProvidersFetch,
  getTimeslotsFetch,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)
