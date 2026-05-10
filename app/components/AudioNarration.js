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

  const BAR_COUNT = 48;
  const BAR_WIDTH = 3;
  const BAR_GAP = 2;
  const CANVAS_HEIGHT = 40;

  if (!smoothedRef.current) {
    smoothedRef.current = new Float32Array(BAR_COUNT).fill(0);
  }

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

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = CANVAS_HEIGHT;

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

    breathRef.current += isPlaying ? 0.03 : 0.015;

    const totalBarWidth = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * BAR_GAP;
    const startX = (w - totalBarWidth) / 2;
    const maxBarHeight = h * 0.85;
    const halfBars = BAR_COUNT / 2;

    for (let i = 0; i < BAR_COUNT; i++) {
      const distFromCenter = Math.abs(i - halfBars + 0.5) / halfBars;
      const freqIndex = Math.floor(distFromCenter * (freqData ? freqData.length * 0.8 : 64));

      let targetHeight;
      if (isPlaying && freqData) {
        const value = freqData[Math.min(freqIndex, (freqData ? freqData.length : 1) - 1)] / 255;
        targetHeight = value * maxBarHeight;
        targetHeight = Math.max(targetHeight, 2);
      } else {
        const phase = breathRef.current + i * 0.12;
        const breath = Math.sin(phase) * 0.5 + 0.5;
        const centerFade = 1 - distFromCenter * 0.5;
        targetHeight = 1.5 + breath * 3 * centerFade;
      }

      const smoothFactor = isPlaying ? 0.3 : 0.08;
      smoothed[i] += (targetHeight - smoothed[i]) * smoothFactor;

      const barHeight = Math.max(smoothed[i], 1);
      const x = startX + i * (BAR_WIDTH + BAR_GAP);
      const y = h - barHeight;

      // White bars with varying opacity
      const centerT = 1 - distFromCenter;
      const baseAlpha = isPlaying ? 0.3 + centerT * 0.5 : 0.12 + centerT * 0.15;
      const loudness = barHeight / maxBarHeight;
      const alpha = Math.min(1, baseAlpha + (isPlaying ? loudness * 0.3 : 0));

      // Subtle glow for active bars
      if (isPlaying && loudness > 0.4) {
        ctx.shadowColor = `rgba(255, 255, 255, ${loudness * 0.2})`;
        ctx.shadowBlur = loudness * 4;
      } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      // Rounded bars
      ctx.beginPath();
      const radius = BAR_WIDTH / 2;
      ctx.moveTo(x, h);
      ctx.lineTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      ctx.arcTo(x + BAR_WIDTH, y, x + BAR_WIDTH, y + radius, radius);
      ctx.lineTo(x + BAR_WIDTH, h);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }

    const fps = isPlaying ? 60 : 15;
    if (isPlaying) {
      animFrameRef.current = requestAnimationFrame(renderCanvas);
    } else {
      animFrameRef.current = setTimeout(() => {
        requestAnimationFrame(renderCanvas);
      }, 1000 / fps);
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
  const showTime = playing || hovering;

  if (!hydrated) return null;

  return (
    <div
      className="audio-integrated"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="audio-integrated-controls">
        <button
          className={`audio-integrated-play${playing ? ' audio-integrated-play--active' : ''}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pause narration' : 'Play narration'}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
              <rect x="11.5" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M5.5 3L16.5 10L5.5 17V3Z" fill="currentColor"/>
            </svg>
          )}
        </button>

        <div className="audio-integrated-waveform">
          <canvas
            ref={canvasRef}
            className="audio-integrated-canvas"
          />
        </div>

        <span className={`audio-integrated-time${showTime ? ' audio-integrated-time--visible' : ''}`}>
          {formatTime(currentTime)} / {formatTime(totalDuration || duration)}
        </span>
      </div>

      <div
        className="audio-integrated-progress"
        ref={progressRef}
        onClick={handleProgressClick}
        onTouchMove={handleProgressTouch}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="audio-integrated-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <style jsx>{`
        .audio-integrated {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 0;
        }
        .audio-integrated-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 8px;
          max-width: 600px;
          margin: 0 auto;
        }
        .audio-integrated-play {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .audio-integrated-play:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
        .audio-integrated-play:active {
          transform: scale(0.95);
        }
        .audio-integrated-play--active {
          background: rgba(255, 255, 255, 0.18);
        }
        .audio-integrated-waveform {
          flex: 1;
          height: 40px;
          min-width: 0;
          overflow: hidden;
        }
        .audio-integrated-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
        .audio-integrated-time {
          flex-shrink: 0;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0);
          font-variant-numeric: tabular-nums;
          font-weight: 500;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .audio-integrated-time--visible {
          color: rgba(255, 255, 255, 0.5);
        }
        .audio-integrated-progress {
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          position: relative;
          transition: height 0.15s ease;
        }
        .audio-integrated-progress:hover {
          height: 4px;
        }
        .audio-integrated-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2e94a4, #3db8c9);
          transition: width 0.1s linear;
        }
        @media (max-width: 600px) {
          .audio-integrated-controls {
            padding: 8px 16px 6px;
            gap: 10px;
          }
          .audio-integrated-play {
            width: 32px;
            height: 32px;
          }
          .audio-integrated-waveform {
            height: 32px;
          }
          .audio-integrated-time {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
