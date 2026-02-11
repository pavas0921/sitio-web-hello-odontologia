import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Star, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Hello Odontología en Medellín",
  description:
    "Conoce a Hello Odontología, clínica odontológica en Medellín especializada en diseño de sonrisa, ortodoncia y atención dental integral. Compromiso, calidad y trato humano.",
  keywords: [
    "Hello Odontología",
    "clínica odontológica en Medellín",
    "dentistas en Medellín",
    "diseño de sonrisa Medellín",
    "ortodoncia Medellín",
    "odontología integral Medellín",
  ],
  openGraph: {
    title: "Sobre Nosotros | Hello Odontología Medellín",
    description:
      "Somos una clínica odontológica en Medellín enfocada en diseño de sonrisa, ortodoncia y atención personalizada.",
    url: "https://helloodontologia.com/sobre-nosotros",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Sobre <span className="text-primary">Hello Odontología</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Somos una <strong>clínica odontológica en Medellín</strong> creada
              para ofrecer tratamientos dentales de alta calidad, con un enfoque
              humano, tecnología moderna y resultados estéticos y funcionales.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-balance">
                ¿Quiénes Somos?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                En <strong>Hello Odontología</strong> creemos que una sonrisa
                sana transforma vidas. Somos una clínica dental ubicada en
                Medellín, conformada por profesionales comprometidos con la
                salud oral, la estética dental y el bienestar integral de
                nuestros pacientes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Nuestro objetivo es brindar una experiencia odontológica
                diferente: cercana, clara y confiable, donde cada paciente se
                sienta escuchado y acompañado en todo su tratamiento.
              </p>
            </section>

            {/* VALORES */}
            <section className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3 text-center">
                  <Heart className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold text-lg">Trato Humano</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Ponemos a las personas primero, entendiendo sus necesidades
                    y expectativas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3 text-center">
                  <Shield className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold text-lg">Calidad y Seguridad</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Cumplimos estrictos protocolos de bioseguridad y calidad
                    clínica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3 text-center">
                  <Star className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold text-lg">
                    Excelencia Profesional
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Especialistas capacitados y en constante actualización.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* ENFOQUE */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-balance">
                Nuestro Enfoque
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Ofrecemos tratamientos como <strong>diseño de sonrisa</strong>,
                <strong> ortodoncia</strong>, odontología general, implantes,
                endodoncia y odontopediatría, siempre con un enfoque
                personalizado.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Utilizamos tecnología moderna, diagnóstico preciso y planes de
                tratamiento claros, para que tomes decisiones informadas sobre
                tu salud bucal.
              </p>
            </section>

            {/* UBICACIÓN */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-balance">
                Clínica Odontológica en Medellín
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Atendemos pacientes de Medellín y el Valle de Aburrá, ofreciendo
                una atención cercana y accesible para niños, jóvenes y adultos.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Medellín, Colombia</span>
              </div>
            </section>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Queremos Cuidar de Tu Sonrisa
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Agenda tu cita con nuestro equipo y vive una experiencia
                  odontológica diferente en Hello Odontología.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                    Agendar Cita
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
