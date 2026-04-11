'use client'

import { useSearchParams } from 'next/navigation'

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

export default function BookingPage() {
  const searchParams = useSearchParams()
  const selectedPackage = searchParams.get('package') || ''
  const bookingLink = bookingLinks[selectedPackage]

  return (
    <main className="page">
      <section className="section">
        <h1>Book a Detail</h1>

        {selectedPackage ? (
          <>
            <p className="hero-text">
              Selected package: <strong>{selectedPackage}</strong>
            </p>

            <div className="card" style={{ marginTop: '20px' }}>
              <h2>Book Your Appointment</h2>
              <p className="hero-text">
                Use the booking link below to choose a time for your{' '}
                <strong>{selectedPackage}</strong>.
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
          </>
        ) : (
          <div className="card" style={{ marginTop: '20px' }}>
            <h2>Select a Package First</h2>
            <p className="hero-text">
              Please go back to the homepage and choose a package before booking.
            </p>
          </div>
        )}

        <div className="card" style={{ marginTop: '20px' }}>
          <h2>Need a custom quote?</h2>
          <p className="hero-text">
            For scratch removal, paint correction, ceramic coating, or special
            vehicle concerns, call or text me directly.
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

        <p className="pricing-note">
          Final pricing may vary depending on vehicle size, condition, and level
          of staining.
        </p>
      </section>
    </main>
  )
}