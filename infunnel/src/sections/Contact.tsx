"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Form from "@/components/ui/Form";
import { FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";
import CalendlyEmbed from "@/components/ui/CalendyEmbled";

// 📝 Integramos las fuentes de Google Fonts
import { Poppins, Inter, Lato } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
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

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

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
            start: isMobile ? "top 90%" : "top 80%", // 👈 ajustado para mobile
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
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: isMobile ? "top 92%" : "top 80%", // 👈 más sensible en mobile
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
        className={`relative pt-20 px-6 lg:px-20 bg-gradient-to-b from-[#e0e4f5] to-white text-[#151515] overflow-hidden ${poppins.variable} ${inter.variable} ${lato.variable}`}
      >
        <h2
          className="relative z-20 text-5xl md:text-6xl font-extrabold mb-12 tracking-tight text-left text-[#1F0F41]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          ¿LISTO PARA TRANSFORMAR TU MARCA?
        </h2>

        <div
          ref={contentRef}
          data-mobile-flex
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          style={{
            transform: "translate(0px, 0px)",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* Lado izquierdo con imagen de fondo y texto */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/img/Contact.png"
              alt="Decoración Footer"
              fill
              className="absolute inset-0 object-cover object-center z-0 scale-[2.5]"
              priority
            />

            <div
              className="relative z-10 p-6 bg-black/30 rounded-xl backdrop-blur-sm text-white max-w-md text-center"
              style={{ fontFamily: "var(--font-lato)" }}
            >
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
                  <span>+54 9 11 8040‑2020</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaEnvelope />
                  <span>contacto@infunnel.com.ar</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaRegClock />
                  <span>Lunes - Viernes 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario a la derecha */}
          <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8 relative z-10">
            <Form />
          </div>
        </div>

        {/* Estilos mobile embebidos */}
        <style>
          {`
            @media (max-width: 639px) {
              [data-mobile-flex] {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: space-around !important;
              }

              img[alt="Decoración Footer"] {
                position: absolute !important;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100% !important;
                height: 100% !important;
                padding-top: 35px !important;
              }
            }
          `}
        </style>
        {/* Calendly Embed */}
        <section id="agenda" className="py-20 bg-[var(--color-light-1)]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2
              className="text-3xl font-bold text-[var(--color-primary)] mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              AGENDA UNA LLAMADA
            </h2>
            <p
              className="text-base text-gray-600 mb-8"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Elegí el día y horario que mejor te convenga. ¡Estamos ansiosos
              por conocerte!
            </p>

            <CalendlyEmbed />
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
