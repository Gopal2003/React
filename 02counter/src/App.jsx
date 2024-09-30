import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    if(counter < 20)
    counter = counter + 1;
  
    setCounter(counter);
    console.log('counter:', counter);
  }

  const removeValue = () => {
    if (counter != 0)
      counter = counter - 1;

    setCounter(counter);
    console.log('counter:', counter);
  }
  // onClick = {addValue} is called event handler.
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
