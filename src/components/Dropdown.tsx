import React, { useState } from 'react'
import clsx from 'clsx'
import RoundButton from './RoundButton'
import { RoundButtonType } from '../constants/enums'

interface DropdownItem {
  key: number
  value: string
}

interface DropdownProps {
  items: DropdownItem[]
  onSelect: (item: any) => void
}

export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { items, onSelect } = props
  if (items.length === 0) return null

  return (
    <div className='inline-block text-center w-24'>
      <RoundButton
        type={RoundButtonType.ADD}
        onClick={() => setIsOpen(!isOpen)}
        scale={0.5}
      />
      <div
        className={clsx(
          'z-50 w-24 bg-white rounded-xl divide-y divide-gray-100 border shadow-md absolute',
          !isOpen && 'hidden',
        )}
      >
        <ul className='py-1 text-sm text-gray-700 font-roman'>
          {items.map((item) => (
            <li
              key={item.key}
              className='block py-2 px-4 hover:bg-gray-100'
              onClick={() => {
                setIsOpen(false)
                onSelect(item)
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
