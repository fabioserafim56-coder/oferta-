import { PRICE } from "../../lib/offer";
import { CheckoutNote, Cta } from "../ui/cta";
import { Eyebrow } from "../ui/eyebrow";

export function Closing() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--line)" }}
      />
      <div className="wrap relative">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="reveal">
            <Eyebrow tone="brass">A decisão</Eyebrow>
            <h2 className="h-display h2 mt-6">
              Menos conteúdo salvo. <span className="accent">Uma referência para usar.</span>
            </h2>
            <p className="lead mt-7">Se você quer um ponto de partida educativo, conferiu a amostra e se reconheceu na proposta, o guia reúne o material para acompanhar sua rotina.</p>
            <ol className="mt-8 space-y-5 text-bone-dim">
              <li className="flex gap-4"><span className="text-brass">01</span> Conclua a compra no checkout da Kiwify.</li>
              <li className="flex gap-4"><span className="text-brass">02</span> Receba o acesso após a confirmação do pagamento.</li>
              <li className="flex gap-4"><span className="text-brass">03</span> Leia as orientações e os limites antes de começar.</li>
            </ol>
          </div>

          <div
            className="reveal rounded-2xl border border-[var(--line)] bg-ink-2 p-8 text-center md:p-10"
            data-reveal-delay="90"
          >
            <p className="h-display text-[26px] leading-tight text-bone md:text-[30px]">
              O Desbloqueio Intestinal de 24 Horas
            </p>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-bone-dim/80">
              Ebook digital + plano de 7 dias + kit de acompanhamento. Acesso imediato depois da
              confirmação do pagamento.
            </p>

            <div className="my-8 flex items-end justify-center gap-1.5">
              <span className="h-display mt-2 text-[20px] text-bone-dim">{PRICE.currency}</span>
              <span className="h-display text-[64px] leading-none text-bone">{PRICE.amount}</span>
              <span className="mb-2 text-[13px] text-bone-dim/70">pagamento único</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Cta full label="Quero o guia por R$ 67" />
              <CheckoutNote />
            </div>

            <p className="mt-6 text-[12px] leading-relaxed text-bone-dim/45">
              Conteúdo educativo. Não é tratamento, não substitui avaliação médica e não garante
              resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
