import React from "react";
import axios from 'axios'

const SignUp = () =>{
  // still need state management

  // handleSubmit
  const handleSubmit = e =>{
    e.preventDefault();
    // axios call in here
  }

  // handleChanges
  const handleChanges = e => {
    // set state here
  }

  return ( // *********Changed this***********
    <div>
      <form className = 'registration' onSubmit = {handleSubmit}>
        <label htmlFor = 'username'>Username: </label>
          <input 
            id = 'username'
            type = 'text'
            name = 'username'
            placeholder = 'Enter your username'
            // need to add value here
            // need an onChange in here
        />

        <label htmlFor = 'password'>Password: </label>
          <input 
            id = 'password'
            type = 'password'
            name = 'password'
            placeholder = 'Enter your password'
            // need to add value here
            // need an onChange in here
        />
        <button className = 'rgBtn'>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp;