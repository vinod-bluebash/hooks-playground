import React, {useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  
  useEffect(() => {        //After every render
    console.log('updating document title')
    document.title = `Clicked ${count} times`
  })
  
  // useEffect(() => {           //useEffect Conditionally
  //   console.log('updating document title')
  //   document.title = `Clicked ${count} times`
  // }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
      <input onChange={e => setInput(e.target.value)} value={input} />
    </div>
  )
}

export default HookCounterOne