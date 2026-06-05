import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthPage = ({ mode }) => {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        await register(form);
      } else {
        await login({ email: form.email, password: form.password });
      }

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="auth-panel mx-auto">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">{isRegister ? "Register" : "Login"}</h6>
            <h1 className="display-6">{isRegister ? "Create Your Account" : "Welcome Back"}</h1>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="mb-3">
                <input
                  className="form-control bg-light border-0 px-4"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{ height: "55px" }}
                  value={form.name}
                />
              </div>
            )}
            <div className="mb-3">
              <input
                className="form-control bg-light border-0 px-4"
                name="email"
                onChange={handleChange}
                placeholder="Your Email"
                required
                style={{ height: "55px" }}
                type="email"
                value={form.email}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control bg-light border-0 px-4"
                minLength="6"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
                style={{ height: "55px" }}
                type="password"
                value={form.password}
              />
            </div>
            <button className="btn btn-secondary w-100 py-3" disabled={loading} type="submit">
              {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            {isRegister ? (
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            ) : (
              <>
                <div>
                  New here? <Link to="/register">Register</Link>
                </div>
                <Link to="/forgot-password">Forgot password?</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
