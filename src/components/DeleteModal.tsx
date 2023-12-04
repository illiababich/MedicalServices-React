import React from 'react'
import { ButtonColor, ButtonType, Size } from '../constants/enums'
import Modal from './Modal'
import Button from './Button'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

function DeleteModal(props: DeleteModalProps) {
  const { isOpen, onClose, onDelete } = props

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      size={Size.SMALL}
    >
      <div className='flex flex-col'>
        <h2 className='font-roman text-lg text-center'>
          Are you sure you want to delete this?
        </h2>
        <div className='flex justify-center gap-4 pt-4'>
          <Button
            onClick={() => {
              onClose()
              onDelete()
            }}
            type={ButtonType.BUTTON}
            color={ButtonColor.CANCEL}
            size={Size.SMALL}
          >
            <p className='font-bold'>Yes</p>
          </Button>
          <Button
            onClick={onClose}
            type={ButtonType.BUTTON}
            color={ButtonColor.PRIMARY}
            size={Size.SMALL}
          >
            <p className='font-bold'>No</p>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
