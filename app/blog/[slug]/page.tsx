import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, User, Tag, ArrowLeft, Share2 } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  description: string;
  content: string;
  date: string;
  author: string;
  keywords: string[];
}

const siteUrl = "https://helloodontologia.com";

const posts: Post[] = [
  {
    slug: "diseno-de-sonrisa-en-medellin",
    title:
      "Diseño de Sonrisa en Medellín: Transforma Tu Sonrisa con Hello Odontología",
    description:
      "Descubre cómo el diseño de sonrisa puede cambiar tu vida en Medellín. Tratamientos personalizados con especialistas certificados.",
    date: "2026-02-05",
    author: "Hello Odontología",
    keywords: [
      "diseño de sonrisa Medellín",
      "odontología estética",
      "sonrisa perfecta",
      "dentista Medellín",
    ],
    content: `
      <h2>¿Qué es el Diseño de Sonrisa?</h2>
      <p>El diseño de sonrisa es un tratamiento personalizado que mejora la apariencia de tus dientes y encías para lograr una sonrisa armónica y natural. En Hello Odontología, nuestros especialistas en Medellín combinan estética, funcionalidad y tecnología avanzada para ofrecer resultados que superan expectativas.</p>

      <h2>Beneficios del Diseño de Sonrisa</h2>
      <ul>
        <li>Mejora tu autoestima y confianza.</li>
        <li>Corrige imperfecciones dentales como manchas, fracturas o dientes desalineados.</li>
        <li>Resultados duraderos y naturales que se adaptan a tu rostro.</li>
      </ul>

      <h2>¿Cómo es el proceso en Hello Odontología?</h2>
      <p>Primero realizamos una evaluación completa, seguida de una planificación digital de tu sonrisa. Luego, aplicamos tratamientos estéticos como carillas, blanqueamientos y ortodoncia para lograr el resultado deseado.</p>

      <h2>Agenda tu cita en Hello Odontología</h2>
      <p>No esperes más para lucir la sonrisa que siempre has soñado. <a href="/contacto" style="color: #0ea5e9; text-decoration: underline;">Contáctanos hoy mismo</a> y descubre nuestro enfoque humano y profesional en Medellín.</p>
    `,
  },
  {
    slug: "beneficios-de-la-ortodoncia",
    title: "Beneficios de la Ortodoncia: Más que una Sonrisa Perfecta",
    description:
      "La ortodoncia mejora tu salud bucal y autoestima. Conoce los tratamientos que ofrecemos en Hello Odontología Medellín.",
    date: "2026-01-20",
    author: "Hello Odontología",
    keywords: [
      "ortodoncia Medellín",
      "salud bucal",
      "tratamientos dentales",
      "dentista Medellín",
    ],
    content: `
      <h2>¿Qué es la Ortodoncia?</h2>
      <p>La ortodoncia es la rama de la odontología que corrige la posición de los dientes y mandíbula para mejorar la función y estética dental.</p>

      <h2>Beneficios de la Ortodoncia</h2>
      <ul>
        <li>Mejora la salud bucal al facilitar la limpieza dental.</li>
        <li>Corrige problemas de mordida y alineación dental.</li>
        <li>Incrementa la confianza con una sonrisa estética y funcional.</li>
      </ul>

      <h2>Tratamientos Disponibles</h2>
      <p>Ofrecemos brackets tradicionales, brackets estéticos y ortodoncia invisible adaptados a tus necesidades.</p>

      <h2>Agenda tu cita en Hello Odontología</h2>
      <p>Consulta con nuestros especialistas y comienza el camino hacia una sonrisa saludable y bonita. <a href="/contacto" style="color: #0ea5e9; text-decoration: underline;">Contáctanos hoy mismo</a>.</p>
    `,
  },
  {
    slug: "implantes-dentales-en-medellin",
    title: "Implantes Dentales en Medellín: Recupera tu Sonrisa y Confianza",
    description:
      "¿Sabías que los implantes dentales son la mejor solución para dientes perdidos? Te explicamos todo en Hello Odontología.",
    date: "2026-01-10",
    author: "Hello Odontología",
    keywords: [
      "implantes dentales Medellín",
      "rehabilitación oral",
      "odontología avanzada",
      "dentista Medellín",
    ],
    content: `
      <h2>¿Qué son los Implantes Dentales?</h2>
      <p>Los implantes dentales son raíces artificiales que se colocan en el hueso maxilar para sostener dientes artificiales, recuperando funcionalidad y estética.</p>

      <h2>Ventajas de los Implantes Dentales</h2>
      <ul>
        <li>Recuperas la función masticatoria como con dientes naturales.</li>
        <li>Previenes la pérdida ósea en la mandíbula.</li>
        <li>Mejoras tu estética y confianza al sonreír.</li>
      </ul>

      <h2>Proceso en Hello Odontología</h2>
      <p>Realizamos un diagnóstico completo, planificación digital y colocación quirúrgica con tecnología avanzada para asegurar éxito y comodidad.</p>

      <h2>Agenda tu cita en Hello Odontología</h2>
      <p>Recupera tu sonrisa y calidad de vida. <a href="/contacto" style="color: #0ea5e9; text-decoration: underline;">Contáctanos hoy mismo</a> y te guiaremos en todo el proceso.</p>
    `,
  },
  {
    slug: "blanqueamiento-dental-profesional",
    title: "Blanqueamiento Dental Profesional: Luz y Brillo para tu Sonrisa",
    description:
      "Logra una sonrisa más blanca y brillante con nuestro blanqueamiento dental profesional en Medellín. Resultados visibles y seguros.",
    date: "2026-01-05",
    author: "Hello Odontología",
    keywords: [
      "blanqueamiento dental Medellín",
      "estética dental",
      "sonrisa blanca",
      "dentista Medellín",
    ],
    content: `
      <h2>¿Qué es el Blanqueamiento Dental Profesional?</h2>
      <p>Es un tratamiento estético que aclara el color de tus dientes, eliminando manchas y decoloraciones para una sonrisa más brillante y saludable.</p>

      <h2>Beneficios del Blanqueamiento</h2>
      <ul>
        <li>Resultados rápidos y visibles desde la primera sesión.</li>
        <li>Tratamiento seguro realizado por especialistas.</li>
        <li>Mejora la confianza al mostrar una sonrisa más luminosa.</li>
      </ul>

      <h2>Procedimiento en Hello Odontología</h2>
      <p>Evaluamos la salud dental, aplicamos gel blanqueador con luz especializada y supervisamos tu progreso para resultados óptimos.</p>

      <h2>Agenda tu cita en Hello Odontología</h2>
      <p>Disfruta de una sonrisa radiante y segura. <a href="/contacto" style="color: #0ea5e9; text-decoration: underline;">Contáctanos para agendar tu cita</a>.</p>
    `,
  },
  {
    slug: "prevencion-y-cuidado-dental",
    title: "Prevención y Cuidado Dental: La Clave para una Sonrisa Saludable",
    description:
      "Conoce la importancia de la prevención y el cuidado diario para mantener tu salud bucal y evitar problemas dentales en Medellín.",
    date: "2026-01-01",
    author: "Hello Odontología",
    keywords: [
      "prevención dental",
      "cuidado bucal",
      "salud oral",
      "dentista Medellín",
    ],
    content: `
      <h2>¿Por qué es importante la prevención dental?</h2>
      <p>La prevención ayuda a evitar enfermedades como caries y gingivitis, manteniendo una boca sana y funcional a largo plazo.</p>

      <h2>Consejos para el cuidado diario</h2>
      <ul>
        <li>Cepíllate los dientes al menos dos veces al día con técnica adecuada.</li>
        <li>Usa hilo dental diariamente para eliminar restos entre dientes.</li>
        <li>Visita al dentista regularmente para revisiones y limpiezas profesionales.</li>
      </ul>

      <h2>Servicios preventivos en Hello Odontología</h2>
      <p>Ofrecemos limpiezas, fluoraciones y evaluaciones periódicas para proteger tu sonrisa y detectar problemas a tiempo.</p>

      <h2>Agenda tu cita en Hello Odontología</h2>
      <p>Invierte en tu salud bucal y calidad de vida. <a href="/contacto" style="color: #0ea5e9; text-decoration: underline;">Contáctanos y reserva tu cita</a>.</p>
    `,
  },
];

