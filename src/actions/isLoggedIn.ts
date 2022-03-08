import { ActionType, TAction } from '../types'

type TtoggleIsLoggedIn = () => TAction

export const toggleIsLoggedIn: TtoggleIsLoggedIn = () => ({
  type: ActionType.SET_IS_LOGGED,
})
