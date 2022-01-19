import React, { Component } from 'react';
import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

render() {
    return (
        <Navbar style={{ marginBottom: '20px' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: '25px' }}><img src="../../../../logo_boasaude.png"/> &nbsp; SGPS - Operadora Boa Saúde</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Usuário(a) logado: <a href="#login">Todette</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
    }
        
}

export default Header;