import {useState} from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    //The acutal syntax is todo : todo, as both names are same, we can directly pass todo.
    addTodo({ todo, completed: false }) // as id: Date.now() is already written in App.jsx addTodo method, we can ommit this here. 
    setTodo("") // reset the input field
  }


  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
