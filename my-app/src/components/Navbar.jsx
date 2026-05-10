'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/booking', label: 'Book Now' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            transition: 'all 0.3s ease',
            padding: '0 1.5rem',
        }}>
            <div style={{
                maxWidth: 1200, margin: '0 auto',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                height: 80,
            }}>
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ position: 'relative', width: 140, height: 45 }}>
                        <Image
                            src="/logo.png"
                            alt="Salon Ru Zero One"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
                    className="desktop-nav">
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href}
                            style={{
                                fontSize: '0.85rem', fontWeight: 600,
                                textTransform: 'uppercase', letterSpacing: '0.05em',
                                color: 'var(--text-muted)',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        >{l.label}</Link>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/booking" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}>
                        Book Appointment
                    </Link>
                    {/* Hamburger */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(o => !o)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: 'white', padding: '0.5rem', display: 'none',
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {menuOpen
                                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                : <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    background: 'var(--surface)',
                    borderTop: '1px solid var(--border)',
                    padding: '1rem 1.5rem',
                }}>
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'block', padding: '0.75rem 0',
                                borderBottom: '1px solid var(--border)',
                                color: 'var(--text-muted)', fontWeight: 600,
                                textTransform: 'uppercase', fontSize: '0.8rem',
                            }}
                        >{l.label}</Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </nav>
    )
}
