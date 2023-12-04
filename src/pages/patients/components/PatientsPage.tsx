import React, { useEffect } from 'react'
import PageTitle from '../../../components/PageTitle'
import PatientTable from './PatientTable'
import { User, UserPatch } from '../../../store/users/model'
import PatientsPageContext from '../contexts/PatientsPageContext'

interface PatientsPageProps {
  patients: User[]
  getUsersFetch: () => void
  setUser: (user: UserPatch) => void
}

function PatientsPage(props: PatientsPageProps) {
  const { patients, getUsersFetch, setUser } = props

  useEffect(() => {
    getUsersFetch()
  }, [])

  const patientsPageContext = {
    setUser: setUser,
  }

  return (
    <div>
      <PageTitle title='Patients' />
      <div>
        <PatientsPageContext.Provider value={patientsPageContext}>
          <PatientTable patients={patients} />
        </PatientsPageContext.Provider>
      </div>
    </div>
  )
}

export default PatientsPage
