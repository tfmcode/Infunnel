"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    icon: <FaLightbulb className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Branding Estratégico y Dirección de Comunicación",
  },
  {
    icon: <FaShoppingCart className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Diseño, Desarrollo y Gestión de eCommerce",
  },
  {
    icon: <FaBullhorn className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Redes Sociales y Contenido Estratégico",
  },
  {
    icon: <FaPenNib className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Briefs Estratégicos y Roadmap de Marca",
  },
  {
    icon: <FaChartLine className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Análisis de Datos y Optimización Estratégica",
  },
  {
    icon: <FaBullseye className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Publicidad y Performance Marketing",
  },
  {
    icon: <FaPaintBrush className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Diseño Digital",
  },
  {
    icon: <FaCamera className="text-3xl mb-2 text-[#000f3b]" />,
    title: "Fotografía Profesional",
  },
];

const Page = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#000f3b] mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-sm md:text-base text-[#000f3b]/80">
          Potenciamos tu negocio con estrategia, branding, eCommerce, contenido
          y análisis de datos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center w-60 h-28 sm:w-72 sm:h-32 rounded-full border border-[#000f3b] shadow-md hover:bg-[#000f3b] hover:text-white transition-colors duration-300 cursor-pointer p-4"
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
