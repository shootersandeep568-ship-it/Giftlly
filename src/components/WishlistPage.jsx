import { ArrowLeft, ArrowUpRight, Heart, Trash2 } from "lucide-react";

const WishlistPage = ({ wishlist, products: catalog = [], onToggleWishlist, onOpenProduct, onContinueShopping }) => {
  const products = catalog.filter((product) => wishlist[product.id]);
  return (
    <section className="min-h-[70vh] bg-[#fffafb] px-5 py-12 text-[#3a1220] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[.25em] text-[#a63a5f]"><Heart size={15}/> Saved with love</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3"><h1 className="font-serif text-4xl sm:text-5xl">Your wishlist</h1><p className="text-sm text-[#7a4a5a]">{products.length} {products.length === 1 ? "gift" : "gifts"} saved</p></div>
        {!products.length ? (
          <div className="mt-10 border border-[#c2547a]/20 bg-white px-6 py-16 text-center">
            <Heart className="mx-auto h-10 w-10 text-[#c2547a]" strokeWidth={1.2}/><h2 className="mt-5 font-serif text-2xl">Keep the lovely ideas close.</h2><p className="mt-2 text-sm text-[#7a4a5a]">Tap the heart on a gift to save it here.</p><button onClick={onContinueShopping} className="mt-7 bg-[#a63a5f] px-7 py-3 text-sm font-medium text-white hover:bg-[#8f2a4b]">Explore gifts</button>
          </div>
        ) : (
          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => <article key={product.id} className="group min-w-0">
              <button onClick={() => onOpenProduct(product.id)} aria-label={`View ${product.name}`} className="relative block aspect-[4/5] w-full overflow-hidden bg-[#f6e9e9]"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#a63a5f]"><ArrowUpRight size={18}/></span></button>
              <p className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#a63a5f]">{product.category}</p><h2 className="mt-1 line-clamp-2 min-h-12 font-serif text-lg leading-6">{product.name}</h2><p className="mt-2 text-sm text-[#7a4a5a]">₹{product.price.toLocaleString("en-IN")}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4"><button onClick={() => onOpenProduct(product.id)} className="inline-flex items-center gap-1 text-xs font-medium text-[#3a1220] hover:text-[#a63a5f]">View gift <ArrowUpRight size={13}/></button><button onClick={() => onToggleWishlist(product.id)} className="inline-flex items-center gap-1 text-xs text-[#8c6875] hover:text-[#a63a5f]"><Trash2 size={13}/> Remove</button></div>
            </article>)}
          </div>
        )}
        <button onClick={onContinueShopping} className="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-[#7a4a5a] hover:text-[#a63a5f]"><ArrowLeft size={15}/> Continue shopping</button>
      </div>
    </section>
  );
};

export default WishlistPage;
