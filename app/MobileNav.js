'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
            <Link href="/about" onClick={close}>About</Link>
            <Link href="/cataract-surgery" onClick={close}>Cataract Surgery</Link>
            <Link href="/patient-journey" onClick={close}>Your Journey</Link>
            <Link href="/lens-implants-explained" onClick={close}>Lens Guide</Link>
            <Link href="/insights" onClick={close}>Insights</Link>
            <Link href="/education" onClick={close}>Education</Link>
            <Link href="/contact" onClick={close}>Contact</Link>
            <a href="tel:7603404700" className="btn-primary mobile-cta" onClick={close}>
              Call 760.340.4700
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
