import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DiamondDecor } from './DiamondLogo';

const faqs = [
  {
    question: 'Preciso ter conhecimento técnico para usar a Lapid?',
    answer: 'Não. A Lapid foi desenvolvida para profissionais de piercing e estética — não para desenvolvedores. A interface é intuitiva, com tutoriais embutidos, e nossa equipe de suporte está disponível via WhatsApp para te acompanhar na configuração inicial.',
  },
  {
    question: 'Como funciona a integração com WhatsApp? Preciso de outro número?',
    answer: 'A Lapid usa a Evolution API para conectar ao WhatsApp do seu studio. Você escaneia o QR Code com o celular do studio e a conexão é estabelecida. Não precisa de número separado — funciona com o mesmo número que você já usa no atendimento.',
  },
  {
    question: 'A sincronização com Google Calendar funciona nos dois sentidos?',
    answer: 'Sim. Se você criar um evento no Google Calendar, ele aparece na agenda da Lapid. Se você criar um agendamento na Lapid, ele vai para o Google Calendar automaticamente. A sincronização é autenticada via OAuth 2.0 e totalmente segura.',
  },
  {
    question: 'Posso usar a Lapid no celular?',
    answer: 'Sim. A Lapid é uma PWA (Progressive Web App) — você adiciona à tela inicial do celular como um app e ela funciona com performance nativa, sem precisar baixar nada da App Store ou Google Play.',
  },
  {
    question: 'A anamnese digital tem validade jurídica?',
    answer: 'A anamnese da Lapid registra assinatura digital do cliente e do profissional, data e horário de assinatura, IP do dispositivo e identificador do dispositivo usado. O PDF exportado contém todos esses dados. Recomendamos que você consulte um advogado para confirmar a adequação às normas locais, mas o nível de segurança é muito superior a formulários em papel.',
  },
  {
    question: 'Quantos usuários posso cadastrar?',
    answer: 'No plano CRM Solo: 1 usuário. No plano Studio Essencial: até 5 usuários. No plano Studio Completo: usuários ilimitados, com controle granular de permissões por módulo para cada membro da equipe.',
  },
  {
    question: 'Meus dados ficam seguros? Posso exportar se precisar?',
    answer: 'Seus dados são armazenados em banco de dados PostgreSQL hospedado na Supabase com criptografia em trânsito e em repouso. Você pode exportar sua base de clientes, histórico de vendas e qualquer dado a qualquer momento. Seus dados são seus — sempre.',
  },
  {
    question: 'O que acontece depois dos 7 dias de teste?',
    answer: 'Após o período de teste, você escolhe o plano e insere os dados de pagamento. Se não assinar, a conta entra em modo de leitura por 7 dias adicionais para você exportar seus dados. Não cobramos nada automaticamente sem sua confirmação.',
  },
  {
    question: 'Trabalho sozinho como piercer autônomo. Vale a pena?',
    answer: 'Muito. O plano CRM Solo foi pensado exatamente para piercers autônomos. Com R$97/mês você organiza todos os seus leads, automatiza confirmações, faz anamnese digital e tem histórico completo de cada cliente. A maioria dos nossos clientes solo recupera o valor do plano com uma única venda que veio de um lead que quase se perdia no WhatsApp.',
  },
  {
    question: 'Tenho um studio com 2 unidades. A Lapid suporta múltiplas unidades?',
    answer: 'Sim. A Lapid suporta múltiplos studios com isolamento total de dados entre unidades. Cada studio tem sua própria agenda, financeiro, estoque e equipe. Um Admin Master pode visualizar dados de todas as unidades.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,113,71,0.2) 30%, rgba(157,113,71,0.2) 70%, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">
            <DiamondDecor size={14} />
            Perguntas frequentes
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Suas dúvidas,
            <span className="gold-text block">respondidas.</span>
          </h2>
          <p className="text-white/50">
            Se não encontrar o que precisa, nossa equipe responde via WhatsApp em até 2 horas.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-gold-600/40 bg-gold-600/5'
                    : 'border-white/7 bg-white/[0.025] hover:border-white/12'
                }`}
                style={{ transitionDelay: `${Math.floor(i / 2) * 0.08}s` }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{
                      background: isOpen ? 'rgba(157,113,71,0.2)' : 'rgba(255,255,255,0.06)',
                      border: isOpen ? '1px solid rgba(157,113,71,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <ChevronDown size={14} className={isOpen ? 'text-gold-400' : 'text-white/40'} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-white/55 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
