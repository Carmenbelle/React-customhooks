import React from 'react'
import useCounter from './useCounter'

const CounterTwo = () => {

    const [count, incrementCount, decrementCount, resetCount] = useCounter(10, 10)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default CounterTwo