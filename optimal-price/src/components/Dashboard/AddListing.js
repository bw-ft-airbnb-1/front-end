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
     minimumPrice: "",
     minimumNights: "",
     bedrooms: "",
     bathrooms: "",
     accomodates: "",
     bedType: "",
     securityDeposit: "",
     roomType: "",
     propertyType: "",
     zipCode: "",
     amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false, "pets":false}
 })
 const [priceEst, setPriceEst] = useState(0)

 // Still need to take care of Amenities, entirePlace, and Availability

 const handleChange = (event) => {
     setListing({
         ...listing,
         [event.target.name]: event.target.value
     })
 }

const updateCheckbox = (event) => {
    const val = event.target.checked;
    const name = event.target.name;
    let updatedAmenities = Object.assign({}, listing.amenities, {[name]: val})
    setListing({
        ...listing,
        amenities: updatedAmenities
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
        minimumPrice: "",
        minimumNights: "",
        bedrooms: "",
        bathrooms: "",
        accomodates: "",
        bedType: "",
        securityDeposit: "",
        roomType: "",
        propertyType: "",
        zipCode: "",
        amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false}

    })
    setPriceEst(0.00)
}

    return(
        <div>
        <NavBar />
        <Card id="output-card" className="addCard">
    <h1 className="output-label-text">Predicted Price: $ {priceEst}</h1>
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
                        <h4 className="label-text">Accomodates: </h4>
                            <input
                            type="number"
                            name="accomodates"
                            value={listing.accomodates || ""}
                            min="1"
                            placeholder="Accomodates"
                            onChange={handleChange}
                            />
                        </label> 
                    </Card> 
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Bed Type: </h4>
                            <select
                            name="propertyType"
                            value={listing.bedType}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">Bed Type</option>
                                <option value="realBed">Real Bed</option>
                                <option value="pullOut">Pull-out</option>
                                <option value="sofa">Sofa</option>
                                <option value="futon">Futon</option>
                                <option value="couch">Couch</option>
                                <option value="airbed">Airbed</option>
                            </select>
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Security Deposit: </h4>
                            <input
                            type="number"
                            min="0"
                            name="securityDeposit"
                            placeholder="Security Deposit"
                            value={listing.securityDeposit}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card> 
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Room Type: </h4>
                            <select
                            name="roomType"
                            value={listing.roomType}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">What describes the space?</option>
                                <option value="privateRoom">Private Room</option>
                                <option value="entireHomeOrApt">Entire Home/Apt.</option>
                                <option value="shared">Shared Home/Apt.</option>
                            </select>    
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
                                <option value="Condominium">Condominium</option>
                                <option value="Loft">Loft</option>
                                <option value="ServicedApartment">Serviced Apartment</option> 
                                <option value="Hostel">Hostel</option>
                                <option value="guestSuite">Guest Suite</option>
                                <option value="BedandBreakfast">Bed and Breakfast</option>
                                <option value="guestHouse">Guest House</option>
                                <option value="hotel">Hotel</option>
                                <option value="boutiqueHotel">Boutique Hotel</option>
                                <option value="bungalow">Bungalow</option>
                                <option value="boat">Boat</option>
                                <option value="tinyHouse">Tiny House</option>
                                <option value="houseBoat">House Boat</option>
                                <option value="CamperRV">Camper/RV</option>
                                <option value="villa">Villa</option>
                                <option value="aparthotel">Aparthotel</option>
                                <option value="Other">Other</option>
                            </select>    
                        </label>  
                    </Card>  
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Zip Code: </h4>
                            <input
                            type="number"
                            name="zipCode"
                            min="5"
                            placeholder="Zip Code"
                            value={listing.zipCode}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card>
                    <Card className="checkbox-card">
                        <label className="check">
                            Laundry
                            <input
                            type="checkbox"
                            name="laundry"
                            onChange={updateCheckbox}
                            checked={listing.amenities.laundry}
                            />
                        </label>
                        <label className="check">
                            Spa
                            <input
                            type="checkbox"
                            name="spa"
                            onChange={updateCheckbox}
                            checked={listing.amenities.spa}
                            />
                        </label>
                        <label className="check">
                            Wifi
                            <input
                            type="checkbox"
                            name="wifi"
                            onChange={updateCheckbox}
                            checked={listing.amenities.wifi}
                            />
                        </label>
                        <label className="check">
                            Cleaning
                            <input
                            type="checkbox"
                            name="cleaning"
                            onChange={updateCheckbox}
                            checked={listing.amenities.cleaning}
                            />
                        </label>
                        <label className="check">
                            Breakfast
                            <input
                            type="checkbox"
                            name="breakfast"
                            onChange={updateCheckbox}
                            checked={listing.amenities.breakfast}
                            />
                        </label>
                        <label className="check">
                            Security
                            <input
                            type="checkbox"
                            name="security"
                            onChange={updateCheckbox}
                            checked={listing.amenities.security}
                            />
                        </label>
                        <label className="check">
                            Pool
                            <input
                            type="checkbox"
                            name="pool"
                            onChange={updateCheckbox}
                            checked={listing.amenities.pool}
                            />
                        </label>
                        <label className="check">
                            Patio
                            <input
                            type="checkbox"
                            name="patio"
                            onChange={updateCheckbox}
                            checked={listing.amenities.patio}
                            />
                        </label>
                        <label className="check">
                            Pets
                            <input
                            type="checkbox"
                            name="pets"
                            onChange={updateCheckbox}
                            checked={listing.amenities.pets}
                            />
                        </label>
                    </Card>
                </form>
                <div className="button-div">
                <Button onClick={addListing} color="info" className="submitButton">
                    Add Listing
                </Button>
                <Button onClick={runPriceEstimator} className="run-ds-btn">
                    Get Price
                </Button>
                <Button onClick={cancelForm} color="danger">
                    Reset
                </Button>
                </div>
            </Jumbotron>
        </div>
    )
}