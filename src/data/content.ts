import type { HeroContent, CardContent } from "@/types";

export const heroContent: HeroContent = {
  title: "WHAT DOES COOKING MEAN?",
  description: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
  perfectEgg: {
    title: "THE PERFECT EGG",
    description: "Keep water between 67 and 68°C for a flavourful, tender yolk"
  },
  images: {
    main: {
      src: "/images/hero/cooking-pot.jpg",
      alt: "Professional cooking pot with precise temperature control for molecular gastronomy"
    },
    secondary: [
      {
        src: "/images/hero/chef-preparing.jpg",
        alt: "Chef preparing ingredients"
      },
      {
        src: "/images/hero/eggs-preparation.jpg",
        alt: "Perfect eggs preparation"
      }
    ]
  }
};

export const cardContent: CardContent = {
  title: "TASTE THE COLOURS",
  cards: [
    {
      id: 1,
      title: "RED",
      description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
      image: "/images/cards/red-taste.jpg"
    },
    {
      id: 2,
      title: "GREEN",
      description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
      image: "/images/cards/green-taste.png"
    },
    {
      id: 3,
      title: "WHITE",
      description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
      image: "/images/cards/white-taste.png"
    }
  ]
}; 