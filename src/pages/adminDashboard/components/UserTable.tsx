import React from 'react'
import Badge from '../../../components/Badge'
import { Dropdown } from '../../../components/Dropdown'
import Table from '../../../components/Table'
import { User } from '../../../store/users/model'
import { Role } from '../../../store/userRoles/model'
import { getRolesDifference } from '../../../utils/getItemsDifference'
import { uppercaseToTitleCase } from '../../../utils/format'

export interface UsersTableProps {
  users: User[]
  roles: Role[]
  setUserRole: (payload: Role) => void
  removeUserRole: (payload: Role) => void
}

function UserTable(props: UsersTableProps) {
  const { users, roles, setUserRole, removeUserRole } = props

  return (
    <Table headers={['Users', 'Roles']}>
      {users.map((user) => (
        <tr
          className='border-b-2 h-20'
          key={user.id}
        >
          <td className='border-r-2 border-r-blue px-20 w-3/5'>
            <p className='font-bold text-lg'>{user.fullName}</p>
            <p className='font-roman'>{user.email}</p>
          </td>
          <td className='text-lg py-5 space-x-3 flex items-center justify-center'>
            {user.roles.map((role) => (
              <Badge
                key={role.id}
                text={uppercaseToTitleCase(role.role)}
                buttonEvent={(role: string) =>
                  removeUserRole({ id: user.id, role: role.toUpperCase() })
                }
              />
            ))}
            <Dropdown
              items={getRolesDifference(roles, user.roles).map((role) => {
                return {
                  key: role.id,
                  value: uppercaseToTitleCase(role.role),
                }
              })}
              onSelect={(role) =>
                setUserRole({
                  id: user.id,
                  role: role.value,
                })
              }
            />
          </td>
        </tr>
      ))}
    </Table>
  )
}

export default UserTable
