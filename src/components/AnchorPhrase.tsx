export function AnchorPhrase() {
  return (
    <section
      className="py-16 lg:py-[100px] px-6"
      style={{
        background: '#F3F0EA',
        textAlign: 'center',
      }}
    >
      <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 4.5vw, 60px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: '#0A0A0A',
            margin: 0,
          }}
        >
          Tudo que seu studio precisa.{' '}
          <span className="gold-text">Em um lugar só.</span>
        </h2>
      </div>
    </section>
  );
}
