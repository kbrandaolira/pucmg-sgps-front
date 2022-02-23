import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import AssociateVerticalCard from '../AssociateVerticalCard'
import ExamCard from './ExamCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { properties } from '../../../properties'

class ExamList extends Component {
    constructor(){
        super();
        this.state = {
            isLoaded: false,
            exams: []
        }
      }
    
      //TODO Passar o ID do associado ao invés de fixo!!!
      componentDidMount() {
        fetch(properties.ms_documentos_url + "document/MEDICAL_EXAM/from/ASSOCIATE/1/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    exams: result
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
    const { isLoaded, exams } = this.state;

    if(!isLoaded){
        return <div style={{textAlign: "center"}}>Loading...</div>
    } else {
        var body

        if(exams.length > 0){
            body =  <div className='container-fluid d-flex flex-wrap'>
                        {exams.map(exam => {
                            return (
                                <ExamCard key={exam.id} associate={exam}></ExamCard>
                            );
                        })}
                    </div>
        } else {
            body = "Nenhum exame foi encontrado."
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col><AssociateVerticalCard/></Col>
                    <Col xs={8}>
                        <h4>Exames</h4>
                        <hr></hr>
                        {body}
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