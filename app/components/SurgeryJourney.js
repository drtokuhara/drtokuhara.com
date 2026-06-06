'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * SURGERY JOURNEY - Cinematic scroll-driven storytelling
 * 
 * Five scenes that animate as you scroll:
 * 1. Welcome (Dr. T portrait)
 * 2. The Eye & Cataracts (clouding lens)
 * 3. Preparation (eye drops)
 * 4. Surgery (microscope, lens replacement)
 * 5. Clear Vision (light streaming through)
 * 
 * Each scene uses inline SVG with stroke-dasharray animations
 * driven by framer-motion's useScroll + useTransform.
 */

export default function SurgeryJourney() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scene transitions based on scroll progress
  // 0-20%: Scene 1 (Welcome)
  // 20-40%: Scene 2 (The Eye)
  // 40-60%: Scene 3 (Preparation)
  // 60-80%: Scene 4 (Surgery)
  // 80-100%: Scene 5 (Clear Vision)

  return (
    <div
      ref={containerRef}
      style={{
        height: '500vh', // 5x viewport height for smooth scrolling through 5 scenes
        position: 'relative',
        background: 'linear-gradient(180deg, #0a1a24 0%, #007d95 50%, #73c0d6 100%)',
      }}
    >
      {/* Sticky container that pins the viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Scene 1: Welcome */}
        <Scene1Welcome scrollYProgress={scrollYProgress} />
        
        {/* Scene 2: The Eye */}
        <Scene2Eye scrollYProgress={scrollYProgress} />
        
        {/* Scene 3: Preparation */}
        <Scene3Preparation scrollYProgress={scrollYProgress} />
        
        {/* Scene 4: Surgery */}
        <Scene4Surgery scrollYProgress={scrollYProgress} />
        
        {/* Scene 5: Clear Vision */}
        <Scene5ClearVision scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SCENE 1: WELCOME (0-20%)
   ═══════════════════════════════════════════ */
function Scene1Welcome({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.2, 0.25], [1, 1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        scale,
        y,
      }}
    >
      {/* Dr. T Portrait (simplified line art) */}
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '48px' }}
      >
        {/* Head outline */}
        <motion.circle
          cx="120"
          cy="100"
          r="70"
          stroke="#fdfcfa"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        {/* Shoulders */}
        <motion.path
          d="M 50 170 Q 120 155 190 170"
          stroke="#fdfcfa"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
        />
        {/* Simple facial features */}
        <circle cx="100" cy="95" r="3" fill="#fdfcfa" />
        <circle cx="140" cy="95" r="3" fill="#fdfcfa" />
        <motion.path
          d="M 105 120 Q 120 125 135 120"
          stroke="#fdfcfa"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
        />
      </svg>

      {/* Welcome text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          textAlign: 'center',
          color: '#fdfcfa',
          maxWidth: '700px',
          padding: '0 24px',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontFamily: 'var(--serif)',
          marginBottom: '24px',
          fontWeight: 300,
        }}>
          Welcome to Your Journey
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Let me walk you through what happens during cataract surgery - from start to finish.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCENE 2: THE EYE & CATARACTS (20-40%)
   ═══════════════════════════════════════════ */
function Scene2Eye({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.25], [0.9, 1]);
  
  // Lens cloudiness increases as you scroll
  const cloudOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 0.8]);
  
  // Light rays fade as lens clouds
  const lightOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0.2]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        scale,
      }}
    >
      {/* Eye cross-section */}
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '48px' }}
      >
        {/* Outer eye shape */}
        <ellipse cx="200" cy="150" rx="120" ry="80" stroke="#fdfcfa" strokeWidth="2" fill="none" />
        
        {/* Iris */}
        <circle cx="200" cy="150" r="50" stroke="#2e94a4" strokeWidth="2" fill="none" />
        
        {/* Pupil */}
        <circle cx="200" cy="150" r="20" fill="#0a1a24" />
        
        {/* Lens (behind iris) - becomes cloudy */}
        <ellipse cx="200" cy="150" rx="65" ry="45" fill="none" stroke="#fdfcfa" strokeWidth="1.5" strokeDasharray="4 4" />
        
        {/* Clouding overlay */}
        <motion.ellipse
          cx="200"
          cy="150"
          rx="65"
          ry="45"
          fill="#ffffff"
          style={{ opacity: cloudOpacity }}
        />
        
        {/* Light rays entering eye */}
        <motion.g style={{ opacity: lightOpacity }}>
          <line x1="50" y1="130" x2="130" y2="145" stroke="#73c0d6" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="150" x2="130" y2="150" stroke="#73c0d6" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="170" x2="130" y2="155" stroke="#73c0d6" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
        
        {/* Retina (back of eye) */}
        <path d="M 250 100 Q 270 150 250 200" stroke="#fdfcfa" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Scene text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          color: '#fdfcfa',
          maxWidth: '700px',
          padding: '0 24px',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontFamily: 'var(--serif)',
          marginBottom: '16px',
          fontWeight: 300,
        }}>
          Understanding Cataracts
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          The lens inside your eye gradually clouds over, blocking light and making vision hazy.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCENE 3: PREPARATION (40-60%)
   ═══════════════════════════════════════════ */
