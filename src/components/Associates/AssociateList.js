import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AssociateHorizontalCard from './AssociateHorizontalCard';
import { Link } from 'react-router-dom';
import { properties } from '../../properties'

class AssociateList extends Component {
  constructor(){
    super();
    this.state = {
        isLoaded: false,
        associates: []
    }
  }

  componentDidMount() {
    fetch(properties.ms_associados_url + "associate")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                associates: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
            });
        }
    )
  }

  render() {
    console.log(this.state)
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