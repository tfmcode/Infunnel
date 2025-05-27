"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        defaults: { ease: "power2.out", duration: 1.5 },
      });

      tl.from(titleRef.current, { y: 80, opacity: 0, scale: 0.95 })
        .from(paragraphRef.current, { y: 60, opacity: 0 }, "-=1.2")
        .from(buttonRef.current, { y: 60, opacity: 0, scale: 0.95 }, "-=1.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-start text-left px-6 py-32 min-h-screen overflow-hidden"
    >
      {/* Fondo de pantalla completo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hero1.png" // reemplazalo con tu imagen real
          alt="Fondo hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay sutil */}
      </div>

      {/* Contenido */}
      <div className="max-w-2xl text-white">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow"
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Estrategia integral, no piezas aisladas.
        </h1>

        <p
          ref={paragraphRef}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light drop-shadow"
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            lineHeight: "1.6",
          }}
        >
          Somos INFUNNEL: potenciamos tu marca con dirección estratégica,
          branding, eCommerce, contenido y análisis de datos.
        </p>

        <div ref={buttonRef} className="mt-10">
          <a
            href="#contacto"
            className="inline-block bg-[#000f3b] hover:bg-[#000f3b] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            style={{
              letterSpacing: "0.05em",
            }}
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
