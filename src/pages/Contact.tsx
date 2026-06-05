import React, { useState } from "react";
import { useCmsStore } from "../store/useCmsStore";
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle } from "lucide-react";

export default function Contact() {
  const { settings, submitContactForm } = useCmsStore();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setIsSending(true);

    try {
      await submitContactForm(form);
      setStatus("Thank you! Your message has been received.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to deliver message. Please check your credentials.");
    } finally {
      setIsSending(false);
    }
  };

  const contactAddress = settings?.contact?.address || "102 Royal Boulevard, Diamond District, Mumbai, India";
  const contactPhone = settings?.contact?.phone || "+91 22 9876 5432";
  const contactEmail = settings?.contact?.email || "concierge@delightfuleats.com";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
          Concierge Services
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-luxury-cream mb-4">
          Contact Delightful Eats
        </h1>
        <p className="text-sm md:text-base text-luxury-cream/75 font-sans leading-relaxed">
          Have an inquiry regarding private catering, custom subscriptions, or event planning? Drop us a note, and our desk will respond within 12 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Form Column */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-lg border border-luxury-gold/10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-serif text-luxury-cream mb-6 border-b border-luxury-gold/10 pb-3">
              Send Concierge Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {status && (
                <div className="p-4 bg-luxury-emerald/10 border border-luxury-emerald/20 rounded text-luxury-emerald-light text-sm flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>{status}</span>
                </div>
              )}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs flex items-center gap-2 mb-6 font-sans">
                  <AlertTriangle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter name"
                    className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                    className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                  Detailed Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Explain your gourmet requirements..."
                  className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-3 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="flex items-center justify-center gap-2 bg-luxury-gold text-luxury-charcoal font-sans font-bold tracking-wider py-3.5 rounded mt-2 hover:bg-luxury-gold-light transition-all disabled:opacity-40 cursor-pointer"
              >
                <Send size={15} />
                <span>{isSending ? "Delivering Message..." : "Send Secure Message"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-lg bg-luxury-dark border border-luxury-gold/15 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-serif text-luxury-cream mb-6 border-b border-luxury-gold/10 pb-3">
              Executive Offices
            </h2>

            <div className="flex flex-col gap-8 mt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-luxury-cream font-serif font-medium text-base mb-1">Our Address</h4>
                  <p className="text-xs text-luxury-cream/70 leading-relaxed font-sans">{contactAddress}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-luxury-cream font-serif font-medium text-base mb-1">Email Inquiry</h4>
                  <a href={`mailto:${contactEmail}`} className="text-xs text-luxury-gold hover:underline font-sans">
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-luxury-cream font-serif font-medium text-base mb-1">Call Support</h4>
                  <a href={`tel:${contactPhone.replace(/\s+/g, "")}`} className="text-xs text-luxury-gold hover:underline font-sans">
                    {contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-luxury-gold/10 pt-6">
            <h4 className="text-luxury-cream font-serif text-sm uppercase tracking-wider mb-2">Concierge Hours</h4>
            <p className="text-xs text-luxury-cream/60 leading-relaxed">
              Available Monday to Sunday from 8:00 AM to 11:00 PM IST. Special event inquiries handled 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
