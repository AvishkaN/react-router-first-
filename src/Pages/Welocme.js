import React from 'react'
import {Route} from 'react-router-dom'

function Welocme() {
    return (
        <>
           <h1>welocme</h1> 
           <Route path='/welcome/newUser'>
                <p>New User 👤</p>
           </Route>
        </>
    )
}

export default Welocme;
