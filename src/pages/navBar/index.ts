import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import { getAuthToken, getLastCheckupDate } from '../../store/auth/selectors'

const mapStateToProps = (state: any) => ({
  token: getAuthToken(state),
  lastCheckupDate: getLastCheckupDate(state),
})

export default connect(mapStateToProps)(NavBar)
