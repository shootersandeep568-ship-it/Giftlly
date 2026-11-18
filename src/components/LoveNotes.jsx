import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Miller",
    role: "Verified Customer",
    review:
      "The gift was absolutely beautiful. The packaging, presentation and little details made it feel incredibly special.",
  },
  {
    name: "Emma Wilson",
    role: "Verified Customer",
    review:
      "I wanted something elegant and personal, and this was perfect. She absolutely loved it!",
  },
  {
    name: "Olivia Carter",
    role: "Verified Customer",
    review:
      "From ordering to delivery, everything felt premium. Definitely my new favorite place for thoughtful gifts.",
  },
];

const LoveNotes = () => {
  return (
    <section className="bg-[#f7f2ed] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b08a68]" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08a68]">
              Love From Our Customers
            </p>

            <span className="h-px w-10 bg-[#b08a68]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#2d2926] md:text-6xl">
            Little Words,
            <span className="block italic text-[#b08a68]">
              Big Feelings
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#77706a] md:text-base">
            Every gift carries a story. Here's what our customers have to say
            about their special moments with us.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10"
            >

              {/* Quote Icon */}
              <div className="absolute right-8 top-8 text-[#e8ddd3]">
                <Quote size={42} strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="mb-7 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="currentColor"
                    className="text-[#c49a70]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative min-h-[145px] font-serif text-lg leading-8 text-[#403a36]">
                “{testimonial.review}”
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-[#eee7e1]" />

              {/* Customer */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9ded4] font-serif text-lg text-[#8e6e53]">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-medium text-[#2d2926]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-[#9a9088]">
                    {testimonial.role}
                  </p>
                </div>

              </div>

              {/* Number */}
              <span className="absolute bottom-8 right-8 text-xs text-[#d8cdc4]">
                0{index + 1}
              </span>

            </div>
          ))}

        </div>

        {/* Bottom Controls */}
        <div className="mt-12 flex items-center justify-between border-t border-[#ded5ce] pt-7">

          <p className="text-xs uppercase tracking-[0.25em] text-[#9a9088]">
            Loved by thousands of happy customers
          </p>

          <div className="flex gap-3">

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cfc3ba] text-[#514941] transition hover:bg-[#2d2926] hover:text-white">
              <ArrowLeft size={17} />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cfc3ba] text-[#514941] transition hover:bg-[#2d2926] hover:text-white">
              <ArrowRight size={17} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LoveNotes;