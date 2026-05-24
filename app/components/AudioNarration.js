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

export default function AudioNarration({ src, title, duration, integrated = true }) {
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
  const [hovering, setHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const playingRef = useRef(false);

  const BAR_COUNT = 5;
  const BAR_WIDTH = 3;
  const BAR_GAP = 2;
  const PILL_BAR_HEIGHT = 16;

  if (!smoothedRef.current) {
    smoothedRef.current = new Float32Array(BAR_COUNT).fill(0);
  }

  const ensureAudioContext = useCallback(() => {
    if (audioCtxRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.75;

    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }, []);

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = PILL_BAR_HEIGHT;

    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const analyser = analyserRef.current;
    const smoothed = smoothedRef.current;
    const isPlaying = playingRef.current;

    let freqData = null;
    if (analyser) {
      freqData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqData);
    }

    breathRef.current += isPlaying ? 0.04 : 0.02;

    const totalBarWidth = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * BAR_GAP;
    const startX = (w - totalBarWidth) / 2;
    const maxBarHeight = h * 0.9;

    for (let i = 0; i < BAR_COUNT; i++) {
      const freqIndex = Math.floor((i / BAR_COUNT) * (freqData ? freqData.length * 0.6 : 32)) + 2;

      let targetHeight;
      if (isPlaying && freqData) {
        const value = freqData[Math.min(freqIndex, (freqData ? freqData.length : 1) - 1)] / 255;
        targetHeight = value * maxBarHeight;
        targetHeight = Math.max(targetHeight, 3);
      } else {
        const phase = breathRef.current + i * 0.6;
        const breath = Math.sin(phase) * 0.5 + 0.5;
        targetHeight = 3 + breath * 4;
      }

      const smoothFactor = isPlaying ? 0.35 : 0.08;
      smoothed[i] += (targetHeight - smoothed[i]) * smoothFactor;

      const barHeight = Math.max(smoothed[i], 2);
      const x = startX + i * (BAR_WIDTH + BAR_GAP);
      const y = (h - barHeight) / 2;

      ctx.beginPath();
      const radius = BAR_WIDTH / 2;
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + BAR_WIDTH, y, x + BAR_WIDTH, y + barHeight, radius);
      ctx.arcTo(x + BAR_WIDTH, y + barHeight, x, y + barHeight, radius);
      ctx.arcTo(x, y + barHeight, x, y, radius);
      ctx.arcTo(x, y, x + BAR_WIDTH, y, radius);
      ctx.closePath();
      ctx.fillStyle = isPlaying ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)';
      ctx.fill();
    }

    if (isPlaying) {
      animFrameRef.current = requestAnimationFrame(renderCanvas);
    } else {
      animFrameRef.current = setTimeout(() => {
        requestAnimationFrame(renderCanvas);
      }, 1000 / 15);
    }
  }, []);

  useEffect(() => {
    playingRef.current = playing;
    renderCanvas();
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        clearTimeout(animFrameRef.current);
      }
    };
  }, [playing, renderCanvas]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) canvas.width = 0;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
    if (playingRef.current) requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    if (playing) requestAnimationFrame(updateProgress);
  }, [playing, updateProgress]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) setTotalDuration(audioRef.current.duration);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    ensureAudioContext();
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

  const handleProgressTouch = (e) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !e.touches[0]) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.touches[0].clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setCurrentTime(audio.currentTime);
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        clearTimeout(animFrameRef.current);
      }
    };
  }, []);

  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;

  if (!hydrated) return null;

  return (
    <div className="audio-pill-wrapper">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <button
        className={`audio-pill${playing ? ' audio-pill--playing' : ''}`}
        onClick={togglePlay}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        aria-label={playing ? 'Pause narration' : 'Listen to Dr. Tokuhara'}
      >
        <span className="audio-pill-icon">
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
              <rect x="11.5" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M5.5 3L16.5 10L5.5 17V3Z" fill="currentColor"/>
            </svg>
          )}
        </span>

        {playing ? (
          <>
            <canvas ref={canvasRef} className="audio-pill-bars" />
            <span className="audio-pill-time">
              {formatTime(currentTime)} / {formatTime(totalDuration || duration)}
            </span>
          </>
        ) : (
          <span className="audio-pill-label">Listen to Dr. Tokuhara</span>
        )}
      </button>

      {playing && (
        <div
          className="audio-pill-progress"
          ref={progressRef}
          onClick={handleProgressClick}
          onTouchMove={handleProgressTouch}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="audio-pill-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <style jsx>{`
        .audio-pill-wrapper {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .audio-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(0, 125, 149, 0.25);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: rgba(255, 255, 255, 0.95);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          white-space: nowrap;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
        }
        .audio-pill:hover {
          background: rgba(0, 125, 149, 0.4);
          border-color: rgba(255, 255, 255, 0.25);
          transform: scale(1.02);
          box-shadow: 0 6px 32px rgba(0, 0, 0, 0.2);
        }
        .audio-pill:active {
          transform: scale(0.98);
        }
        .audio-pill--playing {
          background: rgba(0, 125, 149, 0.35);
          border-color: rgba(115, 192, 214, 0.3);
          padding: 10px 16px;
        }
        .audio-pill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          flex-shrink: 0;
        }
        .audio-pill-label {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .audio-pill-bars {
          width: 32px;
          height: 16px;
          display: block;
          flex-shrink: 0;
        }
        .audio-pill-time {
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          font-variant-numeric: tabular-nums;
          flex-shrink: 0;
        }
        .audio-pill-progress {
          width: 180px;
          height: 3px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 2px;
          cursor: pointer;
          transition: height 0.15s ease;
          overflow: hidden;
        }
        .audio-pill-progress:hover {
          height: 5px;
        }
        .audio-pill-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2e94a4, #73c0d6);
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        @media (max-width: 600px) {
          .audio-pill-wrapper {
            bottom: 12px;
          }
          .audio-pill {
            padding: 8px 16px;
            gap: 8px;
          }
          .audio-pill-label {
            font-size: 0.72rem;
          }
          .audio-pill-icon {
            width: 22px;
            height: 22px;
          }
          .audio-pill-progress {
            width: 140px;
          }
        }
      `}</style>
    </div>
  );
}
