import React, { useState, useEffect } from 'react'
import PageTitle from '../../../components/PageTitle'
import AddTimeslotsModal from './AddTimeslotsModal'
import { Timeslot } from '../../../store/timeslots/model'
import { ServiceProvider } from '../../../store/serviceProviders/model'
import Button from '../../../components/Button'
import { ButtonType, ButtonColor, Size } from '../../../constants/enums'
import TimeslotsPage from '../../timeslots/components/TimeslotsPage'

interface ManagerDashboardProps {
  createTimeslots: (payload: Timeslot[]) => void
  serviceProviders: ServiceProvider[]
  getServiceProvidersFetch: () => void
  error: string | null
  timeslots: Record<string, Timeslot[]>
  getTimeslotsFetch: () => void
}

function ManagerDashboard(props: ManagerDashboardProps) {
  const {
    createTimeslots,
    serviceProviders,
    getServiceProvidersFetch,
    error,
    timeslots,
    getTimeslotsFetch,
  } = props
  const [isAddtimeslotsModalOpen, setIsAddtimeslotsModalOpen] = useState(false)
  useEffect(() => {
    getServiceProvidersFetch()
  }, [])

  useEffect(() => {
    if (!isAddtimeslotsModalOpen) getTimeslotsFetch()
  }, [isAddtimeslotsModalOpen])

  return (
    <div>
      <PageTitle title='Timeslots' />
      <div className='flex justify-center'>
        <div className='mb-2 '>
          <Button
            type={ButtonType.BUTTON}
            size={Size.BIG}
            color={ButtonColor.PRIMARY}
            onClick={() => setIsAddtimeslotsModalOpen(true)}
          >
            <div>Add timeslots</div>
          </Button>
        </div>
      </div>
      <TimeslotsPage
        timeslots={timeslots}
        getTimeslotsFetch={getTimeslotsFetch}
      />
      <AddTimeslotsModal
        isOpen={isAddtimeslotsModalOpen}
        onClose={() => setIsAddtimeslotsModalOpen(false)}
        createTimeslots={createTimeslots}
        serviceProviders={serviceProviders}
        error={error}
      />
    </div>
  )
}

export default ManagerDashboard
