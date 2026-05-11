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
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--black)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '55%', height: '100%',
          zIndex: 0,
          opacity: 1
        }}>
          <Image
            src="/hero_premium.png"
            alt="Salon Ru Zero One Masterclass"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={100}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--black) 0%, rgba(0,0,0,0.8) 30%, transparent 50%, rgba(0,0,0,0.4) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, var(--black) 0%, transparent 25%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
              Experience the pinnacle of hair artistry with **Salon Ru Zero One**. Where technical mastery meets high-fashion vision.
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

      {/* REPLACED ORDER: 1. SIGNATURE WORK (NOW FIRST) */}
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
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 50%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '20px', left: '20px',
                    display: 'flex', gap: '0.75rem', alignItems: 'center'
                  }}>
                    <span style={{
                      background: 'var(--primary)', color: 'white', padding: '0.4rem 1rem',
                      borderRadius: '4px', fontSize: '0.9rem', fontWeight: 900
                    }}>{s.price}</span>
                  </div>
                </div>

                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    {s.title}
                  </h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.2rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {s.time} Session
                    </span>
                    <Link href="/booking" style={{
                      color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem',
                      textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>
                      Book Spot →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPLACED ORDER: 2. UNCOMMON EXPERIENCE (NOW SECOND) */}
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
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              At Salon Ru Zero One, we've redefined the concept of hair styling. It's no longer just a service; it's a precision-engineered experience tailored to the elite.
            </p>
          </div>

          <div className="grid-3">
            <div className="uncommon-card">
              <div className="icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--primary)' }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="rgba(227, 30, 36, 0.05)" />
                </svg>
              </div>
              <h3 style={{ fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                Instant Booking
              </h3>
              <div className="divider" />
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                Access our elite stylists through our high-speed digital platform. Efficiency at the core of luxury.
              </p>
            </div>

            <div className="uncommon-card">
              <div className="icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--primary)' }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="rgba(227, 30, 36, 0.05)" />
                </svg>
              </div>
              <h3 style={{ fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                Master Artistry
              </h3>
              <div className="divider" />
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                Every cut is a structural blueprint designed for your individual profile. Mathematical precision.
              </p>
            </div>

            <div className="uncommon-card">
              <div className="icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--primary)' }}>
                  <path d="M6 3h12l4 6-10 12L2 9z" fill="rgba(227, 30, 36, 0.05)" />
                </svg>
              </div>
              <h3 style={{ fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                Premium Care
              </h3>
              <div className="divider" />
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                Molecular hair health through the world's most exclusive scientific product lines. Pure performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CALLOUT */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="card" style={{
            padding: '7rem 4rem', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.25) 0%, rgba(0,0,0,1) 100%)',
            border: '1px solid rgba(227, 30, 36, 0.4)',
            position: 'relative', overflow: 'hidden',
            borderRadius: '12px'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, marginBottom: '2.5rem', lineHeight: 0.85, letterSpacing: '-0.04em' }}>
                Your <span className="text-gradient">Desired</span> <br /> Look Awaits.
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto 4rem', lineHeight: 1.8, fontSize: '1.25rem' }}>
                Secure your consultation with Ruwan Chandana today. Spots in the studio are limited by design.
              </p>
              <Link href="/booking" className="btn-primary" style={{ padding: '1.25rem 5rem', fontSize: '1.05rem' }}>
                Claim Your Session
              </Link>
            </div>
            <div style={{
              position: 'absolute', right: '-8%', bottom: '-15%',
              fontSize: '35rem', opacity: 0.04, pointerEvents: 'none', transform: 'rotate(-25deg)'
            }}>✂️</div>
          </div>
        </div>
      </section>
    </>
  )
}
