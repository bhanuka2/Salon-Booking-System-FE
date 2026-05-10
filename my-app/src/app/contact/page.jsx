export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>Connect</div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
            Book Your <span className="text-gradient">Masterclass</span>
          </h1>
        </div>

        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {[
            { icon: '📍', title: 'Studio', detail1: 'No 42, Zerone Plaza', detail2: 'Colombo, Sri Lanka' },
            { icon: '📞', title: 'Direct Line', detail1: '+94 77 123 4567', detail2: 'Tuesday-Sunday: 10am - 8pm' },
            { icon: '✉️', title: 'Email', detail1: 'info@salonruzerone.com', detail2: 'Personalized Support' }
          ].map(item => (
            <div key={item.title} className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>{item.title}</h3>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail1}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail2}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <h2 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Consultation Form</h2>
            <form style={{ display: 'grid', gap: '1.5rem' }}>
              <div className="grid-2">
                <div>
                  <label className="input-label">Name</label>
                  <input type="text" className="input" placeholder="Artist Name" />
                </div>
                <div>
                  <label className="input-label">Email</label>
                  <input type="email" className="input" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="input-label">Message</label>
                <textarea className="input" rows="4" placeholder="Describe your desired look..."></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ justifyContent: 'center' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}