'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="hero-homepage">
      <div className="hero-topbar" />
      
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/dr-tokuhara-hero.jpg"
      >
        <source src="/media/ambient-desert-golden-hour.mp4" type="video/mp4" />
      </video>

      <div className="hero-glow" />
      
      {[...Array(5)].map((_, i) => (
        <div key={i} className="hero-particle" />
      ))}

      <div className="hero-content">
        <h1 className="hero-title">Keith Tokuhara, MD</h1>
        <div className="hero-rule" />
        <p className="hero-subtitle">Desert Vision Center · Rancho Mirage</p>
      </div>
    </section>
  );
}
