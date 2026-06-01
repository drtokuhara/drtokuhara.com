'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`hamburger ${open ? 'hamburger-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {open && (
        <div className="mobile-overlay" onClick={close}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <p className="mobile-nav-label">Surgery</p>
            <Link href="/cataract-surgery" onClick={close}>Cataract Surgery</Link>
            <Link href="/laser-cataract-surgery" onClick={close}>Laser Surgery</Link>
            <Link href="/clear-in-a-day" onClick={close}>CLEAR in a Day</Link>
            <Link href="/cataract-surgery-complications" onClick={close}>Complications</Link>
            <Link href="/complex-cases" onClick={close}>Complex Cases</Link>

            <p className="mobile-nav-label">Cataract + Condition</p>
            <Link href="/complex-cases" onClick={close}>All Complex Cases</Link>
            <Link href="/complex-cases/diabetes" onClick={close}>Diabetes</Link>
            <Link href="/complex-cases/glaucoma-and-cataract" onClick={close}>Glaucoma</Link>
            <Link href="/complex-cases/macular-degeneration" onClick={close}>Macular Degeneration</Link>
            <Link href="/complex-cases/previous-retina-surgery" onClick={close}>Previous Retina Surgery</Link>
            <Link href="/complex-cases/previous-lasik" onClick={close}>Previous LASIK</Link>
            <Link href="/complex-cases/previous-rk" onClick={close}>Previous RK</Link>
            <Link href="/complex-cases/uveitis" onClick={close}>Uveitis</Link>
            <Link href="/complex-cases/fuchs-dystrophy" onClick={close}>Fuchs Dystrophy</Link>
            <Link href="/complex-cases/floppy-iris" onClick={close}>Floppy Iris (Flomax)</Link>
            <Link href="/complex-cases/pseudoexfoliation" onClick={close}>Pseudoexfoliation</Link>
            <Link href="/complex-cases/parkinsons-disease" onClick={close}>Parkinson's</Link>
            <Link href="/complex-cases/alzheimers-dementia" onClick={close}>Alzheimer's / Dementia</Link>
            <Link href="/complex-cases/down-syndrome" onClick={close}>Down Syndrome</Link>
            <Link href="/complex-cases/retained-silicone-oil" onClick={close}>Retained Silicone Oil</Link>
            <Link href="/complex-cases/aphakia-after-retina" onClick={close}>Aphakia After Retina</Link>

            <p className="mobile-nav-label">Lenses</p>
            <Link href="/lens-implants-explained" onClick={close}>Lens Guide</Link>
            <Link href="/vivity-vs-panoptix" onClick={close}>Vivity vs PanOptix</Link>
            <Link href="/panoptix-vs-panoptix-pro" onClick={close}>PanOptix vs PanOptix Pro</Link>
            <Link href="/toric-lens-astigmatism" onClick={close}>Toric / Astigmatism</Link>
            <Link href="/clareon-lens" onClick={close}>Clareon Lens</Link>
            <Link href="/insights/best-lens-for-night-driving" onClick={close}>Best Lens for Night Driving</Link>

            <p className="mobile-nav-label">For Patients</p>
            <Link href="/patient-journey" onClick={close}>Your Journey</Link>
            <Link href="/cataract-pre-op" onClick={close}>Pre-Op Guide</Link>
            <Link href="/cataract-recovery" onClick={close}>Recovery</Link>
            <Link href="/my-cataract-drops" onClick={close}>My Cataract Drops App</Link>
            <Link href="/choosing-your-surgeon" onClick={close}>Choosing a Surgeon</Link>

            <p className="mobile-nav-label">Patient Stories</p>
            <Link href="/insights" onClick={close}>All Stories & Guides</Link>
            <Link href="/insights/cataract-surgery-step-by-step" onClick={close}>Step by Step</Link>
            <Link href="/insights/what-you-see-during-cataract-surgery" onClick={close}>What You See During Surgery</Link>
            <Link href="/insights/is-cataract-surgery-painful" onClick={close}>Is It Painful?</Link>
            <Link href="/insights/first-week-after-cataract-surgery" onClick={close}>Your First Week After</Link>
            <Link href="/insights/life-after-cataract-surgery" onClick={close}>Life After Surgery</Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" onClick={close}>How to Choose a Surgeon</Link>
            <Link href="/insights/do-i-really-need-surgery" onClick={close}>Do I Need Surgery Yet?</Link>
            <Link href="/insights/when-cataract-surgery-goes-wrong" onClick={close}>When Surgery Goes Wrong</Link>
            <Link href="/insights/are-premium-lenses-worth-it" onClick={close}>Are Premium Lenses Worth It?</Link>
            <Link href="/insights/not-every-patient-wants-the-same-vision" onClick={close}>Not Every Patient Wants the Same Vision</Link>
            <Link href="/insights/medicare-cataract-surgery" onClick={close}>Medicare Coverage</Link>
            <Link href="/insights/posterior-capsule-opacification" onClick={close}>Cloudy Vision After Surgery (PCO)</Link>
            <Link href="/insights/second-opinion-cataract-surgery" onClick={close}>Getting a Second Opinion</Link>
            <Link href="/insights/second-opinion-that-changed-everything" onClick={close}>A Second Opinion That Changed Everything</Link>
            <Link href="/insights/when-cataracts-are-not-the-real-problem" onClick={close}>When Cataracts Are Not the Real Problem</Link>
            <Link href="/insights/the-standard-lens-was-the-right-call" onClick={close}>The Standard Lens Was the Right Call</Link>
            <Link href="/insights/two-in-the-morning" onClick={close}>Two in the Morning</Link>
            <Link href="/insights/the-bicycle-rider-and-the-binoculars" onClick={close}>The Bicycle Rider and Anisometropia</Link>

            <p className="mobile-nav-label">Learn</p>
            <Link href="/about" onClick={close}>About Dr. Tokuhara</Link>
            <Link href="/education" onClick={close}>Education</Link>
            <Link href="/patient-stories" onClick={close}>Patient Stories</Link>
            <Link href="/faq" onClick={close}>FAQ</Link>
            <Link href="/contact" onClick={close}>Contact</Link>
            <div className="mobile-lang-toggle">
              <LanguageToggle />
            </div>
            <a href="tel:7603404700" className="btn-primary mobile-cta" onClick={close}>
              Call 760.340.4700
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
