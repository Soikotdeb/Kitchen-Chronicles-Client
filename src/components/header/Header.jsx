import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./../../firebase/provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const imgStyle = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  return (
    <Navbar
      className="mt-2 mb-2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home"> Kitchen Chronicles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
            <Link
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              to="/blog"
              className={location.pathname === "/blog" ? "active-link" : ""}
            >
              Blog
            </Link>
          </Nav>
          <Nav>
            {user && (
              <Image
                className=""
                src={user.photoURL}
                title={user.displayName}
                alt=""
                style={imgStyle}
              />
            )}
            {user ? (
              <Link
                onClick={handleLogOut}
                className="fw-bold text-decoration-none d-flex align-items-center ms-5"
                style={{
                  height: "40px",
                  width: "120px",
                  backgroundColor: "#2196f3",
                  borderRadius: "5px",
                  padding: "0 40px",
                  color: "#fff",
                }}
              >
                LogOut
              </Link>
            ) : (
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                to="/login"
                className={location.pathname === "/login" ? "active-link" : ""}
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
