import React, {useState} from 'react';
import axios from 'axios';
import '../styling/careerGoal.css'

function CareerGoal() {

    const [increment, setIncrement] = useState([])
    const [inputs, setInputs] = useState({})
    const [saveGoals, setSaveGoals] = useState([])

const addInput = e => {
    e.preventDefault()
    console.log('click me')
    const values = [...inputs]
    values.push({

    })
}
    const handleChange = (e) => {
         setInputs({...inputs,[e.target.name]: e.target.value})

    }

const submitInput = e => {
e.preventDefault()
console.log('clicked')
axios.post("http://localhost:3000/careergoal", inputs)
.then(res=>{
  console.log('res', res.data)
//   setUsers(res.data.data)
setSaveGoals(res.data.data)
})
console.log('inputs', inputs)
}
console.log('inputs', inputs)

  return (
    <div className='container'>
        <div className='list-of-goals'>
        <h3 style={{marginRight:'12rem'}}>What are your Career Goals for this year?
        List them down</h3>

        <input type='text' placeholder='1' name='firstQuater1' 
        onChange={handleChange} values={inputs.firstQuater1}/><br/>
        <input type='text' placeholder='2' name='firstQuater2' onChange={handleChange}
        value={inputs.firstQuater2}/><br/>
        <input type='text' placeholder='3'name='firstQuater3'
        value={inputs.firstQuater3} onChange={handleChange}/><br/>
        <input type='text' placeholder='4' name='firstQuater4' 
        value={inputs.firstQuater4} onChange={handleChange}/><br/>
        <input type='text'placeholder='5' name='firstQuater5' 
        value={inputs.firstQuater5} onChange={handleChange}/><br/>
        <button className='increment' onClick={addInput}>+</button>
        <button className='submit' onClick={submitInput}>Submit</button>
        </div>
        <div>
        <h2>Now let’s break them down</h2>

            <h1>Break Down Your Goals for the year into smaller bits</h1>
            <h2>first Quater</h2>
            <input type='text' placeholder='1' name='firstQuater1' onChange={handleChange}/><br/>
        <input type='text' placeholder='2' name='firstQuater2' onChange={handleChange}/><br/>
        <input type='text' placeholder='3' name='firstQuater3' onChange={handleChange}/><br/>
        <button className='increment' onClick={addInput}>+</button>
        <button className='submit' onClick={submitInput}>Submit</button>


            <h2>second Quater</h2>
            <input type='text' placeholder='1' name='secondQuater1' onChange={handleChange}/><br/>
        <input type='text' placeholder='2' name='secondQuater2' onChange={handleChange}/><br/>
        <input type='text' placeholder='3' name='secondQuater3' onChange={handleChange}/><br/>
        <button className='increment' onClick={addInput}>+</button>
        <button className='submit' onClick={submitInput}>Submit</button>


            <h2>Third Quater</h2>
            <input type='text' placeholder='1' name='thirdQuater1' onChange={handleChange}/><br/>
        <input type='text' placeholder='2' name='thirdQuater2' onChange={handleChange}/><br/>
        <input type='text' placeholder='3' name='thirdQuater3' onChange={handleChange}/><br/>
        <button className='increment' onClick={addInput}>+</button>
        <button className='submit' onClick={submitInput}>Submit</button>


        <h2>Fourth Quater</h2>
            <input type='text' placeholder='1' name='fourthQuater1' onChange={handleChange}/><br/>
        <input type='text' placeholder='2' name='fourthQuater2' onChange={handleChange}/><br/>
        <input type='text' placeholder='3' name='fourthQuater3' onChange={handleChange}/><br/>
        <button className='increment' onClick={addInput}>+</button>
        <button className='submit' onClick={submitInput}>Submit</button>


        </div>

        <div>
            <h3>List your 2023 Wins</h3>
            <input type='text' name='wins1' onChange={handleChange}/><br/>
        <input type='text' name='wins2' onChange={handleChange}/><br/>
        <button>Save</button>
        </div>

        <div>
                <ul>{saveGoals.map((input, index) => {
                    return (
                        
                        <div key={index}>
                            <div className='heading-container'>
                        <span className='heading'>Goals List</span><br/>

                            </div>

                            
                         < div className='contents'>

                         <span> {input.firstQuater1} </span><br/>
                         <span> {input.firstQuater2}</span><br/>
                         <span> {input.firstQuater3}</span><br/>
                         <span> {input.firstQuater4}</span><br/>
                         <span> {input.firstQuater5}</span>
                         </div>
                            
                            

                            
                        </div>

                    )
                })}</ul>
            </div>

    </div>
  )
}

export default CareerGoal