import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import AssociateVerticalCard from '../AssociateVerticalCard'
import ExamCard from './ExamCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class ExamList extends Component {
  render() {
    return (
        <>
            <Container>
                <Row>
                    <Col><AssociateVerticalCard/></Col>
                    <Col xs={8}>
                        <h4>Exames</h4>
                        <hr></hr>
                        <ExamCard/>
                    </Col>
                </Row>
                <Row>
                    <Link to="/"><Button style={{ marginTop: '10px', float: 'right' }} variant="secondary">Voltar</Button></Link>
                </Row>
            </Container>
        </>
    );
  }
       
}

export default ExamList;