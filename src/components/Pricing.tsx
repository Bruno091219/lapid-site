const SIGNUP_URL = 'https://app.lapid.com.br/auth?signup=true';

const plans = [
  {
    name: 'CRM Pro',
    price: 97,
    description: 'Para studios começando a se organizar.',
    features: [
      'CRM completo com Kanban',
      'Agendamento online',
      'Ficha do cliente',
      'WhatsApp integrado',
      'Até 2 profissionais',
    ],
    highlighted: false,
  },
  {
    name: 'Studio Completo',
    price: 167,
    description: 'Para studios que querem crescer de verdade.',
    badge: 'Mais popular',
    features: [
      'Tudo do Studio Essencial',
      'CRM com WhatsApp nativo',
      'Página na bio do Instagram',
      'Analytics completo',
      'Profissionais ilimitados',
    ],
    highlighted: true,
  },
  {
    name: 'Studio Essencial',
    price: 127,
    description: 'Para studios em crescimento.',
    features: [
      'Tudo do CRM Pro',
      'PDV integrado',
      'Anamnese digital',
      'Pós-atendimento automático',
      'Até 5 profissionais',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" style={{ padding: '120px 0', background: '#F3F0EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span
            style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#C4933F', display: 'block', marginBottom: '16px',
            }}
          >
            Planos
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05,
              color: '#0A0A0A', margin: '0 0 16px',
            }}
          >
            Simples e transparente.
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B6B', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
            15 dias grátis em todos os planos. Sem cartão de crédito.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: plan.highlighted ? '#0A0A0A' : '#FFFFFF',
                border: plan.highlighted ? 'none' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '24px',
                padding: '40px 36px',
                position: 'relative',
                boxShadow: plan.highlighted ? '0 32px 80px rgba(0,0,0,0.18)' : 'none',
                transform: plan.highlighted ? 'scale(1.02)' : 'none',
              }}
            >
              {plan.highlighted && 'badge' in plan && plan.badge && (
                <div
                  style={{
                    position: 'absolute', top: '-14px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#C4933F', color: 'white',
                    padding: '5px 16px', borderRadius: '980px',
                    fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '32px' }}>
                <p
                  style={{
                    fontSize: '14px', fontWeight: 600, color: '#C4933F',
                    letterSpacing: '0.02em', margin: '0 0 8px',
                  }}
                >
                  {plan.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '0 0 10px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: plan.highlighted ? '#666' : '#888' }}>R$</span>
                  <span
                    style={{
                      fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em',
                      color: plan.highlighted ? '#FFFFFF' : '#0A0A0A', lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '14px', color: plan.highlighted ? '#666' : '#888', fontWeight: 500 }}>/mês</span>
                </div>
                <p style={{ fontSize: '15px', color: plan.highlighted ? '#999' : '#6B6B6B', margin: 0, lineHeight: 1.5 }}>
                  {plan.description}
                </p>
              </div>

              <a
                href={SIGNUP_URL}
                style={{
                  display: 'flex', justifyContent: 'center', width: '100%',
                  background: plan.highlighted ? '#C4933F' : 'transparent',
                  color: plan.highlighted ? 'white' : '#0A0A0A',
                  padding: '15px 24px', borderRadius: '980px',
                  fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                  border: plan.highlighted ? 'none' : '1.5px solid rgba(0,0,0,0.18)',
                  transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                  letterSpacing: '-0.01em',
                  marginBottom: '32px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.highlighted) {
                    el.style.background = '#A87A2E';
                    el.style.transform = 'translateY(-1px)';
                    el.style.boxShadow = '0 8px 24px rgba(196,147,63,0.35)';
                  } else {
                    el.style.background = 'rgba(0,0,0,0.03)';
                    el.style.borderColor = 'rgba(0,0,0,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.highlighted) {
                    el.style.background = '#C4933F';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  } else {
                    el.style.background = 'transparent';
                    el.style.borderColor = 'rgba(0,0,0,0.18)';
                  }
                }}
              >
                Começar grátis
              </a>

              <div style={{ borderTop: `1px solid ${plan.highlighted ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`, paddingTop: '28px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '15px', color: plan.highlighted ? '#E0E0E0' : '#3A3A3A', fontWeight: 400,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="8" fill={plan.highlighted ? 'rgba(196,147,63,0.2)' : 'rgba(196,147,63,0.1)'} />
                        <path d="M4.5 8L6.5 10L11.5 5" stroke="#C4933F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '14px', color: '#8A8A8A', margin: 0 }}>
            Sem fidelidade · Cancele quando quiser · Suporte pelo WhatsApp · Dados criptografados
          </p>
        </div>

      </div>
    </section>
  );
}
