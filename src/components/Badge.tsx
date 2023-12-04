import React from 'react'
import RemoveIcon from './icons/RemoveIcon'

interface BadgeProps {
  text: string
  buttonEvent: (text: any) => void
}

function Badge(props: BadgeProps) {
  const { text, buttonEvent } = props

  return (
    <span className='inline-flex items-center py-1 px-4 h-8 text-sm font-roman text-gray-600 bg-light-blue rounded-xl'>
      {text}
      <button
        className='inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm hover:bg-gray-100 hover:text-blue-active'
        onClick={() => {
          buttonEvent(text)
        }}
      >
        <RemoveIcon />
      </button>
    </span>
  )
}

export default Badge
