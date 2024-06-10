import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../Context/todoContext';

const EditTodo = () => {
  const { editTodo, updateTodo, setEditTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Todo cannot be empty');
      return;
    }

    updateTodo({
      ...editTodo,
      title
    });

    setTitle('');
  };

  const handleCancel = () => {
    setEditTodo(null);
    setTitle('');
  };

  return (
    <div>
      {editTodo && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="edit-todo" className="form-label">Edit Todo</label>
          <div className="row">
            <div className="col-lg-7">
              <input
                type="text"
                id="edit-todo"
                placeholder="Edit Task here...."
                className="form-control input-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-lg-5">
              <button className="btn btn-primary me-2" type="submit">Update</button>
              <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditTodo;
