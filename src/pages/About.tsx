import aboutImg from "../img/about.png";
import team1 from "../img/team-1.png";
import team2 from "../img/team-2.png";
import team3 from "../img/team-3.png";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
        <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
          Our Heritage
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-luxury-cream mb-4">
          Culinary Purists
        </h1>
        <p className="text-sm md:text-base text-luxury-cream/75 font-sans leading-relaxed">
          Delightful Eats blends gourmet dining with sustainable, non-GMO farming protocols. We cultivate flavor and protect ecosystems.
        </p>
      </div>

      {/* Grid: Story (Left) and Image (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-luxury-gold/20 to-luxury-emerald/20 rounded-lg blur-lg opacity-40"></div>
          <div className="relative border border-luxury-gold/20 rounded-lg overflow-hidden bg-luxury-dark">
            <img src={aboutImg} alt="Harvest story" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div>
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.15em] text-xs block mb-3">
            Manifesto
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-cream mb-6">
            Grown with Grace, Served with Style
          </h2>
          <p className="text-sm text-luxury-cream/75 leading-relaxed font-sans mb-6">
            Founded in 2018, Delightful Eats set out to elevate organic eating from a health trend to an exquisite fine-dining standard. We manage local greenhouse ecosystems using organic soil conditioning and chemical-free rain harvesting.
          </p>
          <p className="text-sm text-luxury-cream/75 leading-relaxed font-sans mb-6">
            Every culinary selection on our menu, from raw fresh micro-veggies to gourmet dining items, is crafted by skilled sommeliers and chefs dedicated to presenting plates that stimulate both health and gourmet appreciation.
          </p>

          <div className="border-l-2 border-luxury-gold pl-4 italic text-sm text-luxury-cream/80 mb-6 font-serif">
            "We do not feed bodies; we align souls with Earth's purest seasonal cycles."
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-cream">
            Our Culinary Council
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Chef Alessandro Rossi", role: "Executive Culinary Artist", img: team1 },
            { name: "Serena Somerset", role: "Head of Agronomy & Greenhouses", img: team2 },
            { name: "David Chen", role: "Sommelier & Mixologist", img: team3 },
          ].map((member, idx) => (
            <div key={idx} className="glass-panel hover:border-luxury-gold/30 rounded-lg overflow-hidden group transition-all duration-300">
              <div className="h-80 overflow-hidden bg-luxury-lightGray relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-luxury-cream font-serif text-lg group-hover:text-luxury-gold transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-luxury-gold uppercase tracking-wider font-sans">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
