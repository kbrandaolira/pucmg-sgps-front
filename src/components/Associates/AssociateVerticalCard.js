import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class AssociateVerticalCard extends Component {
  render() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/user.svg`} />
              <Card.Body>
                <Card.Title>Kayan Lira</Card.Title>
                <Card.Text>
                  Plano Empresarial - Apartamento
                </Card.Text>
              </Card.Body>
            </Card>
        </>
    );
  }
       
}

export default AssociateVerticalCard;