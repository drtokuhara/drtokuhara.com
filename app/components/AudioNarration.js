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

export default function AudioNarration({ src, title, duration }) {
  const hydrated = useHydrated();
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const animFrameRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [barWidths, setBarWidths] = useState([3, 5, 2, 6, 4, 3, 5, 2]);

  // Animated equalizer bars
  useEffect(() => {
    if (!playing) return;
    let frame;
    const animate = () => {
      setBarWidths(prev =>
        prev.map(() => Math.random() * 14 + 2)
      );
      frame = requestAnimationFrame(animate);
    };
    // Slow it down to ~15fps
    const interval = setInterval(() => {
      frame = requestAnimationFrame(animate);
    }, 70);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(frame);
    };
  }, [playing]);

  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
    if (playing) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [playing]);

  useEffect(() => {
    if (playing) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [playing, updateProgress]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
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

  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;

  if (!hydrated) return null;

  return (
    <div className="audio-narration-wrap">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="audio-narration">
        <div className="audio-narration-inner">
          <div className="audio-narration-top">
            <button
              className="audio-play-btn"
              onClick={togglePlay}
              aria-label={playing ? 'Pause narration' : 'Play narration'}
            >
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
                  <rect x="11.5" y="3" width="4.5" height="14" rx="1.2" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 3.5L16.5 10L5 16.5V3.5Z" fill="currentColor"/>
                </svg>
              )}
            </button>

            <div className="audio-narration-info">
              <span className="audio-narration-label">
                Hear Dr. Tokuhara explain this topic
              </span>
              <span className="audio-narration-title">{title}</span>
            </div>

            {/* Equalizer bars */}
            <div className="audio-eq" aria-hidden="true">
              {barWidths.map((h, i) => (
                <div
                  key={i}
                  className="audio-eq-bar"
                  style={{
                    height: playing ? `${h}px` : '3px',
                    transition: playing ? 'height 0.08s ease' : 'height 0.4s ease',
                  }}
                />
              ))}
            </div>

            <span className="audio-time">
              {formatTime(currentTime)} / {formatTime(totalDuration || duration)}
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="audio-progress"
            ref={progressRef}
            onClick={handleProgressClick}
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
        </div>
      </div>

      <style jsx>{`
        .audio-narration-wrap {
          max-width: 720px;
          margin: 0 auto 2rem;
          padding: 0 1.25rem;
        }
        .audio-narration {
          background: linear-gradient(135deg, rgba(0, 125, 149, 0.06) 0%, rgba(46, 148, 164, 0.04) 100%);
          border: 1px solid rgba(0, 125, 149, 0.15);
          border-radius: 14px;
          padding: 1rem 1.25rem 0.75rem;
          box-shadow: 0 2px 12px rgba(0, 20, 30, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          backdrop-filter: blur(8px);
        }
        .audio-narration-inner {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .audio-narration-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .audio-play-btn {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: var(--night-horizon, #007d95);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          box-shadow: 0 2px 8px rgba(0, 125, 149, 0.25);
        }
        .audio-play-btn:hover {
          background: var(--oasis, #2e94a4);
          transform: scale(1.06);
        }
        .audio-play-btn:active {
          transform: scale(0.97);
        }
        .audio-narration-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .audio-narration-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--oasis, #2e94a4);
          font-weight: 600;
          opacity: 0.85;
        }
        .audio-narration-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #1a2a32;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .audio-eq {
          display: flex;
          align-items: flex-end;
          gap: 2.5px;
          height: 18px;
          flex-shrink: 0;
          padding: 0 0.25rem;
        }
        .audio-eq-bar {
          width: 3px;
          background: var(--oasis, #2e94a4);
          border-radius: 1.5px;
          opacity: 0.7;
        }
        .audio-time {
          font-size: 0.75rem;
          color: #5a7a8a;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .audio-progress {
          height: 6px;
          background: rgba(0, 125, 149, 0.12);
          border-radius: 3px;
          cursor: pointer;
          position: relative;
          overflow: visible;
        }
        .audio-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--night-horizon, #007d95), var(--oasis, #2e94a4));
          border-radius: 3px;
          transition: width 0.1s linear;
        }
        .audio-progress-thumb {
          position: absolute;
          top: 50%;
          width: 14px;
          height: 14px;
          background: #fff;
          border: 2px solid var(--oasis, #2e94a4);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
          transition: left 0.1s linear;
          pointer-events: none;
        }
        @media (max-width: 600px) {
          .audio-narration-wrap {
            padding: 0 1rem;
          }
          .audio-narration {
            padding: 0.75rem 1rem 0.6rem;
          }
          .audio-play-btn {
            width: 40px;
            height: 40px;
          }
          .audio-narration-title {
            font-size: 0.85rem;
          }
          .audio-eq {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
