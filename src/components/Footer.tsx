import { Share2, Play, Link2, Mail, MapPin } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const footerLinks = {
  Produto: [
    { label: 'CRM', href: '#funcionalidades' },
    { label: 'Agendamento', href: '#funcionalidades' },
    { label: 'PDV', href: '#funcionalidades' },
    { label: 'Financeiro', href: '#funcionalidades' },
    { label: 'Anamnese Digital', href: '#funcionalidades' },
    { label: 'Analytics', href: '#funcionalidades' },
  ],
  Empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Casos de sucesso', href: '#depoimentos' },
    { label: 'Parceiros', href: '#' },
    { label: 'Afiliados', href: '#' },
  ],
  Suporte: [
    { label: 'Central de ajuda', href: '#' },
    { label: 'Documentação', href: '#' },
    { label: 'WhatsApp suporte', href: 'https://wa.me/5511999999999' },
    { label: 'Status da plataforma', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Legal: [
    { label: 'Termos de uso', href: '#' },
    { label: 'Política de privacidade', href: '#' },
    { label: 'Segurança de dados', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

const socialLinks = [
  { icon: Share2, href: 'https://instagram.com/lapidstudio', label: 'Instagram' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/lapid-logo-vertical.svg" alt="Lapid Studio" style={{ height: '110px', width: 'auto', display: 'block', marginBottom: '20px' }} />
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              A plataforma de gestão feita exclusivamente para studios de piercing e estética. CRM, Agendamento, PDV, Financeiro e muito mais — em um único sistema.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-6">
              <a href="mailto:contato@lapidstudio.com.br" className="flex items-center gap-2 text-xs text-white/35 hover:text-gold-400 transition-colors">
                <Mail size={12} />
                contato@lapidstudio.com.br
              </a>
              <div className="flex items-center gap-2 text-xs text-white/35">
                <MapPin size={12} />
                Brasil · Atendimento Nacional
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <Icon size={14} className="text-white/50 group-hover:text-gold-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DiamondDecor size={14} className="opacity-40" />
              <span className="text-xs text-white/25">
                © {new Date().getFullYear()} Lapid Studio. Todos os direitos reservados.
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/20">
              <span>CNPJ: XX.XXX.XXX/0001-XX</span>
              <span>·</span>
              <span>v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
