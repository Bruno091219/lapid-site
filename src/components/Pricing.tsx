import { Check, X, ArrowRight } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const plans = [
  {
    id: 'solo',
    name: 'CRM Solo',
    price: 97,
    period: 'mês',
    tagline: 'Para quem trabalha sozinho e quer organizar o funil de vendas.',
    highlight: false,
    badge: null,
    features: [
      { label: '1 usuário (você)', included: true },
      { label: 'CRM com Kanban e automações', included: true },
      { label: 'Gestão de leads e clientes', included: true },
      { label: 'Inbox WhatsApp integrado', included: true },
      { label: 'Anamnese digital', included: true },
      { label: 'Agendamento básico', included: true },
      { label: 'PDV e controle financeiro', included: false },
      { label: 'Múltiplos profissionais', included: false },
      { label: 'Google Calendar sync', included: false },
      { label: 'Analytics avançado', included: false },
    ],
    cta: 'Começar com CRM Solo',
    ctaStyle: 'ghost',
  },
  {
    id: 'essencial',
    name: 'Studio Essencial',
    price: 197,
    period: 'mês',
    tagline: 'Para studios em crescimento com equipe e gestão estruturada.',
    highlight: true,
    badge: 'Mais popular',
    features: [
      { label: 'Até 5 usuários', included: true },
      { label: 'CRM com Kanban e automações', included: true },
      { label: 'Gestão de leads e clientes', included: true },
      { label: 'Inbox WhatsApp integrado', included: true },
      { label: 'Anamnese digital', included: true },
      { label: 'Agendamento + Google Calendar', included: true },
      { label: 'PDV + controle de caixa', included: true },
      { label: 'Financeiro completo (DRE, metas)', included: true },
      { label: 'Pós-atendimento e follow-up', included: true },
      { label: 'Analytics avançado', included: false },
    ],
    cta: 'Testar Studio Essencial',
    ctaStyle: 'gold',
  },
  {
    id: 'completo',
    name: 'Studio Completo',
    price: 297,
    period: 'mês',
    tagline: 'Para studios que querem dominar o mercado com dados e automação total.',
    highlight: false,
    badge: 'Acesso total',
    features: [
      { label: 'Usuários ilimitados', included: true },
      { label: 'CRM com Kanban e automações', included: true },
      { label: 'Gestão de leads e clientes', included: true },
      { label: 'Inbox WhatsApp integrado', included: true },
      { label: 'Anamnese digital', included: true },
      { label: 'Agendamento + Google Calendar', included: true },
      { label: 'PDV + controle de caixa', included: true },
      { label: 'Financeiro completo (DRE, metas)', included: true },
      { label: 'Pós-atendimento e follow-up', included: true },
      { label: 'Lapid Analytics (CAC, ROI, funil)', included: true },
    ],
    cta: 'Testar Studio Completo',
    ctaStyle: 'ghost',
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden" id="planos">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(157,113,71,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Planos e preços
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
            Invista no seu studio.
            <span className="gold-text block">Não em dez ferramentas.</span>
          </h2>
          <p className="text-lg text-white/50 mb-3">
            Todos os planos incluem 7 dias de teste gratuito. Sem cartão de crédito.
          </p>
        </div>

        {/* Annual discount badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-600/30 bg-gold-600/8">
            <DiamondDecor size={12} />
            <span className="text-xs font-medium text-gold-300">Planos anuais com 2 meses grátis — fale com a gente</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`reveal rounded-2xl p-7 relative transition-all duration-300 ${
                plan.highlight
                  ? 'border border-gold-600/50 shadow-gold-lg'
                  : 'card-dark'
              }`}
              style={{
                transitionDelay: `${i * 0.12}s`,
                background: plan.highlight ? 'rgba(157,113,71,0.08)' : undefined,
                transform: plan.highlight ? 'scale(1.02)' : undefined,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  plan.highlight
                    ? 'text-onyx'
                    : 'text-gold-300 border border-gold-600/40 bg-gold-600/10'
                }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #9D7147, #BEA885)' } : undefined}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/45 mb-5">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="text-sm text-white/50 font-medium">R$</span>
                  <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                  <span className="text-sm text-white/40 mb-1">/{plan.period}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm mb-6 transition-all duration-200 ${
                  plan.ctaStyle === 'gold' ? 'btn-gold' : 'btn-ghost'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-5" />

              {/* Features */}
              <div className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3">
                    <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                      feature.included ? '' : ''
                    }`}
                      style={{
                        background: feature.included ? 'rgba(157,113,71,0.2)' : 'rgba(255,255,255,0.04)',
                        border: feature.included ? '1px solid rgba(157,113,71,0.4)' : '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {feature.included
                        ? <Check size={9} className="text-gold-400" />
                        : <X size={9} className="text-white/20" />
                      }
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/25 line-through decoration-white/15'}`}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust footnote */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/30">
            Cancelamento a qualquer momento · Suporte via WhatsApp · Migração de dados gratuita · Dados criptografados
          </p>
        </div>
      </div>
    </section>
  );
}