// Genera los parámetros para la generación estática de rutas
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Genera metadatos SEO para cada post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Hello Odontología`,
    description: post.description,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Hello Odontología",
      images: [
        {
          url: `${siteUrl}/images/blog/${post.slug}-og.jpg`,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteUrl}/images/blog/${post.slug}-og.jpg`],
    },
  };
}

// Componente para botones de compartir (ahora es un Client Component)
const ShareButtons = () => (
  <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4">
      <button
        className="p-3 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300 group"
        title="Compartir en Facebook"
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
            "_blank",
          )
        }
      >
        <span className="text-lg font-bold text-[#1877F2] group-hover:text-white">
          f
        </span>
      </button>
      <button
        className="p-3 rounded-lg bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300"
        title="Compartir en Twitter"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`,
            "_blank",
          )
        }
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </button>
      <button
        className="p-3 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300"
        title="Copiar enlace"
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href);
          alert("Enlace copiado al portapapeles");
        }}
      >
        <Share2 className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// Componente principal para mostrar el post
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Formatear el contenido HTML con estilos mejorados
  const formattedContent = post.content
    .replace(
      /<h2>/g,
      '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">',
    )
    .replace(
      /<h3>/g,
      '<h3 class="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-3">',
    )
    .replace(/<p>/g, '<p class="text-gray-600 text-lg leading-relaxed mb-6">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6">')
    .replace(/<li>/g, '<li class="text-gray-600 text-lg mb-2 leading-relaxed">')
    .replace(/<a /g, '<a class="text-primary hover:underline font-medium" ');

  return (
    <>
      {/* Hero Header */}
      <header
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #faf5dc 0%, #ecf4ec 100%)",
        }}
      >
        {/* Patrón de fondo sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(241,215,106,0.1) 1px, transparent 1px),
                        radial-gradient(circle at 75% 75%, rgba(241,215,106,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-black">
            <Link
              href="/blog"
              className="inline-flex items-center text-black/70 hover:text-black mb-6 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Volver al blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-yellow-100/50 rounded-full text-sm font-medium text-black/80 backdrop-blur-sm">
                Hello Odontología
              </span>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 bg-yellow-100/30 rounded-lg px-3 py-1 text-black/70 backdrop-blur-sm">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 bg-yellow-100/30 rounded-lg px-3 py-1 text-black/70 backdrop-blur-sm">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black">
              {post.title}
            </h1>

            <p className="text-xl mb-8 max-w-3xl text-black/80">
              {post.description}
            </p>

            {/* Etiquetas con algunas palabras clave en dorado #f1d76a */}
            <div className="flex flex-wrap gap-2">
              {post.keywords.slice(0, 4).map((keyword, i) => {
                const highlight = Math.random() < 0.4; // 40% chance para dorado
                return (
                  <span
                    key={keyword}
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 backdrop-blur-sm ${
                      highlight
                        ? "bg-yellow-200 text-[#f1d76a]"
                        : "bg-yellow-100 text-black/80"
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {keyword}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </header>
      {/* Botones de compartir como Client Component separado */}
      {/* Nota: En un proyecto real, este componente debería tener "use client" al inicio */}
      {/* Por ahora lo comentamos para evitar errores */}
      {/* <ShareButtons /> */}
      {/* Contenido Principal */}
      <main
        className="min-h-screen py-12"
        style={{
          background: "linear-gradient(135deg, #faf5dc 0%, #ecf4ec 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contenido del artículo */}
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Imagen destacada */}
              <div className="h-64 bg-gradient-to-r from-blue-50 via-cyan-50 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 animate-pulse">😁</div>
                    <p className="text-gray-700 font-semibold text-lg">
                      Hello Odontología - Medellín
                    </p>
                    <p className="text-gray-600 mt-2">
                      Cuidamos tu sonrisa con pasión y profesionalismo
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido del post */}
              <div className="p-6 md:p-8 lg:p-12">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: formattedContent }}
                />
              </div>
            </article>

            {/* Llamada a la acción */}
            <div className="mt-12 bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-2xl p-8 text-white text-center shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="max-w-2xl mx-auto">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Listo para transformar tu sonrisa?
                </h3>
                <p className="mb-6 text-white/90 text-lg">
                  Agenda una consulta con nuestros especialistas en Hello
                  Odontología Medellín
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Agendar cita ahora
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
                  >
                    Ver nuestros servicios
                  </Link>
                </div>
              </div>
            </div>

            {/* Posts relacionados */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Artículos relacionados
                </h3>
                <Link
                  href="/blog"
                  className="text-primary hover:underline font-medium flex items-center gap-2"
                >
                  Ver todos
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:border-primary/20"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {relatedPost.keywords[0]}
                      </span>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2 text-lg">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {new Date(relatedPost.date).toLocaleDateString(
                            "es-CO",
                            {
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </span>
                        <span className="text-primary font-semibold group-hover:underline flex items-center gap-1">
                          Leer
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
