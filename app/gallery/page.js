const galleryItems = [
  {
    title: 'Interior Detail',
    image: '/cars/car1.jpeg',
    category: 'Interior',
    description:
      'Deep interior cleaning with a fresher finish and a more reset feel throughout the cabin.',
  },
  {
    title: 'Exterior Wash and Shine',
    image: '/cars/car2.png',
    category: 'Exterior',
    description:
      'Cleaned, dried, and finished with a sharper exterior look and added shine.',
  },
  {
    title: 'Full Detail',
    image: '/cars/car3.png',
    category: 'Full Detail',
    description:
      'Inside-and-out reset with deeper attention to both presentation and finish.',
  },
  {
    title: 'Deep Clean Reset',
    image: '/cars/car4.jpeg',
    category: 'Interior',
    description:
      'A stronger interior reset for a vehicle that needed more detailed care and attention.',
  },
  {
    title: 'Detail Finish',
    image: '/cars/car5.jpeg',
    category: 'Exterior',
    description:
      'A cleaner finish with stronger presentation, gloss, and overall detail.',
  },
  {
    title: 'Complete Refresh',
    image: '/cars/car6.jpeg',
    category: 'Full Detail',
    description:
      'A more complete refresh focused on making the vehicle feel cleaner, fresher, and better cared for.',
  },
]

export default function GalleryPage() {
  return (
    <main className="page">
      <section className="section gallery-hero">
        <p className="eyebrow">ChrisDoesDetails Gallery</p>
        <h1>Recent Work</h1>
        <p className="hero-text">
          A look at some of the vehicles I’ve cleaned and detailed. From quick
          refreshes to full resets, every job gets care, patience, and attention
          to detail.
        </p>
      </section>

      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article key={`${item.title}-${item.image}`} className="gallery-card">
              <div className="gallery-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
              </div>

              <div className="gallery-card-body">
                <p className="gallery-category">{item.category}</p>
                <h2 className="gallery-card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}