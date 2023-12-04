import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import axios from 'axios'
import handleDates from '../utils/parseISO'
import { persistStore } from 'redux-persist'
import { getAuthToken } from './auth/selectors'

const serverClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

serverClient.interceptors.response.use(
  (response) => {
    handleDates(response.data)
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

serverClient.interceptors.request.use(
  async (config) => {
    const jwt = getAuthToken(store.getState())
    if (jwt) {
      config.headers = {
        Authorization: `Bearer ${jwt}`,
      }
    }
    return config
  },
  (error) => Promise.reject(error),
)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { serverClient, persistor }
export default store
