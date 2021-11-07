import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ManageAppointment.css";

const ManageAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  const { user } = useAuth();
  console.log(appointments);
  useEffect(() => {
    const data = { email: user.email };
    fetch("http://localhost:5000/appointment/manage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    const url = `http://localhost:5000/appointment/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          const remaining = appointments.filter(
            (appointment) => appointment._id !== id
          );
          setAppointments(remaining);
        }
      });
  };
  return (
    <div className="container manage-appointment">
      <h2 className="text-center my-4 section-title">
        Your <span>Appointments</span>
      </h2>
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
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
            <Link className="text-decoration-none" to={`/appointment/update/${appointment._id}`}>
              <button className="d-md-block btn btn-info m-4 ">Update</button>
            </Link>
            <button
              className="d-md-block btn btn-danger m-4"
              onClick={() => {
                handleDelete(appointment._id);
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
