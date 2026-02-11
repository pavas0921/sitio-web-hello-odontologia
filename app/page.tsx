import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Shield, Heart, Users } from "lucide-react";
import Head from "next/head";

export default function HomePage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Hello Odontología",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5",
    },
    review: [
      {
        "@type": "Review",
        author: "Andrés Pavas Correa",
        datePublished: "2026-02-01",
        reviewBody:
          "La doctora Andrea y el Dr Fernando me atendieron de maravilla en su consultorio, me realicé un diseño de sonrisa y superó mis expectativas, el lugar es impecable. Recomiendo a Hello con los ojos bendados.",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: "Verónica Hernandez",
        datePublished: "2026-01-25",
        reviewBody:
          "Tuve una experiencia increíble en esta odontología. Desde la primera consulta sentí confianza y profesionalismo. Me realizaron un diseño de sonrisa y el resultado superó mis expectativas: natural, estético y completamente acorde a mi rostro. Además, el equipo es muy amable, explican cada paso con paciencia y utilizan tecnología de punta. Se nota que aman lo que hacen y que cada detalle lo cuidan al máximo. ¡Los recomiendo con los ojos cerrados!",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: "Maria Isabel Hernandez",
        datePublished: "2026-01-20",
        reviewBody:
          "Excelente atención! Quedé súper feliz con mi diseño de sonrisa, me lo han admirado demasiado, es mi lugar de confianza, también le cuidan los dientes a mi hija, LOS SUPER RECOMIENDO.",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: "Leidy Alvarez",
        datePublished: "2026-01-15",
        reviewBody:
          "Hello Odontología me dio la confianza de sonreír sin miedo!!! mil gracias, super recomendado.",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: "Tatis Lopez",
        datePublished: "2026-01-10",
        reviewBody:
          "Excelente servicio que presta Andrea, super recomendado el lugar, generan demasiada confianza.",
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
      },
    ],
  };

  const services = [
    {
      title: "Diseño de Sonrisa",
      description:
        "Creación personalizada de sonrisas estéticas y funcionales para realzar tu belleza natural.",
      icon: "✨",
      href: "/servicios/diseno-sonrisa",
    },
    {
      title: "Ortodoncia",
      description:
        "Ortodoncia en Medellín con brackets estéticos y alineadores invisibles.",
      icon: "😁",
      href: "/servicios/ortodoncia",
    },
    {
      title: "Odontología General",
      description: "Cuidado integral para mantener tu salud dental óptima.",
      icon: "🦷",
      href: "/servicios/odontologia-general",
    },
    {
      title: "Odontología Estética",
      description:
        "Transforma tu sonrisa con tratamientos estéticos avanzados.",
      icon: "✨",
      href: "/servicios/odontologia-estetica",
    },

    {
      title: "Implantes Dentales",
      description: "Recupera tu sonrisa con implantes de última generación.",
      icon: "🦷",
      href: "/servicios/implantes",
    },
    {
      title: "Endodoncia y Cirugía",
      description: "Tratamientos especializados con tecnología avanzada.",
      icon: "🔬",
      href: "/servicios/endodoncia",
    },
    {
      title: "Odontopediatría",
      description: "Cuidado dental especializado para los más pequeños.",
      icon: "👶",
      href: "/servicios/odontopediatria",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horarios Flexibles",
      description: "Nos adaptamos a tu agenda para tu comodidad.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Protocolos de Seguridad",
      description:
        "Máxima higiene y esterilización en todos nuestros procesos.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Atención Personalizada",
      description: "Cada paciente es único y merece un trato especial.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipo Profesional",
      description: "Especialistas certificados con años de experiencia.",
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
        />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-balance">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Clínica odontológica en Medellín especializada en{" "}
                  <span className="text-primary">
                    diseño de sonrisa y ortodoncia
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  En <strong>Hello Odontología</strong> somos una clínica
                  odontológica en Medellín especializada en{" "}
                  <strong>diseño de sonrisa</strong> y{" "}
                  <strong>ortodoncia</strong>. Combinamos tecnología dental
                  avanzada, especialistas certificados y atención personalizada
                  para cuidar la salud bucal de toda tu familia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contacto">Agenda tu Cita</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/servicios/odontologia-general">
                      Conoce Nuestros Servicios
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Screenshot_1.png"
                  alt="Clínica odontológica en Medellín especializada en diseño de sonrisa y ortodoncia"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ofrecemos una amplia gama de tratamientos dentales para cuidar
                de tu sonrisa en cada etapa de tu vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href}>
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-5xl">{service.icon}</div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground text-pretty">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Nos comprometemos a brindarte la mejor experiencia dental con un
                enfoque humano y profesional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Lo Que Dicen Nuestros Pacientes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  author: "Andrés Pavas Correa",
                  rating: 5,
                  text: "La doctora Andrea y el Dr Fernando me atendieron de maravilla en su consultorio, me realicé un diseño de sonrisa y superó mis expectativas, el lugar es impecable. Recomiendo a Hello con los ojos bendados.",
                },
                {
                  author: "Verónica Hernandez",
                  rating: 5,
                  text: "Tuve una experiencia increíble en esta odontología. Desde la primera consulta sentí confianza y profesionalismo. Me realizaron un diseño de sonrisa y el resultado superó mis expectativas: natural, estético y completamente acorde a mi rostro. Además, el equipo es muy amable, explican cada paso con paciencia y utilizan tecnología de punta. Se nota que aman lo que hacen y que cada detalle lo cuidan al máximo. ¡Los recomiendo con los ojos cerrados!",
                },
                {
                  author: "Maria Isabel Hernandez",
                  rating: 5,
                  text: "Excelente atención! Quedé súper feliz con mi diseño de sonrisa, me lo han admirado demasiado, es mi lugar de confianza, también le cuidan los dientes a mi hija, LOS SUPER RECOMIENDO.",
                },
                {
                  author: "Leidy Alvarez",
                  rating: 5,
                  text: "Hello Odontología me dio la confianza de sonreír sin miedo!!! mil gracias, super recomendado.",
                },
                {
                  author: "Tatis Lopez",
                  rating: 5,
                  text: "Excelente servicio que presta Andrea, super recomendado el lugar, generan demasiada confianza.",
                },
              ].map(({ author, rating, text }, i) => (
                <Card key={i}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      "{text}"
                    </p>
                    <div className="pt-2 border-t">
                      <p className="font-semibold">{author}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground text-balance">
              ¿Listo para Transformar tu Sonrisa?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Agenda tu cita hoy mismo y descubre cómo podemos ayudarte a lograr
              la sonrisa que siempre has soñado.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita">
                Contactar Ahora
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
