import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Expand, X } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";

export function Demonstration() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    if (open) {
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = before; };
    }
  }, [open]);

  return (
    <section id="por-dentro" className="scroll-mt-20 py-16 md:py-24">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <Eyebrow tone="brass">Veja antes de comprar</Eyebrow>
          <h2 className="h-display h2 mt-6">Não compre no escuro. <span className="accent">Abra uma página real.</span></h2>
          <p className="lead mt-6">Esta é a página 26 do ebook: ela explica quando deixar de tentar em casa e procurar atendimento. Você pode ampliar e conferir o texto, a organização e os limites do material.</p>
          <ul className="mt-7 space-y-4 text-[16px] text-bone-dim">
            {["Títulos diretos para encontrar o assunto.", "Orientações agrupadas para facilitar a leitura.", "Sinais de alerta destacados, sem esconder os limites."].map(t => <li key={t} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-brass" />{t}</li>)}
          </ul>
          <div className="mt-8 border-l-2 border-brass pl-5">
            <h3 className="text-lg font-semibold">“Mas eu encontro dicas grátis…”</h3>
            <p className="mt-3 text-[15px] leading-7 text-bone-dim">Sim. Você não está pagando por um segredo: está pagando pela organização do guia, pelo plano de continuidade e pelo registro da rotina em um só material.</p>
          </div>
          <a href="#oferta" className="mt-7 inline-flex items-center gap-2 font-semibold text-clay-soft">Ver o que está incluído por R$ 67 <ArrowRight size={17} /></a>
        </div>
        <div className="reveal rounded-2xl border border-[var(--line)] bg-ink-2 p-5 md:p-7">
          <div className="mb-4 flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-brass"><span>Amostra do ebook</span><span>Página 26 / 28</span></div>
          <button type="button" onClick={() => setOpen(true)} aria-label="Ampliar a página 26 do ebook" className="group relative block w-full cursor-zoom-in overflow-hidden rounded-md">
            <img src="/images/seguranca-26.png" alt="Página original do ebook: quando parar de tentar em casa e procurar um médico" width={992} height={1404} loading="lazy" className="w-full" />
            <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm text-bone shadow-lg"><Expand size={16} /> Ampliar página real</span>
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-bone-dim/75">Imagem original fornecida com o material. Não é uma página gerada por IA.</p>
        </div>
      </div>
      <dialog ref={dialog} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }} className="fixed inset-0 m-auto max-h-[94dvh] w-[min(94vw,820px)] overflow-auto rounded-xl bg-bone p-3 text-ink backdrop:bg-black/85">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-bone p-3"><h3 className="font-semibold">Página 26 — amostra original</h3><button type="button" autoFocus onClick={() => setOpen(false)} aria-label="Fechar amostra" className="rounded-full bg-ink/10 p-2"><X size={22} /></button></div>
        <img src="/images/seguranca-26.png" alt="Página 26 original em tamanho ampliado" width={992} height={1404} className="w-full" />
      </dialog>
    </section>
  );
}