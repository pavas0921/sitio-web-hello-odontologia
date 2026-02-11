import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Smile } from "lucide-react";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Odontopediatría en Medellín | Hello Odontología",
  description:
    "Odontopediatría en Medellín con atención especializada para niños. Prevención, tratamiento y educación dental infantil en Hello Odontología.",
  keywords: [
    "odontopediatría Medellín",
    "odontólogo infantil Medellín",
    "dentista para niños Medellín",
    "salud dental infantil",
    "Hello Odontología",
  ],
  alternates: {
    canonical: "https://helloodontologia.com/odontopediatria",
  },
  openGraph: {
    title: "Odontopediatría en Medellín | Hello Odontología",
    description:
      "Cuidado dental infantil en Medellín en un ambiente cálido y seguro. Odontopediatría especializada en Hello Odontología.",
    url: "https://helloodontologia.com/odontopediatria",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://helloodontologia.com/happy-child-at-dentist-smiling-with-pediatric-dent.jpg",
        width: 1200,
        height: 630,
        alt: "Odontopediatría en Medellín - Hello Odontología",
      },
    ],
  },
};

/* =========================
   PAGE
========================= */
export default function OdontopediatriaPage() {
  const services = [
    "Exámenes y limpiezas infantiles",
    "Aplicación de flúor",
    "Selladores de fosas y fisuras",
    "Tratamiento de caries en dientes de leche",
    "Educación en higiene oral para niños",
    "Manejo de la ansiedad dental infantil",
  ];

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-primary/30 via-background to-accent/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 mb-6 text-center">
              <Heart className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Odontopediatría en Medellín
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              En <strong>Hello Odontología</strong> ofrecemos odontopediatría en
              Medellín enfocada en el cuidado, prevención y bienestar dental de
              niños y niñas desde temprana edad.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/happy-child-at-dentist-smiling-with-pediatric-dent.jpg"
                  alt="Odontopediatría en Medellín - Hello Odontología"
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Atención Dental Infantil Especializada
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  Sabemos que la visita al dentista puede generar temor en los
                  niños. Por eso creamos un ambiente amigable, tranquilo y
                  adaptado a cada etapa de su crecimiento.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Nuestro equipo está capacitado en odontología pediátrica y
                  utiliza técnicas de manejo conductual que convierten cada cita
                  en una experiencia positiva.
                </p>
              </div>
            </div>

            <Card className="bg-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Smile className="h-6 w-6" />
                  Servicios de Odontopediatría
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">🎈</div>
                  <h3 className="font-semibold">Ambiente Amigable</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Espacios pensados para que los niños se sientan tranquilos y
                    felices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">👩‍⚕️</div>
                  <h3 className="font-semibold">Especialistas Infantiles</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Profesionales con formación específica en odontología
                    pediátrica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">🌟</div>
                  <h3 className="font-semibold">Experiencias Positivas</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Fomentamos una relación saludable con el cuidado dental
                    desde pequeños.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Consejos para Padres
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-pretty">
                    <strong>Primera visita:</strong> Se recomienda cuando
                    aparece el primer diente o antes del primer año de edad.
                  </p>
                  <p className="text-pretty">
                    <strong>Preparación en casa:</strong> Habla del dentista de
                    forma positiva y evita palabras que generen miedo.
                  </p>
                  <p className="text-pretty">
                    <strong>Hábitos saludables:</strong> Una buena higiene oral
                    desde pequeños previene problemas futuros.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                  Agendar Consulta Infantil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCHEMA LOCAL ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Hello Odontología",
            url: "https://helloodontologia.com",
            logo: "https://helloodontologia.com/logo.png",
            image:
              "https://helloodontologia.com/happy-child-at-dentist-smiling-with-pediatric-dent.jpg",
            description:
              "Clínica dental en Medellín especializada en odontopediatría y cuidado dental infantil.",
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
            medicalSpecialty: "Pediatric Dentistry",
          }),
        }}
      />
    </main>
  );
}
