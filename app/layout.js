import Link from 'next/link'
import './globals.css'
import { siteConfig } from './data/site'

export const metadata = {
  title: 'ChrisDoesDetails',
  description: 'Mobile car detailing in Berkeley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="nav-inner">
            <Link href="/" className="brand brand-with-logo">
              <img
                src="/cars/logo.jpeg"
                alt="ChrisDoesDetails logo"
                className="nav-logo"
              />
              <span>{siteConfig.brandName}</span>
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </div>
        </header>

        {children}

        <section className="site-trust-strip">
          <div className="site-trust-inner">
            <div className="site-trust-item">
              <span className="site-trust-dot" />
              <p>Student-owned mobile detailing in Berkeley</p>
            </div>
            <div className="site-trust-item">
              <span className="site-trust-dot" />
              <p>Package-based online booking</p>
            </div>
            <div className="site-trust-item">
              <span className="site-trust-dot" />
              <p>Custom quotes for specialty work</p>
            </div>
          </div>
        </section>

        <footer className="site-footer premium-footer">
          <div className="footer-inner">
            <div className="footer-brand-block">
              <div className="footer-brand-row">
                <img
                  src="/cars/logo.jpeg"
                  alt="ChrisDoesDetails logo"
                  className="footer-logo"
                />
                <div>
                  <p className="footer-brand-name">{siteConfig.brandName}</p>
                  <p className="footer-muted">{siteConfig.locationLine}</p>
                </div>
              </div>

              <p className="footer-muted footer-brand-text">
                Student-owned mobile detailing with care, discipline, and
                attention to detail.
              </p>
            </div>

            <div className="footer-links-block">
              <p className="footer-heading">Explore</p>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/booking">Booking</Link>
                <Link href="/gallery">Gallery</Link>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="footer-contact-block">
              <p className="footer-heading">Contact</p>
              <div className="footer-links">
                <a href={`tel:${siteConfig.phone}`}>Call</a>
                <a href={`sms:${siteConfig.phone}`}>Text</a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-muted">
              © {new Date().getFullYear()} {siteConfig.brandName}. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}