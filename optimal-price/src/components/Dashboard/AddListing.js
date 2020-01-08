import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar.js';

import {
    Jumbotron,
    Button,
    Card,
    CardTitle
  } from 'reactstrap';
  
 

  import '../Dashboard.css';
import { reset } from 'ansi-colors';

 // import {axiosWithAuth} from './../utils/axiosWithAuth';
//import Context from './../contexts/loginContext';

export const AddListing = () => {
 const [listing, setListing] = useState({
     availability: {"Monday":false, "Tuesday":false, "Wednesday":false, "Thursday":false, "Friday":false, "Saturday":false, "Sunday":false},
     minimumPrice: "",
     minimumNights: "",
     bedrooms: "",
     bathrooms: "",
     entirePlace: true,
     maxGuests: "",
     amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false},
     propertyType: "",
     city: "",
     zipCode: "",
     address: ""
 })
 const [priceEst, setPriceEst] = useState({
     price: 0.00
 })

 // Still need to take care of Amenities, entirePlace, and Availability

 const handleChange = (event) => {
     setListing({
         ...listing,
         [event.target.name]: event.target.value
     })
 }


 const addListing = (event) => {
     event.preventDefault()
     console.log("This is your add listing form state:", listing)
     //axios.post(" ",listing)
 }

const runPriceEstimator = (event) => {
    event.preventDefault()
    setPriceEst(
        listing.minimumPrice * listing.minimumNights
    )
}

const cancelForm = () => {
    setListing({
        availability: {"Monday":false, "Tuesday":false, "Wednesday":false, "Thursday":false, "Friday":false, "Saturday":false, "Sunday":false},
        minimumPrice: "",
        minimumNights: "",
        bedrooms: "",
        bathrooms: "",
        entirePlace: true,
        maxGuests: "",
        amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false},
        propertyType: "",
        city: "",
        zipCode: "",
        address: ""
    })
    setPriceEst({
        price: 0.00
    })
}

    return(
        <div>
        <NavBar />
        <Card id="output-card" className="addCard">
    <h1 className="output-label-text">Predicted Price: $ {priceEst.price}</h1>
        </Card>
            <Jumbotron className="addListing-jumbo">
                <form className="addListing" onSubmit={AddListing}>

                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className='label-text'>Minimum Price: </h4>
                            <input
                                type="number"
                                name="minimumPrice"
                                value={listing.minimumPrice || ""}
                                onChange={handleChange}
                                min="0"
                                placeholder="Min. Price"
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                            <h4 className='label-text'>Minimum Nights: </h4>
                            <input
                            type="number"
                            name="minimumNights"
                            value={listing.minimumNights || ""}
                            onChange={handleChange}
                            min="1"
                            placeholder="Min. Nights"
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                            <h4 className="label-text">Bedrooms: </h4>
                            <input
                            type="number"
                            name="bedrooms"
                            value={listing.bedrooms || ""}
                            min="1"
                            placeholder="Bedrooms"
                            onChange={handleChange}
                            required
                            />
                        </label> 
                    </Card> 
                    <Card className="addCard">
                        <label className="addListing-label">
                            <h4 className="label-text">Bathrooms: </h4>
                            <input
                            type="number"
                            name="bathrooms"
                            value={listing.bathrooms || ""}
                            min="1"
                            placeholder="Bathrooms"
                            onChange={handleChange}
                            required
                            />
                        </label> 
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Maximum Guests: </h4>
                            <input
                            type="number"
                            name="maxGuests"
                            value={listing.maxGuests || ""}
                            min="1"
                            placeholder="Max guests"
                            onChange={handleChange}
                            />
                        </label> 
                    </Card>  
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Property Type: </h4>
                            <select
                            name="propertyType"
                            value={listing.propertyType}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">What is the type of your listing?</option>
                                <option value="House">House</option>
                                <option value="Townhouse">Townhouse</option>
                                <option value="Apartment">Apartment</option>
                            </select>    
                        </label>  
                    </Card>  
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">City: </h4>
                            <input
                            type="text"
                            name="city"
                            value={listing.city}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Zip Code: </h4>
                            <input
                            type="number"
                            name="zipCode"
                            value={listing.zipCode}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Address: </h4>
                            <input
                            type="text"
                            name="address"
                            value={listing.address}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card>
                </form>
                <div className="button-div">
                <Button onClick={addListing} className="submitButton">
                    Add Listing
                </Button>
                <Button onClick={runPriceEstimator} className="run-ds-btn">
                    Get Price
                </Button>
                <Button onClick={cancelForm} color="danger">
                    Cancel
                </Button>
                </div>
            </Jumbotron>
        </div>
    )
}