'use client';

import Link from 'next/link';

const SERIES = [
  {
    number: 'I',
    title: 'The Capsule Is Sacred',
    shortTitle: 'A Paradigm Shift',
    href: '/insights/the-capsule-is-sacred',
  },
  {
    number: 'II',
    title: 'What I Learned From the Surgeon Who Trained Me',
    shortTitle: 'The Foundational Moment',
    href: '/insights/what-i-learned-from-the-surgeon-who-trained-me',
  },
  {
    number: 'III',
    title: 'When Experience Speaks',
    shortTitle: 'Clinical Wisdom',
    href: '/insights/when-experience-speaks',
  },
  {
    number: 'IV',
    title: 'Twenty Years Forward',
    shortTitle: 'Legacy & Future',
    href: '/insights/twenty-years-forward',
  },
];

export default function HeritageSeriesNav({ currentSlug }) {
  const currentIndex = SERIES.findIndex((s) => s.href === currentSlug);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? SERIES[currentIndex - 1] : null;
  const next = currentIndex < SERIES.length - 1 ? SERIES[currentIndex + 1] : null;

  return (
    <div className="heritage-series-nav">
      <div className="heritage-series-nav-header">
        <Link href="/gimbel-heritage" className="heritage-series-nav-badge">
          The Gimbel Heritage Series
        </Link>
        <span className="heritage-series-nav-position">
          Part {SERIES[currentIndex].number} of IV
        </span>
      </div>

      <div className="heritage-series-nav-links">
        {prev && (
          <Link href={prev.href} className="heritage-series-nav-link heritage-series-nav-prev">
            <span className="heritage-series-nav-direction">&larr; Previous</span>
            <span className="heritage-series-nav-link-number">Part {prev.number}</span>
            <span className="heritage-series-nav-link-title">{prev.shortTitle}</span>
          </Link>
        )}
        {next && (
          <Link href={next.href} className="heritage-series-nav-link heritage-series-nav-next">
            <span className="heritage-series-nav-direction">Next &rarr;</span>
            <span className="heritage-series-nav-link-number">Part {next.number}</span>
            <span className="heritage-series-nav-link-title">{next.shortTitle}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
