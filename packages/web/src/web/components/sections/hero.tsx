import { Clock3, ListOrdered, CalendarCheck } from "lucide-react";
import { Cta, CheckoutNote } from "../ui/cta";
import { Eyebrow } from "../ui/eyebrow";
import { PRICE } from "../../lib/offer";

const STATS = [
  { icon: ListOrdered, value: "8", label: "ações guiadas, em ordem" },
  { icon: Clock3, value: "24h", label: "o primeiro ciclo completo" },
  { icon: CalendarCheck, value: "7 dias", label: "plano de continuidade" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[104px] pb-20 md:pt-[136px] md:pb-32">
      {/* fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "radial-gradient(circle, #c9603f 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-52 h-[520px] w-[520px] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "radial-gradient(circle, #7e8f7c 0%, transparent 70%)" }}
      />
      <div aria-hidden className="noise" />

      <div className="wrap relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* coluna texto */}
          <div>
            <div className="reveal">
              <Eyebrow>Guia educativo para adultos</Eyebrow>
            </div>

            <h1 className="reveal h-display h1 mt-7 text-bone" data-reveal-delay="80">
              Pare de juntar dicas sobre intestino preso.
              <br />
              Saiba <span className="accent">por onde começar.</span>
            </h1>

            <p className="reveal mt-5 text-sm font-semibold text-brass">O Desbloqueio Intestinal de 24 Horas · Ebook digital</p>

            <p className="reveal lead mt-6" data-reveal-delay="160">
              Um guia educativo que organiza água, alimentação, movimento e postura em
              <strong className="font-semibold text-bone"> 8 ações ao longo do dia</strong>,
              com plano de continuidade e registro de 7 dias.
            </p>

            <div className="reveal mt-10 flex flex-col items-start gap-4" data-reveal-delay="240">
              <Cta label="Quero o guia por R$ 67" />
              <a href="#por-dentro" className="text-sm font-semibold text-brass underline underline-offset-4">Ver uma página real antes de comprar</a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-[13px] font-semibold text-bone">
                  Pagamento único · Acesso após confirmação · {PRICE.currency} {PRICE.amount}
                </span>
                <span aria-hidden className="h-3 w-px bg-[var(--line)]" />
                <CheckoutNote />
              </div>
            </div>

            <p className="reveal mt-6 text-sm leading-6 text-bone-dim">“24 horas” é a duração do roteiro, não uma promessa de alívio. Não é um programa de emagrecimento.</p>

            {/* stats */}
            <div
              className="reveal mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)]"
              data-reveal-delay="320"
            >
              {STATS.map((s) => (
                <div key={s.value} className="bg-ink-2 px-4 py-5">
                  <s.icon size={15} strokeWidth={2} className="mb-3 text-brass" />
                  <p className="h-display text-[30px] leading-none text-bone">{s.value}</p>
                  <p className="mt-2 text-[12px] leading-snug text-bone-dim/75">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* coluna imagem */}
          <div className="reveal relative" data-reveal-delay="200">
            <div className="relative overflow-hidden rounded-[20px] border border-[var(--line)]">
              <img
                src="/images/hero-premium.png"
                alt="Mulher na cozinha com um copo de água e um checklist impresso sobre a bancada, ao amanhecer"
                className="aspect-[4/5] w-full object-cover"
                width={768}
                height={960}
                loading="eager"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,13,.72) 0%, rgba(10,15,13,0) 45%)",
                }}
              />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[13px] leading-relaxed text-bone/90">
                  <span className="font-bold text-brass">06h00 —</span> a primeira ação do roteiro. Um ponto de partida
                  para acompanhar os hábitos do dia.
                </p>
              </div>
            </div>

            {/* selo flutuante */}
            <div className="absolute -top-4 -left-4 hidden rounded-xl border border-[var(--line)] bg-ink-3/95 px-4 py-3 backdrop-blur-sm sm:block">
              <p className="text-[10px] font-bold tracking-[0.18em] text-brass uppercase">Ebook</p>
              <p className="mt-1 text-[13px] font-semibold text-bone">28 páginas · 25 capítulos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
