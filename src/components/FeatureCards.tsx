import type { ReactNode } from 'react';

type Card = {
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  bullets?: string[];
};

const BulletIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="7" cy="7" r="7" fill="rgba(157,113,71,0.12)" />
    <path d="M4.5 7L6 8.5L9.5 5" stroke="#9D7147" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cards: Card[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: 'Ficha do cliente',
    title: 'Ficha completa do cliente',
    description: 'Cada cliente tem um perfil com histórico de atendimentos, fotos, preferências de joias e anotações importantes.',
    bullets: [
      'Histórico completo de atendimentos',
      'Fotos dos resultados registradas',
      'Preferências e anotações importantes',
      'Alergias e informações de saúde',
      'Linha do tempo de toda a relação com o studio',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    label: 'PDV simultâneo',
    title: 'PDV durante o atendimento',
    description: 'Cobra joias, procedimentos e produtos enquanto atende — em até 3 clientes simultaneamente. Inicia no celular, finaliza no PC. Cupom enviado pelo WhatsApp automaticamente.',
    bullets: [
      'Atendimento simultâneo de até 3 clientes',
      'Cupom digital enviado pelo WhatsApp',
      'Inicia no celular e finaliza no PC',
      'Múltiplas formas de pagamento com taxas por parcela',
      'Comissão calculada automaticamente',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    label: 'Anamnese digital',
    title: 'Anamnese digital',
    description: 'O cliente preenche a ficha de saúde online antes de chegar. Sem papel, sem retrabalho e com assinatura digital.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: 'Pós-atendimento',
    title: 'Pós-atendimento automático',
    description: 'Mensagens automáticas de cuidado após cada procedimento. O cliente sai e a Lapid continua cuidando por você.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Agendamento',
    title: 'Agendamento integrado',
    description: 'Agenda sincronizada com Google Calendar, confirmação automática via WhatsApp e gestão de disponibilidade por profissional. Sem conflito, sem esquecimento.',
    bullets: [
      'Sync bidirecional com Google Calendar',
      'Confirmação automática via WhatsApp',
      'Bloqueio de agenda com recorrência',
      'Agendamento recorrente para clientes',
      'Gestão de disponibilidade por profissional',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: 'Financeiro',
    title: 'Financeiro completo',
    description: 'DRE automático, fluxo de caixa, contas a receber, metas mensais e comissão por profissional. Você sabe exatamente quanto ganhou e quanto cada um gerou.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    label: 'Produtos',
    title: 'Gestão de produtos',
    description: 'Catálogo completo de joias com material, calibre, região e variações. Controle de estoque em tempo real com alertas de reposição.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    label: 'Dashboard',
    title: 'Dashboard executivo',
    description: 'Visão completa do negócio em tempo real — faturamento, agendamentos, ticket médio e metas. Tudo numa tela, sem planilha.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: 'Analytics',
    title: 'Lapid Analytics',
    description: 'CAC por canal, ROI por plataforma de anúncio, funil de conversão e performance por profissional. Decisões baseadas em dados reais.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    label: 'Comissionamento',
    title: 'Comissionamento automático',
    description: 'Configure % ou valor fixo por profissional. A cada venda no PDV ou agendamento confirmado, a comissão é calculada e registrada automaticamente.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Controle de acesso',
    title: 'Controle de acesso total',
    description: 'Defina exatamente o que cada função pode ver e fazer no sistema. Admin, Atendimento, Profissional, Comercial — cada um acessa só o que precisa.',
    bullets: [
      '5 perfis de acesso configuráveis',
      'Permissões granulares por módulo',
      'Segurança total dos dados do studio',
      'Ideal para equipes com múltiplos profissionais',
    ],
  },
];

export function FeatureCards() {
  return (
    <section style={{ padding: '120px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08,
              color: '#0A0A0A', margin: '0 0 16px',
            }}
          >
            11 módulos. Um sistema só.
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B6B', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
            Tudo integrado, tudo no lugar certo, pensado para o dia a dia do studio.
          </p>
        </div>

        {/* 2 colunas no mobile, 3 no desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className={`reveal reveal-delay-${(i % 3) + 1} p-5 lg:p-9`}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '20px',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.09)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(157,113,71,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9D7147', marginBottom: '14px', flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: 700, letterSpacing: '-0.02em',
                  color: '#0A0A0A', margin: '0 0 8px',
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#6B6B6B', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                {card.description}
              </p>

              {/* Bullets */}
              {card.bullets && (
                <ul
                  style={{
                    listStyle: 'none', padding: 0,
                    margin: '14px 0 0',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '14px',
                    display: 'flex', flexDirection: 'column', gap: '9px',
                  }}
                >
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '7px',
                        fontSize: 'clamp(12px, 1.1vw, 14px)', color: '#4A4A4A', fontWeight: 500, lineHeight: 1.4,
                      }}
                    >
                      <BulletIcon />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
