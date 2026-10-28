import { SUPPORT_EMAIL } from "../../lib/offer";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-ink-2 py-14">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="h-display text-[20px] text-bone">O Desbloqueio Intestinal de 24 Horas</p>
            <p className="mt-4 max-w-[70ch] text-[13px] leading-[1.75] text-bone-dim/60">
              Este material tem finalidade exclusivamente educativa e informativa. Não realiza
              diagnóstico, não prescreve tratamento, não substitui consulta, exame ou orientação de
              profissional de saúde habilitado e não garante qualquer resultado. Os resultados variam
              de pessoa para pessoa. Em caso de sintomas persistentes ou dos sinais de alerta
              descritos nesta página, procure atendimento médico.
            </p>
            <p className="mt-4 max-w-[70ch] text-[13px] leading-[1.75] text-bone-dim/60">
              Produto digital vendido e processado pela plataforma Kiwify. Esta página não é
              afiliada à Kiwify, ao Facebook, ao Instagram, ao Google ou ao TikTok, e não é
              endossada por nenhuma dessas empresas. Direito de arrependimento de 7 dias corridos
              conforme o art. 49 do Código de Defesa do Consumidor.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] font-bold tracking-[0.2em] text-bone-dim/50 uppercase">
              Suporte
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-block text-[14.5px] text-bone underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-clay-soft"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-6 text-[12.5px] leading-relaxed text-bone-dim/50">
              Dúvidas sobre acesso, pagamento ou cancelamento são respondidas por e-mail.
            </p>
            <p className="mt-8 text-[12px] text-bone-dim/40">
              © {new Date().getFullYear()} Uma Vida Melhor Pra Você. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
