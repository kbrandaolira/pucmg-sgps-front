import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class AssociateHorizontalCard extends Component {
  render() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Kayan Lira</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Plano Empresarial - Apartamento</Card.Subtitle>
                    <Card.Link href="#">Exames</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
  }
       
}

export default AssociateHorizontalCard;