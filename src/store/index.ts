import rootReducer, { TRootState } from '../reducers'
import { createStore } from 'redux'

export const initialState: TRootState = {
  counter: 0,
  isLogged: false,
}

export const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
