import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import Spinner from "react-bootstrap/Spinner";
import api from "../api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // New state for error message

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous error message

    if (!name || !email || !password) {
      setError("All fields are required");
      console.error("Missing input data");
      return;
    }

    const formData = { name, email, password };

    try {
      const response = await api.post(`/users/register`, formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        console.error(
          "Server responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Error: User all ready exists. Please sign in.`); //${error.response.data.message}
      } else {
        console.error("Error setting up the request:", error.message);
        setError("An error occurred during registration. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <div className="register-form">
        <h2 className="text-center">Sign Up</h2>
        <form className="form-control" onSubmit={handleRegister}>
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input
              className="form-control p-2 mb-3"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              className="form-control p-2 mb-3"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password*
            </label>
            <input
              className="form-control p-2 mb-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-wrapper">
            <button
              className="btn btn-outline-secondary btn-sm"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Sign Up"}
            </button>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="fs-6 text-center text-muted">
          Already registered?
          <a className="fst-italic text-decoration-none" href="/login">
            &nbsp;Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
