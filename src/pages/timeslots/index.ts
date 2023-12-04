import { connect } from 'react-redux'
import TimeslotsPage from './components/TimeslotsPage'
import { getTimeslots } from '../../store/timeslots/selectors'
import { getTimeslotsFetch } from '../../store/timeslots/actions'

const mapStateToProps = (state: any) => ({
  timeslots: getTimeslots(state),
})

const mapDispatchToProps = { getTimeslotsFetch }

export default connect(mapStateToProps, mapDispatchToProps)(TimeslotsPage)
