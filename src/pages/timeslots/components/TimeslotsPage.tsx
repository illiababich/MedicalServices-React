import React, { useEffect } from 'react'
import TimeslotTable from './TimeslotTable'
import ArrowButton from '../../../components/ArrowButton'
import { Direction } from '../../../constants/enums'
import { Timeslot } from '../../../store/timeslots/model'
import { GroupTimeslotsBy } from '../../../constants/enums'

interface TimeslotsPageProps {
  timeslots: Record<string, Timeslot[]>
  getTimeslotsFetch: (payload: {
    available: boolean
    groupedBy: GroupTimeslotsBy
  }) => void
}

function TimeslotsPage(props: TimeslotsPageProps) {
  const { timeslots, getTimeslotsFetch } = props
  const [startColumnToDisplay, setStartColumnToDisplay] = React.useState(0)
  const tableColumnsToDisplay = 5

  useEffect(() => {
    getTimeslotsFetch({
      available: true,
      groupedBy: GroupTimeslotsBy.START_TIME_DATE,
    })
  }, [])

  return (
    <div>
      <div
        className='flex flex-column items-start
      justify-center text-base'
      >
        <div className='flex pr-5 pt-12'>
          <ArrowButton
            direction={Direction.LEFT}
            onClick={() =>
              setStartColumnToDisplay(
                startColumnToDisplay - tableColumnsToDisplay,
              )
            }
            disabled={startColumnToDisplay === 0}
          />
        </div>
        <TimeslotTable
          tableColumns={timeslots}
          tableColumnsToDisplay={tableColumnsToDisplay}
          startColumnToDisplay={startColumnToDisplay}
        />
        <div className='flex pl-5 pt-12'>
          <ArrowButton
            direction={Direction.RIGHT}
            onClick={() =>
              setStartColumnToDisplay(
                startColumnToDisplay + tableColumnsToDisplay,
              )
            }
            disabled={
              startColumnToDisplay + tableColumnsToDisplay >=
              Object.keys(timeslots).length
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TimeslotsPage
