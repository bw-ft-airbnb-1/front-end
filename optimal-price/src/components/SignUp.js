import React, {useContext} from "react";
import axios from 'axios'
import Context from './../contexts/loginContext';

const SignUp = (props) =>{



  // state
  const {credentials, setCredentials, setUser} = useContext(Context);

  // handleSubmit
  const handleSubmit = e =>{
    e.preventDefault();
    // axios call 
    axios
        .post(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/register `, credentials)
        .then(response =>{
          console.log(response)
          localStorage.setItem('token', response.data.token)
          setUser(response.data.user)
          props.history.push('/dashboard');
        })
        .catch(error => console.log(error))
  }

  // handleChanges  
  const handleChanges = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

  return ( // *********Changed this***********
    <div className = 'signUp'>
      <form className = 'registration' onSubmit = {handleSubmit}>
        <label htmlFor = 'name'>Name: </label>
            <input className = 'signUpInput'
              id = 'name'
              type = 'text'
              name = 'name'
              placeholder = 'Enter your name'
              value = {credentials.name}
              onChange = {handleChanges}
              required
        />

        <label htmlFor = 'email'>Email: </label>
          <input className = 'signUpInput'
            id = 'email'
            type = 'email'
            name = 'email'
            placeholder = 'Enter your email address'
            value = {credentials.email}
            onChange = {handleChanges}
            required
        />

        <label htmlFor = 'password'>Password: </label>
          <input className = 'signUpInput'
            id = 'password'
            type = 'password'
            name = 'password'
            placeholder = 'Enter your password'
            value = {credentials.password}
            onChange = {handleChanges}
        />
        <button className = 'rgBtn'>SignUp</button>
      </form>
    </div>
  )

}

export default SignUp;