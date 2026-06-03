import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const LAST_UPDATE = '1º de junho de 2025';

const sections = [
  {
    id: '1',
    title: '1. Objeto do Contrato',
    content: `O presente instrumento regula os termos e condições de uso da plataforma Lapid Studio ("Plataforma"), um software de gestão desenvolvido e operado por Lapid Studio ("Lapid", "nós"), destinado a studios de piercing, estética e serviços correlatos ("Studio" ou "Usuário").

Ao acessar ou utilizar a Plataforma, o Usuário declara ter lido, compreendido e aceito integralmente estes Termos de Uso. Caso não concorde com qualquer disposição, deverá cessar imediatamente o uso da Plataforma.`,
  },
  {
    id: '2',
    title: '2. Definições',
    content: `Para fins destes Termos, aplicam-se as seguintes definições:

• "Usuário": toda pessoa física ou jurídica que acessa, cadastra-se ou utiliza a Plataforma.
• "Studio": estabelecimento comercial cujos colaboradores utilizam a Plataforma.
• "Plano": modalidade de assinatura contratada pelo Usuário.
• "Dados": informações inseridas, geradas ou processadas pelo uso da Plataforma.
• "Conteúdo": qualquer material disponibilizado pela Lapid na Plataforma, incluindo textos, imagens, vídeos e funcionalidades.`,
  },
  {
    id: '3',
    title: '3. Cadastro e Responsabilidades do Usuário',
    content: `3.1. Para utilizar a Plataforma, é obrigatório o cadastro com nome completo, e-mail válido e senha segura.

3.2. O Usuário garante que todas as informações fornecidas no cadastro são verdadeiras, precisas, atuais e completas, responsabilizando-se pela sua atualização.

3.3. O Usuário é o único responsável pela confidencialidade de suas credenciais de acesso, comprometendo-se a não compartilhá-las com terceiros.

3.4. É vedado o uso compartilhado de uma mesma conta por diferentes pessoas, salvo mediante plano específico que preveja múltiplos usuários.

3.5. O Usuário responde integralmente por quaisquer atividades realizadas por meio de sua conta, inclusive em caso de acesso não autorizado decorrente de sua negligência.

3.6. Em caso de suspeita de acesso não autorizado, o Usuário deve notificar imediatamente a Lapid pelo e-mail contato@lapid.com.br e alterar sua senha.

3.7. É expressamente proibido ao Usuário: (a) utilizar a Plataforma para fins ilegais ou que violem direitos de terceiros; (b) tentar comprometer a segurança, integridade ou disponibilidade da Plataforma; (c) realizar engenharia reversa, descompilar ou extrair o código-fonte da Plataforma; (d) revender, sublicenciar ou transferir o acesso à Plataforma sem autorização expressa e prévia da Lapid; (e) inserir dados falsos, fraudulentos ou de terceiros sem autorização.

3.8. O descumprimento de qualquer obrigação prevista neste instrumento poderá acarretar a suspensão ou cancelamento da conta, sem prejuízo das medidas legais cabíveis.`,
  },
  {
    id: '4',
    title: '4. Planos e Pagamentos',
    content: `4.1. A Plataforma oferece período gratuito de teste de 15 (quinze) dias, sem exigência de dados de cartão de crédito, permitindo ao Usuário avaliar as funcionalidades disponíveis.

4.2. Após o período de teste, o Studio deve contratar um dos planos pagos disponíveis para continuar utilizando a Plataforma. Os planos e seus respectivos preços estão descritos na página de planos do site lapid.com.br.

4.3. O processamento de pagamentos é realizado por Stripe, Inc. ("Stripe"), empresa terceirizada especializada em meios de pagamento. A Lapid não armazena dados completos de cartão de crédito ou débito.

4.4. Os preços dos planos são expressos em Reais (BRL) e podem ser ajustados pela Lapid, mediante aviso ao Usuário com antecedência mínima de 30 (trinta) dias.

4.5. As cobranças são realizadas de forma recorrente, na periodicidade mensal ou anual conforme o plano contratado, com renovação automática salvo cancelamento prévio.

4.6. Em caso de falha no pagamento, a Lapid notificará o Usuário e concederá prazo de 3 (três) dias para regularização. Persistindo a inadimplência, o acesso à Plataforma poderá ser suspenso até a quitação do débito.

4.7. Descontos, cupons ou promoções são de caráter excepcional, não geram direito adquirido e podem ser encerrados a qualquer tempo, sem aviso prévio.`,
  },
  {
    id: '5',
    title: '5. Cancelamento e Reembolso',
    content: `5.1. O Usuário pode cancelar sua assinatura a qualquer momento pelo painel de configurações da Plataforma ou enviando solicitação para contato@lapid.com.br.

5.2. O cancelamento é efetivado ao final do período de faturamento vigente, sendo mantido o acesso à Plataforma até essa data. Não há cobrança adicional após o cancelamento.

5.3. Em conformidade com o art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), nas contratações realizadas por meio eletrônico, o consumidor pode exercer o direito de arrependimento no prazo de 7 (sete) dias corridos contados da data da contratação ou do recebimento do produto ou serviço, com reembolso integral dos valores pagos.

5.4. Fora do prazo de arrependimento previsto no item 5.3, não serão realizados reembolsos proporcionais por período não utilizado, exceto nos casos de comprovada falha da Plataforma que torne o serviço inutilizável e que não seja sanada em prazo razoável.

5.5. A Lapid reserva-se o direito de cancelar contas que violem estes Termos, sem direito a reembolso pelos dias remanescentes do período contratado.`,
  },
  {
    id: '6',
    title: '6. Propriedade Intelectual',
    content: `6.1. A Plataforma Lapid Studio, incluindo seu código-fonte, design, interface, arquitetura, marcas, logotipos, textos, funcionalidades e demais elementos, é de propriedade exclusiva da Lapid e está protegida pela Lei nº 9.610/1998 (Lei de Direitos Autorais), Lei nº 9.279/1996 (Lei de Propriedade Industrial) e demais normas aplicáveis.

6.2. A contratação de qualquer plano concede ao Usuário uma licença limitada, não exclusiva, não sublicenciável, intransferível e revogável para utilizar a Plataforma, exclusivamente para as finalidades próprias do Studio, pelo prazo de vigência do plano contratado.

6.3. Os dados inseridos pelo Usuário na Plataforma — incluindo informações sobre clientes, agendamentos e transações — permanecem de propriedade do Usuário. A Lapid não reivindica direitos de propriedade sobre esses dados.

6.4. O Usuário concede à Lapid licença não exclusiva e gratuita para processar, armazenar e utilizar seus dados na medida estritamente necessária para a prestação dos serviços contratados e para fins de melhoria da Plataforma, de forma anonimizada e agregada.

6.5. O Usuário não pode reproduzir, modificar, distribuir, vender, licenciar ou criar obras derivadas da Plataforma ou de qualquer parte dela sem autorização prévia e expressa da Lapid.`,
  },
  {
    id: '7',
    title: '7. Limitação de Responsabilidade',
    content: `7.1. A Plataforma é fornecida "no estado em que se encontra" e "conforme disponível". A Lapid envidarará esforços razoáveis para garantir o funcionamento contínuo e a segurança da Plataforma, mas não oferece garantias de disponibilidade ininterrupta de 100%.

7.2. A Lapid não se responsabiliza por: (a) interrupções, falhas ou instabilidades decorrentes de caso fortuito, força maior, falhas de provedores de infraestrutura (incluindo serviços de nuvem), ataques cibernéticos ou outros eventos fora de seu controle razoável; (b) perda, corrupção ou acesso não autorizado a dados decorrentes de negligência do Usuário no guarda de suas credenciais; (c) danos indiretos, incidentais, especiais, punitivos ou lucros cessantes; (d) decisões de negócio tomadas com base em dados da Plataforma; (e) atos de terceiros fornecedores de serviços integrados à Plataforma.

7.3. Em nenhuma hipótese a responsabilidade total e cumulativa da Lapid perante o Usuário, por qualquer causa, excederá o montante equivalente às mensalidades efetivamente pagas pelo Usuário nos 3 (três) meses imediatamente anteriores ao evento que originou a reclamação.

7.4. As limitações previstas neste item não excluem as responsabilidades que, por determinação legal, não possam ser excluídas ou limitadas, especialmente as decorrentes do Código de Defesa do Consumidor.`,
  },
  {
    id: '8',
    title: '8. Privacidade e Proteção de Dados',
    content: `8.1. O tratamento de dados pessoais realizado pela Lapid é regido pela Política de Privacidade, disponível em lapid.com.br/privacidade, a qual integra estes Termos por referência.

8.2. A Lapid atua como controladora dos dados pessoais dos Usuários e como operadora dos dados pessoais dos clientes dos Studios cadastrados na Plataforma, conforme definições da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).

8.3. O Usuário, ao utilizar a Plataforma para inserir dados pessoais de seus clientes, assume a responsabilidade de controlador desses dados, devendo obter as bases legais adequadas para tanto e observar a LGPD e demais normas aplicáveis.`,
  },
  {
    id: '9',
    title: '9. Vigência e Alterações',
    content: `9.1. Estes Termos entram em vigor na data indicada no cabeçalho e vigoram por prazo indeterminado, enquanto o Usuário mantiver uma conta ativa na Plataforma.

9.2. A Lapid reserva-se o direito de alterar estes Termos a qualquer momento, em razão de mudanças legais, regulatórias ou de negócio.

9.3. Alterações substanciais serão comunicadas ao Usuário com antecedência mínima de 15 (quinze) dias, por e-mail cadastrado ou por notificação visível na Plataforma.

9.4. O uso continuado da Plataforma após a data de vigência das alterações comunicadas implica aceitação integral dos novos Termos.

9.5. Caso o Usuário não concorde com as alterações, poderá cancelar sua assinatura antes da data de entrada em vigor das mudanças, nos termos da cláusula 5 deste instrumento.`,
  },
  {
    id: '10',
    title: '10. Disposições Gerais e Foro',
    content: `10.1. Estes Termos constituem o acordo integral entre a Lapid e o Usuário com relação ao objeto aqui tratado, substituindo quaisquer entendimentos anteriores, orais ou escritos.

10.2. A eventual invalidade ou inaplicabilidade de qualquer cláusula destes Termos não afeta a validade e eficácia das demais cláusulas.

10.3. A tolerância da Lapid quanto ao descumprimento de qualquer obrigação pelo Usuário não implica novação, renúncia de direitos ou precedente para descumprimentos futuros.

10.4. O Usuário não pode ceder ou transferir os direitos e obrigações decorrentes deste instrumento sem o consentimento prévio e por escrito da Lapid.

10.5. Estes Termos são regidos exclusivamente pelas leis da República Federativa do Brasil.

10.6. Para dirimir quaisquer controvérsias ou litígios decorrentes destes Termos, fica eleito o foro da comarca de São Paulo, Estado de São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

Para dúvidas ou esclarecimentos, entre em contato: contato@lapid.com.br`,
  },
];

export function Termos() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1208 100%)',
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
            background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(157,113,71,0.12) 0%, transparent 70%)',
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
              DOCUMENTO LEGAL
            </span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 16px',
              color: '#FFFFFF',
            }}
          >
            Termos de Uso
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
            Bem-vindo ao <strong>Lapid Studio</strong>. Estes Termos de Uso regulam o acesso e a utilização da nossa plataforma de gestão para studios de piercing e estética. Leia com atenção antes de criar sua conta. Ao utilizar o Lapid Studio, você concorda com todas as condições descritas neste documento.
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
              <div
                style={{ fontSize: '15px', color: '#4A4A4A', lineHeight: 1.8, whiteSpace: 'pre-line' }}
              >
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact box */}
        <div
          style={{
            marginTop: '60px', background: '#0A0A0A', borderRadius: '16px',
            padding: '32px', textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '40px', height: '40px', borderRadius: '10px', margin: '0 auto 16px',
              background: 'rgba(157,113,71,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9D7147" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
            Ficou com dúvidas?
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: '0 0 20px', lineHeight: 1.6 }}>
            Nossa equipe está disponível para esclarecer qualquer ponto destes Termos.
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
            contato@lapid.com.br
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
