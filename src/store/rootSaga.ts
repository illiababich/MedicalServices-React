import { all } from 'redux-saga/effects'
import proceduresSaga from './procedures/sagas'
import timeslotsSaga from './timeslots/sagas'
import authTokenSaga from './auth/sagas'
import usersSaga from './users/sagas'
import userAppointmentsSaga from './userAppointments/sagas'
import userRolesSaga from './userRoles/sagas'
import serviceProvidersSaga from './serviceProviders/sagas'

export default function* rootSaga() {
  yield all([
    timeslotsSaga(),
    usersSaga(),
    userAppointmentsSaga(),
    userRolesSaga(),
    proceduresSaga(),
    serviceProvidersSaga(),
    authTokenSaga(),
  ])
}
