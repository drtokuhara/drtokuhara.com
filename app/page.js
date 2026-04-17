'use client';

import { useState, useCallback, useEffect } from 'react';

/* ───────────────────────────────────────────
   SCHEMA MARKUP (preserved from previous build)
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
  landing: {
    type: 'landing',
    step: 0,
    totalSteps: 0,
  },

  // ═══ PATH 1: NERVOUS ═══
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
    buttons: [
      { label: "That's helpful, thank you", next: "nervous_close" },
    ],
  },

  nervous_safe: {
    step: 3, totalSteps: 4,
    paragraphs: [
      "For me, safety isn't about what happens during surgery. It's everything leading up to it.",
      "I plan the right lens for your eyes specifically. I review measurements carefully. I think through your situation before we ever walk into the operating room.",
      "By the time we're in surgery, the important decisions are already made.",
    ],
    buttons: [
      { label: "That makes sense", next: "nervous_close" },
    ],
  },

  nervous_decision: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "That one comes up a lot. And honestly, it's a smart concern.",
      "People worry about choosing the wrong lens, or the wrong surgeon, or waiting too long. Sometimes all three.",
      "Here's what I tell patients: a wrong decision usually comes from not having enough information. That's something we can fix.",
      "My job is to lay out your options clearly, explain the tradeoffs, and help you feel confident in your choice. Not rushed. Not confused. Confident.",
    ],
    buttons: [
      { label: "That's reassuring", next: "nervous_close" },
    ],
  },

  nervous_wrong: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "I respect that. Complications exist in any surgery. Pretending otherwise wouldn't be honest.",
      "What I can tell you is how I approach risk. Every surgery starts with careful planning. The measurements, the lens selection, the technique. All of it tailored to your eyes.",
      "I've also spent years handling complex cases and fixing problems from other surgeries. That experience changes how I think about prevention.",
      "I won't tell you risk is zero. But minimizing it is something I think about constantly.",
    ],
    buttons: [
      { label: "I appreciate the honesty", next: "nervous_close" },
    ],
  },

  nervous_recovery: {
    step: 2, totalSteps: 3,
    paragraphs: [
      "Most people want a clear picture of what comes next. That's smart.",
      "The first day, your vision is usually noticeably better. Not perfect yet, but different. Brighter. Sharper.",
      "Over the next few days, things continue to settle. Most patients are back to their normal routine within a week.",
      "I'll see you the next day and again in the weeks after to make sure everything is healing the way it should.",
    ],
    buttons: [
      { label: "Good to know", next: "nervous_close" },
    ],
  },

  nervous_close: {
    type: 'close',
    step: 4, totalSteps: 4,
    paragraphs: [
      "If you were sitting with me in clinic, this is usually the point where people start to feel a little more at ease.",
      "Not because I talked them into anything. Just because they have a clearer picture of what this actually involves.",
      "You don't have to decide anything right now. But if you want to keep this conversation going, I'm here.",
    ],
  },

  // ═══ PATH 2: CHOOSING A SURGEON ═══
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
    buttons: [
      { label: "Tell me more about how you work", next: "surgeon_diff" },
    ],
  },

  surgeon_technology: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Technology matters, but it doesn't make decisions for you.",
      "A laser is a tool. Advanced imaging is a tool. What matters is the person interpreting the data and making the call.",
      "I use the latest technology because it helps me be more precise. But the technology isn't what makes the surgery good. The planning is. The judgment is.",
    ],
    buttons: [
      { label: "Tell me more about how you work", next: "surgeon_diff" },
    ],
  },

  surgeon_recommendations: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Recommendations are a starting point. A good one, usually.",
      "But here's the thing: your friend's eyes aren't your eyes. The surgeon who was perfect for them might not be the right fit for you.",
      "What I'd suggest: meet the surgeon. Ask questions. Pay attention to whether they listen, whether they explain things clearly, and whether you feel like a person or a number.",
    ],
    buttons: [
      { label: "What makes you different?", next: "surgeon_diff" },
    ],
  },

  surgeon_notsure: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "That's fine. Most people start without a clear framework.",
      "Here's what I'd think about if I were in your position.",
      "Does the surgeon explain things in a way I understand? Do they seem genuinely interested in my specific situation? Am I being guided toward a decision, or pressured into one?",
      "Those three questions will tell you a lot.",
    ],
    buttons: [
      { label: "What makes you different?", next: "surgeon_diff" },
    ],
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
    buttons: [
      { label: "I like that approach", next: "surgeon_close" },
    ],
  },

  surgeon_ifyou: {
    step: 4, totalSteps: 5,
    paragraphs: [
      "If I needed cataract surgery tomorrow, here's what I'd want.",
      "I'd want a surgeon who explains the 'why' behind every decision. Not just 'this is the best lens.' I'd want to know why it's the best lens for me.",
      "I'd want someone who has seen enough complications to know how to avoid them. And someone honest enough to tell me if something isn't a good fit.",
      "That's what I try to be for every patient.",
    ],
    buttons: [
      { label: "That resonates with me", next: "surgeon_close" },
    ],
  },

  surgeon_close: {
    type: 'close',
    step: 5, totalSteps: 5,
    paragraphs: [
      "You don't need the 'best surgeon.' You need the right fit.",
      "Someone who takes the time, explains clearly, and treats your eyes like they matter. Because they do.",
      "If that sounds like what you're looking for, let's talk.",
    ],
  },
};

/* ───────────────────────────────────────────
   MAIN COMPONENT
   ─────────────────────────────────────────── */
