import React from 'react'
import { connect } from 'react-redux'
import { getUsersFetch, setUser } from '../../store/users/actions'
import { getUsers } from '../../store/users/selectors'
import PatientsPage from './components/PatientsPage'

const mapStateToProps = (state: any) => ({
  patients: getUsers(state),
})

const mapDispatchToProps = { getUsersFetch, setUser }

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage)
