import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Odontología General en Medellín | Hello Odontología",
  description:
    "Odontología general en Medellín con enfoque preventivo y restaurador. Limpiezas, caries, extracciones y diagnóstico profesional en Hello Odontología.",
  keywords: [
    "odontología general Medellín",
    "dentista en Medellín",
    "limpieza dental Medellín",
    "tratamiento de caries Medellín",
    "Hello Odontología",
  ],
  alternates: {
    canonical: "https://helloodontologia.com/odontologia-general",
  },
  openGraph: {
    title: "Odontología General en Medellín | Hello Odontología",
    description:
      "Cuidado dental integral en Medellín. Prevención, diagnóstico y tratamientos de odontología general en Hello Odontología.",
    url: "https://helloodontologia.com/odontologia-general",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://helloodontologia.com/dentist-performing-general-dental-checkup.jpg",
        width: 1200,
        height: 630,
        alt: "Odontología General en Medellín - Hello Odontología",
      },
    ],
  },
};

/* =========================
   PAGE
========================= */
export default function OdontologiaGeneralPage() {
  const treatments = [
    "Limpiezas y profilaxis dental",
    "Tratamiento de caries",
    "Extracciones dentales",
    "Selladores dentales",
    "Radiografías y diagnóstico",
    "Tratamiento de enfermedades de las encías",
  ];

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Odontología General en Medellín
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              En <strong>Hello Odontología</strong> ofrecemos servicios de
              odontología general en Medellín enfocados en la prevención, el
              diagnóstico temprano y el cuidado integral de tu salud oral.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Servicios de Odontología General
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  La odontología general es la base de una sonrisa sana.
                  Nuestros tratamientos ayudan a prevenir enfermedades bucales y
                  a mantener tus dientes y encías en óptimas condiciones.
                </p>

                <ul className="space-y-3">
                  {treatments.map((treatment) => (
                    <li key={treatment} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/dentist-performing-general-dental-checkup.jpg"
                  alt="Odontología General en Medellín - Hello Odontología"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  La Prevención es la Clave
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Recomendamos visitas odontológicas cada 6 meses para limpiezas
                  y chequeos preventivos. Detectar problemas a tiempo puede
                  evitar tratamientos complejos y costosos en el futuro.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                  Agenda tu Consulta en Medellín
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
              "https://helloodontologia.com/dentist-performing-general-dental-checkup.jpg",
            description:
              "Clínica dental en Medellín especializada en odontología general, prevención y cuidado integral de la salud oral.",
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
            medicalSpecialty: "Dentistry",
          }),
        }}
      />
    </main>
  );
}
