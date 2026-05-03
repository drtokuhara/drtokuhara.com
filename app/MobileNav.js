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

            <p className="mobile-nav-label">Learn</p>
            <Link href="/about" onClick={close}>About Dr. Tokuhara</Link>
            <Link href="/insights" onClick={close}>Insights</Link>
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
