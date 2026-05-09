'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ── Hydration guard (same pattern as ScrollAnimations.js) ── */
function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}

/* ── Animated counter ── */
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="afc-counter">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ── Floating stat badge ── */
function FloatingStat({ children, delay = 0, x = 0, y = 0 }) {
  return (
    <motion.div
      className="afc-floating-stat"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Card 1: Fellowship visual ── */
function FellowshipVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="afc-visual afc-visual-fellowship">
      {/* Central lens icon */}
      <motion.div
        className="afc-lens-icon"
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="var(--night-horizon)" strokeWidth="2" opacity="0.2" />
          <circle cx="32" cy="32" r="18" stroke="var(--oasis)" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="8" fill="var(--night-horizon)" opacity="0.15" />
          <motion.circle
            cx="32" cy="32" r="8"
            stroke="var(--night-horizon)"
            strokeWidth="2"
            strokeDasharray="50"
            strokeDashoffset={50}
            animate={inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      {/* Floating stats */}
      {inView && (
        <>
          <FloatingStat delay={0.2} x="10%" y="15%">
            <div className="afc-badge">
              <AnimatedCounter target={10000} suffix="+" />
              <span className="afc-badge-label">Surgeries</span>
            </div>
          </FloatingStat>
          <FloatingStat delay={0.5} x="58%" y="8%">
            <div className="afc-badge afc-badge-accent">
              <span className="afc-badge-value">Dual</span>
              <span className="afc-badge-label">Fellowship</span>
            </div>
          </FloatingStat>
          <FloatingStat delay={0.8} x="20%" y="65%">
            <div className="afc-badge">
              <span className="afc-badge-value">25+ yrs</span>
              <span className="afc-badge-label">Experience</span>
            </div>
          </FloatingStat>
        </>
      )}

      {/* Subtle orbital ring */}
      <motion.div
        className="afc-orbital"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

/* ── Card 2: Shield / trust visual ── */
function PhysicianOwnedVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="afc-visual afc-visual-trust">
      {/* Shield icon with pulse */}
      <motion.div
        className="afc-shield-icon"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <motion.path
            d="M36 6L10 18v18c0 16.5 11.1 31.9 26 36 14.9-4.1 26-19.5 26-36V18L36 6z"
            stroke="var(--night-horizon)"
            strokeWidth="2.5"
            fill="var(--night-horizon)"
            fillOpacity="0.06"
            strokeDasharray="200"
            strokeDashoffset={200}
            animate={inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          />
          <motion.path
            d="M28 36l5 5 11-11"
            stroke="var(--oasis)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
          />
        </svg>
        {/* Pulse ring */}
        <motion.div
          className="afc-pulse-ring"
          animate={inView ? {
            scale: [1, 1.8, 2.2],
            opacity: [0.3, 0.1, 0],
          } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
        />
      </motion.div>

      {/* Floating stats */}
      {inView && (
        <>
          <FloatingStat delay={0.3} x="5%" y="12%">
            <div className="afc-badge afc-badge-accent">
              <span className="afc-badge-value">100%</span>
              <span className="afc-badge-label">Independent</span>
            </div>
          </FloatingStat>
          <FloatingStat delay={0.6} x="55%" y="60%">
            <div className="afc-badge">
              <span className="afc-badge-value">Zero</span>
              <span className="afc-badge-label">Corporate Ties</span>
            </div>
          </FloatingStat>
        </>
      )}
    </div>
  );
}

/* ── Card 3: Timeline visual ── */
function ClearInADayVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="afc-visual afc-visual-timeline">
      {/* Clock icon */}
      <motion.div
        className="afc-clock-icon"
        initial={{ scale: 0, rotate: -90 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="24" stroke="var(--night-horizon)" strokeWidth="2" opacity="0.2" />
          <circle cx="28" cy="28" r="24" stroke="var(--oasis)" strokeWidth="2.5" strokeDasharray="151" strokeDashoffset="0" />
          <motion.line
            x1="28" y1="28" x2="28" y2="14"
            stroke="var(--night-horizon)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ rotate: 0, originX: '28px', originY: '28px' }}
            animate={inView ? { rotate: 360 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <circle cx="28" cy="28" r="3" fill="var(--night-horizon)" />
        </svg>
      </motion.div>

      {/* Timeline comparison */}
      {inView && (
        <div className="afc-timeline-compare">
          <motion.div
            className="afc-timeline-row"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="afc-timeline-label">Traditional</span>
            <div className="afc-timeline-bar afc-timeline-bar-old">
              <motion.div
                className="afc-timeline-fill-old"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
              />
              <span className="afc-timeline-value">2+ Weeks</span>
            </div>
          </motion.div>
          <motion.div
            className="afc-timeline-row"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <span className="afc-timeline-label">CLEAR</span>
            <div className="afc-timeline-bar afc-timeline-bar-new">
              <motion.div
                className="afc-timeline-fill-new"
                initial={{ width: 0 }}
                animate={{ width: '18%' }}
                transition={{ delay: 1.3, duration: 0.6, ease: 'easeOut' }}
              />
              <span className="afc-timeline-value">1 Day</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Floating stat */}
      {inView && (
        <FloatingStat delay={0.4} x="58%" y="5%">
          <div className="afc-badge afc-badge-accent">
            <span className="afc-badge-value">Both Eyes</span>
            <span className="afc-badge-label">One Session</span>
          </div>
        </FloatingStat>
      )}
    </div>
  );
}

/* ── Card data ── */
const cards = [
  {
    id: 'fellowship',
    title: 'Fellowship-Trained Expertise',
    description: 'Trained under the legendary Dr. Howard Gimbel in anterior segment surgery, with a second fellowship in retina. That rare combination means Dr. Tokuhara sees the whole eye as a connected system, not isolated parts.',
    Visual: FellowshipVisual,
  },
  {
    id: 'physician-owned',
    title: 'Physician-Owned. Patient-First.',
    description: 'No corporate parent. No private equity investors. Every recommendation comes from one place only: what is genuinely best for your eyes. That independence is increasingly rare in medicine.',
    Visual: PhysicianOwnedVisual,
  },
  {
    id: 'clear-in-a-day',
    title: 'CLEAR in a Day',
    description: 'Both eyes in one session. One recovery period. Fewer visits, faster results. For the right candidates, same-day bilateral cataract surgery transforms the entire experience.',
    Visual: ClearInADayVisual,
  },
];

/* ── Main component ── */
export default function AnimatedFeatureCards() {
  const hydrated = useHydrated();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="afc-section" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <motion.div
          className="afc-header"
          initial={hydrated ? { opacity: 0, y: 30 } : {}}
          animate={sectionInView ? { opacity: 1, y: 0 } : (hydrated ? {} : { opacity: 1, y: 0 })}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={!hydrated ? { opacity: 1, transform: 'none' } : undefined}
        >
          <p className="lux-section-eyebrow">Why Desert Vision Center</p>
          <h2 className="lux-section-headline">Built different.<br />On purpose.</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="afc-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="afc-card"
              initial={hydrated ? { opacity: 0, y: 40 } : {}}
              animate={sectionInView ? { opacity: 1, y: 0 } : (hydrated ? {} : { opacity: 1, y: 0 })}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={hydrated ? {
                y: -5,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
              } : undefined}
              style={!hydrated ? { opacity: 1, transform: 'none' } : undefined}
            >
              <div className="afc-card-visual">
                <card.Visual />
              </div>
              <div className="afc-card-content">
                <h3 className="afc-card-title">{card.title}</h3>
                <p className="afc-card-desc">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
