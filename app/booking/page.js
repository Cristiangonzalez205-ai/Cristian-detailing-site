const bookingLinks = {
  'Interior Refresh':
    'https://calendly.com/cristian_gonzalez-berkeley/interior-refresh',
  'Deep Interior Clean':
    'https://calendly.com/cristian_gonzalez-berkeley/deep-interior-clean',
  'Complete Interior Reset':
    'https://calendly.com/cristian_gonzalez-berkeley/complete-interior-reset',
  'Exterior Wash':
    'https://calendly.com/cristian_gonzalez-berkeley/exterior-wash',
  'Exterior Wash Plus':
    'https://calendly.com/cristian_gonzalez-berkeley/exterior-wash-plus',
  'Exterior Detail':
    'https://calendly.com/cristian_gonzalez-berkeley/exterior-detail',
  'The Full Detail':
    'https://calendly.com/cristian_gonzalez-berkeley/the-full-detail',
}

export default async function BookingPage({ searchParams }) {
  const params = await searchParams
  const selectedPackage = params?.package || ''
  const bookingLink = bookingLinks[selectedPackage]

  return (
    <main className="page">
      <section className="section booking-hero">
        <p className="eyebrow">ChrisDoesDetails Booking</p>
        <h1>Book Your Detail</h1>
        <p className="hero-text">
          Choose your package and continue to booking to pick a time that works
          for you. If you need a custom quote, specialty service, or have
          questions about your vehicle, call or text me directly.
        </p>
      </section>

      {selectedPackage ? (
        <section className="section">
          <div className="booking-selected-card">
            <p className="selected-label">Selected Package</p>
            <h2>{selectedPackage}</h2>
            <p className="hero-text">
              You selected <strong>{selectedPackage}</strong>. Continue below to
              choose an available time through Calendly.
            </p>

            {bookingLink ? (
              <div className="hero-buttons">
                <a
                  href={bookingLink}
                  className="button primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Continue to Booking
                </a>
              </div>
            ) : (
              <p className="hero-text">
                Booking link not found for this package yet.
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="booking-selected-card">
            <p className="selected-label">No Package Selected</p>
            <h2>Choose a package first</h2>
            <p className="hero-text">
              Go back to the homepage, pick the package that fits your car, and
              then return here to book it.
            </p>
            <div className="hero-buttons">
              <a href="/" className="button secondary">
                Back to Homepage
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="booking-info-grid">
          <div className="card">
            <h2>Before You Book</h2>
            <ul>
              <li>Select the package that best matches your car’s needs</li>
              <li>Choose a time that fits your schedule</li>
              <li>Include your vehicle make, model, and service location</li>
              <li>Mention stains, odors, pet hair, or special concerns</li>
            </ul>
          </div>

          <div className="card">
            <h2>Custom Quotes</h2>
            <p className="hero-text">
              Scratch removal, paint correction, ceramic coating, and other
              specialty work are available by custom quote.
            </p>
            <div className="hero-buttons">
              <a href="tel:5595523442" className="button primary">
                Call
              </a>
              <a href="sms:5595523442" className="button secondary">
                Text
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card booking-note-card">
          <h2>Stay Connected</h2>
          <p className="hero-text">
            You can also check out my work and updates on Instagram.
          </p>
          <div className="hero-buttons">
            <a
              href="https://instagram.com/ChrisDoesDetails"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              Visit Instagram
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