import React from 'react'
import RegisterPage from './RegisterPage';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Display() {
  return (
    <div>
      {/* <RegisterPage/> */}
      <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default Display