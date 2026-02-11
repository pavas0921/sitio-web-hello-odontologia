import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Smile, CheckCircle, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Diseño de sonrisa en Medellín | Carillas y Estética Dental | Hello Odontología",
  description:
    "Diseño de sonrisa en Medellín con enfoque clínico y estético personalizado. Carillas dentales, blanqueamiento y tratamientos estéticos en Hello Odontología.",
  keywords: [
    "diseño de sonrisa Medellín",
    "carillas dentales Medellín",
    "estética dental Medellín",
    "odontología estética Medellín",
    "clínica dental en Medellín",
  ],
  alternates: {
    canonical: "https://tudominio.com/servicios/diseno-sonrisa",
  },
  openGraph: {
    title: "Diseño de sonrisa en Medellín | Hello Odontología",
    description:
      "Mejora la estética de tu sonrisa con un diseño de sonrisa personalizado en Medellín. Atención profesional y resultados naturales.",
    url: "https://tudominio.com/servicios/diseno-sonrisa",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://tudominio.com/beautiful-smile-transformation-before-and-after-co.jpg",
        width: 1200,
        height: 630,
        alt: "Diseño de sonrisa en Medellín - Hello Odontología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño de sonrisa en Medellín | Hello Odontología",
    description:
      "Tratamientos de diseño de sonrisa en Medellín con carillas, blanqueamiento y enfoque clínico personalizado.",
    images: [
      "https://tudominio.com/beautiful-smile-transformation-before-and-after-co.jpg",
    ],
  },
};

export default function DisenoSonrisaPage() {
  const steps = [
    {
      icon: <Stethoscope className="h-6 w-6 text-accent" />,
      title: "Evaluación clínica integral",
      description:
        "Analizamos dientes, encías, mordida y estructura facial para definir el tratamiento estético más adecuado.",
    },
    {
      icon: <Smile className="h-6 w-6 text-accent" />,
      title: "Planificación estética personalizada",
      description:
        "Diseñamos una sonrisa armónica según tus facciones, expectativas y necesidades funcionales.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Tratamiento estético especializado",
      description:
        "Aplicamos procedimientos estéticos con precisión y materiales de alta calidad para resultados naturales.",
    },
  ];

  const includes = [
    "Carillas dentales en porcelana o resina",
    "Blanqueamiento dental profesional",
    "Corrección de forma, tamaño y color dental",
    "Mejora estética con enfoque funcional",
    "Resultados naturales y personalizados",
  ];

  return (
    <>
      {/* Schema SEO Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DentalClinic",
            name: "Hello Odontología",
            url: "https://tudominio.com",
            description:
              "Clínica dental en Medellín especializada en diseño de sonrisa, estética dental y salud oral integral.",
            image:
              "https://tudominio.com/beautiful-smile-transformation-before-and-after-co.jpg",
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
            medicalSpecialty: "CosmeticDentistry",
            availableService: {
              "@type": "MedicalProcedure",
              name: "Diseño de sonrisa",
              description:
                "Tratamiento de odontología estética para mejorar forma, color y proporción dental.",
            },
          }),
        }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent/20 via-background to-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 text-center">
                <Sparkles className="h-8 w-8 text-accent" />
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Diseño de sonrisa en Medellín
                </h1>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed text-pretty text-center">
                En <strong>Hello Odontología</strong> mejoramos la estética de
                tu sonrisa mediante un{" "}
                <strong>diseño de sonrisa personalizado</strong>, basado en
                evaluación clínica, experiencia profesional y un enfoque
                integral en Medellín.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <div
          className="relative rounded-xl shadow-lg mx-auto overflow-hidden"
          style={{
            aspectRatio: "16 / 9", // o la proporción exacta de la imagen
            width: "100vw", // ancho responsivo máximo, o px fijo
            maxWidth: "700px", // para limitar el tamaño máximo
            backgroundImage:
              "url('/beautiful-smile-transformation-before-and-after-co.webp')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* What is */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">
                  ¿Qué es el diseño de sonrisa?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  El diseño de sonrisa es un tratamiento de odontología estética
                  que busca mejorar la forma, color y proporción de los dientes,
                  teniendo en cuenta la armonía facial y la salud oral. En
                  nuestra clínica odontológica en Medellín, cada caso se
                  planifica de forma individual para lograr resultados naturales
                  y funcionales.
                </p>
              </section>

              {/* Steps */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-center">
                  Nuestro proceso de diseño de sonrisa
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {steps.map((step) => (
                    <Card
                      key={step.title}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6 space-y-3 text-center">
                        <div className="flex justify-center">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground text-pretty">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Includes */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold">
                  ¿Qué puede incluir un diseño de sonrisa?
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Agenda tu valoración de diseño de sonrisa
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty max-w-2xl mx-auto">
                    Recibe una evaluación profesional y conoce las opciones
                    estéticas más adecuadas para ti. Atendemos pacientes de
                    Medellín y el Valle de Aburrá.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                        Agendar consulta gratuita
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/servicios/odontologia-estetica">
                        Ver odontología estética
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
