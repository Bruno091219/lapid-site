const SIGNUP_URL = 'https://app.lapid.com.br/auth?signup=true';
const GOLD_GRADIENT = 'linear-gradient(135deg, #9D7147 0%, #BEA885 100%)';
const GOLD_GRADIENT_HOVER = 'linear-gradient(135deg, #7A5535 0%, #9D7147 100%)';

type FeatureKey = 'crm' | 'essencial' | 'completo';

const featureMatrix: { label: string; crm: boolean; essencial: boolean; completo: boolean }[] = [
  { label: 'CRM com WhatsApp nativo',      crm: true,  essencial: true,  completo: true  },
  { label: 'Agendamento online',            crm: true,  essencial: true,  completo: true  },
  { label: 'Ficha completa do cliente',     crm: true,  essencial: true,  completo: true  },
  { label: 'Anamnese digital',              crm: true,  essencial: true,  completo: true  },
  { label: 'PDV durante o atendimento',     crm: false, essencial: true,  completo: true  },
  { label: 'Financeiro completo',           crm: false, essencial: true,  completo: true  },
  { label: 'Pós-atendimento automático',    crm: false, essencial: true,  completo: true  },
  { label: 'Página na bio do Instagram',    crm: false, essencial: false, completo: true  },
  { label: 'Lapid Analytics',              crm: false, essencial: false, completo: true  },
  { label: 'Profissionais ilimitados',      crm: false, essencial: false, completo: true  },
];

const plans: {
  name: string;
  price: number;
  description: string;
  highlighted: boolean;
  badge?: string;
  featureKey: FeatureKey;
}[] = [
  {
    name: 'CRM Pro',
    price: 97,
    description: 'Para studios começando a se organizar.',
    highlighted: false,
    featureKey: 'crm',
  },
  {
    name: 'Studio Essencial',
    price: 127,
    description: 'A escolha mais popular dos studios.',
    highlighted: true,
    badge: 'Mais popular',
    featureKey: 'essencial',
  },
  {
    name: 'Studio Completo',
    price: 167,
    description: 'Para studios que querem o máximo.',
    highlighted: false,
    featureKey: 'completo',
  },
];

function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill={dark ? 'rgba(157,113,71,0.22)' : 'rgba(157,113,71,0.1)'} />
      <path d="M4.5 8L6.5 10L11.5 5" stroke="#9D7147" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill={dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'} />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke={dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)'} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="planos" style={{ padding: '120px 0', background: '#F3F0EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span
            style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#9D7147', display: 'block', marginBottom: '16px',
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
                padding: '40px 32px',
                position: 'relative',
                boxShadow: plan.highlighted ? '0 32px 80px rgba(0,0,0,0.18)' : 'none',
                transform: plan.highlighted ? 'scale(1.02)' : 'none',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute', top: '-14px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: GOLD_GRADIENT, color: 'white',
                    padding: '5px 16px', borderRadius: '980px',
                    fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#9D7147', letterSpacing: '0.02em', margin: '0 0 8px' }}>
                  {plan.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '0 0 8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: plan.highlighted ? '#666' : '#888' }}>R$</span>
                  <span
                    style={{
                      fontSize: 'clamp(44px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em',
                      color: plan.highlighted ? '#FFFFFF' : '#0A0A0A', lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '14px', color: plan.highlighted ? '#666' : '#888', fontWeight: 500 }}>/mês</span>
                </div>
                <p style={{ fontSize: '14px', color: plan.highlighted ? '#888' : '#6B6B6B', margin: 0, lineHeight: 1.5 }}>
                  {plan.description}
                </p>
              </div>

              {/* CTA button */}
              <a
                href={SIGNUP_URL}
                style={{
                  display: 'flex', justifyContent: 'center', width: '100%',
                  background: plan.highlighted ? GOLD_GRADIENT : 'transparent',
                  color: plan.highlighted ? 'white' : '#0A0A0A',
                  padding: '14px 24px', borderRadius: '980px',
                  fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                  border: plan.highlighted ? 'none' : '1.5px solid rgba(0,0,0,0.18)',
                  transition: 'background 0.2s, transform 0.15s, border-color 0.2s',
                  letterSpacing: '-0.01em',
                  marginBottom: '28px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.highlighted) { el.style.background = GOLD_GRADIENT_HOVER; el.style.transform = 'translateY(-1px)'; }
                  else { el.style.background = 'rgba(0,0,0,0.03)'; el.style.borderColor = 'rgba(0,0,0,0.3)'; }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.highlighted) { el.style.background = GOLD_GRADIENT; el.style.transform = 'translateY(0)'; }
                  else { el.style.background = 'transparent'; el.style.borderColor = 'rgba(0,0,0,0.18)'; }
                }}
              >
                Começar grátis
              </a>

              {/* Feature list with ✓ / ✗ */}
              <div style={{ borderTop: `1px solid ${plan.highlighted ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`, paddingTop: '24px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {featureMatrix.map((f) => {
                    const included = f[plan.featureKey];
                    return (
                      <li
                        key={f.label}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '10px',
                          fontSize: '14px',
                          color: included
                            ? (plan.highlighted ? '#E0E0E0' : '#3A3A3A')
                            : (plan.highlighted ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.28)'),
                          fontWeight: 400,
                          textDecoration: included ? 'none' : 'line-through',
                        }}
                      >
                        {included ? <CheckIcon dark={plan.highlighted} /> : <XIcon dark={plan.highlighted} />}
                        {f.label}
                      </li>
                    );
                  })}
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
