import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from './reducers'
import { increment, decrement, toggleIsLoggedIn } from './actions'

function App() {
  const { counter, isLogged } = useSelector((state: TRootState) => state)
  const dispatch = useDispatch()
  const key: number = 1

  const handleIncrement = (key: number): void => {
    // async update
    setTimeout(() => dispatch(increment(key)), 1000)
  }

  const handleDecrement = (key: number): void => {
    dispatch(decrement(key))
  }

  const handleIsLoggedInClick = () => {
    dispatch(toggleIsLoggedIn())
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='counter'>
          <button className='App-button' onClick={() => handleIncrement(key)}>
            Increment
          </button>
          <span>{counter}</span>
          <button className='App-button' onClick={() => handleDecrement(key)}>
            Decrement
          </button>
        </div>
        <div>
          <button onClick={handleIsLoggedInClick} className='App-button'>
            isLogged: {`${isLogged}`}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
