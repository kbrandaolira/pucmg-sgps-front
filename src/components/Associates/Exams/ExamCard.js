import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class ExamCard extends Component {
  render() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Exame de Sangue</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Laboratório PUC-MG - 14/01/2021</Card.Subtitle>
                    <Card.Link href="#">Baixar</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
  }
       
}

export default ExamCard;