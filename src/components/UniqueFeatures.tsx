import { BookOpen, Globe, Users, ShieldCheck, HeartHandshake, MessageSquare } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const features = [
  {
    number: '01',
    icon: BookOpen,
    color: '#5BA48A',
    tag: 'FICHA DO CLIENTE',
    title: 'Memória permanente de cada cliente',
    description: 'Histórico completo desde o primeiro atendimento: quantas vezes veio, o que fez, fotos dos resultados registradas, observações do profissional. Tudo em um único lugar, acessível em segundos. Seu cliente chega e você já sabe tudo sobre ele.',
    callout: 'Fotos + histórico + procedimentos em um lugar',
  },
  {
    number: '02',
    icon: Globe,
    color: '#9D7147',
    tag: 'BIO DO INSTAGRAM',
    title: 'Sua página profissional — melhor que qualquer Linktree',
    description: 'Uma página elegante e sofisticada para colocar na bio do Instagram — com catálogo completo de serviços e joias, botão de agendamento e formulário de contato. Desenvolvida para o segmento de piercing. Diferente de tudo que existe no mercado hoje.',
    callout: 'Catálogo + agendamento + contato em uma página',
  },
  {
    number: '03',
    icon: Users,
    color: '#4B9CD3',
    tag: 'PDV INTELIGENTE',
    title: 'Atende duas amigas ao mesmo tempo, sem confusão',
    description: 'Inicie a venda no tablet com uma cliente enquanto a outra é atendida. Finalize no PC, cupom enviado online automaticamente — sem impressora, sem fila, sem erro. Um fluxo que nenhum outro PDV do mercado oferece para studios.',
    callout: 'Início no tablet · fechamento no PC · cupom online',
  },
  {
    number: '04',
    icon: ShieldCheck,
    color: '#E07B5B',
    tag: 'ANAMNESE DIGITAL',
    title: 'Acabou o papel. Proteção jurídica real.',
    description: 'Ficha digital assinada pelo cliente no momento do atendimento — registra IP, dispositivo, data e hora. Suporta assinatura de responsável para menores de idade. Exportável em PDF com carimbo legal. Vale juridicamente e te protege de qualquer notificação.',
    callout: 'IP + dispositivo + assinatura com validade jurídica',
  },
  {
    number: '05',
    icon: HeartHandshake,
    color: '#C47E9A',
    tag: 'PÓS-ATENDIMENTO',
    title: 'O cuidado que fideliza começa depois que o cliente sai',
    description: 'Contatos programados de cicatrização com datas configuráveis por procedimento, solicitação automática de fotos do resultado, registro de ocorrências. O cliente recebe acompanhamento profissional sem você precisar lembrar de nada. Nenhum outro sistema de studio tem isso.',
    callout: 'Acompanhamento de cicatrização 100% automático',
  },
  {
    number: '06',
    icon: MessageSquare,
    color: '#25D366',
    tag: 'WHATSAPP NATIVO',
    title: 'WhatsApp dentro do CRM. Sem abrir o app.',
    description: 'Inbox real com visual idêntico ao WhatsApp Web — histórico completo de conversas, etapa do lead no funil, interesse registrado, tudo dentro da plataforma. Um dos únicos CRMs do mercado com essa integração nativa. Você vende, atende e acompanha sem sair da Lapid.',
    callout: 'Inbox real · funil · histórico · sem abrir o WhatsApp',
  },
];

export function UniqueFeatures() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="por-que-lapid"
      style={{ background: 'linear-gradient(180deg, #FAF9F7 0%, #F2EDE6 40%, #FAF9F7 100%)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.25) 30%, rgba(157,113,71,0.25) 70%, transparent)' }}
      />
      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.25) 30%, rgba(157,113,71,0.25) 70%, transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(157,113,71,0.08) 0%, transparent 60%)' }}
      />

      {/* Decorative diamonds */}
      <DiamondDecor size={90} className="absolute -right-10 top-20 opacity-[0.07]" />
      <DiamondDecor size={50} className="absolute -left-6 bottom-24 opacity-[0.07]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Somente na Lapid
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Por que a Lapid é
            <span className="gold-text block">diferente de tudo.</span>
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            Seis recursos que você não vai encontrar em nenhum outro sistema de gestão para studios — construídos especificamente para a realidade de quem trabalha com piercing.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="reveal group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  transitionDelay: `${i * 0.07}s`,
                  background: '#1E1A17',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${feat.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.08)';
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${feat.color}80, transparent)` }}
                />

                <div className="p-7">
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${feat.color}18`,
                        border: `1px solid ${feat.color}35`,
                      }}
                    >
                      <Icon size={22} style={{ color: feat.color }} />
                    </div>
                    <span
                      className="text-[10px] font-black tracking-widest"
                      style={{ color: `${feat.color}60` }}
                    >
                      {feat.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <div
                    className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-lg"
                    style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}25` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: feat.color }} />
                    <span
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: feat.color }}
                    >
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3 leading-snug">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {feat.description}
                  </p>

                  {/* Callout pill */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                    style={{
                      background: `${feat.color}10`,
                      border: `1px solid ${feat.color}20`,
                      color: `${feat.color}`,
                    }}
                  >
                    <DiamondDecor size={9} />
                    {feat.callout}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <p className="text-stone-500 mb-6 text-base">
            Esses recursos só existem porque a Lapid foi construída do zero para o segmento de piercing.
            <span className="text-stone-700 font-semibold"> Não é adaptação. É especialização.</span>
          </p>
          <a href="#planos" className="btn-gold px-8 py-4 text-base inline-flex items-center gap-2">
            Testar grátis por 7 dias
          </a>
        </div>
      </div>
    </section>
  );
}
