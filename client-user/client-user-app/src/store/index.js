import { applyMiddleware, createStore } from 'redux'
import logger from './middlewares/logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'



const store = createStore(rootReducer, applyMiddleware(logger, thunk))
export default store