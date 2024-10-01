import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Devil",
    email : "devil@gmail.com",
    description : "This is a description about the user."
  }

  let newArr = [1,2,3,4,5];
  /* <Card username="Gopal Agarwal" btnText="click me!"/>
  <Card username="BlackDevil" btnText="Visit Me!"/> */
  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
        {/* <Card {myObj} /> */}
        {/* <Card someObject = {myObj}/> */}
        {/* <Card someObject = {newArr}/> */}

        <Card username= "Gopal Agarwal" />
        <Card username= "Black Devil" />
    </>
  )
}

export default App
