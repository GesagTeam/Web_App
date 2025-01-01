import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SlideButton from "../SlidingButton/SlidingButton";
import "./Navbar.css";

export default function MyNavbar({ isHomeActive, isSearchActive, isLoginActive }) {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/login" className="d-flex align-items-center">
          <img
            src="/images/navIcon.svg"
            alt="Logo"
            style={{ width: "185px", height: "75px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <SlideButton icon="/images/HomeIcon.svg" text="Home" to="/home" isActive={isHomeActive} />
            <SlideButton icon="/images/Search.svg" text="Search" to="/search" isActive={isSearchActive} />
          </Nav>

          <Nav className="ms-auto">
            <SlideButton icon="/images/Profile.svg" text="Login" to="/login" isActive={isLoginActive} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
