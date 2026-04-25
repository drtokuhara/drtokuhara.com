'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ───────────────────────────────────────────
   SCHEMA MARKUP
   ─────────────────────────────────────────── */
const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Keith Tokuhara",
  "description": "Board-certified cataract surgeon specializing in advanced cataract surgery, complex cases, and premium lens implants in Rancho Mirage, California.",
  "url": "https://drtokuhara.com",
  "image": "https://drtokuhara.com/dr-tokuhara-hero.jpg",
  "telephone": "+17603404700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "35900 Bob Hope Drive, Suite 175",
    "addressLocality": "Rancho Mirage",
    "addressRegion": "CA",
    "postalCode": "92270",
    "addressCountry": "US"
  },
  "medicalSpecialty": "Ophthalmology",
  "hospitalAffiliation": { "@type": "Hospital", "name": "Desert Vision Center" },
  "alumniOf": [{ "@type": "EducationalOrganization", "name": "Loma Linda University" }],
  "award": "Palm Springs Life Top Doctor (2019-2026)",
  "sameAs": [
    "https://x.com/DoctorTokuhara",
    "https://youtube.com/@desertvisioncenter",
    "https://desertvisioncenter.com/ophthalmologist-dr-tokuhara/"
  ]
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Desert Vision Center",
  "description": "Advanced cataract surgery and comprehensive eye care in Rancho Mirage, California. Led by fellowship-trained cataract surgeon Dr. Keith Tokuhara.",
  "url": "https://desertvisioncenter.com",
  "telephone": "+17603404700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "35900 Bob Hope Drive, Suite 175",
    "addressLocality": "Rancho Mirage",
    "addressRegion": "CA",
    "postalCode": "92270",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "33.7397", "longitude": "-116.4112" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "17:00"
  }],
  "priceRange": "$$"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a cataract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cataract is a clouding of the natural lens inside your eye. It is the most common cause of reversible vision loss and is treatable with surgery."
      }
    },
    {
      "@type": "Question",
      "name": "When is cataract surgery the right time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timing depends on how cataracts affect your daily life, not a specific number. If driving, reading, or daily activities are becoming difficult due to vision changes, it may be time to discuss surgery with your ophthalmologist."
      }
    },
    {
      "@type": "Question",
      "name": "What are my lens implant options for cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no single best lens. Options include monofocal lenses, toric lenses for astigmatism, and multifocal or extended depth of focus lenses like PanOptix and Vivity. The right choice depends on your eyes, lifestyle, and vision goals."
      }
    }
  ]
};

/* ───────────────────────────────────────────
   CONVERSATION SCREENS
   ─────────────────────────────────────────── */
