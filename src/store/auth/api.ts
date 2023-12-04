import { serverClient } from '..'

export async function fetchAuthToken(payload: object) {
  return await serverClient({
    url: '/login',
    method: 'POST',
    data: payload,
  })
}
