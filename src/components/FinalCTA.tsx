const GOLD_GRADIENT = 'linear-gradient(135deg, #9D7147 0%, #BEA885 100%)';
const GOLD_GRADIENT_HOVER = 'linear-gradient(135deg, #7A5535 0%, #9D7147 100%)';
const WA_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Lapid!%20Podem%20me%20ajudar%3F';

export function FinalCTA() {
  return (
    <section
      className="py-20 lg:py-[140px] px-6"
      style={{
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
          {/* Primary CTA */}
          <a
            href="https://app.lapid.com.br/auth?signup=true"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: GOLD_GRADIENT, color: 'white',
              padding: '18px 40px', borderRadius: '980px',
              fontSize: '17px', fontWeight: 600, textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = GOLD_GRADIENT_HOVER;
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 12px 32px rgba(157,113,71,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = GOLD_GRADIENT;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            Começar grátis agora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: 'rgba(255,255,255,0.75)',
              padding: '18px 32px', borderRadius: '980px',
              fontSize: '17px', fontWeight: 500, textDecoration: 'none',
              letterSpacing: '-0.01em',
              border: '1.5px solid rgba(255,255,255,0.18)',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.35)';
              el.style.color = '#fff';
              el.style.background = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.18)';
              el.style.color = 'rgba(255,255,255,0.75)';
              el.style.background = 'transparent';
            }}
          >
            {/* WhatsApp icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.85L0 24l6.327-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.666-.5-5.2-1.378l-.373-.22-3.755.894.924-3.656-.243-.38A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
