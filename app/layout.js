import Link from 'next/link'
import './globals.css'

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
            <Link href="/" className="brand">
              ChrisDoesDetails
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <p>Mobile car detailing in Berkeley</p>
          <p>Serving drivers who care about their ride</p>
        </footer>
      </body>
    </html>
  )
}