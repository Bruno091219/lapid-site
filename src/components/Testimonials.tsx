const GOLD_GRADIENT = 'linear-gradient(135deg, #9D7147 0%, #BEA885 100%)';

const testimonials = [
  {
    initials: 'CM',
    name: 'Carla Mendes',
    role: 'Studio Black Needle',
    city: 'São Paulo, SP',
    quote: 'Antes perdia uns 30% dos agendamentos por esquecimento ou confusão no WhatsApp. Com a Lapid, os clientes confirmam sozinhos — o no-show caiu mais de 40% no primeiro mês.',
    result: '↓ 40% no-show',
    resultColor: '#10B981',
  },
  {
    initials: 'RS',
    name: 'Rafael Santos',
    role: 'Santos Ink Studio',
    city: 'Porto Alegre, RS',
    quote: 'Em 3 meses o faturamento cresceu 28%. Não porque atendi mais clientes — atendi os mesmos. O PDV me mostrou que eu cobrava errado em várias joias e eu nem sabia.',
    result: '↑ 28% faturamento',
    resultColor: '#9D7147',
  },
  {
    initials: 'AO',
    name: 'Amanda Oliveira',
    role: 'Aurum Piercing',
    city: 'Belo Horizonte, MG',
    quote: 'Economizo pelo menos 2 horas por dia. Não preciso mais responder "qual horário disponível" no WhatsApp, a anamnese já vem preenchida e o financeiro fecha sozinho.',
    result: '−2h por dia',
    resultColor: '#3B82F6',
  },
];

export function Testimonials() {
  return (
    <section style={{ padding: '120px 0', background: '#F3F0EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#9D7147', display: 'block', marginBottom: '16px',
            }}
          >
            Depoimentos
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08,
              color: '#0A0A0A', margin: '0 0 12px',
            }}
          >
            Quem usa, aprova.
          </h2>
          <p style={{ fontSize: '18px', color: '#6B6B6B', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
            200+ studios transformaram sua gestão com a Lapid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Result badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  padding: '5px 12px',
                  borderRadius: '980px',
                  background: `${t.resultColor}18`,
                  border: `1px solid ${t.resultColor}35`,
                  fontSize: '13px', fontWeight: 700, color: t.resultColor,
                  letterSpacing: '-0.01em',
                }}
              >
                {t.result}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '16px', color: '#3A3A3A', lineHeight: 1.65,
                  fontWeight: 400, margin: 0, flex: 1,
                  letterSpacing: '-0.01em',
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                    background: GOLD_GRADIENT,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '14px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', fontWeight: 400 }}>
                    {t.role} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
