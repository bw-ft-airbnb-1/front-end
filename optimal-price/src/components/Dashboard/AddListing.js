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
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

//import Context from './../contexts/loginContext';

export const AddListing = () => {
 const [listing, setListing] = useState({
     price: 300,
     minimum_nights: "",
     bedrooms: "",
     bathrooms: "",
     accomodates: "",
     bed_type: "",
     security_deposit: "",
     room_type: "",
     property_type: "",
     zip_code: "",
     amenities: {"wifi":false, "heating":false, "kitchen":false, "essentials":false, "washer":false, "hair_dryer":false, "laptop_friendly":false, "workspace":false, "hangers":false, "iron":false, "hot_water":false, "shampoo":false, "tv":false, "family":false, "kid_friendly":false, "internet":false, "host_greets_you":false, "smoke_detector":false, "buzzer":false, "wireless_intercom":false, "free_street_parking":false, "refrigerator":false, "dishes_and_silverware":false, "bed_linens":false, "cooking_basics":false, "stove":false, "lock_on_bedroom_door":false, "oven":false, "elevator":false, "coffee_maker":false, "smoking_allowed":false, "first_aid_kit":false, "cable_tv":false, "dishwasher":false, "long_term_stays_allowed":false, "luggage_dropoff_allowed":false, "dryer":false, "fire_extinguisher":false, "pets_allowed":false, "extra_pillows_and_blankets":false, "patio_or_balcony":false, "microwave":false, "private_entrance":false, "paid_parking_off_premise":false, "safety_card":false, "free_parking_off_premises":false, "private_living_room":false, "bathtub":false}
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

const renderAmenities = () => {

    const amens = ["wifi", "heating", "kitchen", "essentials", "washer", "hair_dryer", "laptop_friendly", "workspace", "hangers", "iron", "hot_water", "shampoo", "tv", "family", "kid_friendly", "internet", "host_greets_you", "smoke_detector", "buzzer", "wireless_intercom", "free_street_parking", "refrigerator", "dishes_and_silverware", "bed_linens", "cooking_basics", "stove", "lock_on_bedroom_door", "oven", "elevator", "coffee_maker", "smoking_allowed", "first_aid_kit", "cable_tv", "dishwasher", "long_term_stays_allowed", "luggage_dropoff_allowed", "dryer", "fire_extinguisher", "pets_allowed", "extra_pillows_and_blankets", "patio_or_balcony", "microwave", "private_entrance", "paid_parking_off_premise", "safety_card", "free_parking_off_premises", "private_living_room", "bathtub"];
    return amens.map((amen) => {
        return (
            <label>
                {amen}
                <input
                    type="checkbox"
                    name={amen}
                    onChange={updateCheckbox}
                    checked={listing.amenities.amen}
                />
            </label>
        )
    })
}




 const addListing = (event) => {
     event.preventDefault()
     console.log(listing)
     //axios.post(" ",listing) return state of form plus price
     axiosWithAuth().post('/properties', listing)
                    .then(response =>{
                        console.log(response)
                    })
                    .catch(error => console.log(error.message))
 }

const runPriceEstimator = (event) => {
    event.preventDefault()
    // post to get optimal price
    axios.post('https://air-bnb-optimizer.herokuapp.com/price',listing)
                 .then(response =>{
                     console.log(response)
                    //  setPriceEst
                 })
                 .catch(error => console.log(error))
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
        amenities: {"wifi":false, "heating":false, "kitchen":false, "essentials":false, "washer":false, "hair_dryer":false, "laptop_friendly":false, "workspace":false, "hangers":false, "iron":false, "hot_water":false, "shampoo":false, "tv":false, "family":false, "kid_friendly":false, "internet":false, "host_greets_you":false, "smoke_detector":false, "buzzer":false, "wireless_intercom":false, "free_street_parking":false, "refrigerator":false, "dishes_and_silverware":false, "bed_linens":false, "cooking_basics":false, "stove":false, "lock_on_bedroom_door":false, "oven":false, "elevator":false, "coffee_maker":false, "smoking_allowed":false, "first_aid_kit":false, "cable_tv":false, "dishwasher":false, "long_term_stays_allowed":false, "luggage_dropoff_allowed":false, "dryer":false, "fire_extinguisher":false, "pets_allowed":false, "extra_pillows_and_blankets":false, "patio_or_balcony":false, "microwave":false, "private_entrance":false, "paid_parking_off_premise":false, "safety_card":false, "free_parking_off_premises":false, "private_living_room":false, "bathtub":false}

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
                        { renderAmenities() }
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