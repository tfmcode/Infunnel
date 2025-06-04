import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const mensaje = encodeURIComponent(`¡Hola! 😊
Me interesa saber más sobre sus servicios. Les dejo mis datos:

Nombre:
Rubro/sector:
Servicios que me interesan:
Alguna consulta/comentario:`);

  return (
    <Link
      href={`https://wa.me/5491180402020?text=${mensaje}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default WhatsappButton;
