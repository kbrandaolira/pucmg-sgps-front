import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class AssociateHorizontalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      associate: props.associate
    };
  }

  render() {
    const { associate } = this.state;
    console.log(associate)

    return (
        <>
            <Card style={{ width: '18rem', marginLeft: "2px", marginTop: "2px" }}>
                <Card.Body>
                    <Card.Title>{associate.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{associate.typeOfHealthPlan} - {associate.classificationOfHealthPlan} </Card.Subtitle>
                    {/* <Card.Link href={"/associate/exams/" + associate.id}>Exames</Card.Link> */}
                    <Card.Link style={{marginTop: "10px"}} href="/associate/exams">Exames</Card.Link> 
                </Card.Body>
            </Card>
        </>
    );
  }
       
}

export default AssociateHorizontalCard;