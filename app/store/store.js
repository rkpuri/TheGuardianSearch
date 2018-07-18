import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from '../redux/reducers'

export const store = createStore(
  reducers,
  applyMiddleware(logger)
)
