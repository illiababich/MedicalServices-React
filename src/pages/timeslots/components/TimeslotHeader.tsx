import React from 'react'

interface TimeslotHeaderProps {
  date: string
}

export function TimeslotHeader(props: TimeslotHeaderProps) {
  const { date } = props
  const dateObject = new Date(date)
  const dayOfWeek = dateObject
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toUpperCase()

  return (
    <div className='mb-4 grid grid-rows-2 pl-4'>
      <div className='text-left text-sm font-bold'>{dayOfWeek}</div>
      <div className='text-left text-xl font-bold'>{date}</div>
    </div>
  )
}
