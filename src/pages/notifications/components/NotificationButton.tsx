import React from 'react'
import { ReactComponent as NotificationIcon } from '../../../assets/notification.svg'
import NotificationsModal from './NotificationsModal'
import NotificationContext from '../contexts/NotificationContext'

function NotificationButton() {
  const context = React.useContext(NotificationContext)
  const openNotifications = context?.openNotifications
  const setOpenNotifications = context?.setOpenNotifications

  return (
    <div className='inline-block w-24 pt-2'>
      <button
        className='hover:bg-gray-100 rounded-full'
        onClick={() => setOpenNotifications!(!openNotifications)}
      >
        <NotificationIcon />
      </button>
      {openNotifications && <NotificationsModal />}
    </div>
  )
}

export default NotificationButton
