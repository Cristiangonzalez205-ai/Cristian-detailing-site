import Link from 'next/link'

const packages = [
  {
    title: 'Interior Refresh',
    price: '$60',
    description:
      'A solid reset for lightly used interiors with standard vacuuming, minor spot cleaning, and a fresh scent finish.',
    includes: [
      'Standard vacuuming',
      'Minor spot cleaning',
      'Surface wipe-down',
      'Fresh scent finish',
    ],
  },
  {
    title: 'Deep Interior Clean',
    price: '$140',
    description:
      'A more thorough interior detail with deeper cleaning for dust, buildup, and everyday mess.',
    includes: [
      'Full vacuuming',
      'Steam cleaning',
      'Air vent cleaning',
      'Interior wipe-down',
      'Fresh scent finish',
    ],
  },
  {
    title: 'Complete Interior Reset',
    price: '$200',
    description:
      'For interiors that need the deepest level of care, including upholstery attention and heavier buildup.',
    includes: [
      'Full vacuuming',
      'Steam cleaning',
      'Upholstery cleaning',
      'Deeper stain attention',
      'Fresh scent finish',
    ],
  },
  {
    title: 'Exterior Wash',
    price: '$60',
    description:
      'A clean and simple exterior service for a refreshed finish.',
    includes: ['Hand wash', 'Rinse', 'Hand dry'],
  },
  {
    title: 'Exterior Wash Plus',
    price: '$80',
    description:
      'Adds extra shine and protection with a pre-soak and wax finish.',
    includes: ['Pre-soak', 'Hand wash', 'Rinse', 'Wax', 'Hand dry'],
  },
  {
    title: 'Exterior Detail',
    price: '$100',
    description:
      'A more complete exterior package with extra attention to shine and finishing touches.',
    includes: [
      'Tire shine',
      'Pre-soak',
      'Hand wash',
      'Rinse',
      'Wax',
      'Hand dry',
      'Trim restoration',
    ],
  },
  {
    title: 'The Full Detail',
    price: '$400',
    description:
      'The complete inside-and-out package for a full vehicle refresh.',
    includes: ['Complete Interior Reset', 'Premium Exterior Detail'],
  },
]

const specialtyServices = [
  'Upholstery cleaning',
  'Steam cleaning',
  'Fresh scent finish',
  'Tire shine',
  'Light scratch removal by request',
  'Paint correction',
  'Polish and wax',
  'Ceramic coating',
]

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Mobile Car Detailing in Berkeley</p>
<h1>ChrisDoesDetails</h1>
<p className="hero-text">
  Hi, I’m Cristian Gonzalez, and I run a mobile car detailing business serving
  Berkeley. I believe a car is more than just transportation — it reflects the
  way we live and care for what matters to us.
</p>
<p className="hero-text">
  I treat every vehicle with patience, discipline, and attention to detail,
  whether it needs a quick refresh or a deep clean. My goal is to leave every
  car looking cleaner, feeling fresher, and cared for with pride.
</p>

        <div className="hero-buttons">
          <Link href="/booking" className="button primary">
            Book Now
          </Link>
          <Link href="/gallery" className="button secondary">
            View My Work
          </Link>
        </div>
      </section>
      <section className="section">
  <div className="why-choose-me">
    <div className="owner-placeholder">
      <img
        src="/cars/owner-photo.jpeg"
        alt="ChrisDoesDetails owner"
        className="owner-placeholder-image"
      />
    </div>

    <div className="why-choose-copy">
      <h2>Why Choose Me</h2>
      <p className="hero-text">
        I’m a Berkeley student from Fresno, California, and I’m no stranger to hard
        work. I worked two jobs during my junior and senior years of high school,
        earned a biomedical department award, and completed over 100 hours of
        volunteering in sports medicine. Getting into UC Berkeley’s College of
        Chemistry, one of the hardest colleges in the nation, showed me that
        dedication and discipline can take you far.
      </p>
      <p className="hero-text">
        I try to live my life with that same dedication and discipline every day,
        and I bring that same energy to the cars I work on. When I detail a car, I
        want it to reflect care, pride, and attention to detail. I treat every
        vehicle with respect and work hard to leave it looking cleaner, fresher,
        and shining the way it should.
      </p>
    </div>
  </div>
</section>

      <section className="section">
        <h2>Services</h2>
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
  <article key={pkg.title} className="card">
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

    <div style={{ marginTop: '16px' }}>
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

      <section className="section">
        <h2>Specialty Add-Ons</h2>
        <div className="service-tags">
          {specialtyServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="section cta">
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
      </section>
      <section className="section">
  <h2>Contact</h2>
  <p className="hero-text">
    For questions, custom quotes, or specialty services, call or text me
    directly. For standard appointments, please use the booking page first.
  </p>
  <p className="hero-text">
    You can also see more of my work on Instagram: <strong>@ChrisDoesDetails</strong>
  </p>

  <div className="hero-buttons contact-icon-row">
  <a
    href="tel:5595523442"
    className="button secondary icon-only-button"
    aria-label="Call ChrisDoesDetails"
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
    href="sms:5595523442"
    className="button secondary icon-only-button"
    aria-label="Text ChrisDoesDetails"
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
    href="https://instagram.com/ChrisDoesDetails"
    className="button secondary icon-only-button"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit ChrisDoesDetails Instagram"
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
</section>
    </main>
  )
}