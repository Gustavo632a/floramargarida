export const WHATSAPP_URL="https://wa.me/558388050917";
export const MESSAGE="Olá! Conheci a Flora Margarida pelo site e gostaria de saber mais sobre os produtos disponíveis.";
export function createWhatsAppUrl(message=MESSAGE){return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;}
