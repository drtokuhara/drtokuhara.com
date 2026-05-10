'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

function formatTime(seconds) {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Color constants
const NIGHT_HORIZON = '#007d95';
const OASIS = '#2e94a4';
const GOLD_TIP = '#dcb9a5';

// Convert hex to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Interpolate between two colors
function lerpColor(c1, c2, t) {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

const nightRgb = hexToRgb(NIGHT_HORIZON);
const oasisRgb = hexToRgb(OASIS);
const goldRgb = hexToRgb(GOLD_TIP);

export default function AudioNarration({ src, title, duration }) {
  const hydrated = useHydrated();
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(null);
  const animFrameRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const smoothedRef = useRef(null);
  const breathRef = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const playingRef = useRef(false);

  const BAR_COUNT = 64;
  const BAR_WIDTH = 4;
  const BAR_GAP = 2;
  const CANVAS_HEIGHT = 80;
  const REFLECTION_OPACITY = 0.3;
  const REFLECTION_HEIGHT_RATIO = 0.35;

  // Initialize smoothed bars
  if (!smoothedRef.current) {
    smoothedRef.current = new Float32Array(BAR_COUNT).fill(0);
  }

  // Setup AudioContext and analyser on first play
  const ensureAudioContext = useCallback(() => {
    if (audioCtxRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.75;

    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }, []);

  // Canvas rendering
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = CANVAS_HEIGHT;

    // Set canvas size for retina
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    // Get frequency data
    const analyser = analyserRef.current;
    const smoothed = smoothedRef.current;
    const isPlaying = playingRef.current;

    let freqData = null;
    if (analyser) {
      freqData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqData);
    }

    // Update breath phase for idle animation
    breathRef.current += isPlaying ? 0.03 : 0.015;

    // Calculate total bar area width
    const totalBarWidth = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * BAR_GAP;
    const startX = (w - totalBarWidth) / 2;

    // Main visualization area (top portion for bars, bottom for reflection)
    const mainHeight = h * (1 - REFLECTION_HEIGHT_RATIO);
    const maxBarHeight = mainHeight * 0.85;

    // Vignette overlay
    const vignetteGrad = ctx.createLinearGradient(0, 0, w, 0);
    vignetteGrad.addColorStop(0, 'rgba(10, 20, 25, 0.15)');
    vignetteGrad.addColorStop(0.15, 'rgba(10, 20, 25, 0)');
    vignetteGrad.addColorStop(0.85, 'rgba(10, 20, 25, 0)');
    vignetteGrad.addColorStop(1, 'rgba(10, 20, 25, 0.15)');

    // Draw bars (symmetrical: center-out arrangement)
    const halfBars = BAR_COUNT / 2;

    for (let i = 0; i < BAR_COUNT; i++) {
      // Map bar index to frequency: center bars = low freq, edge bars = high freq
      const distFromCenter = Math.abs(i - halfBars + 0.5) / halfBars;
      const freqIndex = Math.floor(distFromCenter * (freqData ? freqData.length * 0.8 : 64));

      let targetHeight;
      if (isPlaying && freqData) {
        const value = freqData[Math.min(freqIndex, (freqData ? freqData.length : 1) - 1)] / 255;
        targetHeight = value * maxBarHeight;
        // Minimum height when playing
        targetHeight = Math.max(targetHeight, 2);
      } else {
        // Breathing animation when idle
        const phase = breathRef.current + i * 0.12;
        const breath = Math.sin(phase) * 0.5 + 0.5;
        const centerFade = 1 - distFromCenter * 0.5;
        targetHeight = 2 + breath * 4 * centerFade;
      }

      // Smooth interpolation
      const smoothFactor = isPlaying ? 0.3 : 0.08;
      smoothed[i] += (targetHeight - smoothed[i]) * smoothFactor;

      const barHeight = Math.max(smoothed[i], 1.5);
      const x = startX + i * (BAR_WIDTH + BAR_GAP);
      const y = mainHeight - barHeight;

      // Color gradient: Night Horizon at edges, Oasis at center
      const centerT = 1 - distFromCenter;
      const baseColor = lerpColor(nightRgb, oasisRgb, centerT);

      // Gold tip for loud bars
      const loudness = barHeight / maxBarHeight;
      const tipBlend = Math.max(0, (loudness - 0.6) / 0.4);
      const barColor = lerpColor(baseColor, goldRgb, tipBlend * 0.7);

      // Bar gradient (bottom to top)
      const barGrad = ctx.createLinearGradient(x, mainHeight, x, y);
      barGrad.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.6)`);
      barGrad.addColorStop(0.5, `rgba(${barColor.r}, ${barColor.g}, ${barColor.b}, 0.9)`);
      barGrad.addColorStop(1, `rgba(${barColor.r}, ${barColor.g}, ${barColor.b}, 1)`);

      // Glow effect for active bars
      if (isPlaying && loudness > 0.3) {
        ctx.shadowColor = `rgba(${oasisRgb.r}, ${oasisRgb.g}, ${oasisRgb.b}, ${loudness * 0.4})`;
        ctx.shadowBlur = loudness * 8;
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      // Draw main bar with rounded top
      ctx.beginPath();
      const radius = BAR_WIDTH / 2;
      ctx.moveTo(x, mainHeight);
      ctx.lineTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.arcTo(x + BAR_WIDTH, y, x + BAR_WIDTH, y + radius, radius);
      ctx.lineTo(x + BAR_WIDTH, mainHeight);
      ctx.closePath();
      ctx.fillStyle = barGrad;
      ctx.fill();

      // Reset shadow for reflection
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Reflection (mirrored below)
      const reflectionHeight = barHeight * REFLECTION_HEIGHT_RATIO;
      const reflY = mainHeight + 1;
      const reflGrad = ctx.createLinearGradient(x, reflY, x, reflY + reflectionHeight);
      reflGrad.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${REFLECTION_OPACITY * 0.7})`);
      reflGrad.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);

      ctx.beginPath();
      ctx.rect(x, reflY, BAR_WIDTH, reflectionHeight);
      ctx.fillStyle = reflGrad;
      ctx.fill();
    }

    // Apply vignette
    ctx.fillStyle = vignetteGrad;
    ctx.fillRect(0, 0, w, h);

    // Schedule next frame
    const fps = isPlaying ? 60 : 15;
    if (isPlaying) {
      animFrameRef.current = requestAnimationFrame(renderCanvas);
    } else {
      animFrameRef.current = setTimeout(() => {
        requestAnimationFrame(renderCanvas);
      }, 1000 / fps);
    }
  }, []);

  // Start/stop render loop
  useEffect(() => {
    playingRef.current = playing;
    // Always run the render loop for breathing animation
    renderCanvas();
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        clearTimeout(animFrameRef.current);
      }
    };
  }, [playing, renderCanvas]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        // Force re-render on resize
        canvas.width = 0;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Time tracking
  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
    if (playingRef.current) {
      requestAnimationFrame(updateProgress);
    }
  }, []);

  useEffect(() => {
    if (playing) {
      requestAnimationFrame(updateProgress);
    }
  }, [playing, updateProgress]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    ensureAudioContext();
    // Resume AudioContext if suspended (autoplay policy)
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setCurrentTime(audio.currentTime);
  };

  // Touch scrub support
  const handleProgressTouch = (e) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !e.touches[0]) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.touches[0].clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setCurrentTime(audio.currentTime);
  };

  // Cleanup AudioContext on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        clearTimeout(animFrameRef.current);
      }
    };
  }, []);

  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;

  if (!hydrated) return null;

  return (
    <div className="audio-narration-wrap">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="audio-narration">
        <div className="audio-narration-inner">
          {/* Header row */}
          <div className="audio-narration-header">
            <span className="audio-narration-label">
              Hear Dr. Tokuhara explain this topic
            </span>
          </div>

          {/* Title + play row */}
          <div className="audio-narration-top">
            <button
              className={`audio-play-btn${playing ? ' audio-play-btn--active' : ''}`}
              onClick={togglePlay}
              aria-label={playing ? 'Pause narration' : 'Play narration'}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
                  <rect x="11.5" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M5.5 3L16.5 10L5.5 17V3Z" fill="currentColor"/>
                </svg>
              )}
            </button>
            <span className="audio-narration-title">{title}</span>
          </div>

          {/* Waveform canvas */}
          <div className="audio-waveform-container">
            <canvas
              ref={canvasRef}
              className="audio-waveform-canvas"
            />
          </div>

          {/* Progress bar */}
          <div
            className="audio-progress"
            ref={progressRef}
            onClick={handleProgressClick}
            onTouchMove={handleProgressTouch}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="audio-progress-fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="audio-progress-thumb"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Time display */}
          <div className="audio-time-row">
            <span className="audio-time">{formatTime(currentTime)}</span>
            <span className="audio-time">{formatTime(totalDuration || duration)}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .audio-narration-wrap {
          max-width: 720px;
          margin: 0 auto 2rem;
          padding: 0 1.25rem;
        }
        .audio-narration {
          background: linear-gradient(145deg, #0d1f26 0%, #132b33 50%, #0f2229 100%);
          border: 1px solid rgba(0, 125, 149, 0.2);
          border-radius: 16px;
          padding: 1.1rem 1.35rem 0.9rem;
          box-shadow:
            0 4px 24px rgba(0, 20, 30, 0.35),
            0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }
        .audio-narration-inner {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .audio-narration-header {
          display: flex;
          align-items: center;
        }
        .audio-narration-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(46, 148, 164, 0.7);
          font-weight: 600;
        }
        .audio-narration-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .audio-play-btn {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #007d95 0%, #2e94a4 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 10px rgba(0, 125, 149, 0.3);
          position: relative;
        }
        .audio-play-btn--active {
          box-shadow: 0 2px 16px rgba(0, 125, 149, 0.5), 0 0 20px rgba(46, 148, 164, 0.2);
        }
        .audio-play-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 2px 16px rgba(0, 125, 149, 0.45);
        }
        .audio-play-btn:active {
          transform: scale(0.97);
        }
        .audio-narration-title {
          font-size: 0.93rem;
          font-weight: 600;
          color: #e8f0f2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          min-width: 0;
        }
        .audio-waveform-container {
          width: 100%;
          height: 80px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }
        .audio-waveform-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
        .audio-progress {
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
          overflow: visible;
          transition: height 0.15s ease;
        }
        .audio-progress:hover {
          height: 6px;
        }
        .audio-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #007d95, #2e94a4);
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .audio-progress-thumb {
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          background: #fff;
          border: 2px solid #2e94a4;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
          transition: left 0.1s linear, opacity 0.15s ease;
          pointer-events: none;
          opacity: 0;
        }
        .audio-progress:hover .audio-progress-thumb {
          opacity: 1;
        }
        .audio-time-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .audio-time {
          font-size: 0.7rem;
          color: rgba(200, 220, 225, 0.5);
          font-variant-numeric: tabular-nums;
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .audio-narration-wrap {
            padding: 0 1rem;
          }
          .audio-narration {
            padding: 0.85rem 1rem 0.7rem;
            border-radius: 14px;
          }
          .audio-play-btn {
            width: 38px;
            height: 38px;
          }
          .audio-narration-title {
            font-size: 0.85rem;
          }
          .audio-waveform-container {
            height: 64px;
          }
        }
      `}</style>
    </div>
  );
}
