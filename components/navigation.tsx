"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  {
    name: "Diseño de Sonrisa",
    href: "/servicios/diseno-sonrisa",
  },
  {
    name: "Ortodoncia",
    href: "/servicios/ortodoncia",
  },
  {
    name: "Odontología General",
    href: "/servicios/odontologia-general",
  },
  { name: "Odontología Estética", href: "/servicios/odontologia-estetica" },
  { name: "Implantes Dentales", href: "/servicios/implantes" },
  { name: "Endodoncia y Cirugía Oral", href: "/servicios/endodoncia" },
  { name: "Odontopediatría", href: "/servicios/odontopediatria" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-1" // Agregar py-1 al header
      role="banner"
    >
      {/* ========= SEO: Site Navigation Schema ========= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: [
              "Inicio",
              "Servicios Odontológicos",
              "Sobre Nosotros",
              "Contacto",
              "Agendar Cita",
            ],
            url: [
              "https://helloodontologia.com/",
              "https://helloodontologia.com/servicios/odontologia-general",
              "https://helloodontologia.com/sobre-nosotros",
              "https://helloodontologia.com/contacto",
              "https://helloodontologia.com/contacto",
            ],
          }),
        }}
      />

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Hello Odontología - Dentista en Medellín"
          title="Hello Odontología | Dentista cerca de mí en Medellín"
          className="flex items-center gap-2 my-2" // Agregar my-2 para margin vertical
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Hello Odontología - Clínica Dental en Medellín"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* ========= Desktop Navigation ========= */}
        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Menú principal"
        >
          <Link
            href="/"
            title="Dentista en Medellín - Inicio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Inicio
          </Link>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-3 p-4 md:w-[520px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            title={`${service.name} | Hello Odontología Medellín`}
                            className="block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <span className="text-sm font-medium">
                              {service.name}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/sobre-nosotros"
            title="Clínica Dental en Medellín - Sobre Hello Odontología"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre Nosotros
          </Link>

          <Link
            href="/contacto"
            title="Contacto | Dentista cerca de mí en Medellín"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <Button
          asChild
          className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://wa.me/573215884090?text=Hola,%20vengo%20desde%20el%20sitio%20web%20de%20Hello%20Odontolog%C3%ADa%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            title="Agendar cita por WhatsApp"
            aria-label="Agendar cita por WhatsApp"
          >
            Agendar Cita
          </Link>
        </Button>

        {/* ========= Mobile Navigation ========= */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8" aria-label="Menú móvil">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary"
              >
                Inicio
              </Link>

              <div className="space-y-2">
                <p className="text-lg font-medium">Servicios</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      title={service.name}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sobre-nosotros"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary"
              >
                Sobre Nosotros
              </Link>

              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary"
              >
                Contacto
              </Link>

              <Button
                asChild
                className="mt-4 bg-primary text-primary-foreground"
              >
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Agendar Cita
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
