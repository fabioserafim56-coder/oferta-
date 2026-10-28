import { Check, FileText, Mail, Scale } from "lucide-react";
import { PRICE } from "../../lib/offer";
import { CheckoutNote, Cta } from "../ui/cta";
import { Eyebrow } from "../ui/eyebrow";

const INCLUDED = [
  "Guia educativo: 28 páginas, com 8 ações organizadas ao longo do dia",
  "Plano de continuidade de 7 dias",
  "Checklist e registro diário da rotina",
  "Escala de observação e sinais de alerta incluídos no guia",
];

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-20 relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(circle, #C9603F 0%, transparent 70%)" }}
      />

      <div className="wrap relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow tone="brass" className="justify-center">
            A oferta
          </Eyebrow>
          <h2 className="h-display h2 mt-6">
            Guia + plano de 7 dias + checklist. <span className="accent">Tudo por R$ 67.</span>
          </h2>
        </div>

        <p className="reveal mx-auto mt-5 max-w-xl text-center text-bone-dim">Pagamento único, sem assinatura. Produto digital para ler no celular ou imprimir.</p>

        <div className="reveal mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-[var(--line)] bg-ink-2">
          <div className="grid md:grid-cols-[1fr_0.85fr]">
            <div className="border-b border-[var(--line)] p-8 md:border-r md:border-b-0 md:p-10">
              <h3 className="text-[12px] font-bold tracking-[0.18em] text-bone-dim uppercase">
                O que está incluído
              </h3>
              <ul className="mt-6 space-y-3.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-bone">
                    <Check
                      size={16}
                      strokeWidth={2.6}
                      className="mt-[3px] shrink-0 text-brass"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-bone-dim">Após a confirmação do pagamento, o acesso é enviado ao e-mail informado na Kiwify. Suporte por e-mail para dúvidas de acesso.</p>
            </div>

            <div className="flex flex-col justify-center bg-ink-3 p-8 text-center md:p-10">
              <p className="text-[12px] font-bold tracking-[0.18em] text-bone-dim/70 uppercase">
                Pagamento único
              </p>
              <p className="mt-4 flex items-start justify-center gap-1.5">
                <span className="h-display mt-2 text-[22px] text-bone-dim">{PRICE.currency}</span>
                <span className="h-display text-[76px] leading-none text-bone">{PRICE.amount}</span>
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-bone-dim/70">
                {PRICE.installments}
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Cta full label="Comprar por R$ 67" />
                <CheckoutNote />
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-[var(--line)] border-t border-[var(--line)] sm:grid-cols-3">
            <Badge icon={<FileText size={15} strokeWidth={2} />} text="100% digital, sem frete" />
            <Badge icon={<Mail size={15} strokeWidth={2} />} text="Acesso enviado por e-mail" />
            <Badge
              icon={<Scale size={15} strokeWidth={2} />}
              text="7 dias de arrependimento (art. 49 CDC)"
            />
          </div>
        </div>

        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-bone-dim/50">
          Não anunciamos garantia própria de reembolso. Vale o direito legal de arrependimento: em
          compras feitas fora de estabelecimento físico você pode desistir em até 7 dias corridos
          contados do recebimento, conforme o art. 49 do Código de Defesa do Consumidor. As
          condições vigentes de pagamento e cancelamento aparecem no checkout da Kiwify antes de você
          concluir.
        </p>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2.5 bg-ink-2 px-5 py-4 text-center text-[12.5px] text-bone-dim">
      <span className="text-brass">{icon}</span>
      {text}
    </div>
  );
}
