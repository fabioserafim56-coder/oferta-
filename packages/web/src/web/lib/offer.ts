/** Link único do checkout. Trocar aqui atualiza todos os CTAs da página. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/UIoPVUl";

export const PRICE = {
  amount: "67",
  currency: "R$",
  installments: "Formas de pagamento e eventual parcelamento disponíveis no checkout",
};

export const SUPPORT_EMAIL = "umavidamelhorpravoce@gmail.com";

/** Dispara os eventos de pixel quando presentes na página (Meta / TikTok). */
export function trackEvent(event: string) {
  const w = window as unknown as {
    fbq?: (action: string, name: string) => void;
    ttq?: { track?: (name: string, data: Record<string, string>) => void };
  };
  w.fbq?.("track", event);
  w.ttq?.track?.(event, { content_name: "O Desbloqueio Intestinal de 24 Horas" });
}
