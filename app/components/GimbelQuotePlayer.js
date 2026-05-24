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

export default function GimbelQuotePlayer({ src, quote, attribution = "Dr. Howard V. Gimbel", source, duration }) {
  const hydrated = useHydrated();
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const smoothedRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const playingRef = useRef(false);

  const BAR_COUNT = 24;
  const BAR_WIDTH = 3;
  const BAR_GAP = 3;
  const MAX_BAR_HEIGHT = 48;

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
    analyser.smoothingTimeConstant = 0.8;

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
    const h = MAX_BAR_HEIGHT;

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

    const totalBarWidth = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * BAR_GAP;
    const startX = (w - totalBarWidth) / 2;

    for (let i = 0; i < BAR_COUNT; i++) {
      const freqIndex = Math.floor((i / BAR_COUNT) * (freqData ? freqData.length * 0.5 : 32)) + 4;

      let targetHeight;
      if (isPlaying && freqData) {
        const value = freqData[Math.min(freqIndex, (freqData ? freqData.length : 1) - 1)] / 255;
        targetHeight = value * h * 0.8;
        targetHeight = Math.max(targetHeight, 4);
      } else {
        targetHeight = 4 + Math.random() * 2;
      }

      const smoothFactor = isPlaying ? 0.3 : 0.05;
      smoothed[i] += (targetHeight - smoothed[i]) * smoothFactor;

      const barHeight = Math.max(smoothed[i], 3);
      const x = startX + i * (BAR_WIDTH + BAR_GAP);
      const y = (h - barHeight) / 2;

      ctx.fillStyle = isPlaying 
        ? `rgba(115, 192, 214, ${0.7 + (barHeight / h) * 0.3})` 
        : 'rgba(115, 192, 214, 0.3)';
      ctx.fillRect(x, y, BAR_WIDTH, barHeight);
    }

    if (isPlaying) {
      animFrameRef.current = requestAnimationFrame(renderCanvas);
    } else {
      animFrameRef.current = setTimeout(() => {
        requestAnimationFrame(renderCanvas);
      }, 1000 / 10);
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
    <div style={{
      margin: '48px 0',
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(10, 26, 36, 0.95) 0%, rgba(0, 125, 149, 0.85) 100%)',
      borderRadius: '16px',
      border: '1px solid rgba(115, 192, 214, 0.25)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Large decorative quotation mark */}
      <div style={{
        position: 'absolute',
        top: '-12px',
        left: '20px',
        fontSize: '120px',
        fontFamily: 'Georgia, serif',
        color: 'rgba(115, 192, 214, 0.15)',
        lineHeight: '1',
        pointerEvents: 'none',
      }}>
        "
      </div>

      {/* Quote text */}
      <blockquote style={{
        margin: '0 0 24px 0',
        padding: '0',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontStyle: 'italic',
          lineHeight: '1.6',
          color: 'rgba(255, 255, 255, 0.95)',
          margin: '0',
        }}>
          {quote}
        </p>
      </blockquote>

      {/* Waveform visualization */}
      <div style={{
        margin: '24px 0',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <canvas 
          ref={canvasRef} 
          style={{
            width: '100%',
            height: '48px',
            maxWidth: '400px',
          }}
        />
      </div>

      {/* Play button and controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <button
          onClick={togglePlay}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            background: playing 
              ? 'rgba(115, 192, 214, 0.2)' 
              : 'rgba(115, 192, 214, 0.15)',
            border: '1px solid rgba(115, 192, 214, 0.4)',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.9rem',
            fontWeight: '500',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(115, 192, 214, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(115, 192, 214, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = playing 
              ? 'rgba(115, 192, 214, 0.2)' 
              : 'rgba(115, 192, 214, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(115, 192, 214, 0.4)';
          }}
        >
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="3" width="4" height="14" rx="1" fill="currentColor"/>
              <rect x="12" y="3" width="4" height="14" rx="1" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 3L17 10L5 17V3Z" fill="currentColor"/>
            </svg>
          )}
          <span>{playing ? 'Pause' : 'Play Recording'}</span>
        </button>

        {/* Duration */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.85rem',
          fontFamily: 'Montserrat, sans-serif',
          fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{formatTime(currentTime)}</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
          <span>{formatTime(totalDuration || duration)}</span>
        </div>
      </div>

      {/* Progress bar */}
      {playing && (
        <div style={{
          marginTop: '16px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #2e94a4, #73c0d6)',
            transition: 'width 0.1s linear',
          }} />
        </div>
      )}

      {/* Attribution */}
      <div style={{
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.9rem',
          fontWeight: '600',
          color: 'rgba(255, 255, 255, 0.9)',
          letterSpacing: '0.3px',
        }}>
          {attribution}
        </div>
        {source && (
          <div style={{
            marginTop: '4px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
          }}>
            {source}
          </div>
        )}
      </div>
    </div>
  );
}
