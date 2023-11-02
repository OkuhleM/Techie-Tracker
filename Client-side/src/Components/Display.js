import React from 'react'
import RegisterPage from './RegisterPage';
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Logout from './Logout';
import CareerGoal from './CareerGoal';
import HabitTracker from './HabitTracker';
import YearInReview from './YearInReview';
import SkillTracker from './SkillTracker';

function Display() {
  return (
    <div>
      {/* <RegisterPage/> */}
      <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/careergoal' element={<CareerGoal />}></Route>
        <Route path='/habittracker' element={<HabitTracker />}></Route>
        <Route path='/yearinreview' element={<YearInReview />}></Route>
        <Route path='/skilltracker' element={<SkillTracker />}></Route>

      </Routes>
      </Router>
    </div>
  )
}

export default Display