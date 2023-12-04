import { serverClient } from '..'
import { UserPatch } from './model'

export async function fetchUsers() {
  return await serverClient.get('users')
}

export async function setUser(data: UserPatch) {
  const { id } = data
  return await serverClient.patch(`users/${id}`, data)
}
