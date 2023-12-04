import { serverClient } from '..'
import { Role } from './model'

export async function setUserRole(role: Role) {
  const { id, role: roleName } = role
  const upperCaseRoleName = roleName.toUpperCase()

  return await serverClient.post(`roles/add/${id}/${upperCaseRoleName}`)
}

export async function removeUserRole(userRole: Role) {
  const { id, role } = userRole
  return await serverClient.post(`roles/remove/${id}/${role}`)
}

export async function fetchRoles() {
  return await serverClient.get('roles')
}
