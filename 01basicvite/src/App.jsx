import './App.css'
import Coffee from './coffee.jsx'


function App() {
  const username = "Gopal Agarwal"
//! ONLY one tag is returned here. hence, we use <> </> which is called as fragment tag.
  return (
    //! {username } is the Evaluated Expression. Here the final outcome is written like we can't write {if(true) username. This is not evaluated.
    <>
      <p>Hello welcome {username}</p> 
      <Coffee />
    </>
  )
}
//Now the question is how the variable is injected into the tree? Check the main.jsx

//*  We can't write username = if(true) username because , what ever is written inside the variable that is directly injected into the tree and hence these condition may create  syntax errors

export default App
