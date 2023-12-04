import { connect } from 'react-redux'
import {
  createProcedure,
  modifyProcedure,
  deleteProcedure,
} from '../../../store/procedures/actions'
import ProcedureModal from './ProcedureModal'

const mapDispatchToProps = { createProcedure, modifyProcedure, deleteProcedure }

export default connect(undefined, mapDispatchToProps)(ProcedureModal)
