"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const navItemsLeft = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "#about" },
];

const navItemsRight = [
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [...navItemsLeft, ...navItemsRight]
        .filter((item) => item.href.startsWith("#"))
        .map((item) => document.querySelector(item.href) as HTMLElement);

      const scrollPos = window.scrollY + 100;
      let currentSection = "";
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isServicioPage = pathname.startsWith("/servicio");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isServicioPage ? "bg-[#1a274f] py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Links a la izquierda */}
        <nav className="hidden md:flex gap-6 text-base font-semibold">
          {navItemsLeft.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${inter.className} transition-colors duration-300 ${
                scrolled || isServicioPage
                  ? "text-white hover:text-[#e0e4f5]"
                  : "text-[#1F0F41] hover:text-[#1a274f]"
              } ${
                activeSection === item.href.slice(1) && "font-bold underline"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Logo centrado */}
        <div className="flex items-center justify-center flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logoIN_navbar.png"
              alt="INFUNNEL Logo"
              width={120}
              height={50}
              className={`object-contain transition-all duration-300 ${
                scrolled || isServicioPage ? "" :"invert" 
              }`}
            />
          </Link>
        </div>

        {/* Links a la derecha */}
        <nav className="hidden md:flex gap-6 text-base font-semibold">
          {navItemsRight.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors duration-300 ${
                scrolled || isServicioPage
                  ? "text-white hover:text-[#e0e4f5]"
                  : "text-[#1F0F41] hover:text-[#1a274f]"
              } ${
                activeSection === item.href.slice(1) && "font-bold underline"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex items-center justify-center p-2 rounded-full transition ${
            scrolled || isServicioPage
              ? "bg-white text-[#1a274f]"
              : "bg-[#e0e4f5] text-[#1a274f] hover:bg-[#e0e4f5]/90"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-[#1a274f] text-white`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {[...navItemsLeft, ...navItemsRight].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors duration-300 hover:text-[#e0e4f5]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
