import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Por que a Lapid', href: '#por-que-lapid' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F7]/98 backdrop-blur-xl border-b border-stone-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/lapid-logo-horizontal.svg" alt="Lapid Studio" style={{ height: '38px', width: 'auto', display: 'block' }} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.lapid.com.br/auth" className="btn-ghost text-sm">
              Entrar
            </a>
            <a href="https://app.lapid.com.br/auth?signup=true" className="btn-gold text-sm">
              Testar grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F7]/98 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-stone-200">
              <a href="https://app.lapid.com.br/auth" className="btn-ghost w-full justify-center" onClick={() => setMenuOpen(false)}>
                Entrar
              </a>
              <a href="https://app.lapid.com.br/auth?signup=true" className="btn-gold w-full justify-center" onClick={() => setMenuOpen(false)}>
                Testar grátis — 15 dias
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
