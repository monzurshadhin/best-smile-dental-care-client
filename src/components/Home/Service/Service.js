import React from "react";
import { Card, Col } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import "./Service.css";

const Service = (props) => {
//   console.log(props.service);
  const { img, id, title, short_details } = props.service;
  const {handleFoodDetails} = useServices();
  return (
    <div>
      <Col>
        <div className="service-card">
          <div className="img-body">
            <Card.Img variant="top  card-img mx-auto" src={img} />
          </div>

          <Card.Body className="text-center px-1 service-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{short_details}</Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center">
            <button className="service-btn" onClick={()=>handleFoodDetails(id)}>See details</button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Service;
