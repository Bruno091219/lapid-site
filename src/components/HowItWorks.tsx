import { UserPlus, Settings, TrendingUp } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Crie sua conta em 2 minutos',
    description: 'Informe o nome do seu studio, crie seu login e configure os dados básicos. Sem cartão de crédito no período de teste. Em 2 minutos você já está dentro da plataforma.',
    detail: 'Importamos seus clientes do Excel ou de outro sistema — sem trabalho manual.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configure para o seu estúdio',
    description: 'Adicione seus profissionais, configure horários de funcionamento, cadastre seus serviços e joias, defina as etapas do seu funil. A plataforma se adapta ao seu fluxo — não o contrário.',
    detail: 'Conecte o WhatsApp e o Google Calendar com um clique. Pronto para uso.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Opere e cresça com dados',
    description: 'Seu time gerencia clientes, agenda, vendas e follow-up em uma única tela. Você acompanha os números do negócio em tempo real e toma decisões com base em dados concretos.',
    detail: 'Studios Lapid reportam +37% de faturamento em média nos primeiros 90 dias.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" id="como-funciona">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Como funciona
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Três passos para
            <span className="gold-text block">transformar seu studio.</span>
          </h2>
          <p className="text-stone-500 text-lg">
            Não precisa de técnico, não precisa de treinamento longo. Em menos de uma hora seu studio está operando.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.3) 20%, rgba(157,113,71,0.3) 80%, transparent)' }}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="reveal text-center"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Number + icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative"
                      style={{
                        background: 'linear-gradient(135deg, rgba(157,113,71,0.2) 0%, rgba(190,168,133,0.1) 100%)',
                        border: '1px solid rgba(157,113,71,0.3)',
                        boxShadow: '0 0 40px rgba(157,113,71,0.15)',
                      }}
                    >
                      <Icon size={26} className="text-gold-400" />
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-onyx"
                        style={{ background: 'linear-gradient(135deg, #9D7147, #BEA885)' }}>
                        {i + 1}
                      </div>
                    </div>
                    {/* Step number */}
                    <span className="text-[11px] font-bold tracking-widest text-gold-600/60 uppercase">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{step.description}</p>
                  <p className="text-xs text-gold-400/80 font-medium italic">✦ {step.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="https://app.lapid.com.br/auth?signup=true" className="btn-gold px-8 py-4 text-base inline-flex">
            Começar agora — grátis por 15 dias
          </a>
          <p className="mt-3 text-xs text-stone-400">Sem cartão de crédito · Cancele quando quiser</p>
        </div>
      </div>
    </section>
  );
}
