import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img3 from "../../../Images/CarouselImages/1.jpg";
import img2 from "../../../Images/CarouselImages/2.jpg";
import img1 from "../../../Images/CarouselImages/3.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <div id="home">
      <Carousel fade>
        <Carousel.Item className='carousel-item'>
          <img
            className="carousel-img d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h2 className="title">SPECIALIZING COSMETIC DENTAL SURGERY</h2>
            <p>
              Top most Dentist is waiting to treat you. To get your best smile.
            </p>
            <Link to="/appointment">
            <button className="carousel-btn">Make Appointment</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className="carousel-img d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            
            <h2 className="title">OUR SMILES SPEAKS THEMSELVES</h2>
            <p>
              Top most Dentist is waiting to treat you. To get your best smile.
            </p>
            <button className="carousel-btn">View Details</button>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className="carousel-img d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h2 className="title">WHAT IS MORE IMPORTANT TO YOU?</h2>
            <p>
              Top most Dentist is waiting to treat you. To get your best smile.
            </p>
            <Link to="/appointment">
            <button className="carousel-btn">Make Appointment</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
