import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bone py-16 text-ink md:py-20">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal md:sticky md:top-28 md:self-start">
            <Eyebrow tone="clay">Perguntas frequentes</Eyebrow>
            <h2 className="h-display h2 mt-6">
              O que as pessoas <span className="accent">perguntam antes</span> de comprar
            </h2>
          </div>

          <div className="reveal" data-reveal-delay="70">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-[var(--line-dark)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[17px] leading-[1.45] font-semibold text-ink">
                      {item.q}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={2}
                      className={`mt-0.5 shrink-0 text-clay transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-7 text-[15.5px] leading-[1.75] text-ink/65">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
