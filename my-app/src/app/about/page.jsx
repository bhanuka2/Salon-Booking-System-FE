export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1rem' }}>The Legacy</div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
              Artistry by <span className="text-gradient">Ruwan Chandana</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Salon Ru Zero One is the culmination of years of technical mastery and artistic vision. Founded by Ruwan Chandana, our studio is dedicated to providing bespoke hair solutions that reflect your individual style.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              We specialize in precision cutting and technical coloring, utilizing the most advanced methods in the industry to ensure perfection in every session.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: 800 }}>15+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Years of Experience</div>
              </div>
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: 800 }}>01</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Desired Goal</div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🤵</div>
            <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              To redefine the salon experience through technical brilliance and personalized care.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}