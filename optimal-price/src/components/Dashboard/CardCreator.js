import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


   export const Cards = props =>{
     console.log(props)
      return (
        <div>
          <Card>
            <CardImg top width="100%" src= {props.photos[0]} alt="Card image" />
            <CardBody>
              <CardTitle>Luxurious Cabin</CardTitle>
              <CardSubtitle>Perfect for a getaway</CardSubtitle>
              <CardText>Come check out this awesome cabin! </CardText>
              <CardText>Minimum Nights: {props.minimumNights} </CardText>
              <CardText>Bedrooms: {props.bedrooms} </CardText>
              <CardText>Bathrooms: {props.bathrooms} </CardText>
              <CardText>Place: {props.entirePlace} </CardText>
              <CardText>Accommodates: {props.accommodates} </CardText>
              <CardText>Property Type: {props.propertyType} </CardText>
              <CardText>Bed Type: {props.bedType} </CardText>
              <CardText>Security Deposit: {props.securityDeposit} </CardText>
              <CardText>Optimal Price : {props.optimalPrice } </CardText>
              <Button>Reserve</Button>
            </CardBody>
          </Card>
         </div>
      )
    }

