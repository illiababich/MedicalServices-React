import React from 'react'
import clsx from 'clsx'

export interface PreviewTimeslotInterface {
  startTime: string
  endTime: string
  disabled?: boolean
}

interface PreviewTimeslotProps {
  timeslot: PreviewTimeslotInterface
  changeTimeslotStatus: (startTime: string) => void
}

function PreviewTimeslot(props: PreviewTimeslotProps) {
  const { startTime, endTime, disabled } = props.timeslot
  const { changeTimeslotStatus } = props

  function handleChangeTimeslotStatus() {
    changeTimeslotStatus(startTime)
  }

  return (
    <div
      className={clsx(
        'w-20 bg-light-blue text-sm rounded-xl p-3 hover:cursor-pointer xl:text-md xl:w-28 xl:h-12 text-center ',
        {
          ['bg-red-light']: disabled,
        },
      )}
      onClick={handleChangeTimeslotStatus}
    >
      <span>
        {startTime}-{endTime}
      </span>
    </div>
  )
}

export default PreviewTimeslot
