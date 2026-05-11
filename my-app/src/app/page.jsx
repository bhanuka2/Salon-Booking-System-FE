'use client'
import Link from 'next/link'
import Image from 'next/image'

const featuredServices = [
  {
    image: '/service_haircut.png',
    title: 'Master Haircut',
    desc: 'Signature precision cuts by Ruwan Chandana.',
    time: '45 min'
  },
  {
    image: '/service_coloring.png',
    title: 'Technical Color',
    desc: 'Advanced coloring techniques, from balayage to gloss.',
    time: '120 min'
  },
  {
    image: '/service_grooming.png',
    title: 'Grooming Luxe',
    desc: 'Premium beard shaping and facial grooming.',
    time: '30 min'
  },
  {
    image: '/service_scalp.png',
    title: 'Scalp Therapy',
    desc: 'Invigorating treatments to nourish and revitalize.',
    time: '45 min'
  },
]

export default function HomePage() {
  return (
    <>
      {/* HIGH-QUALITY SALON SHOP HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--black)'
      }}>
        {/* New Premium Salon Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.6
        }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
            alt="Premium Salon Interior"
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.4) contrast(1.1)' }}
            priority
          />
          {/* Elegant Gradient Overlays */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--black) 0%, rgba(0,0,0,0.5) 50%, var(--black) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, var(--black) 0%, transparent 30%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>

            {/* HERO CONTENT */}
            <div className="animate-reveal-up">
              <div className="badge" style={{ marginBottom: '2rem' }}>
                <span className="dot-red" style={{ marginRight: '8px' }} /> Ruwan Chandana Studio
              </div>
              <h1 className="font-serif" style={{
                fontSize: 'clamp(3.5rem, 8.5vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                marginBottom: '2.5rem',
                letterSpacing: '-0.06em',
              }}>
                Art of the <br />
                <span className="text-gradient">Zero One.</span>
              </h1>
              <p style={{
                fontSize: '1.15rem', color: 'var(--text-muted)',
                lineHeight: 1.8, maxWidth: 500, marginBottom: '3.5rem',
              }}>
                Where technical precision meets authentic artistry. Welcome to the flagship studio for modern hair geometry.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/booking" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
                  Reserve Experience
                </Link>
                <Link href="/services" className="btn-secondary" style={{ padding: '1.25rem 3rem' }}>
                  The Catalog
                </Link>
              </div>
            </div>

            {/* FLOATING REAL WORK PREVIEW */}
            <div style={{ position: 'relative', padding: '2rem' }} className="animate-reveal-up">
              {/* Decorative Technical Edges */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '1px', background: 'var(--primary)', opacity: 0.6 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '100px', background: 'var(--primary)', opacity: 0.6 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100px', height: '1px', background: 'var(--primary)', opacity: 0.6 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '1px', height: '100px', background: 'var(--primary)', opacity: 0.6 }} />

              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'var(--card)'
              }}>
                <Image
                  src="/hero.jpg"
                  alt="The Master at Work"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  top: '10%', right: '10%',
                  fontSize: '0.6rem', color: 'var(--primary)',
                  fontFamily: 'monospace', opacity: 0.7,
                  writingMode: 'vertical-rl'
                }}>
                  MASTERCLASS_ZERO_ONE // 2026
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SIGNATURE WORK */}
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
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'pointer', border: '1px solid var(--border)'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}>
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 800 }}>{s.time} Session</span>
                    <Link href="/booking" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Book Spot →</Link>
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
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>Flagship studio designed for the elite. Our techniques are engineered for durability and style.</p>
          </div>
          <div className="grid-3">
            {[{ title: 'Instant Booking', desc: 'Efficiency at the core of luxury.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
            { title: 'Master Artistry', desc: 'Mathematical precision in every cut.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
            { title: 'Premium Care', desc: 'Molecular hair health solutions.', icon: 'M6 3h12l4 6-10 12L2 9z' }].map(f => (
              <div key={f.title} className="uncommon-card">
                <div className="icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={f.icon} fill="rgba(227, 30, 36, 0.1)" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase' }}>{f.title}</h3>
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
