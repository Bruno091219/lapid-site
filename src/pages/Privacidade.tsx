import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const LAST_UPDATE = '1º de junho de 2025';

type Section = {
  id: string;
  title: string;
  content?: string;
  subsections?: { title: string; items: string[] }[];
  table?: { col1: string; col2: string; rows: [string, string][] };
};

const sections: Section[] = [
  {
    id: '1',
    title: '1. Introdução e Controlador',
    content: `A Lapid Studio ("Lapid", "nós", "nosso") respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – "LGPD") e demais legislações aplicáveis.

Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e compartilhamos seus dados pessoais quando você acessa nosso site (lapid.com.br) ou utiliza nossa plataforma de gestão para studios de piercing e estética.

Controlador dos dados: Lapid Studio
Contato do DPO / Encarregado: contato@lapid.com.br`,
  },
  {
    id: '2',
    title: '2. Dados Coletados',
    content: `Coletamos diferentes categorias de dados, dependendo de como você interage conosco:

2.1. Dados fornecidos diretamente pelo Usuário:
• Nome completo
• Endereço de e-mail
• Senha (armazenada em hash seguro — nunca em texto plano)
• Nome do studio ou empresa
• Telefone de contato (quando fornecido voluntariamente)
• Dados de pagamento (coletados e processados pelo Stripe; não armazenamos número completo de cartão)

2.2. Dados gerados pelo uso da Plataforma:
• Registros de acesso (data, hora, IP, tipo de navegador e dispositivo)
• Histórico de ações e eventos dentro da Plataforma
• Preferências de configuração e personalização
• Dados inseridos sobre os clientes do Studio (tratados pela Lapid na qualidade de operadora)

2.3. Dados coletados automaticamente:
• Endereço IP e geolocalização aproximada
• Tipo de dispositivo, sistema operacional e navegador
• Páginas acessadas, tempo de permanência e fluxo de navegação
• Cookies e tecnologias similares (detalhados na seção 7)`,
  },
  {
    id: '3',
    title: '3. Finalidade e Base Legal do Tratamento',
    table: {
      col1: 'Finalidade',
      col2: 'Base Legal (LGPD)',
      rows: [
        ['Criação e gestão de conta de Usuário', 'Execução de contrato — art. 7º, V'],
        ['Prestação dos serviços da Plataforma', 'Execução de contrato — art. 7º, V'],
        ['Processamento de pagamentos e cobrança', 'Execução de contrato — art. 7º, V'],
        ['Envio de e-mails transacionais (confirmação, notificações, recuperação de senha)', 'Execução de contrato — art. 7º, V'],
        ['Prevenção de fraudes, abusos e segurança da Plataforma', 'Legítimo interesse — art. 7º, IX'],
        ['Cumprimento de obrigações fiscais, contábeis e legais', 'Obrigação legal — art. 7º, II'],
        ['Atendimento a solicitações dos titulares de dados', 'Obrigação legal / exercício de direitos — art. 7º, II e VI'],
        ['Envio de comunicações de marketing e novidades (opcional)', 'Consentimento — art. 7º, I'],
        ['Melhoria da Plataforma, análise de uso e desenvolvimento de funcionalidades', 'Legítimo interesse — art. 7º, IX'],
      ],
    },
  },
  {
    id: '4',
    title: '4. Compartilhamento com Terceiros',
    content: `Compartilhamos dados pessoais com os seguintes fornecedores de confiança, todos comprometidos com padrões adequados de proteção de dados e sujeitos a acordos de processamento de dados (DPA):

• Stripe, Inc. (stripe.com) — Processamento seguro de pagamentos e assinaturas. Dados financeiros são tratados diretamente pelo Stripe, sujeito à Política de Privacidade do Stripe. A Lapid não tem acesso ao número completo do cartão.

• Supabase, Inc. (supabase.com) — Banco de dados relacional, autenticação de usuários e armazenamento de arquivos. Os dados são armazenados em servidores com criptografia em repouso e em trânsito.

• Resend (resend.com) — Plataforma de envio de e-mails transacionais, utilizada para confirmação de conta, notificações de agendamento e recuperação de senha.

• Google LLC (google.com) — Serviços de análise de tráfego (Google Analytics) e infraestrutura de CDN. O Google Analytics pode coletar dados de navegação de forma agregada e, quando possível, anonimizada.

Além dos fornecedores acima, podemos compartilhar dados quando:
(a) exigido por lei, ordem judicial ou autoridade competente;
(b) necessário para proteger direitos, propriedade ou segurança da Lapid, dos Usuários ou de terceiros;
(c) mediante consentimento expresso do titular.

Não vendemos, alugamos ou comercializamos dados pessoais a terceiros.`,
  },
  {
    id: '5',
    title: '5. Direitos do Titular de Dados',
    content: `Nos termos dos arts. 17 a 22 da LGPD, você — como titular dos dados — tem os seguintes direitos, que podem ser exercidos gratuitamente:

• Confirmação e acesso: saber se tratamos seus dados pessoais e obter uma cópia deles.
• Correção: solicitar a atualização ou retificação de dados incompletos, inexatos ou desatualizados.
• Anonimização, bloqueio ou eliminação: de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
• Portabilidade: receber seus dados em formato estruturado e interoperável para transferência a outro fornecedor de serviço ou produto.
• Eliminação: solicitar a exclusão dos dados pessoais tratados com base no consentimento, salvo nas hipóteses em que a retenção é obrigatória por lei.
• Informação sobre compartilhamento: saber com quais entidades públicas e privadas a Lapid compartilha seus dados.
• Revogação do consentimento: retirar, a qualquer momento, o consentimento dado para tratamentos baseados nessa base legal, sem prejuízo da licitude do tratamento anterior à revogação.
• Oposição: opor-se ao tratamento de dados quando entender que há violação à LGPD, nos casos em que o tratamento não é baseado em consentimento.
• Petição à ANPD: apresentar petição à Autoridade Nacional de Proteção de Dados (ANPD) em relação aos seus dados.

Para exercer qualquer desses direitos, envie uma solicitação para contato@lapid.com.br, identificando-se e descrevendo claramente seu pedido. Responderemos no prazo máximo de 15 (quinze) dias úteis.`,
  },
  {
    id: '6',
    title: '6. Retenção de Dados',
    content: `Mantemos seus dados pessoais pelo tempo necessário para as finalidades descritas nesta Política ou conforme exigido pela legislação vigente:

• Dados de conta e perfil: pelo período de vigência do contrato e por até 5 anos após o encerramento da conta, para cumprimento de obrigações legais e resolução de eventuais disputas.

• Dados de pagamento e registros financeiros: por até 5 anos, conforme as obrigações impostas pela legislação tributária e fiscal brasileira.

• Registros de acesso (logs): por até 6 meses, nos termos do art. 15 do Marco Civil da Internet (Lei nº 12.965/2014), podendo ser mantidos por período superior se exigido por ordem judicial ou autoridade competente.

• Dados de comunicações de marketing: até a revogação do consentimento pelo titular ou até que seja solicitada a exclusão.

• Dados dos clientes do Studio (tratados como operadora): conforme orientação do Studio (controlador), observado o mínimo legal aplicável.

Após o decurso dos prazos acima, os dados são eliminados de forma segura ou anonimizados de modo irreversível.`,
  },
  {
    id: '7',
    title: '7. Cookies e Tecnologias Similares',
    content: `Utilizamos cookies e tecnologias similares (como pixels de rastreamento e armazenamento local) para as seguintes finalidades:

• Cookies essenciais: necessários para o funcionamento básico da Plataforma, como manter sessões autenticadas e lembrar preferências de idioma. Não podem ser desativados sem comprometer o funcionamento do serviço.

• Cookies de desempenho e analytics: coletam informações sobre como os visitantes utilizam nosso site (páginas mais acessadas, tempo de permanência, erros). Utilizamos o Google Analytics, que pode ser configurado com anonimização de IP. Você pode optar por não ser rastreado pelo Google Analytics através da extensão Google Analytics Opt-out Browser Add-on.

• Cookies de funcionalidade: permitem que a Plataforma lembre suas preferências personalizadas para oferecer uma experiência melhorada.

Você pode configurar seu navegador para bloquear ou excluir cookies. No entanto, a desativação de cookies essenciais pode prejudicar o funcionamento correto da Plataforma. As configurações variam de acordo com o navegador utilizado (Chrome, Firefox, Safari, Edge, etc.).`,
  },
  {
    id: '8',
    title: '8. Segurança dos Dados',
    content: `Adotamos medidas técnicas e organizacionais adequadas e proporcionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição:

• Criptografia de senhas com algoritmo bcrypt (hash com salt)
• Comunicações protegidas por HTTPS/TLS 1.2 ou superior em todos os pontos
• Controle de acesso baseado em funções (RBAC), garantindo que cada usuário acesse apenas o que é necessário para suas atividades
• Autenticação de múltiplos fatores disponível para contas administrativas
• Monitoramento contínuo de segurança e logs de auditoria
• Backups regulares com criptografia em repouso
• Plano de resposta a incidentes de segurança, com notificação à ANPD e aos titulares afetados nos prazos legais

Nenhum sistema é 100% seguro. Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a Lapid notificará a ANPD e os afetados no prazo de 72 horas após a identificação do incidente, nos termos do art. 48 da LGPD.`,
  },
  {
    id: '9',
    title: '9. Transferência Internacional de Dados',
    content: `Os serviços de infraestrutura utilizados pela Lapid (Supabase, Stripe, Resend e Google) podem armazenar e processar dados em servidores localizados fora do Brasil, incluindo nos Estados Unidos e na União Europeia.

Estas transferências são realizadas com garantias adequadas de proteção, incluindo cláusulas contratuais padrão, certificações como o EU-U.S. Data Privacy Framework e Binding Corporate Rules, assegurando que seus dados continuem protegidos de acordo com os padrões da LGPD.`,
  },
  {
    id: '10',
    title: '10. Alterações a Esta Política',
    content: `Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, na legislação aplicável ou nos serviços oferecidos.

Quando realizarmos alterações substanciais, notificaremos os Usuários com antecedência mínima de 15 (quinze) dias, por e-mail cadastrado ou por aviso visível na Plataforma, antes de as alterações entrarem em vigor.

A data da última atualização é sempre indicada no início desta Política. Recomendamos a revisão periódica deste documento.`,
  },
  {
    id: '11',
    title: '11. Encarregado de Dados (DPO) e Contato',
    content: `Nos termos do art. 41 da LGPD, o Encarregado pelo Tratamento de Dados Pessoais (DPO) da Lapid Studio pode ser contactado pelo seguinte canal:

E-mail: contato@lapid.com.br
Assunto sugerido: [LGPD] + descrição do pedido

Para exercer seus direitos como titular, solicitar informações adicionais, reportar incidentes de privacidade ou apresentar reclamações, utilize o e-mail acima. Compromitamo-nos a responder no prazo máximo de 15 (quinze) dias úteis.

Caso não obtenha uma resposta satisfatória ou entenda que o tratamento de seus dados viola a LGPD, você pode apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD) pelo site: anpd.gov.br`,
  },
];

