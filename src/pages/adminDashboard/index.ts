import { connect } from 'react-redux'
import AdminDashboard from './components/AdminDashboard'
import { getUsers } from '../../store/users/selectors'
import { getUsersFetch } from '../../store/users/actions'
import { setUserRole, removeUserRole } from '../../store/userRoles/actions'
import { getRoles } from '../../store/userRoles/selectors'

const mapStateToProps = (state: any) => ({
  users: getUsers(state),
  roles: getRoles(state),
})

const mapDispatchToProps = { getUsersFetch, setUserRole, removeUserRole }

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
