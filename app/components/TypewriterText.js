'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * TypewriterText - Text that types itself character by character.
 * Used in the conversation section to simulate Dr. T speaking.
 */
export default function TypewriterText({
  text,
  speed = 30,        // ms per character
  delay = 0,         // ms before starting
  className = '',
  onComplete,
  trigger = true,    // external trigger control
  cursor = true,
  Tag = 'p',
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || !trigger) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, trigger, delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {displayed}
      {cursor && started && !done && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: 'var(--oasis)',
            marginLeft: '2px',
            animation: 'cursorBlink 1s step-end infinite',
            verticalAlign: 'text-bottom',
          }}
        />
      )}
    </Tag>
  );
}
