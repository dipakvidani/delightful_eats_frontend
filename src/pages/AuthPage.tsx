import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, Lock, User, AlertTriangle, ArrowRight } from "lucide-react";

interface AuthPageProps {
  mode: "login" | "register";
}

export default function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const { login, register, isLoading } = useAuthStore();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isRegister && !form.name.trim()) {
      setError("Please specify your full name.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      if (isRegister) {
        await register(form);
      } else {
        await login({ email: form.email, password: form.password });
      }
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Authentication failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 bg-luxury-charcoal">
      <div className="w-full max-w-md glass-panel p-8 rounded-lg border border-luxury-gold/15 shadow-luxury animate-fade-in-up">
        {/* Branding header */}
        <div className="text-center mb-8">
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-[10px] block mb-2">
            Delightful Eats Portal
          </span>
          <h2 className="text-3xl font-serif text-luxury-cream">
            {isRegister ? "Create Credentials" : "Royal Access Desk"}
          </h2>
          <p className="text-xs text-luxury-cream/60 mt-1 font-sans">
            {isRegister ? "Sign up to track gourmet orders and bookings" : "Enter email and password to log in"}
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs flex items-center gap-2 mb-6 font-sans">
            <AlertTriangle size={14} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name for Registration */}
          {isRegister && (
            <div>
              <label className="text-[10px] uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Lord Somerset"
                  className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-10 pr-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                />
                <User className="absolute left-3.5 top-3 text-luxury-gold" size={14} />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="text-[10px] uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="somerset@gourmet.com"
                className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-10 pr-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
              />
              <Mail className="absolute left-3.5 top-3 text-luxury-gold" size={14} />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] uppercase text-luxury-cream/60 tracking-wider font-medium">
                Secret Password
              </label>
              {!isRegister && (
                <Link to="/forgot-password" className="text-[10px] text-luxury-gold hover:underline font-sans">
                  Forgot?
                </Link>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-10 pr-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
              />
              <Lock className="absolute left-3.5 top-3 text-luxury-gold" size={14} />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-glow text-luxury-charcoal font-sans font-bold tracking-wider py-3 rounded mt-2 hover:bg-luxury-gold-light transition-all disabled:opacity-40 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>{isLoading ? "Validating Session..." : isRegister ? "Sign Up" : "Log In"}</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Footer switches */}
        <div className="text-center mt-6 text-xs text-luxury-cream/50 font-sans border-t border-luxury-gold/10 pt-4">
          {isRegister ? (
            <span>
              Already possess credentials?{" "}
              <Link to="/login" className="text-luxury-gold hover:underline font-semibold ml-1">
                Log In
              </Link>
            </span>
          ) : (
            <span>
              New client?{" "}
              <Link to="/register" className="text-luxury-gold hover:underline font-semibold ml-1">
                Register Account
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
