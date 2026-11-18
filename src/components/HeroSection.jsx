import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import heroBackground from "../assets/tulips-gift-hero-luxury.png";
import circleImage from "../assets/Cute Valentine's Gift Inspo.jpg";

const HeroSection = () => (
  <section className="relative isolate overflow-hidden bg-[#fbf4f1]">
    {/* Same tulips image fills the hero background and the circular feature image. */}
    <img
      src={heroBackground}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center] opacity-60"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbf4f1]/82 via-[#fbf4f1]/42 to-[#fbf4f1]/10" />
    <div className="pointer-events-none absolute inset-4 border border-white/65 sm:inset-6 lg:inset-8" />

    <div className="relative mx-auto grid min-h-[700px] max-w-[1600px] items-center gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[780px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:px-12 lg:py-14">
      <div className="order-2 relative z-10 max-w-xl lg:order-1">
        <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#dfc8bd]/80 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8f5c67] shadow-sm backdrop-blur-sm sm:text-xs">
          <Sparkles className="h-4 w-4 text-[#b58a62]" strokeWidth={1.5} />
          Gifts with a little more meaning
        </p>

        <h1 className="font-serif text-5xl font-normal leading-[1.04] tracking-[-0.035em] text-[#34252b] sm:text-6xl lg:text-7xl">
          Make them feel
          <span className="mt-2 block italic text-[#a66f78]">wonderfully loved.</span>
        </h1>

        <p className="mt-6 max-w-md text-sm leading-7 text-[#604e54] sm:text-base sm:leading-8">
          Thoughtful keepsakes, beautiful little luxuries and lovely surprises for the people who matter most.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#collections"
            className="group inline-flex items-center gap-4 rounded-full bg-[#49373f] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#49373f]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#80525c]"
          >
            Find a thoughtful gift
            <ArrowUpRight className="h-4 w-4 text-[#f1c9bd] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="#featured-gifts"
            className="group inline-flex items-center gap-2 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#49373f] transition-colors hover:text-[#9b6b72]"
          >
            See our favourites
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#765f65] sm:mt-14 sm:text-[10px]">
          <span className="h-px w-8 bg-[#b98a8b]" />
          Chosen with care · Wrapped with love
        </div>
      </div>

      <div className="order-1 mx-auto flex w-full max-w-[570px] items-center justify-center lg:order-2 lg:max-w-none">
        <div className="relative aspect-square w-[min(76vw,470px)] sm:w-[min(68vw,540px)] lg:w-[min(42vw,570px)]">
          <div className="absolute -inset-3 rounded-full border border-[#b89572]/65 sm:-inset-4" />
          <div className="absolute -inset-7 rounded-full border border-[#b89572]/30" />
          <div className="absolute inset-0 overflow-hidden rounded-full border-[7px] border-white bg-[#f0dde0] shadow-[0_28px_70px_rgba(73,55,63,0.22)] sm:border-[10px]">
            <img
              src={circleImage}
              alt="A pink gift box with a white ribbon"
              className="h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.05]"
            />
          </div>

          <div className="absolute -left-3 bottom-[13%] flex items-center gap-3 rounded-full border border-[#eadbd1] bg-[#fffaf7]/95 px-4 py-3 shadow-lg shadow-[#49373f]/10 backdrop-blur sm:-left-7 sm:px-5 sm:py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2e5df] font-serif text-sm italic text-[#9b7959]">G</span>
            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#49373f] sm:text-[10px]">A lovely surprise</span>
          </div>

          <div className="absolute right-[7%] top-[8%] flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-[#fffaf7]/90 text-[#a66f78] shadow-md backdrop-blur sm:h-14 sm:w-14">
            <Sparkles className="h-5 w-5" strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
