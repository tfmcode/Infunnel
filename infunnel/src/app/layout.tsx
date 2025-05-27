// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import WhatsApp from "@/components/ui/WhatsApp";
import Loader from "@/components/ui/Loader";
import Script from "next/script";
// Fuente global profesional
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "INFUNNEL | Estrategia, Branding, eCommerce y Contenido en Argentina",
  description:
    "INFUNNEL ofrece servicios de dirección estratégica, branding, eCommerce, contenido y análisis de datos para marcas en Argentina. Crecemos con coherencia y visión.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords:
    "branding estratégico, eCommerce Argentina, redes sociales, análisis de datos, contenido estratégico, marketing digital, briefs estratégicos",
  authors: [{ name: "INFUNNEL", url: "https://infunnel.com.ar" }],
  creator: "INFUNNEL",
  openGraph: {
    title:
      "INFUNNEL | Estrategia, Branding, eCommerce y Contenido en Argentina",
    description:
      "Estrategia integral para marcas que quieren crecer con coherencia y visión: branding, eCommerce, redes y más.",
    url: "https://infunnel.com.ar",
    siteName: "INFUNNEL",
    images: [
      {
        url: "/img/logoF.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INFUNNEL | Estrategia, Branding y eCommerce",
    description:
      "Dirección estratégica y marketing digital para marcas en Argentina: branding, eCommerce, contenido y más.",
    images: ["/img/logoF.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`bg-white text-[--color-text] font-sans scroll-smooth ${inter.className}`}
        data-theme="white"
      >
        <Navbar />
        <Loader />
        <Toaster position="top-center" />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsApp />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
