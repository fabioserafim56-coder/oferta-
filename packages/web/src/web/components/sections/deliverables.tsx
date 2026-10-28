import { Eyebrow } from "../ui/eyebrow";
import { DELIVERABLES } from "../../lib/content";

export function Deliverables() {
  return (
    <section className="bg-bone py-16 text-ink md:py-20">
      <div className="wrap">
        <div className="grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <Eyebrow tone="clay">Tudo o que você recebe</Eyebrow>
            <h2 className="h-display h2 mt-6">
              Uma compra. <span className="accent">Três partes para acompanhar sua rotina.</span>
            </h2>
          </div>
          <p className="reveal text-[16.5px] leading-[1.7] text-ink/65" data-reveal-delay="80">
            Sem lista de bônus que você não vai abrir: guia educativo, plano de continuidade e registro diário. É isso que está incluído no acesso.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line-dark)] bg-[var(--line-dark)] md:grid-cols-3">
          {DELIVERABLES.map((d, i) => (
            <div
              key={d.title}
              className="reveal bg-bone p-8"
              data-reveal-delay={String((i % 3) * 70)}
            >
              <span className="inline-block rounded-full bg-ink/6 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-ink/55 uppercase">
                {d.tag}
              </span>
              <h3 className="mt-5 h-display text-[22px] leading-tight text-ink">{d.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-ink/65">{d.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
