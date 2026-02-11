"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Reemplaza con tu número de WhatsApp
    const phoneNumber = "57321588409"; // Formato: código de país + número sin espacios
    const message = encodeURIComponent(
      "Hola, vengo desde el sitio web de Hello Odontología y me gustaría agendar una cita.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="
    fixed bottom-6 right-6 
    h-16 w-16 
    rounded-full 
    bg-[#25D366] hover:bg-[#20BA5A] 
    text-white 
    z-50
    shadow-[0_0_25px_rgba(37,211,102,0.6)]
    animate-[float_3s_ease-in-out_infinite]
    before:absolute before:inset-0 before:rounded-full
    before:bg-[#25D366] before:opacity-40
    before:animate-ping before:duration-[2500ms]
  "
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-9 w-9 relative z-10" />
    </Button>
  );
}
