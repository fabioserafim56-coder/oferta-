import { BookOpen, ClipboardCheck, Smartphone, Zap } from "lucide-react";
import { PRICE } from "../../lib/offer";
import { CheckoutNote, Cta } from "../ui/cta";
import { Eyebrow } from "../ui/eyebrow";

const SPECS = [
  { icon: BookOpen, label: "Ebook", value: "28 páginas · 25 capítulos" },
  { icon: ClipboardCheck, label: "Kit", value: "Checklist e registro de 7 dias" },
  { icon: Smartphone, label: "Leitura", value: "Celular, tablet ou impresso" },
  { icon: Zap, label: "Acesso", value: "Imediato, por e-mail" },
];

export function Product() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]"
        style={{ background: "radial-gradient(circle, #C2A25C 0%, transparent 70%)" }}
      />

      <div className="wrap relative">
        <div className="grid items-end gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <Eyebrow tone="brass">O produto</Eyebrow>
            <h2 className="h-display h2 mt-6">
              Feito para ficar <span className="accent">aberto na sua bancada</span>, não esquecido
              numa pasta
            </h2>
          </div>
          <p className="reveal lead" data-reveal-delay="80">
            Um material editorial, bonito de abrir e simples de seguir: cada horário tem a sua
            página, com o que fazer e uma nota clínica curta. Você lê no celular de manhã e marca o
            dia no papel.
          </p>
        </div>

        {/* Galeria bento */}
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[auto_auto]">
          <figure className="reveal group relative overflow-hidden rounded-2xl border border-[var(--line)] md:col-span-8">
            <img
              src="/images/produto-hero-v2.png"
              alt="Ebook O Desbloqueio Intestinal de 24 Horas em capa dura e em tablet, com checklist, copo de água e tigela de aveia com kiwi"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
              width={1024}
              height={768}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5 flex md:right-6 md:bottom-6 md:left-6 flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] text-brass uppercase">
                  O kit completo
                </p>
                <p className="h-display mt-1.5 text-[18px] leading-tight text-bone sm:text-[24px] md:text-[30px]">
                  Ebook, plano de 7 dias e folhas de acompanhamento
                </p>
              </div>
            </figcaption>
          </figure>

          <figure className="reveal group relative overflow-hidden rounded-2xl border border-[var(--line)] md:col-span-4 md:row-span-2" data-reveal-delay="90">
            <img
              src="/images/produto-uso-v2.png"
              alt="Mãos segurando um celular com a capa do ebook aberta, ao lado de um checklist de 7 dias e uma xícara de chá"
              className="aspect-[4/5] h-full w-full object-cover md:absolute md:inset-0 md:aspect-auto transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
              width={768}
              height={1024}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <figcaption className="absolute right-6 bottom-6 left-6">
              <p className="text-[11px] font-bold tracking-[0.2em] text-brass uppercase">
                No seu ritmo
              </p>
              <p className="mt-2 text-[16px] leading-snug font-semibold text-bone">
                Abre no celular, sem app e sem senha. Marque o dia no papel.
              </p>
            </figcaption>
          </figure>

          <figure className="reveal group relative overflow-hidden rounded-2xl border border-[var(--line)] md:col-span-5">
            <img
              src="/images/produto-aberto-v2.png"
              style={{ objectPosition: "50% 80%" }}
              alt="Ebook aberto mostrando as páginas 06h00 O gatilho do despertar e 07h00 Café da manhã com fibra"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
              width={1024}
              height={768}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-brass uppercase">Por dentro</p>
              <p className="mt-2 text-[15px] leading-snug font-semibold text-bone">
                Uma ação por horário: o que fazer, quanto e por quê.
              </p>
            </figcaption>
          </figure>

          {/* Ficha + preço */}
          <div
            className="reveal flex flex-col justify-between gap-8 rounded-2xl border border-[var(--line)] bg-ink-2 p-7 md:col-span-3"
            data-reveal-delay="80"
          >
            <ul className="space-y-4">
              {SPECS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass/12 text-brass">
                    <Icon size={15} strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block text-[10.5px] font-bold tracking-[0.18em] text-bone-dim/55 uppercase">
                      {label}
                    </span>
                    <span className="block text-[14px] leading-snug text-bone">{value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[var(--line)] pt-6">
              <p className="flex items-end gap-1.5">
                <span className="h-display mb-1.5 text-[17px] text-bone-dim">{PRICE.currency}</span>
                <span className="h-display text-[52px] leading-none text-bone">{PRICE.amount}</span>
                <span className="mb-1.5 text-[12px] text-bone-dim/60">único</span>
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-4 text-center">
          <Cta label="Quero o kit completo" />
          <CheckoutNote />
          <p className="text-[11.5px] text-bone-dim/40">
            Imagens ilustrativas geradas por IA; não representam resultados de clientes.
            Produto 100% digital — nada é enviado pelo correio.
          </p>
        </div>
      </div>
    </section>
  );
}
