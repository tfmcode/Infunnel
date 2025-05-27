"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Smooth scroll global
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Sección activa
      const sections = navItems
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-[#000f3b] shadow-md transition-colors duration-300 ${
        scrolled ? "bg-[#e0e4f5]/80 backdrop-blur-md" : "bg-[#e0e4f5]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/logoIN.png"
            alt="INFUNNEL Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-[#000f3b]"
                  : "hover:text-[#000f3b]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2 rounded-full bg-[#e0e4f5] hover:bg-[#e0e4f5] hover:text-[#151515] transition-colors duration-300"
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[#151515] text-[#e0e4f5]`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-[#000f3b]"
                    : "hover:text-[#000f3b]"
                }`}
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
