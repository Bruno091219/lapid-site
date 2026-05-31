const cols = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Planos', href: '#planos' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Parceiros', href: '#' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
      { label: 'Central de ajuda', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 24px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10" style={{ marginBottom: '48px' }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/lapid-logo-horizontal.svg"
              alt="Lapid"
              style={{ height: '22px', filter: 'brightness(0) invert(1)', display: 'block', marginBottom: '16px', opacity: 0.9 }}
            />
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, margin: 0, maxWidth: '240px' }}>
              Software de gestão para studios de piercing e estética.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                  margin: '0 0 16px',
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '28px',
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {new Date().getFullYear()} Lapid Studio. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
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
