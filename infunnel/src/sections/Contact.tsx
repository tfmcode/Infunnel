"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Form from "@/components/ui/Form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import CalendlyEmbed from "@/components/ui/CalendyEmbled";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    <>
      <section
        ref={sectionRef}
        id="contacto"
        className="relative pt-20 pb-32 px-6 lg:px-20 bg-gradient-to-b from-[#e0e4f5] to-white text-[#151515] overflow-hidden"
      >
        {/* Título grande, por encima de la imagen */}
        <h2
          className="relative z-20 text-5xl md:text-6xl font-extrabold mb-12 tracking-tight text-left text-[#1F0F41]"
          style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
        >
          ¿LISTO PARA TRANSFORMAR TU MARCA?
        </h2>

        {/* Contenedor principal */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Lado izquierdo con imagen de fondo y texto */}
          <div className="relative flex justify-center items-center">
            {/* Imagen de fondo, centrada y tamaño personalizado */}
            <Image
              src="/img/Footer.png"
              alt="Decoración Footer"
              fill
              className="absolute inset-0 object-cover object-center z-0 scale-[2.15]"
              priority
            />

            {/* Texto montado con capa más transparente */}
            <div className="relative z-10 p-6 bg-black/30 rounded-xl backdrop-blur-sm text-white max-w-md text-center">
              <p
                className="text-base md:text-lg mb-4"
                style={{ lineHeight: "1.6" }}
              >
                En INFUNNEL creemos que las mejores alianzas empiezan con una
                conversación. Contanos sobre tus metas, desafíos o ideas:
                estamos listos para escucharte y acompañarte estratégicamente.
              </p>

              <div className="space-y-2 text-sm md:text-base">
                <div className="flex justify-center items-center gap-2">
                  <FaPhoneAlt />
                  <span>+54 11 1234-5678</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaEnvelope />
                  <span>contacto@infunnel.com.ar</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaInstagram />
                  <span>@infunnel</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaLinkedin />
                  <span>INFUNNEL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario a la derecha */}
          <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 relative z-10">
            <Form />
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section id="agenda" className="py-20 bg-[var(--color-light-1)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-4">
            Agendá una llamada
          </h2>
          <p className="text-center text-base text-gray-600 mb-8">
            Elegí el día y horario que mejor te convenga. ¡Estamos ansiosos por
            conocerte!
          </p>

          <CalendlyEmbed />
        </div>
      </section>
    </>
  );
};

export default Contact;
