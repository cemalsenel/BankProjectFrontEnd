import React from "react";
import { Col, Container, Nav, Row, Navbar } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const Header = () => {
  return (
    <div className="nav-container">
      <Container fluid className="nav-top-fluid">
        <Container className="nav-top">
          <Row>
            <Col className="d-none d-md-block">
              <TopNav />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="nav-middle">
        <Row>
          <Col>
            <Link to="/">
              <img className="nav-logo" src={logo} alt="logo" />
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <MidNav />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <NavBottom />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const TopNav = () => {
  const history = useHistory();

  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="advantage"
        onSelect={handleNavClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="advantage">Advantage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const MidNav = () => {
  return (
    <div>
      <Nav className="d-flex justify-content-end">
        <Nav.Item className="me-4">
          <Nav.Link bsPrefix="middle-navbar">
            <Link to="/login">
              <Icon
                name="user"
                circular
                size="large"
                className="d-block mb-2"
              ></Icon>
              Sıgn In
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link bsPrefix="middle-navbar">
            <Link to="/register">
              <Icon
                name="unlock alternate"
                circular
                size="large"
                className="d-block mb-2 ms-2"
              ></Icon>{" "}
              Register
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const NavBottom = () => {
  const history = useHistory();

  const [activeKey, setActiveKey] = useState("home");

  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
    setActiveKey(eventKey);
  };

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            activeKey={activeKey}
            onSelect={handleItemClick}
          >
            <Nav.Link className="nav-bottom-links" eventKey="home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-bottom-links" eventKey="about">
              About
            </Nav.Link>
            <Nav.Link className="nav-bottom-links" eventKey="package">
              Package
            </Nav.Link>
            <Nav.Link className="nav-bottom-links" eventKey="location">
              Location
            </Nav.Link>
            <Nav.Link className="nav-bottom-links" eventKey="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
