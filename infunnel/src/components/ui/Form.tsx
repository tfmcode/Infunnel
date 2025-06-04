"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const servicios = [
  "Branding Estratégico y Dirección de Comunicación",
  "Diseño, Desarrollo y Gestión de eCommerce",
  "Redes Sociales y Contenido Estratégico",
  "Briefs Estratégicos y Roadmap de Marca",
  "Análisis de Datos y Optimización Estratégica",
  "Publicidad y Performance Marketing",
];

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    servicio: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error");

      toast.success("¡Mensaje enviado con éxito!");
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
        servicio: "",
      });
    } catch {
      toast.error("Hubo un error. Por favor, intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-1">Nombre</label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          type="text"
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#000f3b] transition duration-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="tu@correo.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#000f3b] transition duration-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Servicio</label>
        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#000f3b] transition duration-300"
          required
        >
          <option value="" disabled>
            Seleccioná un servicio
          </option>
          {servicios.map((servicio) => (
            <option key={servicio} value={servicio}>
              {servicio}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Mensaje</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contanos en qué podemos ayudarte"
          className="w-full h-32 rounded-xl border border-gray-300 px-4 py-3 text-[#151515] resize-none focus:outline-none focus:ring-2 focus:ring-[#000f3b] transition duration-300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#000f3b] hover:bg-[#444444] active:scale-95 transition text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default Form;
