import React, { useContext } from 'react'
import { TodoContext } from '../Context/todoContext'
import TodoItem from './TodoItem';

const TodoList = () => {
  const {todos} = useContext(TodoContext);

  return (
    <>
    <ul className="mt-5 list-unstyled">
      {todos.length && todos.map((todo)=>{
        return <TodoItem key={todo.id} todo={todo}/>
        })}
    </ul>
  {todos.length === 0 && <h6 className="text-primary text-center">No todo's to display</h6>}
      </>
  )
}

export default TodoList