'use client';

import { useEffect, useRef, useState } from 'react';

function CinematicScene({ videoSrc, posterSrc, headline, subtitle, index, isLast = false, ctaHref = null }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cinematic-scene"
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        loading="lazy"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,20,30,0.5), rgba(0,20,30,0.7))',
          zIndex: 1,
        }}
      />
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          padding: '0 20px',
          maxWidth: '900px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            textShadow: '2px 4px 8px rgba(0,0,0,0.4)',
          }}
        >
          {headline}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.95)',
            textShadow: '1px 2px 4px rgba(0,0,0,0.4)',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
        {isLast && ctaHref && (
          <a
            href={ctaHref}
            className="btn-primary"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              fontSize: '18px',
              padding: '16px 32px',
              background: 'var(--oasis)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              textShadow: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            Schedule Your Consultation
          </a>
        )}
      </div>
    </section>
  );
}

export default function CinematicJourney() {
  return (
    <div style={{ position: 'relative' }}>
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-1-arrival.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-1-arrival-720p.png"
        headline="Your Journey to Clear Vision"
        subtitle="It starts the moment you walk through our doors."
        index={1}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-2-greeting.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-2-greeting-720p.png"
        headline="You'll Meet Dr. Tokuhara Personally"
        subtitle="No rushed consultations. No assembly line. Just a conversation about your eyes."
        index={2}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-3-cataract-eye.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-3-cataract-eye-720p.png"
        headline="Understanding Your Cataract"
        subtitle="The lens inside your eye has become cloudy. Colors fade. Night driving gets harder. But this is fixable."
        index={3}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-4-eyedrops.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-4-eyedrops-720p.png"
        headline="Gentle Preparation"
        subtitle="Numbing drops. No needles. No pain. You're awake but completely comfortable."
        index={4}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-5-microscope.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-5-microscope-720p.png"
        headline="Precision in Every Detail"
        subtitle="10 to 15 minutes. 20,000 surgeries of experience guiding every movement."
        index={5}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-6-laser.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-6-laser-light-720p.png"
        headline="Advanced Technology, Expert Hands"
        subtitle="The cloudy lens is removed. A new crystal-clear lens takes its place."
        index={6}
      />
      <CinematicScene
        videoSrc="/media/scroll-cinema/scroll-video-7-clear-vision.mp4"
        posterSrc="/media/scroll-cinema/scroll-scene-7-clear-vision-720p.png"
        headline="And Then You See"
        subtitle="Brighter colors. Sharper details. The world as it was meant to be."
        index={7}
        isLast={true}
        ctaHref="/contact"
      />
    </div>
  );
}
