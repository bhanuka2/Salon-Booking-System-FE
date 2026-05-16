import { NextResponse } from 'next/server'

// In a real app, this would be a database connection
let bookings = []

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, email, serviceId, date, time } = body

        // Check for existing booking at the same date and time
        const conflict = bookings.find(b => b.date === date && b.time === time);
        if (conflict) {
            return NextResponse.json({ error: 'This time slot is already reserved. Please choose another time.' }, { status: 409 });
        }

        const newBooking = {
            id: Math.random().toString(36).substr(2, 9),
            ...body,
            createdAt: new Date().toISOString(),
            status: 'confirmed'
        }

        bookings.push(newBooking)
        console.log('New Booking Received:', newBooking)

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800))

        return NextResponse.json({
            success: true,
            message: 'Appointment booked successfully!',
            booking: newBooking
        })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json(bookings)
}
