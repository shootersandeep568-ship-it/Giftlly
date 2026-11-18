import { ArrowLeft, ArrowUpRight, Gift, Heart, ShoppingBag, Star, Truck } from "lucide-react";

const ProductDetailPage = ({ productId, products = [], onBack, onAddToCart = () => {} }) => {
  const product = products.find((gift) => gift.id === productId);

  if (!product) {
    return <section className="min-h-[60vh] px-6 py-20 text-center text-[#3a1220]"><h1 className="text-3xl">Gift not found</h1><button onClick={onBack} className="mt-6 underline">Back to gifts</button></section>;
  }

  const price = `₹${product.price.toLocaleString("en-IN")}`;
  return (
    <section className="min-h-[75vh] bg-[#fffafb] px-5 py-10 text-[#3a1220] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-sm text-[#a63a5f] hover:underline"><ArrowLeft size={16}/> Back to gifts</button>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-t-[45%] border border-[#c2547a]/30 bg-[#fbe3ea] shadow-xl"><img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" /></div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[.25em] text-[#a63a5f]">{product.category}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-2 text-sm text-[#7a4a5a]"><Star size={15} className="fill-[#c2547a] text-[#c2547a]"/>{product.rating} <span>({product.reviews} reviews)</span></div>
            <p className="mt-6 text-3xl font-medium text-[#a63a5f]">{price} {product.originalPrice && <del className="ml-2 text-base font-normal text-[#9a6b7b]">₹{product.originalPrice.toLocaleString("en-IN")}</del>}</p>
            <button type="button" onClick={() => onAddToCart(product.id)} className="mt-6 inline-flex items-center gap-3 bg-[#a63a5f] px-8 py-3.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(166,58,95,.22)] transition hover:bg-[#8f2a4b]"><ShoppingBag size={17}/> Add to cart</button>
            <p className="mt-6 max-w-xl leading-7 text-[#7a4a5a]">{product.description || `A thoughtful ${product.category.toLowerCase()} gift, carefully selected to make their special moment feel even more memorable. Beautifully presented and ready to gift.`}</p>
            <div className="mt-8 space-y-4 border-y border-[#c2547a]/20 py-6 text-sm text-[#7a4a5a]">
              <p className="flex items-center gap-3"><Gift size={18} className="text-[#a63a5f]"/> Gift-ready packaging with a personal note</p>
              <p className="flex items-center gap-3"><Truck size={18} className="text-[#a63a5f]"/> Carefully packed for delivery across India</p>
              <p className="flex items-center gap-3"><Heart size={18} className="text-[#a63a5f]"/> A lovely choice for birthdays and special moments</p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border border-[#a63a5f] px-6 py-3 text-sm font-medium text-[#a63a5f] transition hover:bg-[#a63a5f] hover:text-white">Ask about this gift <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
