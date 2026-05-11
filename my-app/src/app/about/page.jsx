'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="section" style={{ paddingTop: '180px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>The Visionary</div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '3rem' }}>
              Defining <span className="text-gradient">Technical</span> <br />
              Mastery.
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              Salon Ru Zero One is the culmination of technical precision and artistic intuition. We exist for those who seek more than a service—they seek a transformation engineered by hand.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>

            {/* The Visionary Section (Moved from Home) */}
            <div className="animate-reveal-up">
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3/4',
                  border: '1px solid var(--border)',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)'
                }}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                    <Image
                      src="/vision_owner.jpg"
                      alt="Ruwan Chandana - Lead Visionary"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    />
                    {/* DECISIVE MASK to remove Gemini hallmark */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0, right: 0,
                      width: '180px', height: '100px',
                      background: 'radial-gradient(circle at bottom right, var(--black) 0%, rgba(0,0,0,0.8) 70%, transparent 100%)',
                      zIndex: 1
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: 0, right: 0,
                      width: '80px', height: '60px',
                      background: 'var(--black)',
                      zIndex: 2
                    }} />
                  </div>

                  {/* Floating Info */}
                  <div style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: '2rem',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '1.2rem 2.5rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '0.2rem',
                  }}>
                    Lead Visionary
                  </div>
                </div>
              </div>
            </div>

            {/* Founder's Story */}
            <div className="animate-reveal-up">
              <div className="badge" style={{ marginBottom: '2rem' }}>The Founder</div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}>
                Meet <span className="text-gradient">Ruwan Chandana</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                With over 15 years at the pinnacle of the industry, Ruwan Chandana has established a reputation for surgical precision and an unyielding commitment to technical excellence.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
                Ruwan's philosophy is simple: every individual has a unique silhouette that requires a bespoke architectural solution. This belief is the heartbeat of RUZeroOne Studio.
              </p>

              <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '2.5rem' }}>
                <p style={{ fontStyle: 'italic', color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                  "Mastery is the intersection of rigorous science and unrestrained art."
                </p>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)' }}>
                  — Ruwan Chandana
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="section" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid-3">
            {[
              { title: 'The Standard', val: '01', desc: 'Technical perfection is our only metric of success.' },
              { title: 'The Vision', val: '15+', desc: 'Over a decade of refining the uncommon salon spirit.' },
              { title: 'The Soul', val: '100%', desc: 'Bespoke attention tailored to the anatomical needs of our clients.' }
            ].map(i => (
              <div key={i.title} className="uncommon-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>{i.val}</div>
                <h3 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>{i.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}