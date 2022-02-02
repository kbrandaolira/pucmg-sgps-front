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
    const { isLoaded, associates } = this.state;

    if(!isLoaded){
        return <div style={{textAlign: "center"}}>Loading...</div>
    } else {
        return <div>
                    <Container>
                        <h4>Associados</h4>
                        <hr></hr>
                        {associates.map(associate => (
                            <AssociateHorizontalCard key={associate.id} associate={associate} ></AssociateHorizontalCard>
                        ))}
                        <hr></hr>
                        <Link to="/associate/form"><Button to="/associate/form" style={{ marginTop: '10px', float: 'right' }} variant="secondary">Cadastrar Associado</Button></Link>
                    </Container>
                    
                </div>
    }
  }
       
}

export default AssociateList;