import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Details.css';

const Details = () => {
    const {serviceId} = useParams();
    const {services} = useServices();

    const details = services?.find(service=>service.id===parseInt(serviceId));
    return (
        <div className="container details-section">
            
        <div className="row my-5 ">
            <div className="col-12 col-md-6 d-flex align-items-center order-md-1 order-2">
                <div className="px-2">
                <h1><b>{details?.title}</b></h1>
                <p>{details?.details}</p>
                <h3><b>$ <span>{details?.price}</span></b></h3>
                <Link to="/appointment">
                <button className="carousel-btn">Make Appointment</button>
                </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-1">
            <img className="img-fluid my-3" src={details?.img} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Details;