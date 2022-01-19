import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AssociateHorizontalCard from './AssociateHorizontalCard';
import { Link } from 'react-router-dom';

class AssociateList extends Component {
  render() {
    return (
        <>
            <Container>
                <h4>Associados</h4>
                <hr></hr>
                <AssociateHorizontalCard></AssociateHorizontalCard>
            <hr></hr>
            <Link to="/associate/form"><Button to="/associate/form" style={{ marginTop: '10px', float: 'right' }} variant="secondary">Cadastrar Associado</Button></Link>
            </Container>
        </>
    );
  }
       
}

export default AssociateList;