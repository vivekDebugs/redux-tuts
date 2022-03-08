import { Reducer } from 'redux'
import { TAction, ActionType } from '../types'

const counterReducer: Reducer<number, TAction> = (state = 0, action) => {
  switch (action.type) {
    case ActionType.SET_INCREAMENT:
      return state + action.payload
    case ActionType.SET_DECREAMENT:
      return state - action.payload

    default:
      return state
  }
}

export default counterReducer
