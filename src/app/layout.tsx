import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  description:
    "Explore the science of cooking with Hervé This, the father of molecular gastronomy. Learn about temperature control, flavor development, and the perfect egg technique.",
  keywords: [
    "molecular gastronomy",
    "cooking science",
    "Hervé This",
    "perfect egg",
    "cooking temperature",
    "food science",
  ],
  authors: [{ name: "Juan Rozo" }],
  openGraph: {
    title: "Cooking Experience | Molecular Gastronomy",
    description:
      "Discover the secrets of molecular gastronomy and perfect cooking techniques",
    images: [
      {
        url: "/images/hero/cooking-pot.jpg",
        width: 1200,
        height: 630,
        alt: "Cooking Experience Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooking Experience | Molecular Gastronomy",
    description:
      "Discover the secrets of molecular gastronomy and perfect cooking techniques",
    images: ["/images/hero/cooking-pot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#0E1414",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://tasteology.vercel.app/" rel="canonical" />
      </head>
      <body className={`${openSans.variable} antialiased px-8 py-[120px]`}>
        {children}
      </body>
    </html>
  );
}
