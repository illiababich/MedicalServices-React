import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import { getAuthError } from '../../store/auth/selectors'
import { loginFetch } from '../../store/auth/actions'

const mapStateToProps = (state: any) => ({
  error: getAuthError(state),
})
const mapDispatchToProps = { loginFetch }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
