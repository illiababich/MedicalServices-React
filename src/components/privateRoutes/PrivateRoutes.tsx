import { Navigate } from 'react-router-dom'
import React from 'react'
import { DecodeJWTToken } from '../../utils/decodeJWTToken'
import { Role } from '../../constants/enums'

interface PrivateRoutesProps {
  children: JSX.Element
  roles: Role[]
  token: string
}

const PrivateRoutes = (props: PrivateRoutesProps) => {
  const { roles, children, token } = props
  const userRoles: Array<string> = DecodeJWTToken(token)

  const contains = roles.some((element) => {
    return userRoles.includes(element)
  })

  return <>{contains ? children : <Navigate to='/login' />}</>
}
export default PrivateRoutes
