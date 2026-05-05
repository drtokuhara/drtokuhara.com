'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValueEvent } from 'framer-motion';

/* ═══════════════════════════════════════════
   SCROLL REVEAL - Fade + slide on viewport entry
   ═══════════════════════════════════════════ */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',   // up | down | left | right | none
  distance = 60,
  duration = 0.9,
  once = true,
  threshold = 0.15,
  scale = 1,          // starting scale (e.g., 0.95 for subtle zoom)
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold, margin: '0px 0px -40px 0px' });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const dir = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x: dir.x, y: dir.y, scale }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: dir.x, y: dir.y, scale }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   STAGGER CHILDREN - Container that staggers child reveals
   ═══════════════════════════════════════════ */
export function StaggerChildren({
  children,
  className = '',
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 40,
  style = {},
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };
  const dir = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, x: dir.x, y: dir.y },
        visible: {
          opacity: 1, x: 0, y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   PARALLAX SECTION - Scroll-linked vertical offset
   ═══════════════════════════════════════════ */
export function ParallaxSection({
  children,
  className = '',
  speed = 0.3,        // 0 = static, 1 = full scroll speed
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PARALLAX IMAGE - Image with parallax offset inside container
   ═══════════════════════════════════════════ */
export function ParallaxImage({
  src,
  alt = '',
  className = '',
  speed = 0.2,
  containerStyle = {},
  imageStyle = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: 'hidden', position: 'relative', ...containerStyle }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          position: 'relative',
          top: '-10%',
          y,
          ...imageStyle,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   KINETIC TEXT - Text that reveals word by word or char by char
   ═══════════════════════════════════════════ */
export function KineticText({
  text,
  className = '',
  mode = 'word',        // word | char
  staggerDelay = 0.04,
  threshold = 0.3,
  once = true,
  Tag = 'h2',
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const units = mode === 'char' ? text.split('') : text.split(' ');

  return (
    <Tag ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
        style={{ display: 'inline' }}
      >
        {units.map((unit, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {unit}{mode === 'word' ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ═══════════════════════════════════════════
   COUNT UP - Animated number counter
   ═══════════════════════════════════════════ */
export function CountUp({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  threshold = 0.5,
  once = true,
  decimals = 0,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
      const current = start + (end - start) * eased;
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, start, end, duration, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════
   FLOATING ELEMENT - Gentle perpetual float animation
   ═══════════════════════════════════════════ */
export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 6,
  delay = 0,
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   MAGNETIC ELEMENT - Follows cursor on hover
   ═══════════════════════════════════════════ */
export function MagneticElement({
  children,
  className = '',
  strength = 0.3,
  style = {},
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  }, [strength]);

  const handleLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════ */
export function ScrollProgressBar({ color = 'var(--oasis)', height = 3 }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height,
        background: color,
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
      }}
    />
  );
}

/* ═══════════════════════════════════════════
   GRADIENT SHIFT - Animated background gradient
   ═══════════════════════════════════════════ */
export function GradientShift({
  children,
  className = '',
  colors = ['#007d95', '#2e94a4', '#73c0d6', '#007d95'],
  duration = 12,
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={{
        backgroundSize: '300% 300%',
        backgroundImage: `linear-gradient(-45deg, ${colors.join(', ')})`,
        ...style,
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   VIDEO BACKGROUND - Looping ambient video with overlay
   ═══════════════════════════════════════════ */
export function VideoBackground({
  src,
  poster,
  children,
  className = '',
  overlayOpacity = 0.5,
  overlayColor = '0, 20, 30',
  gradient = true,
  style = {},
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient
            ? `linear-gradient(180deg, rgba(${overlayColor}, ${overlayOpacity * 0.7}) 0%, rgba(${overlayColor}, ${overlayOpacity}) 100%)`
            : `rgba(${overlayColor}, ${overlayOpacity})`,
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HORIZONTAL SCROLL SECTION
   ═══════════════════════════════════════════ */
export function HorizontalScroll({
  children,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  return (
    <div ref={containerRef} className={className} style={{ height: '150vh', position: 'relative', ...style }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <motion.div style={{ display: 'flex', gap: '32px', x, paddingLeft: '5vw', paddingRight: '5vw' }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   BLUR REVEAL - Text that un-blurs on scroll
   ═══════════════════════════════════════════ */
export function BlurReveal({
  children,
  className = '',
  threshold = 0.3,
  once = true,
  duration = 1.2,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SCALE ON SCROLL - Element scales based on scroll position
   ═══════════════════════════════════════════ */
export function ScaleOnScroll({
  children,
  className = '',
  scaleRange = [0.85, 1],
  opacityRange = [0.6, 1],
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ scale, opacity, ...style }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   LINE DRAW - SVG line that draws itself on scroll
   ═══════════════════════════════════════════ */
export function LineDraw({
  className = '',
  color = 'var(--oasis)',
  thickness = 2,
  threshold = 0.3,
  once = true,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.div
        style={{
          height: thickness,
          background: color,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
