import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Frontend Technical Test (Filta/Orchard)",
  description: "Frontend component showcase",
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
      <body className={`${openSans.variable} antialiased px-8 py-[120px]`}>
        {children}
      </body>
    </html>
  );
}
