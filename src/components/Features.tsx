import {
  Users, Calendar, ShoppingCart, Activity, MessageCircle,
  FileText, Package, TrendingUp, Zap, Shield
} from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const modules = [
  {
    icon: Users,
    name: 'CRM com Funil Inteligente',
    tag: 'CRM',
    color: '#7C6FBF',
    description: 'Kanban com drag-and-drop, etapas personalizáveis (Entrada → Contato → Agendamento → Venda), lead scoring por temperatura, timeline completa de interações e automações por trigger.',
    features: ['Lead scoring Hot/Warm/Cold', 'Origem por canal (Instagram, Google, Indicação)', 'Automações sem código', 'Histórico completo de contatos'],
  },
  {
    icon: Calendar,
    name: 'Agendamento Integrado',
    tag: 'AGENDA',
    color: '#5BA48A',
    description: 'Calendário semanal/mensal com sincronização bidirecional com Google Calendar. Bloqueios de disponibilidade recorrentes, confirmação automática via WhatsApp e histórico por profissional.',
    features: ['Sync 2 vias com Google Calendar', 'Confirmação automática WhatsApp', 'Disponibilidade por profissional', 'Status: Confirmado, Realizado, No-show'],
  },
  {
    icon: ShoppingCart,
    name: 'PDV Completo',
    tag: 'PDV',
    color: '#D4A853',
    description: 'Ponto de venda com carrinho, busca de joias por material/calibre/região, descontos, múltiplos métodos de pagamento, comissionamento automático por profissional e emissão de recibo com QR Code.',
    features: ['Gestão de estoque em tempo real', 'Múltiplos métodos de pagamento', 'Comissão automática por profissional', 'Recibo digital com QR Code'],
  },
  {
    icon: Activity,
    name: 'Financeiro Completo',
    tag: 'FINANCEIRO',
    color: '#4B9CD3',
    description: 'Caixa, contas a receber, DRE automático, metas mensais, previsão de fluxo de caixa, controle de despesas por categoria e comissões por profissional — tudo integrado ao PDV.',
    features: ['DRE com EBITDA automático', 'Fluxo de caixa projetado', 'Gestão de caixa (abertura/fechamento)', 'Liquidação automática de recebíveis'],
  },
  {
    icon: FileText,
    name: 'Anamnese Digital',
    tag: 'ANAMNESE',
    color: '#E07B5B',
    description: 'Formulários digitais por tipo (Adulto, Adolescente, Bebê, Lobuloplastia) com assinatura eletrônica do cliente e do profissional, suporte a responsável para menores e exportação em PDF.',
    features: ['Assinatura digital cliente + profissional', 'Link externo com expiração', 'Registro de IP e dispositivo', 'PDF exportável com carimbo legal'],
  },
  {
    icon: MessageCircle,
    name: 'Pós-Atendimento',
    tag: 'PÓS-ATENDIMENTO',
    color: '#9D7147',
    description: 'Gestão estruturada de follow-up por procedimento: retorno agendado, contatos programados, alerta de pendências em atraso e templates de mensagens automáticas por tipo de piercing.',
    features: ['Follow-up por procedimento', 'Alertas de retorno em atraso', 'Templates de instrução automáticos', 'Histórico por cliente'],
  },
  {
    icon: Package,
    name: 'Gestão de Produtos',
    tag: 'ESTOQUE',
    color: '#6B9E7A',
    description: 'Catálogo especializado para joias (material, calibre, comprimento, regiões), serviços com duração configurável e produtos físicos para pós-cuidado — com variações, custo e margem de lucro.',
    features: ['Joias com material/calibre/região', 'Variações com custo e margem', 'Movimentações de estoque', 'Serviços com duração e comissão'],
  },
  {
    icon: TrendingUp,
    name: 'Lapid Analytics',
    tag: 'ANALYTICS',
    color: '#C47E9A',
    description: 'Dashboard executivo com CAC por canal, ROI por plataforma de anúncio, funil de conversão por etapa, performance por profissional e metas de faturamento com acompanhamento mensal.',
    features: ['CAC por canal de aquisição', 'ROI por plataforma (Instagram/Google)', 'Conversão por etapa do funil', 'Performance individual por profissional'],
  },
  {
    icon: Zap,
    name: 'Automações WhatsApp',
    tag: 'AUTOMAÇÃO',
    color: '#25D366',
    description: 'Engine de automação com triggers (lead entra em etapa, inatividade, nova mensagem) e ações (enviar template, mover lead, criar tarefa, atribuir profissional). Variáveis dinâmicas e prevenção de duplicação.',
    features: ['Triggers sem código', 'Templates com variáveis dinâmicas', 'Inbox integrado ao CRM', 'Prevenção de mensagem duplicada'],
  },
  {
    icon: Shield,
    name: 'Controle de Acesso (RBAC)',
    tag: 'SEGURANÇA',
    color: '#7B8FA1',
    description: '5 perfis de acesso configuráveis: Admin Master, Admin, Comercial, Atendimento e Profissional — cada um com permissões granulares por módulo e por ação dentro do sistema.',
    features: ['5 perfis pré-configurados', 'Permissões por módulo', 'Convite por e-mail', 'Isolamento total entre studios'],
  },
];

