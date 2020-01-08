import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar.js';
import axios from "axios";


import {
    Jumbotron,
    Button,
    Card,
    CardTitle
  } from 'reactstrap';
  
 

  import '../Dashboard.css';


 import {axiosWithAuth} from '../../utils/axiosWithAuth';
//import Context from './../contexts/loginContext';

export const AddListing = () => {
 const [listing, setListing] = useState({
     price: "",
     minimum_nights: "",
     bedrooms: "",
     bathrooms: "",
     accomodates: "",
     bed_type: "",
     security_deposit: "",
     room_type: "",
     property_type: "",
     zip_code: "",
     amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false, "pets":false}
 })

 const [priceEst, setPriceEst] = useState(0)

//  const [error, setError] = useState({
//         bedroomError: "",
//         bathroomError: "",
//         securityDepositError: "",
//         zip_code_error: ""
//  })

//  useEffect(()=>{
//     axiosWithAuth().get('/properties/getOptions')
//     .then(res =>{
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })
//  },[])


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
        listing.price * listing.minimum_nights
    )
}

const cancelForm = () => {
    setListing({
        price: "",
        minimum_nights: "",
        bedrooms: "",
        bathrooms: "",
        accomodates: "",
        bedtype: "",
        security_deposit: "",
        room_type: "",
        property_type: "",
        zip_code: "",
        amenities: {"laundry":false, "spa":false, "wifi":false, "cleaning":false, "breakfast":false, "security":false, "pool":false, "patio":false}

    })
    setPriceEst(0.00)

    // setError({
    //     bedroomError: "",
    //     bathroomError: "",
    //     securityDepositError: "",
    //     zip_code_error: ""
    // })
}

// const validate = () => {
//     let bedroomError = ""
//     let bathroomError = ""
//     let securityDepositError = ""
//     let zip_code_error = ""
    
//     // bedroom validation
    
//     // bathroom validation

//     // security deposit validation

//     // zip code validation
//     } 


    return(
        <div>
        <NavBar />
        <Card id="output-card" className="addCard">
    <h1 className="output-label-text">Suggested Listing Price: $ {priceEst}</h1>
        </Card>
            <Jumbotron className="addListing-jumbo">
                <form className="addListing" onSubmit={AddListing}>

                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className='label-text'>Price: </h4>
                            <input
                                type="number"
                                name="price"
                                value={listing.price || ""}
                                onChange={handleChange}
                                min="0"
                                placeholder="Price"
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
                            name="minimum_nights"
                            value={listing.minimum_nights || ""}
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
                            name="bed_type"
                            value={listing.bed_type}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">Bed Type</option>
                                <option value="real_bed">Real Bed</option>
                                <option value="pull_out">Pull-out</option>
                                <option value="sofa">Sofa</option>
                                <option value="futon">Futon</option>
                                <option value="couch">Couch</option>
                                <option value="air_bed">Airbed</option>
                            </select>
                        </label>
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Security Deposit: </h4>
                            <input
                            type="number"
                            min="0"
                            name="security_deposit"
                            placeholder="Security Deposit"
                            value={listing.security_deposit}
                            onChange={handleChange}
                            required
                            />
                        </label>
                    </Card> 
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Room Type: </h4>
                            <select
                            name="room_type"
                            value={listing.room_type}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">What describes the space?</option>
                                <option value="private_room">Private Room</option>
                                <option value="entire_home_or_apt">Entire Home/Apt.</option>
                                <option value="shared">Shared Home/Apt.</option>
                            </select>    
                        </label>   
                    </Card>
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Property Type: </h4>
                            <select
                            name="property_type"
                            value={listing.property_type}
                            onChange={handleChange}
                            required
                            >
                                <option value="none">What is the type of your listing?</option>
                                <option value="house">House</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="apartment">Apartment</option>
                                <option value="condominium">Condominium</option>
                                <option value="loft">Loft</option>
                                <option value="serviced_apartment">Serviced Apartment</option> 
                                <option value="hostel">Hostel</option>
                                <option value="guest_suite">Guest Suite</option>
                                <option value="bed_and_breakfast">Bed and Breakfast</option>
                                <option value="guest_house">Guest House</option>
                                <option value="hotel">Hotel</option>
                                <option value="boutique_hotel">Boutique Hotel</option>
                                <option value="bungalow">Bungalow</option>
                                <option value="boat">Boat</option>
                                <option value="tiny_house">Tiny House</option>
                                <option value="house_boat">House Boat</option>
                                <option value="camper_rv">Camper/RV</option>
                                <option value="villa">Villa</option>
                                <option value="apart_hotel">Aparthotel</option>
                                <option value="other">Other</option>
                            </select>    
                        </label>  
                    </Card>  
                    <Card className="addCard">
                        <label className="addListing-label">
                        <h4 className="label-text">Zip Code: </h4>
                            <input
                            type="number"
                            name="zip_code"
                            min="5"
                            placeholder="Zip Code"
                            value={listing.zip_code}
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