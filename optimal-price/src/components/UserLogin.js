
import React, { useEffect, useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';

import {
  Jumbotron,
  Button
} from 'reactstrap';

import {
  Field,
  Form,
  withFormik
} from 'formik';

import * as Yup from 'yup';

import axios from 'axios';

import './UserLogin.css';

// import {axiosWithAuth} from './../utils/axiosWithAuth';
import Context from './../contexts/loginContext';


const UserLogin = ({values, errors, touched, status, handleSubmit,handleChange}) => {

  const {user, setUser} = useContext(Context);
  
  // const [existingUsers, setExistingUser] = useState({})


  useEffect(() => {
    status && setUser(user => status)
  })

  return(
    <div className="LoginForm">
      <Jumbotron className="jumbotron">
      <Form onSubmit = {handleSubmit}>

        <label htmlFor="email">
          Email:
            <Field
              id="email"
              type="email"
              name="email"  
              onChange = {handleChange}               
            />
        {touched.email && errors.email && (<p> {errors.email} </p>)}
        </label>
        <label htmlFor="password">
          Password:
            <Field 
              id="password"
              type="password"
              name="password"
              onChange = {handleChange}    
            />
        {touched.password && errors.password && (<p> {errors.password} </p>)}
        </label>

        <Button type="submit">Login</Button>
      </Form>
      </Jumbotron>


    </div>
    )

}

const FormikUserLogin = withFormik({
  mapPropsToValues({ email, password}) {
    return {
     
      email: email || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
    .email("Please enter a valid email address.")
    .required("This is a requird field."),
    password: Yup.string()
    .min(4)
    .required("This is a required field.")
  }),

  // history: useHistory(),
  handleSubmit (values, { props, setStatus}) { //resetForm,
    
    console.log("submitting:", values);
    axios.post(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/signin `, values)
        .then((response)=> {
            console.log("This is response data:", response.data.user)

            localStorage.setItem('token', response.data.token)

            setStatus(response.data.user);

           props.history.push('/dashboard');
            // resetForm();
        })
        .catch((error)=> {
            console.log("This is an async error:", error)
        })
  }

//   handleSubmit: e => {
//     e.preventDefault();
//     axiosWithAuth()
//                   .post(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/signin `, credentials)
//                   .then(response =>{
//                     localStorage.setItem('token', response.data.token)
//                     localStorage.setItem("email", credentials.email);
//                     // setting state
//                     setCredentials({
//                       email: credentials.email
//                   });
//                     // props.history.push("/dashboard")
//                   })
//                   .catch(error => console.log(error))
// }




})(UserLogin)

export default FormikUserLogin;

