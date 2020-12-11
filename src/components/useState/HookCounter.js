import React, {useState} from 'react'

function HookCounter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  console.log('Rendering')
  // const increment5 = () => {
  //   for(let i = 0; i < 5; i++) {
  //     setCount(prevCount => prevCount + 1)
  //   }
  // }
  
  return (
    <div>
      Count - {count}
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        {/* <button onClick={increment5}>Increment 5</button> */}
      </div>
    </div>
  )
}

export default HookCounter
