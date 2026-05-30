import { ArrowRight, Play, Star, TrendingUp, Users, Calendar } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(157,113,71,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      {/* Decorative diamonds */}
      <DiamondDecor size={60} className="absolute top-32 right-12 opacity-20 animate-float" />
      <DiamondDecor size={30} className="absolute top-48 left-16 opacity-10" />
      <DiamondDecor size={20} className="absolute bottom-32 right-1/4 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gold-600/30 bg-gold-600/8">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-gold-300">Mais de 200 studios ativos no Brasil</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-stone-900">Seu studio no</span>
              <br />
              <span className="gold-text">próximo nível.</span>
              <br />
              <span className="text-stone-900">Sem planilha.</span>
              <br />
              <span className="text-stone-400">Sem caos.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
              A <strong className="text-stone-900">única plataforma</strong> feita para studios de piercing e estética — com CRM inteligente, agendamento sincronizado com Google Calendar, PDV completo, anamnese digital e pós-atendimento automatizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#planos" className="btn-gold px-8 py-4 text-base">
                Testar grátis por 7 dias
                <ArrowRight size={16} />
              </a>
              <a href="#funcionalidades" className="btn-ghost px-8 py-4 text-base group">
                <Play size={16} className="text-gold-400" />
                Ver funcionalidades
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(157,113,71,0.15)' }}>
                  <Users size={14} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">+12.000</div>
                  <div className="text-xs text-stone-500">clientes gerenciados</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(157,113,71,0.15)' }}>
                  <Calendar size={14} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">+45.000</div>
                  <div className="text-xs text-stone-500">agendamentos realizados</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(157,113,71,0.15)' }}>
                  <TrendingUp size={14} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">+37%</div>
                  <div className="text-xs text-stone-500">aumento médio de faturamento</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — platform mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(157,113,71,0.22) 0%, transparent 70%)' }}
              />

              {/* Browser window frame */}
              <div className="glass-card shadow-gold-lg relative" style={{ overflow: 'hidden' }}>

                {/* Browser chrome */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', background: 'rgba(14,11,7,0.96)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57', flexShrink: 0 }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FEBC2E', flexShrink: 0 }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28C840', flexShrink: 0 }} />
                  <div style={{ flex: 1, marginLeft: '8px', height: '16px', borderRadius: '5px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px' }}>
                    <svg width="7" height="8" viewBox="0 0 8 10" fill="none">
                      <rect x="1" y="4" width="6" height="5.5" rx="1" stroke="rgba(157,113,71,0.65)" strokeWidth="1"/>
                      <path d="M2.5 4V3a1.5 1.5 0 013 0v1" stroke="rgba(157,113,71,0.65)" strokeWidth="1" fill="none"/>
                    </svg>
                    <span style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.36)', fontFamily: 'monospace' }}>app.lapidstudio.com.br</span>
                  </div>
                </div>

                {/* App interface — light mode */}
                <div style={{ display: 'flex', background: '#F5F1EB', minHeight: '358px' }}>

                  {/* Sidebar */}
                  <div style={{ width: '48px', flexShrink: 0, background: '#EAE6DD', borderRight: '1px solid rgba(157,113,71,0.14)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: '6px' }}>
                    {/* Logo */}
                    <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'linear-gradient(135deg, #9D7147 0%, #BEA885 100%)', boxShadow: '0 3px 10px rgba(157,113,71,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <polygon points="8,1.5 14.5,8 8,14.5 1.5,8" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.4"/>
                        <line x1="5.5" y1="9.2" x2="5.5" y2="8.4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                        <line x1="8" y1="9.2" x2="8" y2="7.2" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                        <line x1="10.5" y1="9.2" x2="10.5" y2="6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    </div>

                    {/* Dashboard (active) */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(157,113,71,0.14)', border: '1px solid rgba(157,113,71,0.28)' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="#9D7147">
                        <rect x="2" y="2" width="5.5" height="5.5" rx="1.2"/>
                        <rect x="8.5" y="2" width="5.5" height="5.5" rx="1.2"/>
                        <rect x="2" y="8.5" width="5.5" height="5.5" rx="1.2"/>
                        <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.2"/>
                      </svg>
                    </div>
                    {/* Calendar */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="3.5" width="13" height="11" rx="1.5" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5"/>
                        <line x1="1.5" y1="7" x2="14.5" y2="7" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5"/>
                        <line x1="5.5" y1="1.5" x2="5.5" y2="4.5" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="10.5" y1="1.5" x2="10.5" y2="4.5" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {/* CRM / Users */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5.5" r="2.5" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5"/>
                        <path d="M3 14.5C3 11.46 5.24 9 8 9s5 2.46 5 5.5" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {/* PDV */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4h8l-1.5 8h-5L4 4z" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinejoin="round"/>
                        <circle cx="6.5" cy="14" r="1" fill="rgba(58,56,56,0.3)"/>
                        <circle cx="10.5" cy="14" r="1" fill="rgba(58,56,56,0.3)"/>
                        <path d="M2 2h1.5l.5 2" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {/* Settings — pushed to bottom */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="2.2" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5"/>
                        <path d="M8 1.5v1.2M8 13.3v1.2M1.5 8h1.2M13.3 8h1.2M3.46 3.46l.85.85M11.69 11.69l.85.85M3.46 12.54l.85-.85M11.69 4.31l.85-.85" stroke="rgba(58,56,56,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '13px 13px 11px', gap: '9px', overflow: 'hidden' }}>

                    {/* Page header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 900, color: '#3A3838', letterSpacing: '-0.025em', lineHeight: 1 }}>Dashboard</div>
                        <div style={{ fontSize: '8px', color: '#9A8E82', marginTop: '2px' }}>Terça-feira, 27 de Maio de 2026</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ position: 'relative', width: '26px', height: '26px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', border: '1px solid rgba(157,113,71,0.15)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2C5.79 2 4 3.79 4 6v3L2.5 11.5h11L12 9V6c0-2.21-1.79-4-4-4z" fill="rgba(58,56,56,0.45)"/>
                            <path d="M6.5 13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5" stroke="rgba(58,56,56,0.45)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                          </svg>
                          <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', border: '1.5px solid #F5F1EB', fontSize: '4px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>2</div>
                        </div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #9D7147, #BEA885)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 900, color: 'white', boxShadow: '0 2px 6px rgba(157,113,71,0.35)' }}>M</div>
                      </div>
                    </div>

                    {/* 4 KPI Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px' }}>
                      {([
                        { label: 'Faturamento Hoje', value: 'R$ 3.840', trend: '+18%', accent: 'linear-gradient(90deg, transparent, #9D7147, #BEA885, #9D7147, transparent)', tc: '#10B981' },
                        { label: 'Fat. do Mês', value: 'R$ 47.290', trend: '+23%', accent: 'linear-gradient(90deg, transparent, #9D7147, #BEA885, #9D7147, transparent)', tc: '#10B981' },
                        { label: 'Ticket Médio', value: 'R$ 186', trend: '+5%', accent: 'linear-gradient(90deg, transparent, #9D7147, #BEA885, #9D7147, transparent)', tc: '#10B981' },
                        { label: 'Agend. Hoje', value: '14', trend: '+3 vs ontem', accent: 'linear-gradient(90deg, #3B82F6, #93C5FD)', tc: '#3B82F6' },
                      ] as const).map((kpi, i) => (
                        <div key={i} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(157,113,71,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                          <div style={{ height: '3px', background: kpi.accent }} />
                          <div style={{ padding: '7px 9px 8px' }}>
                            <div style={{ fontSize: '7px', color: '#9A8E82', fontWeight: 500, marginBottom: '3px', lineHeight: 1 }}>{kpi.label}</div>
                            <div style={{ fontSize: '13px', fontWeight: 900, color: '#3A3838', letterSpacing: '-0.03em', lineHeight: 1 }}>{kpi.value}</div>
                            <div style={{ fontSize: '7px', color: kpi.tc, fontWeight: 700, marginTop: '3px' }}>{kpi.trend}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart + Appointments */}
                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '7px' }}>

                      {/* Bar chart */}
                      <div style={{ background: 'white', borderRadius: '10px', border: '1px solid rgba(157,113,71,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '9px 11px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <div style={{ fontSize: '8px', fontWeight: 700, color: '#3A3838' }}>Faturamento — Últimos 7 dias</div>
                          <div style={{ fontSize: '7px', padding: '2px 5px', borderRadius: '4px', background: 'rgba(157,113,71,0.08)', color: '#9D7147', fontWeight: 600 }}>Mai 2026</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '52px' }}>
                          {[55, 72, 48, 83, 61, 95, 78].map((h, i) => (
                            <div key={i} style={{ flex: 1, height: `${h * 0.52}px`, borderRadius: '3px 3px 0 0', background: i >= 5 ? 'linear-gradient(to top, #9D7147, #BEA885)' : 'rgba(157,113,71,0.22)' }} />
                          ))}
                        </div>
                        <div style={{ height: '1px', background: 'rgba(157,113,71,0.12)', margin: '4px 0 3px' }} />
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d) => (
                            <div key={d} style={{ flex: 1, textAlign: 'center', fontSize: '6.5px', color: '#9A8E82' }}>{d}</div>
                          ))}
                        </div>
                      </div>

                      {/* Next appointments */}
                      <div style={{ background: 'white', borderRadius: '10px', border: '1px solid rgba(157,113,71,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '9px 10px 8px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: '#3A3838', marginBottom: '7px' }}>Próximos Agendamentos</div>
                        {([
                          { time: '13:30', name: 'Mariana S.', service: 'Piercing Orbital', status: 'Confirmado', sc: '#10B981', sb: 'rgba(16,185,129,0.1)' },
                          { time: '14:00', name: 'Lucas P.', service: 'Industrial', status: 'Agendado', sc: '#3B82F6', sb: 'rgba(59,130,246,0.1)' },
                          { time: '15:30', name: 'Ana C.', service: 'Microdermal', status: 'Confirmado', sc: '#10B981', sb: 'rgba(16,185,129,0.1)' },
                        ] as const).map((apt, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 6px', borderRadius: '7px', marginBottom: i < 2 ? '3px' : 0, background: 'rgba(157,113,71,0.04)', border: '1px solid rgba(157,113,71,0.08)' }}>
                            <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#9D7147', minWidth: '24px', flexShrink: 0 }}>{apt.time}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: '7px', fontWeight: 700, color: '#3A3838', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{apt.name}</div>
                              <div style={{ fontSize: '6.5px', color: '#9A8E82', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{apt.service}</div>
                            </div>
                            <div style={{ fontSize: '6px', padding: '2px 4px', borderRadius: '8px', color: apt.sc, background: apt.sb, fontWeight: 700, flexShrink: 0, whiteSpace: 'nowrap' }}>{apt.status}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CRM Kanban */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {([
                        { label: 'Novos Leads', count: '8', color: '#9D7147', bg: 'rgba(157,113,71,0.06)', border: 'rgba(157,113,71,0.18)', cards: [92, 72, 82] },
                        { label: 'Em Contato', count: '5', color: '#F59E0B', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', cards: [88, 68] },
                        { label: 'Agendado', count: '4', color: '#3B82F6', bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.2)', cards: [92, 76] },
                        { label: 'Convertido', count: '3', color: '#10B981', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)', cards: [85] },
                      ] as const).map((col, i) => (
                        <div key={i} style={{ flex: 1, borderRadius: '9px', padding: '7px 8px', background: col.bg, border: `1px solid ${col.border}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ fontSize: '7px', fontWeight: 700, color: col.color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{col.label}</div>
                            <div style={{ fontSize: '6.5px', padding: '0.5px 4px', borderRadius: '8px', background: col.color, color: 'white', fontWeight: 700, flexShrink: 0, marginLeft: '2px' }}>{col.count}</div>
                          </div>
                          {col.cards.map((w, j) => (
                            <div key={j} style={{ height: '13px', borderRadius: '4px', marginBottom: j < col.cards.length - 1 ? '3px' : 0, background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', width: `${w}%`, border: `1px solid ${col.border}` }} />
                          ))}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating notifications */}
              <div className="absolute animate-float glass-card shadow-gold" style={{ right: '-34px', top: '64px', animationDelay: '0.8s', padding: '8px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(16,185,129,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>Nova venda — R$ 380</div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>há 2 min · PDV</div>
                  </div>
                </div>
              </div>

              <div className="absolute animate-float glass-card shadow-gold" style={{ left: '-38px', bottom: '80px', animationDelay: '2.2s', padding: '8px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(157,113,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <rect x="1.5" y="3.5" width="13" height="11" rx="1.5" stroke="rgba(157,113,71,0.9)" strokeWidth="1.5"/>
                      <line x1="1.5" y1="7" x2="14.5" y2="7" stroke="rgba(157,113,71,0.9)" strokeWidth="1.5"/>
                      <line x1="5.5" y1="1.5" x2="5.5" y2="4.5" stroke="rgba(157,113,71,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="10.5" y1="1.5" x2="10.5" y2="4.5" stroke="rgba(157,113,71,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>Mariana confirmou</div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>Hoje 14h30 · Piercing Orbital</div>
                  </div>
                </div>
              </div>

              <div className="absolute animate-float glass-card shadow-gold" style={{ right: '-18px', bottom: '110px', animationDelay: '3.8s', padding: '8px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(157,113,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <polyline points="2,9 6,13 14,4" stroke="#9D7147" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>Meta atingida!</div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>R$ 47.290 / R$ 45.000</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
