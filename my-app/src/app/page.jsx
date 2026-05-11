'use client'
import Link from 'next/link'
import Image from 'next/image'

const featuredServices = [
  {
    image: '/service_haircut.png',
    title: 'Master Haircut',
    desc: 'Signature precision cuts by Ruwan Chandana.',
    price: '$45',
    time: '45 min'
  },
  {
    image: '/service_coloring.png',
    title: 'Technical Color',
    desc: 'Advanced coloring techniques, from balayage to gloss.',
    price: '$95',
    time: '120 min'
  },
  {
    image: '/service_grooming.png',
    title: 'Grooming Luxe',
    desc: 'Premium beard shaping and facial grooming.',
    price: '$35',
    time: '30 min'
  },
  {
    image: '/service_scalp.png',
    title: 'Scalp Therapy',
    desc: 'Invigorating treatments to nourish and revitalize.',
    price: '$60',
    time: '45 min'
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-split" style={{
        minHeight: '100vh',
        paddingTop: '80px',
        overflow: 'hidden',
        background: 'var(--black)'
      }}>

        {/* Desktop Side Image */}
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '55%', zIndex: 0,
        }} className="desktop-only animate-reveal-up">
          <Image
            src="/hero_real.jpg"
            alt="Authentic Salon Environment"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, var(--black) 0%, rgba(0,0,0,0.6) 20%, transparent 40%)'
          }} />
        </div>

        {/* Mobile Background overlay */}
        <div className="hero-bg-mobile" style={{ display: 'none' }}>
          <Image src="/hero_real.jpg" alt="Mobile BG" fill style={{ objectFit: 'cover', opacity: 0.3 }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 600px) 1fr', gap: '4rem', alignItems: 'center' }}>

            <div className="animate-reveal-up">
              <div className="badge" style={{ marginBottom: '2rem' }}>
                <span className="dot-red" /> Ruwan Chandana Studio
              </div>

              <h1 className="font-serif" style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                marginBottom: '2.5rem',
                letterSpacing: '-0.06em',
              }}>
                Defining <br />
                <span className="text-gradient">Modern</span> Art.
              </h1>

              <p style={{
                fontSize: '1.2rem', color: 'var(--text-muted)',
                lineHeight: 1.8, maxWidth: 480, marginBottom: '4rem',
              }}>
                Experience high-performance hair artistry in an environment engineered for technical excellence.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/booking" className="btn-primary" style={{ padding: '1.25rem 4rem' }}>
                  Book Session
                </Link>
                <Link href="/services" className="btn-secondary" style={{ padding: '1.25rem 4rem' }}>
                  The Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SELECTION */}
      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>The Collection</div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Signature <span className="text-gradient">Selection</span>
            </h2>
          </div>

          <div className="grid-4">
            {featuredServices.map(s => (
              <div key={s.title} className="card" style={{
                overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'pointer', border: '1px solid var(--border)'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 800 }}>{s.time}</span>
                    <Link href="/booking" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem' }}>Book →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNCOMMON EXPERIENCE */}
      <section className="section" style={{ background: '#050505' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
              Technically <span className="text-gradient">Superior.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>At Salon Ru Zero One, we've redefined the concept of hair styling for the elite.</p>
          </div>
          <div className="grid-3">
            {[
              { title: 'Instant Booking', desc: 'Efficiency at the core of luxury.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
              { title: 'Master Artistry', desc: 'Mathematical precision in every cut.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
              { title: 'Premium Care', desc: 'Molecular hair health solutions.', icon: 'M6 3h12l4 6-10 12L2 9z' }
            ].map(f => (
              <div key={f.title} className="uncommon-card">
                <h3 style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <div className="divider" />
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
