const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5210000000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Creaciones Sabi!, quiero cotizar productos de tu tienda en linea"
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`;
