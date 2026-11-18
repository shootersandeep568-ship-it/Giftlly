import { ArrowUpRight, Feather, Gift, Heart, Star, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { imageAssets } from "../assets/imageAssets";

/*
  Fonts (add once in index.html <head>):
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400;1,6..96,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

  Palette
  white   #fffafb   page base
  blush   #fde7ed / #fbd3de   soft pink washes, placeholders
  rose    #c2547a   lines, accents, diamonds
  deep    #a63a5f   buttons, foil text
  ink     #3a1220   headings and body text
  muted   #7a4a5a / #9a6b7b   secondary text
*/

const display = { fontFamily: "'Bodoni Moda', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif" };

/* Blush: white base with soft pink glows + very fine grain */
const blush = {
  ...body,
  backgroundColor: "#fffafb",
  backgroundImage: [
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.035'/></svg>\")",
    "radial-gradient(70% 45% at 50% 0%, #fde7ed 0%, transparent 70%)",
    "radial-gradient(90% 60% at 0% 45%, #fbd9e2 0%, transparent 62%)",
    "radial-gradient(80% 55% at 100% 100%, #fcdbe4 0%, transparent 65%)",
  ].join(","),
};

/* Rose foil used for text and ornaments */
const roseFoil =
  "bg-gradient-to-r from-[#e0668b] via-[#b83a63] to-[#8f2a4b] bg-clip-text text-transparent";

const giftCategories = ["Jewellery", "Self Care", "Thoughtful Gifts", "For Every Moment"];

const budgets = [
  { key: "all", label: "Any budget", min: 0, max: Infinity },
  { key: "low", label: "Under ₹1,200", min: 0, max: 1199 },
  { key: "mid", label: "₹1,200 – ₹1,800", min: 1200, max: 1800 },
  { key: "high", label: "Above ₹1,800", min: 1801, max: Infinity },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: low to high" },
  { value: "high", label: "Price: high to low" },
];

const promises = [
  { icon: Gift, title: "Hand-wrapped", text: "Every piece arrives boxed and ribboned." },
  { icon: Feather, title: "A note in your words", text: "Add a personal message to the box." },
  { icon: Truck, title: "Careful delivery", text: "Packed to arrive perfect, across India." },
];

const excludedFeaturedImages = new Set([
  "tulips-gift-hero-hd.png",
  "tulips-gift-hero-luxury.png",
  "tulips-gift-hero.jpg",
  "chatgpt image aug 20, 2026, 12_49_25 am.png",
]);

export const featuredGifts = imageAssets
  .filter((asset) => !excludedFeaturedImages.has(asset.filename.toLowerCase()))
  .map((asset, index) => {
    const price = 799 + (index % 6) * 300;
    const originalPrice = index % 3 === 0 ? Math.round(price * 1.25) : null;

    return {
      id: `${asset.name}${index}`,
      name: asset.name,
      category: giftCategories[index % giftCategories.length],
      price,
      originalPrice,
      rating: (4 + (index % 3) * 0.3).toFixed(1),
      reviews: 12 + index * 7,
      isNew: index % 5 === 0,
      image: asset.src,
    };
  });

const formatINR = (amount) => `₹${amount.toLocaleString("en-IN")}`;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a63a5f]";

/* ───────── Small ornaments ───────── */

const Diamond = ({ className = "" }) => (
  <span aria-hidden="true" className={`inline-block h-1.5 w-1.5 rotate-45 bg-[#c2547a] ${className}`} />
);

