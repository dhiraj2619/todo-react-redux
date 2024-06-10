import React, { useContext,useState } from 'react'
import { TodoContext } from '../Context/todoContext'
import ViewTodo from './ViewTodo';

const TodoItem = ({todo}) => {

    const {deleteTodo,setEditTodo} = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const viewModal=(todo)=>{
         setSelectedTodo(todo);
         setShowModal(true);
    }

    const closeModal=()=>{
      setSelectedTodo(null);
      setShowModal(false);
    }
  return (
  <>
   <li className="p-3 d-flex justify-content-between shadow-sm my-3 rounded-3" style={{backgroundColor:"#eee"}} key={todo.id}>
        <span className="text-dark" onClick={()=>viewModal(todo)}>
             {todo.title}
        </span>
        <div>
        <button className="btn btn-outline-success me-2" onClick={()=>setEditTodo(todo)}>Edit</button>
        <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    </li>

    <ViewTodo todo={selectedTodo} showModal={showModal} closeModal={closeModal} />
  </>
   
  )
}

export default TodoItem