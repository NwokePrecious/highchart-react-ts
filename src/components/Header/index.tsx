import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => (
  <Navbar expand="lg" bg="primary" variant="dark">
    <Container fluid>
      <NavLink to="/view" className="navbar-brand">
        High Chart
      </NavLink>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav>
          <NavLink className="nav-link active" to="/view">
            View Mode
          </NavLink>
          <NavLink className="nav-link active" to="/settings">
            Settings
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
