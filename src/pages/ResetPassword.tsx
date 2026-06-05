import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/client.js";
import { Lock, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

export default function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await api.post(`/auth/reset-password/${token}`, { password });
      setMessage(data.message);
      setPassword("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Password reset token has expired or is invalid.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 bg-luxury-charcoal">
      <div className="w-full max-w-md glass-panel p-8 rounded-lg border border-luxury-gold/15 shadow-luxury animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-[10px] block mb-2">
            Security Desk
          </span>
          <h2 className="text-3xl font-serif text-luxury-cream">Set New Password</h2>
          <p className="text-xs text-luxury-cream/60 mt-1 font-sans">
            Enter your new secure password below to update your account.
          </p>
        </div>

        {message && (
          <div className="p-4 bg-luxury-emerald/10 border border-luxury-emerald/20 rounded text-luxury-emerald-light text-xs flex flex-col gap-2.5 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="shrink-0" />
              <span>{message}</span>
            </div>
            <Link
              to="/login"
              className="inline-flex items-center gap-1 text-luxury-cream hover:text-luxury-gold font-semibold underline text-xs mt-1"
            >
              <span>Login now</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs flex items-center gap-2 mb-4 font-sans">
            <AlertTriangle size={14} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-[10px] uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-10 pr-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
              />
              <Lock className="absolute left-3.5 top-3 text-luxury-gold" size={14} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-glow text-luxury-charcoal font-sans font-bold tracking-wider py-3 rounded mt-2 hover:bg-luxury-gold-light transition-all disabled:opacity-40 cursor-pointer"
          >
            {isLoading ? "Updating Password..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
