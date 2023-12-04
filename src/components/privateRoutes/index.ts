import { connect } from 'react-redux'
import PrivateRoutes from './PrivateRoutes'
import { getAuthToken } from '../../store/auth/selectors'

const mapStateToProps = (state: any) => ({
  token: getAuthToken(state),
})

export default connect(mapStateToProps)(PrivateRoutes)
