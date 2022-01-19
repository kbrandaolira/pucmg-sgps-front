import React, { Component } from 'react';
import {Container, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Unauthorized extends Component {

render() {
    return (
        <Container>
            <Alert variant='light' style={{textAlign: 'center'}}>
                <b>401</b> - Você não tem permissão para acessar essa página.
            </Alert>
        </Container>
        );
    }
        
}

export default Unauthorized;