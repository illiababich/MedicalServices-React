import { connect } from 'react-redux'
import { getProceduresFetch } from '../../store/procedures/actions'
import { getProcedures } from '../../store/procedures/selectors'
import ProceduresPage from './components/ProceduresPage'
import { getAuthToken } from '../../store/auth/selectors'

const mapStateToProps = (state: any) => ({
  providers: getProcedures(state),
  token: getAuthToken(state),
})

const mapDispatchToProps = { getProceduresFetch }

export default connect(mapStateToProps, mapDispatchToProps)(ProceduresPage)