function Scene3Preparation({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.45], [0.9, 1]);
  
  // Drops falling animation
  const drop1Y = useTransform(scrollYProgress, [0.4, 0.55], [-50, 100]);
  const drop2Y = useTransform(scrollYProgress, [0.42, 0.57], [-50, 100]);
  const drop3Y = useTransform(scrollYProgress, [0.44, 0.59], [-50, 100]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        scale,
      }}
    >
      {/* Eye receiving drops */}
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '48px' }}
      >
        {/* Eye outline */}
        <ellipse cx="200" cy="200" rx="100" ry="60" stroke="#fdfcfa" strokeWidth="2" fill="none" />
        <circle cx="200" cy="200" r="40" stroke="#2e94a4" strokeWidth="2" fill="none" />
        <circle cx="200" cy="200" r="15" fill="#0a1a24" />
        
        {/* Drops falling */}
        <motion.ellipse cx="180" cy="0" rx="8" ry="12" fill="#73c0d6" style={{ y: drop1Y }} />
        <motion.ellipse cx="200" cy="0" rx="8" ry="12" fill="#73c0d6" style={{ y: drop2Y }} />
        <motion.ellipse cx="220" cy="0" rx="8" ry="12" fill="#73c0d6" style={{ y: drop3Y }} />
        
        {/* Splash effect on eye */}
        <motion.g opacity={useTransform(scrollYProgress, [0.5, 0.55], [0, 1])}>
          <circle cx="200" cy="200" r="50" stroke="#73c0d6" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="200" cy="200" r="65" stroke="#73c0d6" strokeWidth="1" fill="none" opacity="0.3" />
        </motion.g>
      </svg>

      {/* Scene text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          color: '#fdfcfa',
          maxWidth: '700px',
          padding: '0 24px',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontFamily: 'var(--serif)',
          marginBottom: '16px',
          fontWeight: 300,
        }}>
          Preparation
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Numbing drops keep you comfortable. Our team ensures you're ready and relaxed.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCENE 4: SURGERY (60-80%)
   ═══════════════════════════════════════════ */
function Scene4Surgery({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 0.65], [0.9, 1]);
  
  // Microscope rotation
  const rotate = useTransform(scrollYProgress, [0.6, 0.75], [0, 15]);
  
  // Lens removal + new lens placement
  const oldLensOpacity = useTransform(scrollYProgress, [0.65, 0.7], [1, 0]);
  const newLensOpacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        scale,
      }}
    >
      <svg
        width="400"
        height="350"
        viewBox="0 0 400 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '48px' }}
      >
        {/* Surgical microscope (rotating) */}
        <motion.g style={{ rotate, transformOrigin: '200px 80px' }}>
          <circle cx="200" cy="80" r="50" stroke="#fdfcfa" strokeWidth="2" fill="none" />
          <circle cx="200" cy="80" r="35" stroke="#fdfcfa" strokeWidth="1.5" fill="none" opacity="0.5" />
          <line x1="200" y1="30" x2="200" y2="10" stroke="#fdfcfa" strokeWidth="2" />
          <circle cx="200" cy="80" r="8" fill="#73c0d6" />
        </motion.g>
        
        {/* Surgical lights */}
        <circle cx="140" cy="50" r="20" fill="#73c0d6" opacity="0.3" />
        <circle cx="260" cy="50" r="20" fill="#73c0d6" opacity="0.3" />
        
        {/* Eye (simplified, viewed from above) */}
        <ellipse cx="200" cy="220" rx="80" ry="50" stroke="#fdfcfa" strokeWidth="2" fill="none" />
        <circle cx="200" cy="220" r="35" stroke="#2e94a4" strokeWidth="2" fill="none" />
        
        {/* Old cloudy lens (fading out) */}
        <motion.ellipse
          cx="200"
          cy="220"
          rx="25"
          ry="18"
          fill="#ffffff"
          opacity={oldLensOpacity}
        />
        
        {/* New clear lens (fading in) */}
        <motion.g opacity={newLensOpacity}>
          <ellipse cx="200" cy="220" rx="25" ry="18" stroke="#73c0d6" strokeWidth="2" fill="none" />
          <circle cx="200" cy="220" r="3" fill="#73c0d6" />
        </motion.g>
        
        {/* Incision indicators */}
        <line x1="160" y1="200" x2="170" y2="205" stroke="#fdfcfa" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      </svg>

      {/* Scene text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          color: '#fdfcfa',
          maxWidth: '700px',
          padding: '0 24px',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontFamily: 'var(--serif)',
          marginBottom: '16px',
          fontWeight: 300,
        }}>
          The Procedure
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Laser-assisted precision removes the cloudy lens. Your new lens unfolds into place.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCENE 5: CLEAR VISION (80-100%)
   ═══════════════════════════════════════════ */
function Scene5ClearVision({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0.8, 0.85], [0.9, 1]);
  
  // Light rays expanding
  const rayScale = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  
  // Background brightening
  const brightness = useTransform(scrollYProgress, [0.8, 1], [0.3, 1]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        scale,
      }}
    >
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: '48px' }}
      >
        {/* Eye - now clear and open */}
        <ellipse cx="200" cy="150" rx="120" ry="80" stroke="#fdfcfa" strokeWidth="2" fill="none" />
        <circle cx="200" cy="150" r="50" stroke="#2e94a4" strokeWidth="2" fill="none" />
        <circle cx="200" cy="150" r="20" fill="#0a1a24" />
        
        {/* Clear lens with sparkle */}
        <ellipse cx="200" cy="150" rx="65" ry="45" fill="none" stroke="#73c0d6" strokeWidth="2" />
        <circle cx="200" cy="150" r="4" fill="#ffffff" opacity="0.9" />
        <line x1="200" y1="145" x2="200" y2="155" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <line x1="195" y1="150" x2="205" y2="150" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        
        {/* Light rays streaming through (expanding) */}
        <motion.g style={{ scale: rayScale, transformOrigin: '200px 150px' }}>
          <line x1="50" y1="120" x2="270" y2="160" stroke="#73c0d6" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="50" y1="150" x2="270" y2="150" stroke="#73c0d6" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="50" y1="180" x2="270" y2="140" stroke="#73c0d6" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          
          {/* Additional rays */}
          <line x1="60" y1="100" x2="260" y2="170" stroke="#2e94a4" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <line x1="60" y1="200" x2="260" y2="130" stroke="#2e94a4" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </motion.g>
        
        {/* Glow effect */}
        <motion.circle cx="200" cy="150" r="100" fill="#73c0d6" opacity={useTransform(brightness, [0, 1], [0, 0.15])} />
      </svg>

      {/* Scene text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center',
          color: '#fdfcfa',
          maxWidth: '700px',
          padding: '0 24px',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontFamily: 'var(--serif)',
          marginBottom: '24px',
          fontWeight: 300,
        }}>
          Clear Vision Restored
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: '32px',
        }}>
          Colors brighten. Details sharpen. The world comes back into focus.
        </p>
        <p style={{
          fontSize: 'clamp(14px, 1.6vw, 17px)',
          lineHeight: 1.6,
          fontWeight: 300,
          opacity: 0.9,
        }}>
          Most patients see improvement within 24-48 hours, with full clarity in 4-6 weeks.
        </p>
      </motion.div>
    </motion.div>
  );
}
