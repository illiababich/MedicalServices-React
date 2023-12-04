import React, { useState } from 'react'
import Modal from './Modal'
import { RoundButtonType, Size } from '../constants/enums'
import RoundButton from './RoundButton'

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='text-center'>
      <RoundButton
        type={RoundButtonType.ADD}
        onClick={() => setIsOpen(true)}
      />

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size={Size.MEDIUM}
      >
        {/* Here is just random content to fill Modal with something */}
        <div>
          <h1 className='text-2xl font-bold'>Warning</h1>
          <div>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            rerum nam magni harum delectus et ipsum, ut, architecto, sit
            corporis fuga nemo! Illo hic exercitationem, obcaecati in libero
            quisquam aperiam.{' '}
          </div>
          <div>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            rerum nam magni harum delectus et ipsum, ut, architecto, sit
            corporis fuga nemo! Illo hic exercitationem, obcaecati in libero
            quisquam aperiam.{' '}
          </div>
          <div>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            rerum nam magni harum delectus et ipsum, ut, architecto, sit
            corporis fuga nemo! Illo hic exercitationem, obcaecati in libero
            quisquam aperiam.{' '}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalDemo
