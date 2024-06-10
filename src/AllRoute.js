import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Todos from './Pages/Todos'
import PrivateRoute from './PrivateRoute'

const AllRoute = () => {
  return (
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/todos" element={
           <PrivateRoute>
              <Todos/>
           </PrivateRoute>
         }/>
    </Routes>
  )
}

export default AllRoute