import React, { useState } from 'react'
import clsx from 'clsx'
import './NavBarDropdownStyle.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as AdminIcon } from '../../../assets/adminIcon.svg'
import { ReactComponent as ManagerIcon } from '../../../assets/managerIcon.svg'
import { ReactComponent as PatientIcon } from '../../../assets/patientIcon.svg'
import { ReactComponent as ProceduresIcon } from '../../../assets/proceduresIcon.svg'
import { Role } from '../../../constants/enums'
import LogOutButton from './LogOutButtonIndex'

interface NavBarDropdownProps {
  roles: Array<string>
}

export function NavBarDropdown({ roles }: NavBarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={clsx(
        'fixed md:hidden h-full align-middle z-50 justify-center top-0 left-0',
        isOpen
          ? 'w-8/12 border border-blue bg-white'
          : 'w-[50px] inline-flex relative',
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Menu />
      {roles.includes(Role.ADMIN) && (
        <Link
          className={clsx('navBarDropdownLink', !isOpen && 'hidden')}
          to={'/admin'}
        >
          <AdminIcon />
          Admin
        </Link>
      )}
      {(roles.includes(Role.MANAGER) || roles.includes(Role.ADMIN)) && (
        <Link
          className={clsx('navBarDropdownLink', !isOpen && 'hidden')}
          to={'/manager'}
        >
          <ManagerIcon />
          Manager
        </Link>
      )}
      {(roles.includes(Role.PATIENT) ||
        roles.includes(Role.MANAGER) ||
        roles.includes(Role.ADMIN)) && (
        <Link
          className={clsx('navBarDropdownLink', !isOpen && 'hidden')}
          to={'/'}
        >
          <PatientIcon />
          Patient
        </Link>
      )}
      <Link
        className={clsx('navBarDropdownLink', !isOpen && 'hidden')}
        to={'/procedures'}
      >
        <ProceduresIcon />
        Procedures
      </Link>
      <div
        className={clsx(
          'absolute w-full flex justify-center bottom-[20px]',
          !isOpen && 'hidden',
        )}
      >
        <LogOutButton />
      </div>
    </div>
  )
}
