import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import StructuredData from "@/components/structured-data";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lamarje Investments | Diversified African Investment Group",
    template: "%s | Lamarje Investments",
  },
  description:
    "Lamarje Investments (Pty) Ltd is a diversified company established in 2010 with expertise in Consulting, Supply Chain, Trading, Infrastructure Development, and Financing across Africa.",
  keywords: [
    "Lamarje Investments",
    "African investment",
    "infrastructure development",
    "supply chain",
    "consulting",
    "trading",
    "financing",
    "South Africa",
    "DRC",
    "Congo",
    "Angola",
    "Uganda",
    "Central African Republic",
  ],
  metadataBase: new URL("https://lamarje.com"),
  openGraph: {
    title: "Lamarje Investments | Diversified African Investment Group",
    description:
      "Diversified company with competencies in Consulting, Supply Chain, Trading, Infrastructure Development and Financing across Africa.",
    url: "https://lamarje.com",
    siteName: "Lamarje Investments",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamarje Investments",
    description:
      "Diversified African investment group with expertise in consulting, supply chain, infrastructure, trading and financing.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://lamarje.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
