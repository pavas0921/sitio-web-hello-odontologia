import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Implantes Dentales | Reemplazo Dental Seguro y Duradero",
  description:
    "Implantes dentales de última generación para reemplazar dientes perdidos. Tratamiento seguro, duradero y estético con planificación digital avanzada.",
  keywords: [
    "implantes dentales",
    "implantes dentales precio",
    "reemplazo dental",
    "implantes de titanio",
    "odontología avanzada",
    "clínica dental",
  ],
  openGraph: {
    title: "Implantes Dentales | Sonrisa Natural y Funcional",
    description:
      "Recupera tu sonrisa con implantes dentales que lucen y funcionan como dientes naturales.",
    type: "website",
  },
};

export default function ImplantesPage() {
  const benefits = [
    "Aspecto y sensación natural",
    "Durabilidad de por vida con cuidado adecuado",
    "Preservan la estructura ósea",
    "No afectan a los dientes adyacentes",
    "Mayor comodidad que las prótesis removibles",
    "Mejoran la capacidad de masticación",
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-accent/20 via-background to-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Implantes Dentales
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Recupera tu sonrisa completa con implantes dentales de última
              generación que reemplazan dientes perdidos de forma segura,
              estética y funcional.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* QUE SON */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  ¿Qué son los Implantes Dentales?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  Los implantes dentales son raíces artificiales de titanio
                  biocompatible que se colocan en el hueso maxilar para
                  sustituir dientes ausentes de forma permanente.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Funcionan como la base de coronas dentales personalizadas,
                  logrando una apariencia natural y una mordida firme y estable.
                </p>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/dental-implant-procedure.webp"
                  alt="Procedimiento de implantes dentales"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* BENEFICIOS */}
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Beneficios de los Implantes Dentales
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* PROCESO */}
            <section>
              <h3 className="text-2xl font-bold mb-6">
                Proceso del Tratamiento con Implantes
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Evaluación y Planificación",
                    text: "Estudio clínico y radiografías 3D para diseñar un plan de implantes personalizado.",
                  },
                  {
                    step: 2,
                    title: "Colocación del Implante",
                    text: "Cirugía mínimamente invasiva para insertar el implante de titanio.",
                  },
                  {
                    step: 3,
                    title: "Periodo de Integración",
                    text: "El implante se integra al hueso en un periodo de 3 a 6 meses.",
                  },
                  {
                    step: 4,
                    title: "Colocación de la Corona",
                    text: "Instalación de la corona definitiva con estética y función natural.",
                  },
                ].map((item) => (
                  <Card key={item.step}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-pretty">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Eres Candidato para Implantes Dentales?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                La mayoría de los pacientes pueden beneficiarse de implantes
                dentales. Agenda una consulta para una evaluación profesional y
                personalizada.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                  Agendar Consulta
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
