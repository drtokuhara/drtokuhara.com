'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const SERIES_ARTICLES = [
  {
    number: 'I',
    title: 'What I Learned From the Surgeon Who Trained Me',
    subtitle: 'The Foundational Moment',
    href: '/insights/what-i-learned-from-the-surgeon-who-trained-me',
    excerpt: 'A dense cataract. A capsular tear. Two seconds of silence before adjustment. The moment during residency at Loma Linda that revealed the difference between competence and mastery.',
    readingTime: '8 min read',
    theme: 'Philosophy',
  },
  {
    number: 'II',
    title: 'The Capsule Is Sacred',
    subtitle: 'A Paradigm Shift in Surgery',
    href: '/insights/the-capsule-is-sacred',
    excerpt: 'Before 1984, surgeons opened the capsule with a can-opener technique. Dr. Gimbel showed the world a different way. The continuous curvilinear capsulorhexis did not just change a technique. It changed how we think about the eye.',
    readingTime: '12 min read',
    theme: 'Surgical Innovation',
  },
  {
    number: 'III',
    title: 'When Experience Speaks',
    subtitle: 'The Training You Cannot See',
    href: '/insights/when-experience-speaks',
    excerpt: 'The principles a surgeon carries into every case are invisible to patients. But they determine everything. A complicated case where decades of intergenerational surgical wisdom made all the difference.',
    readingTime: '10 min read',
    theme: 'Clinical Wisdom',
  },
  {
    number: 'IV',
    title: 'Twenty Years Forward',
    subtitle: 'Legacy and the Long View',
    href: '/insights/twenty-years-forward',
    excerpt: 'She thought it was just aging. Annual prescription changes masked what was actually happening. A reflection on gradual vision loss, silent adaptation, and the consultation that reframes decline as something treatable.',
    readingTime: '9 min read',
    theme: 'Patient Insight',
  },
];

function HeritageDivider() {
  return (
    <div className="heritage-divider">
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
        <line x1="0" y1="6" x2="50" y2="6" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="60" cy="6" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <line x1="70" y1="6" x2="120" y2="6" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export default function HeritageSeriesContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="heritage-page">
      {/* HERO */}
      <section className={`heritage-hero ${visible ? 'heritage-visible' : ''}`}>
        <div className="heritage-hero-bg" />
        <div className="heritage-hero-inner">
          <div className="heritage-hero-eyebrow">A Four-Part Series</div>
          <h1 className="heritage-hero-title">
            The Gimbel<br />Heritage Series
          </h1>
          <div className="heritage-hero-rule" />
          <p className="heritage-hero-subtitle">
            On mentorship, surgical philosophy, and the principles that shape every case.
          </p>
        </div>
      </section>

      {/* SERIES INTRODUCTION */}
      <section className="heritage-intro">
        <div className="heritage-container">
          <HeritageDivider />
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <img
              src="/media/dr-gimbel-portrait-lineart.jpg"
              alt="Dr. Howard Gimbel - line art portrait"
              style={{maxWidth: '280px', width: '100%', height: 'auto', borderRadius: '8px', opacity: 0.9}}
            />
            <p style={{fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '12px', fontStyle: 'italic'}}>Dr. Howard Gimbel</p>
          </div>
          <div className="heritage-intro-text">
            <p>
              During his residency at Loma Linda University, Dr. Keith Tokuhara trained under
              Dr. Howard Gimbel, one of the most consequential cataract surgeons of the modern era.
              Gimbel pioneered the continuous curvilinear capsulorhexis, the technique that made
              modern cataract surgery predictable and safe. His influence extends far beyond any
              single innovation.
            </p>
            <p>
              This series explores the surgical philosophy, clinical temperament, and mentorship
              principles that Dr. Tokuhara carries from that training into every case at
              Desert Vision Center. These are not just stories about the past. They are
              the foundation of a living practice.
            </p>
          </div>
          <HeritageDivider />
        </div>
      </section>

      {/* EXHIBITION CARDS */}
      <section className="heritage-exhibition">
        <div className="heritage-container">
          {SERIES_ARTICLES.map((article, index) => (
            <Link
              href={article.href}
              key={article.href}
              className={`heritage-card ${visible ? 'heritage-card-visible' : ''}`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="heritage-card-number">{article.number}</div>
              <div className="heritage-card-body">
                <span className="heritage-card-theme">{article.theme}</span>
                <h2 className="heritage-card-title">{article.title}</h2>
                <p className="heritage-card-subtitle">{article.subtitle}</p>
                <p className="heritage-card-excerpt">{article.excerpt}</p>
                <div className="heritage-card-footer">
                  <span className="heritage-card-time">{article.readingTime}</span>
                  <span className="heritage-card-read">Read this chapter <span className="heritage-arrow">&rarr;</span></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING PLAQUE */}
      <section className="heritage-closing">
        <div className="heritage-container">
          <HeritageDivider />
          <blockquote className="heritage-closing-quote">
            <p>
              &ldquo;The complication is not the problem. Your reaction to the complication is the problem.&rdquo;
            </p>
            <cite>Dr. Howard V. Gimbel</cite>
          </blockquote>
          <HeritageDivider />
          <div className="heritage-closing-cta">
            <p>This series is part of Dr. Tokuhara&rsquo;s ongoing commitment to transparency about his training, philosophy, and the principles behind every surgical decision.</p>
            <div className="heritage-closing-links">
              <Link href="/about" className="heritage-link">About Dr. Tokuhara</Link>
              <Link href="/insights" className="heritage-link">All Insights</Link>
              <Link href="/contact" className="heritage-link">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
