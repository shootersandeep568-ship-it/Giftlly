import { ArrowLeft, ArrowRight, Minus, Plus, ShieldCheck, ShoppingBag, Sparkles, Trash2 } from "lucide-react";

const CartPage = ({ cart, products = [], onQuantityChange, onContinueShopping, onCheckout }) => {
  const items = Object.entries(cart)
    .map(([id, quantity]) => ({ product: products.find((gift) => gift.id === id), quantity }))
    .filter((item) => item.product && item.quantity > 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

  return (
    <section className="relative isolate min-h-[75vh] overflow-hidden bg-[linear-gradient(135deg,#fffafb_0%,#fff8f6_48%,#fbf2f2_100%)] px-4 py-10 text-[#3a1220] sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-10 -z-10 h-72 w-72 rounded-full bg-rose-200/25 blur-[90px]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.2em] text-[#9a6b7b]">
          <button onClick={onContinueShopping} className="transition hover:text-[#a63a5f]">Gifts</button><span>/</span><span className="text-[#3a1220]">Shopping bag</span>
        </div>

        <header className="mb-9 border-b border-[#c2547a]/20 pb-7 sm:mb-11 sm:pb-9">
          <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.3em] text-[#a63a5f]"><Sparkles size={14} /> A little something lovely</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><h1 className="font-serif text-4xl font-normal tracking-tight text-[#3a1220] sm:text-5xl lg:text-6xl">Your shopping bag</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#7a4a5a]">Your thoughtful picks, gathered in one place and ready to make someone smile.</p></div>
            {items.length > 0 && <span className="border border-[#c2547a]/30 bg-white/75 px-4 py-2 text-xs uppercase tracking-[.15em] text-[#8d5266]">{itemCount} {itemCount === 1 ? "piece" : "pieces"}</span>}
          </div>
        </header>

        {!items.length ? (
          <div className="mx-auto max-w-2xl border border-[#c2547a]/20 bg-white/80 px-5 py-14 text-center shadow-[0_18px_50px_rgba(166,58,95,.07)] sm:px-10 sm:py-20">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c2547a]/25 bg-[#fff7f8] text-[#a63a5f]"><ShoppingBag size={25} strokeWidth={1.25} /></span>
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[.28em] text-[#a63a5f]">A beautiful gift is waiting</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Your bag is ready for a little joy.</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7a4a5a]">Explore our collection and add a keepsake, a small luxury, or something made just for them.</p>
            <button onClick={onContinueShopping} className="mt-8 inline-flex items-center gap-3 bg-[#a63a5f] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-white shadow-[0_10px_25px_rgba(166,58,95,.2)] transition hover:bg-[#8f2a4b]">Explore gifts <ArrowRight size={15} /></button>
          </div>
        ) : (
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
            <div className="min-w-0">
              <div className="mb-3 hidden grid-cols-[minmax(0,1fr)_145px_110px] gap-5 px-5 text-[9px] font-semibold uppercase tracking-[.22em] text-[#9a6b7b] sm:grid"><span>Your selection</span><span className="text-center">Quantity</span><span className="text-right">Total</span></div>
              <div className="divide-y divide-[#c2547a]/15 border-y border-[#c2547a]/20 bg-white/65 px-3 sm:px-5">
                {items.map(({ product, quantity }) => (
                  <article key={product.id} className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_145px_110px] sm:items-center sm:gap-5 sm:py-6">
                    <div className="flex min-w-0 gap-4 sm:gap-5">
                      <div className="h-28 w-24 shrink-0 overflow-hidden bg-[#f6e9e9] sm:h-32 sm:w-28"><img src={product.image} alt={product.name} className="h-full w-full object-cover" /></div>
                      <div className="flex min-w-0 flex-col justify-center">
                        <p className="text-[9px] font-medium uppercase tracking-[.2em] text-[#a63a5f]">{product.category}</p>
                        <h2 className="mt-2 line-clamp-2 font-serif text-lg leading-snug text-[#3a1220] sm:text-xl">{product.name}</h2>
                        <p className="mt-2 text-xs text-[#8b6872]">{formatPrice(product.price)} <span className="text-[#a88f96]">each</span></p>
                        <button onClick={() => onQuantityChange(product.id, 0)} className="mt-3 inline-flex w-fit items-center gap-1.5 text-[10px] uppercase tracking-[.12em] text-[#9a6b7b] transition hover:text-[#a63a5f] sm:hidden"><Trash2 size={13} /> Remove</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-center">
                      <span className="text-[10px] uppercase tracking-[.14em] text-[#9a6b7b] sm:hidden">Quantity</span>
                      <div className="inline-flex h-9 items-center border border-[#c2547a]/30 bg-white">
                        <button aria-label={`Decrease quantity of ${product.name}`} onClick={() => onQuantityChange(product.id, quantity - 1)} className="flex h-9 w-9 items-center justify-center text-[#7a4a5a] transition hover:bg-[#fff1f5]"><Minus size={13} /></button>
                        <span className="min-w-8 text-center text-xs tabular-nums">{quantity}</span>
                        <button aria-label={`Increase quantity of ${product.name}`} onClick={() => onQuantityChange(product.id, quantity + 1)} className="flex h-9 w-9 items-center justify-center text-[#7a4a5a] transition hover:bg-[#fff1f5]"><Plus size={13} /></button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#c2547a]/10 pt-3 sm:justify-end sm:border-0 sm:pt-0">
                      <button aria-label={`Remove ${product.name}`} onClick={() => onQuantityChange(product.id, 0)} className="hidden p-2 text-[#a88b94] transition hover:text-[#a63a5f] sm:inline-flex"><Trash2 size={16} /></button>
                      <span className="text-[10px] uppercase tracking-[.14em] text-[#9a6b7b] sm:hidden">Item total</span>
                      <span className="min-w-[88px] text-right text-sm font-medium tabular-nums text-[#3a1220]">{formatPrice(product.price * quantity)}</span>
                    </div>
                  </article>
                ))}
              </div>
              <button onClick={onContinueShopping} className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.15em] text-[#7a4a5a] transition hover:text-[#a63a5f]"><ArrowLeft size={15} /> Continue shopping</button>
            </div>

            <aside className="border border-[#c2547a]/25 bg-white/85 p-5 shadow-[0_18px_50px_rgba(166,58,95,.08)] sm:p-7 lg:sticky lg:top-28">
              <p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#a63a5f]">A lovely choice</p>
              <h2 className="mt-2 font-serif text-2xl text-[#3a1220]">Order summary</h2>
              <div className="mt-6 space-y-4 border-y border-[#c2547a]/15 py-5 text-sm">
                <div className="flex justify-between gap-4 text-[#7a4a5a]"><span>Items ({itemCount})</span><span className="tabular-nums">{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between gap-4 text-[#7a4a5a]"><span>Delivery</span><span className="text-right text-xs">Confirmed with your order</span></div>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4"><span className="text-sm font-medium">Subtotal</span><span className="font-serif text-2xl text-[#a63a5f] tabular-nums">{formatPrice(subtotal)}</span></div>
              <p className="mt-3 text-[11px] leading-5 text-[#9a6b7b]">We will confirm delivery details and any applicable charges when you place your order.</p>
              <button type="button" onClick={onCheckout} className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#b6476c] to-[#963453] px-5 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white shadow-[0_10px_24px_rgba(166,58,95,.22)] transition hover:brightness-110">Ask us to place this order <ArrowRight size={15} /></button>
              <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-[#8e717a]"><ShieldCheck size={15} className="text-[#a63a5f]" /> Thoughtfully packed with care</div>
              <div className="mt-5 border-t border-[#c2547a]/15 pt-4 text-center text-[10px] leading-5 text-[#9a6b7b]">Hand-wrapped <span className="mx-1 text-[#c2547a]">·</span> Personal note <span className="mx-1 text-[#c2547a]">·</span> Careful delivery</div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
