export function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '56px 24px 36px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top row — logo + links */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '32px',
            alignItems: 'flex-start', justifyContent: 'space-between',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <img
              src="/lapid-logo-horizontal.svg"
              alt="Lapid"
              style={{ height: '22px', filter: 'brightness(0) invert(1)', display: 'block', marginBottom: '14px', opacity: 0.9 }}
            />
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, margin: 0 }}>
              Software de gestão para studios de piercing e estética.
            </p>
          </div>

          {/* Real contact links */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://wa.me/5511987889482"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 18px', borderRadius: '980px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', fontWeight: 500,
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.25)';
                el.style.color = 'rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.1)';
                el.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.85L0 24l6.327-1.506A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.666-.5-5.2-1.378l-.373-.22-3.755.894.924-3.656-.243-.38A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href="https://instagram.com/lapid.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 18px', borderRadius: '980px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', fontWeight: 500,
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.25)';
                el.style.color = 'rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.1)';
                el.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>

            <a
              href="mailto:contato@lapid.com.br"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 18px', borderRadius: '980px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', fontWeight: 500,
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.25)';
                el.style.color = 'rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.1)';
                el.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              contato@lapid.com.br
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {new Date().getFullYear()} Lapid Studio. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacidade', 'Termos'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)'; }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
