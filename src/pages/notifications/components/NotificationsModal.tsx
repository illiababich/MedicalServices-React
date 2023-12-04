import React from 'react'
import CheckupReminder from './CheckupReminder'
import NotificationContext from '../contexts/NotificationContext'

function NotificationsModal() {
  const context = React.useContext(NotificationContext)
  const showCheckupReminder = context?.showCheckupReminder
  const monthsSinceLastCheckup = context?.monthsSinceLastCheckup

  return (
    <div className='z-5 w-64 bg-white rounded-lg shadow-md shadow-light-blue border absolute text-sm'>
      <div className='pt-4 px-4'>
        <span>Notifications</span>
      </div>
      <div className='flex justify-center items-center w-full'>
        <hr className='w-11/12 h-px border-1 border-gray-400' />
      </div>
      <ul className='py-1 divide-y divide-gray-100'>
        <li
          key={1}
          className='block py-2 px-4'
        >
          {showCheckupReminder! ? (
            <CheckupReminder monthsSinceLastCheckup={monthsSinceLastCheckup!} />
          ) : (
            <span className='font-italic'>No new notifications</span>
          )}
        </li>
      </ul>
    </div>
  )
}

export default NotificationsModal