export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [history, setHistory] = useState([]);
  const [animKey, setAnimKey] = useState(0);

  // Hide nav/footer when conversation is active
  useEffect(() => {
    document.body.classList.add('conversation-active');
    return () => document.body.classList.remove('conversation-active');
  }, []);

  const goTo = useCallback((screenId) => {
    setHistory(prev => [...prev, currentScreen]);
    setAnimKey(k => k + 1);
    setCurrentScreen(screenId);
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const goBack = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setAnimKey(k => k + 1);
    setCurrentScreen(prev);
  }, [history]);

  const startOver = useCallback(() => {
    setHistory([]);
    setAnimKey(k => k + 1);
    setCurrentScreen('landing');
  }, []);

  const screen = SCREENS[currentScreen];

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="conversation-container">
        {/* Back button */}
        {history.length > 0 && (
          <button className="conv-back" onClick={goBack} aria-label="Go back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Screen content */}
        <div className="conv-screen" key={animKey}>
          {screen.type === 'landing' ? (
            <LandingScreen onChoose={goTo} />
          ) : screen.type === 'close' ? (
            <CloseScreen screen={screen} onStartOver={startOver} />
          ) : (
            <ConversationScreen screen={screen} onChoose={goTo} />
          )}
        </div>

        {/* Progress dots */}
        {screen.totalSteps > 0 && (
          <div className="conv-dots">
            {Array.from({ length: screen.totalSteps }, (_, i) => (
              <span
                key={i}
                className={`conv-dot ${i + 1 <= screen.step ? 'conv-dot-filled' : ''} ${i + 1 === screen.step ? 'conv-dot-active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/* ───────────────────────────────────────────
   LANDING SCREEN
   ─────────────────────────────────────────── */
function LandingScreen({ onChoose }) {
  return (
    <div className="conv-landing">
      <div className="conv-landing-photo">
        <img
          src="/dr-tokuhara-hero.jpg"
          alt="Dr. Keith Tokuhara"
          className="conv-hero-img"
        />
      </div>

      <div className="conv-landing-content">
        <h1 className="conv-headline anim-item">Thinking about cataract surgery?</h1>
        <p className="conv-subtext anim-item anim-delay-1">
          Most people have questions. Some have concerns.
        </p>
        <p className="conv-subtext anim-item anim-delay-2">
          This isn't a typical medical website. It's a way to understand how I think, and to help you think through this decision.
        </p>

        <p className="conv-question anim-item anim-delay-3">What's on your mind right now?</p>

        <div className="conv-buttons anim-item anim-delay-4">
          <button className="conv-btn" onClick={() => onChoose('nervous_intro')}>
            I'm nervous about surgery
          </button>
          <button className="conv-btn" onClick={() => onChoose('surgeon_intro')}>
            I'm trying to choose the right surgeon
          </button>
          <button className="conv-btn conv-btn-disabled" disabled>
            I want to understand my options
            <span className="conv-btn-badge">Coming soon</span>
          </button>
          <button className="conv-btn conv-btn-disabled" disabled>
            I've already decided, I just want to feel comfortable
            <span className="conv-btn-badge">Coming soon</span>
          </button>
        </div>
      </div>

      <p className="conv-landing-credit anim-item anim-delay-5">
        Dr. Keith Tokuhara, M.D. &middot; Desert Vision Center &middot; Rancho Mirage, CA
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────
   CONVERSATION SCREEN (mid-path)
   ─────────────────────────────────────────── */
function ConversationScreen({ screen, onChoose }) {
  return (
    <div className="conv-body">
      <div className="conv-text-block">
        {screen.paragraphs.map((p, i) => (
          <p key={i} className={`conv-paragraph anim-item anim-delay-${i}`}>{p}</p>
        ))}
        {screen.question && (
          <p className={`conv-question anim-item anim-delay-${screen.paragraphs.length}`}>
            {screen.question}
          </p>
        )}
      </div>

      <div className={`conv-buttons anim-item anim-delay-${screen.paragraphs.length + (screen.question ? 1 : 0)}`}>
        {screen.buttons.map((btn, i) => (
          <button
            key={i}
            className="conv-btn"
            onClick={() => onChoose(btn.next)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   CLOSE SCREEN (end of path)
   ─────────────────────────────────────────── */
function CloseScreen({ screen, onStartOver }) {
  return (
    <div className="conv-body">
      <div className="conv-text-block">
        {screen.paragraphs.map((p, i) => (
          <p key={i} className={`conv-paragraph anim-item anim-delay-${i}`}>{p}</p>
        ))}
      </div>

      <div className={`conv-close-cta anim-item anim-delay-${screen.paragraphs.length}`}>
        <a href="tel:7603404700" className="conv-btn conv-btn-primary">
          Call 760.340.4700
        </a>
        <a href="/contact" className="conv-btn conv-btn-outline">
          Continue this conversation in person
        </a>
      </div>

      <button
        className={`conv-start-over anim-item anim-delay-${screen.paragraphs.length + 1}`}
        onClick={onStartOver}
      >
        Start over
      </button>
    </div>
  );
}
