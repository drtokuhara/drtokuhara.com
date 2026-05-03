import Link from 'next/link';
import MobileNav from './MobileNav';
import { LanguageProvider } from './LanguageContext';
import LanguageToggle from './LanguageToggle';
import CursorSpotlight from './components/CursorSpotlight';
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
        <meta name="google-site-verification" content="dnkmWlKto3uOsrwNz5LYZ9J7DoQHAiaTqoE-Rxya32A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
        <CursorSpotlight />
        {/* NAV */}
        <nav className="nav">
          <div className="container nav-inner">
            <Link href="/" className="nav-brand">Dr. Keith Tokuhara</Link>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <div className="nav-dropdown">
                <span className="nav-dropdown-trigger">Surgery</span>
                <div className="nav-dropdown-menu">
                  <Link href="/cataract-surgery">Cataract Surgery</Link>
                  <Link href="/laser-cataract-surgery">Laser Surgery</Link>
                  <Link href="/clear-in-a-day">CLEAR in a Day</Link>
                  <Link href="/cataract-pre-op">Pre-Op Guide</Link>
                  <Link href="/cataract-recovery">Recovery</Link>
                  <Link href="/is-cataract-surgery-safe">Is It Safe?</Link>
                  <Link href="/cataract-surgery-complications">Complications</Link>
                </div>
              </div>
              <div className="nav-dropdown">
                <span className="nav-dropdown-trigger">Lenses</span>
                <div className="nav-dropdown-menu">
                  <Link href="/lens-implants-explained">Lens Guide</Link>
                  <Link href="/vivity-vs-panoptix">Vivity vs PanOptix</Link>
                  <Link href="/panoptix-vs-panoptix-pro">PanOptix vs Pro</Link>
                  <Link href="/toric-lens-astigmatism">Toric / Astigmatism</Link>
                  <Link href="/clareon-lens">Clareon Lens</Link>
                  <Link href="/halos-after-cataract-surgery">Halos After Surgery</Link>
                </div>
              </div>
              <div className="nav-dropdown">
                <span className="nav-dropdown-trigger">Conditions</span>
                <div className="nav-dropdown-menu">
                  <Link href="/complex-cases">Complex Cases</Link>
                  <Link href="/understanding-cataracts">Understanding Cataracts</Link>
                  <Link href="/yag-laser-capsulotomy">YAG Laser</Link>
                  <Link href="/blurry-vision-after-cataract-surgery">Blurry Vision After Surgery</Link>
                  <Link href="/dust-in-eyes">Dust in Eyes</Link>
                  <Link href="/yamane-technique">Yamane Technique</Link>
                </div>
              </div>
              <div className="nav-dropdown">
                <span className="nav-dropdown-trigger">Patients</span>
                <div className="nav-dropdown-menu">
                  <Link href="/patient-journey">Your Journey</Link>
                  <Link href="/understand-your-options">Your Options</Link>
                  <Link href="/ready-for-surgery">Ready for Surgery</Link>
                  <Link href="/choosing-your-surgeon">Choosing a Surgeon</Link>
                  <Link href="/ethical-cataract-care">Ethical Care</Link>
                  <Link href="/patient-stories">Patient Stories</Link>
                  <Link href="/my-cataract-drops">My Cataract Drops App</Link>
                </div>
              </div>
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
                  <h4>Surgery</h4>
                  <Link href="/cataract-surgery">Cataract Surgery</Link>
                  <Link href="/laser-cataract-surgery">Laser Surgery</Link>
                  <Link href="/clear-in-a-day">CLEAR in a Day</Link>
                  <Link href="/lens-implants-explained">Lens Guide</Link>
                  <Link href="/cataract-surgery-complications">Complications</Link>
                  <Link href="/complex-cases">Complex Cases</Link>
                </div>
                <div className="footer-col">
                  <h4>For Patients</h4>
                  <Link href="/patient-journey">Your Journey</Link>
                  <Link href="/cataract-pre-op">Pre-Op Guide</Link>
                  <Link href="/cataract-recovery">Recovery</Link>
                  <Link href="/my-cataract-drops">My Cataract Drops App</Link>
                  <Link href="/choosing-your-surgeon">Choosing a Surgeon</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="footer-col">
                  <h4>Learn</h4>
                  <Link href="/insights">Insights</Link>
                  <Link href="/education">Education</Link>
                  <Link href="/patient-stories">Patient Stories</Link>
                  <Link href="/about">About Dr. Tokuhara</Link>
                  <Link href="/ethical-cataract-care">Ethical Care</Link>
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
