import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    
const [values,setValues]= useState({
  Email:"",
  password: ""
})

const handleChange = (e) => {
  setValues({...values,[e.target.name]: e.target.value})
}

const navigate = useNavigate()

axios.defaults.withCredentials = true;
const handleLogIn = e => {
  e.preventDefault()
  axios.post("http://localhost:3000/login", values)
  .then(res => {
    console.log('res', res)
    if(res.data.Status === "Success"){
      navigate('/profile')
    }else if(res.data.Status !== "Success"){
  return "Not account Available for please register",navigate('/register')
    }else {
      return console.log(res.data.err)

    }
  })
  .then(err => {
console.log('err', err)
  })
}
console.log('values', values)
// console.log('first', first)
  return (
    <div>
           <h1>Login</h1>
           <input type='email' placeholder='Email' name='Email' onChange={handleChange} value={values.Email}/> <br/>
           <input type='password' placeholder='password' name='password' onChange={handleChange} value={values.password}/>
           <button onClick={handleLogIn}>Login</button>
    </div>
  )
}

export default Login