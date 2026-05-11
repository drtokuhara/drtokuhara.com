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
  description: 'Dr. Keith Tokuhara, MD - fellowship-trained cataract surgeon at Desert Vision Center in Rancho Mirage, CA. Specializing in complex cataract surgery, advanced lens implants, and personalized patient care in the Coachella Valley.',
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
              <div className="nav-dropdown nav-dropdown-wide">
                <span className="nav-dropdown-trigger">Conditions</span>
                <div className="nav-dropdown-menu nav-dropdown-mega">
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Eye Conditions</span>
                    <Link href="/understanding-cataracts">Understanding Cataracts</Link>
                    <Link href="/yag-laser-capsulotomy">YAG Laser / PCO</Link>
                    <Link href="/blurry-vision-after-cataract-surgery">Blurry Vision After Surgery</Link>
                    <Link href="/halos-after-cataract-surgery">Halos After Surgery</Link>
                    <Link href="/glaucoma">Glaucoma</Link>
                    <Link href="/dry-eyes-desert">Dry Eyes / Desert</Link>
                    <Link href="/dust-in-eyes">Dust in Eyes</Link>
                    <Link href="/monocular-cataract-surgery">Monocular Eye Surgery</Link>
                    <Link href="/yamane-technique">Dislocated Lens / Yamane</Link>
                  </div>
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Cataract + Condition</span>
                    <Link href="/complex-cases/diabetes">Diabetes</Link>
                    <Link href="/complex-cases/glaucoma-and-cataract">Glaucoma</Link>
                    <Link href="/complex-cases/macular-degeneration">Macular Degeneration</Link>
                    <Link href="/complex-cases/previous-retina-surgery">Previous Retina Surgery</Link>
                    <Link href="/complex-cases/previous-lasik">Previous LASIK</Link>
                    <Link href="/complex-cases/previous-rk">Previous RK</Link>
                    <Link href="/complex-cases/fuchs-dystrophy">Fuchs Dystrophy</Link>
                  </div>
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Special Populations</span>
                    <Link href="/complex-cases/parkinsons-disease">Parkinson's</Link>
                    <Link href="/complex-cases/alzheimers-dementia">Alzheimer's / Dementia</Link>
                    <Link href="/complex-cases/down-syndrome">Down Syndrome</Link>
                    <Link href="/complex-cases/floppy-iris">Floppy Iris (Flomax)</Link>
                    <Link href="/complex-cases/pseudoexfoliation">Pseudoexfoliation</Link>
                    <Link href="/complex-cases/retained-silicone-oil">Retained Silicone Oil</Link>
                    <Link href="/complex-cases/aphakia-after-retina">Aphakia After Retina</Link>
                  </div>
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
              <div className="nav-dropdown nav-dropdown-wide">
                <span className="nav-dropdown-trigger">Insights</span>
                <div className="nav-dropdown-menu nav-dropdown-mega">
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Decisions & Timing</span>
                    <Link href="/insights/do-i-really-need-surgery">Do I Need Surgery Yet?</Link>
                    <Link href="/insights/when-is-the-right-time">When Is the Right Time?</Link>
                    <Link href="/insights/when-patients-wait">When Patients Wait</Link>
                    <Link href="/insights/five-questions-before-surgery">5 Questions to Ask</Link>
                    <Link href="/insights/when-the-surgeon-says-wait">When the Surgeon Says Wait</Link>
                  </div>
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Lens Selection</span>
                    <Link href="/insights/when-ai-recommends-your-lens">When AI Recommends Your Lens</Link>
                    <Link href="/insights/three-things-patients-say">Three Things Patients Say</Link>
                    <Link href="/insights/the-reader-who-almost-gave-up-her-books">The Reader Who Almost Gave Up</Link>
                    <Link href="/insights/are-premium-lenses-worth-it">Are Premium Lenses Worth It?</Link>
                    <Link href="/insights/the-lens-nobody-talks-about">The Lens Nobody Talks About</Link>
                    <Link href="/insights/when-the-eye-surface-changes-everything">When the Eye Surface Changes Everything</Link>
                    <Link href="/insights/the-number-that-wasnt-the-problem">The Number That Wasn't the Problem</Link>
                  </div>
                  <div className="nav-mega-col">
                    <span className="nav-mega-label">Patient Stories</span>
                    <Link href="/insights/twenty-years-forward">Twenty Years Forward</Link>
                    <Link href="/insights/the-eye-you-least-suspect">The Eye You Least Suspect</Link>
                    <Link href="/insights/permission-to-see-again">Permission to See Again</Link>
                    <Link href="/insights/the-man-who-wanted-his-younger-eyes-back">Younger Eyes Back</Link>
                    <Link href="/insights/when-guilt-replaces-explanation">When Guilt Replaces Explanation</Link>
                    <Link href="/insights/when-more-isnt-better">When More Isn't Better</Link>
                    <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me">The Surgeon Who Trained Me</Link>
                    <Link href="/insights/when-the-unexpected-leads-to-the-right-outcome">When the Unexpected Leads Right</Link>
                    <Link href="/insights/the-consultation-that-changed-everything">The Consultation That Changed Everything</Link>
                    <Link href="/insights" style={{color: 'var(--oasis)', fontWeight: 600, marginTop: '8px'}}>View All Insights</Link>
                  </div>
                </div>
              </div>
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
                  <Link href="/dysphotopsia-after-cataract-surgery">Dysphotopsia</Link>
                  <Link href="/dropped-lens-after-cataract-surgery">Dropped Lens</Link>
                  <Link href="/complex-cases">Complex Cases</Link>
                  <Link href="/monocular-cataract-surgery">Monocular Eye Surgery</Link>
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
                <div className="footer-col footer-col-locations">
                  <h4>Serving the Coachella Valley</h4>
                  <p className="footer-locations-flow">
                    <Link href="/cataract-surgeon-rancho-mirage">Rancho Mirage</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-palm-desert">Palm Desert</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-palm-springs">Palm Springs</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-indian-wells">Indian Wells</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-la-quinta">La Quinta</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-cathedral-city">Cathedral City</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-indio">Indio</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-coachella">Coachella</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-desert-hot-springs">Desert Hot Springs</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-bermuda-dunes">Bermuda Dunes</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-thousand-palms">Thousand Palms</Link>
                    <span className="footer-loc-sep">&middot;</span>
                    <Link href="/cataract-surgeon-thermal-mecca">Thermal &amp; Mecca</Link>
                  </p>
                  <p className="footer-locations-also">Also serving patients from{' '}
                    <Link href="/cataract-surgeon-redlands">Redlands</Link>,{' '}
                    <Link href="/cataract-surgeon-yucaipa">Yucaipa</Link>, and{' '}
                    <Link href="/cataract-surgeon-calimesa">Calimesa</Link>
                  </p>
                  <p className="footer-locations-also">Serving patients beyond the valley:{' '}
                    <Link href="/cataract-surgeon-mammoth-lakes">Mammoth Lakes</Link>,{' '}
                    <Link href="/cataract-surgeon-big-bear">Big Bear</Link>, and{' '}
                    <Link href="/cataract-surgeon-blythe">Blythe</Link>
                  </p>
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
