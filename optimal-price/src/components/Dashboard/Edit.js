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

export const Edit = (props) => {
    console.log(props)
 const [listing, setListing] = useState({
     price:  "",
     minimum_nights: "",
     bedrooms: "",
     bathrooms: "",
     accommodates: "",
     bed_type: "",
     security_deposit:  "",
     room_type: "",
     property_type: "",
     zip_code:  "",
     amenities: {"wifi":false, "heating":false, "kitchen":false, "essentials":false, "washer":false, "hair dryer":false, "laptop friendly workspace":false, "hangers":false, "iron":false, "hot water":false, "shampoo":false, "tv":false, "family":false, "kid friendly":false, "internet":false, "host greets you":false, "smoke detector":false, "buzzer":false, "wireless intercom":false, "free street parking":false, "refrigerator":false, "dishes and silverware":false, "bed linens":false, "cooking basics":false, "stove":false, "lock on bedroom door":false, "oven":false, "elevator":false, "coffee maker":false, "smoking allowed":false, "first aid kit":false, "cable tv":false, "dishwasher":false, "long term stays allowed":false, "luggage dropoff allowed":false, "dryer":false, "fire extinguisher":false, "pets allowed":false, "extra pillows and blankets":false, "patio or balcony":false, "microwave":false, "private entrance":false, "paid parking off premise":false, "safety card":false, "free parking off premises":false, "private living room":false, "bathtub":false}
 })

 const [priceEst, setPriceEst] = useState(1);

 const handleChange = (event) => {
     if(event.target.name === 'property_type' || event.target.name === 'bed_type' || event.target.name === 'room_type' ){
        setListing({
            ...listing,
            [event.target.name]: event.target.value
        })
     }
     else{
        setListing({
            ...listing,
            [event.target.name]: +event.target.value
        })
     }
    
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

    const amens = ["wifi", "heating", "kitchen", "essentials", "washer", "hair dryer", "laptop friendly workspace", "hangers", "iron", "hot water", "shampoo", "tv", "family", "kid friendly", "internet", "host greets you", "smoke detector", "buzzer", "wireless intercom", "free street parking", "refrigerator", "dishes and silverware", "bed linens", "cooking basics", "stove", "lock on bedroom door", "oven", "elevator", "coffee maker", "smoking allowed", "first aid kit", "cable tv", "dishwasher", "long term stays allowed", "luggage dropoff allowed", "dryer", "fire extinguisher", "pets allowed", "extra pillows and blankets", "patio or balcony", "microwave", "private entrance", "paid parking off premise", "safety card", "free parking off premises", "private living room", "bathtub"];
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

const listId = props.match.params.id


 const handleSubmit = (event) => {
     event.preventDefault()
     console.log(listing)
     //axios.post(" ",listing) return state of form plus price
     axiosWithAuth().put(`/properties/${listId}`, {...listing, optimal_price:priceEst})
                    .then(response =>{
                        console.log(response)
                        props.history.push('/listings')
                    })
                    .catch(error => console.log(error.message))
 }

const runPriceEstimator = (event) => {
    event.preventDefault()
    // post to get optimal price
    axios.post('https://cors-anywhere.herokuapp.com/https://air-bnb-optimizer.herokuapp.com/price',listing)
                 .then(response =>{
                     console.log(response)
                     setPriceEst(response.data)
                 })
                 .catch(error => console.log(error))
}

const cancelForm = () => {
    setListing({
        price:  "",
        minimum_nights:  "",
        bedrooms:  "",
        bathrooms:  "",
        accomodates:  "",
        bedtype: "",
        security_deposit:  "",
        room_type: "",
        property_type: "",
        zip_code:  "",
        amenities: {"wifi":false, "heating":false, "kitchen":false, "essentials":false, "washer":false, "hair dryer":false, "laptop friendly workspace":false, "hangers":false, "iron":false, "hot water":false, "shampoo":false, "tv":false, "family":false, "kid friendly":false, "internet":false, "host greets you":false, "smoke detector":false, "buzzer":false, "wireless intercom":false, "free street parking":false, "refrigerator":false, "dishes and silverware":false, "bed linens":false, "cooking basics":false, "stove":false, "lock on bedroom door":false, "oven":false, "elevator":false, "coffee maker":false, "smoking allowed":false, "first aid kit":false, "cable tv":false, "dishwasher":false, "long term stays allowed":false, "luggage dropoff allowed":false, "dryer":false, "fire extinguisher":false, "pets allowed":false, "extra pillows and blankets":false, "patio or balcony":false, "microwave":false, "private entrance":false, "paid parking off premise":false, "safety card":false, "free parking off premises":false, "private living room":false, "bathtub":false}

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
    <h1 className="output-label-text">Suggested Price: $ {priceEst}</h1>
        </Card>
            <Jumbotron className="addListing-jumbo">
                <form className="addListing" onSubmit={handleSubmit}>

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
                            name="accommodates"
                            value={listing.accommodates || ""}
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
                                <option value="real bed">Real Bed</option>
                                <option value="pull-out sofa">Pull-out</option>
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
                                <option value="private room">Private Room</option>
                                <option value="entire home/apt">Entire Home/Apt.</option>
                                <option value="shared room">Shared Home/Apt.</option>
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
                                <option value="serviced apartment">Serviced Apartment</option> 
                                <option value="hostel">Hostel</option>
                                <option value="guest suite">Guest Suite</option>
                                <option value="bed and breakfast">Bed and Breakfast</option>
                                <option value="guest house">Guest House</option>
                                <option value="hotel">Hotel</option>
                                <option value="boutique hotel">Boutique Hotel</option>
                                <option value="bungalow">Bungalow</option>
                                <option value="boat">Boat</option>
                                <option value="tiny house">Tiny House</option>
                                <option value="houseboat">House Boat</option>
                                <option value="campter rv">Camper/RV</option>
                                <option value="villa">Villa</option>
                                <option value="apart hotel">Aparthotel</option>
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
                <Button onClick={handleSubmit} color="info" className="submitButton">
                    Submit
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