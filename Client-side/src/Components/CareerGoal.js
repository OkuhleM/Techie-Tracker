import React from 'react'

function CareerGoal() {
  return (
    <div>
        <h3>What are your Career Goals for this year?</h3>
        <input type='text' placeholder='1'/><br/>
        <input type='text' placeholder='2'/><br/>
        <input type='text' placeholder='3'/><br/>
        <input type='text' placeholder='4'/><br/>
        <input type='text'placeholder='5'/><br/>
        <button>+</button>

        <div>
        <h2>Now let’s break them down</h2>

            <h1>Break Down Your Goals for the year into smaller bits</h1>
            <h2>first Quater</h2>
            <input type='text' placeholder='1'/><br/>
        <input type='text' placeholder='2'/><br/>
        <input type='text' placeholder='3'/><br/>
        <button>+</button>

            <h2>second Quater</h2>
            <input type='text' placeholder='1'/><br/>
        <input type='text' placeholder='2'/><br/>
        <input type='text' placeholder='3'/><br/>
        <button>+</button>

            <h2>Third Quater</h2>
            <input type='text' placeholder='1'/><br/>
        <input type='text' placeholder='2'/><br/>
        <input type='text' placeholder='3'/><br/>
        <button>+</button>

        <h2>Fourth Quater</h2>
            <input type='text' placeholder='1'/><br/>
        <input type='text' placeholder='2'/><br/>
        <input type='text' placeholder='3'/><br/>
        <button>+</button>

        </div>

        <div>
            <h3>List your 2023 Wins</h3>
            <input type='text' /><br/>
        <input type='text'/><br/>
        </div>
    </div>
  )
}

export default CareerGoal