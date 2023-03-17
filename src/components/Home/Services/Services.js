import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {services,isLoading} = useServices();
    console.log(services);
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
        <div className="services-section my-5" id="services">
            <h3 className="text-center mb-4 section-title">Our <span>Services</span></h3>
            <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services?.map(service => <Service service={service} key={service.id}></Service>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;