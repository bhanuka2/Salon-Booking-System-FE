'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BookingPage() {
    const [services, setServices] = useState([])
    const [existingBookings, setExistingBookings] = useState([])
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
    const [error, setError] = useState('')

    const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

    useEffect(() => {
        Promise.all([
            fetch('/api/services').then(res => res.json()),
            fetch('/api/bookings').then(res => res.json())
        ]).then(([servicesData, bookingsData]) => {
            setServices(servicesData)
            setExistingBookings(bookingsData)
            setLoading(false)
        }).catch(err => {
            console.error('Error fetching data:', err)
            setLoading(false)
        })
    }, [])

    const isSlotBooked = (date, time) => {
        return existingBookings.some(b => b.date === date && b.time === time)
    }

    const availableSlots = timeSlots.filter(slot => !isSlotBooked(formData.date, slot))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const result = await res.json()

            if (res.ok) {
                setSuccess(true)
                // Refresh bookings to prevent others from seeing the slot as available immediately
                const refreshRes = await fetch('/api/bookings')
                const refreshedBookings = await refreshRes.json()
                setExistingBookings(refreshedBookings)
            } else {
                setError(result.error || 'Something went wrong. Please try again.')
            }
        } catch (err) {
            setError('Connection error. Please try again later.')
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }

    // Get today's date in YYYY-MM-DD format for the 'min' attribute
    const today = new Date().toISOString().split('T')[0]

    if (loading) {
        return (
            <div className="section" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
                <div style={{ color: 'var(--primary)', fontWeight: 600 }}>Loading Appointment Schedule...</div>
            </div>
        )
    }

    if (success) {
        return (
            <div className="section" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '85vh' }}>
                <div className="container animate-reveal-up">
                    <div style={{ maxWidth: 600, margin: '0 auto', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid var(--primary)', padding: '4rem 2rem' }}>
                        <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>💎</div>
                        <h1 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Success! You're In.</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: 450, margin: '0 auto 3rem' }}>
                            Your appointment for <strong style={{ color: 'var(--text)' }}>{services.find(s => s.id === parseInt(formData.serviceId))?.title}</strong> is confirmed for <strong style={{ color: 'var(--text)' }}>{formData.date}</strong> at <strong style={{ color: 'var(--text)' }}>{formData.time}</strong>.
                        </p>
                        <Link href="/" className="btn-primary" style={{ padding: '1rem 3rem' }}>
                            Back to Studio
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'radial-gradient(circle at top right, #0f0f0f, #000)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 0.8fr', gap: '5rem', alignItems: 'start' }} className="responsive-grid">

                    <div className="animate-reveal-up">
                        <div className="badge" style={{ marginBottom: '1.5rem', background: 'rgba(227, 30, 36, 0.05)' }}>Booking Engine 2.0</div>
                        <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
                            Secure Your <span className="text-gradient">Spot.</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: 550, lineHeight: 1.8 }}>
                            Our master technicians are in high demand. Reserve your session today to guarantee availability.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                            {error && (
                                <div style={{ padding: '1rem', background: 'rgba(227, 30, 36, 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {error}
                                </div>
                            )}

                            <div className="grid-2">
                                <div className="input-group">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.1em' }}>Client Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', padding: '1.2rem', color: 'white', fontSize: '0.95rem' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="input-group">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.1em' }}>Comm. Channel</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@example.com"
                                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', padding: '1.2rem', color: 'white', fontSize: '0.95rem' }}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.1em' }}>Treatment Selection</label>
                                <select
                                    required
                                    style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', padding: '1.2rem', color: 'white', fontSize: '0.95rem', appearance: 'none' }}
                                    value={formData.serviceId}
                                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                                >
                                    <option value="">Select Professional Service</option>
                                    {services.map(s => (
                                        <option key={s.id} value={s.id}>{s.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid-2">
                                <div className="input-group">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.1em' }}>Date Placement</label>
                                    <input
                                        type="date"
                                        required
                                        min={today}
                                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', padding: '1.2rem', color: 'white', fontSize: '0.95rem' }}
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value, time: '' })}
                                    />
                                </div>
                                <div className="input-group">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.1em' }}>Time Window</label>
                                    <select
                                        required
                                        disabled={!formData.date}
                                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', padding: '1.2rem', color: 'white', fontSize: '0.95rem', opacity: formData.date ? 1 : 0.5 }}
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="">{formData.date ? 'Select Available Window' : 'Choose Date First'}</option>
                                        {availableSlots.length > 0 ? (
                                            availableSlots.map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))
                                        ) : formData.date && (
                                            <option disabled>No Remaining Slots Today</option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary"
                                style={{ marginTop: '2rem', width: '100%', padding: '1.5rem', fontSize: '1rem' }}
                            >
                                {submitting ? 'Authenticating...' : 'Confirm Technical Entry'}
                            </button>
                        </form>
                    </div>

                    <div style={{ position: 'sticky', top: '120px' }}>
                        <div className="card" style={{ padding: '3rem', border: '1px solid var(--border)', background: 'rgba(15,15,15,0.5)', backdropFilter: 'blur(20px)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Technical Benefits</h3>
                            <div style={{ display: 'grid', gap: '2.5rem' }}>
                                {[
                                    { title: 'Strict Availability', desc: 'Once a slot is confirmed, it is immediately removed from the global queue.' },
                                    { title: 'Priority Access', desc: 'Online bookings receive priority placement in the studio workflow.' },
                                    { title: 'Instant Protocol', desc: 'Secure encryption for all client communication and data.' }
                                ].map(item => (
                                    <div key={item.title}>
                                        <div style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>{item.title}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid var(--border)', background: '#000' }}>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8, textAlign: 'center' }}>
                                    "The technical precision of the booking process reflects the quality of their artistry."
                                    <span style={{ display: 'block', color: 'var(--primary)', fontWeight: 900, marginTop: '1rem', fontStyle: 'normal', fontSize: '0.75rem', textTransform: 'uppercase' }}>— Industry Review</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .input-group input:focus, .input-group select:focus {
                    outline: none;
                    border-color: var(--primary) !important;
                    background: #111 !important;
                }
                @media (max-width: 1024px) {
                    .responsive-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
                }
            `}</style>
        </div>
    )
}
