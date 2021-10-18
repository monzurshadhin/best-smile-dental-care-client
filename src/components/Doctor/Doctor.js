import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    console.log(props.doctor)
    const {name,img,designation} = props.doctor;
    return (
        <Col>
        <Card className="doctors-card">
        <Card.Body className="card-image">
        <Card.Img variant="top" src={img} />
        </Card.Body>
          
          <Card.Body>
            <Card.Title className="name">{name}</Card.Title>
            <Card.Text className="designation">
             {designation}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;