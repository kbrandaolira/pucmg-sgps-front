import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AssociateHorizontalCard from './AssociateHorizontalCard';

class AssociateList extends Component {
  render() {
    return (
        <>
            <Container>
                <h4>Associados</h4>
                <hr></hr>
                <AssociateHorizontalCard></AssociateHorizontalCard>
            <hr></hr>
            <Button style={{ marginTop: '10px', float: 'right' }} variant="secondary">Cadastrar Associado</Button>{' '}
            </Container>
        </>
    );
  }
       
}

export default AssociateList;