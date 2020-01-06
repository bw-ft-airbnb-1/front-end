import React, {useContext} from 'react';
import {axiosWithAuth} from './../utils/axiosWithAuth';
import Context from './../contexts/loginContext';


const UserLogin = () =>{
  const {credentials, setCredentials} = useContext(Context);

  const handleSubmit = e =>{
      e.preventDefault();
      axiosWithAuth()
                    .post(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/signin `, credentials)
                    .then(response =>{
                      localStorage.setItem('token', response.data.token)
                      localStorage.setItem("email", credentials.email);
                      // setting state
                      setCredentials({
                        email: credentials.email
                    });
                      // props.history.push("/dashboard")
                    })
                    .catch(error => console.log(error))
  }
  return // Changes here
}

export default UserLogin;