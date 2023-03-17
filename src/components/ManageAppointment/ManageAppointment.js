import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "./ManageAppointment.css";

const ManageAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const notify = () => toast("Appoinment deleted successfully!");

  const { user } = useAuth();
  console.log(appointments);
  useEffect(()=>{
    fetch("http://localhost/code/laravel-backend/public/api/appointment")
    .then(res=> res.json())
    .then(data => setAppointments(data))
  },[])
  // useEffect(() => {
  //   const data = { email: user.email };
  //   fetch("https://best-smile-dental-care-server.vercel.app/appointment/manage", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, []);

  const handleDelete = (id) => {
    // console.log(id);
    const url = `http://localhost/code/laravel-backend/public/api/appointment-delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        res.json()
        console.log('res',res);
        if(res.status==200){
          const remaining = appointments.filter(
                (appointment) => appointment.id !== id
              );
              setAppointments(remaining)
              notify();
        }
      })
      .then((data) => {
        // if (data.deletedCount) {
        //   console.log(data);
        //   const remaining = appointments.filter(
        //     (appointment) => appointment._id !== id
        //   );
        //   setAppointments(remaining);
        // }
        console.log('data',data);
      });
  };
  return (
    <div className="container manage-appointment">
       <ToastContainer />
      <h2 className="text-center my-4 section-title">
        Your <span>Appointments</span>
      </h2>
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="appointment-section d-md-flex justify-content-between align-items-center"
        >
          <div className="">
            <h4 className="section-title">
              Service Name:<span>{appointment.serviceTitle}</span>
            </h4>
            <p>
              <b>Name: {appointment.firstName}</b>
            </p>
            <p>
              <b>email: {appointment.email}</b>
            </p>
            <p>
              <b>Date: {appointment.day}</b>
            </p>
            <p>
              <b>Time: {appointment.time}</b>
            </p>
          </div>
          <div>
            <Link className="text-decoration-none" to={`/appointment/update/${appointment.id}`}>
              <button className="d-md-block btn btn-info m-4 ">Update</button>
            </Link>
            <button
              className="d-md-block btn btn-danger m-4"
              onClick={() => {
                handleDelete(appointment.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageAppointment;
