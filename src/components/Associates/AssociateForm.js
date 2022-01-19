import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class AssociateForm extends Component {
  render() {
    return (
        <>
            <Container>
                <h4>Cadastrar Associado</h4>
                <hr></hr>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDataNascimento">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="text" placeholder="Digite a data de nascimento" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o CPF" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Digite a e-mail" />
                        </Form.Group>
                    </Row>

                    <hr/>

                    <Row className="mb-3">
                        <div key='inline-radio' className="mb-3">
                            <Form.Check
                                inline
                                label="Empresarial"
                                name="tipoPlano"
                                type='radio'
                                id='inline-radio-plano-empresarial'
                            />
                            <Form.Check
                                inline
                                label="Individual"
                                name="tipoPlano"
                                type='radio'
                                id='inline-radio-plano-individual'
                            />
                        </div>

                        <Form.Group as={Col} controlId="formGridCNPJ">
                            <Form.Label>CNPJ da Empresa</Form.Label>
                            <Form.Control type="text" placeholder="Digite o CNPJ da empresa" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridClassificacao">    
                            <Form.Label>Classificação</Form.Label>
                            <Form.Select defaultValue="Selecione">
                                <option value="">Selecione</option>
                                <option value="ENFERMARIA">Enfermaria</option>
                                <option value="APARTAMENTO">Apartamento</option>
                                <option value="VIP">VIP</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridPlanoOdontologico">  
                            <Form.Label>Plano Odontológico?</Form.Label>
                            <div key='inline-radio' className="mb-3">
                                <Form.Check
                                    inline
                                    label="Sim"
                                    name="planoOdontologico"
                                    type='radio'
                                    id={`inline-radio-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Não"
                                    name="planoOdontologico"
                                    type='radio'
                                    id={`inline-radio-2`}
                                />
                            </div>
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Button variant="primary" type="submit" style={{ marginTop: '10px', float: 'right', marginLeft: '10px' }}>
                        Salvar
                    </Button>
                    <Link to="/"><Button style={{ marginTop: '10px', float: 'right' }} variant="secondary">Voltar</Button></Link>&nbsp;
                </Form>
            </Container>
        </>
    );
  }
       
}

export default AssociateForm;