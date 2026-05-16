import { NextResponse } from 'next/server'

const services = [
    { id: 1, category: 'Hair', title: 'Signature Haircut', duration: '45 min', image: '/service_haircut.png' },
    { id: 2, category: 'Hair', title: 'Full Color & Glow', duration: '120 min', image: '/service_coloring.png' },
    { id: 3, category: 'Hair', title: 'Styling & Blowout', duration: '30 min', image: '/service_grooming.png' },
    { id: 4, category: 'Skin', title: 'Deep Tissue Facial', duration: '60 min', image: '/service_scalp.png' },
    { id: 5, category: 'Skin', title: 'Detox Body Scrub', duration: '75 min', image: '/service_scalp.png' },
    { id: 6, category: 'Nails', title: 'Luxury Manicure', duration: '45 min', image: '/service_grooming.png' },
    { id: 7, category: 'Nails', title: 'Gel Extensions', duration: '60 min', image: '/service_coloring.png' },
]

export async function GET() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return NextResponse.json(services)
}
