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
  FaChartLine,
  FaBullseye,
  FaPaintBrush,
  FaCamera,
} from "react-icons/fa";

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
    icon: <FaBullhorn className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Redes Sociales y Contenido Estratégico",
    slug: "redes",
  },
  {
    icon: <FaPenNib className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Briefs Estratégicos y Roadmap de Marca",
    slug: "briefs",
  },
  {
    icon: <FaChartLine className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Análisis de Datos y Optimización Estratégica",
    slug: "analisis",
  },
  {
    icon: <FaBullseye className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Publicidad y Performance Marketing",
    slug: "publicidad",
  },
  {
    icon: <FaPaintBrush className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Diseño Digital",
    slug: "diseno",
  },
  {
    icon: <FaCamera className="text-3xl mb-2 text-[#1F0F41]" />,
    title: "Fotografía Profesional",
    slug: "fotografia",
  },
];

const Page = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      className="py-30 px-6 bg-white relative overflow-hidden"
    >
      {/* Fondo de imagen con transparencia */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Service.png"
          alt="Decoración"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F0F41] mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-sm md:text-base text-[#1F0F41]/80">
          Potenciamos tu negocio con estrategia, branding, eCommerce, contenido
          y análisis de datos.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
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
              fontFamily: "'Helvetica Neue', sans-serif",
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
