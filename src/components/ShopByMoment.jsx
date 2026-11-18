import { ArrowUpRight } from "lucide-react";
import { occasions } from "../data/occasions";

const ShopByMoment = ({ onOpenOccasion = () => {} }) => {
  return (
    <section id="shop-by-moment" className="scroll-mt-24 bg-[#faf7f4] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-15xl">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#b08a68]">
              Find The Perfect Gift
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#2d2926] md:text-6xl">
              Shop By Moment
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#77706a] md:text-base">
              Because every moment deserves something beautiful.
              Discover gifts curated for life's most meaningful occasions.
            </p>
          </div>

          <button onClick={() => document.getElementById("occasion-grid")?.scrollIntoView({ behavior: "smooth" })} className="group flex w-fit items-center gap-2 border-b border-[#2d2926] pb-2 text-sm uppercase tracking-wider text-[#2d2926] transition hover:text-[#b08a68]">
            View All Occasions
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Occasion Grid */}
        <div id="occasion-grid" className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {occasions.map((occasion, index) => (
            <button
              key={occasion.title}
              type="button"
              onClick={() => onOpenOccasion(occasion.id)}
              className={`group relative overflow-hidden ${index === 0 || index === 3
                ? "md:h-[500px]"
                : "md:h-[500px]"
                } h-[360px] w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b08a68] md:h-[500px]`}
            >
              {/* Image */}
              <img
                src={occasion.image}
                alt={occasion.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500 group-hover:from-black/80" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">

                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
                  {occasion.subtitle}
                </p>

                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="font-serif text-4xl md:text-5xl">
                      {occasion.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-500 group-hover:bg-white group-hover:text-[#2d2926]">
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

              </div>

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-4 border border-white/0 transition-all duration-700 group-hover:inset-6 group-hover:border-white/30" />
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ShopByMoment;
