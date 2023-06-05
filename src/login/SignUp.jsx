import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!password.match(/[A-Z]/)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!password.match(/[0-9]/)) {
      setError("Password must contain at least one number");
      return;
    }

    // empty email and password validation
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User created successfully!");
        setError("");

        // Update user's profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("User profile updated successfully!");
          })
          .catch((error) => {
            console.log(error);
          });

        // Clear the form
        form.name.value = "";
        form.email.value = "";
        form.photo.value = "";
        form.password.value = "";
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
        <h1>Create an Account</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fw-bold">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailOrUsername" className="form-label fw-bold">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="emailOrUsername"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label fw-bold">
              Photo URL
            </label>
            <input
              type="text"
              className="form-control"
              id="photo"
              name="photo"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bold text-decoration-none">
              Already have an account?
              <Link to="/login" className="mx-2 text-warning">
                Login
              </Link>
            </span>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button type="submit" className="btn btn-primary fw-bold">
              Create an account
            </button>
            <br />
          </div>
          <div>
            <p className=" btn-outline-primary me-2 fw-bold">
              {" "}
              <p className="text-danger">
                <small>{error}</small>
              </p>
            </p>
            <p className=" btn-outline-primary fw-bold">
              <p className="text-danger ms-4">
                <small>{success}</small>
              </p>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
