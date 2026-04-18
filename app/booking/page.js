import { packages } from '../data/packages'
import { bookingLinks, siteConfig } from '../data/site'

export default async function BookingPage({ searchParams }) {
  const params = await searchParams
  const selectedPackage = params?.package || ''
  const bookingLink = bookingLinks[selectedPackage]
  const details = packages.find((pkg) => pkg.title === selectedPackage)

  return (
    <main className="page">
            <section className="section booking-hero booking-hero-premium">
        <div className="booking-hero-main">
          <p className="eyebrow">{siteConfig.brandName} Booking</p>
          <h1>Book Your Detail</h1>
          <p className="hero-text booking-hero-lead">
            Choose your package and continue to booking to pick a time that
            works for you. If you need a custom quote, specialty service, or
            have questions about your vehicle, call or text me directly.
          </p>
        </div>

        <div className="booking-hero-side">
          <p className="booking-side-label">What to expect</p>
          <div className="booking-side-list">
            <div className="booking-side-item">
              <span className="booking-side-dot" />
              <p>Select the package that fits your car</p>
            </div>
            <div className="booking-side-item">
              <span className="booking-side-dot" />
              <p>Choose an available time through Calendly</p>
            </div>
            <div className="booking-side-item">
              <span className="booking-side-dot" />
              <p>Use call or text for custom work and quote-based services</p>
            </div>
          </div>
        </div>
      </section>

      {selectedPackage ? (
        <section className="section">
          <div className="booking-selected-card booking-selected-premium">
            <p className="selected-label">Selected Package</p>
            <h2>{selectedPackage}</h2>

            {details ? (
              <>
                <div className="booking-meta-row">
                  <span className="booking-meta-pill">{details.price}</span>
                  <span className="booking-meta-pill">{details.duration}</span>
                </div>

                <p className="hero-text booking-summary-text">{details.summary}</p>
              </>
            ) : null}

            <p className="hero-text">
              Continue below to choose an available time through Calendly.
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
            <p className="selected-label">Choose a Package</p>
            <h2>Select your detail service</h2>
            <p className="hero-text">
              Pick the package that best matches your vehicle, then continue to
              booking to choose an available time.
            </p>

                        <div className="booking-package-grid">
              {packages.map((pkg) => (
                <a
                  key={pkg.title}
                  href={`/booking?package=${encodeURIComponent(pkg.title)}`}
                  className="card booking-package-option booking-package-premium"
                >
                  <div className="booking-package-top">
                    <p className="booking-package-price">{pkg.price}</p>
                    <h3>{pkg.title}</h3>
                  </div>

                  <p className="card-description">{pkg.summary}</p>

                  <div className="booking-package-bottom">
                    <span className="booking-package-duration">{pkg.duration}</span>
                    <span className="booking-package-cta">Select Package</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

           <section className="section section-divider booking-support-section">
        <div className="booking-info-grid">
          <div className="card booking-support-card">
            <p className="eyebrow section-eyebrow">Booking Guide</p>
            <h2>Before You Book</h2>
            <ul>
              <li>Select the package that best matches your car’s needs</li>
              <li>Choose a time that fits your schedule</li>
              <li>Include your vehicle make, model, and service location</li>
              <li>Mention stains, odors, pet hair, or special concerns</li>
            </ul>
          </div>

          <div className="card booking-support-card">
            <p className="eyebrow section-eyebrow">Custom Quotes</p>
            <h2>Need specialty work?</h2>
            <p className="hero-text">
              Scratch removal, paint correction, ceramic coating, and other
              specialty work are available by custom quote.
            </p>
            <div className="hero-buttons contact-icon-row">
              <a
                href={`tel:${siteConfig.phone}`}
                className="button secondary icon-only-button"
                aria-label={`Call ${siteConfig.brandName}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.24a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              <a
                href={`sms:${siteConfig.phone}`}
                className="button secondary icon-only-button"
                aria-label={`Text ${siteConfig.brandName}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="contact-icon"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

            <section className="section section-divider">
        <div className="card booking-note-card booking-note-premium">
          <p className="eyebrow section-eyebrow">Stay Connected</p>
          <h2>See more work and updates on Instagram</h2>
          <p className="hero-text">
            Follow {siteConfig.instagramHandle} for more detail work, updates,
            and future results.
          </p>
          <div className="hero-buttons contact-icon-row">
            <a
              href={siteConfig.instagramUrl}
              className="button secondary icon-only-button"
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${siteConfig.brandName} Instagram`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="contact-icon"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
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