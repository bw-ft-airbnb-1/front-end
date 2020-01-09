import React, {useContext} from 'react';
import Context from '../../contexts/loginContext';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


   export const Cards = props =>{
    const {properties, setProperties} = useContext(Context)
  
    //  const edit = e =>{
    //    e.preventDefault();
    //    // axios.put call here
    //  }

    const handleDelete = e => {
      e.preventDefault();
      axiosWithAuth()
                    .delete(`/properties/${props.myid}`)
                    .then(response => {
                      setProperties(properties.filter(item => item.id !== props.myid)) 
                    })
                    .catch(err => console.log(err))
    }

      return (
        <div>
          <Card>
            <CardImg top width="100%" src= {props.image} alt="Card image" />
            <CardBody>
              <CardTitle>Luxurious Cabin</CardTitle>
              <CardSubtitle>Perfect for a getaway</CardSubtitle>
              <CardText>Come check out this awesome cabin! </CardText>
              <CardText>Minimum Nights: {props.minimum_nights} </CardText>
              <CardText>Bedrooms: {props.bedrooms} </CardText>
              <CardText>Bathrooms: {props.bathrooms} </CardText>
              <CardText>Security Deposit: {props.security_deposit} </CardText>
              <CardText>Price: {props.price} </CardText>
              <CardText>Accommodates: {props.accommodates} </CardText>
              <CardText>Property Type: {props.property_type} </CardText>
              <CardText>Bed Type: {props.bed_types} </CardText>
              <Button color = 'info'> Edit </Button>
              <Button color = 'danger' onClick = {handleDelete}>Delete</Button>
            </CardBody>
          </Card>
         </div>
      )
    }

