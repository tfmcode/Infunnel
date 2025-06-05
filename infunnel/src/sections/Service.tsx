"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import {
  FaLightbulb,
  FaShoppingCart,
  FaBullhorn,
  FaPenNib,
  FaNetworkWired,
} from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";

// Tipografías
import { Playfair_Display, Inter, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaLightbulb className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Branding Estratégico y Dirección de Comunicación",
    slug: "branding",
  },
  {
    icon: <FaShoppingCart className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Diseño, Desarrollo y Gestión de eCommerce",
    slug: "ecommerce",
  },
  {
    icon: <FaNetworkWired  className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Redes Sociales y Contenido Estratégico",
    slug: "redes",
  },
  {
    icon: <FaPenNib className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Briefs Estratégicos y Roadmap de Marca",
    slug: "briefs",
  },
    {
    icon: <FaBullhorn className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Publicidad y Performance Marketing",
    slug: "publicidad",
  },
  {
    icon: <IoAnalyticsSharp className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Analisis de Datos y Optimización de Campañas",
    slug: "analisis",
  },

];

const Page = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

      gsap.from(cardRefs.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 92%" : "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = (slug: string) => {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(`/servicio/${slug}`);
      },
    });
    tl.to(sectionRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`py-20 px-4 sm:px-6 bg-white relative overflow-hidden ${playfair.variable} ${inter.variable} ${lato.variable}`}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Service.png"
          alt="Decoración"
          fill
          className="object-center md:object-cover opacity-25 md:opacity-20 scale-[1.4] md:scale-100"
          priority
        />
      </div>

      {/* Título */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <h2
          className="text-3xl md:text-4xl font-normal text-center text-[#1F0F41] mb-[70px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          NUESTROS SERVICIOS
        </h2>
      </div>

      {/* Grid de servicios: 3x2 */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 max-w-5xl mx-auto justify-items-center">
        {services.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item.slug)}
            ref={(el) => {
              if (el) cardRefs.current[idx] = el;
            }}
            className="flex flex-col items-center justify-center text-center w-60 h-28 sm:w-72 sm:h-32 rounded-full border border-[#1F0F41] shadow-md hover:bg-[#e6e7eb] hover:text-black transition-colors duration-300 cursor-pointer p-4"
            style={{
              letterSpacing: "0.02em",
              fontFamily: "var(--font-inter)",
              lineHeight: "1.3",
            }}
          >
            {item.icon}
            <span className="text-xs sm:text-sm font-semibold px-2">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