const RoseRule = ({ className = "" }) => (
  <div aria-hidden="true" className={`flex items-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c2547a]/50" />
    <Diamond />
    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c2547a]/50" />
  </div>
);

/* ───────── Gift card (arched display niche, compact) ───────── */

const GiftCard = ({ gift, isWishlisted, onToggle, onOpen, onAddToCart }) => (
  <article className="group min-w-0 cursor-pointer" onClick={() => onOpen(gift.id)}>
    {/* arch frame with fine rose border */}
    <div className="relative rounded-t-[999px] border border-[#c2547a]/35 bg-white p-1.5 shadow-[0_14px_36px_rgba(166,58,95,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c2547a] group-hover:shadow-[0_22px_48px_rgba(166,58,95,0.22)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-[#c2547a]/20 bg-[#fbe3ea]">
        <img
          src={gift.image}
          alt={gift.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a1220]/35 via-transparent to-transparent" />

        {gift.originalPrice && (
          <div
            className="absolute left-3 top-[22%] flex h-[3.2rem] w-7 items-start justify-center bg-[#c2477a] pt-2 text-white"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)" }}
            title="Special edit"
          >
            <Star size={12} className="fill-white" />
            <span className="sr-only">Special edit</span>
          </div>
        )}

        {gift.isNew && (
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 border border-[#c2547a]/50 bg-white/85 px-3 py-0.5 text-[11px] font-medium tracking-[0.2em] text-[#a63a5f] backdrop-blur-sm">
            New
          </span>
        )}

        <button
          type="button"
          onClick={(event) => onToggle(event, gift.id)}
          aria-label={isWishlisted ? `Remove ${gift.name} from wishlist` : `Add ${gift.name} to wishlist`}
          aria-pressed={isWishlisted}
          className={`absolute right-3 top-[22%] flex h-9 w-9 items-center justify-center rounded-full border border-[#c2547a]/30 bg-white/85 text-[#3a1220] backdrop-blur-sm transition duration-300 hover:border-[#c2547a] hover:text-[#a63a5f] motion-reduce:transition-none ${focusRing}`}
        >
          <Heart size={16} strokeWidth={1.5} className={isWishlisted ? "fill-[#d6416b] text-[#d6416b]" : ""} />
        </button>
      </div>

      {/* hang-tag price */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3a1220] py-1.5 pl-7 pr-4 text-[#fde7ed] shadow-[0_8px_20px_rgba(58,18,32,0.3)]"
        style={{ clipPath: "polygon(14px 0, 100% 0, 100% 100%, 14px 100%, 0 50%)" }}
      >
        <span aria-hidden="true" className="absolute left-[8px] top-1/2 -mt-[3px] h-1.5 w-1.5 rounded-full bg-[#fffafb]" />
        <span className="flex items-baseline gap-2 whitespace-nowrap">
          {!gift.originalPrice && <span className="text-[11px] font-light text-[#e9b8c6]">From</span>}
          <span className="text-sm font-medium">{formatINR(gift.price)}</span>
          {gift.originalPrice && (
            <span className="text-xs font-light text-[#d99bb0] line-through">{formatINR(gift.originalPrice)}</span>
          )}
        </span>
      </div>
    </div>

    {/* details */}
    <div className="px-1 pt-8 text-center">
      <p className="mb-1.5 flex items-center justify-center gap-2 text-xs font-light text-[#9a6b7b]">
        <span className="font-medium text-[#a63a5f]">{gift.category}</span>
        <span aria-hidden="true" className="h-2.5 w-px bg-[#c2547a]/40" />
        <span className="inline-flex items-center gap-1">
          <Star size={11} className="fill-[#c2547a] text-[#c2547a]" />
          <span className="text-[#3a1220]">{gift.rating}</span>
          <span>({gift.reviews})</span>
        </span>
      </p>

      <h3
        style={display}
        className="line-clamp-2 min-h-[2.7rem] text-[1.2rem] font-normal leading-[1.15] tracking-[-0.01em] text-[#3a1220] transition-colors duration-300 group-hover:text-[#a63a5f] motion-reduce:transition-none"
      >
        {gift.name}
      </h3>

      <a
          href={`?page=product&productId=${encodeURIComponent(gift.id)}`}
          onClick={(event) => { event.preventDefault(); event.stopPropagation(); onOpen(gift.id); }}
        className={`mt-2.5 inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-[13px] font-medium text-[#3a1220] transition-colors duration-300 hover:border-[#c2547a] hover:text-[#a63a5f] motion-reduce:transition-none ${focusRing} focus-visible:outline-offset-4`}
      >
        View gift <ArrowUpRight size={13} />
      </a>
      <button
        type="button"
        onClick={(event) => { event.preventDefault(); event.stopPropagation(); onAddToCart(gift.id); }}
        className={`mt-3 inline-flex items-center gap-2 bg-[#a63a5f] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#8f2a4b] ${focusRing}`}
      >
        <Gift size={14} /> Add to cart
      </button>
    </div>
  </article>
);

/* ───────── Main section ───────── */

const FeaturedGifts = ({ products = featuredGifts, onOpenProduct = () => {}, onAddToCart = () => {}, wishlisted = {}, onToggleWishlist = () => {} }) => {
  const [activeCategory, setActiveCategory] = useState("All Gifts");
  const [activeBudget, setActiveBudget] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const wishlistCount = Object.values(wishlisted).filter(Boolean).length;
  const categories = ["All Gifts", ...giftCategories];

  const visibleGifts = useMemo(() => {
    const budget = budgets.find((item) => item.key === activeBudget);
    const list = products.filter(
      (gift) =>
        (activeCategory === "All Gifts" || gift.category === activeCategory) &&
        gift.price >= budget.min &&
        gift.price <= budget.max
    );
    if (sortBy === "low") list.sort((a, b) => a.price - b.price);
    if (sortBy === "high") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, activeCategory, activeBudget, sortBy]);

  /* first gift becomes the spotlight piece when there are enough to show */
  const spotlight = visibleGifts.length >= 3 ? visibleGifts[0] : null;
  const gridGifts = spotlight ? visibleGifts.slice(1) : visibleGifts;

  const toggleWishlist = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    onToggleWishlist(id);
  };

  const clearFilters = () => {
    setActiveCategory("All Gifts");
    setActiveBudget("all");
    setSortBy("featured");
  };

  return (
    <section
      id="featured-gifts"
      style={blush}
      className="relative scroll-mt-24 overflow-hidden px-5 py-16 text-[#3a1220] sm:px-8 sm:py-20 lg:px-12"
    >
      {/* one orchestrated moment: the ribbon draws itself, the foil catches light once */}
      <style>{`
        @keyframes ribbon-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes gem-in { from { opacity: 0; transform: rotate(45deg) scale(0); } to { opacity: 1; transform: rotate(45deg) scale(1); } }
        @keyframes foil-sweep { from { background-position: 100% 0; } to { background-position: 0 0; } }
        .ribbon-line { animation: ribbon-draw 1.6s cubic-bezier(.2,.7,.2,1) both; transform-origin: center; }
        .ribbon-gem { animation: gem-in .6s 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .foil-text {
          background-size: 250% 100%;
          animation: foil-sweep 2.6s 1.2s cubic-bezier(.3,.6,.2,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .ribbon-line, .ribbon-gem, .foil-text { animation: none; }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl">
        {/* ───────── Ribbon ───────── */}
        <div className="relative mb-10 flex h-4 items-center sm:mb-14" aria-hidden="true">
          <div className="ribbon-line h-px w-full bg-gradient-to-r from-transparent via-[#c2547a] to-transparent" />
          <span className="ribbon-gem absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 border border-[#c2547a] bg-[#fffafb]">
            <span className="absolute inset-[3px] bg-[#c2547a]" />
          </span>
        </div>

        {/* ───────── Header (centered, ceremonial) ───────── */}
        <header className="mx-auto mb-12 max-w-4xl text-center lg:mb-14">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#a63a5f]">The art of giving</p>
          <h2
            style={display}
            className="text-[2.6rem] font-normal leading-[1] tracking-[-0.025em] sm:text-6xl lg:text-[5rem]"
          >
            Gifts worth
            <span className={`foil-text block pb-2 italic ${roseFoil}`}>unwrapping slowly.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-7 text-[#7a4a5a]">
            Small luxuries and lasting keepsakes, chosen one by one for the people who make every moment matter.
          </p>
          <a
            href="#collections"
            className={`group mt-6 inline-flex items-center gap-3 border-b border-[#c2547a] pb-1.5 text-sm font-medium text-[#3a1220] transition-colors hover:text-[#a63a5f] ${focusRing} focus-visible:outline-offset-4`}
          >
            Explore all collections
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </header>

        {/* ───────── Promises ───────── */}
        <ul className="mb-12 grid gap-px overflow-hidden border border-[#c2547a]/25 bg-[#c2547a]/25 sm:grid-cols-3 lg:mb-14">
          {promises.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 bg-white/90 px-6 py-5">
              <Icon size={22} strokeWidth={1.2} className="mt-0.5 shrink-0 text-[#a63a5f]" />
              <div>
                <p style={display} className="text-lg text-[#3a1220]">{title}</p>
                <p className="mt-1 text-[13px] font-light leading-6 text-[#8a5f6d]">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ───────── Spotlight piece ───────── */}
        {spotlight && (
          <div className="relative mb-14 grid items-center gap-8 border border-[#c2547a]/25 bg-white/70 p-6 shadow-[0_20px_60px_rgba(166,58,95,0.08)] sm:p-8 lg:mb-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:p-10">
            {/* corner brackets */}
            {["left-2 top-2 border-l border-t", "right-2 top-2 border-r border-t", "left-2 bottom-2 border-b border-l", "right-2 bottom-2 border-b border-r"].map((pos) => (
              <span key={pos} aria-hidden="true" className={`pointer-events-none absolute h-5 w-5 border-[#c2547a] ${pos}`} />
            ))}

            <div className="relative mx-auto w-full max-w-xs rounded-t-[999px] border border-[#c2547a]/50 bg-white p-2 shadow-[0_24px_60px_rgba(166,58,95,0.18)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-[#fbe3ea]">
                <img src={spotlight.image} alt={spotlight.name} onClick={() => onOpenProduct(spotlight.id)} className="absolute inset-0 h-full w-full cursor-pointer object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a1220]/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-[#a63a5f]">
                <Diamond /> Gift of the season
              </p>
              <h3
                style={display}
                className="text-[2.2rem] font-normal leading-[1.02] tracking-[-0.02em] text-[#3a1220] sm:text-5xl"
              >
                {spotlight.name}
              </h3>
              <p className="mx-auto mt-4 max-w-md text-[15px] font-light leading-7 text-[#7a4a5a] lg:mx-0">
                Our most-loved piece right now, boxed by hand, ribboned in satin and delivered with a note written in your words.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
                <span style={display} className={`text-3xl ${roseFoil}`}>{formatINR(spotlight.price)}</span>
                {spotlight.originalPrice && (
                  <span className="text-sm font-light text-[#9a6b7b] line-through">{formatINR(spotlight.originalPrice)}</span>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-light text-[#9a6b7b]">
                  <Star size={14} className="fill-[#c2547a] text-[#c2547a]" />
                  <span className="text-[#3a1220]">{spotlight.rating}</span>
                  <span>({spotlight.reviews})</span>
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={`?page=product&productId=${encodeURIComponent(spotlight.id)}`}
                  onClick={(event) => { event.preventDefault(); onOpenProduct(spotlight.id); }}
                  className={`inline-flex items-center gap-3 bg-gradient-to-r from-[#c94a75] to-[#a63a5f] px-7 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(166,58,95,0.3)] transition-[filter] duration-300 hover:brightness-110 motion-reduce:transition-none ${focusRing}`}
                >
                  View this gift <ArrowUpRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={(event) => { event.preventDefault(); onToggleWishlist(spotlight.id); }}
                  aria-pressed={Boolean(wishlisted[spotlight.id])}
                  className={`inline-flex items-center gap-2 border border-[#c2547a]/45 bg-white/60 px-5 py-3 text-sm font-light text-[#3a1220] transition-colors duration-300 hover:border-[#c2547a] motion-reduce:transition-none ${focusRing}`}
                >
                  <Heart
                    size={16}
                    strokeWidth={1.5}
                    className={wishlisted[spotlight.id] ? "fill-[#d6416b] text-[#d6416b]" : "text-[#a63a5f]"}
                  />
                  {wishlisted[spotlight.id] ? "Saved" : "Save for later"}
                </button>
                <button
                  type="button"
                  onClick={() => onAddToCart(spotlight.id)}
                  className={`inline-flex items-center gap-2 border border-[#a63a5f] px-5 py-3 text-sm font-medium text-[#a63a5f] transition-colors hover:bg-[#a63a5f] hover:text-white ${focusRing}`}
                >
                  <Gift size={16} /> Add to cart
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ───────── Gift finder ───────── */}
        <div className="mb-10 space-y-4">
          <RoseRule className="mb-6" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div
              role="tablist"
              aria-label="Gift categories"
              className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 md:flex-wrap md:overflow-visible md:pb-0"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`relative inline-flex shrink-0 items-center gap-2 px-4 py-2 text-sm transition-colors duration-300 motion-reduce:transition-none ${focusRing} ${
                      isActive ? "font-medium text-[#3a1220]" : "font-light text-[#9a6b7b] hover:text-[#a63a5f]"
                    }`}
                  >
                    <Diamond className={`transition-opacity duration-300 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0"}`} />
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-6 text-sm font-light text-[#7a4a5a]">
              <span className="inline-flex items-center gap-2" aria-live="polite">
                <Heart size={15} className={wishlistCount ? "fill-[#d6416b] text-[#d6416b]" : "text-[#9a6b7b]"} />
                {wishlistCount} saved
              </span>
              <label className="inline-flex items-center gap-2">
                <span className="text-[#9a6b7b]">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="cursor-pointer border-b border-[#c2547a]/45 bg-transparent py-1 pr-1 text-sm text-[#3a1220] outline-none focus-visible:border-[#a63a5f]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-white text-[#3a1220]">
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Budget">
              {budgets.map((budget) => {
                const isActive = activeBudget === budget.key;
                return (
                  <button
                    key={budget.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveBudget(budget.key)}
                    className={`border px-4 py-1.5 text-[13px] transition-colors duration-300 motion-reduce:transition-none ${focusRing} ${
                      isActive
                        ? "border-[#a63a5f] bg-[#a63a5f] font-medium text-white"
                        : "border-[#c2547a]/35 bg-white/50 font-light text-[#7a4a5a] hover:border-[#a63a5f] hover:text-[#3a1220]"
                    }`}
                  >
                    {budget.label}
                  </button>
                );
              })}
            </div>
            <p className="text-[13px] font-light text-[#9a6b7b]" aria-live="polite">
              Showing {visibleGifts.length} {visibleGifts.length === 1 ? "gift" : "gifts"}
            </p>
          </div>
        </div>

        {/* ───────── Grid (compact arched niches, no stagger) ───────── */}
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
          {gridGifts.map((gift) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              isWishlisted={Boolean(wishlisted[gift.id])}
              onToggle={toggleWishlist}
              onOpen={onOpenProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {visibleGifts.length === 0 && (
          <div className="py-14 text-center">
            <p style={display} className="text-3xl italic text-[#3a1220]">
              Nothing here yet.
            </p>
            <p className="mt-3 text-sm font-light text-[#7a4a5a]">Try a different category or budget.</p>
            <button
              type="button"
              onClick={clearFilters}
              className={`mt-6 border border-[#a63a5f] px-6 py-2.5 text-sm font-medium text-[#a63a5f] transition-colors hover:bg-[#a63a5f] hover:text-white ${focusRing}`}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ───────── Concierge closing ───────── */}
        <div className="mt-16 text-center lg:mt-20">
          <RoseRule className="mx-auto mb-8 max-w-md" />
          <p style={display} className="text-3xl italic leading-tight text-[#3a1220] sm:text-4xl">
            Not sure what to choose?
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[14px] font-light leading-7 text-[#7a4a5a]">
            Tell us who it is for and we will pick the perfect box, wrapped and ready to send.
          </p>
          <a
            href="#contact"
            className={`mt-6 inline-flex items-center gap-3 border border-[#a63a5f] px-8 py-3 text-sm font-medium text-[#a63a5f] transition-colors duration-300 hover:bg-[#a63a5f] hover:text-white motion-reduce:transition-none ${focusRing}`}
          >
            Ask our gifting concierge <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGifts;
