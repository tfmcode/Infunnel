"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#e0e4f5] text-[#e0e4f5] px-4 py-12">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#000f3b]/90 backdrop-blur-sm border border-white/10 px-6 py-12 shadow-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Marca */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Image
              src="/img/logoF.png"
              alt="INFUNNEL Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <p className="text-xs max-w-[12rem]">
              Estrategia integral para marcas que quieren crecer con coherencia
              y visión.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs uppercase text-gray-300 tracking-wider mb-3 font-semibold">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#branding"
                  className="hover:text-white transition-colors duration-300"
                >
                  Branding Estratégico
                </Link>
              </li>
              <li>
                <Link
                  href="#ecommerce"
                  className="hover:text-white transition-colors duration-300"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="#redes"
                  className="hover:text-white transition-colors duration-300"
                >
                  Redes Sociales
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs uppercase text-gray-300 tracking-wider mb-3 font-semibold">
              Empresa
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  Sobre INFUNNEL
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-xs uppercase text-gray-300 tracking-wider mb-3 font-semibold">
              Recursos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Términos & Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-xs uppercase text-gray-300 tracking-wider mb-3 font-semibold">
              Redes
            </h4>
            <div className="flex gap-4 items-center">
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} INFUNNEL. Todos los derechos reservados.
        </div>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#000f3b] text-white rounded-full p-3 shadow-md hover:scale-105 active:scale-95 transition duration-300 z-50"
          aria-label="Subir al inicio"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
