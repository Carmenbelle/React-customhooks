import React from 'react'
import UseCounter from './UseCounter'

const CounterTwo = () => {

    const [count, increment, decrement, reset] = UseCounter()
   

  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo