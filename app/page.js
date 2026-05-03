'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  StaggerChildren,
  StaggerItem,
  ParallaxImage,
  KineticText,
  CountUp,
  MagneticElement,
  ScrollProgressBar,
  GradientShift,
  VideoBackground,
  HorizontalScroll,
  BlurReveal,
  ScaleOnScroll,
  LineDraw,
} from './components/ScrollAnimations';
import TiltCard from './components/TiltCard';
import TypewriterText from './components/TypewriterText';

/* ───────────────────────────────────────────
   SCHEMA MARKUP
   ─────────────────────────────────────────── */
const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Keith Tokuhara",
  "alternateName": "Keith Tokuhara, MD",
  "description": "Fellowship-trained cataract surgeon specializing in complex and revision cataract surgery, advanced lens implants, and personalized patient care at Desert Vision Center in the Coachella Valley.",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 33.7397, "longitude": -116.4132 },
  "medicalSpecialty": "Ophthalmology",
  "hospitalAffiliation": { "@type": "Hospital", "name": "Desert Vision Center" },
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Loma Linda University" },
    { "@type": "EducationalOrganization", "name": "University of Hawaii, John A. Burns School of Medicine" },
    { "@type": "EducationalOrganization", "name": "University of California, Riverside" }
  ],
  "award": [
    "Palm Springs Life Top Doctor (2019-2026)",
    "NBC Best Cataract Surgeon in the Coachella Valley"
  ],
  "knowsAbout": [
    "Cataract Surgery",
    "Complex Cataract Surgery",
    "Lens Implant Surgery",
    "Yamane Secondary Lens Fixation",
    "Anterior Segment Surgery",
    "Toric Lens Implants",
    "Multifocal Lens Implants",
    "EDOF Lens Implants",
    "Iris Reconstruction"
  ],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Cataract Surgery", "description": "Advanced cataract surgery with premium lens implant options including monofocal, EDOF, toric, and multifocal lenses." },
    { "@type": "MedicalProcedure", "name": "CLEAR in a Day (Same-Day Bilateral Cataract Surgery)", "description": "Both eyes treated in a single visit for eligible patients, reducing recovery time and office visits." },
    { "@type": "MedicalProcedure", "name": "Complex and Revision Cataract Surgery", "description": "Specialized surgery for complications, dislocated lens implants, retained fragments, and cases referred by other surgeons." },
    { "@type": "MedicalProcedure", "name": "Yamane Secondary Lens Fixation", "description": "Sutureless technique for securing lens implants in eyes without adequate capsular support." },
    { "@type": "MedicalProcedure", "name": "Iris Reconstruction", "description": "Surgical repair of iris damage from trauma or surgical complications to restore function and reduce light sensitivity." }
  ],
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
  "description": "Physician-owned, independent eye care practice specializing in advanced cataract surgery and complex revision cases. Led by fellowship-trained cataract surgeon Dr. Keith Tokuhara in Rancho Mirage, California.",
  "url": "https://drtokuhara.com",
  "telephone": "+17603404700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "35900 Bob Hope Drive, Suite 175",
    "addressLocality": "Rancho Mirage",
    "addressRegion": "CA",
    "postalCode": "92270",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.7397, "longitude": -116.4132 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "17:00"
  }],
  "priceRange": "$$",
  "medicalSpecialty": "Ophthalmology",
  "isAcceptingNewPatients": true
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
        "text": "There is no single best lens. Options include monofocal lenses, toric lenses that reduce astigmatism, extended depth of focus (EDOF) lenses like Vivity, and multifocal lenses like PanOptix. The right choice depends on your eyes, lifestyle, and vision goals."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Desert Vision Center different from other eye care practices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desert Vision Center is physician-owned and fully independent. There is no corporate ownership or private equity influence. Dr. Tokuhara makes every recommendation based solely on what is right for each patient. He specializes in complex and revision cataract cases that other surgeons refer out, and takes an unhurried, personalized approach to every consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Can a cataract surgery complication be fixed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes. Dr. Tokuhara specializes in corrective and revision cataract surgery, including dislocated lens implants, retained lens fragments, iris damage, and failed premium lens outcomes. A thorough evaluation is the first step to understanding what is possible."
      }
    },
    {
      "@type": "Question",
      "name": "How long does cataract surgery take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The procedure itself typically takes about 10 to 15 minutes per eye. Most patients are at the surgery center for about 1 to 2 hours total, including preparation and brief recovery time before going home."
      }
    },
    {
      "@type": "Question",
      "name": "What is same-day bilateral cataract surgery (CLEAR in a Day)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CLEAR in a Day is Dr. Tokuhara's protocol for performing cataract surgery on both eyes in a single session with independent sterile setups. It reduces disruption, recovery time, and office visits for eligible patients."
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

  // PATH 3: LENS OPTIONS
  lens_intro: {
    step: 1, totalSteps: 5,
    paragraphs: [
      "Good. This is the right thing to be thinking about before surgery.",
      "There's no single 'best' lens. The right one depends on your eyes, your lifestyle, and what matters most to you. Let me help you think through it.",
    ],
    question: "What's most important to you after surgery?",
    buttons: [
      { label: "I don't want to wear glasses", next: "lens_noglasses" },
      { label: "I just want reliable, clear vision", next: "lens_reliable" },
      { label: "I read a lot and want to keep that", next: "lens_reading" },
      { label: "I'm not sure yet", next: "lens_unsure" },
    ],
  },
  lens_noglasses: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "That's the most common goal I hear. And it's achievable for many patients, but not all.",
      "Multifocal and extended depth of focus lenses can give you a range of vision: distance, intermediate, and sometimes near. Many patients rarely reach for glasses afterward.",
      "But here's what the marketing doesn't always mention: these lenses split light to create multiple focal points. That means each one gets a little less light. Some patients notice halos or rings around headlights at night, or a slight drop in contrast.",
      "For most people, the brain adapts and it stops being noticeable within weeks. For a small percentage, it stays bothersome.",
    ],
    question: "Does that tradeoff sound manageable to you?",
    buttons: [
      { label: "Yes, I'd accept that for glasses freedom", next: "lens_multifocal" },
      { label: "That concerns me", next: "lens_edof" },
    ],
  },
  lens_multifocal: {
    step: 3, totalSteps: 5,
    paragraphs: [
      "Then a multifocal lens like PanOptix or PanOptix Pro might be a great fit.",
      "These lenses give you distance, intermediate, and near vision. Most patients are thrilled. I recommend them often.",
      "What I always do is evaluate your cornea, your retina, and your overall eye health first. Not every eye is a good candidate, and I'd rather tell you that upfront than have you disappointed later.",
      "If your eyes check out, the results can genuinely change your daily life.",
    ],
    buttons: [{ label: "That sounds promising", next: "lens_close" }],
  },
  lens_edof: {
    step: 3, totalSteps: 5,
    paragraphs: [
      "That's a reasonable concern. There's a middle ground.",
      "Extended depth of focus lenses, like Vivity, stretch your range of vision from distance through arm's length. You get clear vision for driving, cooking, using your phone, and working on a computer, usually without glasses.",
      "The tradeoff is gentler. Less halo and glare than a multifocal, better contrast in dim lighting. You might still want light readers for prolonged fine print, but most patients find the balance works well.",
      "I was the first surgeon in the Coachella Valley to implant the Vivity lens. I've seen a lot of eyes do very well with it.",
    ],
    buttons: [{ label: "That sounds like a better fit for me", next: "lens_close" }],
  },
  lens_reliable: {
    step: 2, totalSteps: 4,
    paragraphs: [
      "That's a perfectly smart approach. And honestly, for a lot of patients, it's the right one.",
      "A standard monofocal lens is the most proven implant in all of ophthalmology. It gives you sharp, reliable vision at one distance, usually far away. You'd wear reading glasses for close work.",
      "There are no halos, no glare tradeoffs, no adaptation period. It just works. It's fully covered by insurance. And some of my most satisfied patients chose this lens, because it matched what they actually wanted.",
      "The fanciest lens isn't always the best lens. The best lens is the one that fits your life.",
    ],
    buttons: [{ label: "That's reassuring to hear", next: "lens_close" }],
  },
  lens_reading: {
    step: 2, totalSteps: 4,
    paragraphs: [
      "I love when patients tell me this, because it completely changes the conversation.",
      "Most surgeons default to setting your lens for distance vision. That means you see far away clearly but need reading glasses for books, menus, and your phone.",
      "But here's something nobody tells most patients: I can aim a standard monofocal lens at near vision instead. Your reading stays sharp. The tradeoff is you'd need glasses for driving and television.",
      "I had a patient, 81 years old, who almost gave up surgery entirely because she thought losing her reading vision was inevitable. Nobody had mentioned this option. She chose it, and she's back to reading for hours every day.",
    ],
    buttons: [{ label: "I had no idea that was possible", next: "lens_close" }],
  },
  lens_unsure: {
    step: 2, totalSteps: 4,
    paragraphs: [
      "That's completely fine. You don't need to walk in with a decision made.",
      "Here's what I'd suggest: think about how you actually use your eyes day to day. Do you drive a lot? Work on a computer? Read for hours? Play golf? Watch TV from across the room?",
      "When we meet, I'll ask you these questions. Then I'll look at your eye measurements, your corneal health, and any complicating factors. By the time I make a recommendation, it's specific to you.",
      "Most patients leave the consultation feeling much clearer about their options than when they walked in. That's the whole point.",
    ],
    buttons: [{ label: "That makes sense", next: "lens_close" }],
  },
  lens_close: {
    type: 'close', step: 5, totalSteps: 5,
    paragraphs: [
      "Choosing a lens can feel overwhelming when you read about it online. In person, it's a much simpler conversation.",
      "I'll show you the options, explain the tradeoffs honestly, and tell you what I'd choose for my own family member with your eyes.",
      "No pressure, no upsell. Just a plan that makes sense for how you live.",
    ],
  },

  // PATH 4: SOMETHING WENT WRONG
  wrong_intro: {
    step: 1, totalSteps: 5,
    paragraphs: [
      "I'm sorry you're dealing with this. You're not alone, and you're not wrong for looking for answers.",
      "I see patients in your situation regularly. Something happened during or after cataract surgery, and now you're not seeing the way you expected.",
    ],
    question: "Can you tell me a little more about what happened?",
    buttons: [
      { label: "My vision isn't what I was promised", next: "wrong_vision" },
      { label: "I had a complication during surgery", next: "wrong_complication" },
      { label: "My lens implant shifted or isn't right", next: "wrong_lens" },
      { label: "I was blamed for my own complication", next: "wrong_blamed" },
    ],
  },
  wrong_vision: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "This is one of the most common reasons patients seek a second opinion. And it's valid.",
      "Sometimes the issue is the lens choice. A multifocal that's causing glare. A toric that's slightly rotated. A monofocal that was aimed at a distance you didn't actually want.",
      "Sometimes the issue isn't the lens at all. It's dry eye, corneal irregularity, or something else affecting how light reaches your retina.",
      "The first step is figuring out exactly what's going on. Not guessing. Not telling you to give it more time. Actually looking.",
    ],
    buttons: [
      { label: "Can it be fixed?", next: "wrong_fixable" },
      { label: "My doctor says I just need to adjust", next: "wrong_adjust" },
    ],
  },
  wrong_complication: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Complications during cataract surgery are uncommon, but they do happen. Even to experienced surgeons.",
      "What matters most is how the complication was handled in the moment and what the plan is going forward. A torn capsule, a retained fragment, damage to the iris. These things can usually be addressed, but they require a surgeon who handles complex situations regularly.",
      "If you feel like you haven't gotten a clear explanation of what happened or what comes next, that's a problem. You deserve answers.",
    ],
    buttons: [{ label: "I want a second opinion", next: "wrong_secondopinion" }],
  },
  wrong_lens: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "Lens problems after surgery fall into a few categories.",
      "The lens can physically shift out of position, sometimes months or years later. It can be the wrong power, leaving you more nearsighted or farsighted than planned. Or it can be a lens type that isn't right for your particular eye.",
      "In many cases, the lens can be repositioned, exchanged, or supplemented with a secondary implant. I use the Yamane technique for cases where the original support structure is compromised. It's one of the things I do most.",
    ],
    buttons: [{ label: "What would you do in my case?", next: "wrong_fixable" }],
  },
  wrong_blamed: {
    step: 2, totalSteps: 5,
    paragraphs: [
      "I hear this more often than I'd like.",
      "A patient has a complication, and instead of an honest explanation, they're told it was their fault. They chose the wrong lens option. They didn't follow instructions. They should have gone with laser instead of standard.",
      "Let me be direct: complications are never the patient's fault. They're a known risk of surgery. The ethical response is honesty, compassion, and a plan to fix it. Not blame. Not deflection. Not a recommendation to just move on to the other eye.",
      "If that's what you experienced, I'm sorry. And I'd like to help.",
    ],
    buttons: [{ label: "What can be done now?", next: "wrong_fixable" }],
  },
  wrong_adjust: {
    step: 3, totalSteps: 5,
    paragraphs: [
      "Sometimes that's true. The brain does adapt to new lenses, and it can take weeks.",
      "But there's a difference between genuine adaptation and being told to accept a result that isn't right. If it's been more than a few months and you're still struggling, 'give it time' is no longer a plan.",
      "A proper evaluation can determine whether adaptation is still happening or whether there's something that should be addressed. Measurements, imaging, a thorough exam. Not just a quick look and a reassurance.",
    ],
    buttons: [{ label: "I'd like someone to really look", next: "wrong_secondopinion" }],
  },
  wrong_fixable: {
    step: 3, totalSteps: 5,
    paragraphs: [
      "In most cases, yes, something can be done.",
      "It might be a lens exchange, a lens repositioning, a secondary implant, or a different approach entirely. It depends on what's actually going on in your eye.",
      "I won't promise a specific outcome before I've examined you. But I will promise an honest conversation about what's realistic and what the options are.",
      "I specialize in exactly these situations. Patients come to me from across the country when they've been told nothing more can be done. Often, something can.",
    ],
    buttons: [{ label: "How do I get started?", next: "wrong_close" }],
  },
  wrong_secondopinion: {
    step: 4, totalSteps: 5,
    paragraphs: [
      "Getting a second opinion is not disrespectful to your original surgeon. It's your right, and it's the smart thing to do.",
      "When you come see me, I'll do a full evaluation. I'll review what happened, examine your eye, and tell you honestly what I see. If there's something I can improve, I'll explain how. If the current situation is actually the best achievable result, I'll tell you that too.",
      "No agenda. No pressure to have more surgery. Just clarity.",
    ],
    buttons: [{ label: "That's what I need", next: "wrong_close" }],
  },
  wrong_close: {
    type: 'close', step: 5, totalSteps: 5,
    paragraphs: [
      "You've been through a difficult experience. The fact that you're still looking for answers shows strength, not weakness.",
      "I handle complex and corrective cases every week. Not once a year. Every week. This is a significant part of what I do.",
      "If you're ready, let's have a conversation. No commitment beyond that.",
    ],
  },
};

/* ───────────────────────────────────────────
   MAIN COMPONENT
   ─────────────────────────────────────────── */
export default function Home() {
  const [mode, setMode] = useState('homepage');
  const [currentScreen, setCurrentScreen] = useState(null);
  const [history, setHistory] = useState([]);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (mode === 'conversation') {
      document.body.classList.add('conversation-active');
    } else {
      document.body.classList.remove('conversation-active');
    }
    return () => document.body.classList.remove('conversation-active');
  }, [mode]);

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
          <ScrollProgressBar color="var(--oasis)" height={3} />

          {/* ═══ SECTION 1: CINEMATIC HERO ═══ */}
          <VideoBackground
            src="/media/ambient-desert-golden-hour.mp4"
            poster="/dr-tokuhara-hero.jpg"
            overlayOpacity={0.55}
            overlayColor="0, 20, 30"
            className="lux-hero"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
          >
            <div className="lux-hero-content">
              <ScrollReveal direction="none" delay={0.2} once={true}>
                <p className="lux-hero-eyebrow">Desert Vision Center &middot; Rancho Mirage</p>
              </ScrollReveal>
              <KineticText
                text="See your world with clarity"
                Tag="h1"
                className="lux-hero-headline"
                mode="word"
                staggerDelay={0.06}
                threshold={0.1}
              />
              <ScrollReveal direction="up" delay={0.6} once={true}>
                <p className="lux-hero-sub">
                  Advanced cataract surgery by Dr. Keith Tokuhara.
                  Precision. Integrity. Your vision, reimagined.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.8} once={true}>
                <div className="lux-hero-cta">
                  <MagneticElement strength={0.2}>
                    <Link href="/contact" className="lux-btn-primary">Schedule a Consultation</Link>
                  </MagneticElement>
                  <Link href="/patient-journey" className="lux-btn-ghost">Your Journey</Link>
                </div>
              </ScrollReveal>
              <div className="lux-hero-scroll-hint" style={{marginTop: '48px'}}>
                <span className="lux-scroll-line" />
              </div>
            </div>
          </VideoBackground>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--oasis)" />

          {/* ═══ STATS BAR ═══ */}
          <section className="lux-stats-bar">
            <div className="container">
              <StaggerChildren className="lux-stats-grid" staggerDelay={0.15}>
                <StaggerItem className="lux-stat-item">
                  <span className="lux-stat-number">
                    <CountUp end={25} suffix="+" duration={2.5} />
                  </span>
                  <span className="lux-stat-label">Years Experience</span>
                </StaggerItem>
                <StaggerItem className="lux-stat-item">
                  <span className="lux-stat-number">
                    <CountUp end={8} suffix="" duration={2} />
                  </span>
                  <span className="lux-stat-label">Top Doctor Awards</span>
                </StaggerItem>
                <StaggerItem className="lux-stat-item">
                  <span className="lux-stat-number">
                    <CountUp end={5} suffix="" duration={2} />
                  </span>
                  <span className="lux-stat-label">Valley Firsts</span>
                </StaggerItem>
                <StaggerItem className="lux-stat-item">
                  <span className="lux-stat-number">100%</span>
                  <span className="lux-stat-label">Physician Owned</span>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--dune)" />

          {/* ═══ SECTION 2: LIFESTYLE PANORAMA ═══ */}
          <section className="lux-lifestyle">
            <ScrollReveal direction="up" once={true}>
              <p className="lux-lifestyle-label">Life in the Coachella Valley</p>
              <h2 className="lux-lifestyle-headline">Your vision powers<br />everything you love</h2>
            </ScrollReveal>
            <HorizontalScroll style={{marginTop: '40px'}}>
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
                <div key={i} className="lux-lifestyle-item" style={{minWidth: '420px', flexShrink: 0}}>
                  <Image src={img.src} alt={img.alt} width={420} height={560} className="lux-lifestyle-img" />
                </div>
              ))}
            </HorizontalScroll>
          </section>

          {/* ═══ SECTION 3: PHILOSOPHY STATEMENT ═══ */}
          <section className="lux-philosophy">
            <div className="lux-philosophy-inner">
              <BlurReveal duration={1.4}>
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
              </BlurReveal>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--dune)" />

          {/* ═══ SECTION 4: WHAT SETS US APART ═══ */}
          <section className="lux-differentiators">
            <div className="container">
              <ScrollReveal direction="up" once={true}>
                <p className="lux-section-eyebrow">Why Desert Vision Center</p>
                <h2 className="lux-section-headline">A different standard<br />of care</h2>
                <p className="lux-diff-intro">Most eye care practices look the same from the outside. The difference is in who owns the practice, who makes the decisions, and what happens when your case isn&rsquo;t straightforward.</p>
              </ScrollReveal>
              <StaggerChildren className="lux-diff-grid" staggerDelay={0.1}>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>Physician-Owned, Fully Independent</h3>
                    <p>No corporate parent. No private equity investors. No one telling Dr. Tokuhara which lenses to use or how many patients to see. Every recommendation is based solely on what is right for your eyes. That independence is increasingly rare in medicine, and it changes everything about how decisions get made.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3>Fellowship-Trained Subspecialist</h3>
                    <p>Dr. Tokuhara completed both an anterior segment fellowship under the legendary Dr. Howard Gimbel and a retina fellowship at Loma Linda University. That dual training gives him a perspective most cataract surgeons simply do not have, seeing the entire eye as a connected system rather than isolated parts.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3>The Surgeon Other Surgeons Call</h3>
                    <p>When cataract surgery goes wrong elsewhere, patients are referred to Dr. Tokuhara. Dislocated lens implants, retained fragments, iris damage, failed premium lenses. He handles these complex and revision cases every week, not once a year. That experience shapes how he approaches every surgery, even the routine ones.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3>Ethics Over Revenue</h3>
                    <p>No referral kickbacks. No assembly-line surgery. No upselling premium lenses when a standard lens is the right choice. Dr. Tokuhara built his practice on the belief that transparency and honesty are not optional in medicine. If a procedure is not right for you, he will tell you, even when it means less revenue.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 010 5H18"/><path d="M18 9a9 9 0 11-12 0"/></svg>
                    </div>
                    <h3>Recognized Excellence</h3>
                    <p>Named a Top Doctor by Palm Springs Life every year since 2019. Recognized by NBC as the best cataract surgeon in the Coachella Valley. First in the valley to perform Yamane secondary lens fixation, Vivity lens implantation, and PanOptix Pro trifocal implantation.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <h3>Concierge-Level, Unhurried Care</h3>
                    <p>Your consultation is not a 10-minute conveyor belt. Dr. Tokuhara takes the time to listen, explain your options in plain language, and answer every question until you feel genuinely confident in your decision. No rush. No pressure. Just a plan built around your life.</p>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard className="lux-diff-card" style={{position: 'relative'}}>
                    <div className="lux-diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    </div>
                    <h3>CLEAR in a Day</h3>
                    <p>Both eyes, one day. Our same-day bilateral cataract surgery protocol means less disruption, fewer office visits, and faster visual recovery. Not every patient is a candidate, but for those who are, it transforms the experience.</p>
                  </TiltCard>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--oasis)" />

          {/* ═══ SECTION 5: EDITORIAL PORTRAIT ═══ */}
          <section className="lux-editorial">
            <div className="lux-editorial-inner">
              <ScrollReveal direction="left" once={true}>
                <div className="lux-editorial-image">
                  <ParallaxImage
                    src="/media/Dr-Tokuhara.jpg"
                    alt="Dr. Keith Tokuhara"
                    speed={0.15}
                    containerStyle={{borderRadius: '16px', height: '100%', minHeight: '500px'}}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15} once={true}>
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
              </ScrollReveal>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--dune)" />

          {/* ═══ DR. T VIDEO MESSAGE ═══ */}
          <section className="lux-video-message">
            <div className="container" style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
              <ScrollReveal direction="up" once={true}>
                <p className="lux-section-eyebrow">In His Own Words</p>
                <h2 className="lux-section-headline">A message from<br />Dr. Tokuhara</h2>
                <p style={{color: 'var(--text-light)', marginBottom: '32px', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px'}}>What drives my approach to cataract surgery, and why staying at the frontier of research matters for every patient I see.</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1} once={true} scale={0.95}>
                <div style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
                }}>
                  <video
                    controls
                    playsInline
                    poster="/media/dr-t-research-message-poster.jpg"
                    preload="metadata"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  >
                    <source src="/media/dr-t-research-message.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--oasis)" />

          {/* ═══ SECTION 6: INTERACTIVE CONVERSATION ═══ */}
          <section className="lux-conversation-section">
            <div className="container">
              <ScrollReveal direction="up" once={true}>
                <p className="lux-section-eyebrow">Have a question?</p>
                <h2 className="lux-section-headline">Let&rsquo;s start with<br />what&rsquo;s on your mind</h2>
                <p className="lux-conversation-sub">Choose a starting point, and I&rsquo;ll walk you through it the same way I would in my office.</p>
              </ScrollReveal>
              <div className="lux-conversation-cards">
                {[
                  {
                    id: 'nervous_intro',
                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                    title: "I\u2019m nervous about surgery",
                    desc: "Let me walk you through what to expect. Most patients say the anticipation was the hardest part.",
                  },
                  {
                    id: 'surgeon_intro',
                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
                    title: "I\u2019m choosing a surgeon",
                    desc: "The right fit matters more than the biggest name. Let\u2019s talk about what to look for.",
                  },
                  {
                    id: 'lens_intro',
                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>,
                    title: "I want to understand my lens options",
                    desc: "Monofocal, multifocal, toric. Which one fits your life, not just your eye chart.",
                  },
                  {
                    id: 'wrong_intro',
                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>,
                    title: "Something went wrong with my surgery",
                    desc: "If you\u2019ve had a complication or your vision isn\u2019t what you were promised, let\u2019s talk about what\u2019s possible.",
                  },
                ].map((card, i) => (
                  <ScaleOnScroll key={card.id} scaleRange={[0.9, 1]} opacityRange={[0.7, 1]}>
                    <TiltCard
                      className="lux-conv-card"
                      onClick={() => startConversation(card.id)}
                      style={{position: 'relative'}}
                    >
                      <span className="lux-conv-card-icon">{card.icon}</span>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </TiltCard>
                  </ScaleOnScroll>
                ))}
              </div>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--dune)" />

          {/* ═══ SECTION 7: PATIENT VOICES ═══ */}
          <section className="lux-testimonials">
            <div className="container">
              <ScrollReveal direction="up" once={true}>
                <p className="lux-section-eyebrow">Patient Voices</p>
              </ScrollReveal>
              <StaggerChildren className="lux-testimonial-grid" staggerDelay={0.15}>
                <StaggerItem>
                  <BlurReveal duration={1}>
                    <div className="lux-testimonial-card">
                      <p className="lux-testimonial-text">&ldquo;He made a complicated decision feel simple. I never once felt like a number.&rdquo;</p>
                      <p className="lux-testimonial-source">Lens implant patient</p>
                    </div>
                  </BlurReveal>
                </StaggerItem>
                <StaggerItem>
                  <BlurReveal duration={1}>
                    <div className="lux-testimonial-card lux-testimonial-featured">
                      <p className="lux-testimonial-text">&ldquo;I was terrified. He sat with me and explained everything until I wasn&rsquo;t anymore.&rdquo;</p>
                      <p className="lux-testimonial-source">Cataract surgery patient</p>
                    </div>
                  </BlurReveal>
                </StaggerItem>
                <StaggerItem>
                  <BlurReveal duration={1}>
                    <div className="lux-testimonial-card">
                      <p className="lux-testimonial-text">&ldquo;Another surgeon said nothing could be done. Dr. Tokuhara fixed it.&rdquo;</p>
                      <p className="lux-testimonial-source">Complex cataract patient</p>
                    </div>
                  </BlurReveal>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </section>

          <LineDraw style={{margin: '60px auto', maxWidth: '200px'}} color="var(--oasis)" />

          {/* ═══ SECTION 8: EXPLORE ═══ */}
          <section className="lux-explore">
            <div className="container">
              <ScrollReveal direction="up" once={true}>
                <p className="lux-section-eyebrow">Explore</p>
                <h2 className="lux-section-headline">Dive deeper</h2>
              </ScrollReveal>
              <StaggerChildren className="lux-explore-grid" staggerDelay={0.08}>
                {[
                  { href: '/cataract-surgery', title: 'Cataract Surgery', desc: 'What it is, when it makes sense, and how we do it differently.', dir: 'left' },
                  { href: '/patient-journey', title: 'Your Journey', desc: 'Step by step, from first visit to clear vision.', dir: 'right' },
                  { href: '/lens-implants-explained', title: 'Lens Guide', desc: 'Monofocal, toric, multifocal. Which one fits your life.', dir: 'left' },
                  { href: '/insights', title: 'Insights', desc: 'Real stories from the clinic. How patients think, decide, and see again.', dir: 'right' },
                  { href: '/education', title: 'Education', desc: 'Video library. Dr. Tokuhara explains, no jargon.', dir: 'left' },
                  { href: '/about', title: 'About', desc: 'Training, philosophy, the human side.', dir: 'right' },
                ].map((item, i) => (
                  <StaggerItem key={i} direction={item.dir}>
                    <TiltCard style={{position: 'relative'}}>
                      <Link href={item.href} className="lux-explore-card" style={{display: 'block'}}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <span className="lux-explore-arrow">&rarr;</span>
                      </Link>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </section>

          {/* ═══ SECTION 9: FINAL CTA ═══ */}
          <GradientShift
            colors={['var(--night-horizon)', 'var(--oasis)', 'var(--mirage)', 'var(--night-horizon)']}
            duration={14}
            className="lux-final-cta"
            style={{padding: '100px 0'}}
          >
            <div className="container" style={{textAlign: 'center'}}>
              <KineticText
                text="Your vision is worth a real conversation"
                Tag="h2"
                className="lux-final-headline"
                mode="word"
                staggerDelay={0.05}
              />
              <ScrollReveal direction="up" delay={0.4} once={true}>
                <p className="lux-final-sub">No pressure. No obligation. Just an honest discussion about your eyes and what&rsquo;s possible.</p>
                <div className="lux-final-buttons">
                  <MagneticElement strength={0.2}>
                    <Link href="/contact" className="lux-btn-primary">Schedule a Consultation</Link>
                  </MagneticElement>
                  <a href="tel:7603404700" className="lux-btn-ghost">Call 760.340.4700</a>
                </div>
              </ScrollReveal>
            </div>
          </GradientShift>

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
          i === 0 ? (
            <TypewriterText
              key={i}
              text={p}
              speed={25}
              className={`conv-paragraph anim-item anim-delay-${i}`}
              Tag="p"
            />
          ) : (
            <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.15} once={true}>
              <p className={`conv-paragraph`}>{p}</p>
            </ScrollReveal>
          )
        ))}
        {screen.question && (
          <ScrollReveal direction="up" delay={0.3 + screen.paragraphs.length * 0.15} once={true}>
            <p className={`conv-question`}>{screen.question}</p>
          </ScrollReveal>
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
