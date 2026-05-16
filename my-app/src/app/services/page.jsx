'use client'
import { useState, useEffect } from 'react'

export default function ServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  const categories = ['All', ...new Set(services.map(s => s.category))]
  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory)

  if (loading) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--orange)', fontSize: '1.2rem', fontWeight: 600 }}>Loading Services...</div>
      </div>
    )
  }

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>Our Menu</div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
            Elevate Your <span className="text-gradient">Beauty</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Browse our curated selection of premium salon services. Each treatment is tailored to your specific needs and desires.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--orange)' : 'var(--border)',
                background: activeCategory === cat ? 'rgba(255,107,43,0.1)' : 'transparent',
                color: activeCategory === cat ? 'var(--orange)' : 'var(--text-muted)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filteredServices.map(s => (
            <div key={s.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '100%', height: '180px', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '4px' }}>
                <img
                  src={s.image}
                  alt={s.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="badge" style={{ alignSelf: 'flex-start', fontSize: '0.7rem', marginBottom: '1rem', opacity: 0.8 }}>
                {s.category}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', flexGrow: 1 }}>
                A premium {s.category.toLowerCase()} treatment designed to bring out your best features and leave you feeling refreshed.
              </p>
              <div style={{
                borderTop: '1px solid var(--border)', paddingTop: '1.5rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{s.duration}</div>
                </div>
                <a href="/booking" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}