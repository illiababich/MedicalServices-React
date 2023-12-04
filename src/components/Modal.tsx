import React from 'react'
import ReactDom from 'react-dom'
import { Size } from '../constants/enums'
import clsx from 'clsx'

interface ModalProps {
  open: boolean
  children: JSX.Element
  onClose: () => void
  size: Size
}

export default function Modal(props: ModalProps) {
  const { open, children, onClose, size } = props
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div
        className='fixed inset-0 bg-black/[.2] z-50'
        onClick={onClose}
      />
      <div
        className={clsx(
          'fixed top-1/2 left-1/2 max-h-screen overflow-scroll -translate-y-1/2 -translate-x-1/2 bg-white  w-5/12 rounded-lg overflow-y-visible p-8 shadow-lg z-50',
          {
            ['w-6/12 md:w-4/12 lg:w-3/12']: size === Size.SMALL,
            ['w-8/12 md:w-6/12 lg:w-5/12']: size === Size.MEDIUM,
            ['w-10/12 md:w-8/12 lg:w-8/12']: size === Size.BIG,
          },
        )}
      >
        {children}
      </div>
    </>,
    document.getElementById('portal') as Element,
  )
}