const SCREENS = {
  nervous_intro: {
    step: 1, totalSteps: 4,
    paragraphs: [
      "That's completely normal.",
      "Most people I meet feel some level of this, even if they don't say it out loud.",
    ],
    question: "What part makes you most uneasy?",
    buttons: [
      { label: "The surgery itself", next: "nervous_surgery" },
      { label: "Making the wrong decision", next: "nervous_decision" },
      { label: "Something going wrong", next: "nervous_wrong" },
      { label: "Recovery / what my vision will be like", next: "nervous_recovery" },
    ],
  },
  nervous_surgery: {
    step: 2, totalSteps: 4,
    paragraphs: [
      "Yeah, that's usually the first thing people think about.",
      "The idea of eye surgery sounds intense. But what most people don't realize is how controlled and routine it actually is.",
    ],
    question: "If it helps, I can walk you through what that day actually feels like.",
    buttons: [
      { label: "Yes, show me what it's like", next: "nervous_day" },
      { label: "I'd rather understand how you keep it safe", next: "nervous_safe" },
    ],
  },
  nervous_day: {
    step: 3, totalSteps: 4,
    paragraphs: [
      "Here's what a typical surgery day looks like from your side.",
      "You arrive. No rush. We go over everything together, answer any last questions, and make sure you feel ready.",
      "The procedure itself is usually about ten minutes. Most people are surprised by that.",
      "Afterward, you rest briefly, then you go home. Many patients tell me the anticipation was the hardest part.",
    ],
    buttons: [{ label: "That's helpful, thank you", next: "nervous_close" }],
  },
  nervous_safe: {
    step: 3, totalSteps: 4,
    paragraphs: [
      "For me, safety isn't about what happens during surgery. It's everything leading up to it.",
      "I plan the right lens for your eyes specifically. I review measurements carefully. I think through your situation before we ever walk into the operating room.",
      "By the time we're in surgery, the important decisions are already made.",
    ],
    buttons: [{ label: "That makes sense", next: "nervous_close" }],
  },
  nervous_decision: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "That one comes up a lot. And honestly, it's a smart concern.",
      "People worry about choosing the wrong lens, or the wrong surgeon, or waiting too long. Sometimes all three.",
      "Here's what I tell patients: a wrong decision usually comes from not having enough information. That's something we can fix.",
      "My job is to lay out your options clearly, explain the tradeoffs, and help you feel confident in your choice. Not rushed. Not confused. Confident.",
    ],
    buttons: [{ label: "That's reassuring", next: "nervous_close" }],
  },
  nervous_wrong: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "I respect that. Complications exist in any surgery. Pretending otherwise wouldn't be honest.",
      "What I can tell you is how I approach risk. Every surgery starts with careful planning. The measurements, the lens selection, the technique. All of it tailored to your eyes.",
      "I've also spent years handling complex cases and fixing problems from other surgeries. That experience changes how I think about prevention.",
      "I won't tell you risk is zero. But minimizing it is something I think about constantly.",
    ],
    buttons: [{ label: "I appreciate the honesty", next: "nervous_close" }],
  },
  nervous_recovery: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "Most people want a clear picture of what comes next. That's smart.",
      "The first day, your vision is usually noticeably better. Not perfect yet, but different. Brighter. Sharper.",
      "Over the next few days, things continue to settle. Most patients are back to their normal routine within a week.",
      "I'll see you the next day and again in the weeks after to make sure everything is healing the way it should.",
    ],
    buttons: [{ label: "Good to know", next: "nervous_close" }],
  },
  nervous_close: {
    type: 'close', step: 4, totalSteps: 4,
    paragraphs: [
      "If you were sitting with me in clinic, this is usually the point where people start to feel a little more at ease.",
      "Not because I talked them into anything. Just because they have a clearer picture of what this actually involves.",
      "You don't have to decide anything right now. But if you want to keep this conversation going, I'm here.",
    ],
  },
  surgeon_intro: {
    step: 1, totalSteps: 5,
    paragraphs: [
      "This is the right question to be asking.",
      "Most people pick a surgeon the same way they pick a restaurant. Reviews, proximity, whoever their friend went to. That works sometimes. But your eyes deserve more thought than that.",
    ],
    question: "How are you currently thinking about it?",
    buttons: [
      { label: "Experience", next: "surgeon_experience" },
      { label: "Technology", next: "surgeon_technology" },
      { label: "Recommendations", next: "surgeon_recommendations" },
      { label: "Not sure", next: "surgeon_notsure" },
    ],
  },
  surgeon_experience: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Experience matters. But not in the way most people think.",
      "It's not just about how many surgeries someone has done. It's about the range. Have they handled complications? Do they take on difficult cases, or only straightforward ones?",
      "I've spent my career operating on complex eyes. Patients come to me after other surgeries didn't go as planned. That kind of experience shapes how I approach every case, even the routine ones.",
    ],
    buttons: [{ label: "Tell me more about how you work", next: "surgeon_diff" }],
  },
  surgeon_technology: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Technology matters, but it doesn't make decisions for you.",
      "A laser is a tool. Advanced imaging is a tool. What matters is the person interpreting the data and making the call.",
      "I use the latest technology because it helps me be more precise. But the technology isn't what makes the surgery good. The planning is. The judgment is.",
    ],
    buttons: [{ label: "Tell me more about how you work", next: "surgeon_diff" }],
  },
  surgeon_recommendations: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Recommendations are a starting point. A good one, usually.",
      "But here's the thing: your friend's eyes aren't your eyes. The surgeon who was perfect for them might not be the right fit for you.",
      "What I'd suggest: meet the surgeon. Ask questions. Pay attention to whether they listen, whether they explain things clearly, and whether you feel like a person or a number.",
    ],
    buttons: [{ label: "What makes you different?", next: "surgeon_diff" }],
  },
  surgeon_notsure: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "That's fine. Most people start without a clear framework.",
      "Here's what I'd think about if I were in your position.",
      "Does the surgeon explain things in a way I understand? Do they seem genuinely interested in my specific situation? Am I being guided toward a decision, or pressured into one?",
      "Those three questions will tell you a lot.",
    ],
    buttons: [{ label: "What makes you different?", next: "surgeon_diff" }],
  },
  surgeon_diff: {
    step: 3, totalSteps: 5,
    paragraphs: [
      "Here's what's different about how I work.",
      "I'm independent. No corporate ownership, no private equity telling me which lenses to use or how many patients to see. Every decision I make is based on what's right for you.",
      "I plan every surgery individually. Same measurements, same analysis, same attention whether it's my first case of the day or my last.",
    ],
    buttons: [
      { label: "How do you make decisions for patients?", next: "surgeon_decisions" },
      { label: "What would you do if you were me?", next: "surgeon_ifyou" },
    ],
  },
  surgeon_decisions: {
    step: 4, totalSteps: 5,
    paragraphs: [
      "It starts with your eyes, obviously. But I'm also thinking about your lifestyle. What you do for work. Whether you drive at night. What bothers you most about your vision right now.",
      "Then I look at the numbers. Measurements, corneal health, any complicating factors. I match all of that to the lens options available.",
      "By the time I make a recommendation, it's not a guess. It's a plan built around you specifically.",
    ],
    buttons: [{ label: "I like that approach", next: "surgeon_close" }],
  },
  surgeon_ifyou: {
    step: 4, totalSteps: 5,
    paragraphs: [
      "If I needed cataract surgery tomorrow, here's what I'd want.",
      "I'd want a surgeon who explains the 'why' behind every decision. Not just 'this is the best lens.' I'd want to know why it's the best lens for me.",
      "I'd want someone who has seen enough complications to know how to avoid them. And someone honest enough to tell me if something isn't a good fit.",
      "That's what I try to be for every patient.",
    ],
    buttons: [{ label: "That resonates with me", next: "surgeon_close" }],
  },
  surgeon_close: {
    type: 'close', step: 5, totalSteps: 5,
    paragraphs: [
      "You don't need the 'best surgeon.' You need the right fit.",
      "Someone who takes the time, explains clearly, and treats your eyes like they matter. Because they do.",
      "If that sounds like what you're looking for, let's talk.",
    ],
  },
};

