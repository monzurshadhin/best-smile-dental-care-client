import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import "./Appointment.css";

const Appointment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [service, setService] = useState({});
  const notify = () => toast("Appoinment make successfully!");
 
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://thawing-lowlands-95103.herokuapp.com/details/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);


  const onSubmit = (data) => {
  
    console.log(data);
    fetch("https://thawing-lowlands-95103.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((result) => {
        if (result.insertedId) {
          // alert("appointment processed successfully");
          notify();
          reset();

        
        }
      });
  };


  console.log(service);
  return (
    <div className="appointment-section">
      <ToastContainer />
      <div className="container ">
        <h1 className="text-center appointment-title section-title">
          <b>
            Make an appointment to a <span>Dentist</span>
          </b>
        </h1>
        <p className="text-center mb-5">
          <p>To request an appointment, please fill out the form below</p>
        </p>

        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={user.displayName}
                  {...register("firstName", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Service Id*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={service._id}
                  {...register("serviceId", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Service Name*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="First Name"
                  defaultValue={service.title}
                  {...register("serviceTitle", { required: true })}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <br />
                <input
                type="email"
                  className="appointment-input"
                  placeholder="Email"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number*</Form.Label>
                <br />
                <input
                type="number"
                  className="appointment-input"
                  placeholder="Number"
                  {...register("Number")}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Label>Gender*</Form.Label>
              <br />
              <select {...register("gender")} className="appointment-input">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="city"
                  {...register("city")}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Country*</Form.Label>
                <br />
                <select {...register("country")} className="appointment-input">
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </select>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Zip Code*</Form.Label>
                <br />
                <input
                  className="appointment-input"
                  placeholder="Zip Code"
                  {...register("zip")}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Select Day*</Form.Label>
                <br />
                <input
                type="date"
                  className="appointment-input"
                  placeholder="day"
                  {...register("day")}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Select Time*</Form.Label>
                <br />
                <select {...register("time")} className="appointment-input">
                <option value="morning">Morning</option>
                <option value="noon">Noon</option>
                <option value="night">Night</option>
              </select>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-12">

        
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              
            </div> */}
          </div>

          <input className="carousel-btn" type="submit" />
        </form>
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
            <button className="carousel-btn">Get Emergency</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
