"use client";

import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <Image
              src="/images/logoPure.PNG"
              alt="AURA Logo"
              width={140}
              height={45}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#booking" className={styles.navLink}>Booking</a>
            <button className="btn btn-primary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Now
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/salon-hero.png"
            alt="Premium Salon Interior"
            className={styles.heroImage}
            fill
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={`container ${styles.heroContent} animate-fade-in`}>
          <span className={styles.heroSubtitle}>Premium Experience</span>
          <h1 className={styles.heroTitle}>Mastering the Art of Styling.</h1>
          <p className={styles.heroDesc}>
            Elevate your look with our professional hairdressers. We offer a bespoke
            salon experience focused on luxury, style, and extreme attention to detail.
          </p>
          <div className={styles.heroActions}>
            <button className="btn btn-primary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Appointment
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Services
            </button>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Signature <span>Services</span></h2>
            <p className={styles.sectionDesc}>
              Experience our curated selection of premium treatments. Each service is tailored to your unique style and needs.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✂️</div>
              <h3 className={styles.serviceTitle}>Precision Cut</h3>
              <div className={styles.servicePrice}>From $85</div>
              <p className={styles.serviceDesc}>Consultation, bespoke cut, and signature blowout styling tailored to your face shape.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎨</div>
              <h3 className={styles.serviceTitle}>Color & Highlights</h3>
              <div className={styles.servicePrice}>From $150</div>
              <p className={styles.serviceDesc}>Expert color matching, balayage, or full highlights using premium vegan color products.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✨</div>
              <h3 className={styles.serviceTitle}>Keratin Treatment</h3>
              <div className={styles.servicePrice}>From $250</div>
              <p className={styles.serviceDesc}>Transform frizzy hair into smooth, silky locks with our signature smoothing treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.booking}>
        <div className={`container ${styles.bookingContainer}`}>
          <div className={styles.bookingInfo}>
            <h2 className={styles.sectionTitle}>Reserve Your <span>Spot</span></h2>
            <p className={styles.sectionDesc} style={{ margin: "1rem 0 2rem", textAlign: "left" }}>
              Ready for a transformation? Fill out the form to request an appointment.
              Our team will get back to you immediately to confirm your booking.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>📍</span>
                <span>123 Elite Avenue, New York, NY 10001</span>
              </div>
              <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>🕰️</span>
                <span>Mon-Sat: 9AM - 8PM</span>
              </div>
            </div>
          </div>

          <div className={styles.bookingFormWrapper}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name</label>
                <input type="text" className={styles.formInput} placeholder="John Doe" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input type="email" className={styles.formInput} placeholder="john@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service</label>
                <select className={styles.formSelect} required>
                  <option value="">Select a service</option>
                  <option value="cut">Precision Cut</option>
                  <option value="color">Color & Highlights</option>
                  <option value="keratin">Keratin Treatment</option>
                  <option value="styling">Event Styling</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Preferred Date</label>
                <input type="date" className={styles.formDate} required />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerLogo}>
            <Image
              src="/images/logoPure.PNG"
              alt="AURA Logo"
              width={140}
              height={45}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className={styles.footerText}>The premier destination for luxury haircare and styling.</p>
          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} AURA Premium Salon. All rights reserved. Designed with precision.
          </div>
        </div>
      </footer>
    </>
  );
}