export function Features() {
  return (
    <section className="py-24 relative" id="funcionalidades">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Módulos completos
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Tudo que seu studio precisa,
            <span className="gold-text block">em um só lugar.</span>
          </h2>
          <p className="text-lg text-stone-500">
            Cada módulo foi construído pensando nas especificidades do segmento de piercing e estética — não é um sistema genérico adaptado.
          </p>
        </div>

        {/* Featured module (large) */}
        <div className="grid lg:grid-cols-5 gap-4 mb-4">
          {/* CRM — featured */}
          <div className="reveal lg:col-span-3 card-dark p-7 transition-all duration-300 hover:border-gold-600/30 group">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `rgba(124,111,191,0.15)`, border: `1px solid rgba(124,111,191,0.25)` }}>
                <Users size={22} className="text-[#7C6FBF]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: 'rgba(124,111,191,0.15)', color: '#7C6FBF' }}>
                    CRM
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CRM com Funil Inteligente</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-4">
                  Kanban com drag-and-drop, etapas personalizáveis (Entrada → Contato → Agendamento → Venda), lead scoring por temperatura, timeline completa de interações e automações por trigger.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {modules[0].features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/50">
                      <div className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Agendamento */}
          <div className="reveal reveal-delay-1 lg:col-span-2 card-dark p-6 transition-all duration-300 hover:border-gold-600/30">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(91,164,138,0.15)', border: '1px solid rgba(91,164,138,0.25)' }}>
              <Calendar size={20} className="text-[#5BA48A]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2 inline-block"
              style={{ background: 'rgba(91,164,138,0.15)', color: '#5BA48A' }}>
              AGENDA
            </span>
            <h3 className="text-lg font-bold text-white mb-2">Agendamento Integrado</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-3">
              Sync bidirecional com Google Calendar, confirmação automática via WhatsApp e gestão de disponibilidade por profissional.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {modules[1].features.slice(0, 2).map((f) => (
                <span key={f} className="text-[10px] text-white/40 px-2 py-0.5 rounded-full border border-white/8">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {modules.slice(2, 8).map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.name}
                className="reveal card-dark p-6 transition-all duration-300 hover:border-gold-600/30"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${mod.color}18`, border: `1px solid ${mod.color}30` }}>
                  <Icon size={19} style={{ color: mod.color }} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2 inline-block"
                  style={{ background: `${mod.color}15`, color: mod.color }}
                >
                  {mod.tag}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{mod.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-3">{mod.description}</p>
                <div className="flex flex-col gap-1">
                  {mod.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-white/40">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: mod.color }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-4">
          {modules.slice(8).map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.name}
                className="reveal card-dark p-6 transition-all duration-300 hover:border-gold-600/30"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${mod.color}18`, border: `1px solid ${mod.color}30` }}>
                    <Icon size={19} style={{ color: mod.color }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1 inline-block"
                      style={{ background: `${mod.color}15`, color: mod.color }}
                    >
                      {mod.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1.5">{mod.name}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{mod.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
