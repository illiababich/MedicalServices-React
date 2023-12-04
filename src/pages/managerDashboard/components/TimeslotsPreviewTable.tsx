import React from 'react'
import PreviewTimeslot, { PreviewTimeslotInterface } from './PreviewTimeslot'

interface TimeslotsPreviewTableProps {
  timeslots: Record<string, PreviewTimeslotInterface[]>
  changeTimeslotStatus: (startTime: string) => void
}

function TimeslotsPreviewTable(props: TimeslotsPreviewTableProps) {
  const { timeslots, changeTimeslotStatus } = props
  return (
    <div className='grid grid-cols-[repeat(auto-fill,_1fr)] gap-1  overflow-auto max-h-96 content-start grid-flow-col pb-2'>
      {Object.entries(timeslots).map(([key, value]) => (
        <div
          className='flex flex-col mx-1 gap-2 '
          key={key}
        >
          <div className='text-center w-20 xl:w-28 font-bold mb-2'>{key}</div>

          {value.map((timeslot) => (
            <PreviewTimeslot
              key={timeslot.startTime}
              timeslot={timeslot}
              changeTimeslotStatus={changeTimeslotStatus}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default TimeslotsPreviewTable
