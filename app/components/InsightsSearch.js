'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fuse from 'fuse.js';

const CATEGORIES = [
  { label: 'All', value: null },
  { label: 'Before You Decide', value: 'Before You Decide' },
  { label: 'Surgery & Recovery', value: 'Surgery & Recovery' },
  { label: 'Lens Options', value: 'Lens Options' },
  { label: 'Real Patient Stories', value: 'Real Patient Stories' },
  { label: 'Honest Answers', value: 'Honest Answers' },
];

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.35 },
    { name: 'cluster', weight: 0.25 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

export default function InsightsSearch({ insights }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const fuse = useMemo(() => new Fuse(insights, fuseOptions), [insights]);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(() => setDebouncedQuery(value), 200);
    setDebounceTimer(timer);
  }, [debounceTimer]);

  const results = useMemo(() => {
    let items = insights;

    // Apply category filter first
    if (activeCategory) {
      items = items.filter((i) => i.cluster === activeCategory);
    }

    // Then apply search
    if (debouncedQuery.trim()) {
      if (activeCategory) {
        // Search within the filtered category
        const categoryFuse = new Fuse(items, fuseOptions);
        items = categoryFuse.search(debouncedQuery).map((r) => r.item);
      } else {
        items = fuse.search(debouncedQuery).map((r) => r.item);
      }
    }

    return items;
  }, [debouncedQuery, activeCategory, fuse, insights]);

  const resultCount = results.length;
  const isFiltered = debouncedQuery.trim().length > 0 || activeCategory !== null;

  return (
    <>
      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '32px',
        maxWidth: '800px',
        margin: '0 auto 32px',
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(cat.value)}
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              fontFamily: 'inherit',
              fontWeight: activeCategory === cat.value ? 600 : 400,
              color: activeCategory === cat.value ? '#fff' : '#2c3e50',
              background: activeCategory === cat.value ? '#00313d' : '#f5f5f5',
              border: activeCategory === cat.value ? '1px solid #00313d' : '1px solid #ddd',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto 40px',
        position: 'relative',
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: 'absolute',
              left: '16px',
              pointerEvents: 'none',
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search stories and guides..."
            aria-label="Search patient stories and guides"
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              fontSize: '16px',
              fontFamily: 'inherit',
              border: '1.5px solid #ddd',
              borderRadius: '10px',
              outline: 'none',
              background: '#fff',
              color: '#2c3e50',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#007D95';
              e.target.style.boxShadow = '0 0 0 3px rgba(0, 125, 149, 0.12)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd';
              e.target.style.boxShadow = 'none';
            }}
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setDebouncedQuery('');
              }}
              aria-label="Clear search"
              style={{
                position: 'absolute',
                right: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#999',
                fontSize: '18px',
                padding: '4px 8px',
                lineHeight: 1,
              }}
            >
              &#x2715;
            </button>
          )}
        </div>
        {isFiltered && (
          <p style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            marginTop: '12px',
          }}>
            {resultCount === 0
              ? 'No matching stories found. Try a different search or category.'
              : `Showing ${resultCount} of ${insights.length} stories`}
          </p>
        )}
      </div>

      <div className="insights-grid">
        {results.map((insight) => (
          <div key={insight.slug}>
            <Link href={insight.href || `/insights/${insight.slug}`} className="insight-card insight-card-visual">
              <div className="insight-card-image">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={600}
                  height={340}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    borderRadius: '12px 12px 0 0',
                  }}
                />
              </div>
              <div className="insight-card-body">
                <span className="insight-cluster">{insight.cluster}</span>
                <h2 className="insight-card-title">{insight.title}</h2>
                <p className="insight-card-desc">{insight.description}</p>
                <span className="insight-date">{insight.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
