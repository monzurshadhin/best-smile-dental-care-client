import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Appointment.css";

const Appointment = () => {
  const { user } = useAuth();

  return (
    <div className="appointment-section">
    
    <div className="container ">
      <h1 className="text-center appointment-title section-title"><b>Make an appointment to a <span>Dentist</span></b></h1>
      <p className="text-center mb-5">
        <p>To request an appointment, please fill out the form below</p>
      </p>

      <Form className="appointment-form">
        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control className='appointment-input' type="text" placeholder="First Name" value={user.displayName}/>
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control className='appointment-input' type="text" placeholder="Last Name" />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control className='appointment-input' type="Email" placeholder="Enter Email" value={user.email}/>
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Number*</Form.Label>
              <Form.Control className='appointment-input' type="text" placeholder="Enter number" />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Label>Gender*</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City*</Form.Label>
              <Form.Control className='appointment-input' type="text" placeholder="Enter City" />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country*</Form.Label>
              <Form.Select className='appointment-input' aria-label="Default select example">
                <option>Bangladesh</option>
                <option value="1">India</option>
                <option value="2">Pakistan</option>
                <option value="3">Nepal</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Zip Code*</Form.Label>
              <Form.Control className='appointment-input' type="text" placeholder="Enter Zip Code" />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Select Day*</Form.Label>
              <Form.Control className='appointment-input' type="date" placeholder="Date" />
            </Form.Group>
          </div>
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Select Time*</Form.Label>
              <Form.Select className='appointment-input' aria-label="Default select example">
                <option>Morning</option>
                <option value="1">Noon</option>
                <option value="2">Night</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </div>
        </div>

        <button className="carousel-btn">Submit Appointment</button>
        
      </Form>
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
      
    </div>
  );
};

export default Appointment;
