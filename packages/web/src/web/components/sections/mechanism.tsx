import { ArrowDownRight } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";

const PILLARS = [
  {
    n: "01",
    title: "Ordem",
    wrong: "Informação espalhada em várias fontes.",
    right:
      "As 8 ações ficam reunidas em uma ordem de leitura, para você consultar o próximo passo.",
  },
  {
    n: "02",
    title: "Horário",
    wrong: "Você tenta lembrar de tudo ao longo do dia.",
    right:
      "Os horários dão uma referência para organizar o dia. Não são uma promessa de resultado nem uma exigência de precisão.",
  },
  {
    n: "03",
    title: "Limite",
    wrong: "Orientações sem clareza sobre os limites.",
    right:
      "O guia inclui sinais de alerta e limites de uso. Saber quando buscar atendimento também faz parte do cuidado.",
  },
];

export function Mechanism() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="wrap">
        <div className="reveal max-w-3xl">
          <Eyebrow tone="brass">Como o guia ajuda a organizar</Eyebrow>
          <h2 className="h-display h2 mt-6 text-bone">
            Uma referência para <span className="accent">ler, aplicar e registrar.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.n}
              className="reveal flex flex-col bg-ink-2 p-8 md:p-9"
              data-reveal-delay={String(i * 90)}
            >
              <div className="flex items-baseline justify-between">
                <span className="h-display text-[44px] leading-none text-brass/35">{p.n}</span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-bone-dim/50 uppercase">
                  {p.title}
                </span>
              </div>

              <p className="mt-8 text-[15px] leading-[1.6] text-bone-dim/75 line-through decoration-clay/60 decoration-1">
                {p.wrong}
              </p>

              <ArrowDownRight size={17} strokeWidth={2} className="my-4 text-clay" />

              <p className="text-[15.5px] leading-[1.7] text-bone">{p.right}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
