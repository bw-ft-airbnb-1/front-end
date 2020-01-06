import React, { useEffect, useState } from 'react';

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





const UserLogin = ({values, errors, touched, status}) => {

  // const [existingUsers, setExistingUser] = useState([])

  // useEffect(() => {
  //   status && setExistingUser(existingUsers => [...existingUsers, status])
  // },[status])

  return(
    <div className="LoginForm">
      <Jumbotron className="jumbotron">
      <Form>
        <label htmlFor="email">
          Email:
            <Field
              id="email"
              type="email"
              name="email"             
            />

        {touched.email && errors.email && (<p> {errors.email} </p>)}

        </label>
        <label htmlFor="password">
          Password:
            <Field 
              id="password"
              type="text"
              name="password"
            />
        </label>

        {touched.password && errors.password && (<p> {errors.password} </p>)}

        <Button type="submit">Login</Button>
      </Form>
      </Jumbotron>


    </div>
  )
}

const FormikUserLogin = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || ''
    }

  },

  // VALIDATION SCHEMA
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("This is a required field!"),
    password: Yup.string()
      .min(6)
      .required("This is a required field!")
  }),
// HANDLE SUBMIT 

handleSubmit(values, {ResetForm, setStatus}) {
  console.log("This is the status", values)
// If the user exists... redirect/link to dashboard

// If the user does not exist... either throw error or redirect to register

// How do you either reset the form or keep it immutable until a logout occurs?
}


})(UserLogin);





export default FormikUserLogin;

