'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import sitePages from '../data/site-pages';

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.45 },
    { name: 'description', weight: 0.35 },
    { name: 'category', weight: 0.2 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

const categoryColors = {
  Insight: '#007D95',
  'Complex Case': '#8B5CF6',
  Condition: '#D97706',
  Surgery: '#059669',
  Lenses: '#2563EB',
  Location: '#6B7280',
  Patient: '#EC4899',
  Heritage: '#92400E',
  General: '#6B7280',
  Home: '#6B7280',
  Page: '#6B7280',
};

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const router = useRouter();

  const fuse = useMemo(() => new Fuse(sitePages, fuseOptions), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 12).map((r) => r.item);
  }, [query, fuse]);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  const navigate = useCallback((path) => {
    close();
    router.push(path);
  }, [close, router]);

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) close();
        else open();
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, open, close]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        navigate(results[selectedIndex].path);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selectedIndex, navigate]);

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current) {
      const selected = resultsRef.current.children[selectedIndex];
      if (selected) selected.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  // Reset selection when results change
  useEffect(() => { setSelectedIndex(0); }, [results]);

  return (
    <>
      <button
        onClick={open}
        aria-label="Search site"
        title="Search (Cmd+K)"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'inherit',
          opacity: 0.85,
          transition: 'opacity 0.2s',
          fontSize: '14px',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span style={{
          fontSize: '11px',
          opacity: 0.6,
          border: '1px solid currentColor',
          borderRadius: '4px',
          padding: '1px 5px',
          lineHeight: '16px',
        }}>
          &#8984;K
        </span>
      </button>

      {isOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 20, 30, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 'min(20vh, 120px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '580px',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              margin: '0 16px',
            }}
          >
            {/* Search input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid #eee',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '12px' }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search all pages..."
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '17px',
                  fontFamily: 'inherit',
                  color: '#2c3e50',
                  background: 'transparent',
                }}
              />
              <kbd style={{
                fontSize: '11px',
                color: '#999',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '2px 6px',
                marginLeft: '8px',
              }}>ESC</kbd>
            </div>

            {/* Results */}
            <div
              ref={resultsRef}
              style={{
                maxHeight: '400px',
                overflowY: 'auto',
                padding: results.length > 0 ? '8px 0' : '0',
              }}
            >
              {query.trim() && results.length === 0 && (
                <div style={{ padding: '24px 20px', textAlign: 'center', color: '#999', fontSize: '15px' }}>
                  No pages found for "{query}"
                </div>
              )}
              {results.map((page, i) => (
                <button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    border: 'none',
                    background: i === selectedIndex ? '#f0f9fa' : 'transparent',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: categoryColors[page.category] || '#6B7280',
                    }}>
                      {page.category}
                    </span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: '#1a2a3a', lineHeight: 1.3 }}>
                    {page.title}
                  </div>
                  {page.description && (
                    <div style={{ fontSize: '13px', color: '#888', marginTop: '2px', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {page.description}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer hint */}
            {!query.trim() && (
              <div style={{ padding: '16px 20px', textAlign: 'center', color: '#aaa', fontSize: '14px' }}>
                Search {sitePages.length} pages across the entire site
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
