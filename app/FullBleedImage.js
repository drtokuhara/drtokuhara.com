'use client';

import Image from 'next/image';

/**
 * FullBleedImage - A dramatic visual break between text sections.
 *
 * Props:
 *   src        - Image path (required)
 *   alt        - Alt text (required)
 *   height     - Container height in px (default: 400)
 *   overlay    - Show gradient overlay (default: false)
 *   caption    - Optional caption text
 *   position   - CSS object-position (default: 'center')
 *   priority   - Next.js Image priority (default: false)
 */
export default function FullBleedImage({
  src,
  alt,
  height = 400,
  overlay = false,
  caption,
  position = 'center',
  priority = false,
}) {
  return (
    <div
      className="full-bleed-image"
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{
          objectFit: 'cover',
          objectPosition: position,
        }}
        sizes="100vw"
      />
      {overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,20,30,0.1) 0%, rgba(0,20,30,0.35) 100%)',
            zIndex: 1,
          }}
        />
      )}
      {caption && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px 24px',
            background: 'linear-gradient(transparent, rgba(0,20,30,0.6))',
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              margin: 0,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}
          >
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
