import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import "./Service.css";


const Service = (props) => {
//   console.log(props.service);
  const { _id,img, id, title, short_details } = props.service;
  const {handleFoodDetails} = useServices();
  useEffect(() =>{
    AOS.init();
    },[]);
    
  return (
    <div data-aos="fade-down" data-aos-delay="300">
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
            <button className="service-btn" onClick={()=>handleFoodDetails(_id)}>See details</button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Service;
