import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


   export const Cards = props => {
      return (
        <div>
          <Card>
            <CardImg top width="100%" src="../../../src/images/C4269AB3-4A96-494A-8235-E7437F73F66F_1_105_c.jpeg" alt="Card image" />
            <CardBody>
              <CardTitle>Luxurious Cabin</CardTitle>
              <CardSubtitle>Perfect for a getaway</CardSubtitle>
              <CardText>Come check out this awesome cabin! </CardText>
              <Button>Reserve</Button>
            </CardBody>
          </Card>
         </div>
      )
    }