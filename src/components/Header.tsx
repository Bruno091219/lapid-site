import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(250,250,248,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/lapid-logo-horizontal.svg" alt="Lapid" style={{ height: '26px', display: 'block' }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: '36px', alignItems: 'center', display: 'flex' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: '#0A0A0A', textDecoration: 'none', fontSize: '15px',
                fontWeight: 500, letterSpacing: '-0.01em',
                opacity: 0.62, transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.62'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex" style={{ gap: '10px', alignItems: 'center', display: 'flex' }}>
          <a
            href="https://app.lapid.com.br/auth"
            className="btn-ghost"
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Entrar
          </a>
          <a
            href="https://app.lapid.com.br/auth?signup=true"
            className="btn-gold"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Começar grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#0A0A0A' }}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(250,250,248,0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0,0,0,0.07)',
            padding: '16px 24px 28px',
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '14px 0', fontSize: '17px', fontWeight: 500,
                color: '#0A0A0A', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.lapid.com.br/auth?signup=true"
            className="btn-gold"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}
          >
            Começar grátis
          </a>
        </div>
      )}
    </header>
  );
}
