export function FinalCTA() {
  return (
    <section
      style={{
        padding: '140px 24px',
        background: '#0A0A0A',
        textAlign: 'center',
      }}
    >
      <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(40px, 5.5vw, 80px)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: '#FFFFFF', margin: '0 0 24px',
          }}
        >
          Pronto para transformar
          <br />
          seu studio?
        </h2>
        <p
          style={{
            fontSize: '18px', color: '#888', lineHeight: 1.6,
            fontWeight: 400, margin: '0 0 48px', letterSpacing: '-0.01em',
          }}
        >
          15 dias grátis. Sem cartão. Sem compromisso.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://app.lapid.com.br/auth?signup=true"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#C4933F', color: 'white',
              padding: '18px 40px', borderRadius: '980px',
              fontSize: '17px', fontWeight: 600, textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#A87A2E';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 12px 32px rgba(196,147,63,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#C4933F';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            Começar grátis agora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#planos"
            className="btn-ghost-light"
            style={{ fontSize: '17px', padding: '18px 36px' }}
          >
            Ver planos
          </a>
        </div>
      </div>
    </section>
  );
}
