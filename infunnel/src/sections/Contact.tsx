"use client";

import Form from "@/components/ui/Form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import CalendlyEmbed from "@/components/ui/CalendyEmbled";
const Contact = () => {
  return (
    <section
      id="contacto"
      className="relative py-24 px-6 lg:px-20 bg-gradient-to-b from-[#e0e4f5] to-white text-[#151515]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto e información */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight"
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            ¿Listo para transformar tu marca? Hablemos.
          </h2>
          <p
            className="text-base md:text-lg text-[#1a1a1a]/80 mb-6"
            style={{ lineHeight: "1.6" }}
          >
            En INFUNNEL creemos que las mejores alianzas empiezan con una
            conversación. Contanos sobre tus metas, desafíos o ideas: estamos
            listos para escucharte y acompañarte estratégicamente.
          </p>

          {/* Datos de contacto */}
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#000f3b]" />
              <span>+54 11 1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#000f3b]" />
              <span>contacto@infunnel.com.ar</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-[#000f3b]" />
              <span>@infunnel</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-[#000f3b]" />
              <span>INFUNNEL</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8">
          <Form />
        </div>
      </div>

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
    </section>
  );
};

export default Contact;
