import React, { useEffect, useState } from "react";
import { useReservationStore } from "../store/useReservationStore";
import { Calendar, Users, Clock, AlertTriangle, CheckCircle } from "lucide-react";

export default function Service() {
  const {
    settings,
    isChecking,
    isSubmitting,
    fetchSettings,
    checkAvailability,
    createReservation,
  } = useReservationStore();

  const [formData, setFormData] = useState({
    guest_name: "",
    guest_email: "",
    guest_phone: "",
    guests_count: 2,
    reservation_date: "",
    reservation_time: "19:00",
    special_requests: "",
  });

  const [slotStatus, setSlotStatus] = useState<{
    checked: boolean;
    available: boolean;
    reason?: string;
  } | null>(null);

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // Check availability when date, time, or guest count changes
  useEffect(() => {
    if (!formData.reservation_date || !formData.reservation_time) {
      setSlotStatus(null);
      return;
    }

    const checkSlot = async () => {
      const dateTimeStr = `${formData.reservation_date}T${formData.reservation_time}:00`;
      const res = await checkAvailability(dateTimeStr, formData.guests_count);
      setSlotStatus({
        checked: true,
        available: res.available,
        reason: res.reason,
      });
    };

    const debounce = setTimeout(checkSlot, 600);
    return () => clearTimeout(debounce);
  }, [formData.reservation_date, formData.reservation_time, formData.guests_count, checkAvailability]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests_count" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!slotStatus?.available) {
      setErrorMessage("Please select an available time slot before submitting.");
      return;
    }

    try {
      const dateTimeStr = `${formData.reservation_date}T${formData.reservation_time}:00`;
      await createReservation({
        guest_name: formData.guest_name,
        guest_email: formData.guest_email,
        guest_phone: formData.guest_phone,
        guests_count: formData.guests_count,
        reservation_time: dateTimeStr,
        special_requests: formData.special_requests,
      });
      setBookingSuccess(true);
      setFormData({
        guest_name: "",
        guest_email: "",
        guest_phone: "",
        guests_count: 2,
        reservation_date: "",
        reservation_time: "19:00",
        special_requests: "",
      });
      setSlotStatus(null);
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || "Booking submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
          Gourmet Offerings
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-luxury-cream mb-4">
          Services & Reservations
        </h1>
        <p className="text-sm md:text-base text-luxury-cream/75 font-sans leading-relaxed">
          Indulge in tailored fine dining catering, private chef menus, or secure a premium slot at our flagship lounge.
        </p>
      </div>

      {/* Grid: Services list (Left) and Reservations Console (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Fine Dining Services */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-serif text-luxury-cream border-b border-luxury-gold/20 pb-3 mb-2">
            Fine Dining Services
          </h2>

          {[
            {
              title: "Exclusive Private Catering",
              desc: "From formal black-tie soirées to intimate garden dinners. We design bespoke multi-course menus prepared on-site by our gourmet culinary crew.",
            },
            {
              title: "Private Chef consultations",
              desc: "Schedule personalized dietary tailoring sessions. Our certified chefs craft weekly meal plans, nutrient profiles, and signature family tables.",
            },
            {
              title: "Sommelier & Harvest Tastings",
              desc: "Curated weekend evenings. Experience natural wine pairings, cold-pressed mocktail alignments, and raw micro-green infusions.",
            },
          ].map((service, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-lg border border-luxury-gold/10 hover:border-luxury-gold/20 transition-all">
              <h3 className="text-luxury-gold font-serif text-lg mb-2">{service.title}</h3>
              <p className="text-xs text-luxury-cream/70 leading-relaxed font-sans">{service.desc}</p>
            </div>
          ))}

          {/* Opening Hours Info */}
          <div className="glass-panel p-6 rounded-lg bg-luxury-emerald/5 border border-luxury-emerald/10 mt-2">
            <h4 className="text-luxury-cream font-serif text-sm uppercase tracking-wider mb-2">Lounge Schedule</h4>
            <p className="text-xs text-luxury-cream/75 leading-relaxed font-sans">
              {settings?.opening_hours || "Mon - Fri: 9:00 AM - 10:00 PM, Sat - Sun: 8:00 AM - 11:00 PM"}
            </p>
          </div>
        </div>

        {/* Reservations Console */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-lg border border-luxury-gold/15">
          <div className="flex items-center gap-2 mb-6 border-b border-luxury-gold/20 pb-4">
            <Calendar className="text-luxury-gold" size={22} />
            <h2 className="text-2xl font-serif text-luxury-cream">Table Reservation Console</h2>
          </div>

          {bookingSuccess ? (
            <div className="text-center py-12 animate-fade-in-up">
              <CheckCircle className="text-luxury-emerald-light mx-auto mb-4" size={56} />
              <h3 className="text-xl font-serif text-luxury-cream mb-2">Reservation Request Received</h3>
              <p className="text-sm text-luxury-cream/70 max-w-md mx-auto mb-6">
                Your request is pending verification. A concierge assistant will reach out to confirm your slot via email shortly.
              </p>
              <button
                onClick={() => setBookingSuccess(false)}
                className="bg-luxury-gold text-luxury-charcoal font-sans font-semibold px-6 py-2.5 rounded hover:bg-luxury-gold-light transition-all"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs flex items-center gap-2">
                  <AlertTriangle size={14} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Guest Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="guest_name"
                    value={formData.guest_name}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Lord Somerset"
                    className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    name="guest_phone"
                    value={formData.guest_phone}
                    onChange={handleChange}
                    required
                    placeholder="E.g., +91 98765 43210"
                    className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="guest_email"
                  value={formData.guest_email}
                  onChange={handleChange}
                  required
                  placeholder="E.g., somerset@gourmet.com"
                  className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                />
              </div>

              {/* Booking Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Guests Count
                  </label>
                  <div className="relative">
                    <select
                      name="guests_count"
                      value={formData.guests_count}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold appearance-none font-sans"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((c) => (
                        <option key={c} value={c}>
                          {c} {c === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                    <Users className="absolute right-3.5 top-3 text-luxury-gold pointer-events-none" size={14} />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    name="reservation_date"
                    value={formData.reservation_date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                    Select Time
                  </label>
                  <div className="relative">
                    <select
                      name="reservation_time"
                      value={formData.reservation_time}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold appearance-none font-sans"
                    >
                      {[
                        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <Clock className="absolute right-3.5 top-3 text-luxury-gold pointer-events-none" size={14} />
                  </div>
                </div>
              </div>

              {/* Dynamic Live Capacity check status */}
              {formData.reservation_date && (
                <div className="mt-1">
                  {isChecking ? (
                    <p className="text-xs text-luxury-gold animate-pulse">Checking slot capacity...</p>
                  ) : slotStatus?.checked ? (
                    slotStatus.available ? (
                      <div className="p-3 bg-luxury-emerald/10 border border-luxury-emerald/20 rounded text-luxury-emerald-light text-xs flex items-center gap-2">
                        <CheckCircle size={14} />
                        <span>Selected slot has sufficient seats available.</span>
                      </div>
                    ) : (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs flex items-center gap-2">
                        <AlertTriangle size={14} />
                        <span>{slotStatus.reason || "This slot is fully booked."}</span>
                      </div>
                    )
                  ) : null}
                </div>
              )}

              {/* Special Instructions */}
              <div>
                <label className="text-xs uppercase text-luxury-cream/60 tracking-wider block mb-1.5 font-medium">
                  Special requests & Dietary instructions
                </label>
                <textarea
                  name="special_requests"
                  value={formData.special_requests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g., Vegetarian table, birthday arrangement, wine pairing requests..."
                  className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || (slotStatus !== null && !slotStatus.available)}
                className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-glow text-luxury-charcoal font-sans font-bold tracking-wider py-3.5 rounded mt-2 shadow-glow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? "Submitting Request..." : "Request Table Reservation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
