import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { findImage } from "../assets/imageAssets";

const PersonalizedGifts = () => {
    return (
        <section id="personalized-gifts" className="scroll-mt-24 overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Image Side */}
                    <div className="group relative">

                        {/* Decorative Frame */}
                        <div className="absolute -left-4 -top-4 h-full w-full border border-[#c9a47f]/30 md:-left-6 md:-top-6" />

                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src={findImage(["unique gift", "gift box", "personal"], 8)}
                                alt="Personalized Gift"
                                className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-7 left-7 flex       items-center gap-3 bg-white/95 px-5 py-4 backdrop-blur-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ede7] text-[#b08a68]">
                                    <Heart size={18} fill="currentColor" />
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#9b9189]">
                                        Made For You
                                    </p>
                                    <p className="mt-1 font-serif text-lg text-[#2d2926]">
                                        With Love
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:pl-5">

                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#b08a68]" />

                            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b08a68]">
                                Make It Personal
                            </p>
                        </div>

                        <h2 className="max-w-xl font-serif text-4xl leading-[1.1] text-[#2d2926] md:text-6xl">
                            A Gift That Feels
                            <span className="block italic text-[#b08a68]">
                                Truly Yours
                            </span>
                        </h2>

                        <p className="mt-7 max-w-lg text-sm leading-8 text-[#77706a] md:text-base">
                            Add a personal touch to every celebration. Choose a beautiful
                            gift, personalize it with a heartfelt message, and create
                            something they'll remember forever.
                        </p>

                        {/* Features */}
                        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <div className="flex gap-4 border-t border-[#e7dfd8] pt-5">
                                <Sparkles
                                    size={20}
                                    strokeWidth={1.5}
                                    className="mt-1 shrink-0 text-[#b08a68]"
                                />

                                <div>
                                    <h3 className="font-serif text-lg text-[#2d2926]">
                                        Personal Touch
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-[#8b837d]">
                                        Add names, messages & special details.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 border-t border-[#e7dfd8] pt-5">
                                <Heart
                                    size={20}
                                    strokeWidth={1.5}
                                    className="mt-1 shrink-0 text-[#b08a68]"
                                />

                                <div>
                                    <h3 className="font-serif text-lg text-[#2d2926]">
                                        Made With Love
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-[#8b837d]">
                                        Thoughtfully prepared just for them.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        <button className="group mt-10 flex items-center gap-4 bg-[#2d2926] px-7 py-4 text-sm uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#b08a68]">
                            Create Your Gift

                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PersonalizedGifts;
