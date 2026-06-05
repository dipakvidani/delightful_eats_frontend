import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCmsStore, Testimonial, Faq } from "../store/useCmsStore";
import { useCatalogStore, Product } from "../store/useCatalogStore";
import { Leaf, Award, ShieldCheck, HeartHandshake, ChevronDown, Star, ArrowRight } from "lucide-react";
import carousel1 from "../img/carousel-1.jpg";
import aboutImg from "../img/about.png";

export default function Home() {
  const { settings, testimonials, faqs, fetchSettings, fetchTestimonials, fetchFaqs } = useCmsStore();
  const { products, fetchProducts } = useCatalogStore();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    fetchSettings();
    fetchTestimonials();
    fetchFaqs();
    fetchProducts({ isFeatured: true, limit: 4 });
  }, [fetchSettings, fetchTestimonials, fetchFaqs, fetchProducts]);

  const heroTitle = settings?.hero?.title || "Exquisite Organic Gastronomy";
  const heroSubtitle = settings?.hero?.subtitle || "Crafted for Connoisseurs";
  const heroDesc = settings?.hero?.description || "Discover the elegant flavor profile of 100% certified organic ingredients harvested from our clean, sustainable micro-farms.";

  const aboutTagline = settings?.about?.tagline || "About Delightful Eats";
  const aboutTitle = settings?.about?.title || "We Cultivate Nature’s Finest Offerings";
  const aboutDesc = settings?.about?.description || "At Delightful Eats, we believe dining is a luxury experience. Every fruit, vegetable, and bakery slice is hand-selected and verified to meet premium organic standards, ensuring your home menu is clean, nutritious, and absolutely delicious.";

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={carousel1}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <span className="text-luxury-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            {heroSubtitle}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-luxury-cream mb-6 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-luxury-cream/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            {heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/Product"
              className="w-full sm:w-auto bg-luxury-gold text-luxury-charcoal px-8 py-3.5 rounded font-sans font-bold tracking-wider hover:bg-luxury-gold-light transition-all shadow-glow hover:shadow-glow-lg text-center"
            >
              Explore Menu
            </Link>
            <Link
              to="/Service"
              className="w-full sm:w-auto bg-transparent border border-luxury-cream/35 hover:border-luxury-gold text-luxury-cream hover:text-luxury-gold px-8 py-3.5 rounded font-sans font-semibold tracking-wider transition-all text-center"
            >
              Book Table
            </Link>
          </div>
        </div>
      </section>

      {/* 2. VALUE BADGES */}
      <section className="bg-luxury-dark py-12 border-y border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Leaf, title: "100% Organic", desc: "Chemical-free harvest" },
            { icon: Award, title: "Premium Grade", desc: "Hand-selected produce" },
            { icon: ShieldCheck, title: "Certified Safe", desc: "Rigorous testing protocols" },
            { icon: HeartHandshake, title: "Fair Trade", desc: "Supporting local growers" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2 group">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-3 group-hover:bg-luxury-gold group-hover:text-luxury-charcoal transition-all duration-300">
                <badge.icon size={22} />
              </div>
              <h4 className="text-luxury-cream font-medium text-sm md:text-base tracking-wide mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-luxury-cream/60">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-luxury-gold/20 to-luxury-emerald/20 rounded-lg blur-lg opacity-40"></div>
          <div className="relative border border-luxury-gold/20 rounded-lg overflow-hidden bg-luxury-dark">
            <img
              src={aboutImg}
              alt="About Organic Offerings"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-3">
            {aboutTagline}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-cream mb-6 leading-tight">
            {aboutTitle}
          </h2>
          <p className="text-luxury-cream/75 leading-relaxed font-sans mb-8">
            {aboutDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded border border-luxury-gold/10 bg-luxury-lightGray/40">
              <h4 className="text-luxury-gold font-serif font-medium mb-1">
                {settings?.about?.organic_title || "100% Certified Organic"}
              </h4>
              <p className="text-xs text-luxury-cream/60">
                {settings?.about?.organic_desc || "Strictly chemical-free cultivation, ensuring absolute nutritional purity."}
              </p>
            </div>
            <div className="p-4 rounded border border-luxury-gold/10 bg-luxury-lightGray/40">
              <h4 className="text-luxury-gold font-serif font-medium mb-1">
                {settings?.about?.award_title || "Award Winning Taste"}
              </h4>
              <p className="text-xs text-luxury-cream/60">
                {settings?.about?.award_desc || "Consistently recognized for delivering unmatched freshness and rich profiles."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED MENU */}
      <section className="bg-luxury-dark/60 border-y border-luxury-gold/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
                Curated Selection
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-luxury-cream">
                Signature Organic Specialties
              </h2>
            </div>
            <Link
              to="/Product"
              className="flex items-center gap-1.5 text-luxury-gold hover:text-luxury-gold-light mt-4 md:mt-0 font-semibold transition-colors"
            >
              <span>View Full Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product: Product) => (
                <div
                  key={product.id}
                  className="glass-panel hover:border-luxury-gold/30 rounded-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="h-56 relative overflow-hidden bg-luxury-lightGray">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-luxury-cream/35">
                        No Image
                      </div>
                    )}
                    {product.is_seasonal && (
                      <span className="absolute top-3 right-3 bg-luxury-emerald text-luxury-cream text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                        Seasonal
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-luxury-cream font-serif text-lg group-hover:text-luxury-gold transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-luxury-cream/60 line-clamp-2 mb-4 font-sans h-8">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-luxury-gold font-serif font-bold text-lg">
                        ${Number(product.price).toFixed(2)}
                      </span>
                      <span className="text-xs text-luxury-cream/50 bg-luxury-lightGray/70 px-2.5 py-1 rounded">
                        {product.stock > 0 ? `Stock: ${product.stock}` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-luxury-cream/50">
                Loading organic delights...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-cream">
            Voices of Gastronomy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((test: Testimonial) => (
              <div
                key={test.id}
                className="glass-panel p-8 rounded-lg border border-luxury-gold/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="#b89047" className="text-luxury-gold" />
                    ))}
                  </div>
                  <p className="text-luxury-cream/80 italic font-serif leading-relaxed mb-6">
                    "{test.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-luxury-gold/10 pt-4">
                  {test.avatar ? (
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border border-luxury-gold/30"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-luxury-lightGray border border-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold">
                      {test.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-luxury-cream font-medium text-sm tracking-wide">
                      {test.name}
                    </h4>
                    <p className="text-xs text-luxury-gold">
                      {test.role} {test.company ? `at ${test.company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-6 text-center text-luxury-cream/50">
              No recommendations available.
            </div>
          )}
        </div>
      </section>

      {/* 6. FAQS ACCORDION */}
      <section className="bg-luxury-dark/40 py-24 border-t border-luxury-gold/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-luxury-cream">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.length > 0 ? (
              faqs.map((faq: Faq, idx: number) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.id}
                    className="border border-luxury-gold/15 bg-luxury-lightGray/35 rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-luxury-cream hover:text-luxury-gold transition-colors font-serif text-lg focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-luxury-gold transition-transform duration-300 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-60 border-t border-luxury-gold/10" : "max-h-0"
                      }`}
                    >
                      <p className="p-5 text-sm text-luxury-cream/70 leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-6 text-center text-luxury-cream/50">
                No questions found.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
