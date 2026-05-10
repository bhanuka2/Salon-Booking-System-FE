'use client'
import Link from 'next/link'

export default function NewUserPage() {
  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: 450, margin: '0 auto' }}>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>👋</div>
            <h1 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome!</h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              It looks like you're new here. We're excited to have you join our community of beauty enthusiasts.
            </p>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <Link href="/services" className="btn-primary" style={{ justifyContent: 'center' }}>
                Explore Services
              </Link>
              <Link href="/signup" className="btn-secondary" style={{ justifyContent: 'center' }}>
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}