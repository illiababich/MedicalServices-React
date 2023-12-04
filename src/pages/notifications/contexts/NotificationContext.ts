import { createContext } from 'react'

interface NotificationContextInterface {
  showCheckupReminder: boolean
  monthsSinceLastCheckup: number
  openNotifications: boolean
  setOpenNotifications: (open: boolean) => void
}

const NotificationContext = createContext<NotificationContextInterface | null>(
  null,
)

export default NotificationContext
