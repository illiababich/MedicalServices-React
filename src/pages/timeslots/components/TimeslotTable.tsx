import React from 'react'
import { TimeslotHeader } from './TimeslotHeader'
import { Timeslot } from '../../../store/timeslots/model'
import { TimeslotCard } from './TimeslotCard'

interface TimeslotTableProps {
  tableColumns: Record<string, Timeslot[]>
  tableColumnsToDisplay: number
  startColumnToDisplay: number
}

export function TimeslotTable(props: TimeslotTableProps) {
  const { tableColumns, tableColumnsToDisplay, startColumnToDisplay } = props

  const columnsToDisplay = Object.fromEntries(
    Object.entries(tableColumns).slice(
      startColumnToDisplay,
      startColumnToDisplay + tableColumnsToDisplay,
    ),
  )

  return (
    <div className='grid grid-cols-5 py-10'>
      {Object.entries(columnsToDisplay).map(([key, value]) => (
        <div
          className='flex flex-col mx-1'
          key={key}
        >
          <TimeslotHeader date={key} />
          {value.map((timeslot) => (
            <TimeslotCard
              key={timeslot.id}
              timeslot={timeslot}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default TimeslotTable
