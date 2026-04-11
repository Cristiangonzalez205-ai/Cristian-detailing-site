const cars = [
  {
    title: 'Interior Detail',
    image: '/cars/car1.jpeg',
    description: 'Full Exterior wash, including hand wash, dry, and shine',
  },
  {
    title: 'Exterior Wash and Shine',
    image: '/cars/car2.png',
    description: 'A fully detailed engine after a Full Wash',
  },
  {
    title: 'Exterior Wash',
    image: '/cars/car3.png',
    description: 'Tire Shine',
  },
  {
    title: 'Deep Clean Reset',
    image: '/cars/car4.jpeg',
    description: 'A full reset for a heavily used vehicle.',
  },
  {
    title: 'Full Engine Detail',
    image: '/cars/car5.jpeg',
    description: 'A full Engine Detail'
  },
  {
    title: 'standard wash',
    image: 'cars/car6.jpeg',
    description: 'A routine car wash'
  },
]

export default function GalleryPage() {
  return (
    <main className="page">
      <section className="section">
        <h1>Gallery</h1>
        <p className="hero-text">
          A look at some of the vehicles I’ve cleaned and detailed.
        </p>

        <div className="packages-grid">
          {cars.map((car) => (
            <article key={car.title} className="card">
              <img
                src={car.image}
                alt={car.title}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  marginBottom: '12px',
                }}
              />
              <h3>{car.title}</h3>
              <p className="card-description">{car.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}