import React from 'react'
import Modal from '../../../components/Modal'
import Section from '../../../components/Section'
import { ButtonType, ButtonColor, Size } from '../../../constants/enums'
import TimeslotsPage from '../../timeslots'
import Button from '../../../components/Button'

interface TimeslotsModalProps {
  isOpen: boolean
  onClose: () => void
}

function TimeslotsModal(props: TimeslotsModalProps) {
  const { isOpen, onClose } = props

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      size={Size.BIG}
    >
      <>
        <Section title='Available timeslots' />
        <TimeslotsPage />
        <div className='flex justify-center'>
          <Button
            onClick={onClose}
            type={ButtonType.BUTTON}
            color={ButtonColor.PRIMARY}
            size={Size.BIG}
          >
            <p className='font-bold'>Select a time</p>
          </Button>
        </div>
      </>
    </Modal>
  )
}

export default TimeslotsModal
