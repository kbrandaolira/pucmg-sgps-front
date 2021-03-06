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
        var body

        if(associates.length > 0){
            body =  <div className='container-fluid d-flex flex-wrap'>
                        {associates.map(associate => {
                            return (
                                <AssociateHorizontalCard key={associate.id} associate={associate}></AssociateHorizontalCard>
                            );
                        })}
                    </div>
        } else {
            body = "Nenhum associado foi encontrado."
        }

        return <div>
                    <Container>
                        <h4>Associados</h4>
                        <hr></hr>
                        <div className='container-fluid d-flex flex-wrap'>
                          {body}
                        </div>
                        <hr></hr>
                        <Link to="/associate/form"><Button to="/associate/form" style={{ marginTop: '10px' }} variant="secondary">Cadastrar Associado</Button></Link>
                    </Container>
                    
                </div>
    }
  }
       
}

export default AssociateList;