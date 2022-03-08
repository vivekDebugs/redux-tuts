export enum ActionType {
  SET_INCREAMENT,
  SET_DECREAMENT,
  SET_IS_LOGGED,
}

export type TAction =
  | { type: ActionType.SET_INCREAMENT; payload: number }
  | { type: ActionType.SET_DECREAMENT; payload: number }
  | { type: ActionType.SET_IS_LOGGED }
