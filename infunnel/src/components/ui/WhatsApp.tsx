import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Link
      href="https://wa.me/5491180402020?text=¡Hola!%20Estoy%20interesado%20en%20INFUNNEL.%20¿Podemos%20conversar?"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Link>
  );
};

export default WhatsappButton;
