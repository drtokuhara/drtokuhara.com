'use client';

import { useEffect, useState, useRef } from 'react';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const heroObserverRef = useRef(null);

  useEffect(() => {
    const hero = document.querySelector('.hero-homepage');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    heroObserverRef.current = observer;

    return () => {
      if (heroObserverRef.current) {
        heroObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className={`sticky-nav-homepage ${visible ? 'visible' : ''}`}>
      <span className="sticky-nav-name">Keith Tokuhara, MD</span>
      <a className="sticky-nav-link" href="https://www.desertvisioncenter.com/contact" target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    </nav>
  );
}
