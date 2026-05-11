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
      {/* HERO SECTION - REFACTORED FOR REAL ENVIRONMENT */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--black)'
      }}>
        {/* Real Salon Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 1
        }}>
          <Image
            src="/hero_real.jpg"
            alt="Salon Ru Zero One Authentic Environment"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5) contrast(1.1)'
            }}
            priority
            quality={100}
          />
          {/* MASKING GRADIENTS (To remove Gemini mark and enhance atmosphere) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--black) 0%, rgba(0,0,0,0.6) 40%, transparent 60%, rgba(0,0,0,0.4) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, var(--black) 5%, transparent 40%)'
          }} />
          {/* SPECIFIC CORNER MASK to hide Gemini icon */}
          <div style={{
            position: 'absolute',
            bottom: 0, right: 0,
            width: '200px', height: '150px',
            background: 'radial-gradient(circle at bottom right, var(--black) 0%, transparent 70%)',
            zIndex: 1
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 640 }} className="animate-reveal-up">
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <span className="dot-red" style={{ marginRight: '8px' }} /> Ruwan Chandana Studio
            </div>
            <h1 className="font-serif" style={{
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              marginBottom: '2rem',
              letterSpacing: '-0.06em',
            }}>
              Defining <br />
              <span className="text-gradient">Modern</span> Art.
            </h1>
            <p style={{
              fontSize: '1.2rem', color: 'var(--text-muted)',
              lineHeight: 1.8, maxWidth: 520, marginBottom: '3.5rem',
              fontWeight: 400
            }}>
              Experience the pinnacle of hair artistry with **Salon Ru Zero One**. Where technical mastery meets authentic salon spirit.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/booking" className="btn-primary">
                Book Session
              </Link>
              <Link href="/services" className="btn-secondary">
                View Catalog
              </Link>
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
            <p style={{ color: 'var(--text-dim)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              Explore our curated menu of high-performance treatments designed for precision and style.
            </p>
          </div>

          <div className="grid-4">
            {featuredServices.map(s => (
              <div key={s.title} className="card" style={{
                overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'pointer',
                border: '1px solid var(--border)'
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
                  <h4 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.2rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>{s.time} Session</span>
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
            <div>
              <div className="badge" style={{ marginBottom: '1.5rem' }}>The Pillar</div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1 }}>
                Technically <span className="text-gradient">Superior.</span> <br />
                Artistically Bound.
              </h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>At Salon Ru Zero One, we've redefined the concept of hair styling. It's no longer just a service; it's a precision-engineered experience tailored to the elite.</p>
          </div>
          <div className="grid-3">
            {[
              { title: 'Instant Booking', desc: 'Efficiency at the core of luxury.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
              { title: 'Master Artistry', desc: 'Mathematical precision in every cut.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
              { title: 'Premium Care', desc: 'Molecular hair health through exclusive science.', icon: 'M6 3h12l4 6-10 12L2 9z' }
            ].map(f => (
              <div key={f.title} className="uncommon-card">
                <div className="icon-wrapper">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d={f.icon} fill="rgba(227, 30, 36, 0.05)" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{f.title}</h3>
                <div className="divider" />
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
