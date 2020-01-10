import React, {useState, useContext, useEffect} from 'react';
import Context from '../../contexts/loginContext';
import {Card} from 'reactstrap';
import { NavBar } from '../NavBar.js';
import '../Dashboard.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';



export const Dashboard = () => {

    const {user, setUser} = useContext(Context);

    useEffect(() =>{
        axiosWithAuth().get('/user/user')
        .then(response =>{
            console.log(response)
            setUser(response.data)
        })
        .catch(error => console.log(error))
    },[])
   
    return(
        <div>
        <NavBar />
        <Card className="welcome-card">
        <h1 className="welcome-text"> Welcome, {user.name}! </h1>
        </Card>
        </div>
    )
}