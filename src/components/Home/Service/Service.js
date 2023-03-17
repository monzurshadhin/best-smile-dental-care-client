import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import "./Service.css";


const Service = (props) => {
//   console.log(props.service);

  const { _id,img, id, title, short_details } = props.service;
  console.log(props.service);
  const {handleFoodDetails,isLoading} = useServices();
  useEffect(() =>{
    AOS.init();
    },[]);
    console.log(isLoading);
    if (isLoading) {
      return (
        <div>
          <h2 className="section-title text-center my-4">Our More Collections</h2>
          <div className="d-flex justify-content-center spinner spinner-section">
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </div>
        </div>
      );
    }
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
