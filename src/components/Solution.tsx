import { ArrowRight } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const solutions = [
  {
    pain: 'WhatsApp caótico e confirmações perdidas',
    fix: 'Automações de WhatsApp com templates personalizados disparam sozinhas quando um lead entra no funil, quando um agendamento é confirmado ou quando passa X dias sem contato.',
  },
  {
    pain: 'Planilha bagunçada e sem controle',
    fix: 'CRM com Kanban visual e drag-and-drop — você enxerga cada lead em tempo real, com histórico completo de interações, origem e temperatura do cliente.',
  },
  {
    pain: 'Financeiro obscuro e sem números reais',
    fix: 'Módulo financeiro integrado ao PDV: caixa, contas a receber, DRE automático, comissões por profissional e projeção de fluxo de caixa. Tudo atualizado em tempo real.',
  },
  {
    pain: 'Horas gastas em tarefas repetitivas',
    fix: 'Engine de automação sem código: triggers por inatividade, entrada em etapa ou nova mensagem — executam tarefas, movem leads e enviam mensagens sozinhos.',
  },
  {
    pain: 'Anamnese em papel e risco jurídico',
    fix: 'Anamnese digital com assinatura eletrônica, suporte a responsável para menores, link compartilhável com expiração e PDF exportável com carimbo de IP e data.',
  },
  {
    pain: 'Sem dados de marketing para decidir',
    fix: 'Lapid Analytics: CAC por canal, ROI por plataforma (Instagram Ads, Google, Influenciadores), conversão por etapa do funil e meta mensal de faturamento.',
  },
];

export function Solution() {
  return (
    <section className="py-24 relative overflow-hidden" id="solucao">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(157,113,71,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-4">
              <DiamondDecor size={14} />
              A solução
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-6">
              Cada dor tem
              <span className="gold-text block">uma resposta</span>
              <span className="text-stone-400 block">precisa.</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed mb-8">
              A Lapid não é mais um app genérico. É uma plataforma construída do zero para a realidade de quem trabalha com piercing e estética — com todas as particularidades do segmento resolvidas dentro de um único sistema.
            </p>
            <a href="https://app.lapid.com.br/auth?signup=true" className="btn-gold inline-flex">
              Começar agora
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — solutions list */}
          <div className="flex flex-col gap-4">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="reveal reveal-delay-1 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="card-dark p-5 transition-all duration-300 hover:border-gold-600/30">
                  <div className="flex gap-4">
                    {/* Pain indicator */}
                    <div className="shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-red-400/60 mb-1 line-through decoration-red-500/30">{item.pain}</div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-gold-600/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-gold-500" />
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
