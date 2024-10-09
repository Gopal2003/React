import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}";
    
    // console.log(str);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]); // [length, numberAllowed, charAllowed, setPassword] - Tells to the react that cache the re-rendered code.

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select() // To enhance the use experience, we used passwordRef. ?. tells that if the password is present, select.
      passwordRef.current?.setSelectionRange(0,100)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();

  }, [length, numberAllowed, charAllowed, passwordGenerator]) // Here, we are restricting the react to re-render(re-run) the code only when the changes is seen in the values which are in the dependency array but not to reload everytime.

  return (
    <>
      <div className='w-full max-2-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 pr-20 bg-gray-800'>
        <h1 className='text-white text-center text-4xl '>Password Generator</h1>

        <div className='flex shadow-rounded-lg overflow-hidden mb-4 mt-3'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2'
          >Copy</button>

          <button
          onClick={passwordGenerator}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2'
          >More Combinations</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />

            <label> Length: {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);

              }}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultValue={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);

              }}
            />

            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
