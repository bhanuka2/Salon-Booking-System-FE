'use client'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    Services: [
        { label: 'Haircut & Styling', href: '/services' },
        { label: 'Coloring', href: '/services' },
        { label: 'Spa & Facial', href: '/services' },
        { label: 'Nail Care', href: '/services' },
    ],
    Company: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Branches', href: '/about/branches' },
        { label: 'Contact', href: '/contact' },
    ],
    Legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
    ],
}

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            paddingTop: '5rem',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    paddingBottom: '4rem',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ position: 'relative', width: 160, height: 50, marginBottom: '1.5rem' }}>
                            <Image
                                src="/logo.png"
                                alt="Salon Ru Zero One"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                            />
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 280 }}>
                            Your desired hair stylist, Ruwan Chandana. Experience world-class artistry and precision in every cut.
                        </p>
                    </div>

                    {/* Link groups */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{
                                fontWeight: 800, fontSize: '0.7rem', marginBottom: '1.5rem',
                                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)'
                            }}>
                                {title}
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {links.map(l => (
                                    <li key={l.label}>
                                        <Link href={l.href}
                                            style={{ color: 'var(--text-dim)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                                        >{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    padding: '2rem 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
                }}>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Salon Ru Zero One. Built by Ruwan Chandana.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>Instagram</a>
                        <a href="#" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
