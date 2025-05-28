"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServicioLayoutProps {
  titulo: string;
  descripcion: string;
  lista: string[];
  imagen: string;
}

const ServicioLayout = ({
  titulo,
  descripcion,
  lista,
  imagen,
}: ServicioLayoutProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
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
      className="pt-28 py-12 px-4 max-w-6xl mx-auto flex flex-col items-center gap-12"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Imagen */}
        <div ref={imageRef} className="flex justify-center">
          <div className="relative w-full max-w-md h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imagen}
              alt={titulo}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Texto */}
        <div
          ref={textRef}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F0F41]">
            {titulo}
          </h1>
          <p className="text-base md:text-lg mb-4">{descripcion}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4 text-left">
            {lista.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            className="inline-block bg-[#1F0F41] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0f162b] transition"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicioLayout;
