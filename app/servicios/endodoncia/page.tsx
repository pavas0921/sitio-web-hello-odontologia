import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Endodoncia en Medellín | Tratamiento de Conducto | Hello Odontología",
  description:
    "Endodoncia en Medellín con especialistas certificados. Tratamiento de conducto, cirugía oral y procedimientos avanzados para salvar tus dientes. Agenda tu consulta.",
  keywords: [
    "endodoncia Medellín",
    "tratamiento de conducto Medellín",
    "dolor dental Medellín",
    "cirugía oral Medellín",
    "clínica odontológica Medellín",
  ],
  alternates: {
    canonical: "https://www.helloodontologia.com/endodoncia",
  },
  openGraph: {
    title: "Endodoncia en Medellín | Hello Odontología",
    description:
      "Tratamiento de conducto y cirugía oral en Medellín con tecnología avanzada y atención especializada.",
    url: "https://www.helloodontologia.com/endodoncia",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/endodontic-root-canal-treatment-procedure.jpg",
        width: 1200,
        height: 630,
        alt: "Endodoncia en Medellín - Tratamiento de conducto",
      },
    ],
  },
};

export default function EndodonciaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Endodoncia y Cirugía Oral en Medellín
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              En <strong>Hello Odontología</strong> ofrecemos tratamientos de
              <strong> endodoncia en Medellín</strong> para aliviar el dolor,
              eliminar infecciones y salvar dientes comprometidos, utilizando
              tecnología avanzada y atención especializada.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Endodoncia (Tratamiento de Conducto)
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  La endodoncia, también conocida como tratamiento de conducto,
                  es un procedimiento odontológico que permite conservar dientes
                  dañados por caries profundas, traumatismos o infecciones
                  internas, evitando su extracción.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  En nuestra clínica odontológica en Medellín realizamos
                  tratamientos de conducto con anestesia efectiva y equipos de
                  última generación para garantizar precisión y comodidad.
                </p>

                <Card className="bg-accent/10">
                  <CardContent className="p-6">
                    <div className="flex gap-3 items-start">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-2">
                          ¿Cuándo es necesaria una endodoncia?
                        </h3>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Dolor dental intenso o persistente</li>
                          <li>• Sensibilidad prolongada al frío o calor</li>
                          <li>• Inflamación o abscesos en las encías</li>
                          <li>• Caries profundas o fracturas dentales</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/endodontic-root-canal-treatment-procedure.jpg"
                  alt="Tratamiento de endodoncia en Medellín"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Cirugía */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Cirugía Oral</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                Complementamos los tratamientos de endodoncia con procedimientos
                de cirugía oral en Medellín, utilizando técnicas mínimamente
                invasivas para una recuperación más rápida y segura.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">
                      Extracciones Dentales
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      Extracciones simples y complejas, incluyendo muelas del
                      juicio impactadas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">
                      Cirugía de Tejidos Blandos
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      Tratamiento de quistes, biopsias y corrección de frenillo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">Injertos Óseos</h3>
                    <p className="text-muted-foreground text-pretty">
                      Preparación del hueso para futuros implantes dentales.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">
                      Cirugía Periodontal
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      Tratamiento quirúrgico de enfermedades avanzadas de las
                      encías.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tecnología */}
            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Tecnología avanzada en endodoncia
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty max-w-2xl mx-auto">
                  Utilizamos radiografías digitales, magnificación clínica y
                  técnicas modernas para garantizar diagnósticos precisos y
                  tratamientos exitosos.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                  Consultar con especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Hello Odontología",
            url: "https://www.helloodontologia.com/endodoncia",
            image:
              "https://www.helloodontologia.com/endodontic-root-canal-treatment-procedure.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Medellín",
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            medicalSpecialty: "Endodontics",
          }),
        }}
      />
    </main>
  );
}
