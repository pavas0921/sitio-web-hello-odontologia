import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hello Odontología | Diseño de sonrisa y ortodoncia en Medellín",
    template: "%s | Hello Odontología Medellín",
  },
  description:
    "Clínica odontológica en Medellín especializada en diseño de sonrisa y ortodoncia. Atención personalizada, tecnología avanzada y especialistas certificados.",
  keywords: [
    "diseño de sonrisa Medellín",
    "ortodoncia Medellín",
    "clínica odontológica Medellín",
    "odontología estética Medellín",
    "dentista en Medellín",
    "alineadores dentales Medellín",
  ],
  metadataBase: new URL("https://helloodontologia.com"),
  openGraph: {
    title: "Hello Odontología | Clínica dental en Medellín",
    description:
      "Especialistas en diseño de sonrisa y ortodoncia en Medellín. Tecnología avanzada y atención personalizada.",
    url: "https://helloodontologia.com",
    siteName: "Hello Odontología",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} font-sans antialiased`}>
        <Navigation />
        {children}
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
