import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import Footer from '../Shared/Footer/Footer';
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

            <div className="row my-5">
          <div className="col-12 col-md-10">
          <div className="row d-flex align-items-center">
              <div className="col-md-3 "><img src="https://thegenius.co/dentistry/live2/wp-content/uploads/2015/10/teeth_2.png" alt="" /></div>
              <div className="col-9"><h3>We are dedicated to giving each of our patients the healthy smile they deserve!</h3></div>
          </div>
          </div>
          <div className="col-12 col-md-2 ">
          <button className="carousel-btn">Get Emergency</button>
          </div>
      </div>
        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default Doctors;