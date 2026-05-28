import { Zap, Smartphone, RefreshCcw, Globe, MessageCircle, DollarSign, Activity, Gem } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const differentials = [
  {
    icon: RefreshCcw,
    title: 'Sincronização em tempo real',
    description: 'Qualquer alteração feita na plataforma — venda, agendamento, lead — aparece instantaneamente em todos os dispositivos conectados. Zero dessincronização entre a equipe.',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'Google Calendar nativo',
    description: 'Sincronização bidirecional real: eventos criados na Lapid aparecem no Google Calendar e vice-versa. OAuth 2.0 seguro, sem integrações terceirizadas.',
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp integrado de verdade',
    description: 'Não é link do WhatsApp Web. É uma inbox real com histórico, templates com variáveis dinâmicas ({nome}, {procedimento}, {data}) e automações que disparam sem intervenção manual.',
    highlight: false,
  },
  {
    icon: DollarSign,
    title: 'Comissionamento automático',
    description: 'Configure % de comissão por profissional e por serviço. A cada venda no PDV, a comissão é calculada e registrada automaticamente no financeiro.',
    highlight: false,
  },
  {
    icon: Activity,
    title: 'Analytics de marketing com ROI',
    description: 'Rastreie o custo por lead e por cliente adquirido em cada canal. Saiba exatamente quanto você gastou no Instagram Ads para gerar R$1 de faturamento.',
    highlight: false,
  },
  {
    icon: Smartphone,
    title: 'PWA — funciona no celular',
    description: 'A Lapid é uma Progressive Web App. Instale no celular sem baixar nada na App Store. Funciona offline e com a rapidez de um app nativo.',
    highlight: false,
  },
  {
    icon: Gem,
    title: 'Catálogo especializado em joias',
    description: 'Cadastro de joias com material (Titânio, Ouro, PVDF), calibre, comprimento, regiões anatômicas do piercing e processamento de imagem com IA. Não existe isso em nenhum outro sistema.',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Automações sem código',
    description: 'Monte fluxos de automação com triggers e ações em minutos — sem programar nada. Se um lead ficou 3 dias sem resposta, o sistema envia uma mensagem sozinho.',
    highlight: false,
  },
];

export function Differentials() {
  return (
    <section className="py-24 relative overflow-hidden" id="diferenciais">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 30%, rgba(157,113,71,0.07) 0%, transparent 60%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />

      {/* Decorative diamonds */}
      <DiamondDecor size={80} className="absolute -right-8 top-24 opacity-10" />
      <DiamondDecor size={40} className="absolute left-8 bottom-32 opacity-8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Por que a Lapid
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
            O que a gente faz
            <span className="gold-text block">que mais ninguém faz.</span>
          </h2>
          <p className="text-lg text-white/50">
            Existem dezenas de sistemas de gestão. Nenhum foi construído para a realidade de um studio de piercing com a profundidade que a Lapid oferece.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`reveal p-6 rounded-2xl transition-all duration-300 group ${
                  item.highlight
                    ? 'border border-gold-600/30 hover:border-gold-500/50'
                    : 'card-dark hover:border-gold-600/20'
                }`}
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  background: item.highlight ? 'rgba(157,113,71,0.07)' : undefined,
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: item.highlight ? 'rgba(157,113,71,0.2)' : 'rgba(157,113,71,0.1)',
                    border: '1px solid rgba(157,113,71,0.25)',
                  }}>
                  <Icon size={18} className={item.highlight ? 'text-gold-400' : 'text-gold-500/80'} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
                {item.highlight && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                    <DiamondDecor size={10} />
                    Exclusivo Lapid
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison callout */}
        <div className="mt-16 glass-card p-8 text-center">
          <p className="text-lg text-white/60 mb-3">
            Enquanto outros sistemas oferecem agendamento genérico,
          </p>
          <p className="text-2xl font-bold text-white">
            a Lapid oferece gestão completa com a{' '}
            <span className="gold-text">identidade do piercing</span>{' '}
            em cada detalhe.
          </p>
        </div>
      </div>
    </section>
  );
}
