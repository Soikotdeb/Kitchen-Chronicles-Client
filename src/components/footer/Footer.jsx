import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Form, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="mt-5">
        <Row>
          <Col md={4} className="py-3">
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Online Ordering
                </Link>
              </li>
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Menu Customization
                </Link>
              </li>
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Catering
                </Link>
              </li>
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Private Events
                </Link>
              </li>
              <li>
                <Link className="fw-bold text-decoration-none text-light" to="">
                  Cooking Classes
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="py-3">
            <h5 className="mb-3">Contact Us</h5>
            <p>123 Main St</p>
            <p>Anytown, USA</p>
            <p>1-800-123-4567</p>
            <p>SdSoikot424@gmail.com</p>
          </Col>
          <Col md={4} className="py-3">
            <h5 className="mb-3">Connect With Us</h5>
            <Navbar expand="sm" variant="dark">
              <Navbar.Toggle aria-controls="footer-nav" />
              <Navbar.Collapse id="footer-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className="ml-auto">
                  <Nav.Link to="" className="mr-3">
                    <FaFacebook />
                  </Nav.Link>
                  <Nav.Link to="" className="mr-3">
                    <FaTwitter />
                  </Nav.Link>
                  <Nav.Link to="" className="mr-3">
                    <FaInstagram />
                  </Nav.Link>
                  <Nav.Link to="" className="mr-3">
                    <FaYoutube />
                  </Nav.Link>
                  <Nav.Link to="" className="mr-3">
                    <FaLinkedin />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Form className="d-flex" inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-info"> Kitchen Chronicles</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