export function Privacidade() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #0D1218 100%)',
          paddingTop: '120px',
          paddingBottom: '64px',
          paddingLeft: '24px',
          paddingRight: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 50% 70% at 20% 50%, rgba(157,113,71,0.1) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', color: 'rgba(190,168,133,0.6)', textDecoration: 'none',
              marginBottom: '24px', transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(190,168,133,1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(190,168,133,0.6)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar ao site
          </a>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(157,113,71,0.12)', border: '1px solid rgba(157,113,71,0.2)',
              borderRadius: '980px', padding: '5px 14px', marginBottom: '20px',
            }}
          >
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#9D7147' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#9D7147', letterSpacing: '0.04em' }}>
              LGPD — LEI Nº 13.709/2018
            </span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 16px',
              color: '#FFFFFF',
            }}
          >
            Política de Privacidade
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', margin: 0, letterSpacing: '-0.01em' }}>
            Última atualização: {LAST_UPDATE}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '64px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>

        {/* Intro */}
        <div
          style={{
            background: '#fff', border: '1px solid rgba(157,113,71,0.15)',
            borderRadius: '16px', padding: '28px 32px', marginBottom: '32px',
            borderLeft: '3px solid #9D7147',
          }}
        >
          <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.75, margin: 0 }}>
            O <strong>Lapid Studio</strong> acredita que privacidade é um direito fundamental. Esta Política explica de forma clara e transparente quais dados coletamos, como os utilizamos, com quem os compartilhamos e quais são os seus direitos como titular. Em caso de dúvidas, entre em contato em{' '}
            <a href="mailto:contato@lapid.com.br" style={{ color: '#9D7147', textDecoration: 'none' }}>
              contato@lapid.com.br
            </a>.
          </p>
        </div>

        {/* Table of contents */}
        <nav
          style={{
            background: 'rgba(157,113,71,0.04)', border: '1px solid rgba(157,113,71,0.12)',
            borderRadius: '12px', padding: '24px 28px', marginBottom: '48px',
          }}
        >
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#9D7147', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Índice
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#sec-${s.id}`}
                style={{ fontSize: '13px', color: '#6B6B6B', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#9D7147'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B6B6B'; }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sections.map((s) => (
            <div key={s.id} id={`sec-${s.id}`}>
              <h2
                style={{
                  fontSize: '18px', fontWeight: 700, color: '#0A0A0A',
                  letterSpacing: '-0.02em', margin: '0 0 16px',
                  paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                {s.title}
              </h2>

              {s.content && (
                <div style={{ fontSize: '15px', color: '#4A4A4A', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {s.content}
                </div>
              )}

              {s.table && (
                <div style={{ overflowX: 'auto' }}>
                  <table
                    style={{
                      width: '100%', borderCollapse: 'collapse',
                      fontSize: '14px', color: '#4A4A4A',
                    }}
                  >
                    <thead>
                      <tr style={{ background: 'rgba(157,113,71,0.06)' }}>
                        <th
                          style={{
                            padding: '12px 16px', textAlign: 'left', fontWeight: 600,
                            color: '#0A0A0A', border: '1px solid rgba(0,0,0,0.07)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {s.table.col1}
                        </th>
                        <th
                          style={{
                            padding: '12px 16px', textAlign: 'left', fontWeight: 600,
                            color: '#0A0A0A', border: '1px solid rgba(0,0,0,0.07)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {s.table.col2}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map(([c1, c2], i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'rgba(0,0,0,0.018)' }}>
                          <td style={{ padding: '11px 16px', border: '1px solid rgba(0,0,0,0.07)', lineHeight: 1.5 }}>{c1}</td>
                          <td style={{ padding: '11px 16px', border: '1px solid rgba(0,0,0,0.07)', lineHeight: 1.5, color: '#6B6B6B' }}>{c2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rights highlight box */}
        <div
          style={{
            marginTop: '60px', background: 'rgba(157,113,71,0.05)',
            border: '1px solid rgba(157,113,71,0.2)', borderRadius: '16px', padding: '32px',
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A0A0A', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Exercer seus direitos é simples
          </h3>
          <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.7, margin: '0 0 20px' }}>
            Para confirmar se tratamos seus dados, solicitar uma cópia, corrigir informações, revogar consentimento ou pedir a eliminação, basta enviar um e-mail para:
          </p>
          <a
            href="mailto:contato@lapid.com.br"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #9D7147 0%, #BEA885 100%)',
              color: '#fff', textDecoration: 'none', fontWeight: 600,
              fontSize: '14px', padding: '12px 24px', borderRadius: '980px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contato@lapid.com.br
          </a>
          <p style={{ fontSize: '12px', color: '#9B9B9B', margin: '16px 0 0' }}>
            Respondemos em até 15 dias úteis. Inclua no assunto: [LGPD] + seu pedido.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
