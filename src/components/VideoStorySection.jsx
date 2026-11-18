import { ArrowUpRight } from "lucide-react";

const VideoStorySection = ({ video, story, number }) => {
  return (
    <section className="relative min-h-screen overflow-hidden border-t border-[#c9a47f]/20 bg-[#2d2926] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[55vh] lg:min-h-screen">
          <video
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label={story.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.25em] text-white/80 md:bottom-10 md:left-10">
            0{number} / 04
          </span>
        </div>

        <div className="flex items-center bg-[#2d2926] px-8 py-16 md:px-16 lg:px-20">
          <div className="max-w-lg">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a47f] md:text-xs">
              {story.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight md:text-4xl">
              {story.title}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {story.description}
            </p>
            <button className="group mt-7 flex items-center gap-2 border-b border-[#c9a47f] pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#c9a47f] md:text-xs">
              {story.cta}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStorySection;
