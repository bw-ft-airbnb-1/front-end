import React, {useContext} from 'react';
import Context from '../../contexts/loginContext';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import '../Dashboard.css';


   export const Cards = props =>{

    const history = useHistory();
    const {properties, setProperties} = useContext(Context)
  
     const edit = e =>{
       e.preventDefault();
       history.push(`/edit/${props.myid}`)
     }

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

        <div className="property-card-container">
          <Card className="property-card">
            <div className="img-div">
            <CardImg className="image-container" top width="100%" src= {props.image} alt="Card image" />
            </div>
            <CardBody className="card-body">
              <CardText className="card-text">Optimal Price: ${props.price} </CardText>
              <CardText className="card-text">Minimum Nights: {props.minimum_nights} </CardText>
              <CardText className="card-text">Bedrooms: {props.bedrooms} </CardText>
              <CardText className="card-text">Bathrooms: {props.bathrooms} </CardText>
              <CardText className="card-text">Security Deposit: {props.security_deposit} </CardText>
              <CardText className="card-text">Accommodates: {props.accommodates} </CardText>
              <CardText className="card-text">Property Type: {props.property_type} </CardText>
              <CardText className="card-text">Bed Type: {props.bed_types} </CardText>
              <div className="edit-delete-div">
              <Button color = 'info' onClick = {edit}> Edit </Button>
              <Button color = 'danger' onClick = {handleDelete}>Delete</Button>
              </div>
            </CardBody>
          </Card>
         </div>
      )
    }

