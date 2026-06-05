import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/client";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      const { data } = await api.post(`/auth/reset-password/${token}`, { password });
      setMessage(data.message);
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Could not reset password");
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="auth-panel mx-auto">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Password Reset</h6>
            <h1 className="display-6">Set New Password</h1>
          </div>

          {message && (
            <div className="alert alert-success">
              {message} <Link to="/login">Login now</Link>
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              className="form-control bg-light border-0 px-4 mb-3"
              minLength="6"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="New Password"
              required
              style={{ height: "55px" }}
              type="password"
              value={password}
            />
            <button className="btn btn-secondary w-100 py-3" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
