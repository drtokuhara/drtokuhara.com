'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollAnimations';

export default function JourneyArticleCard({ title, description, href, delay = 0 }) {
  return (
    <ScrollReveal direction="up" delay={delay} once={true}>
      <Link href={href} className="journey-article-card">
        <h3 className="journey-article-title">{title}</h3>
        <p className="journey-article-desc">{description}</p>
        <span className="journey-article-arrow">→</span>
      </Link>
    </ScrollReveal>
  );
}
