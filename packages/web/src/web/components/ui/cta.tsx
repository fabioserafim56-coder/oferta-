import { ArrowRight, Lock } from "lucide-react";
import { CHECKOUT_URL, trackEvent } from "../../lib/offer";

interface CtaProps {
  label?: string;
  className?: string;
  full?: boolean;
}

export function Cta({ label = "Quero a sequência de 24 horas", className = "", full }: CtaProps) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("InitiateCheckout")}
      className={`cta ${full ? "w-full" : ""} ${className}`}
    >
      {label}
      <ArrowRight size={18} strokeWidth={2.4} />
    </a>
  );
}

export function CheckoutNote({ dark }: { dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-[12.5px] ${dark ? "text-ink/55" : "text-bone-dim/70"}`}
    >
      <Lock size={13} strokeWidth={2} />
      Pagamento processado pela Kiwify — você confere as condições no checkout
    </p>
  );
}
