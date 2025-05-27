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
    imagen: "/img/branding.jpg",
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
    imagen: "/img/ecommerce.jpg",
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
    imagen: "/img/redes.jpg",
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
    imagen: "/img/briefs.jpg",
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
    imagen: "/img/analisis.jpg",
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
    imagen: "/img/publicidad.jpg",
  },
  diseno: {
    titulo: "Diseño Digital",
    descripcion:
      "¿Para qué sirve? Para asegurar que toda tu comunicación visual —en redes, eComm, campañas— se vea profesional, coherente y alineada a tu identidad.",
    lista: [
      "Diseño de piezas gráficas mensuales (banners, flyers, carruseles, visuales de campañas).",
      "Adaptaciones para diferentes plataformas (RRSS, web, email, tienda).",
      "Coordinación visual con branding y dirección creativa.",
    ],
    imagen: "/img/diseno.jpg",
  },
  fotografia: {
    titulo: "Fotografía Profesional",
    descripcion:
      "¿Para qué sirve? Para crear contenido visual de alto impacto que potencie tu identidad de marca en redes, campañas y tienda online.",
    lista: [
      "Producción de sesiones fotográficas de producto, lifestyle o institucionales.",
      "Dirección de arte alineada a tu branding.",
      "Edición y retoque profesional para distintos formatos y plataformas.",
    ],
    imagen: "/img/fotografia.jpg",
  },
};

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const servicio = serviciosData[params.slug as keyof typeof serviciosData];

  if (!servicio) {
    notFound();
  }

  return <ServicioLayout {...servicio} />;
}
