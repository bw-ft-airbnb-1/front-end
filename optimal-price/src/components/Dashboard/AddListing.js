import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar.js';

import {
    Jumbotron,
    Button,
    Card
  } from 'reactstrap';
  
 

  import '../Dashboard.css';

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
 }
    return(
        <div>
        <NavBar />
            Add a Listing Page
            <Jumbotron className="addListing-jumbo">
                <form className="addListing" onSubmit={AddListing}>

                    <Card className="addCard">
                        <label className="addListing-label">
                            Minimum Price:
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
                            Minimum Nights:
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
                            Bedrooms:
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
                            Bathrooms:
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
                            Maximum guests:
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
                            Property Type:
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
                            City:
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
                            Zip Code:
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
                            Address:
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
                <Button onClick={addListing} className="submitButton">
                    Add Listing
                </Button>
                <Button color="warning">
                    Cancel
                </Button>
            </Jumbotron>
        </div>
    )
}