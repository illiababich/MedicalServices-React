import React from 'react'
import LoginForm from '../index'
import { ReactComponent as LoginIllustration } from '../../../assets/login.svg'
import './Login.css'

function Login() {
  return (
    <div className='login-page-size'>
      <LoginIllustration className='image-size ' />
      <LoginForm />
    </div>
  )
}

export default Login
