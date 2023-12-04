import React from 'react'
import clsx from 'clsx'
import { RoundButtonType } from '../constants/enums'
import PlusIcon from './icons/PlusIcon'
import MinusIcon from './icons/MinusIcon'

interface RoundButtonProps {
  onClick: () => void
  scale?: number
  type: RoundButtonType
  disabled?: boolean
}

function RoundButton(props: RoundButtonProps) {
  const { onClick, scale, type, disabled } = props
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type='button'
      className={clsx(
        'inline-flex justify-center items-center rounded-full h-10 w-10 self-center justify-self-center',
        {
          'scale-50': scale === 0.5,
          'bg-blue hover:bg-blue-active disabled:bg-light-blue':
            type === RoundButtonType.ADD,
          'bg-red hover:bg-red-active': type === RoundButtonType.DELETE,
        },
      )}
    >
      {type === RoundButtonType.ADD && <PlusIcon />}
      {type === RoundButtonType.DELETE && <MinusIcon />}
    </button>
  )
}

export default RoundButton
