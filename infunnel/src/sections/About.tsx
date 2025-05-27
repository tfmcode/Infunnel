"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Store, Share2, BarChart2, Layers } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
  {
    title: "Identidad",
    desc: "Construimos marcas coherentes con propósito, estética y tono de voz claros.",
    note: "→ Tu branding como base para todo lo que hacemos.",
    icon: <Lightbulb className="w-6 h-6 text-[#000f3b]" />,
  },
  {
    title: "Tienda Online",
    desc: "Diseñamos experiencias de eCommerce que venden y refuerzan tu marca.",
    note: "→ Cada parte de tu tienda está alineada a tu identidad y conversión.",
    icon: <Store className="w-6 h-6 text-[#000f3b]" />,
  },
  {
    title: "Redes Sociales",
    desc: "Gestionamos tus redes con contenido alineado a tus objetivos y branding.",
    note: "→ Nada se hace porque sí: todo tiene propósito y consistencia.",
    icon: <Share2 className="w-6 h-6 text-[#000f3b]" />,
  },
  {
    title: "Campañas y Datos",
    desc: "Estrategia basada en datos reales, no en intuiciones.",
    note: "→ Análisis, reportes y ajustes continuos para mejorar resultados.",
    icon: <BarChart2 className="w-6 h-6 text-[#000f3b]" />,
  },
  {
    title: "Estrategia Integral",
    desc: "Nada aislado: un sistema que piensa en tu marca como un todo.",
    note: "→ Tu negocio, tu historia y tus objetivos conectados estratégicamente.",
    icon: <Layers className="w-6 h-6 text-[#000f3b]" />,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 lg:px-20 bg-white text-[#000f3b]"
    >
      {/* Título centrado */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
        >
          ¿Por qué elegir INFUNNEL?
        </h2>
      </div>

      {/* Contenido en grid: imagen a la izquierda y acordeón a la derecha */}
      <div className="grid md:grid-cols-[500px_1fr] gap-8 items-start">
        {/* Imagen más fina */}
        <div className="relative w-full h-70 md:h-120 rounded-xl overflow-hidden shadow">
          <Image
            src="/img/hero.png"
            alt="Estrategia y creatividad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#000f3b]/30" />
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          <p className="text-sm md:text-base text-[#000f3b]/80 mb-4">
            Porque hoy ya no alcanza con “alguien que sube posteos” o “alguien
            que arma la tienda”. Eso es operar en partes. INFUNNEL es estrategia
            integral: pensamos todo conectado.
          </p>
          {aboutItems.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#000f3b]/20 rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-[#000f3b]/10 transition-colors"
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
              >
                <p className="mb-2">{item.desc}</p>
                <p className="italic text-xs text-[#000f3b]">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