/* ───────────────────────────────────────────
   SCROLL REVEAL HOOK
   ─────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────
   MAIN COMPONENT
   ─────────────────────────────────────────── */
export default function Home() {
  const [mode, setMode] = useState('homepage');
  const [currentScreen, setCurrentScreen] = useState(null);
  const [history, setHistory] = useState([]);
  const [animKey, setAnimKey] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (mode === 'conversation') {
      document.body.classList.add('conversation-active');
    } else {
      document.body.classList.remove('conversation-active');
    }
    return () => document.body.classList.remove('conversation-active');
  }, [mode]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  const startConversation = useCallback((screenId) => {
    setMode('conversation');
    setCurrentScreen(screenId);
    setHistory([]);
    setAnimKey(k => k + 1);
    window.scrollTo(0, 0);
  }, []);

  const goTo = useCallback((screenId) => {
    setHistory(prev => [...prev, currentScreen]);
    setAnimKey(k => k + 1);
    setCurrentScreen(screenId);
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const goBack = useCallback(() => {
    if (history.length === 0) {
      setMode('homepage');
      setCurrentScreen(null);
      setHistory([]);
      return;
    }
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setAnimKey(k => k + 1);
    setCurrentScreen(prev);
  }, [history]);

  const startOver = useCallback(() => {
    setMode('homepage');
    setCurrentScreen(null);
    setHistory([]);
    window.scrollTo(0, 0);
  }, []);

  const screen = currentScreen ? SCREENS[currentScreen] : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {mode === 'homepage' ? (
        <div className="homepage">

          {/* ═══ SECTION 1: CINEMATIC HERO ═══ */}
          <section className="lux-hero">
            <div className="lux-hero-media">
              <video
                ref={videoRef}
                className="lux-hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="/dr-tokuhara-hero.jpg"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <img
                src="/dr-tokuhara-hero.jpg"
                alt="Dr. Keith Tokuhara"
                className="lux-hero-fallback"
              />
            </div>
            <div className="lux-hero-gradient" />
            <div className="lux-hero-content">
              <p className="lux-hero-eyebrow anim-item anim-delay-0">Desert Vision Center &middot; Rancho Mirage</p>
              <h1 className="lux-hero-headline anim-item anim-delay-1">
                See your world<br />with clarity
              </h1>
              <p className="lux-hero-sub anim-item anim-delay-2">
                Advanced cataract surgery by Dr. Keith Tokuhara.
                Precision. Integrity. Your vision, reimagined.
              </p>
              <div className="lux-hero-cta anim-item anim-delay-3">
                <Link href="/contact" className="lux-btn-primary">Schedule a Consultation</Link>
                <Link href="/patient-journey" className="lux-btn-ghost">Your Journey</Link>
              </div>
              <div className="lux-hero-scroll-hint anim-item anim-delay-4">
                <span className="lux-scroll-line" />
              </div>
            </div>
          </section>

          {/* ═══ SECTION 2: LIFESTYLE PANORAMA ═══ */}
          <section className="lux-lifestyle">
            <Reveal>
              <p className="lux-lifestyle-label">Life in the Coachella Valley</p>
              <h2 className="lux-lifestyle-headline">Your vision powers<br />everything you love</h2>
            </Reveal>
            <div className="lux-lifestyle-scroll">
              <div className="lux-lifestyle-track">
                {[
                  { src: '/media/lifestyle-golf-man.jpg', alt: 'Golf in the Coachella Valley' },
                  { src: '/media/lifestyle-tennis-woman.jpg', alt: 'Tennis at a desert country club' },
                  { src: '/media/lifestyle-elpaseo-shopping.jpg', alt: 'Shopping on El Paseo' },
                  { src: '/media/lifestyle-couple-resort.jpg', alt: 'Couple at a luxury desert resort' },
                  { src: '/media/lifestyle-poolside-reading.jpg', alt: 'Reading by the pool in Palm Desert' },
                  { src: '/media/lifestyle-joshua-tree.jpg', alt: 'Hiking in Joshua Tree' },
                  { src: '/media/lifestyle-sunset-dining.jpg', alt: 'Sunset dining in the desert' },
                  { src: '/media/lifestyle-art-gallery.jpg', alt: 'Art galleries on El Paseo' },
                  { src: '/media/lifestyle-pickleball.jpg', alt: 'Pickleball in Indian Wells' },
                  { src: '/media/lifestyle-convertible.jpg', alt: 'Driving through Palm Springs' },
                  { src: '/media/lifestyle-morning-walk.jpg', alt: 'Morning walk in Rancho Mirage' },
                ].map((img, i) => (
                  <div key={i} className="lux-lifestyle-item">
                    <Image src={img.src} alt={img.alt} width={420} height={560} className="lux-lifestyle-img" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ SECTION 3: PHILOSOPHY STATEMENT ═══ */}
          <section className="lux-philosophy">
            <div className="lux-philosophy-inner">
              <Reveal>
                <div className="lux-philosophy-content">
                  <span className="lux-philosophy-mark">&ldquo;</span>
                  <p className="lux-philosophy-text">
                    I spend more time planning your surgery than most surgeons spend performing it.
                    That&rsquo;s where the outcome is really decided.
                  </p>
                  <div className="lux-philosophy-author">
                    <div className="lux-philosophy-line" />
                    <div>
                      <p className="lux-philosophy-name">Dr. Keith Tokuhara</p>
                      <p className="lux-philosophy-title">Cataract Surgeon &middot; Desert Vision Center</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═══ SECTION 4: WHAT SETS US APART ═══ */}
          <section className="lux-differentiators">
            <div className="container">
              <Reveal>
                <p className="lux-section-eyebrow">Why Desert Vision Center</p>
                <h2 className="lux-section-headline">A different standard<br />of care</h2>
              </Reveal>
              <div className="lux-diff-grid">
                <Reveal delay={0}>
                  <div className="lux-diff-card">
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>Physician Independent</h3>
                    <p>No corporate ownership. No private equity. Every recommendation is based solely on what&rsquo;s right for your eyes.</p>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="lux-diff-card">
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <h3>Unhurried by Design</h3>
                    <p>Your consultation isn&rsquo;t a conveyor belt. We take the time to explain, listen, and plan with precision.</p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="lux-diff-card">
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3>Complex Case Expertise</h3>
                    <p>Patients come to us after other surgeries didn&rsquo;t go as planned. We specialize in the cases others refer out.</p>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className="lux-diff-card">
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3>CLEAR in a Day</h3>
                    <p>Both eyes, one day. Our same-day bilateral protocol means less disruption and faster visual recovery.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ═══ SECTION 5: EDITORIAL PORTRAIT ═══ */}
          <section className="lux-editorial">
            <div className="lux-editorial-inner">
              <Reveal>
                <div className="lux-editorial-image">
                  <Image
                    src="/media/Dr-Tokuhara.jpg"
                    alt="Dr. Keith Tokuhara"
                    width={700}
                    height={900}
                    className="lux-editorial-photo"
                    priority
                  />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="lux-editorial-text">
                  <p className="lux-section-eyebrow">Meet Your Surgeon</p>
                  <h2 className="lux-editorial-headline">Keith G. Tokuhara, M.D.</h2>
                  <p className="lux-editorial-prose">
                    Fellowship-trained at Loma Linda University under the legendary Dr. Howard Gimbel. Named Top Doctor by Palm Springs Life every year since 2019. Recognized by NBC as the best cataract surgeon in the Coachella Valley.
                  </p>
                  <p className="lux-editorial-prose">
                    But what actually matters happens in the exam room. The way I listen to your concerns. The way I explain your options without jargon or sales pressure. The way I plan your surgery as if it were for my own family.
                  </p>
                  <p className="lux-editorial-prose lux-editorial-accent">
                    First surgeon in the Coachella Valley to perform Yamane secondary lens fixation, Vivity lens implantation, and PanOptix Pro trifocal implantation.
                  </p>
                  <Link href="/about" className="lux-text-link">
                    The full story <span className="lux-arrow">&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═══ SECTION 6: INTERACTIVE CONVERSATION ═══ */}
          <section className="lux-conversation-section">
            <div className="container">
              <Reveal>
                <p className="lux-section-eyebrow">Have a question?</p>
                <h2 className="lux-section-headline">Let&rsquo;s start with<br />what&rsquo;s on your mind</h2>
                <p className="lux-conversation-sub">Choose a starting point, and I&rsquo;ll walk you through it the same way I would in my office.</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="lux-conversation-cards">
                  <button className="lux-conv-card" onClick={() => startConversation('nervous_intro')}>
                    <span className="lux-conv-card-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    </span>
                    <h3>I&rsquo;m nervous about surgery</h3>
                    <p>Let me walk you through what to expect. Most patients say the anticipation was the hardest part.</p>
                  </button>
                  <button className="lux-conv-card" onClick={() => startConversation('surgeon_intro')}>
                    <span className="lux-conv-card-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    </span>
                    <h3>I&rsquo;m choosing a surgeon</h3>
                    <p>The right fit matters more than the biggest name. Let&rsquo;s talk about what to look for.</p>
                  </button>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═══ SECTION 7: PATIENT VOICES ═══ */}
          <section className="lux-testimonials">
            <div className="container">
              <Reveal>
                <p className="lux-section-eyebrow">Patient Voices</p>
              </Reveal>
              <div className="lux-testimonial-grid">
                <Reveal delay={0}>
                  <div className="lux-testimonial-card">
                    <p className="lux-testimonial-text">&ldquo;He made a complicated decision feel simple. I never once felt like a number.&rdquo;</p>
                    <p className="lux-testimonial-source">Lens implant patient</p>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="lux-testimonial-card lux-testimonial-featured">
                    <p className="lux-testimonial-text">&ldquo;I was terrified. He sat with me and explained everything until I wasn&rsquo;t anymore.&rdquo;</p>
                    <p className="lux-testimonial-source">Cataract surgery patient</p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="lux-testimonial-card">
                    <p className="lux-testimonial-text">&ldquo;Another surgeon said nothing could be done. Dr. Tokuhara fixed it.&rdquo;</p>
                    <p className="lux-testimonial-source">Complex cataract patient</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ═══ SECTION 8: EXPLORE ═══ */}
          <section className="lux-explore">
            <div className="container">
              <Reveal>
                <p className="lux-section-eyebrow">Explore</p>
                <h2 className="lux-section-headline">Dive deeper</h2>
              </Reveal>
              <div className="lux-explore-grid">
                {[
                  { href: '/cataract-surgery', title: 'Cataract Surgery', desc: 'What it is, when it makes sense, and how we do it differently.' },
                  { href: '/patient-journey', title: 'Your Journey', desc: 'Step by step, from first visit to clear vision.' },
                  { href: '/lens-implants-explained', title: 'Lens Guide', desc: 'Monofocal, toric, multifocal. Which one fits your life.' },
                  { href: '/insights', title: 'Insights', desc: 'Real stories from the clinic. How patients think, decide, and see again.' },
                  { href: '/education', title: 'Education', desc: 'Video library. Dr. Tokuhara explains, no jargon.' },
                  { href: '/about', title: 'About', desc: 'Training, philosophy, the human side.' },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <Link href={item.href} className="lux-explore-card">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="lux-explore-arrow">&rarr;</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ SECTION 9: FINAL CTA ═══ */}
          <section className="lux-final-cta">
            <div className="container">
              <Reveal>
                <h2 className="lux-final-headline">Your vision is worth<br />a real conversation</h2>
                <p className="lux-final-sub">No pressure. No obligation. Just an honest discussion about your eyes and what&rsquo;s possible.</p>
                <div className="lux-final-buttons">
                  <Link href="/contact" className="lux-btn-primary">Schedule a Consultation</Link>
                  <a href="tel:7603404700" className="lux-btn-ghost">Call 760.340.4700</a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═══ SECTION 10: PREMIUM FOOTER ═══ */}
          <footer className="lux-footer">
            <div className="container">
              <div className="lux-footer-top">
                <div className="lux-footer-brand">
                  <p className="lux-footer-name">Keith G. Tokuhara, M.D.</p>
                  <p className="lux-footer-role">Cataract Surgeon</p>
                  <p className="lux-footer-practice">Desert Vision Center</p>
                </div>
                <div className="lux-footer-contact">
                  <p>35900 Bob Hope Drive, Suite 175</p>
                  <p>Rancho Mirage, CA 92270</p>
                  <a href="tel:7603404700">760.340.4700</a>
                </div>
                <div className="lux-footer-links">
                  <Link href="/about">About</Link>
                  <Link href="/cataract-surgery">Cataract Surgery</Link>
                  <Link href="/patient-journey">Your Journey</Link>
                  <Link href="/lens-implants-explained">Lens Guide</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/education">Education</Link>
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="lux-footer-social">
                  <a href="https://x.com/doctortokuhara" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://youtube.com/@desertvisioncenter" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://instagram.com/desertvisioncenter" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://facebook.com/desertvisioncenter" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
              <div className="lux-footer-bottom">
                <p>This website is for educational purposes only and does not replace a medical consultation.</p>
                <p>&copy; {new Date().getFullYear()} Dr. Keith Tokuhara. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        /* ═══ CONVERSATION MODE ═══ */
        <div className="conversation-container">
          <button className="conv-back" onClick={goBack} aria-label="Go back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="conv-screen" key={animKey}>
            {screen?.type === 'close' ? (
              <CloseScreen screen={screen} onStartOver={startOver} />
            ) : screen ? (
              <ConversationScreen screen={screen} onChoose={goTo} />
            ) : null}
          </div>
          {screen && screen.totalSteps > 0 && (
            <div className="conv-dots">
              {Array.from({ length: screen.totalSteps }, (_, i) => (
                <span key={i} className={`conv-dot ${i + 1 <= screen.step ? 'conv-dot-filled' : ''} ${i + 1 === screen.step ? 'conv-dot-active' : ''}`} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ConversationScreen({ screen, onChoose }) {
  return (
    <div className="conv-body">
      <div className="conv-text-block">
        {screen.paragraphs.map((p, i) => (
          <p key={i} className={`conv-paragraph anim-item anim-delay-${i}`}>{p}</p>
        ))}
        {screen.question && (
          <p className={`conv-question anim-item anim-delay-${screen.paragraphs.length}`}>{screen.question}</p>
        )}
      </div>
      <div className={`conv-buttons anim-item anim-delay-${screen.paragraphs.length + (screen.question ? 1 : 0)}`}>
        {screen.buttons.map((btn, i) => (
          <button key={i} className="conv-btn" onClick={() => onChoose(btn.next)}>{btn.label}</button>
        ))}
      </div>
    </div>
  );
}

function CloseScreen({ screen, onStartOver }) {
  return (
    <div className="conv-body">
      <div className="conv-text-block">
        {screen.paragraphs.map((p, i) => (
          <p key={i} className={`conv-paragraph anim-item anim-delay-${i}`}>{p}</p>
        ))}
      </div>
      <div className={`conv-close-cta anim-item anim-delay-${screen.paragraphs.length}`}>
        <a href="tel:7603404700" className="conv-btn conv-btn-primary">Call 760.340.4700</a>
        <a href="/contact" className="conv-btn conv-btn-outline">Continue this conversation in person</a>
      </div>
      <button className={`conv-start-over anim-item anim-delay-${screen.paragraphs.length + 1}`} onClick={onStartOver}>Start over</button>
    </div>
  );
}
