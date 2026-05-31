function IPhoneMockup({ src, alt, offsetTop = false }: { src: string; alt: string; offsetTop?: boolean }) {
  return (
    <div
      style={{
        width: 'min(195px, 42vw)',
        flexShrink: 0,
        borderRadius: '38px',
        border: '10px solid #1A1A1A',
        background: '#1A1A1A',
        boxShadow: '0 40px 80px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.07)',
        overflow: 'hidden',
        position: 'relative',
        marginTop: offsetTop ? '40px' : '0',
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)', width: '78px', height: '22px',
          background: '#1A1A1A', borderRadius: '0 0 14px 14px', zIndex: 10,
        }}
      />
      <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
    </div>
  );
}

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="rgba(157,113,71,0.12)" />
    <path d="M5.5 9L7.5 11L12.5 6" stroke="#9D7147" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function BioPage() {
  return (
    <section id="funcionalidades" style={{ padding: '120px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text — left */}
          <div className="reveal">
            <span
              style={{
                fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#9D7147', display: 'block', marginBottom: '20px',
              }}
            >
              Página na bio do Instagram
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05,
                color: '#0A0A0A', margin: '0 0 20px',
              }}
            >
              Sua bio do Instagram.{' '}
              <span className="gold-text">Finalmente profissional.</span>
            </h2>
            <p
              style={{
                fontSize: '18px', color: '#6B6B6B', lineHeight: 1.6,
                fontWeight: 400, margin: '0 0 36px', letterSpacing: '-0.01em',
              }}
            >
              Um link que apresenta seu studio de forma elegante — galeria de fotos, catálogo de joias, informações completas, avaliações de clientes, FAQ e muito mais. Tudo organizado, tudo no lugar certo.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Catálogo completo de joias e procedimentos',
                'Galeria de fotos do seu trabalho',
                'Avaliações e depoimentos de clientes',
                'FAQ para dúvidas frequentes',
                'Informações e contato do studio',
                'Aparece no Google — ajuda seu SEO',
                'Sem código, sem desenvolvedor',
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

          {/* Right — iPhones */}
          <div className="reveal reveal-delay-2">
            <div
              style={{
                display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start',
              }}
            >
              <IPhoneMockup src="/screenshots/biotela1.jpeg" alt="Página pública Lapid — tela 1" offsetTop />
              <IPhoneMockup src="/screenshots/biotela2.jpeg" alt="Página pública Lapid — tela 2" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
