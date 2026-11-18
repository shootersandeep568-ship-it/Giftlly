import { useEffect, useState } from "react";
import "./App.css";
import LuxuryHeader from "./components/LuxuryHeader";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import CategoryDetailPage from "./components/CategoryDetailPage";
import FeaturedGifts from "./components/FeaturedGifts";
import GiftingExperience from "./components/GiftingExperience";
import ShopByMoment from "./components/ShopByMoment";
import PersonalizedGifts from "./components/PersonalizedGifts";
import LoveNotes from "./components/LoveNotes";
import NewsletterSection from "./components/NewsletterSection";
import LuxuryFooter from "./components/LuxuryFooter";
import ProductDetailPage from "./components/ProductDetailPage";
import OccasionDetailPage from "./components/OccasionDetailPage";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import AccountPage from "./components/AccountPage";
import AdminPanel from "./components/AdminPanel";
import { featuredGifts } from "./components/FeaturedGifts";

const pageIds = ["home", "collections", "gifts", "occasions", "contact", "for-her", "for-him", "birthday", "luxury-gifts", "product", "occasion", "cart", "wishlist", "account", "admin"];

const readCatalog = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem("gifty-catalog") || "null");
    return Array.isArray(stored) ? stored : featuredGifts;
  } catch {
    return featuredGifts;
  }
};

const readPageFromUrl = () => {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const pathPage = ["product", "occasion"].includes(pathParts[0]) ? pathParts[0] : pathParts.at(-1);
  const queryPage = new URLSearchParams(window.location.search).get("page");
  const pathQueryPage = pathParts.at(-1)?.startsWith("page=") ? pathParts.at(-1).slice("page=".length) : null;
  const page = pageIds.includes(pathPage) ? pathPage : queryPage || pathQueryPage || "home";
  return pageIds.includes(page) ? page : "home";
};

const readProductIdFromUrl = () => {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  if (pathParts[0] === "product" && pathParts[1]) return decodeURIComponent(pathParts[1]);
  return new URLSearchParams(window.location.search).get("productId");
};

const readOccasionIdFromUrl = () => {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  return pathParts[0] === "occasion" ? pathParts[1] : null;
};

function App() {
  const [currentPage, setCurrentPage] = useState(readPageFromUrl);
  const [products, setProducts] = useState(readCatalog);
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("gifty-cart") || "{}"); }
    catch { return {}; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("gifty-wishlist") || "{}"); }
    catch { return {}; }
  });

  useEffect(() => {
    window.localStorage.setItem("gifty-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("gifty-catalog", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    window.localStorage.setItem("gifty-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const handleBackForward = () => setCurrentPage(readPageFromUrl());
    window.addEventListener("popstate", handleBackForward);
    return () => window.removeEventListener("popstate", handleBackForward);
  }, []);

  const navigateToPage = (page, productId) => {
    const safePage = pageIds.includes(page) ? page : "home";
    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = safePage === "product" && productId ? `/product/${encodeURIComponent(productId)}` : "/";
    nextUrl.searchParams.delete("page");
    nextUrl.searchParams.delete("productId");
    if (safePage !== "home" && safePage !== "product") nextUrl.searchParams.set("page", safePage);
    nextUrl.hash = "";
    window.history.pushState({}, "", nextUrl);
    setCurrentPage(safePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProduct = (productId) => navigateToPage("product", productId);
  const addToCart = (productId) => {
    setCart((previous) => ({ ...previous, [productId]: (previous[productId] || 0) + 1 }));
    navigateToPage("cart");
  };
  const updateCartQuantity = (productId, quantity) => {
    setCart((previous) => {
      const next = { ...previous };
      if (quantity <= 0) delete next[productId];
      else next[productId] = quantity;
      return next;
    });
  };
  const toggleWishlist = (productId) => {
    setWishlist((previous) => {
      const next = { ...previous };
      if (next[productId]) delete next[productId];
      else next[productId] = true;
      return next;
    });
  };
  const saveProduct = (product) => {
    setProducts((previous) => {
      if (product.id && previous.some((item) => item.id === product.id)) {
        return previous.map((item) => item.id === product.id ? product : item);
      }
      const id = product.id || `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      return [{ ...product, id }, ...previous];
    });
  };
  const removeProduct = (productId) => {
    setProducts((previous) => previous.filter((product) => product.id !== productId));
    setCart((previous) => { const next = { ...previous }; delete next[productId]; return next; });
    setWishlist((previous) => { const next = { ...previous }; delete next[productId]; return next; });
  };
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const wishlistCount = Object.values(wishlist).filter(Boolean).length;
  const openOccasion = (occasionId) => {
    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = `/occasion/${encodeURIComponent(occasionId)}`;
    nextUrl.search = "";
    nextUrl.hash = "";
    window.history.pushState({}, "", nextUrl);
    setCurrentPage("occasion");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "collections":
        return <><CategorySection /><FeaturedGifts products={products} onOpenProduct={openProduct} onAddToCart={addToCart} wishlisted={wishlist} onToggleWishlist={toggleWishlist} /></>;
      case "gifts":
        return <><FeaturedGifts products={products} onOpenProduct={openProduct} onAddToCart={addToCart} wishlisted={wishlist} onToggleWishlist={toggleWishlist} /><PersonalizedGifts /><GiftingExperience /></>;
      case "occasions":
        return <><ShopByMoment onOpenOccasion={openOccasion} /><LoveNotes /></>;
      case "contact":
        return <NewsletterSection />;
      case "for-her":
      case "for-him":
      case "birthday":
      case "luxury-gifts":
        return <CategoryDetailPage categoryId={currentPage} products={products} onOpenProduct={openProduct} onAddToCart={addToCart} />;
      case "product":
        return <ProductDetailPage productId={readProductIdFromUrl()} products={products} onBack={() => navigateToPage("gifts")} onAddToCart={addToCart} />;
      case "occasion":
        return <OccasionDetailPage occasionId={readOccasionIdFromUrl()} products={products} onBack={() => navigateToPage("occasions")} onOpenProduct={openProduct} onAddToCart={addToCart} />;
      case "cart":
        return <CartPage cart={cart} products={products} onQuantityChange={updateCartQuantity} onContinueShopping={() => navigateToPage("gifts")} onCheckout={() => navigateToPage("contact")} />;
      case "wishlist":
        return <WishlistPage wishlist={wishlist} products={products} onToggleWishlist={toggleWishlist} onOpenProduct={openProduct} onContinueShopping={() => navigateToPage("gifts")} />;
      case "account":
        return <AccountPage onContinueShopping={() => navigateToPage("gifts")} onOpenAdmin={() => navigateToPage("admin")} />;
      case "admin":
        return <AdminPanel products={products} onSaveProduct={saveProduct} onRemoveProduct={removeProduct} onBackToStore={() => navigateToPage("home")} />;
      case "home":
      default:
        return <>
          <HeroSection />
          <CategorySection />
          <FeaturedGifts products={products} onOpenProduct={openProduct} onAddToCart={addToCart} wishlisted={wishlist} onToggleWishlist={toggleWishlist} />
          <GiftingExperience />
          <ShopByMoment onOpenOccasion={openOccasion} />
          <PersonalizedGifts />
          <LoveNotes />
          <NewsletterSection />
        </>;
    }
  };

  return (
    <div className="App">
      <LuxuryHeader activePage={currentPage} onNavigate={navigateToPage} onOpenProduct={openProduct} cartCount={cartCount} wishlistCount={wishlistCount} products={products} />
      <main key={currentPage}>{renderPage()}</main>
      <LuxuryFooter onNavigate={navigateToPage} />
    </div>
  );
}

export default App;
