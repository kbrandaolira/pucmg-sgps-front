import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const associateData = {
    name: '',
    birthDate: '',
    cpf: '',
    email: '',
    typeOfHealthPlan: '',
    companyCnpj: '',
    classificationOfHealthPlan: '',
    dentalPlan: '',
    userId: 1
}

class AssociateForm extends Component {

    constructor(props) {
        super(props)
        this.state = associateData;
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <>
                <Container>
                    <h4>Cadastrar Associado</h4>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="cidName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome" onChange={this.handleOnChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="cidBirthDate">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control type="text" placeholder="Digite a data de nascimento" onChange={this.handleOnChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="cidCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF" onChange={this.handleOnChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="cidEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite a e-mail" onChange={this.handleOnChange}/>
                            </Form.Group>
                        </Row>

                        <hr/>

                        <Row className="mb-3">
                            <div key='inline-radio' className="mb-3">
                                <Form.Check
                                    inline
                                    label="Empresarial"
                                    value="EMPRESARIAL"
                                    name="cidTypeOfHealthPlan"
                                    type='radio'
                                    id={`cidEmpresarial`}
                                    onChange={this.handleOnChange}
                                />
                                <Form.Check
                                    inline
                                    label="Individual"
                                    value="INDIVIDUAL"
                                    name="cidTypeOfHealthPlan"
                                    type='radio'
                                    id={`cidIndividual`}
                                    onChange={this.handleOnChange}
                                />
                            </div>

                            <Form.Group as={Col} controlId="cidCnpj">
                                <Form.Label>CNPJ da Empresa</Form.Label>
                                <Form.Control type="text" placeholder="Digite o CNPJ da empresa" onChange={this.handleOnChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="cidClassificationOfHealthPlan">    
                                <Form.Label>Classificação</Form.Label>
                                <Form.Select defaultValue="Selecione" onChange={this.handleOnChange}>
                                    <option value="">Selecione</option>
                                    <option value="ENFERMARIA">Enfermaria</option>
                                    <option value="APARTAMENTO">Apartamento</option>
                                    <option value="VIP">VIP</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="formGroupCidDentalPlan">  
                                <Form.Label>Plano Odontológico?</Form.Label>
                                <div key='inline-radio' className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Sim"
                                        value="true"
                                        name="cidDentalPlan"
                                        type='radio'
                                        id={`cidYesDentalPlan`}
                                        onChange={this.handleOnChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Não"
                                        value="false"
                                        name="cidDentalPlan"
                                        type='radio'
                                        id={`cidNoDentalPlan`}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </Form.Group>
                        </Row>
                        <hr/>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit} style={{ marginTop: '10px', float: 'right', marginLeft: '10px' }}>
                            Salvar
                        </Button>
                        <Link to="/"><Button style={{ marginTop: '10px', float: 'right' }} variant="secondary">Voltar</Button></Link>&nbsp;
                    </Form>
                </Container>
            </>
        );
    }
       
    async handleOnChange(e){
        await this.setState({ 
            name: e.target.id === "cidName" ? e.target.value : this.state.name,
            birthDate:  e.target.id === "cidBirthDate" ? e.target.value : this.state.birthDate,
            cpf: e.target.id === "cidCpf" ? e.target.value : this.state.cpf,
            email: e.target.id === "cidEmail" ? e.target.value : this.state.email,
            typeOfHealthPlan: e.target.name === "cidTypeOfHealthPlan" ? document.querySelector(`input[name=${e.target.name}]:checked`).value : this.state.typeOfHealthPlan,
            companyCnpj: e.target.id === "cidCnpj" ? e.target.value : this.state.companyCnpj,
            classificationOfHealthPlan: e.target.id === "cidClassificationOfHealthPlan" ? e.target.value : this.state.classificationOfHealthPlan,
            dentalPlan: e.target.name === "cidDentalPlan" ? document.querySelector(`input[name=${e.target.name}]:checked`).value : this.state.dentalPlan,
        });

        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("handle submit");
    }

}

export default AssociateForm;