import React, { useState } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

type LoginFetch = typeof import('../../../store/auth/actions').loginFetch

interface ErrorMessage {
  message: string | null
}

interface LoginFormProps {
  error: ErrorMessage | null
  loginFetch: LoginFetch
}

function LoginForm(props: LoginFormProps) {
  const [credentialsError, setCredentialsError] = useState(false)
  const navigate = useNavigate()
  const { error, loginFetch } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    loginFetch({ loginData: data, callback: navigate })
    setCredentialsError(true)
  }

  return (
    <form
      className='form-size bg-blue-gray grid place-items-center rounded-3xl shadow-2xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='form-container-size space-y-5 relative'>
        <h1 className='font-bold place-self-start text-3xl'>Welcome!</h1>
        <input
          className={clsx(
            'form-input',
            credentialsError &&
              error?.message?.includes('500') &&
              'border-red border-2',
          )}
          placeholder='Email address'
          {...register('email', {
            required: 'Email address is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address.',
            },
          })}
          onClick={() => setCredentialsError(false)}
        />
        <input
          className={clsx(
            'form-input',
            credentialsError &&
              error?.message?.includes('500') &&
              'border-red border-2',
          )}
          placeholder='Password'
          type='password'
          {...register('password', { required: 'Password is required.' })}
          onClick={() => setCredentialsError(false)}
        />
        <div className='form-component-width '>
          <p className='text-xs text-red text-center'>
            {errors.email?.message?.toString() ||
              errors.password?.message?.toString()}
            {credentialsError &&
              error?.message?.includes('500') &&
              'Login failed! Invalid email address or password'}
          </p>
        </div>
        <button
          type='submit'
          className='form-button bg-blue'
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default LoginForm
