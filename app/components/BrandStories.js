'use client';

import { useEffect, useRef } from 'react';

const stories = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path className="icon-stroke" d="M11 3L3 7v6c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V7l-8-4z" stroke="#007d95" strokeWidth="1.5" fill="none" />
        <path className="icon-fill" d="M11 8v4M11 14h.01" stroke="#007d95" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Built in the Desert. Not Imported In.",
    href: "/our-story/built-in-the-desert",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path className="icon-stroke" d="M16 8c0-2.8-2.2-5-5-5S6 5.2 6 8c0 4 5 9 5 9s5-5 5-9z" stroke="#007d95" strokeWidth="1.5" fill="none" />
        <circle className="icon-stroke" cx="11" cy="8" r="2" stroke="#007d95" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "98% Patient Referred",
    href: "/our-story/patient-referred",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle className="icon-stroke" cx="11" cy="8" r="4" stroke="#007d95" strokeWidth="1.5" fill="none" />
        <path className="icon-stroke" d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#007d95" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "One Surgeon. One Accountability.",
    href: "/our-story/one-surgeon",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect className="icon-stroke" x="3" y="5" width="16" height="12" rx="2" stroke="#007d95" strokeWidth="1.5" fill="none" />
        <path className="icon-stroke" d="M7 9h8M7 12.5h5" stroke="#007d95" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Independent. Physician-Owned.",
    href: "/our-story/independent",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path className="icon-stroke" d="M11 3l2.5 5 5.5.8-4 3.9.9 5.5L11 15.7 6.1 18.2l.9-5.5-4-3.9 5.5-.8L11 3z" stroke="#007d95" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "Trusted Nationally for Complex Cases",
    href: "/complex-cases",
  },
];

export default function BrandStories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="brand-stories-section" ref={sectionRef}>
      <div className="label-caps section-label reveal">Our Story</div>
      <h2 className="reveal">What we stand for</h2>

      <div className="stories-grid">
        {stories.map((story, i) => (
          <a key={i} className={`story-card reveal reveal-delay-${i}`} href={story.href}>
            <div className="story-icon-wrap">{story.icon}</div>
            <h4>{story.title}</h4>
            <span className="story-link">Read the story &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
