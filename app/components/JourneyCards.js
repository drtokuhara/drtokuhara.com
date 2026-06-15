'use client';

import { useEffect, useRef } from 'react';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <ellipse cx="20" cy="20" rx="10" ry="6.5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="1.5" fill="white" />
      </svg>
    ),
    title: "I'm considering cataract surgery",
    desc: "You have questions about the procedure, the lenses, and what recovery looks like. Start here.",
    href: "/cataract-surgery",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <circle cx="20" cy="16" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M12 28c0-3.5 3.6-6.5 8-6.5s8 3 8 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "I'm choosing a surgeon",
    desc: "What to look for. What to ask. Why continuity and accountability matter more than advertising.",
    href: "/insights/how-to-choose-a-cataract-surgeon",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M20 14v6.5l4 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Something went wrong with my surgery",
    desc: "There is a path forward. Patients come from across the country for revision and reconstruction.",
    href: "/complex-cases",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <path d="M14 17c0 0 2.5-3 6-3s6 3 6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="17" cy="19.5" r="1" fill="white" />
        <circle cx="23" cy="19.5" r="1" fill="white" />
        <path d="M16.5 24.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "I'm nervous about surgery",
    desc: "That's completely normal. Here's what actually happens, from someone who has done this thousands of times.",
    href: "/insights/what-you-see-during-cataract-surgery",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <rect x="13" y="12" width="14" height="16" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M17 17h6M17 20.5h6M17 24h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "My doctor referred me",
    desc: "Welcome. Here's what to expect at your first visit and how we coordinate with your referring physician.",
    href: "/patient-journey",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#007d95" />
        <path d="M15 18l3 3 7-7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 26h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "I already had cataract surgery",
    desc: "Recovery questions, YAG laser, what's normal, when to call, and when you're ready: share your experience or refer a friend.",
    href: "/cataract-recovery",
  },
];

export default function JourneyCards() {
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
    <section className="journey-section" ref={sectionRef}>
      <div className="label-caps section-label reveal">Your Starting Point</div>
      <h2 className="reveal">What brought you here?</h2>
      <p className="section-desc reveal">Everyone arrives with a different question. Choose the one closest to yours.</p>

      <div className="journey-grid">
        {cards.map((card, i) => (
          <a key={i} className={`journey-card reveal reveal-delay-${i % 3}`} href={card.href}>
            <div className="journey-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <span className="card-arrow">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
