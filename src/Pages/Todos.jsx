import React, { useContext } from 'react'
import AddTodo from '../Components/AddTodo'
import './pagescss/Todos.css'
import TodoList from '../Components/TodoList'
import EditTodo from '../Components/EditTodo'
import { TodoContext } from '../Context/todoContext'

const Todos = () => {
  const {editTodo} = useContext(TodoContext);
  return (
    <div className="container">
       <div className="row justify-content-center mt-5">
          <div className="col-lg-6">
              {editTodo ? <EditTodo/>:<AddTodo/>}
              <TodoList/>
          </div>
       </div>
    </div>
  )
}

export default Todos