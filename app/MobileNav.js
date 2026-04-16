'use client';

import { useState, useEffect } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close menu on route change / anchor click
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
            <a href="#about" onClick={close}>About</a>
            <a href="#services" onClick={close}>Cataract Care</a>
            <a href="#education" onClick={close}>Education</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a href="tel:7603404700" className="btn-primary mobile-cta" onClick={close}>
              Call 760.340.4700
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
