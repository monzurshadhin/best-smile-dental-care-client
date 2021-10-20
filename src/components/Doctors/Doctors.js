import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const {doctors} = useDoctors();
    
    return (
        <div className="section-bg">
        
        <div className="container doctor-section">
            <h1 className="doctors-title text-center section-title"><b>Highly Qualified <span>Dentists</span></b></h1>
            <p className="mb-5 text-center">We have built our dentistry over the strong pillars of 22 MDS surgeons. Our team has expert professionals who are immensely experienced for several years.</p>
            
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    doctors.map(doctor =><Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }

            </Row>

        </div>
            
        </div>
    );
};

export default Doctors;