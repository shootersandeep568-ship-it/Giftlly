import { ArrowLeft, ArrowUpRight, Gift, Heart, Sparkles } from "lucide-react";
import { occasions } from "../data/occasions";

const giftKeywords = {
  birthday: ["bouquet", "flower", "hamper", "valentine", "gift"],
  anniversary: ["love", "ring", "jhumka", "rose", "valentine"],
  wedding: ["bridal", "bangles", "decor", "clock", "jewellery"],
  "thank-you": ["flower", "rose", "bag", "self", "gift"],
};

const OccasionDetailPage = ({ occasionId, products = [], onBack, onOpenProduct, onAddToCart = () => {} }) => {
  const occasion = occasions.find((item) => item.id === occasionId);
  if (!occasion) {
    return <section className="px-6 py-24 text-center"><h1 className="font-serif text-4xl">Occasion not found</h1><button onClick={onBack} className="mt-6 underline">Back to occasions</button></section>;
  }

  const keywords = giftKeywords[occasion.id] || [];
  const matches = products.filter((gift) => keywords.some((word) => gift.name.toLowerCase().includes(word)));
  const gifts = [...matches, ...products.filter((gift) => !matches.includes(gift))].slice(0, 4);

  return (
    <section className="bg-[#faf7f4] px-5 pb-20 pt-8 text-[#2d2926] sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <button onClick={onBack} className="mb-7 inline-flex items-center gap-2 text-sm text-[#8f6b50] transition hover:text-[#5b3d32]"><ArrowLeft size={16}/> All occasions</button>
        <div className="grid overflow-hidden rounded-sm bg-[#211416] text-white lg:min-h-[530px] lg:grid-cols-[1.02fr_.98fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.28em] text-[#d9b27d]"><Sparkles size={15}/> The occasion edit</p>
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl">{occasion.title}<span className="mt-2 block text-2xl font-normal italic text-[#d9b27d] sm:text-3xl">{occasion.subtitle}</span></h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">{occasion.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">{occasion.ideas.map((idea) => <span key={idea} className="border border-white/25 px-3 py-2 text-xs text-white/85">{idea}</span>)}</div>
            <a href="#occasion-gifts" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#d9b27d] pb-2 text-xs font-medium uppercase tracking-[.16em] text-[#f1d9b7]">Explore gift ideas <ArrowUpRight size={16}/></a>
          </div>
          <div className="relative min-h-[330px] lg:min-h-full"><img src={occasion.image} alt={`${occasion.title} gift inspiration`} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#211416]/20"/></div>
        </div>

        <div id="occasion-gifts" className="scroll-mt-24 pt-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="mb-2 text-[10px] font-medium uppercase tracking-[.25em] text-[#a17c5d]">Thoughtful ideas for {occasion.title.toLowerCase()}</p><h2 className="font-serif text-3xl sm:text-4xl">Gifts picked for this moment</h2></div>
            <p className="max-w-sm text-sm leading-6 text-[#77706a]">Choose a favourite and open its own page for product details.</p>
          </div>
          <div className="grid grid-cols-2 items-start gap-4 sm:gap-6 lg:grid-cols-4">
            {gifts.map((gift) => <article key={gift.id} className="group flex min-w-0 flex-col self-start">
              <button type="button" onClick={() => onOpenProduct(gift.id)} aria-label={`View ${gift.name} details`} className="relative aspect-[4/5] w-full overflow-hidden bg-[#eee7df] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b08a68]"><img src={gift.image} alt={gift.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#714a50] shadow transition group-hover:bg-[#a63a5f] group-hover:text-white"><ArrowUpRight size={18}/></span></button>
              <p className="mt-4 min-h-4 text-[10px] uppercase leading-4 tracking-[.16em] text-[#9b7959]">{gift.category}</p><button type="button" onClick={() => onOpenProduct(gift.id)} title={gift.name} className="mt-1 line-clamp-2 min-h-[3.5rem] text-left font-serif text-base font-medium leading-7 tracking-normal focus-visible:underline">{gift.name}</button><p className="mt-2 text-sm leading-5 text-[#7a4a5a]">₹{gift.price.toLocaleString("en-IN")} <span className="ml-2 text-xs text-[#998c86]">★ {gift.rating}</span></p>
              <button type="button" onClick={() => onAddToCart(gift.id)} className="mt-3 inline-flex w-fit items-center gap-2 bg-[#a63a5f] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#8f2a4b]"><Gift size={14}/> Add to cart</button>
            </article>)}
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#ded5cc] pt-7"><p className="flex items-center gap-2 font-serif text-xl"><Heart size={18} className="text-[#b56f7d]"/> Make this moment feel personal.</p><button onClick={() => document.getElementById("occasion-gifts")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#754a57]"><Gift size={16}/> Browse gift ideas</button></div>
      </div>
    </section>
  );
};

export default OccasionDetailPage;
