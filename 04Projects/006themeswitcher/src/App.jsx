import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme'
import {useState, useEffect} from 'react'

function App() {
    const[themeMode,setThemeMode] = useState("light")
    
    const lightTheme = () => {
      setThemeMode("light")
    }
    
    const darkTheme = () => {
      setThemeMode("dark")
    }

    //actual change in theme

    useEffect(() =>{
        document.querySelector('html').classList.remove("light","dark")

        document.querySelector('html').classList.add(themeMode)
    },[themeMode])
  return (
    //  ThemeProvider has some default values. If there is no any component who is providing the values for those defaults, Then default values will be used.
    //! Here, the below code is the nearest ThemeProvider in the component tree. Hence, those values are overridden to these values.
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
