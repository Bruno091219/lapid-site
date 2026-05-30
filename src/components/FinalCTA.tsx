import { ArrowRight, Clock } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(157,113,71,0.12) 0%, transparent 70%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.3) 30%, rgba(157,113,71,0.3) 70%, transparent)' }}
      />

      {/* Decorative diamonds */}
      <DiamondDecor size={100} className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-10" />
      <DiamondDecor size={60} className="absolute -right-6 top-1/3 opacity-10" />
      <DiamondDecor size={20} className="absolute left-1/3 bottom-12 opacity-20" />
      <DiamondDecor size={16} className="absolute right-1/3 top-12 opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <img src="/lapid-logo-mark.svg" alt="" style={{ height: '40px', width: 'auto' }} />
          <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '30px', fontWeight: 700, letterSpacing: '4px', color: '#9d7147' }}>LAPID</span>
          <span style={{ fontFamily: "Inter, -apple-system, 'Segoe UI', system-ui, sans-serif", fontSize: '22px', fontWeight: 300, letterSpacing: '5px', color: '#BEA885', opacity: 0.75 }}>Studio</span>
        </div>

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold-600/30 bg-gold-600/8">
          <Clock size={12} className="text-gold-400" />
          <span className="text-xs font-medium text-gold-300">
            15 dias gratuitos · Sem cartão de crédito · Cancele quando quiser
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
          <span className="text-stone-900">Seu studio pode ser</span>
          <br />
          <span className="gold-text">um negócio de verdade.</span>
          <br />
          <span className="text-stone-400">Comece hoje.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cada semana que passa sem a Lapid é mais uma semana de confirmações perdidas no WhatsApp, leads esquecidos e dinheiro indo embora sem você ver.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="https://app.lapid.com.br/auth?signup=true" className="btn-gold px-10 py-4 text-lg">
            Testar grátis por 15 dias
            <ArrowRight size={18} />
          </a>
          <a href="https://wa.me/5511999999999" className="btn-ghost px-10 py-4 text-lg">
            Falar com especialista
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-400">
          <div className="flex items-center gap-1.5">
            <DiamondDecor size={10} className="opacity-60" />
            <span>Setup em menos de 1 hora</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DiamondDecor size={10} className="opacity-60" />
            <span>Suporte humano via WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DiamondDecor size={10} className="opacity-60" />
            <span>Migração de dados gratuita</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DiamondDecor size={10} className="opacity-60" />
            <span>200+ studios confiam na Lapid</span>
          </div>
        </div>
      </div>
    </section>
  );
}
