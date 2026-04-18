import { galleryItems } from '../data/gallery'
import { siteConfig } from '../data/site'

export default function GalleryPage() {
  return (
    <main className="page">
      <section className="section gallery-hero">
        <p className="eyebrow">{siteConfig.brandName} Gallery</p>
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
            <article
              key={`${item.title}-${item.image}`}
              className="gallery-card gallery-card-premium"
            >
              <div className="gallery-image-wrap gallery-image-premium-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image gallery-image-premium"
                />
                <div className="gallery-image-overlay" />
              </div>

              <div className="gallery-card-body gallery-card-body-premium">
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