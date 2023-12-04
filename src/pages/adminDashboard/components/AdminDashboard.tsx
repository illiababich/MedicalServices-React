import React, { useEffect } from 'react'
import PageTitle from '../../../components/PageTitle'
import UserTable from './UserTable'
import { User } from '../../../store/users/model'
import { Role } from '../../../store/userRoles/model'

interface AdminDashboardProps {
  users: User[]
  roles: Role[]
  getUsersFetch: () => void
  setUserRole: (payload: Role) => void
  removeUserRole: (payload: Role) => void
}

function AdminDashboard(props: AdminDashboardProps) {
  const { users, roles, getUsersFetch, setUserRole, removeUserRole } = props

  useEffect(() => {
    getUsersFetch()
  }, [])

  return (
    <div>
      <PageTitle title='Users' />
      <div>
        <UserTable
          users={users}
          roles={roles}
          setUserRole={setUserRole}
          removeUserRole={removeUserRole}
        />
      </div>
    </div>
  )
}

export default AdminDashboard
