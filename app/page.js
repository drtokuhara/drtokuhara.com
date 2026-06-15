'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import StickyNav from './components/StickyNav';
import JourneyCards from './components/JourneyCards';
import BrandStories from './components/BrandStories';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const aboutSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-companion">
      <StickyNav />
      
      <HeroSection />

      <JourneyCards />

      <BrandStories />

      {/* ABOUT SECTION */}
      <section className="about-section" ref={aboutSectionRef}>
        <div className="about-inner">
          <div className="about-photo reveal">
            <Image src="/dr-tokuhara-hero.jpg" alt="Dr. Keith Tokuhara" width={240} height={320} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>
          <div className="about-content">
            <div className="label-caps section-label reveal">The Surgeon</div>
            <h2 className="reveal">Keith Tokuhara, MD</h2>
            <div className="about-title reveal">Cataract and Anterior Segment Surgeon</div>
            <p className="reveal">Dr. Tokuhara has called the Coachella Valley home for over a decade. Desert Vision Center, the practice he leads, has been a part of this community for nearly four decades, earning the trust of generations of desert families.</p>
            <p className="reveal">Patients travel from across the country for his expertise in complex cataract reconstruction, lens exchange, and revision surgery. But his daily work is simpler than that: careful, unhurried care for the people who live here.</p>
            <div className="about-highlight reveal">"Some of our patients in their 80s and 90s still remember Don, our longest-serving team member, from 35 years ago. He has been with DVC for nearly 40 years. That kind of continuity is something a corporate practice can never replicate."</div>
            <a className="about-link reveal" href="https://www.desertvisioncenter.com" target="_blank" rel="noopener noreferrer">Full biography at Desert Vision Center</a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" ref={ctaSectionRef}>
        <h2 className="reveal">Ready to talk?</h2>
        <p className="reveal">A conversation is the best first step. No pressure. Just answers.</p>
        <a className="cta-btn reveal" href="https://www.desertvisioncenter.com/contact" target="_blank" rel="noopener noreferrer">Contact Desert Vision Center</a>
        <div className="cta-details reveal">
          <p><strong>Desert Vision Center</strong></p>
          <p>39000 Bob Hope Drive, Wright Building, Suite 105</p>
          <p>Rancho Mirage, CA 92270</p>
          <p style={{ marginTop: '4px' }}>760.340.4700</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-homepage">
        <p>Desert Vision Center · Rancho Mirage, California</p>
      </footer>
    </div>
  );
}
