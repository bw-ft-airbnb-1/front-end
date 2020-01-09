
import React, { useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';

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
import Context from './../contexts/loginContext';


const UserLogin = ({values, errors, touched, status, handleSubmit,handleChange}) => {

  const {user, setUser} = useContext(Context);
  

  useEffect(() => {
    status && setUser(user => status)
  })

  return(
    <div className="LoginForm">
      <Jumbotron className="jumbotron">
      <Form className="login" onSubmit = {handleSubmit}>
  
        <label htmlFor="email">
          Email:
            <Field
              className="log-field"
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
              className="log-field"
              id="password"
              type="password"
              name="password"
              onChange = {handleChange}    
            />
        {touched.password && errors.password && (<p> {errors.password} </p>)}
        </label>


        <Button id="login-btn" className ='rgBtn' type="submit">Login</Button>
        
      </Form>
        <Button id="login-btn" className ='rgBtn' > 
            <Link to='/signup'>
              Sign Up
            </Link>
        </Button>
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
  handleSubmit (values, { props, setStatus}) { 
    
    axios.post(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/signin `, values)
        .then((response)=> {

            localStorage.setItem('token', response.data.token)

            setStatus(response.data.user);

           props.history.push('/dashboard');
            
        })
        .catch((error)=> {
            console.log("This is an async error:", error)
        })
  }

})(UserLogin)

export default FormikUserLogin;

