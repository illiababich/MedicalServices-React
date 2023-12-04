import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { ButtonColor, ButtonType, Size } from '../../../constants/enums'

type LogOutSuccess = typeof import('../../../store/auth/actions').logOutSuccess

interface LogOutButtonProps {
  logOutSuccess: LogOutSuccess
}

function LogOutButton({ logOutSuccess }: LogOutButtonProps) {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => logOutSuccess({ callback: navigate })}
      type={ButtonType.BUTTON}
      color={ButtonColor.PRIMARY}
      size={Size.MEDIUM}
    >
      <p className='font-bold'>Log out</p>
    </Button>
  )
}

export default LogOutButton
