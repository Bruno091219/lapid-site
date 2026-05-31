export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '64px',
        background: '#FAFAF8',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute', top: '-10%', right: '-5%', pointerEvents: 'none',
          width: '55vw', height: '55vw', maxWidth: '720px',
          background: 'radial-gradient(ellipse, rgba(196,147,63,0.07) 0%, transparent 68%)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — copy */}
          <div className="reveal">
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(196,147,63,0.1)', borderRadius: '980px',
                padding: '6px 14px', marginBottom: '32px',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4933F' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#C4933F', letterSpacing: '0.02em' }}>
                Feito para piercing e estética
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(52px, 6.5vw, 88px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: '#0A0A0A',
                margin: '0 0 24px',
              }}
            >
              Seu studio.
              <br />
              <span className="gold-text">Profissional</span>
              <br />
              de verdade.
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: '18px', lineHeight: 1.6, color: '#6B6B6B',
                fontWeight: 400, margin: '0 0 40px', maxWidth: '440px', letterSpacing: '-0.01em',
              }}
            >
              Agenda, CRM, PDV, anamnese e pós-atendimento. Tudo em um só lugar, simples de usar — no celular ou no computador.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a
                href="https://app.lapid.com.br/auth?signup=true"
                className="btn-gold"
                style={{ fontSize: '16px', padding: '16px 32px' }}
              >
                Começar grátis
              </a>
              <a
                href="#planos"
                className="btn-ghost"
                style={{ fontSize: '16px', padding: '16px 32px' }}
              >
                Ver planos
              </a>
            </div>

            {/* Trust */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {['15 dias grátis', 'Sem cartão de crédito', 'Cancele quando quiser'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '13px', color: '#8A8A8A', fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="#C4933F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="reveal reveal-delay-2 hidden lg:block">
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 60px 120px rgba(0,0,0,0.16), 0 24px 48px rgba(0,0,0,0.09)',
                border: '1px solid rgba(0,0,0,0.07)',
                background: '#fff',
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  background: '#F0F0EE',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderBottom: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
                    <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1, background: 'rgba(0,0,0,0.07)', borderRadius: '6px',
                    padding: '5px 12px', fontSize: '12px', color: '#888',
                    textAlign: 'center', fontFamily: 'monospace',
                  }}
                >
                  app.lapid.com.br
                </div>
              </div>
              <img
                src="/screenshots/dashboard-lapid.png"
                alt="Dashboard Lapid"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
