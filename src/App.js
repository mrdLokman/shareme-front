import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Login } from './containers';

const App = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/*' element={<Home />}/>
    </Routes>
  )
}

export default App