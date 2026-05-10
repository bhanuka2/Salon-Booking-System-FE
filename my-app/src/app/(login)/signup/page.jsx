'use client'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: 450, margin: '0 auto' }}>
          <div className="card" style={{ padding: '3.5rem 3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 8, margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.2rem', color: 'white'
              }}>R</div>
              <h1 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Join Salon Ru Zero One</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Access exclusive benefits and easy booking</p>
            </div>

            <form style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label className="input-label">Full Name</label>
                <input type="text" className="input" placeholder="Artist Name" />
              </div>
              <div>
                <label className="input-label">Email Address</label>
                <input type="email" className="input" placeholder="you@example.com" />
              </div>
              <div>
                <label className="input-label">Password</label>
                <input type="password" className="input" placeholder="••••••••" />
              </div>

              <button type="button" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                Join the Circle
              </button>
            </form>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-dim)' }}>Already a member? </span>
              <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 700 }}>SIGN IN</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}