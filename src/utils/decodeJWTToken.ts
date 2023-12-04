import jwt_decode from 'jwt-decode'

interface DecodeJwt {
  scope: string
}
export function DecodeJWTToken(jwt?: string): Array<string> {
  if (jwt) {
    const { scope }: DecodeJwt = jwt_decode(jwt)
    return scope.split(' ')
  }
  return []
}
