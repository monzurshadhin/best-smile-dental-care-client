import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {services} = useServices();
    
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