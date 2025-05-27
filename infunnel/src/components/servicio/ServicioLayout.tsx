import Image from "next/image";
import Link from "next/link";

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
}: ServicioLayoutProps) => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Imagen */}
      <div className="flex justify-center">
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
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
          {titulo}
        </h1>
        <p className="text-base md:text-lg mb-6">{descripcion}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          {lista.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <Link
          href="/#contacto"
          className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          Contactanos
        </Link>
      </div>
    </div>
  </section>
);

export default ServicioLayout;
