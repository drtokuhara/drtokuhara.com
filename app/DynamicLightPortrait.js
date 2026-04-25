'use client';

import { useRef, useCallback, useState, useEffect } from 'react';

/**
 * DynamicLightPortrait - Mouse-tracked lighting effect using a normal map.
 * The user's cursor acts as a light source, creating real-time shadows
 * and highlights on the portrait image.
 */
export default function DynamicLightPortrait({ src, normalSrc, alt, width, height }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const normalRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.3 }); // default light from upper center

  // Load both images
  useEffect(() => {
    const img = new Image();
    const nml = new Image();
    let loadCount = 0;

    const onLoad = () => {
      loadCount++;
      if (loadCount === 2) {
        imgRef.current = img;
        normalRef.current = nml;
        setLoaded(true);
      }
    };

    img.crossOrigin = 'anonymous';
    nml.crossOrigin = 'anonymous';
    img.onload = onLoad;
    nml.onload = onLoad;
    img.src = src;
    nml.src = normalSrc;

    return () => {
      img.onload = null;
      nml.onload = null;
    };
  }, [src, normalSrc]);

  // Render lighting
  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgRef.current;
    const nml = normalRef.current;

    // Set canvas size to match image
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    canvas.width = w;
    canvas.height = h;

    // Get pixel data from both images
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    const tmpCtx = tmpCanvas.getContext('2d');

    // Draw and get base image data
    tmpCtx.drawImage(img, 0, 0, w, h);
    const imgData = tmpCtx.getImageData(0, 0, w, h);

    // Draw and get normal map data
    tmpCtx.clearRect(0, 0, w, h);
    tmpCtx.drawImage(nml, 0, 0, w, h);
    const nmlData = tmpCtx.getImageData(0, 0, w, h);

    const render = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Light direction from mouse position
      const lx = (mx - 0.5) * 2; // -1 to 1
      const ly = (my - 0.5) * 2; // -1 to 1
      const lz = 0.6; // height of light
      const len = Math.sqrt(lx * lx + ly * ly + lz * lz);
      const lightDir = [lx / len, ly / len, lz / len];

      const output = ctx.createImageData(w, h);
      const od = output.data;
      const id = imgData.data;
      const nd = nmlData.data;

      for (let i = 0; i < id.length; i += 4) {
        // Decode normal from normal map (0-255 → -1 to 1)
        const nx = (nd[i] / 255) * 2 - 1;     // R → x
        const ny = (nd[i + 1] / 255) * 2 - 1;  // G → y
        const nz = nd[i + 2] / 255;             // B → z

        // Dot product for diffuse lighting
        let dot = nx * lightDir[0] + ny * lightDir[1] + nz * lightDir[2];
        dot = Math.max(0.15, Math.min(1.0, dot * 0.7 + 0.55)); // bias toward lit, soft shadows

        // Apply lighting to base color
        od[i]     = Math.min(255, id[i] * dot);
        od[i + 1] = Math.min(255, id[i + 1] * dot);
        od[i + 2] = Math.min(255, id[i + 2] * dot);
        od[i + 3] = id[i + 3]; // alpha
      }

      ctx.putImageData(output, 0, 0);
      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [loaded]);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Reset to default ambient light
    mouseRef.current = { x: 0.5, y: 0.3 };
  }, []);

  return (
    <div
      ref={containerRef}
      className="dynamic-light-portrait"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'crosshair',
      }}
    >
      {/* Fallback static image while loading */}
      {!loaded && (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 'auto',
          display: loaded ? 'block' : 'none',
          borderRadius: '16px',
        }}
      />
      {loaded && (
        <div
          className="light-hint"
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(0,0,0,0.3)',
            padding: '4px 10px',
            borderRadius: '20px',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ✦ move cursor to adjust lighting
        </div>
      )}
    </div>
  );
}
