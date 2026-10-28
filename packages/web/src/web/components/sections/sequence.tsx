import { useState } from "react";
import { Plus } from "lucide-react";
import { SEQUENCE } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { Cta } from "../ui/cta";

export function Sequence() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sequencia" className="border-t border-[var(--line)] py-16 md:py-20">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="reveal">
              <Eyebrow>O roteiro por dentro</Eyebrow>
              <h2 className="h-display h2 mt-6 text-bone">
                As <span className="accent">8 ações</span> do primeiro dia, na ordem em que você faz
              </h2>
              <p className="lead mt-6">
                O primeiro dia é dividido em ações pequenas para você visualizar o fluxo completo e
                saber o que vem depois. Abra qualquer uma para ver do que se trata.
              </p>
            </div>

            <div className="reveal mt-9 hidden lg:block" data-reveal-delay="140">
              <Cta label="Quero seguir essa sequência" />
            </div>
          </div>

          {/* timeline */}
          <div className="reveal" data-reveal-delay="100">
            <ul className="relative border-l border-[var(--line)] pl-0">
              {SEQUENCE.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.time} className="relative pl-7 md:pl-9">
                    <span
                      aria-hidden
                      className={`absolute top-[26px] -left-[5px] h-[9px] w-[9px] rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-clay" : "bg-[#2a3531]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group w-full cursor-pointer border-b border-[var(--line)] py-6 text-left"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <span className="block text-[11px] font-bold tracking-[0.18em] text-brass uppercase">
                            {item.time}
                          </span>
                          <span
                            className={`mt-2 block h-display text-[21px] leading-tight transition-colors duration-300 md:text-[25px] ${
                              isOpen ? "text-bone" : "text-bone/75 group-hover:text-bone"
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>
                        <Plus
                          size={18}
                          strokeWidth={2.2}
                          className={`mt-1 shrink-0 text-bone-dim/60 transition-transform duration-300 ${
                            isOpen ? "rotate-45 text-clay" : ""
                          }`}
                        />
                      </div>

                      <div
                        className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[52ch] pt-4 text-[15px] leading-[1.75] text-bone-dim">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="reveal mt-10 lg:hidden">
              <Cta label="Quero seguir essa sequência" full />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
