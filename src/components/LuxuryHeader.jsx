import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Gift,
  Sparkles,
  ShoppingBag,
  User,
  Menu,
  X,
  Heart,
  Search,
} from "lucide-react";
import { featuredGifts } from "./FeaturedGifts";

const LuxuryHeader = ({ activePage = "home", onNavigate = () => { }, onOpenProduct = () => {}, cartCount = 0, wishlistCount = 0, products = featuredGifts }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return products
      .filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query))
      .slice(0, 8);
  }, [products, searchQuery]);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const openProductResult = (productId) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    onOpenProduct(productId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "collections", label: "Collections" },
    { id: "gifts", label: "Gifts" },
    { id: "occasions", label: "Occasions" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-pink-100 bg-gradient-to-r from-[#fff8fb]/95 via-white/95 to-[#fff5fa]/95 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "py-2 shadow-[0_8px_28px_rgba(225,90,145,0.14)]" : "py-3 shadow-[0_4px_20px_rgba(225,90,145,0.08)]"
          }`}
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="/" onClick={(event) => { event.preventDefault(); onNavigate("home"); }} className="group flex cursor-pointer items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-500 shadow-[0_5px_14px_rgba(225,90,145,0.25)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-11 sm:w-11">
                  <Gift className="h-[18px] w-[18px] text-white" strokeWidth={1.7} />
                </div>

                <Sparkles
                  className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 text-pink-500"
                  fill="currentColor"
                />
                <Heart className="absolute -bottom-1 -right-2 h-3 w-3 text-rose-400 transition-transform duration-300 group-hover:scale-125" fill="currentColor" />
              </div>

              <div>
                <h1 className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text font-serif text-[1.9rem] font-semibold leading-none tracking-[0.015em] text-transparent sm:text-[2.1rem]">
                  Gifty
                </h1>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.27em] text-[#a17c87]">
                  Gifts with Love
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden items-center gap-1.5 rounded-full border border-pink-100 bg-white/80 p-1.5 shadow-[0_4px_16px_rgba(236,72,153,0.08)] xl:flex 2xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id === "home" ? "/" : `/?page=${link.id}`}
                  onClick={(event) => { event.preventDefault(); onNavigate(link.id); }}
                  className={`relative rounded-full px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 2xl:px-4 ${activePage === link.id
                    ? "bg-gradient-to-r from-pink-100 to-rose-100 text-rose-600 shadow-sm"
                    : "text-[#765d66] hover:bg-pink-50 hover:text-rose-500"
                    }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {link.label}
                    {activePage === link.id && <Heart aria-hidden="true" className="h-3 w-3" fill="currentColor" />}
                  </span>

                </a>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Search */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                aria-expanded={isSearchOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-[#765d66] transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={() => onNavigate("wishlist")}
                aria-label="Wishlist"
                className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-[#765d66] transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 sm:flex"
              >
                <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
                {wishlistCount > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-[#fffafd] bg-[#a63a5f] px-1 text-[9px] font-semibold text-white">{wishlistCount}</span>}
              </button>

              {/* Account */}
              <button
                type="button"
                onClick={() => onNavigate("account")}
                aria-label="Account"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-[#765d66] transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 sm:flex"
              >
                <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>

              {/* Cart */}
              <button
                type="button"
                onClick={() => onNavigate("cart")}
                aria-label={`Shopping bag, ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-[#765d66] transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />

                {cartCount > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-[#fffafd] bg-gradient-to-br from-rose-500 to-fuchsia-500 px-1 text-[9px] font-semibold text-white">{cartCount}</span>}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-[#765d66] transition-all hover:bg-rose-50 hover:text-rose-500 xl:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 xl:hidden ${isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-5"
              : "max-h-0 opacity-0"
              }`}
          >
            <div className="space-y-2 rounded-3xl border border-rose-100 bg-gradient-to-br from-white/95 to-[#fff2f6]/95 p-4 shadow-[0_16px_40px_rgba(190,80,120,0.12)] backdrop-blur-xl">

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id === "home" ? "/" : `/?page=${link.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.16em] transition-all ${activePage === link.id
                    ? "bg-rose-100 text-rose-600 shadow-sm"
                    : "text-[#66545b] hover:bg-rose-50 hover:text-rose-500"
                    }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex items-center gap-3 border-t border-pink-100 pt-3 text-rose-500">
                <button onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white py-3 shadow-sm">
                  <Search className="w-4 h-4" />
                  Search
                </button>

                <button aria-label="Wishlist" onClick={() => { onNavigate("wishlist"); setIsMobileMenuOpen(false); }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>

                <button aria-label="Account" onClick={() => { onNavigate("account"); setIsMobileMenuOpen(false); }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-[#2b1720]/40 px-3 pt-24 backdrop-blur-sm sm:px-6 sm:pt-28" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsSearchOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-label="Search gifts" className="mx-auto max-h-[min(78vh,720px)] max-w-2xl overflow-hidden border border-[#d8b4be] bg-[#fffafb] shadow-[0_25px_80px_rgba(47,17,29,.28)]">
            <form onSubmit={(event) => { event.preventDefault(); if (searchResults[0]) openProductResult(searchResults[0].id); }} className="flex items-center gap-3 border-b border-[#c2547a]/20 px-4 py-4 sm:px-6">
              <Search className="shrink-0 text-[#a63a5f]" size={20}/>
              <input ref={searchInputRef} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search gifts, jewellery, self care..." aria-label="Search gifts" className="min-w-0 flex-1 bg-transparent text-sm text-[#3a1220] outline-none placeholder:text-[#a88b94] sm:text-base" />
              {searchQuery && <button type="button" onClick={() => setSearchQuery("")} className="px-2 py-1 text-xs text-[#8f5869] hover:text-[#a63a5f]">Clear</button>}
              <button type="button" onClick={() => setIsSearchOpen(false)} aria-label="Close search" className="flex h-9 w-9 items-center justify-center rounded-full text-[#765d66] hover:bg-[#fff0f4]"><X size={19}/></button>
            </form>
            <div className="max-h-[calc(min(78vh,720px)-72px)] overflow-y-auto p-3 sm:p-5">
              {!searchQuery.trim() ? (
                <div className="px-3 py-8 text-center"><p className="text-[10px] font-medium uppercase tracking-[.24em] text-[#a63a5f]">Find something thoughtful</p><p className="mt-2 text-sm text-[#8a6873]">Search by product name or gift category.</p><div className="mt-5 flex flex-wrap justify-center gap-2">{["Jewellery", "Self Care", "Thoughtful Gifts"].map((term) => <button key={term} onClick={() => setSearchQuery(term)} className="border border-[#c2547a]/25 bg-white px-3 py-2 text-xs text-[#7a4a5a] transition hover:border-[#a63a5f] hover:text-[#a63a5f]">{term}</button>)}</div></div>
              ) : searchResults.length ? (
                <div className="space-y-1">{searchResults.map((product) => <button key={product.id} onClick={() => openProductResult(product.id)} className="flex w-full items-center gap-4 p-2.5 text-left transition hover:bg-[#fff0f4] sm:p-3"><img src={product.image} alt="" className="h-16 w-14 shrink-0 object-cover sm:h-[72px] sm:w-16"/><span className="min-w-0 flex-1"><span className="block text-[9px] uppercase tracking-[.18em] text-[#a63a5f]">{product.category}</span><span className="mt-1 line-clamp-2 block font-serif text-base leading-snug text-[#3a1220] sm:text-lg">{product.name}</span></span><span className="shrink-0 text-xs text-[#7a4a5a]">₹{product.price.toLocaleString("en-IN")}</span></button>)}</div>
              ) : (
                <div className="px-4 py-10 text-center"><p className="font-serif text-xl text-[#3a1220]">No gifts found for “{searchQuery}”</p><p className="mt-2 text-sm text-[#8a6873]">Try another name or category.</p></div>
              )}
            </div>
            {searchQuery.trim() && searchResults.length > 0 && <div className="border-t border-[#c2547a]/15 px-5 py-3 text-[10px] uppercase tracking-[.16em] text-[#9a6b7b]">{searchResults.length} matching {searchResults.length === 1 ? "gift" : "gifts"} · press Enter for first result</div>}
          </section>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );

};

export default LuxuryHeader;
