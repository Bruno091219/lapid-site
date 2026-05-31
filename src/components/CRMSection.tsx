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
      <img
        src={src}
        alt="CRM do Lapid Studio com pipeline de vendas e WhatsApp integrado"
        loading="lazy"
        width="1280"
        height="720"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
}

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="rgba(157,113,71,0.12)" />
    <path d="M5.5 9L7.5 11L12.5 6" stroke="#9D7147" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
                textTransform: 'uppercase', color: '#9D7147', display: 'block', marginBottom: '12px',
              }}
            >
              CRM com WhatsApp
            </span>

            {/* Integration badge */}
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 10px', borderRadius: '980px',
                  background: 'rgba(37,211,102,0.1)',
                  fontSize: '12px', fontWeight: 600, color: '#1A9E50',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.85L0 24l6.327-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.666-.5-5.2-1.378l-.373-.22-3.755.894.924-3.656-.243-.38A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp nativo
              </span>
            </div>

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
