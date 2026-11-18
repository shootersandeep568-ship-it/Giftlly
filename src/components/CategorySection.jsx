import React from "react";
import {
  Heart,
  Gift,
  Cake,
  Sparkles,
  ArrowUpRight,
  Crown,
} from "lucide-react";
import { findImage } from "../assets/imageAssets";

const categories = [
  {
    title: "For Her",
    page: "for-her",
    subtitle: "A little something lovely",
    image: findImage(["Elegant Silver Butterfly Adjustable Ring"], 0),
    icon: Heart,
  },
  {
    title: "For Him",
    page: "for-him",
    subtitle: "Made to make him smile",
    image: findImage(["Unique Gift Box for Your Boyfriend"], 1),
    icon: Gift,
  },
  {
    title: "Birthday",
    page: "birthday",
    subtitle: "Make their day memorable",
    image: findImage(["womens-day-hamper"], 2),
    icon: Cake,
  },
  {
    title: "Luxury Gifts",
    page: "luxury-gifts",
    subtitle: "For moments worth keeping",
    image: findImage(["Elegant Purple Bridal Bangles Set"], 3),
    icon: Crown,
  },
];

const CategorySection = () => {
  return (
    <section
      id="collections"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[linear-gradient(145deg,#fff9fb_0%,#fff7f2_48%,#fffafd_100%)] py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-rose-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-amber-100/55 blur-[110px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-rose-100 bg-white/80 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#a27669] shadow-[0_5px_18px_rgba(225,120,145,0.09)] sm:text-[10px]">
            <Sparkles className="h-3.5 w-3.5 text-rose-400" strokeWidth={1.5} />
            Curated with love
            <Heart className="h-3 w-3 text-rose-400" fill="currentColor" strokeWidth={1.5} />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.035em] text-[#35252b] sm:text-5xl lg:text-6xl">
            Find a gift for
            <span className="mt-1 block italic text-[#c8788b]">every kind of love.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-[#786a6d] sm:text-base">
            Little keepsakes, grand gestures, and all the meaningful moments in between.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={category.page}
                href={`/${category.page}`}
                aria-label={`Explore ${category.title} gifts`}
                className="group relative block overflow-hidden rounded-[1.9rem] bg-[#eadfda] shadow-[0_12px_35px_rgba(120,64,82,0.10)] ring-1 ring-white/80 transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(190,91,121,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400"
              >
                <div className="relative aspect-[0.78] overflow-hidden sm:aspect-[0.76] lg:aspect-[0.7]">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#241318]/20 via-transparent to-[#241318]/85" />
                  <div className="absolute inset-3 rounded-[1.5rem] border border-white/45 transition-colors duration-500 group-hover:border-white/80" />

                  <span className="absolute left-7 top-7 font-serif text-sm italic text-white/85">
                    0{index + 1}
                  </span>
                  <span className="absolute right-7 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#fff7fa]/35 text-white shadow-sm backdrop-blur-md transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-white group-hover:text-[#c8788b]">
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                    <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.22em] text-white/75">
                      {category.subtitle}
                    </p>
                    <div className="flex items-end justify-between gap-3">
                      <h3 className="font-serif text-3xl font-normal tracking-[-0.025em] text-white sm:text-[2rem]">
                        {category.title}
                      </h3>
                      <span className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff7fa] text-[#754a57] shadow-[0_5px_14px_rgba(35,15,20,0.12)] transition-all duration-300 group-hover:bg-[#d9859a] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                    <div className="mt-5 h-px w-9 bg-white/70 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-11 flex justify-center sm:mt-14">
          <a
            href="/?page=gifts"
            className="group inline-flex items-center gap-3 rounded-full border border-[#d7b8ad] bg-white/75 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#563e45] shadow-sm transition-all duration-300 hover:border-[#bd7b88] hover:bg-[#fff5f6] hover:shadow-md"
          >
            <Gift className="h-4 w-4 text-[#b56f7d]" strokeWidth={1.6} />
            Explore the gift edit
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
