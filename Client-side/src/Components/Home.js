import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [authorized, setAuthorized] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  useEffect(()=>{
axios.get("http://localhost:3000")
.then(res => {
  if(res.data.Status === "Success"){
    setAuthorized(true)
    setName(res.data.name)
  }else{
setMessage(res.data.Message)
  }
})
  },[])
  return (
    <div>
        
      <h1>HOME</h1>
        <navigation>
          <ul>
            <li>Home</li>
            <li><Link to="/login">LogIn</Link></li>
            <li>Register</li>
            
          </ul>
        </navigation>

<div>
  {
    authorized
    ?
    <div>
      <h3>You are authorized  {name} </h3>
      <button>Logout</button>
    </div>
    : <div>
      <h3>{message}</h3>
      <h3>Login Now</h3>
      <Link to = "/login">Login</Link>
</div>
  }

</div>
        
    </div>
  )
}

export default Home