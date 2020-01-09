import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar.js';
import { Cards } from './CardCreator';
import Axios from 'axios';

export const MyListings = (props) => {

    const [state, setState] = useState([])

    useEffect(() => {
        Axios
            .get()
            .then(response => {
                setState(response.data)
            })
        .catch(error => console.log({error}))
    },[])

    return(
        <div>
        <NavBar />  
            My Listings
        {state.map(()=> (
            <Cards />
        ))}
 
        </div>
    )
}