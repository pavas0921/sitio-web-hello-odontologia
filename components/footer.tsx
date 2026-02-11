import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ===== BRAND + SEO ===== */}
          <div className="space-y-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Hello Odontología | Dentista en Medellín"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <p className="text-sm text-secondary-foreground/80">
              <strong>Hello Odontología</strong> es una clínica dental en
              <strong> Medellín</strong>, especializada en odontología general,
              estética dental, ortodoncia, implantes y odontopediatría.
              Atendemos pacientes que buscan un
              <strong> dentista cerca de mí</strong> con confianza y calidad.
            </p>
          </div>

          {/* ===== LINKS ESTRATÉGICOS ===== */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="font-semibold mb-4">Clínica Odontológica</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  Odontología en Medellín
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-primary">
                  Contacto y citas odontológicas
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm hover:text-primary"
                >
                  Sobre Hello Odontología
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/odontologia-general"
                  className="text-sm hover:text-primary"
                >
                  Servicios odontológicos
                </Link>
              </li>
            </ul>
          </nav>

          {/* ===== SERVICIOS SEO ===== */}
          <div>
            <h3 className="font-semibold mb-4">Servicios Odontológicos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/diseno-sonrisa"
                  className="text-sm hover:text-primary"
                >
                  Diseño de sonrisa en Medellín
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/ortodoncia"
                  className="text-sm hover:text-primary"
                >
                  Ortodoncia en Medellín
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/implantes"
                  className="text-sm hover:text-primary"
                >
                  Odontología General en Medellín
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/implantes"
                  className="text-sm hover:text-primary"
                >
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/odontopediatria"
                  className="text-sm hover:text-primary"
                >
                  Odontopediatría
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== NAP + LOCAL SEO ===== */}
          <address className="not-italic">
            <h3 className="font-semibold mb-4">Contacto</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  Av. 80 #50-70, Medellín
                  <br />
                  Clínica dental de fácil acceso
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+57 321 588 4090</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@helloodontologia.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>
                  Lun–Vie 8:00 AM – 7:00 PM <br />
                  Sábados 8:00 AM – 4:00 PM
                </span>
              </li>
            </ul>

            {/* ===== SOCIAL PROOF ===== */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/helloodontologia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Hello Odontología"
                className="hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/helloodontologia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Hello Odontología"
                className="hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </address>
        </div>

        {/* ===== FOOTER BOTTOM ===== */}
        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Hello Odontología · Clínica Dental en
            Medellín · Dentista cerca de ti
          </p>
        </div>
      </div>

      {/* ===== SCHEMA LOCAL BUSINESS ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Hello Odontología",
            url: "https://helloodontologia.com",
            telephone: "+57 321 588 4090",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Medellín",
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "16:00",
              },
            ],
            areaServed: "Medellín",
          }),
        }}
      />
    </footer>
  );
}
