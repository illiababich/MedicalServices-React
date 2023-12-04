import React from 'react'
import { ActionButtonType } from '../constants/enums'
import { ActionButtonShape } from '../constants/enums'
import DeleteIcon from './icons/DeleteIcon'
import EditIcon from './icons/EditIcon'
import clsx from 'clsx'

interface ActionButtonProps {
  type: ActionButtonType
  shape: ActionButtonShape
  onClick?: () => void
}

function ActionButton(props: ActionButtonProps) {
  const { type, shape, onClick } = props

  const chooseButtonType = (type: ActionButtonType) => {
    switch (type) {
      case ActionButtonType.EDIT:
        return <EditIcon />
      case ActionButtonType.DELETE:
        return <DeleteIcon />
    }
  }

  return (
    <button
      className={clsx(' inline-flex justify-center items-center  ', {
        ['w-8 h-8 rounded-full']: shape === ActionButtonShape.ROUND,
        ['h-full']: shape === ActionButtonShape.RELATIVE,
        ['bg-blue hover:bg-blue-active']: type === ActionButtonType.EDIT,
        ['bg-red hover:bg-red-active']: type === ActionButtonType.DELETE,
      })}
      onClick={onClick}
    >
      {chooseButtonType(type)}
    </button>
  )
}

export default ActionButton
