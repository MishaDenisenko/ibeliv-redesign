import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} | Family Dentist in Davenport, FL`,
  description:
    "Modern, comfortable family dentistry in Davenport, Florida. General, cosmetic, and technology-forward care with Dr. Omayra Torres. Serving the community since 2011.",
  openGraph: {
    title: site.name,
    description:
      "Personalized dental care in a relaxing studio environment—book your appointment in Davenport, FL.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-stone-900">{children}</body>
    </html>
  );
}
