import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-gold/15 text-luxury-cream/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About / Contact Info */}
        <div>
          <h3 className="text-luxury-cream text-lg font-serif tracking-wider mb-6 pb-2 border-b border-luxury-gold/20">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-4 text-sm font-sans">
            <div className="flex gap-3">
              <MapPin className="text-luxury-gold shrink-0" size={18} />
              <p>102 Royal Boulevard, Diamond District, Mumbai, India</p>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="text-luxury-gold shrink-0" size={16} />
              <a href="mailto:concierge@delightfuleats.com" className="hover:text-luxury-gold transition-colors">
                concierge@delightfuleats.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="text-luxury-gold shrink-0" size={16} />
              <a href="tel:+912298765432" className="hover:text-luxury-gold transition-colors">
                +91 22 9876 5432
              </a>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all">
              <i className="fab fa-facebook-f text-xs"></i>
            </a>
            <a href="https://twitter.com" className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all">
              <i className="fab fa-twitter text-xs"></i>
            </a>
            <a href="https://instagram.com" className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all">
              <i className="fab fa-instagram text-xs"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-luxury-cream text-lg font-serif tracking-wider mb-6 pb-2 border-b border-luxury-gold/20">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-sans">
            {[
              { name: "Home", path: "/" },
              { name: "Organic Catalog", path: "/Product" },
              { name: "Gourmet Services", path: "/Service" },
              { name: "About Us", path: "/About" },
              { name: "Gourmet Blog", path: "/BlogDetail" },
              { name: "Contact", path: "/Contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
                  <ChevronRight size={14} className="text-luxury-gold" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience links */}
        <div>
          <h3 className="text-luxury-cream text-lg font-serif tracking-wider mb-6 pb-2 border-b border-luxury-gold/20">
            Our Offerings
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-sans">
            {[
              { name: "Organic Vegetables", path: "/Product" },
              { name: "Fresh Fruit Boxes", path: "/Product" },
              { name: "Healthy Combo Packages", path: "/Product" },
              { name: "Luxury Reservation Table", path: "/Service" },
              { name: "Chef Table Consultations", path: "/Service" },
              { name: "Fine Dining Catering", path: "/Service" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
                  <ChevronRight size={14} className="text-luxury-gold" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <div className="bg-luxury-lightGray/60 border border-luxury-gold/15 p-6 rounded-lg shadow-luxury text-center">
            <h4 className="text-luxury-cream font-serif text-lg mb-2">Newsletter</h4>
            <p className="text-xs text-luxury-cream/65 mb-4">
              Subscribe for gourmet menu updates and organic lifestyle insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Enter your luxury email"
                className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-2.5 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-luxury-gold text-luxury-charcoal text-sm font-semibold tracking-wide py-2.5 rounded hover:bg-luxury-gold-light transition-all active:scale-[0.98]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-luxury-gold/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
        <p>© {new Date().getFullYear()} Delightful Eats. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
