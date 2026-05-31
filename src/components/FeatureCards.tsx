const cards = [
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
    description: 'Cobra joias, procedimentos e produtos enquanto atende — sem abrir outro sistema ou perder o fio do atendimento.',
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
            Muito mais dentro da plataforma.
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B6B', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
            Cada detalhe pensado para o dia a dia do studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '20px',
                padding: '40px',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                cursor: 'default',
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
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(157,113,71,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9D7147', marginBottom: '20px',
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em',
                  color: '#0A0A0A', margin: '0 0 10px',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
