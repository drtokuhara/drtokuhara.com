'use client';

import { useEffect, useRef } from 'react';

/**
 * CursorSpotlight - Adds a subtle radial light glow that follows the cursor.
 * Creates a premium, interactive feel. The spotlight is a soft radial gradient
 * that illuminates content as you move over it.
 */
export default function CursorSpotlight({
  color = 'rgba(46, 148, 164, 0.08)',
  size = 600,
  enabled = true,
}) {
  const spotRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Disable on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const spot = spotRef.current;
    if (!spot) return;

    let rafId;
    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };

    const animate = () => {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      spot.style.background = `radial-gradient(${size}px circle at ${currentX}px ${currentY}px, ${color}, transparent 70%)`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled, color, size]);

  if (!enabled) return null;

  return (
    <div
      ref={spotRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'opacity 0.3s',
      }}
      aria-hidden="true"
    />
  );
}
