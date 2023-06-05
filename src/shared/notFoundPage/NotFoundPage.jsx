import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <div className="image-container">
            <Image
              src="https://h2hconsulting.net/wp-content/uploads/2021/09/image-1.png"
              alt="Page not found"
              fluid
            />
            <div className="image-overlay">
              <p className="overlay-text">
                A 404 page is a web page that is displayed when a user tries to
                access a page that cannot be found on a website...
              </p>
            </div>
          </div>
          <h1 className="mt-3">Oops! Page not found</h1>
          <p className="mt-3">
            We're sorry, the page you requested could not be found.
          </p>
          <Link className="fw-bold text-decoration-none" to="/">
            Go Back Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
