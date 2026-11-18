import { ArrowLeft, ArrowUpRight, Gift, Sparkles } from "lucide-react";
import { findImage } from "../assets/imageAssets";
import { featuredGifts } from "./FeaturedGifts";

const categoryPages = {
  "for-her": {
    eyebrow: "The gift edit · For her",
    title: "A thoughtful little luxury, just for her.",
    description: "Discover beautiful keepsakes, delicate jewellery and personal touches chosen to make her feel celebrated.",
    image: findImage(["Elegant Silver Butterfly Adjustable Ring"]),
    detail: "Delicate details",
    products: [
      { match: "Elegant Silver Butterfly Adjustable Ring", name: "Butterfly Crystal Ring", type: "A delicate keepsake" },
      { match: "jhumkaa", name: "The Jhumka Edit", type: "Jewellery with a little sparkle" },
      { match: "9 Pairs Hoop & Stud Earrings", name: "Hoop & Stud Set", type: "Everyday elegance" },
      { match: "silver jumka", name: "Silver Jhumka Earrings", type: "A thoughtful surprise" },
    ],
  },
  "for-him": {
    eyebrow: "The gift edit · For him",
    title: "Something meaningful, made to impress.",
    description: "Find considered surprises and keepsakes for the people who are always there for you.",
    image: findImage(["Unique Gift Box for Your Boyfriend"]),
    detail: "Made to surprise",
    products: [
      { match: "Unique Gift Box for Your Boyfriend", name: "The Keepsake Gift Box", type: "A gift made personal" },
      { match: "Cute Valentine's Gift Inspo", name: "The Little Love Edit", type: "A sweet surprise" },
      { match: "multiple decor", name: "The Thoughtful Gift Set", type: "A keepsake for his space" },
      { match: "Cozy Cartoon Panda Women's Slippers", name: "Cozy Comfort Gift", type: "A little everyday joy" },
    ],
  },
  birthday: {
    eyebrow: "The occasion edit · Birthday",
    title: "Make their birthday feel like theirs.",
    description: "Celebrate another trip around the sun with a thoughtful gift, a beautiful bouquet or a little joy just because.",
    image: findImage(["graduation sunflower bouquet"]),
    detail: "Celebrate beautifully",
    products: [
      { match: "graduation sunflower bouquet", name: "The Sunlit Bouquet", type: "Brighten their birthday" },
      { match: "womens-day-hamper", name: "The Celebration Hamper", type: "A ready-to-gift surprise" },
      { match: "valentines.jpg", name: "The Sweetheart Gift Edit", type: "Made for their special day" },
      { match: "Cute Valentine's Gift Inspo", name: "A Little Box of Joy", type: "A thoughtful birthday touch" },
    ],
  },
  "luxury-gifts": {
    eyebrow: "The gift edit · Luxury",
    title: "A gift they will keep close.",
    description: "Explore special keepsakes and elegant pieces for moments that deserve something extraordinary.",
    image: findImage(["Elegant Purple Bridal Bangles Set"]),
    detail: "For unforgettable moments",
    products: [
      { match: "Elegant Purple Bridal Bangles Set", name: "Amethyst Heirloom Bangles", type: "An elegant occasion gift" },
      { match: "Elegant Silver Butterfly Adjustable Ring", name: "Butterfly Crystal Ring", type: "A delicate keepsake" },
      { match: "Unique Gift Box for Your Boyfriend", name: "The Keepsake Gift Box", type: "A beautiful presentation" },
      { match: "multiple decor", name: "The Luxe Home Edit", type: "A special finishing touch" },
    ],
  },
};

const CategoryDetailPage = ({ categoryId, products = featuredGifts, onOpenProduct = () => {}, onAddToCart = () => {} }) => {
  const category = categoryPages[categoryId] || categoryPages["for-her"];

  return (
    <section className="bg-[#f8f5f1] px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <a
          href="/?page=collections"
          className="group mb-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#746a66] transition hover:text-[#9b7959]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          All collections
        </a>

        <div className="grid overflow-hidden bg-[#eee7df] lg:min-h-[600px] lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9b7959] sm:text-xs">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              {category.eyebrow}
            </p>
            <h1 className="max-w-xl font-serif text-4xl font-normal leading-[1.08] text-[#302629] sm:text-5xl lg:text-6xl">
              {category.title}
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#746a66] sm:text-base sm:leading-8">
              {category.description}
            </p>
            <a
              href="#category-gifts"
              className="group mt-9 inline-flex items-center gap-4 bg-[#49373f] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#9b7959]"
            >
              Browse gifts
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-8 border-t border-[#cfc2b5] pt-5 text-[10px] uppercase tracking-[0.2em] text-[#9b7959]">
              {category.detail}
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-full">
            <img
              src={category.image}
              alt={category.eyebrow}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>

        <div id="category-gifts" className="mt-14 scroll-mt-28">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.23em] text-[#9b7959]">A considered selection</p>
              <h2 className="font-serif text-3xl text-[#302629] sm:text-4xl">Gifts to make them smile</h2>
            </div>
            <a href="/?page=gifts" className="group inline-flex items-center gap-2 border-b border-[#8e735c] pb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#49373f] transition hover:text-[#9b7959]">
              View all gifts <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {category.products.map((product) => {
              const productImage = findImage([product.match]);
              const catalogProduct = products.find((gift) => gift.image === productImage) || products[0];
              return (
                <article key={product.name} className="group min-w-0">
                  {catalogProduct && <button type="button" onClick={() => onOpenProduct(catalogProduct.id)} aria-label={`View ${product.name} details`} className="block aspect-[4/5] w-full overflow-hidden bg-[#eee7df]">
                    <img src={productImage} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </button>}
                  <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.15em] text-[#9b7959] sm:text-[10px]">{product.type}</p>
                  <h3 className="mt-1 font-serif text-lg text-[#302629] sm:text-xl">{product.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {catalogProduct && <><button type="button" onClick={() => onOpenProduct(catalogProduct.id)} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#49373f] hover:text-[#9b7959]">View details <ArrowUpRight size={13}/></button><button type="button" onClick={() => onAddToCart(catalogProduct.id)} className="inline-flex items-center gap-1.5 bg-[#a63a5f] px-3 py-2 text-xs font-medium text-white hover:bg-[#8f2a4b]"><Gift size={13}/> Add to cart</button></>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#e3d9cf] pb-6">
          <p className="font-serif text-xl text-[#49373f]">A little joy, thoughtfully chosen.</p>
          <a href="/?page=occasions" className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#746a66] transition hover:text-[#9b7959]">
            Find gifts by occasion
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailPage;
