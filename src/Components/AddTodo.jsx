import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/todoContext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError('Todo cannot be empty');
    } else {
      addTodo({
        id: Date.now(),
        title,
        completed: false
      });
      setTitle('');
      setError(null); 
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="form-label">Add Todo</label>
        <div className="row">
          <div className="col-lg-9">
            <input type="text" placeholder="Enter Task here...." className={`form-control input-control ${error ? 'is-invalid' : ''}`} value={title} onChange={(e) => {
              setTitle(e.target.value);
              if(error){
                  setError(null);
              }
            }} />
             {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <div className="col-lg-3">
            <button className="addtodo">Add Todo</button>
          </div>
        </div>

      </form>
      
    </div>
  )
}

export default AddTodo