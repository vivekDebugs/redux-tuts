import { Reducer } from 'redux'
import { ActionType, TAction } from '../types'

const isLoggedReducer: Reducer<boolean, TAction> = (state = false, action) => {
  if (action.type !== ActionType.SET_IS_LOGGED) return state
  return !state
}

export default isLoggedReducer
