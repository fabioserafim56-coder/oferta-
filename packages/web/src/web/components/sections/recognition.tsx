import { Bookmark, ListChecks, NotebookPen } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";

const SITUATIONS = [
  { icon: Bookmark, title: "Você salva dicas, mas não começa", body: "Água, fibra, caminhada… a informação está lá. Falta transformar tudo em uma rotina que você consiga acompanhar." },
  { icon: ListChecks, title: "Você muda tudo ao mesmo tempo", body: "Depois, fica difícil lembrar o que fez e observar como o seu corpo respondeu." },
  { icon: NotebookPen, title: "Você quer saber o que observar", body: "Não só ler mais: ter uma referência para registrar a rotina e reconhecer quando procurar ajuda." },
];

export function Recognition() {
  return (
    <section className="bg-bone py-16 text-ink md:py-20">
      <div className="wrap">
        <div className="reveal max-w-3xl">
          <Eyebrow>É sobre a sua rotina</Eyebrow>
          <h2 className="h-display h2 mt-5">Você se reconhece <span className="accent">nessas situações?</span></h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink/70">O guia foi pensado para quem quer sair da informação espalhada e ter um ponto de partida educativo.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {SITUATIONS.map(({ icon: Icon, title, body }, i) => (
            <article key={title} className="reveal border-t border-ink/15 pt-6" data-reveal-delay={i * 60}>
              <Icon size={24} className="text-clay" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}