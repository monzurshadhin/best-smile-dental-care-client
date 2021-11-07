import React from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../hooks/useAuth";
import facebook from "../../../Images/Icons/facebook.png";
import google from "../../../Images/Icons/google.png";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading, setUser,signInUsingFacebook,loginProcess,handleEmail,handlePassword,setMessage,message,setError,error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const notify = () => toast("login successfully!");
  const redirect_uri = location.state?.from || "/home";

  // handle Google Login 
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        notify();
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setMessage("");
        setError("Login Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // handle facebook login 
  const handleFacebookLogin = () =>{
    signInUsingFacebook()
    .then((result) => {
        setUser(result.user);
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        notify();
        setMessage("");
        setError("Login Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //handle login with email and password 
  const handleLoginProcess =(e) =>{
    e.preventDefault();
    loginProcess()
    .then((result) => {
        setUser(result.user);
        notify();
        setMessage("Login Successful");
        setError("");
        history.push(redirect_uri);
        //  console.log(result.user)
      })
      .catch((error)=>{
        setMessage("");
        setError("Login Failed");
      })
      
  }

  return (
    <div className="login-section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto form-section">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleLoginProcess}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmail}
                  className="input-field"
                  type="email" required
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onBlur={handlePassword}
                  className="input-field" required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <input className="signup-btn" type="Submit" value="Sign in" />
            </Form>
            <p className="text-success mt-2 text-center">{message}</p>
            <p className="text-danger mt-2 text-center">{error}</p>

            <Link to="/register" className="link">
              <p>create a new account?</p>
            </Link>

            <div className="icon-section">
              <img onClick={handleGoogleLogin} src={google} alt="" />
              <img onClick={handleFacebookLogin} src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
