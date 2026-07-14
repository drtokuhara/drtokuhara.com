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
            <p className="reveal">Dr. Tokuhara has served the Coachella Valley home for over a decade. Desert Vision Center, the practice he leads, has been a part of this community for nearly 4 decades. Some of the surgery patients today first came to DVC when their parents needed cataract surgery. That kind of continuity doesn&apos;t happen by accident.</p>
            <p className="reveal">Patients travel from across the country for his expertise in complex cataract reconstruction, lens exchange, and revision surgery. But his daily work is simpler than that: careful, unhurried care for the people who live here. If you're researching surgeons for a parent, you're welcome in the consultation room. Bring your questions.</p>
            <p className="reveal"><strong>Had surgery somewhere else?</strong> Whether it&apos;s cloudiness that developed months later, a result that doesn&apos;t feel right, or a question nobody answered, Dr. Tokuhara sees patients from other practices regularly. Bring your records, your questions, and your concerns. The first step is always the same: let&apos;s look at what we&apos;re working with.</p>
            <p className="reveal">Not sure what your insurance covers? Call us at (760) 340-4700. Our team checks your benefits before you schedule. They'll tell you what's covered, what your estimated cost will be, and whether a referral is needed. No surprises.</p>
            <div className="about-highlight reveal">"Some of our patients in their 80s and 90s still remember Don, our longest-serving team member, from 35 years ago. He has been with DVC for nearly 40 years. That kind of continuity is something a corporate practice can never replicate."</div>
            <a className="about-link reveal" href="https://www.desertvisioncenter.com" target="_blank" rel="noopener noreferrer">Full biography at Desert Vision Center</a>
            
            <div className="questions-section reveal" style={{marginTop: '3rem'}}>
              <h3 style={{fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem', color: '#0a2540'}}>Questions patients ask us</h3>
              
              <div style={{marginBottom: '1.5rem'}}>
                <p style={{fontWeight: 600, marginBottom: '0.5rem'}}>Why is my vision cloudy months after cataract surgery?</p>
                <p style={{marginBottom: '0.25rem'}}>It&apos;s probably posterior capsule opacification, a normal biological response. A two-minute laser clears it.</p>
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <p style={{fontWeight: 600, marginBottom: '0.5rem'}}>Did I choose the right lens?</p>
                <p style={{marginBottom: '0.25rem'}}>If your vision is clear and comfortable, your lens is doing what it was chosen to do. <a href="/insights/did-i-choose-the-right-lens" style={{color: '#007d95', textDecoration: 'none'}}>Learn more</a></p>
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <p style={{fontWeight: 600, marginBottom: '0.5rem'}}>My surgery was somewhere else. Can you help?</p>
                <p style={{marginBottom: '0.25rem'}}>Dr. Tokuhara sees patients from other practices every week. Bring your questions.</p>
              </div>
              
              <div>
                <p style={{fontWeight: 600, marginBottom: '0.5rem'}}>I'm helping my parent research surgeons. Where do I start?</p>
                <p>Start by coming to the consultation. You can ask anything. We'll explain the diagnosis, the options, and what to expect, for both of you.</p>
              </div>
            </div>
            
            <div className="continuity-section reveal" style={{marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px'}}>
              <h3 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem', color: '#0a2540'}}>After your surgery, we're still your team.</h3>
              <p style={{marginBottom: 0}}>Whether it's a routine follow-up, a question that comes up six months later, or something that doesn't feel right, our number stays the same: (760) 340-4700.</p>
            </div>
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
