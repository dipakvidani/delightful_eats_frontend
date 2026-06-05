import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client.js";
import { Mail, CheckCircle, AlertTriangle, HelpCircle, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resetUrl, setResetUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setResetUrl("");
    setIsLoading(true);

    try {
      const { data } = await api.post("/auth/forgot-password", { email });
      setMessage(data.message);
      setResetUrl(data.resetUrl || "");
    } catch (err: any) {
      setError(err.response?.data?.message || "Could not generate recovery link.");
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
          <h2 className="text-3xl font-serif text-luxury-cream">Recover Credentials</h2>
          <p className="text-xs text-luxury-cream/60 mt-1 font-sans">
            Enter your registered email address to receive password reset instructions.
          </p>
        </div>

        {message && (
          <div className="p-4 bg-luxury-emerald/10 border border-luxury-emerald/20 rounded text-luxury-emerald-light text-xs flex items-center gap-2 mb-4">
            <CheckCircle size={16} className="shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {resetUrl && (
          <div className="p-4 bg-luxury-gold/10 border border-luxury-gold/25 rounded text-luxury-gold text-xs flex flex-col gap-2 mb-4 font-sans">
            <div className="flex items-center gap-2">
              <HelpCircle size={15} />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Dev Recovery link:</span>
            </div>
            <Link
              to={new URL(resetUrl).pathname + new URL(resetUrl).search}
              className="underline text-luxury-cream hover:text-luxury-gold transition-colors font-mono break-all"
            >
              Click here to simulate resetting password
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
              Registered Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="somerset@gourmet.com"
                className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-10 pr-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
              />
              <Mail className="absolute left-3.5 top-3 text-luxury-gold" size={14} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-glow text-luxury-charcoal font-sans font-bold tracking-wider py-3 rounded mt-2 hover:bg-luxury-gold-light transition-all disabled:opacity-40 cursor-pointer"
          >
            {isLoading ? "Generating Link..." : "Request Reset Link"}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-luxury-cream/50 font-sans border-t border-luxury-gold/10 pt-4">
          <Link to="/login" className="flex items-center justify-center gap-1 text-luxury-gold hover:underline">
            <ArrowLeft size={12} />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
