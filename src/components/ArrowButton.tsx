import React from 'react'
import { Direction } from '../constants/enums'
import clsx from 'clsx'

interface ArrowButtonProps {
  direction: Direction
  onClick: () => void
  disabled?: boolean
}

function ArrowButton(props: ArrowButtonProps) {
  const { direction, onClick, disabled } = props

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'text-white bg-blue hover:bg-blue-active disabled:bg-light-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2',
        {
          ['rotate-180']: direction === Direction.LEFT,
          ['rotate-0']: direction === Direction.RIGHT,
          ['-rotate-90']: direction === Direction.UP,
          ['rotate-90']: direction === Direction.DOWN,
        },
      )}
    >
      <svg
        aria-hidden='true'
        className='w-4 h-4'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  )
}

export default ArrowButton
