import { ActionType, TAction } from '../types'

type Tincrement = (intr: number) => TAction
type Tdecrement = (dctr: number) => TAction

const increment: Tincrement = intr => ({
  type: ActionType.SET_INCREAMENT,
  payload: intr,
})

const decrement: Tdecrement = dctr => ({
  type: ActionType.SET_DECREAMENT,
  payload: dctr,
})

export { increment, decrement }
