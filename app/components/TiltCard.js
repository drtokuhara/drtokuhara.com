'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * TiltCard - 3D perspective tilt that follows cursor position on hover.
 * Creates a premium, tactile feel for cards and interactive elements.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,        // degrees
  scale = 1.02,
  glare = true,
  glareOpacity = 0.15,
  perspective = 1000,
  style = {},
  onClick,
}) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * maxTilt * -2,
      y: (x - 0.5) * maxTilt * 2,
    });
    setGlarePos({ x: x * 100, y: y * 100 });
  }, [maxTilt]);

  const handleEnter = useCallback(() => setIsHovered(true), []);
  const handleLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
      {glare && isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
}
