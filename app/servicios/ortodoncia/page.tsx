import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function OrtodonciaPage() {
  const treatments = [
    {
      title: "Ortodoncia Convencional",
      description:
        "Brackets metálicos tradicionales, efectivos para corregir problemas de alineación y mordida en niños, jóvenes y adultos.",
    },
    {
      title: "Ortodoncia Estética",
      description:
        "Brackets cerámicos o estéticos que ofrecen resultados funcionales con una apariencia más discreta.",
    },
    {
      title: "Ortodoncia para Adultos",
      description:
        "Tratamientos personalizados para adultos que buscan mejorar su sonrisa sin afectar su estilo de vida.",
    },
    {
      title: "Ortodoncia Infantil",
      description:
        "Evaluación y tratamiento temprano para guiar el correcto desarrollo dental y óseo en niños.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/20 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-3 text-center">
              <Sparkles className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Ortodoncia en Medellín
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty text-center">
              En Hello Odontología ofrecemos tratamientos de ortodoncia en
              Medellín enfocados en mejorar la alineación dental, la mordida y
              la estética de la sonrisa en niños, jóvenes y adultos.
            </p>

            {/* Imagen principal */}
            <div className="relative h-[340px] md:h-[520px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/person-smiling-with-orthodontic-braces.jpg"
                alt="Tratamiento de ortodoncia en Medellín"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tratamientos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Tratamientos de Ortodoncia
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Cada paciente es único. Evaluamos tu caso de forma personalizada
                para ofrecerte el tratamiento de ortodoncia más adecuado según
                tus necesidades funcionales y estéticas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {treatments.map((treatment) => (
                <Card
                  key={treatment.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{treatment.title}</h3>
                    <p className="text-muted-foreground text-pretty">
                      {treatment.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Mejora tu Sonrisa con Ortodoncia
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty max-w-2xl mx-auto">
                  Agenda una valoración con nuestros especialistas en ortodoncia
                  y descubre el tratamiento ideal para lograr una sonrisa sana,
                  alineada y funcional.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                    Agendar Valoración
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
