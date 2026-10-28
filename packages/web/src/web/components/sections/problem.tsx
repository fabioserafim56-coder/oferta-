import { Eyebrow } from "../ui/eyebrow";

const THOUGHTS = [
  "“Por que meu corpo não funciona?”",
  "“Quantas dicas eu ainda vou ter que testar?”",
  "“Eu só queria parar de pensar nisso.”",
  "“Eu só queria saber o que fazer primeiro.”",
];

export function Problem() {
  return (
    <section className="relative border-t border-[var(--line)] py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* imagem */}
          <div className="reveal relative">
            <div className="overflow-hidden rounded-[20px] border border-[var(--line)]">
              <img
                src="/images/ruminacao-espelho-v3.png"
                alt="Mulher de frente para o espelho observando a própria barriga com expressão de cansaço"
                className="aspect-[3/4] w-full object-cover grayscale-[0.25]"
                width={816}
                height={1088}
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,13,.85) 0%, rgba(10,15,13,.1) 55%)",
                }}
              />
            </div>
            <p className="absolute inset-x-6 bottom-6 h-display text-[22px] leading-tight text-bone md:text-[26px]">
              “Eu não aguento mais.”
            </p>
          </div>

          {/* texto */}
          <div className="lg:pt-6">
            <div className="reveal">
              <Eyebrow>O problema não é falta de tentativa</Eyebrow>
            </div>

            <h2 className="reveal h-display h2 mt-7 text-bone" data-reveal-delay="80">
              É cansativo ir dormir pensando: <span className="accent">“e se amanhã eu estiver igual?”</span>
            </h2>

            <div className="reveal mt-8 space-y-5" data-reveal-delay="140">
              <p className="lead">
                Você tenta lembrar da água, da fibra, do horário, da postura — e ainda precisa
                decidir, todo dia, qual dica faz sentido para aquele dia. A decisão cansa mais que a ação.
              </p>
              <p className="lead">
                Quando cada orientação aparece isolada, o que falta não é informação. Falta uma
                <strong className="font-semibold text-bone"> ordem</strong> que tire a dúvida da hora de agir.
              </p>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-3" data-reveal-delay="200">
              {THOUGHTS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] bg-ink-2 px-4 py-2.5 text-[13.5px] text-bone-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="reveal mt-12 border-l-2 border-clay pl-6" data-reveal-delay="260">
              <p className="h-display text-[24px] leading-[1.3] text-bone md:text-[30px]">
                Você não quer estudar o intestino. Quer parar de começar o dia sem saber qual é o
                próximo passo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
