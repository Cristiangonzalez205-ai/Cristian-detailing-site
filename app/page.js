import Link from 'next/link'
import { packages, specialtyServices } from './data/packages'
import { siteConfig } from './data/site'

export default function HomePage() {
  return (
    <main className="page">
            <section className="hero hero-premium">
        <div className="hero-main">
          <p className="eyebrow">{siteConfig.locationLine}</p>
          <h1>{siteConfig.brandName}</h1>
          <p className="hero-text hero-lead">
            Mobile car detailing in Berkeley with care, discipline, and
            attention to detail — from quick refreshes to full resets.
          </p>

          <div className="hero-buttons">
            <Link href="/booking" className="button primary">
              Book Now
            </Link>
            <Link href="/gallery" className="button secondary">
              View My Work
            </Link>
          </div>

          <div className="hero-credibility-strip">
            <div className="credibility-pill">Student-Owned</div>
            <div className="credibility-pill">Mobile Service</div>
            <div className="credibility-pill">Berkeley Based</div>
            <div className="credibility-pill">Custom Quotes Available</div>
          </div>
        </div>

        <div className="hero-side-card">
          <div className="hero-side-top">
            <img
              src="/cars/logo.jpeg"
              alt={`${siteConfig.brandName} logo`}
              className="hero-side-logo"
            />
            <div>
              <p className="hero-side-label">Detailing Brand</p>
              <h2 className="hero-side-title">{siteConfig.brandName}</h2>
            </div>
          </div>

          <div className="hero-side-divider" />

          <div className="hero-side-list">
            <div className="hero-side-item">
              <span className="hero-side-dot" />
              <p>Interior, exterior, and full-detail packages</p>
            </div>
            <div className="hero-side-item">
              <span className="hero-side-dot" />
              <p>Easy online booking through package-based scheduling</p>
            </div>
            <div className="hero-side-item">
              <span className="hero-side-dot" />
              <p>Specialty services available by custom quote</p>
            </div>
          </div>
        </div>
      </section>

            <section className="section services-overview-section">
        <div className="services-overview-header">
          <div>
            <p className="eyebrow section-eyebrow">Services</p>
            <h2>Detailing built around what your car actually needs</h2>
          </div>
          <p className="hero-text services-overview-text">
            From quick refreshes to deeper resets, ChrisDoesDetails offers
            interior, exterior, and full-detail services with careful attention
            to finish, presentation, and care.
          </p>
        </div>

        <div className="service-tags">
          <span>Interior cleaning</span>
          <span>Exterior wash</span>
          <span>Upholstery cleaning</span>
          <span>Steam cleaning</span>
          <span>Fresh scent finish</span>
          <span>Tire shine</span>
          <span>Light scratch removal</span>
          <span>Paint correction</span>
          <span>Polish and wax</span>
          <span>Ceramic coating</span>
        </div>
      </section>

            <section className="section">
        <h2>Packages</h2>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <article key={pkg.title} className="card package-card">
              <div className="package-card-content">
                <div className="card-top">
                  <h3>{pkg.title}</h3>
                  <p className="price">{pkg.price}</p>
                </div>

                <p className="card-description">{pkg.description}</p>

                <ul>
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="package-card-footer">
                <Link
                  href={`/booking?package=${encodeURIComponent(pkg.title)}`}
                  className="button primary"
                >
                  Book
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Final pricing may vary depending on vehicle size, condition, and level
          of staining. Specialty services such as scratch removal, paint
          correction, polish, wax, and ceramic coating are available upon
          request.
        </p>
      </section>

            <section className="section section-divider why-choose-section">
        <div className="why-choose-me">
          <div className="owner-placeholder">
            <img
              src="/cars/owner-photo.jpeg"
              alt={`${siteConfig.brandName} owner`}
              className="owner-placeholder-image"
            />
          </div>

          <div className="why-choose-copy">
            <p className="eyebrow section-eyebrow">Why Choose Me</p>
            <h2>Built on discipline, care, and real work ethic</h2>
            <p className="hero-text">
              I’m a Berkeley student from Fresno, California, and I’m no
              stranger to hard work. I worked two jobs during my junior and
              senior years of high school, earned a biomedical department award,
              and completed over 100 hours of volunteering in sports medicine.
              Getting into UC Berkeley’s College of Chemistry, one of the
              hardest colleges in the nation, showed me that dedication and
              discipline can take you far.
            </p>
            <p className="hero-text">
              I try to live my life with that same dedication and discipline
              every day, and I bring that same energy to the cars I work on.
              When I detail a car, I want it to reflect care, pride, and
              attention to detail. I treat every vehicle with respect and work
              hard to leave it looking cleaner, fresher, and shining the way it
              should.
            </p>
          </div>
        </div>
      </section>

            <section className="section">
        <div className="specialty-services-card">
          <div className="specialty-services-header">
            <div>
              <p className="eyebrow section-eyebrow">Custom Services</p>
              <h2>Specialty work available by custom quote</h2>
            </div>
            <p className="hero-text specialty-services-text">
              For vehicles that need more specialized attention, custom services
              are available depending on the condition of the car and the work
              required.
            </p>
          </div>

          <div className="service-tags">
            {specialtyServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

            <section className="section section-divider">
        <div className="cta cta-premium">
          <p className="eyebrow section-eyebrow">Get Started</p>
          <h2>Ready for a clean reset?</h2>
          <p>
            Book a detail, check availability, and bring your car back to life.
          </p>
          <div className="hero-buttons">
            <Link href="/booking" className="button primary">
              Schedule a Detail
            </Link>
            <Link href="/gallery" className="button secondary">
              See Recent Cars
            </Link>
          </div>
        </div>
      </section>

            <section className="section section-divider">
        <div className="contact-card-premium">
          <div className="contact-card-header">
            <div>
              <p className="eyebrow section-eyebrow">Contact</p>
              <h2>Questions, custom work, or ready to book?</h2>
            </div>
            <p className="hero-text contact-card-text">
              For standard appointments, start with the booking page. For
              specialty services, custom quotes, or direct questions, call,
              text, or reach out on Instagram.
            </p>
          </div>

          <div className="contact-card-actions">
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

            <div className="contact-card-meta">
              <p className="footer-muted">
                {siteConfig.instagramHandle}
              </p>
              <p className="footer-muted">
                {siteConfig.locationLine}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}