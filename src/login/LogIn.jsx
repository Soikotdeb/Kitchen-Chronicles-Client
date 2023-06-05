import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGoogle, FaSadCry, FaSmile } from "react-icons/fa";
import { AuthContext } from "../firebase/provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setSuccess("Login successful!");
        setError("");
        form.reset(); // Clear the form
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          setError("Incorrect password");
        } else if (error.code === "auth/user-not-found") {
          setError("User's Email Address Or Password Doesn't Match");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
    setSuccess("");
  };
  // google Authentication and LogOut

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //github authentication and logOut
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          border: "2px solid #ccc",
          backgroundColor: "#f7f7f7",
          width: "50%",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 className="fw-bold" style={{ textDecoration: "none" }}>
          Login
        </h1>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold"> Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" required />
          </Form.Group>

          <div className="d-flex justify-content-center mb-4">
            <button type="submit" className="btn btn-primary fw-bold">
              Login
            </button>
            {error && (
              <p className="text-danger fw-bold ms-5">
                {error} <FaSadCry></FaSadCry>
              </p>
            )}
            {success && (
              <div className="success fw-bold d-flex px-4">
                {success}{" "}
                <p className="text-danger ms-2">
                  <FaSmile />
                </p>
              </div>
            )}
            <br />
          </div>
        </Form>
        <div className="d-flex align-items-center my-3">
          <span className="fw-bold text-decoration-none">
            Dont have an account?
            <Link to="/signup" className="mx-2 text-warning">
              Create an account
            </Link>{" "}
          </span>
          <Link
            to=""
            className="mx-2 fw-bold"
            style={{ textDecoration: "none" }}
          >
            Forgot password?
          </Link>
        </div>
        <div className="d-flex justify-content-between">
          {user ? (
            <Button
              onClick={handleGithubSignOut}
              variant="outline-danger"
              className="btn btn-block fw-bold mx-2"
            >
              signOut
            </Button>
          ) : (
            <Button
              onClick={handleGithubLogIn}
              variant="outline-primary"
              className="btn btn-block fw-bold mx-2"
            >
              <FaGithub /> GitHub SignIn
            </Button>
          )}

          {user ? (
            <Button
              onClick={handleSignOut}
              variant="outline-danger"
              className="btn btn-block fw-bold mx-2"
            >
              signOut
            </Button>
          ) : (
            <Button
              onClick={handleGoogleSignIn}
              variant="outline-danger"
              className="btn btn-block fw-bold mx-2"
            >
              <FaGoogle /> Google SignIn
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
