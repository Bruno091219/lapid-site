function ScreenMockup({ src }: { src: string }) {
  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.16), 0 16px 32px rgba(0,0,0,0.09)',
        border: '1px solid rgba(0,0,0,0.07)',
        background: '#fff',
      }}
    >
      <div
        style={{
          background: '#EDEDEB', padding: '11px 16px',
          display: 'flex', gap: '6px', alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
          <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />
        ))}
      </div>
      <img src={src} alt="Lapid CRM" style={{ width: '100%', display: 'block' }} />
    </div>
  );
}

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="rgba(196,147,63,0.12)" />
    <path d="M5.5 9L7.5 11L12.5 6" stroke="#C4933F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function CRMSection() {
  return (
    <section style={{ padding: '120px 0', background: '#F3F0EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — screen mockup */}
          <div className="reveal order-2 lg:order-1">
            <ScreenMockup src="/screenshots/crm-lapid.png" />
          </div>

          {/* Right — text */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2">
            <span
              style={{
                fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#C4933F', display: 'block', marginBottom: '20px',
              }}
            >
              CRM com WhatsApp
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05,
                color: '#0A0A0A', margin: '0 0 20px',
              }}
            >
              CRM integrado{' '}
              <span className="gold-text">ao WhatsApp.</span>
            </h2>
            <p
              style={{
                fontSize: '18px', color: '#6B6B6B', lineHeight: 1.6,
                fontWeight: 400, margin: '0 0 36px', letterSpacing: '-0.01em',
              }}
            >
              Histórico de cada cliente, contato pelo WhatsApp e todos os atendimentos — em um só lugar. Nada se perde, nada fica esquecido.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Conversa completa com o cliente',
                'Atendimentos e serviços realizados',
                'Segmentação por tags e perfil',
                'Histórico de compras e joias',
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#3A3A3A', fontWeight: 500 }}
                >
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
