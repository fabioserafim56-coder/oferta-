import { ArrowRight } from "lucide-react";
import { useScrolledPast } from "../../hooks/use-reveal";
import { CHECKOUT_URL, PRICE, trackEvent } from "../../lib/offer";

/** Barra fixa de CTA no rodapé, apenas em mobile, depois do primeiro scroll. */
export function StickyCta() {
  const show = useScrolledPast(520);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-ink/95 px-4 py-3 backdrop-blur-xl transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(2.25rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <p className="text-[10px] font-bold tracking-[0.16em] text-bone-dim/60 uppercase">
            Acesso
          </p>
          <p className="h-display text-[22px] leading-none text-bone">
            {PRICE.currency} {PRICE.amount}
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("InitiateCheckout")}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-clay py-3.5 text-[14.5px] font-bold text-white"
        >
          Quero o roteiro
          <ArrowRight size={16} strokeWidth={2.6} />
        </a>
      </div>
    </div>
  );
}
