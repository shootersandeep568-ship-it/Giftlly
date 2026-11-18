import { findImage } from "../assets/imageAssets";

export const occasions = [
  {
    id: "birthday",
    title: "Birthday",
    subtitle: "Make their day unforgettable",
    description: "Celebrate their day with a gift chosen around their personality, favourite little luxuries, and the memories you share.",
    image: findImage(["birthday", "valentine"], 4),
    ideas: ["A personal keepsake", "A cheerful bouquet", "A pamper treat"],
  },
  {
    id: "anniversary",
    title: "Anniversary",
    subtitle: "Celebrate your love",
    description: "Mark another year together with a meaningful keepsake or a thoughtful surprise that brings your favourite moments back.",
    image: findImage(["anniversary", "love", "couple"], 5),
    ideas: ["Matching keepsakes", "Romantic jewellery", "A memory box"],
  },
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "For beautiful beginnings",
    description: "Wish the couple a beautiful beginning with an elegant present for their home, their celebration, or a memory they can keep.",
    image: findImage(["bridal", "wedding", "bangles"], 6),
    ideas: ["A home accent", "A bridal keepsake", "A celebration hamper"],
  },
  {
    id: "thank-you",
    title: "Thank You",
    subtitle: "A little gesture, a lot of love",
    description: "Say thank you with a small gesture that feels personal, warm, and just right for the person you appreciate.",
    image: findImage(["thank", "flower", "rose"], 7),
    ideas: ["Fresh floral colours", "A little self-care", "A thoughtful note"],
  },
];
