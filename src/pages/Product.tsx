import React, { useEffect, useState } from "react";
import { useCatalogStore, Product, Category, ProductVariant } from "../store/useCatalogStore";
import { Search, Sparkles, Filter, Leaf } from "lucide-react";

export default function ProductCatalog() {
  const {
    categories,
    products,
    isLoading,
    fetchCategories,
    fetchProducts,
  } = useCatalogStore();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("DESC");

  // Selected variant per product ID
  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>({});

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchProducts({
      categoryId: selectedCategory || undefined,
      search: searchQuery || undefined,
      sortBy,
      sortOrder,
    });
  }, [selectedCategory, searchQuery, sortBy, sortOrder, fetchProducts]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "price_asc") {
      setSortBy("price");
      setSortOrder("ASC");
    } else if (val === "price_desc") {
      setSortBy("price");
      setSortOrder("DESC");
    } else if (val === "name_asc") {
      setSortBy("name");
      setSortOrder("ASC");
    } else {
      setSortBy("created_at");
      setSortOrder("DESC");
    }
  };

  const selectVariantForProduct = (productId: number, variantId: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantId,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-luxury-gold font-sans font-medium uppercase tracking-[0.2em] text-xs block mb-2">
          Gourmet Shop
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-luxury-cream mb-4">
          Organic Harvest Catalog
        </h1>
        <p className="text-sm md:text-base text-luxury-cream/75 font-sans leading-relaxed">
          Sourced daily from our private pesticide-free gardens. Delivered straight to your table in temperature-controlled boxes.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="glass-panel p-6 rounded-lg mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full lg:w-96">
          <input
            type="text"
            placeholder="Search organic produce..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-luxury-charcoal text-luxury-cream text-sm pl-11 pr-4 py-3 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold transition-colors font-sans"
          />
          <Search className="absolute left-4 top-3.5 text-luxury-gold" size={16} />
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-xs uppercase tracking-wider rounded font-semibold transition-all ${
              selectedCategory === null
                ? "bg-luxury-gold text-luxury-charcoal shadow-glow"
                : "bg-luxury-lightGray/60 text-luxury-cream/80 hover:text-luxury-gold border border-luxury-gold/10"
            }`}
          >
            All Items
          </button>
          {categories.map((cat: Category) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-luxury-gold text-luxury-charcoal shadow-glow"
                  : "bg-luxury-lightGray/60 text-luxury-cream/80 hover:text-luxury-gold border border-luxury-gold/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="relative w-full lg:w-48">
          <select
            onChange={handleSortChange}
            className="w-full bg-luxury-charcoal text-luxury-cream text-sm px-4 py-3 rounded border border-luxury-gold/20 focus:outline-none focus:border-luxury-gold appearance-none font-sans"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
          </select>
          <Filter className="absolute right-4 top-3.5 text-luxury-gold pointer-events-none" size={14} />
        </div>
      </div>

      {/* Catalog Grid */}
      {isLoading ? (
        <div className="py-24 text-center">
          <div className="animate-pulse flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-luxury-gold border-t-transparent animate-spin"></div>
            <p className="text-luxury-gold font-medium font-serif text-lg">Retrieving Fresh Harvest...</p>
          </div>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: Product) => {
            // Find selected variant adjusting price
            const activeVariantId = selectedVariants[product.id];
            const activeVariant = product.variants?.find((v: ProductVariant) => v.id === activeVariantId);
            const priceAdjustment = activeVariant ? Number(activeVariant.price_adjustment) : 0;
            const finalPrice = Number(product.price) + priceAdjustment;
            const activeStock = activeVariant ? activeVariant.stock : product.stock;

            return (
              <div
                key={product.id}
                className="glass-panel hover:border-luxury-gold/30 rounded-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="h-60 relative overflow-hidden bg-luxury-lightGray">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-luxury-cream/35">
                      No Image Available
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.is_featured && (
                      <span className="bg-luxury-gold text-luxury-charcoal text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold flex items-center gap-1">
                        <Sparkles size={8} />
                        <span>Signature</span>
                      </span>
                    )}
                    {product.is_seasonal && (
                      <span className="bg-luxury-emerald text-luxury-cream text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold flex items-center gap-1">
                        <Leaf size={8} />
                        <span>Seasonal</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    {product.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {product.tags.split(",").map((tag: string) => (
                          <span key={tag} className="text-[10px] text-luxury-gold bg-luxury-gold/10 px-2 py-0.5 rounded uppercase tracking-wider">
                            #{tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-luxury-cream font-serif text-xl group-hover:text-luxury-gold transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-luxury-cream/65 line-clamp-3 mb-4 font-sans leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    {/* Variants selector */}
                    {product.variants && product.variants.length > 0 && (
                      <div className="mb-4">
                        <span className="text-[10px] uppercase text-luxury-cream/50 tracking-wider block mb-1.5">
                          Select Variant
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.variants.map((v: ProductVariant) => (
                            <button
                              key={v.id}
                              onClick={() => selectVariantForProduct(product.id, v.id)}
                              className={`px-2.5 py-1 text-[11px] font-sans rounded transition-all border ${
                                activeVariantId === v.id || (!activeVariantId && v.name === "Standard Pack")
                                  ? "bg-luxury-gold/15 border-luxury-gold text-luxury-gold"
                                  : "bg-luxury-lightGray/40 border-luxury-gold/5 text-luxury-cream/70 hover:border-luxury-gold/20"
                              }`}
                            >
                              {v.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price and Stock */}
                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-luxury-gold/10">
                      <span className="text-luxury-gold font-serif font-bold text-xl">
                        ${finalPrice.toFixed(2)}
                      </span>
                      <span className={`text-[11px] px-2.5 py-1 rounded font-sans ${
                        activeStock > 0 
                          ? "text-luxury-emerald-light bg-luxury-emerald/10 border border-luxury-emerald/20" 
                          : "text-red-400 bg-red-400/10 border border-red-400/20"
                      }`}>
                        {activeStock > 0 ? `In Stock (${activeStock})` : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-24 text-center border border-luxury-gold/10 rounded-lg bg-luxury-dark/40">
          <p className="text-luxury-cream/50 font-serif text-lg">No products match your filters</p>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchQuery("");
            }}
            className="mt-4 text-luxury-gold hover:underline text-sm font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
