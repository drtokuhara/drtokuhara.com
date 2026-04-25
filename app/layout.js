import Link from 'next/link';
import MobileNav from './MobileNav';
import './styles.css';

export const metadata = {
  title: {
    default: 'Dr. Keith Tokuhara, MD | Cataract Surgeon in Rancho Mirage, Coachella Valley',
    template: '%s | Dr. Keith Tokuhara, MD',
  },
  description: 'Board-certified cataract surgeon in Rancho Mirage, CA. Fellowship trained, patient first approach. Advanced cataract surgery, premium lens implants, and complex case expertise at Desert Vision Center.',
  metadataBase: new URL('https://drtokuhara.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Keith Tokuhara, MD | Cataract Surgeon',
    description: 'Fellowship trained cataract surgeon in the Coachella Valley. Advanced surgery, premium lenses, and honest patient care at Desert Vision Center.',
    url: 'https://drtokuhara.com',
    siteName: 'Dr. Keith Tokuhara',
    images: [
      {
        url: '/dr-tokuhara-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Keith Tokuhara, Cataract Surgeon at Desert Vision Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Keith Tokuhara, MD | Cataract Surgeon',
    description: 'Fellowship trained cataract surgeon in the Coachella Valley. Patient first care at Desert Vision Center.',
    site: '@DoctorTokuhara',
    images: ['/dr-tokuhara-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* NAV */}
        <nav className="nav">
          <div className="container nav-inner">
            <Link href="/" className="nav-brand">Dr. Keith Tokuhara</Link>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/cataract-surgery">Cataract Surgery</Link>
              <Link href="/patient-journey">Your Journey</Link>
              <Link href="/lens-implants-explained">Lens Guide</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/education">Education</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <MobileNav />
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <div className="footer-brand">Dr. Keith Tokuhara, M.D.</div>
                <p style={{fontSize: '13px'}}>Cataract Surgeon · Educator · Rancho Mirage, CA</p>
              </div>
              <div className="footer-links">
                <div className="footer-col">
                  <h4>Quick Links</h4>
                  <Link href="/about">About</Link>
                  <Link href="/cataract-surgery">Cataract Surgery</Link>
                  <Link href="/patient-journey">Your Journey</Link>
                  <Link href="/lens-implants-explained">Lens Guide</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/education">Education</Link>
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="footer-col">
                  <h4>Practice</h4>
                  <a href="https://desertvisioncenter.com">Desert Vision Center</a>
                  <a href="tel:7603404700">760.340.4700</a>
                </div>
                <div className="footer-col">
                  <h4>Social</h4>
                  <a href="https://x.com/DoctorTokuhara">X / Twitter</a>
                  <a href="https://youtube.com/@desertvisioncenter">YouTube</a>
                  <a href="https://instagram.com/desertvisioncenter">Instagram</a>
                  <a href="https://facebook.com/desertvisioncenter">Facebook</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p style={{marginBottom: '8px'}}>This website is for educational purposes only and does not replace a medical consultation.</p>
              © {new Date().getFullYear()} Dr. Keith Tokuhara. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
