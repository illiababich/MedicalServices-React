import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import TimeslotsPage from './pages/timeslots'
import PatientDashboard from './pages/patientDashboard'
import ProceduresPage from './pages/procedures'
import LoginPage from './pages/login/components/LoginPage'
import AdminDashboard from './pages/adminDashboard'
import PrivateRoutes from './components/privateRoutes'
import ManagerDashboard from './pages/managerDashboard'
import PatientsPage from './pages/patients'
import NavBar from './pages/navBar'
import { Role } from './constants/enums'
import PublicRoutes from './components/publicRoutes'

const NavbarWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoutes roles={[Role.PATIENT, Role.MANAGER, Role.ADMIN]}>
            <PatientDashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: '/manager',
        element: (
          <PrivateRoutes roles={[Role.MANAGER, Role.ADMIN]}>
            <ManagerDashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: '/patients',
        element: (
          <PrivateRoutes roles={[Role.MANAGER, Role.ADMIN]}>
            <PatientsPage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/admin',
        element: (
          <PrivateRoutes roles={[Role.ADMIN]}>
            <AdminDashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: '/timeslots',
        element: <TimeslotsPage />,
      },
      {
        path: '/procedures',
        element: (
          <PrivateRoutes
            roles={[
              Role.PATIENT,
              Role.MANAGER,
              Role.ADMIN,
              Role.SERVICE_PROVIDER,
            ]}
          >
            <ProceduresPage />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoutes>
        <LoginPage />
      </PublicRoutes>
    ),
  },
])

export default router
