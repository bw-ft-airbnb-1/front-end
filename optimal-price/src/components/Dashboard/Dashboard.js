import React, {useState, useContext} from 'react';
import Context from '../../contexts/loginContext';
import {
    Card
} from 'reactstrap';
import { NavBar } from '../NavBar.js';



export const Dashboard = () => {

    const {user, setUser} = useContext(Context);

    return(
        <div>
        <NavBar />
        <Card>
        <h1> Welcome, {user.name}! </h1>
        </Card>
        </div>
    )
}