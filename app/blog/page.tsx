import Link from "next/link";
import { Metadata } from "next";

const posts = [
  {
    slug: "diseno-de-sonrisa-en-medellin",
    title: "Diseño de Sonrisa en Medellín: Transforma tu Sonrisa con Expertos",
    excerpt:
      "Descubre cómo el diseño de sonrisa puede cambiar tu vida en Hello Odontología. Tecnología avanzada y especialistas en Medellín.",
    date: "2026-02-06",
    category: "Estética Dental",
  },
  {
    slug: "beneficios-de-la-ortodoncia",
    title: "Beneficios de la Ortodoncia: Más que una Sonrisa Perfecta",
    excerpt:
      "La ortodoncia mejora tu salud bucal y autoestima. Conoce los tratamientos que ofrecemos en Hello Odontología Medellín.",
    date: "2026-01-20",
    category: "Ortodoncia",
  },
  {
    slug: "implantes-dentales-en-medellin",
    title: "Implantes Dentales en Medellín: Recupera tu Sonrisa y Confianza",
    excerpt:
      "¿Sabías que los implantes dentales son la mejor solución para dientes perdidos? Te explicamos todo en Hello Odontología.",
    date: "2026-01-10",
    category: "Implantes",
  },
  {
    slug: "blanqueamiento-dental-profesional",
    title: "Blanqueamiento Dental Profesional: Luz y Brillo para tu Sonrisa",
    excerpt:
      "Logra una sonrisa más blanca y brillante con nuestro blanqueamiento dental profesional en Medellín. Resultados visibles y seguros.",
    date: "2026-01-05",
    category: "Estética Dental",
  },
  {
    slug: "prevencion-y-cuidado-dental",
    title: "Prevención y Cuidado Dental: La Clave para una Sonrisa Saludable",
    excerpt:
      "Conoce la importancia de la prevención y el cuidado diario para mantener tu salud bucal y evitar problemas dentales en Medellín.",
    date: "2026-01-01",
    category: "Prevención",
  },
];

// Metadata para SEO en Next.js 13+ app router
export const metadata: Metadata = {
  title:
    "Blog de Hello Odontología | Consejos y tratamientos dentales en Medellín",
  description:
    "Lee los mejores consejos, tratamientos y novedades para cuidar tu salud bucal en Medellín con Hello Odontología.",
  keywords: [
    "blog odontología Medellín",
    "salud bucal",
    "tratamientos dentales",
    "odontología estética",
    "ortodoncia",
    "implantes dentales",
  ],
  openGraph: {
    title: "Blog de Hello Odontología",
    description:
      "Consejos, tratamientos y novedades para cuidar tu salud bucal en Medellín.",
    url: "https://helloodontologia.com/blog",
    siteName: "Hello Odontología",
    images: [
      {
        url: "https://helloodontologia.com/images/blog/cover-og.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Hello Odontología",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Hello Odontología",
    description:
      "Consejos, tratamientos y novedades para cuidar tu salud bucal en Medellín.",
    images: ["https://helloodontologia.com/images/blog/cover-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://helloodontologia.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main
      className="min-h-screen py-12 md:py-20"
      style={{
        background: "linear-gradient(135deg, #faf5dc 0%, #ecf4ec 100%)",
      }}
    >
      {/* Asumí bg-[#f9fafb] para fondo claro similar a tailwind gray-50, cambia si quieres */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Blog de Hello Odontología
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consejos, tratamientos y novedades para cuidar tu salud bucal en
            Medellín
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {posts.map(({ slug, title, excerpt, date, category }) => (
            <article
              key={slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-5 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {category}
                  </span>
                  <time dateTime={date} className="text-sm text-gray-500">
                    {new Date(date).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-primary transition-colors duration-200"
                    title={title}
                    aria-label={`Leer artículo: ${title}`}
                  >
                    {title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
              </div>

              <div className="mt-auto p-5 pt-3 border-t border-gray-100">
                <Link
                  href={`/blog/${slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-200 group"
                  aria-label={`Leer más sobre ${title}`}
                >
                  Leer artículo completo
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            ¿Tienes preguntas sobre algún tratamiento?{" "}
            <Link
              href="/contacto"
              className="text-primary font-semibold hover:underline"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
