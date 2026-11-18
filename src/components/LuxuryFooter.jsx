import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const LuxuryFooter = ({ onNavigate = () => {} }) => {
  const handleNavigation = (event, page) => {
    event.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-[#211e1c] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="group inline-block"
            >
              <h2 className="font-serif text-4xl tracking-wide text-white">
                Lueur
              </h2>

              <p className="mt-1 text-[9px] uppercase tracking-[0.45em] text-[#c9a47f]">
                Gifts & Moments
              </p>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              Thoughtfully curated gifts for life's beautiful moments.
              Because the best gifts are the ones that come from the heart.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#c9a47f] hover:bg-[#c9a47f] hover:text-[#211e1c]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#c9a47f] hover:bg-[#c9a47f] hover:text-[#211e1c]"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#c9a47f] hover:bg-[#c9a47f] hover:text-[#211e1c]"
              >
                <FaTwitter size={17} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-[#c9a47f]">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/50">

              <li>
                <a
                  href="/"
                  onClick={(event) => handleNavigation(event, "home")}
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/?page=collections"
                  onClick={(event) => handleNavigation(event, "collections")}
                  className="transition hover:text-white"
                >
                  Collections
                </a>
              </li>

              <li>
                <a
                  href="/?page=gifts"
                  onClick={(event) => handleNavigation(event, "gifts")}
                  className="transition hover:text-white"
                >
                  Gifts
                </a>
              </li>

              <li>
                <a
                  href="/?page=occasions"
                  onClick={(event) => handleNavigation(event, "occasions")}
                  className="transition hover:text-white"
                >
                  Occasions
                </a>
              </li>

              <li>
                <a
                  href="/?page=contact"
                  onClick={(event) => handleNavigation(event, "contact")}
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>

            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-[#c9a47f]">
              Customer Care
            </h3>

            <ul className="space-y-4 text-sm text-white/50">

              <li>
                <a
                  href="/?page=contact"
                  onClick={(event) => handleNavigation(event, "contact")}
                  className="transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/#shipping"
                  className="transition hover:text-white"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="/#returns"
                  className="transition hover:text-white"
                >
                  Returns & Exchanges
                </a>
              </li>

              <li>
                <a
                  href="/#faqs"
                  className="transition hover:text-white"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="/#privacy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-[#c9a47f]">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:hello@lueur.com"
                className="group flex items-start gap-4"
              >
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#c9a47f]"
                />

                <span className="text-sm text-white/50 transition group-hover:text-white">
                  hello@lueur.com
                </span>
              </a>

              <a
                href="tel:+911234567890"
                className="group flex items-start gap-4"
              >
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#c9a47f]"
                />

                <span className="text-sm text-white/50 transition group-hover:text-white">
                  +91 12345 67890
                </span>
              </a>

              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#c9a47f]"
                />

                <span className="text-sm leading-6 text-white/50">
                  Jaipur, Rajasthan
                  <br />
                  India
                </span>
              </div>

            </div>

            {/* Contact CTA */}
            <button className="group mt-8 flex items-center gap-3 border-b border-[#c9a47f] pb-2 text-xs uppercase tracking-widest text-[#c9a47f]">
              Talk To Us

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:px-12 lg:px-20 md:text-left">

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Lueur. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/30">
            Made with
            <Heart
              size={12}
              fill="currentColor"
              className="text-[#c9a47f]"
            />
            for beautiful moments
          </p>

          <div className="flex gap-5 text-xs text-white/30">
            <a href="/#terms" className="transition hover:text-white">
              Terms
            </a>

            <a href="/#privacy" className="transition hover:text-white">
              Privacy
            </a>

            <a href="/#cookies" className="transition hover:text-white">
              Cookies
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default LuxuryFooter;
