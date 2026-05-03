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
            <Link href="/complex-cases/parkinsons-disease" onClick={close}>Parkinson's</Link>
            <Link href="/complex-cases/alzheimers-dementia" onClick={close}>Alzheimer's / Dementia</Link>
            <Link href="/complex-cases/down-syndrome" onClick={close}>Down Syndrome</Link>

            <p className="mobile-nav-label">Lenses</p>
            <Link href="/lens-implants-explained" onClick={close}>Lens Guide</Link>
            <Link href="/vivity-vs-panoptix" onClick={close}>Vivity vs PanOptix</Link>
            <Link href="/toric-lens-astigmatism" onClick={close}>Toric / Astigmatism</Link>

            <p className="mobile-nav-label">For Patients</p>
            <Link href="/patient-journey" onClick={close}>Your Journey</Link>
            <Link href="/cataract-pre-op" onClick={close}>Pre-Op Guide</Link>
            <Link href="/cataract-recovery" onClick={close}>Recovery</Link>
            <Link href="/my-cataract-drops" onClick={close}>My Cataract Drops App</Link>
            <Link href="/choosing-your-surgeon" onClick={close}>Choosing a Surgeon</Link>

            <p className="mobile-nav-label">Insights by Topic</p>
            <Link href="/insights" onClick={close}>All Insights</Link>
            <Link href="/insights/do-i-really-need-surgery" onClick={close}>Do I Need Surgery Yet?</Link>
            <Link href="/insights/when-ai-recommends-your-lens" onClick={close}>When AI Recommends Your Lens</Link>
            <Link href="/insights/are-premium-lenses-worth-it" onClick={close}>Are Premium Lenses Worth It?</Link>
            <Link href="/insights/permission-to-see-again" onClick={close}>Permission to See Again</Link>

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
