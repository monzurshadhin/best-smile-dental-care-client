import React from 'react';
import img1 from '../../../Images/CarouselImages/4.jpg';
import './About.css';

const About = () => {
    return (
        <div id="about_us">
            <div className="container">
                <h3 className="text-center mb-5 section-title"><span>About</span> us</h3>
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-2">
                        <h3 className="mt-3">Why you should visit us</h3>
                        <h5 className="about-small-details">Best Smile Dental care was founded in 2017.With the vision of developing high quality and affordable health care infrastructure</h5>
                        <p>We are a chain of dental clinics offering specialized treatment by experienced doctors. We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients.</p>
                        <button className="carousel-btn">Make Appointment</button>

                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-1">
                        <img className="w-100" src={img1} alt="" />
                    </div>
                </div>
                <div className="row my-5 g-4">
                    <div className="col-12 col-md-6 col-lg-4 ">
                    <div className='about-card p-3'>
                    <div className="d-flex justify-content-center">
                    <i className="far fa-life-ring about-icon"></i>
                    </div>
                        <h4 className="text-center">24/4 Customer Support</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 ">
                    <div className='about-card p-3'>
                    <div className="d-flex justify-content-center">
                    <i className="fas fa-medkit about-icon"></i>
                    </div>
                        <h4 className="text-center">Affordable Dental Care</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 ">
                    <div className='about-card p-3'>
                    <div className="d-flex justify-content-center">
                    <i className="fas fa-user-md about-icon"></i>
                    </div>
                        <h4 className="text-center">Talented Doctors Team</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;