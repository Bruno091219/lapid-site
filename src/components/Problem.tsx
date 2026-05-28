import { MessageCircle, LayoutGrid, DollarSign, Clock, AlertTriangle, FileX } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const problems = [
  {
    icon: MessageCircle,
    title: 'WhatsApp virou seu sistema de gestão',
    description: 'Confirmações perdidas no meio de 300 mensagens. Clientes que somem. Nenhum histórico acessível quando precisa.',
    pain: 'Você perde clientes todos os dias sem saber.',
  },
  {
    icon: LayoutGrid,
    title: 'Planilha que ninguém atualiza direito',
    description: 'Excel com dados duplicados, sem sincronização entre atendentes, e que trava quando abre no celular do estúdio.',
    pain: 'Decisões baseadas em informações erradas.',
  },
  {
    icon: DollarSign,
    title: 'Financeiro no escuro',
    description: 'Você não sabe quanto faturou esse mês, qual joia está dando prejuízo, ou quanto cada profissional gerou de comissão.',
    pain: 'Dinheiro saindo sem você ver.',
  },
  {
    icon: Clock,
    title: 'Horas perdidas em tarefas repetitivas',
    description: 'Confirmar agenda manualmente, lembrar de cobrar retorno, repassar instrução de cuidado pós-piercing para cada cliente.',
    pain: 'Seu tempo vale mais do que isso.',
  },
  {
    icon: AlertTriangle,
    title: 'Anamnese em papel (ou nem isso)',
    description: 'Formulários físicos que somem, sem assinatura digital, sem controle de quem assinou e quando. Risco jurídico real.',
    pain: 'Uma notificação pode custar caro.',
  },
  {
    icon: FileX,
    title: 'Sem visibilidade do funil de vendas',
    description: 'Quantos leads vieram do Instagram essa semana? Qual canal converte mais? Você não tem essa resposta porque não tem o dado.',
    pain: 'Investimento em marketing sem retorno mensurável.',
  },
];

export function Problem() {
  return (
    <section className="py-24 relative overflow-hidden" id="problema">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4">
            <DiamondDecor size={14} />
            O problema real
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
            Gerir um studio de piercing
            <span className="block text-white/30">não é pra amadores.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            A maioria dos studios opera no caos — e chama isso de "rotina". Enquanto isso, dinheiro escorrega, clientes somem e o dono trabalha 12h por dia sem ver crescimento real.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal card-dark p-6 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <Icon size={18} className="text-red-400/80" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed mb-3">{item.description}</p>
                    <p className="text-xs font-medium text-red-400/70 italic">"{item.pain}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition phrase */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white/40">
            Tudo isso tem solução. E cabe em uma única plataforma.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-gold-600/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
