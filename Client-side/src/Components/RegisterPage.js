import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../styling/Registeration.css"

function RegisterPage() {

  const [inputValue, setInputValue] = useState({
    "Name":"",
    "Surname":"",
    "Email":"",
    "password":"", 
    "confirmPassword": "", 
    "Intro": ""})

  const [usersList, setUsers] = useState([])

  const navigate = useNavigate()


  const handleChange = (e) => {
    setInputValue({...inputValue,[e.target.name]: e.target.value})

}
console.log('inputValue', inputValue)
console.log('usersList', usersList)
const register = (e) => {
    e.preventDefault()
  axios.post("http://localhost:3000/register", inputValue)
  .then(res=>{
    console.log('res', res.data)
    if(res.data.Status === "success"){
      navigate("/profile")
    }
    setUsers(res.data.data)
  })
}
  return (
    
<div>
  <form>

    <input type='text' name='Name' placeholder='name' onChange={handleChange} value={inputValue.Name} /> <br/>
    <input type='text' name='Surname' placeholder='surname' onChange={handleChange} value={inputValue.Surname} /><br/>
    <input type='email' name='Email' placeholder='email' onChange={handleChange} value={inputValue.Email} /><br/>
    <input type='password' name='password' placeholder='password' onChange={handleChange} value={inputValue.password} /><br/>
    <input type='password' name='confirmPassword' placeholder='confirm Password' onChange={handleChange} value={inputValue.confirmPassword} /><br/>            
    <input type='text' name='Intro' value={inputValue.Intro} onChange={handleChange} placeholder='intro'/> <br/>

<button type='submit' onClick={register}>Register</button>
  </form>
</div>

    
  )
}

export default RegisterPage