import { notFound } from "next/navigation";
import ServicioLayout from "@/components/servicio/ServicioLayout";

const serviciosData = {
  branding: {
    titulo: "Branding Estratégico y Dirección de Comunicación",
    descripcion:
      "¿Para qué sirve? Para construir una marca coherente, con identidad clara, propósito definido y una estética alineada a sus valores y objetivos comerciales.",
    lista: [
      "Identidad visual, tono de voz, estética y storytelling.",
      "Armado de Brandbook y sistema de marca completo.",
      "Aplicación del branding en todos los canales digitales.",
      "Dirección creativa y validación antes de ejecutar piezas, campañas o contenido.",
    ],
    imagen: "/servicesImg/branding.png",
  },
  ecommerce: {
    titulo: "Diseño, Desarrollo y Gestión de eCommerce",
    descripcion:
      "¿Para qué sirve? Para transformar tu tienda online en una experiencia de marca profesional y optimizada para vender.",
    lista: [
      "Arquitectura estratégica del sitio enfocada en conversión.",
      "Diseño visual alineado a tu branding.",
      "Implementación técnica (Shopify, Tiendanube o WordPress).",
      "Mantenimiento mensual, carga de productos y banners.",
      "Optimización continua con analista dedicado.",
    ],
    imagen: "/servicesImg/ecommerce.png",
  },
  redes: {
    titulo: "Redes Sociales y Contenido Estratégico",
    descripcion:
      "¿Para qué sirve? Para comunicar con coherencia y estrategia en tus redes, generando contenido que conecta con tu audiencia y acompaña tu tienda online.",
    lista: [
      "Branding aplicado a redes y contenido.",
      "Grilla mensual planificada con objetivos.",
      "Diseño de piezas, redacción de textos y ejecución de publicaciones.",
      "Comunicación alineada entre redes y eCommerce.",
      "Reportes mensuales integrados (RRSS + eComm) con propuestas de ajuste.",
    ],
    imagen: "/servicesImg/redes.png",
  },
  briefs: {
    titulo: "Briefs Estratégicos y Roadmap de Marca",
    descripcion:
      "¿Para qué sirve? Para tener una base clara antes de ejecutar. Los briefs permiten alinear visión, objetivos, estética y acciones entre equipos internos o proveedores externos.",
    lista: [
      "Relevamiento de situación actual, objetivos y necesidades.",
      "Brief visual y funcional (para branding, eComm, campañas, etc.).",
      "Documentos diseñados y organizados para ser funcionales y presentables.",
      "Roadmap estratégico de implementación por fases.",
    ],
    imagen: "/servicesImg/brief.png",
  },
  analisis: {
    titulo: "Análisis de Datos y Optimización Estratégica",
    descripcion:
      "¿Para qué sirve? Para tomar decisiones basadas en datos reales y entender el rendimiento de todos tus canales digitales.",
    lista: [
      "Tableros personalizados con las métricas clave de la marca.",
      "Informes mensuales con resultados y evolución de RRSS, eComm, campañas, tráfico y conversión.",
      "Diagnóstico + propuestas de mejora concretas.",
      "Acompañamiento estratégico con analista dedicado.",
    ],
    imagen: "/servicesImg/analisis.png",
  },
  publicidad: {
    titulo: "Publicidad y Performance Marketing",
    descripcion:
      "¿Para qué sirve? Para atraer tráfico calificado, generar conversiones y visibilidad, todo con campañas alineadas a tu marca.",
    lista: [
      "Estrategia publicitaria personalizada.",
      "Segmentación, armado y ejecución de campañas en Meta Ads y Google Ads.",
      "Creatividades alineadas a la identidad visual.",
      "Optimización continua + reportes mensuales claros.",
    ],
    imagen: "/servicesImg/marketing.png",
  },
};

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const servicio = serviciosData[params.slug as keyof typeof serviciosData];

  if (!servicio) return notFound();

  return <ServicioLayout {...servicio} />;
}
