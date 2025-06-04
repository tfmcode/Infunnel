"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

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

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

      // Fondo cambia de blanco a violeta al hacer scroll
      gsap.fromTo(
        sectionRef.current,
        { background: "white" },
        {
          background: "#e0e4f5",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Entrada del section (fade + up)
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? "top 92%" : "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Entrada del contenido
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: isMobile ? "top 94%" : "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Rotación continua de la imagen
      gsap.to(imageRef.current, {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative pt-[128px] pb-[80px] sm:pt-20 sm:pb-32 px-6 sm:px-10 lg:px-20 text-[#151515] overflow-hidden ${playfair.variable} ${inter.variable} ${lato.variable}`}
    >
      {/* Título */}
      <h1
        className="relative z-20 text-center text-3xl sm:text-4xl md:text-6xl font-normal tracking-tight text-[#1F0F41] leading-tight"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        ESTRATEGIA INTEGRAL,
        <br />
        NO PIEZAS AISLADAS.
      </h1>

      {/* Contenido */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center mt-10"
      >
        {/* Lado izquierdo: texto */}
        <div
          style={{ padding: "32px" }}
          className="relative z-10 pt-[45px] sm:pt-0 px-4 sm:px-6 lg:px-0 py-8 flex flex-col gap-4 text-[#1F0F41] max-w-md text-center lg:text-left"
        >
          {/* Líneas decorativas solo en desktop */}
          <span className="hidden lg:block absolute top-0 left-0 w-16 h-0.5 bg-[#1F0F41]" />
          <span className="hidden lg:block absolute top-0 left-0 w-0.5 h-16 bg-[#1F0F41]" />
          <span className="hidden lg:block absolute bottom-0 right-0 w-16 h-0.5 bg-[#1F0F41]" />
          <span className="hidden lg:block absolute bottom-0 right-0 w-0.5 h-16 bg-[#1F0F41]" />

          <h3
            className="uppercase font-bold tracking-widest text-[#1a274f]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Somos INFUNNEL
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed text-black"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Potenciamos tu marca con dirección estratégica, branding, eCommerce,
            contenido y análisis de datos.
          </p>
          <Link
            href="#contacto"
            className="inline-block border border-[#1F0F41] text-[#1F0F41] px-6 py-2 rounded-full font-medium hover:bg-[#1F0F41] hover:text-white transition"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Comenzar
          </Link>
        </div>

        {/* Imagen */}
        <div
          ref={imageRef}
          className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[500px] flex justify-center lg:justify-end"
        >
          <Image
            src="/img/HeroSection.png"
            alt="Decoración Hero"
            fill
            className="object-contain object-center lg:object-right scale-[1.4] sm:scale-[1.6] lg:scale-[2] z-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
