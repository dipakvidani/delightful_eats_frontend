import { useState } from "react";
import blog1 from "../img/blog-1.png";
import blog2 from "../img/blog-2.png";
import blog3 from "../img/blog-3.png";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export default function BlogDetail() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "The Alchemy of Organic Soil and Rich Nutrients",
      excerpt: "Uncover how our greenhouse specialists balance trace minerals and compost mixtures to intensify the natural flavor profiles of heritage tomatoes.",
      content: `Sustainable agronomy is as much of an art form as the dining plate itself. In our flagship Bhavnagar greenhouse structures, our team relies on non-chemical organic compost formulas mixed with volcanic rock mineral blends to ensure tomato vines receive optimal nitrogen absorption.

This mineral-rich soil foundation directly influences the sugar-to-acid ratio of our produce. When harvested, the heritage tomatoes express a deep, savory sweetness and rich crispness that cannot be duplicated using commercial synthetic fertilizers.

In this guide, we break down the three fundamental pillars of micro-nutrient balancing that we practice across all local greenhouse facilities:
1. Pure rainwater harvesting and dynamic pH tracking.
2. Nutrient rotation via organic legume beds.
3. Volcanic mineral infusion for robust vine health.`,
      author: "Serena Somerset",
      date: "May 28, 2026",
      readTime: "5 min read",
      image: blog1,
      category: "Agronomy"
    },
    {
      id: 2,
      title: "Mastering the Art of Cold-Pressed Infusions",
      excerpt: "Learn the scientific processes of preserving raw fruit enzymes and vitamins during cold extraction to design luxury wellness mocktails.",
      content: `Unlike thermal pasteurization, cold extraction processes prevent heat degradation of volatile health enzymes. In this deep-dive article, David Chen explains how to align organic ginger root, fresh lemon extracts, and raw wild honey at precise temperatures.

The extraction utilizes custom dual-stage gear presses that isolate cell walls without heating the extracts, guaranteeing that every glass remains rich in Vitamin C, minerals, and flavor compounds.

We recommend layering:
- 60% Raw organic apple extract base.
- 25% Fresh leafy green infusion (Kale, Spinach).
- 15% Zesty ginger and turmeric root pulp.`,
      author: "David Chen",
      date: "June 02, 2026",
      readTime: "4 min read",
      image: blog2,
      category: "Mixology"
    },
    {
      id: 3,
      title: "Gourmet Table Settings: Designing the Fine Dining Experience",
      excerpt: "Explore the visual aesthetics, spacing rules, and material choices that transform an ordinary home meal into a Michelin-starred dining affair.",
      content: `Aesthetics are the first taste of any meal. Designing a visual atmosphere that honors the ingredients requires meticulous spatial alignment. Chef Alessandro Rossi provides rules for plating, lighting, and ambient styling.

From selecting lead-free crystal glassware that refracts soft warm lighting, to placing gold cutlery alongside natural linen cloths, every detail prepares the senses for culinary delight.

Key elements include:
- Minimalist plating leaving 40% empty border space.
- Warm, indirect amber lighting.
- Fresh botanical accents (seasonal leaves or herbs).`,
      author: "Alessandro Rossi",
      date: "June 04, 2026",
      readTime: "6 min read",
      image: blog3,
      category: "Gastronomy"
    }
  ];

  const [selectedPost, setSelectedPost] = useState<BlogPost>(posts[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
        <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
          Culinary Insights
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-luxury-cream mb-4">
          The Gourmet Blog
        </h1>
        <p className="text-sm md:text-base text-luxury-cream/75 font-sans leading-relaxed">
          Scientific harvest methods, cold-extraction formulas, and visual plating guides direct from our culinary masters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Post Detail (Left) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="glass-panel p-6 md:p-8 rounded-lg border border-luxury-gold/15">
            <div className="h-[400px] rounded overflow-hidden bg-luxury-lightGray mb-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-4 items-center text-xs text-luxury-gold font-sans uppercase tracking-wider mb-4">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-serif text-luxury-cream mb-6 leading-snug">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-3 border-y border-luxury-gold/10 py-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-luxury-gold text-luxury-charcoal flex items-center justify-center font-bold">
                {selectedPost.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-luxury-cream">{selectedPost.author}</p>
                <p className="text-xs text-luxury-cream/50">Culinary Specialist</p>
              </div>
            </div>

            <p className="text-base text-luxury-cream/85 font-sans leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </p>
          </div>
        </div>

        {/* Sidebar Posts (Right) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <h3 className="text-xl font-serif text-luxury-cream border-b border-luxury-gold/20 pb-2 mb-2">
            Recent Publications
          </h3>

          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`w-full text-left glass-panel p-5 rounded-lg border transition-all duration-300 ${
                selectedPost.id === post.id
                  ? "border-luxury-gold bg-luxury-gold/5 shadow-glow"
                  : "border-luxury-gold/10 hover:border-luxury-gold/25"
              }`}
            >
              <span className="text-[10px] text-luxury-gold uppercase tracking-wider block mb-2">
                {post.category}
              </span>
              <h4 className="text-luxury-cream font-serif text-base mb-2 group-hover:text-luxury-gold line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-luxury-cream/60 line-clamp-2 font-sans mb-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-[10px] text-luxury-cream/40 font-sans">
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
