import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function myFunction()
{
  return (
    <h1>From the custom function</h1>
  )
}

//React compile when it gets the "App" code. Check in App.js file where we return the jsx code.
const reactElement = {
  type : 'a',
  props: {
      href : 'https://google.com',
      target : '_blank'
  },

  children : 'Click me to visist the google'
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to visit Google!</a>//+
)

const anotherUser = "BlackDevil";
const innerObject = React.createElement(
  //! Parameters expected by React render function.
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visist the google' ,
  //At last the variable is injected
  anotherUser // Evaluated Expression
)



createRoot(document.getElementById('root')).render(
    <App />
    // myFunction() works directly
    // anotherElement works fine
    // reactElement can't as the react is expecting some other parameters like we did in customRender function.
    // innerObject 
)
