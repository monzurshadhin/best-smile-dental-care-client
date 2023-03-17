import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import "./Details.css";

const Details = () => {
  const { serviceId } = useParams();
  const [service,setService] = useState({})
  useEffect(() => {
    fetch(`http://localhost/code/laravel-backend/public/api/service-details/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className=" details-section">
      <div className="container">
        <div className="row my-5 ">
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="px-2">
              <div className="image-container">
              <img className="img-fluid my-3 w-100" src={service?.img} alt="" />
              </div>
              <h1 className="details-title">
                <b>{service?.title}</b>
              </h1>
              <p>{service?.details}</p>
              <h3>
                <b>
                  $ <span>{service?.price}</span>
                </b>
              </h3>
              <Link to={`/appointment/${service?.id}`}>
                {/* <div className="d-flex justify-content-between"> */}
                <button className="carousel-btn">Make Appointment</button>
                {/* <button className="view-btn">View Appointment</button> */}
                {/* </div> */}
              </Link>
              <h4 className="mt-5">Watch Our Procedure Video</h4>
              <iframe
                className="mt-3"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/r8BCGVpPQFU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <button className="view-btn">View Appointment</button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12 details-card mt-4">
                <div className="d-flex  align-items-center">
                  <img
                    src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/11/sidebar-img1.png"
                    alt=""
                    className="me-2"
                  />
                  <h5>Contact us</h5>
                </div>
                <h2 className="mt-2">
                  <b>+88017392793</b>
                </h2>
              </div>

              <div className="col-12 details-card mt-4">
                <div className="d-flex  align-items-center">
                  <img
                    src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/side-img2.png"
                    alt=""
                    className="me-2"
                  />
                  <h5>Have A Question?</h5>
                </div>
                <p className="mt-2">
                  We get lot s of mail and always want to answer your inquirieis
                  go to FAQ'S
                </p>
              </div>

              <div className="col-12 details-card mt-4">
                <div className="d-flex  align-items-center">
                  <img
                    src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/side-img3.png"
                    alt=""
                    className="me-2"
                  />
                  <h5>Are You New Patient?</h5>
                </div>
                <p className="mt-2">
                  We encourage our new patients to arrive 15 minutes earlier
                  than their scheduled appointment time. click here
                </p>
              </div>

              <div className="col-12 details-card mt-4">
                <div className="d-flex  align-items-center">
                  <img
                    src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/side-img-4.png"
                    alt=""
                    className="me-2"
                  />
                  <h5>Make An Appointment</h5>
                </div>
                <p className="mt-2">
                  Find a Doctor and book appointments online instantly or Make
                  Call
                </p>
              </div>

              <div className="col-12 details-card mt-4">
                <h5>Before/After Gallery</h5>

                <p className="mt-2">
                Search thousands of patient photos taken by doctors before and after teeth surgery
                </p>
                <button className="view-btn">SEE OUR GALLERY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-10">
            <div className="row d-flex align-items-center">
              <div className="col-md-3 ">
                <img
                  src="https://thegenius.co/dentistry/live2/wp-content/uploads/2015/10/teeth_2.png"
                  alt=""
                />
              </div>
              <div className="col-9">
                <h3>
                  We are dedicated to giving each of our patients the healthy
                  smile they deserve!
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 ">
            <button className="view-btn">Get Emergency</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
