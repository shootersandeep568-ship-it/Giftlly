import { ArrowUpRight } from "lucide-react";
import { videoAssets } from "../assets/videoAssets";

const videoStories = [
  {
    eyebrow: "The first impression",
    title: "A beautiful beginning to every surprise.",
    description: "Every detail is chosen to make their moment unforgettable.",
    cta: "Explore the collection",
    href: "#collections",
  },
  {
    eyebrow: "Made for them",
    title: "Thoughtful gifts, with a personal touch.",
    description: "Find keepsakes and little luxuries chosen just for them.",
    cta: "Make it personal",
    href: "#personalized-gifts",
  },
  {
    eyebrow: "Wrapped with care",
    title: "The joy begins before the gift is opened.",
    description: "Beautiful presentation makes every delivery feel special.",
    cta: "See featured gifts",
    href: "#featured-gifts",
  },
  {
    eyebrow: "Moments that matter",
    title: "Give a feeling they will remember.",
    description: "Find a thoughtful gift for the moments worth celebrating.",
    cta: "Shop by moment",
    href: "#shop-by-moment",
  },
];

const StoryCard = ({ video, story, number }) => (
  <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden bg-[#2a1b1e] sm:aspect-[5/6] xl:aspect-[4/5]">
    {video?.src && (
      <video
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
    )}

    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#160d10]/95 via-[#160d10]/25 to-[#160d10]/10 transition-colors duration-500 group-hover:from-[#160d10]" />
    <div className="pointer-events-none absolute inset-3 border border-white/20 transition-all duration-500 group-hover:inset-4 group-hover:border-[#d7b77e]/70 sm:inset-4" />

    <span className="absolute left-7 top-7 text-[10px] uppercase tracking-[0.2em] text-white/75">
      Story <span className="ml-1 font-serif text-sm italic text-[#e0c38d]">0{number}</span>
    </span>
    <span className="absolute right-7 top-7 h-1.5 w-1.5 rounded-full bg-[#dfbd7e] shadow-[0_0_12px_rgba(223,189,126,0.8)]" />

    <div className="relative p-7 text-[#f8f1ec] sm:p-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-7 bg-[#d7b77e]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#e0c38d]">
          {story.eyebrow}
        </span>
      </div>

      <h3 className="max-w-sm font-serif text-2xl font-normal leading-tight sm:text-[1.7rem]">
        {story.title}
      </h3>
      <p className="mt-3 max-w-sm text-[13px] font-light leading-6 text-white/75">
        {story.description}
      </p>

      <a
        href={story.href}
        className="mt-6 inline-flex items-center gap-3 border-b border-[#d7b77e]/50 pb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#f8f1ec] transition-colors hover:border-[#e0c38d] hover:text-[#e0c38d]"
      >
        {story.cta}
        <ArrowUpRight className="h-4 w-4 text-[#e0c38d] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>
  </article>
);

const GiftingExperience = () => (
  <section className="relative overflow-hidden bg-[#160d10] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#9e704a]/10 blur-[110px]" />

    <div className="relative mx-auto max-w-7xl">
      <header className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-12">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a267]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d7b77e]">
              The gifting experience
            </p>
          </div>
          <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight text-[#f8f1ec] sm:text-5xl lg:text-6xl">
            The moments around the gift
            <span className="block italic text-[#d9b382]">are part of the magic.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#c8b8b5] sm:text-base sm:leading-8 lg:pb-1">
          From the first glimpse to the final ribbon, make every part of giving feel unforgettable.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
        {videoStories.map((story, index) => (
          <StoryCard
            key={story.eyebrow}
            video={videoAssets[index]}
            story={story}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default GiftingExperience;
