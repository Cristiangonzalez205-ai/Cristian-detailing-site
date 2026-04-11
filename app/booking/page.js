export default function BookingPage() {
  return (
    <main className="page">
      <section className="section">
        <h1>Book a Detail</h1>
        <p className="hero-text">
          Use this page first to request your detail appointment. If you have
          questions about your vehicle, need a specialty service, or want a
          custom quote, feel free to call or text me directly.
        </p>

        <div className="card" style={{ marginTop: '20px' }}>
          <h2>How to Book</h2>
          <ul>
            <li>Choose the package that best fits your car’s needs</li>
            <li>Reach out by text or call to confirm availability</li>
            <li>Include your vehicle type and the service you want</li>
            <li>Mention any heavy stains, odors, or specialty requests</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: '20px' }}>
          <h2>Contact to Schedule</h2>
          <p className="hero-text">
            Standard bookings should start here. You can also contact me
            directly for custom work, paint correction, ceramic coating, or
            scratch removal.
          </p>

          <div className="hero-buttons">
            <a href="tel:5595523442" className="button primary">
              Call to Book
            </a>
            <a href="sms:5595523442" className="button secondary">
              Text to Book
            </a>
          </div>
        </div>

        <p className="pricing-note">
          Final pricing may vary depending on vehicle size, condition, and level
          of staining.
        </p>
      </section>
    </main>
  )
}