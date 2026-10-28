import { ArrowRight, ShieldCheck } from "lucide-react";
import { useScrolledPast } from "../../hooks/use-reveal";
import { CHECKOUT_URL, PRICE, trackEvent } from "../../lib/offer";

export function Header() {
  const scrolled = useScrolledPast(80);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-[var(--line)] bg-ink/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-[62px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-display text-[17px] leading-none tracking-[-0.01em] text-bone">
            Uma Vida Melhor
          </span>
          <span className="hidden text-[10px] font-bold tracking-[0.2em] text-brass uppercase sm:inline">
            pra você
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-bone-dim/70 uppercase md:inline-flex">
            <ShieldCheck size={13} strokeWidth={2.2} />
            Conteúdo educativo
          </span>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("InitiateCheckout")}
            className={`group inline-flex items-center gap-2 rounded-full bg-clay px-4 py-2 text-[13.5px] font-bold text-white transition-all duration-500 hover:bg-[#d46b47] ${
              scrolled ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            Acessar por {PRICE.currency} {PRICE.amount}
            <ArrowRight size={15} strokeWidth={2.6} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
