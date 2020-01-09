import React, {useState, useContext} from 'react';
import Context from '../../contexts/loginContext';
import {
    Card
} from 'reactstrap';
import { NavBar } from '../NavBar.js';
import axios from 'axios';

import '../Dashboard.css';



export const Dashboard = () => {

    const {user, setUser} = useContext(Context);

    axios.get()


    return(
        <div>
        <NavBar />
        <Card className="welcome-card">
        <h1 className="welcome-text"> Welcome, {user.name}! </h1>
        </Card>
        </div>
    )
}