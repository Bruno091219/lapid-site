import { useState } from 'react';

const faqs = [
  {
    q: 'Preciso instalar algum programa?',
    a: 'Não. A Lapid funciona 100% no navegador e no celular. É só acessar e começar a usar — sem instalar nada.',
  },
  {
    q: 'É difícil de configurar?',
    a: 'Em menos de 15 minutos seu studio já está funcionando. Nosso time te ajuda pelo WhatsApp do início ao fim.',
  },
  {
    q: 'Como funciona o período grátis?',
    a: '15 dias sem cobrar nada e sem precisar de cartão. Você usa, conhece tudo, e só depois decide se fica.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem fidelidade e sem multa. Você cancela com um clique, a qualquer momento, sem precisar ligar pra ninguém.',
  },
  {
    q: 'Funciona para mais de um profissional?',
    a: 'Sim. Você pode adicionar quantos profissionais precisar, dependendo do plano escolhido. Cada um tem seu próprio acesso.',
  },
  {
    q: 'O link da bio do Instagram é incluso?',
    a: 'A página pública com sua agenda e catálogo está disponível nos planos Studio Essencial e Studio Completo.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Tudo é criptografado com backup automático todo dia. Seus dados são seus e só seus — você pode exportar a qualquer momento.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '120px 0', background: '#FAFAF8' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#0A0A0A', margin: 0,
            }}
          >
            Dúvidas frequentes.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderRadius: '14px',
                border: `1px solid ${open === i ? 'rgba(157,113,71,0.28)' : 'rgba(0,0,0,0.07)'}`,
                background: open === i ? 'rgba(157,113,71,0.03)' : '#FFFFFF',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', padding: '22px 24px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '17px', fontWeight: 600,
                    color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                    background: open === i ? '#9D7147' : 'rgba(0,0,0,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s, transform 0.25s',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke={open === i ? 'white' : '#666'}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 22px' }}>
                  <p
                    style={{
                      fontSize: '16px', color: '#6B6B6B', lineHeight: 1.65,
                      fontWeight: 400, margin: 0, letterSpacing: '-0.01em',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
