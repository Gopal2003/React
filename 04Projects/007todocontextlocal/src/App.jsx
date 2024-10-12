import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  //* Here, oldTodo is same as the prev, just written an oldTodo for better readability.
  const addTodo = (todo) => {
    setTodos((oldTodo) => [{ id: Date.now(), ...todo }, ...oldTodo]) // oldTodo is added to preserve all the old todos which is a array containing all the previous todo.
  }

  //!The below function is same as above.
  // const addTodo = (todo) => {
  //   setTodos((oldTodo) => {
  //     console.log('Old Todos:', oldTodo);  // Print the old todos
  //     console.log('New Todos:', todo); 
  //     return [{ id: Date.now(), ...todo }, ...oldTodo];
  //   });
  // }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  //! {...todo,completed : !todo.completed} -> ...todo takes all the prev values. {completed : !todo.completed} will only override the completed value of the ...todo.

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  //Get the todos from localstorage. hence, we get all the added todos even after a reload or after re-visiting the tab again from localstorage.
  //! As the dependency array of the below hook is empty, it is executed only once when it is mounted for the first time.
  //! i.e., when the user revisit the tab again, the below hook will be executed and retrive all the previous todos saved in localstorage
  //! And this is done only once.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  //Add all the latest todos into the local storage.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >

                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App