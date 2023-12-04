import { connect } from 'react-redux'
import { logOutSuccess } from '../../../store/auth/actions'
import LogOutButton from './LogOutButton'

const mapDispatchToProps = { logOutSuccess }

export default connect(undefined, mapDispatchToProps)(LogOutButton)
