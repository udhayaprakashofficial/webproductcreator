import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Product Creator | Digital marketing and SaaS development",
  description:
    "Strategic digital marketing and SaaS development for businesses that want long-term growth.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${space.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
