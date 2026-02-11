import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import ImageCarousel from "@/components/ui/image-carousel";

export const metadata: Metadata = {
  title: "Odontología Estética en Medellín | Hello Odontología",
  description:
    "Odontología estética en Medellín con especialistas certificados. Blanqueamiento dental, carillas, restauraciones estéticas y tratamientos personalizados. Agenda tu valoración.",
  keywords: [
    "odontología estética Medellín",
    "blanqueamiento dental Medellín",
    "carillas dentales Medellín",
    "clínica odontológica Medellín",
    "estética dental Medellín",
  ],
  alternates: {
    canonical: "https://www.helloodontologia.com/odontologia-estetica",
  },
  openGraph: {
    title: "Odontología Estética en Medellín | Hello Odontología",
    description:
      "Mejora la estética de tu sonrisa con tratamientos personalizados en Hello Odontología Medellín.",
    url: "https://www.helloodontologia.com/odontologia-estetica",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/beautiful-smile-transformation-before-and-after-co.jpg",
        width: 1200,
        height: 630,
        alt: "Odontología estética en Medellín - Hello Odontología",
      },
    ],
  },
};

// Array de imágenes para el carrusel
const carouselImages = [
  {
    src: "/beautiful-smile-transformation-before-and-after-co.webp",
    alt: "Blanqueamiento dental profesional - Hello Odontología Medellín",
    title: "Diseño de Sonrisa natural",
    description: "Sonrisa perfecta y natural",
  },
  {
    src: "/clinica-diseno-sonrisa-medellin.webp",
    alt: "Clínica especializada en diseño de sonrisa en Medellín - Hello Odontología",
    title: "Clínica de Diseño de Sonrisa en Medellín",
    description:
      "Especialistas en diseño de sonrisa en Medellín con tecnología avanzada y resultados naturales.",
  },
  {
    src: "/diseno-sonrisa-helloodontologia-medellin.webp",
    alt: "Diseño de sonrisa en Medellín realizado en Hello Odontología",
    title: "Diseño de Sonrisa en Medellín - Hello Odontología",
    description:
      "Transformamos tu sonrisa con carillas, estética dental y planificación digital personalizada.",
  },
  {
    src: "/diseno-sonrisa-medellin.webp",
    alt: "Antes y después de diseño de sonrisa en Medellín",
    title: "Resultados de Diseño de Sonrisa en Medellín",
    description:
      "Casos reales de pacientes con diseño de sonrisa en Medellín. Resultados naturales y armónicos.",
  },

  // {
  //   src: "/images/odontologia-estetica-5.jpg",
  //   alt: "Antes y después odontología estética - Hello Odontología Medellín",
  //   title: "Transformación Completa",
  //   description: "Resultados reales de nuestros pacientes",
  // },
];

export default function OdontologiaEsteticaPage() {
  const treatments = [
    {
      title: "Blanqueamiento Dental",
      description:
        "Aclara tus dientes varios tonos con tratamientos profesionales seguros y efectivos.",
    },
    {
      title: "Carillas Dentales",
      description:
        "Transforma tu sonrisa con carillas de porcelana o composite ultradelgadas.",
    },
    {
      title: "Diseño de Sonrisa",
      description:
        "Planificación estética integral para mejorar forma, color y proporción dental.",
    },
    {
      title: "Restauraciones Estéticas",
      description:
        "Reparaciones invisibles que devuelven funcionalidad y belleza a tus dientes.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/20 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Odontología Estética en Medellín
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              En <strong>Hello Odontología</strong> ofrecemos tratamientos de
              odontología estética en Medellín enfocados en mejorar la armonía,
              salud y belleza de tu sonrisa con un enfoque profesional y
              personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ImageCarousel
              images={carouselImages}
              autoPlay={true}
              autoPlayInterval={5000} // Cambia cada 5 segundos
              showArrows={true}
              showDots={true}
              className="rounded-xl shadow-2xl overflow-hidden"
              imageClassName="aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Treatments */}
            <section className="space-y-6 text-center">
              <h2 className="text-3xl font-bold">
                Tratamientos de odontología estética
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Cada sonrisa es única. Evaluamos tu caso de forma individual
                para recomendar el tratamiento estético más adecuado según tus
                objetivos y necesidades clínicas.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-8 text-left">
                {treatments.map((treatment) => (
                  <Card
                    key={treatment.title}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold">
                        {treatment.title}
                      </h3>
                      <p className="text-muted-foreground text-pretty">
                        {treatment.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Interlinking SEO */}
            <section className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold">
                Tratamientos que complementan tu sonrisa
              </h2>
              <p className="text-muted-foreground text-pretty">
                Muchos tratamientos estéticos se combinan con otros
                procedimientos para lograr resultados duraderos y funcionales.
              </p>
              <p className="text-muted-foreground">
                Conoce nuestros tratamientos de{" "}
                <Link
                  href="servicios/ortodoncia"
                  className="text-accent font-medium underline"
                >
                  ortodoncia en Medellín
                </Link>{" "}
                o complementa tu atención con{" "}
                <Link
                  href="servicios/odontologia-general"
                  className="text-accent font-medium underline"
                >
                  odontología general
                </Link>
                .
              </p>
            </section>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Odontología estética en Medellín: valoración personalizada
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty max-w-2xl mx-auto">
                  El costo de los tratamientos de odontología estética depende
                  de cada caso. En Hello Odontología realizamos una valoración
                  profesional para definir el tratamiento ideal según tus
                  objetivos, presupuesto y salud oral.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                    Agendar valoración
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Hello Odontología",
            url: "https://www.helloodontologia.com/odontologia-estetica",
            image:
              "https://www.helloodontologia.com/beautiful-smile-transformation-before-and-after-co.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Medellín",
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            areaServed: {
              "@type": "City",
              name: "Medellín",
            },
            medicalSpecialty: "Cosmetic Dentistry",
          }),
        }}
      />
    </main>
  );
}
