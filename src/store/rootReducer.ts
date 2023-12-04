import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import timeslotsReducer from './timeslots/reducers'
import userAppointmentsReducer from './userAppointments/reducers'
import usersReducer from './users/reducers'
import userRolesReducer from './userRoles/reducers'
import proceduresReducer from './procedures/reducers'
import serviceProvidersReducer from './serviceProviders/reducers'
import authReducer from './auth/reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['loginResponse'],
}

const reducers = {
  timeslots: timeslotsReducer,
  auth: persistReducer<any, any>(persistConfig, authReducer),
  users: usersReducer,
  userAppointments: userAppointmentsReducer,
  userRoles: userRolesReducer,
  procedures: proceduresReducer,
  serviceProviders: serviceProvidersReducer,
}

const rootReducer = combineReducers(reducers)

export type ApplicationState = StateType<typeof reducers>

export default rootReducer
