import { combineReducers } from 'redux'
import isLoggedReducer from './isLogged'
import counterReducer from './counter'

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
})

export default rootReducer
export type TRootState = ReturnType<typeof rootReducer>
