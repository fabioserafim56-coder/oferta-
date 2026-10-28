import { AlertTriangle, Stethoscope } from "lucide-react";
import { RED_FLAGS } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";

export function Safety() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="wrap">
        <div className="rule reveal mb-16" />

        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <Eyebrow tone="alert">Segurança em primeiro lugar</Eyebrow>
            <h2 className="h-display h2 mt-6">
              Há casos em que o certo é <span className="accent">parar e procurar um médico</span>
            </h2>
            <p className="lead mt-6">
              Este é um material educativo. Ele não faz diagnóstico, não substitui consulta e não
              serve para todos os quadros. Se qualquer um dos sinais abaixo estiver presente, a
              orientação é buscar avaliação presencial antes de tentar qualquer rotina em casa.
            </p>

          </div>

          <div
            className="reveal rounded-2xl border p-8 md:p-10"
            data-reveal-delay="80"
            style={{
              borderColor: "rgba(209,67,67,.28)",
              background: "linear-gradient(180deg, rgba(209,67,67,.08), rgba(209,67,67,.02))",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-alert/15">
                <AlertTriangle size={17} strokeWidth={2.4} className="text-alert" />
              </span>
              <h3 className="text-[13px] font-bold tracking-[0.16em] text-alert uppercase">
                Sinais de alerta
              </h3>
            </div>

            <ul className="mt-7 space-y-px overflow-hidden rounded-xl">
              {RED_FLAGS.map((flag) => (
                <li
                  key={flag}
                  className="flex gap-3 bg-ink-2/70 px-5 py-4 text-[15.5px] leading-[1.6] text-bone"
                >
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-alert" />
                  {flag}
                </li>
              ))}
            </ul>

            <p className="mt-7 flex gap-3 text-[13.5px] leading-[1.65] text-bone-dim/80">
              <Stethoscope size={16} strokeWidth={2} className="mt-[3px] shrink-0 text-alert" />
              Também vale conversar com um profissional se você usa medicamentos de uso contínuo,
              está gestante, amamentando ou tem doença intestinal já diagnosticada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
