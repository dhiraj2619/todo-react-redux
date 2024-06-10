import { createContext, useReducer, useEffect, useState } from "react";
import { fetchTodos } from "../api/todos/todo";

const TodoContext = createContext();

const initialState = {
    todos: []
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { todo, completed: !todo.completed } : todo
                )
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos:state.todos.filter((todo)=>todo.id!==action.payload)
            }
        case 'SET_TODO':
            return {
                ...state,
                todos:action.payload
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos:state.todos.map((todo)=>todo.id === action.payload.id ? action.payload:todo)
            }
        default:
            return state
    }
}

const TodoProvider=({children})=>{
    const[state,dispatch] = useReducer(todoReducer,initialState);
    const[editTodo,setEditTodo] = useState(null);

    useEffect(()=>{
        const loadTodos =async()=>{
           const todos = await fetchTodos();
           dispatch({type:'SET_TODO',payload:todos});
        }
       loadTodos();
    },[])

    const addTodo=(todo)=> dispatch({type:'ADD_TODO',payload:todo});
    const toggleTodo =(id)=> dispatch({type:'TOGGLE_TODO',payload:id});
    const deleteTodo=(id)=> dispatch({type:'DELETE_TODO',payload:id});
    const updateTodo=(todo)=>{
        dispatch({type:'UPDATE_TODO',payload:todo});
        setEditTodo(null);
    }


    const ctxValue = {
         todos:state.todos,
         addTodo,toggleTodo,updateTodo,deleteTodo,editTodo,setEditTodo
    }
    return(
        <TodoContext.Provider value={ctxValue}>
            {children}
        </TodoContext.Provider>
    )
    
}

export {TodoProvider,TodoContext}