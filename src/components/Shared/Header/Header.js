import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const [isActive, setIsActive] = useState('home');
  const {user,logOut} = useAuth();
  const handleActive = (props) =>{
    setIsActive(props);
  }
  console.log(user);
    return (
        <Navbar fixed="top" className="navbar-section"  expand="lg">
        <Container>
          <Navbar.Brand href="#home"><b className="logo"><span>Best</span>Smile</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">

            <NavDropdown className={isActive==='home'||isActive==='service'||isActive==='about'||isActive==='equipments'?"active-nav":''} title="Home" id="basic-nav-dropdown">
              <div className="drop-down-section">
          <NavDropdown.Item as={HashLink} onClick={()=>handleActive('home')} className={isActive==='home'&&"active-nav"} to="/home#home">Home</NavDropdown.Item>
          <NavDropdown.Item as={HashLink} onClick={()=>handleActive('service')} className={isActive==='service'&&"active-nav"} to="/home#services">Services</NavDropdown.Item>
          <NavDropdown.Item as={HashLink} onClick={()=>handleActive('about')} className={isActive==='about'&&"active-nav"} to="/home#about_us">About us</NavDropdown.Item>
          <NavDropdown.Item as={HashLink} onClick={()=>handleActive('equipments')} className={isActive==='equipments'&&"active-nav"} to="/home#best-equipments">Best of best</NavDropdown.Item>
          </div>
          
        </NavDropdown>

            {/* <Nav.Link as={HashLink} onClick={()=>handleActive('home')} className={isActive==='home'&&"active-nav"} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} onClick={()=>handleActive('service')} className={isActive==='service'&&"active-nav"} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} onClick={()=>handleActive('about')} className={isActive==='about'&&"active-nav"} to="/home#about_us">
              About us
            </Nav.Link>
            
            <Nav.Link as={HashLink} onClick={()=>handleActive('equipments')} className={isActive==='equipments'&&"active-nav"} to="/home#best-equipments">
              Best of best
            </Nav.Link> */}
            <Nav.Link as={HashLink} onClick={()=>handleActive('doctors')} className={isActive==='doctors'&&"active-nav"} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} onClick={()=>handleActive('appointments')} className={isActive==='appointments'&&"active-nav"} to="/manageAppointment">
              Manage Appointment
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
                <Nav.Link  as={Link} onClick={()=>handleActive('login')} className={isActive==='login'&&"active-nav"} to="/login">
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