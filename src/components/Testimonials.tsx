import { Star } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const testimonials = [
  {
    name: 'Camila Torres',
    role: 'Proprietária',
    studio: 'Ink & Skin Studio — São Paulo, SP',
    avatar: 'CT',
    color: '#9D7147',
    stars: 5,
    text: 'Antes da Lapid, eu perdia confirmações no WhatsApp toda semana. Agora o sistema confirma os agendamentos sozinho e eu só olho o que foi confirmado. Em 3 meses reduzi o no-show de 30% para 8%.',
    highlight: 'Reduziu no-show de 30% para 8%',
  },
  {
    name: 'Rafael Mendes',
    role: 'Piercer e gestor',
    studio: 'Studio Black Needle — Curitiba, PR',
    avatar: 'RM',
    color: '#5BA48A',
    stars: 5,
    text: 'O módulo financeiro mudou tudo. Eu nunca sabia quanto estava ganhando de verdade. Agora tenho DRE, fluxo de caixa e até a comissão de cada profissional calculada automaticamente. Descobri que dois serviços davam prejuízo.',
    highlight: 'Descobriu serviços que davam prejuízo',
  },
  {
    name: 'Beatriz Almeida',
    role: 'Fundadora',
    studio: 'Aura Piercing Studio — Rio de Janeiro, RJ',
    avatar: 'BA',
    color: '#7C6FBF',
    stars: 5,
    text: 'A anamnese digital foi o que me convenceu a assinar. Eu tinha pavor de processo por falta de documento assinado. Agora cada cliente assina no tablet, fica salvo com data e IP, e eu exporto em PDF se precisar.',
    highlight: 'Zero risco jurídico com anamnese digital',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Dono e piercer',
    studio: 'Golden Gauge — Belo Horizonte, MG',
    avatar: 'LO',
    color: '#D4A853',
    stars: 5,
    text: 'Uso o CRM toda semana para acompanhar quem está chegando pelo Instagram. Monto o funil, vejo quantos converteram e comparo com o que gastei em anúncio. Aumentei meu ROI em 40% cortando canal que não funcionava.',
    highlight: '+40% ROI em marketing com dados reais',
  },
  {
    name: 'Fernanda Costa',
    role: 'Gestora comercial',
    studio: 'Piercing Luxe — Florianópolis, SC',
    avatar: 'FC',
    color: '#C47E9A',
    stars: 5,
    text: 'Nossa equipe tem 6 pessoas e antes cada um anotava as coisas de um jeito diferente. A Lapid padronizou tudo. Agenda, caixa, follow-up — tudo no mesmo sistema, em tempo real. Atendimento ficou muito mais profissional.',
    highlight: 'Padronizou equipe de 6 pessoas',
  },
  {
    name: 'Diego Santos',
    role: 'Piercer autônomo',
    studio: 'Studio DS — Porto Alegre, RS',
    avatar: 'DS',
    color: '#4B9CD3',
    stars: 5,
    text: 'Comecei com o plano Solo e me pagou no primeiro mês. Recuperei 4 leads que eu tinha perdido no WhatsApp com a automação de follow-up. São R$97 que viraram R$1.200 em vendas que eu não teria feito.',
    highlight: 'R$97 de investimento → R$1.200 em vendas',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" id="depoimentos">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
            Studios que
            <span className="gold-text block">cresceram com a Lapid.</span>
          </h2>
          <p className="text-white/50">
            Resultados reais de proprietários que pararam de adivinhar e começaram a decidir com dados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal card-dark p-6 flex flex-col transition-all duration-300 hover:border-gold-600/25"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={13} className="fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-lg self-start"
                style={{ background: `${t.color}14`, border: `1px solid ${t.color}25` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                <span className="text-[10px] font-semibold" style={{ color: t.color }}>
                  {t.highlight}
                </span>
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: `${t.color}25`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/35">{t.studio}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '200+', label: 'Studios ativos' },
            { value: '4.9/5', label: 'Avaliação média' },
            { value: '12mil+', label: 'Clientes gerenciados' },
            { value: '98%', label: 'Taxa de retenção' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gold-text mb-1">{stat.value}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
