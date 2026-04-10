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
    title: 'Premium Exterior Detail',
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
    title: 'Full Detail',
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
        <h1>Cristian Gonzalez Detailing</h1>
        <p className="hero-text">
          Hi, I’m Cristian Gonzalez, and I run a mobile car detailing business
          serving Berkeley. I believe a car is more than just transportation —
          it reflects the way we live and take care of what matters to us. I
          treat every vehicle with care, discipline, and attention to detail,
          whether it needs a quick refresh or a deep clean.
        </p>
        <p className="hero-text">
          My goal is to leave every car looking cleaner, feeling fresher, and
          cared for with pride.
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
    </main>
  )
}