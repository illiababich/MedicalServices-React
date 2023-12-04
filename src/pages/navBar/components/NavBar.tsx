import React from 'react'
import Tab from './Tab'
import { Role } from '../../../constants/enums'
import { DecodeJWTToken } from '../../../utils/decodeJWTToken'
import { NavBarDropdown } from './NavBarDropdown'
import LogOutButton from './LogOutButtonIndex'
import NotificationButton from '../../notifications/components/NotificationButton'
import NotificationContext from '../../notifications/contexts/NotificationContext'
import getDifferenceInMonths from '../../../utils/getDifferenceInMonths'
import { ReactComponent as AdminIcon } from '../../../assets/adminIcon.svg'
import { ReactComponent as ManagerIcon } from '../../../assets/managerIcon.svg'
import { ReactComponent as PatientIcon } from '../../../assets/patientIcon.svg'
import { ReactComponent as ProceduresIcon } from '../../../assets/proceduresIcon.svg'
import { ReactComponent as PatientsIcon } from '../../../assets/patientsIcon.svg'

interface NavBarProps {
  token: string
  lastCheckupDate: string | null
}

function NavBar(props: NavBarProps) {
  const { token, lastCheckupDate } = props
  const roles: Array<string> = DecodeJWTToken(token)

  const monthsSinceLastCheckup = lastCheckupDate
    ? getDifferenceInMonths(new Date(lastCheckupDate))
    : 0
  const showCheckupReminder = monthsSinceLastCheckup >= 12
  const [openNotifications, setOpenNotifications] =
    React.useState(showCheckupReminder)

  const notificationContext = {
    showCheckupReminder: showCheckupReminder,
    monthsSinceLastCheckup: monthsSinceLastCheckup,
    openNotifications: openNotifications,
    setOpenNotifications: setOpenNotifications,
  }

  return (
    <div className='w-full h-[50px] bg-gray-200 relative flex items-center justify-between'>
      <div className='flex items-center'>
        <NavBarDropdown roles={roles} />
        <div className='flex items-center pl-10'>
          <img
            className='w-1/2'
            src='/icon.png'
            alt='Medical services logo'
          />
        </div>
        {roles.includes(Role.ADMIN) && (
          <Tab
            role='Admin'
            link='/admin'
            child={<AdminIcon />}
          />
        )}
        {(roles.includes(Role.MANAGER) || roles.includes(Role.ADMIN)) && (
          <Tab
            role='Manager'
            link='/manager'
            child={<ManagerIcon />}
          />
        )}
        {(roles.includes(Role.PATIENT) ||
          roles.includes(Role.MANAGER) ||
          roles.includes(Role.ADMIN)) && (
          <Tab
            role='Patient'
            link='/'
            child={<PatientIcon />}
          />
        )}
        {(roles.includes(Role.MANAGER) || roles.includes(Role.ADMIN)) && (
          <Tab
            role='Patients'
            link='/patients'
            child={<PatientsIcon />}
          />
        )}
        <Tab
          role='Procedures'
          link='/procedures'
          child={<ProceduresIcon />}
        />
      </div>
      <div className='inline-flex pr-10 items-center'>
        <NotificationContext.Provider value={notificationContext}>
          <NotificationButton />
        </NotificationContext.Provider>
        <div className='hidden md:inline-flex items-center'>
          <LogOutButton />
        </div>
      </div>
    </div>
  )
}

export default NavBar
