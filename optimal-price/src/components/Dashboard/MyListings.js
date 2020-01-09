import React, { useState, useEffect, useContext } from 'react';
import { NavBar } from '../NavBar.js';
import { Cards } from './CardCreator';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Context from '../../contexts/loginContext';

export const MyListings = () => {

    // const [listing, setListing] = useState([])
    const {properties, setProperties} = useContext(Context)
    console.log(properties, 'context')

    useEffect(() => {
      axiosWithAuth()
            .get('/user/properties')
            .then(response => {
                console.log(response.data, 'this is the one')
                setProperties(response.data)
            })
        .catch(error => console.log({error}))
    },[])

    return(
        <div>
        <NavBar />  
            My Listings
        {properties.map(item => (
            <Cards 
                key = {item.id}
                myid = {item.id}
                minimum_nights = {item.minimum_nights}
                bedrooms = {item.bedrooms}
                bathrooms = {item.bathrooms}
                security_deposit = {item.security_deposit}
                price = {item.price}
                image = {item.image}
                zip_code = {item.zip_code}
                accommodates = {item.accommodates}
                property_type = {item.property_type}
                bed_types = {item.bed_types}
                room_type = {item.room_type}
                amenities = {item.amenities}
            />
        ))}
 
        </div>
    )
}

