import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="main-wrapper">
      <div className="container">
        <header>
          <h1>Counter</h1>
          <p>Experiment 08 : Counter using ReactJS</p>
        </header>

        <div className='counter-card'>
          <div className="count-display">
            <span className="count-number">{count}</span>
          </div>

          <div className="controls">
            <button className='btn btn-decrement' onClick={decrement} aria-label="Decrement">
              <span>-</span>
            </button>
            <button className='btn btn-reset' onClick={reset} aria-label="Reset">
              <span>Reset</span>
            </button>
            <button className='btn btn-increment' onClick={increment} aria-label="Increment">
              <span>+</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
