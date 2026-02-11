"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* ===== HERO SEO ===== */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-accent/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dentista en Medellín – Contacto Hello Odontología
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ¿Buscas un <strong>dentista cerca de ti en Medellín</strong>? En{" "}
              <strong>Hello Odontología</strong> te ayudamos a agendar tu cita
              de forma rápida y sencilla.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENIDO ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* ===== FORMULARIO ===== */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  Agenda tu cita odontológica
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+57 300 000 0000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Servicio de interés</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange as any}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="general">Odontología General</option>
                      <option value="ortodoncia">Ortodoncia</option>
                      <option value="estetica">Odontología Estética</option>
                      <option value="implantes">Implantes Dentales</option>
                      <option value="endodoncia">Endodoncia</option>
                      <option value="odontopediatria">Odontopediatría</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Cuéntanos cómo podemos ayudarte…"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* ===== INFO LOCAL SEO ===== */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold">
                    Hello Odontología en Medellín
                  </h2>

                  <div className="flex gap-4">
                    <MapPin className="text-primary" />
                    <p className="text-muted-foreground">
                      Av. 80 #50-70, Medellín, Antioquia – Colombia
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-primary" />
                    <p className="text-muted-foreground">+57 321 588 4090</p>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-primary" />
                    <p className="text-muted-foreground">
                      info@helloodontologia.com
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="text-primary" />
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM – 7:00 PM <br />
                      Sábados: 8:00 AM – 4:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">
                    ¿Buscas un dentista cerca de ti?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Escríbenos por WhatsApp y agenda tu cita en minutos.
                  </p>
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    asChild
                  >
                    <a
                      href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contactar por WhatsApp"
                    >
                      Contactar por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ===== MAPA ===== */}
          <Card className="mt-12">
            <CardContent className="p-0 h-[400px] overflow-hidden">
              <iframe
                title="Hello Odontología Medellín"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.995855484771!2d-75.5963263!3d6.264274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44298a7478bc83%3A0x812e45411f32cd96!2sHello%20Odontologia!5e0!3m2!1ses!2sco!4v1770404252213!5m2!1ses!2sco"
                className="w-full h-full border-0"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
