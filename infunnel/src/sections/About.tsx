"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Store, Share2, BarChart2, Layers } from "lucide-react";
import Image from "next/image";

// 📝 Playfair Display para títulos
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

const aboutItems = [
  {
    title: "Identidad",
    desc: "Construimos marcas coherentes con propósito, estética y tono de voz claros.",
    note: "→ Tu branding como base para todo lo que hacemos.",
    icon: <Lightbulb className="w-6 h-6 text-[#1a274f]" />,
  },
  {
    title: "Tienda Online",
    desc: "Diseñamos experiencias de eCommerce que venden y refuerzan tu marca.",
    note: "→ Cada parte de tu tienda está alineada a tu identidad y conversión.",
    icon: <Store className="w-6 h-6 text-[#1a274f]" />,
  },
  {
    title: "Redes Sociales",
    desc: "Gestionamos tus redes con contenido alineado a tus objetivos y branding.",
    note: "→ Nada se hace porque sí: todo tiene propósito y consistencia.",
    icon: <Share2 className="w-6 h-6 text-[#1a274f]" />,
  },
  {
    title: "Campañas y Datos",
    desc: "Estrategia basada en datos reales, no en intuiciones.",
    note: "→ Análisis, reportes y ajustes continuos para mejorar resultados.",
    icon: <BarChart2 className="w-6 h-6 text-[#1a274f]" />,
  },
  {
    title: "Estrategia Integral",
    desc: "Nada aislado: un sistema que piensa en tu marca como un todo.",
    note: "→ Tu negocio, tu historia y tus objetivos conectados estratégicamente.",
    icon: <Layers className="w-6 h-6 text-[#1a274f]" />,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative pt-10 pb-10 px-6 lg:px-20 bg-gradient-to-b from-[#e0e4f5] to-white text-black overflow-hidden ${playfair.variable} ${inter.variable} ${lato.variable}`}
    >
      {/* Título a la izquierda */}
      <div className="mb-12 text-left">
        <h2
          className="text-3xl md:text-4xl font-normal tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ¿Por qué elegir{" "}
          <span className="text-[#1a274f] font-semibold">INFUNNEL</span>?
        </h2>
      </div>

      {/* Contenido */}
      <div
        ref={contentRef}
        className="grid md:grid-cols-[500px_1fr] gap-8 items-start"
      >
        {/* Imagen */}
        <div className="relative w-full h-72 md:h-[500px] rounded-xl overflow-hidden shadow">
          <Image
            src="/img/About.png"
            alt="Estrategia y creatividad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a274f]/30" />
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          <p
            className="text-sm md:text-base text-black/90 mb-4"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Porque hoy ya no alcanza con “alguien que sube posteos” o “alguien
            que arma la tienda”. Eso es operar en partes.{" "}
            <span className="text-[#1a274f] font-semibold">INFUNNEL</span> es
            estrategia integral: pensamos todo conectado.
          </p>

          {aboutItems.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              className="bg-white text-[#1a1a1a] border border-black rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-[#1a274f] hover:bg-[#1a274f]/10 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <span>{activeIndex === idx ? "−" : "+"}</span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === idx ? "max-h-40 p-4" : "max-h-0"
                } bg-white text-sm text-[#1a1a1a]/80`}
                style={{ fontFamily: "var(--font-lato)" }}
              >
                <p className="mb-2">{item.desc}</p>
                <p className="italic text-xs text-[#1a274f]">{item.note}</p>
              </div>
            </div>
          ))}

          {/* Frase final */}
        </div>
      </div>
      <p
        className="mt-8 text-sm md:text-base text-center  font-medium text-[#1a1a1a]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        No ofrecemos soluciones aisladas: te brindamos un sistema que piensa en
        tu marca como un todo.
      </p>
    </section>
  );
};

export default About;
