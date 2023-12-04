import React from 'react'
import { Link } from 'react-router-dom'

interface TapProps {
  child?: JSX.Element
  role: string
  link: string
}

function Tab(props: TapProps) {
  const { child, role, link } = props
  return (
    <Link
      className='hidden md:inline-flex h-full items-center px-4 font-semibold hover:text-blue'
      to={link}
    >
      {child}
      {role}
    </Link>
  )
}

export default Tab
