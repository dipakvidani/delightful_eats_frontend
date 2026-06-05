import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { Phone, LogOut, Menu, X, User as UserIcon, Calendar } from "lucide-react";
import Logo from "../../img/Logo.png";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Organic Catalog", path: "/Product" },
    { name: "Gourmet Service", path: "/Service" },
    { name: "Gourmet Blog", path: "/BlogDetail" },
    { name: "About Us", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* Top Bar for Desktop */}
      <div className="hidden lg:block bg-luxury-charcoal/95 border-b border-luxury-gold/20 py-3 px-8 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-luxury-cream/80 hover:text-luxury-gold transition-colors">
            <Phone size={14} className="text-luxury-gold" />
            <span className="font-medium font-sans">+91 22 9876 5432</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-luxury-gold/10 px-6 py-4 lg:py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Delightful Eats" className="h-16 lg:h-20 w-auto object-contain transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-luxury-cream/80 hover:text-luxury-gold font-sans font-medium tracking-wide text-[15px] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-luxury-gold after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* User Session and Booking Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-luxury-lightGray border border-luxury-gold/25">
                  <UserIcon size={14} className="text-luxury-gold" />
                  <span className="text-sm font-medium text-luxury-cream">
                    {user?.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-luxury-gold/20 text-luxury-gold px-1.5 py-0.5 rounded font-bold">
                    {user?.role?.replace("_", " ")}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-sm text-luxury-cream/70 hover:text-luxury-gold transition-colors cursor-pointer"
                >
                  <LogOut size={15} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-luxury-cream/80 hover:text-luxury-gold transition-colors">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium px-4 py-2 rounded border border-luxury-gold/40 hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Direct Booking CTA */}
            <Link
              to="/Service"
              className="flex items-center gap-2 bg-gradient-to-r from-luxury-gold to-luxury-gold-glow text-luxury-charcoal font-sans font-semibold tracking-wide text-sm px-5 py-2.5 rounded shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar size={15} />
              <span>Book Table</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link
              to="/Service"
              className="p-2 rounded bg-luxury-gold text-luxury-charcoal shadow-glow"
              title="Book a Table"
            >
              <Calendar size={16} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-luxury-cream hover:text-luxury-gold p-1"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-luxury-charcoal/95 border-b border-luxury-gold/20 py-6 px-6 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-luxury-cream/90 hover:text-luxury-gold font-sans font-medium text-lg tracking-wide py-1 border-b border-luxury-gold/5"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-luxury-gold/20 mt-2 flex flex-col gap-4">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <UserIcon size={16} className="text-luxury-gold" />
                        <span className="text-sm font-medium">{user?.name}</span>
                      </div>
                      <span className="text-[10px] uppercase bg-luxury-gold/20 text-luxury-gold px-2 py-0.5 rounded font-bold">
                        {user?.role?.replace("_", " ")}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center justify-center gap-2 py-2.5 rounded bg-luxury-lightGray text-luxury-cream border border-luxury-gold/20"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-center items-center py-2.5 rounded bg-luxury-lightGray border border-luxury-gold/20 text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-center items-center py-2.5 rounded bg-luxury-gold text-luxury-charcoal text-sm font-medium font-semibold"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
