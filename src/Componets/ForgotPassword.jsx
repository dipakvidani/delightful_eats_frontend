import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resetUrl, setResetUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");
    setResetUrl("");

    try {
      const { data } = await api.post("/auth/forgot-password", { email });
      setMessage(data.message);
      setResetUrl(data.resetUrl || "");
    } catch (err) {
      setError(err.response?.data?.message || "Could not create reset link");
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="auth-panel mx-auto">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Password Reset</h6>
            <h1 className="display-6">Create Reset Link</h1>
          </div>

          {message && <div className="alert alert-success">{message}</div>}
          {resetUrl && (
            <div className="alert alert-info">
              Development reset link: <Link to={new URL(resetUrl).pathname}>Open reset page</Link>
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              className="form-control bg-light border-0 px-4 mb-3"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              required
              style={{ height: "55px" }}
              type="email"
              value={email}
            />
            <button className="btn btn-secondary w-100 py-3" type="submit">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
