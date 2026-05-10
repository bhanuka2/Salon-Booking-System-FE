import Link from 'next/link'
import Image from 'next/image'

const featuredServices = [
  { icon: '💇‍♂️', title: 'Master Haircut', desc: 'Signature precision cuts by Ruwan Chandana himself.', price: '$45', time: '45 min' },
  { icon: '🎨', title: 'Technical Color', desc: 'Advanced coloring techniques, from balayage to full gloss.', price: '$95', time: '120 min' },
  { icon: '🤵', title: 'Grooming Luxe', desc: 'Premium beard shaping and facial grooming for the modern man.', price: '$35', time: '30 min' },
  { icon: '✨', title: 'Scalp Therapy', desc: 'Invigorating treatments to nourish and revitalize from the roots.', price: '$60', time: '45 min' },
]

export default function HomePage() {
  return (
    <>
      {/* NEW HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--black)'
      }}>
        {/* Hero Background Image with Overlay */}
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
          {/* Refined Gradient Overlays for better depth */}
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
          <div style={{ maxWidth: 640 }}>
            <div className="badge" style={{ marginBottom: '1.5rem', borderRadius: '4px' }}>
              <span className="dot-red" style={{ marginRight: '8px' }} /> Ruwan Chandana Studio
            </div>
            <h1 className="font-serif" style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              marginBottom: '1.5rem',
              letterSpacing: '-0.05em',
            }}>
              Your Desired <br />
              <span className="text-gradient">Hair Stylist.</span>
            </h1>
            <p style={{
              fontSize: '1.2rem', color: 'var(--text-muted)',
              lineHeight: 1.8, maxWidth: 500, marginBottom: '3rem',
              fontWeight: 400
            }}>
              Experience the pinnacle of hair artistry with **Salon Ru Zero One**. Precise technical cutting meets high-fashion vision.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/booking" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Book Appointment
              </Link>
              <Link href="/services" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                See Services
              </Link>
            </div>

            {/* Quick stats on hero */}
            <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>15+</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Craft</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>50K</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>01</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Desired Goal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US - MORE USER FRIENDLY */}
      <section className="section" style={{ background: '#050505', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-3">
            <div style={{ padding: '1rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Instant Booking</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Reserve your spot in under 60 seconds with our streamlined online system.
              </p>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
              <h3 style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Master Artistry</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Every cut is executed with the technical precision of Ruwan Chandana.
              </p>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>💎</div>
              <h3 style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Premium Care</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                We use only the world's finest treatment products for your scalp and hair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>The Menu</div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800 }}>
                Signature <span className="text-gradient">Catalog</span>
              </h2>
            </div>
            <Link href="/services" style={{
              color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem',
              textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '2px solid var(--primary)'
            }}>
              View Full Menu
            </Link>
          </div>

          <div className="grid-4">
            {featuredServices.map(s => (
              <div key={s.title} className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '2rem' }}>{s.desc}</p>
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: '0.5rem', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)', padding: '1rem'
                }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem' }}>{s.price}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase' }}>{s.time} Session</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CALLOUT */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="card" style={{
            padding: '5rem 3rem', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.15) 0%, rgba(0,0,0,1) 100%)',
            border: '1px solid rgba(227, 30, 36, 0.2)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1 }}>
                Ready for your <br />
                <span className="text-gradient">Desired Look?</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 3rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Join the elite circle of clients who trust Ruwan Chandana for their technical precision. Spot fills up fast.
              </p>
              <Link href="/booking" className="btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1rem' }}>
                Secure Your Appointment Now
              </Link>
            </div>

            {/* Large background scissors icon */}
            <div style={{
              position: 'absolute', right: '-10%', bottom: '-20%',
              fontSize: '25rem', opacity: 0.03, pointerEvents: 'none', transform: 'rotate(-20deg)'
            }}>✂️</div>
          </div>
        </div>
      </section>
    </>
  )
}
