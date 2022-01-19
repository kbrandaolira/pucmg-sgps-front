import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header'

class Login extends Component {
  render() {
    return (
        <>
            <Header></Header>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                </Form>
            </Container>
        </>
    );
  }
       
}

export default Login;