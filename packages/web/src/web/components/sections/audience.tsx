import { Check, X } from "lucide-react";
import { FOR_YOU, NOT_FOR_YOU } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";

export function Audience() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <Eyebrow tone="sage">Antes de decidir</Eyebrow>
          <h2 className="h-display h2 mt-6">
            Este material <span className="accent">não é para todo mundo</span> — e faz diferença
            saber disso antes.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          <div className="reveal bg-ink-2 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/15">
                <Check size={16} strokeWidth={2.6} className="text-sage" />
              </span>
              <h3 className="text-[13px] font-bold tracking-[0.16em] text-sage uppercase">
                Faz sentido para você se
              </h3>
            </div>
            <ul className="mt-7 space-y-4">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] leading-[1.65] text-bone">
                  <Check
                    size={17}
                    strokeWidth={2.4}
                    className="mt-[3px] shrink-0 text-sage"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal bg-ink-2 p-8 md:p-10" data-reveal-delay="90">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay/15">
                <X size={16} strokeWidth={2.6} className="text-clay" />
              </span>
              <h3 className="text-[13px] font-bold tracking-[0.16em] text-clay uppercase">
                Não compre se
              </h3>
            </div>
            <ul className="mt-7 space-y-4">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px] leading-[1.65] text-bone-dim">
                  <X
                    size={17}
                    strokeWidth={2.4}
                    className="mt-[3px] shrink-0 text-clay/70"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
