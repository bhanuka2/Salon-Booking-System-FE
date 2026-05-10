import { NextResponse } from 'next/server'

const services = [
    { id: 1, category: 'Hair', title: 'Signature Haircut', price: 45, duration: '45 min', image: '✂️' },
    { id: 2, category: 'Hair', title: 'Full Color & Glow', price: 120, duration: '120 min', image: '🎨' },
    { id: 3, category: 'Hair', title: 'Styling & Blowout', price: 35, duration: '30 min', image: '👱‍♀️' },
    { id: 4, category: 'Skin', title: 'Deep Tissue Facial', price: 85, duration: '60 min', image: '💆‍♀️' },
    { id: 5, category: 'Skin', title: 'Detox Body Scrub', price: 95, duration: '75 min', image: '✨' },
    { id: 6, category: 'Nails', title: 'Luxury Manicure', price: 40, duration: '45 min', image: '💅' },
    { id: 7, category: 'Nails', title: 'Gel Extensions', price: 65, duration: '60 min', image: '💎' },
]

export async function GET() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return NextResponse.json(services)
}
