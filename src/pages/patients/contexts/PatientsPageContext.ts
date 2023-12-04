import React from 'react'
import { UserPatch } from '../../../store/users/model'

interface PatientsPageContextInterface {
  setUser: (user: UserPatch) => void
}

const PatientsPageContext =
  React.createContext<PatientsPageContextInterface | null>(null)

export default PatientsPageContext
