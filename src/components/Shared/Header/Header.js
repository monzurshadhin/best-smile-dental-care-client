import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <Navbar fixed="top" className="navbar-section"  expand="lg">
        <Container>
          <Navbar.Brand href="#home"><b className="logo"><span>Best</span>Smile</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={HashLink} className="navbar-link" to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about_us">
              About us
            </Nav.Link>
            {/* best-equipments */}
            <Nav.Link as={HashLink} to="/home#best-equipments">
              Best of best
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/appointment">
              Appointment
            </Nav.Link>
            {user?.displayName ? (
              <>
                <Navbar.Text>
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
                <button onClick={logOut} className="header-btn" >
                  <b>Logout</b>
                </button>
              </>
            ) : (
              <>
                <Nav.Link  as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <button className="header-btn">Sign up</button>
                </Nav.Link>
              </>
            )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;