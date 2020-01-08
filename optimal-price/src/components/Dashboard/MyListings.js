import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar.js';
import { Cards } from './CardCreator';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const MyListings = (props) => {

    const [listing, setListing] = useState([])

    useEffect(() => {
      axiosWithAuth()
            .get(`https://bw-ft-airbnb-1.herokuapp.com/api/v1/user/properties`)
            .then(response => {
                console.log(response.data)
                setListing(response.data)
            })
        .catch(error => console.log({error}))
    },[])

    return(
        <div>
        <NavBar />
            My Listings
        {listing.map(item => (
            <Cards 
                key = {item.id}
                minimumNights = {item.minimumNights}
                bedrooms = {item.bedrooms}
                bathrooms = {item.bathrooms}
                entirePlace = {item.entirePlace}
                accommodates = {item.accommodates}
                propertyType = {item.propertyType}
                bedType = {item.bedType}
                securityDeposit = {item.securityDeposit}
                optimalPrice = {item.optimalPrice}
                photos = {item.photos}
            />
        ))}
 
        </div>
    )
}