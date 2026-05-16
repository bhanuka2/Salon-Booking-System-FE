import { NextResponse } from 'next/server'

const services = [
    { id: 1, category: 'Hair', title: 'Signature Haircut', duration: '45 min', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, category: 'Hair', title: 'Full Color & Glow', duration: '120 min', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, category: 'Hair', title: 'Styling & Blowout', duration: '30 min', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, category: 'Skin', title: 'Deep Tissue Facial', duration: '60 min', image: 'https://images.unsplash.com/photo-1570172234562-969c6e5069ac?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, category: 'Skin', title: 'Detox Body Scrub', duration: '75 min', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, category: 'Nails', title: 'Luxury Manicure', duration: '45 min', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' },
    { id: 7, category: 'Nails', title: 'Gel Extensions', duration: '60 min', image: 'https://images.unsplash.com/photo-1632345031435-07cc66b61330?q=80&w=1000&auto=format&fit=crop' },
]

export async function GET() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return NextResponse.json(services)
}
