import Link from 'next/link';
import MobileNav from './MobileNav';
import { LanguageProvider } from './LanguageContext';
import LanguageToggle from './LanguageToggle';
import './styles.css';

export const metadata = {
  title: {
    default: 'Dr. Keith Tokuhara, MD | Cataract Expert & Patient Educator',
    template: '%s | Dr. Keith Tokuhara, MD',
  },
  description: 'Dr. Keith Tokuhara - fellowship trained cataract surgeon, educator, and patient advocate. Honest answers about cataracts, lens implants, and what to expect from surgery. Desert Vision Center, Coachella Valley.',
  metadataBase: new URL('https://drtokuhara.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Keith Tokuhara, MD | Cataract Expert & Educator',
    description: 'Fellowship trained cataract surgeon and patient educator. Honest answers about cataracts, lens implants, and your surgical options. Desert Vision Center, Coachella Valley.',
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
        <LanguageProvider>
        {/* NAV */}
        <nav className="nav">
          <div className="container nav-inner">
            <Link href="/" className="nav-brand">Dr. Keith Tokuhara</Link>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/cataract-surgery">Cataract Surgery</Link>
              <Link href="/clear-in-a-day">CLEAR in a Day</Link>
              <Link href="/complex-cases">Complex Cases</Link>
              <Link href="/patient-journey">Your Journey</Link>
              <Link href="/lens-implants-explained">Lens Guide</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/education">Education</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <LanguageToggle />
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
                  <Link href="/clear-in-a-day">CLEAR in a Day</Link>
                  <Link href="/complex-cases">Complex Cases</Link>
                  <Link href="/patient-journey">Your Journey</Link>
                  <Link href="/lens-implants-explained">Lens Guide</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/education">Education</Link>
                  <Link href="/faq">FAQ</Link>
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
        </LanguageProvider>
      </body>
    </html>
  );
}
