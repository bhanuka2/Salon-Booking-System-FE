'use client'
import { useState, useEffect } from 'react'

export default function BookingPage() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceId: '',
        date: '',
        time: ''
    })
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch('/api/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setSuccess(true)
            } else {
                alert('Something went wrong. Please try again.')
            }
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }

    if (success) {
        return (
            <div className="section" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ maxWidth: 500, margin: '0 auto' }} className="card p-8">
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✨</div>
                        <h1 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Appointment Confirmed!</h1>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            Thank you {formData.name}. Your appointment for {services.find(s => s.id === parseInt(formData.serviceId))?.title} has been scheduled for {formData.date} at {formData.time}.
                        </p>
                        <button onClick={() => window.location.href = '/'} className="btn-primary">
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '4rem', alignItems: 'start' }}>

                    {/* Form Side */}
                    <div>
                        <div className="badge" style={{ marginBottom: '1rem' }}>Book Online</div>
                        <h1 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
                            Reserve Your <span className="text-gradient">Experience</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: 500 }}>
                            Complete the form below to book your treatment. We'll send a confirmation email with all the details shortly.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="grid-2">
                                <div>
                                    <label className="input-label">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="input-label">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="input"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="input-label">Select Service</label>
                                <select
                                    required
                                    className="input"
                                    value={formData.serviceId}
                                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                                >
                                    <option value="">Choose a treatment...</option>
                                    {services.map(s => (
                                        <option key={s.id} value={s.id}>{s.title} — ${s.price}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid-2">
                                <div>
                                    <label className="input-label">Preferred Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="input"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="input-label">Preferred Time</label>
                                    <select
                                        required
                                        className="input"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="">Select time...</option>
                                        {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary"
                                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                            >
                                {submitting ? 'Processing...' : 'Confirm Appointment'}
                            </button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Book Online?</h3>
                            <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem' }}>
                                {[
                                    { icon: '⚡', title: 'Instant Confirmation', desc: 'Secure your spot in seconds.' },
                                    { icon: '📅', title: 'Flexible Scheduling', desc: 'Modify or cancel 24h before.' },
                                    { icon: '🎁', title: 'Exclusive Rewards', desc: 'Earn points on every booking.' }
                                ].map(item => (
                                    <li key={item.title} style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ color: 'var(--orange)', fontSize: '1.2rem' }}>{item.icon}</div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.title}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', fontStyle: 'italic' }}>
                                    "Best salon experience I've ever had. The online booking is seamless."
                                    <span style={{ display: 'block', color: 'var(--text)', fontWeight: 600, marginTop: '0.5rem', fontStyle: 'normal' }}>— Sarah J.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    )
}
