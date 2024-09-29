import './App.css'
import Coffee from './coffee.jsx'


function App() {

//! ONLY one tag is returned here. hence, we use <> </> which is called as fragment tag.
  return (
    <>
      <p>Hello welcome</p>
      <Coffee />
    </>
  )
}

export default App
