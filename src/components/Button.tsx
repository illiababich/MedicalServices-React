import React from 'react'
import { ButtonType, ButtonColor, Size } from '../constants/enums'
import clsx from 'clsx'

interface ButtonProps {
  onClick?: () => void
  type: ButtonType
  color: ButtonColor
  children: JSX.Element
  size: Size
}

function Button(props: ButtonProps) {
  const { onClick, type, color, children, size } = props

  return (
    <button
      className={clsx(
        {
          ['bg-blue hover:bg-blue-active']: color === ButtonColor.PRIMARY,
          ['bg-red hover:bg-red-active']: color === ButtonColor.CANCEL,
          ['w-24 h-10 text-sm']: size === Size.SMALL,
          ['w-36 h-8 text-sm']: size === Size.MEDIUM,
          ['w-52 h-10 text-md']: size === Size.BIG,
        },
        'rounded-lg text-white py-2',
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
