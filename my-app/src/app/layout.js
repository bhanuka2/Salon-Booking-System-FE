import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Salon Ru Zero One — Your Desired Hair Stylist',
  description: 'Book world-class hair artistry and precision cuts with Ruwan Chandana at Salon Ru Zero One.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
