import { useState } from "react";
import { ArrowUpRight, Check, Mail, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setMessage("Please enter your email address.");
      setIsSaved(false);
      return;
    }

    try {
      const savedEmails = JSON.parse(window.localStorage.getItem("gifty-newsletter-emails") || "[]");
      if (savedEmails.includes(normalizedEmail)) {
        setMessage("This email is already saved on this device.");
        setIsSaved(true);
        return;
      }
      window.localStorage.setItem("gifty-newsletter-emails", JSON.stringify([...savedEmails, normalizedEmail]));
      setMessage("Thank you! Your email has been saved on this device.");
      setIsSaved(true);
      setEmail("");
    } catch {
      setMessage("We couldn't save your email. Please try again.");
      setIsSaved(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#2d2926] px-6 py-24 md:px-12 lg:px-20">

      {/* Decorative Elements */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#b08a68]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#b08a68]/10 blur-3xl" />

      {/* Decorative Lines */}
      <div className="absolute left-10 top-10 hidden h-24 w-24 border-l border-t border-white/10 md:block" />
      <div className="absolute bottom-10 right-10 hidden h-24 w-24 border-b border-r border-white/10 md:block" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a47f]/40 text-[#c9a47f]">
          <Sparkles size={22} strokeWidth={1.5} />
        </div>

        {/* Label */}
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-[#c9a47f]">
          Stay In The Know
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
          A Little More
          <span className="block italic text-[#c9a47f]">
            Love In Your Inbox
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
          Sign up for beautiful gifting inspiration, exclusive offers,
          new collections and thoughtful ideas delivered straight to you.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          {/* Email */}
          <div className="flex flex-1 items-center border border-white/15 bg-white/[0.04] px-5 transition focus-within:border-[#c9a47f]">
            <Mail
              size={18}
              strokeWidth={1.5}
              className="mr-3 shrink-0 text-[#c9a47f]"
            />

            <input
              type="email"
              required
              value={email}
              onChange={(event) => { setEmail(event.target.value); setMessage(""); setIsSaved(false); }}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group flex items-center justify-center gap-3 bg-[#c9a47f] px-7 py-4 text-sm font-medium uppercase tracking-wider text-[#2d2926] transition-all duration-300 hover:bg-white"
          >
            {isSaved ? "Email saved" : "Subscribe"}
            {isSaved ? <Check size={17}/> : <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"/>}
          </button>
        </form>

        {message && <p role="status" className={`mx-auto mt-4 max-w-2xl text-sm ${isSaved ? "text-[#d6b78f]" : "text-rose-200"}`}>{message}</p>}

        {/* Privacy */}
        <p className="mt-5 text-[11px] tracking-wide text-white/30">
          Your email is saved in this browser. Newsletter delivery needs an email service connection.
        </p>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-1 border-t border-white/10 pt-8 sm:grid-cols-3">

          <div className="py-3 sm:border-r sm:border-white/10">
            <p className="font-serif text-lg text-white">
              Exclusive Offers
            </p>
            <p className="mt-1 text-xs text-white/35">
              Special deals for subscribers
            </p>
          </div>

          <div className="py-3 sm:border-r sm:border-white/10">
            <p className="font-serif text-lg text-white">
              New Arrivals
            </p>
            <p className="mt-1 text-xs text-white/35">
              Be the first to discover
            </p>
          </div>

          <div className="py-3">
            <p className="font-serif text-lg text-white">
              Gifting Inspiration
            </p>
            <p className="mt-1 text-xs text-white/35">
              Ideas for every occasion
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;
