import { connect } from 'react-redux'
import PublicRoutes from './PublicRoutes'
import { getAuthToken } from '../../store/auth/selectors'

const mapStateToProps = (state: any) => ({
  token: getAuthToken(state),
})

export default connect(mapStateToProps)(PublicRoutes)
