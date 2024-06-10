import React from 'react'

const ViewTodo = ({showModal,closeModal,todo}) => {
    if (!todo) return null;
  return (
    <>
     <div className={`modal fade ${showModal ?'show d-block':''}`}>
         <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
                 <div className="modal-header">
                     <h4 className="modal-title">View todo</h4>
                     <button className="btn-close" onClick={closeModal}></button>
                 </div>
                 <div className="modal-body">
                     <div className="d-flex justify-content-between">
                         <h6 className="text-dark">{todo.title}</h6>
                         <span className={`badge ${todo.completed ? 'text-bg-success':'text-bg-danger'}`}>
                            {todo.completed ?'completed':'incomplete'}
                         </span>
                     </div>
                 </div>
                
             </div>
         </div>
    </div>
    {showModal && <div className="modal-backdrop show"></div>}
    </>
   
    
  )
}

export default ViewTodo