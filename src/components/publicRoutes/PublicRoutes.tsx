import { Navigate } from 'react-router-dom'
import React from 'react'
import { DecodeJWTToken } from '../../utils/decodeJWTToken'
import { Role } from '../../constants/enums'

interface PublicRoutesProps {
  children: JSX.Element
  token: string
}

const PublicRoutes = (props: PublicRoutesProps) => {
  const { children, token } = props
  const userRoles: Array<string> = DecodeJWTToken(token)

  if (userRoles.includes(Role.ADMIN)) return <Navigate to='/admin' />
  else if (userRoles.includes(Role.MANAGER)) return <Navigate to='/manager' />
  else if (userRoles.includes(Role.PATIENT)) return <Navigate to='/' />
  else if (userRoles.includes(Role.SERVICE_PROVIDER))
    return <Navigate to='/procedures' />
  else return <>{children}</>
}
export default PublicRoutes
