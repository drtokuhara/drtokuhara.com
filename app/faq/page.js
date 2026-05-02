import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Frequently Asked Questions About Cataract Surgery',
  description: 'Dr. Tokuhara answers the most common questions about cataracts, cataract surgery, lens implants, recovery, and what makes Desert Vision Center different. Plain language, no jargon.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Dr. Keith Tokuhara',
    description: 'Answers to the most common questions about cataracts, surgery, lens implants, and recovery from Dr. Keith Tokuhara at Desert Vision Center.',
    url: 'https://drtokuhara.com/faq',
  },
};

const faqData = [
  {
    category: 'About Cataracts',
    id: 'cataracts',
    questions: [
      {
        q: 'What is a cataract?',
        a: 'A cataract is a clouding of the natural lens inside your eye. That lens sits behind your pupil, and when you are young it is crystal clear. Over time, proteins in the lens break down and clump together, making it cloudy. Your vision gets hazy, colors look washed out, and glare becomes a real problem, especially at night. Almost everyone develops cataracts eventually. It is the most common cause of treatable vision loss in the world.',
      },
      {
        q: 'What causes cataracts?',
        a: 'Aging is the biggest factor. Most cataracts develop gradually after age 50 or 60. But other things can contribute: UV exposure from years in the sun, diabetes, certain medications like steroids, previous eye surgery or trauma, and genetics. Living in a place like the Coachella Valley with intense sun exposure can accelerate things. Wearing good UV-blocking sunglasses your whole life is one of the best things you can do.',
      },
      {
        q: 'Can cataracts come back after surgery?',
        a: 'No. Once a cataract is removed, it cannot come back. The natural lens is gone and replaced with a clear artificial lens that does not cloud over. However, there is something called a posterior capsule opacity, where the thin membrane behind the lens implant can get hazy months or years later. Some people call this a "secondary cataract," but it is not actually a cataract. It is treated with a quick, painless laser procedure in the office that takes about 30 seconds.',
      },
      {
        q: 'How do I know when it is time for surgery?',
        a: 'There is no magic number or test result that tells you it is time. The real question is whether your cataracts are getting in the way of the things you want to do. Are you having trouble driving at night? Struggling to read? Finding it harder to see clearly in bright light? If your quality of life is being affected, it is worth having a conversation. But there is no rush, and I will never pressure you into surgery before you are ready.',
      },
    ],
  },
  {
    category: 'About Surgery',
    id: 'surgery',
    questions: [
      {
        q: 'How long does cataract surgery take?',
        a: 'The actual procedure takes about 10 to 15 minutes per eye. You will be at the surgery center for a few hours total, including prep time and a brief recovery period afterward. Most patients are surprised by how quick the whole experience is.',
      },
      {
        q: 'Will I be awake during surgery?',
        a: 'Yes, you are awake, but your eye is completely numbed with drops so you will not feel pain. You may see some light and movement, but nothing sharp or detailed. Many patients also receive a mild sedative to help them relax. It is much calmer than people expect. Most patients tell me afterward that the anticipation was far worse than the actual experience.',
      },
      {
        q: 'Does cataract surgery hurt?',
        a: 'No. Your eye is numbed with drops before we start, so you should not feel pain during the procedure. You might feel some light pressure or a sensation of water, but that is about it. After surgery, some patients notice mild scratchiness or a slight foreign body sensation for a day or two. That is normal and goes away quickly.',
      },
      {
        q: 'What happens if I move my eye during surgery?',
        a: 'This is one of the most common worries I hear, and I understand why. The short answer is that small movements are completely normal and expected. I am used to them, and modern surgical techniques and equipment are designed to handle them safely. I will guide you through the process, and if I need you to look in a certain direction, I will let you know. You do not need to worry about "messing things up" by blinking or moving slightly.',
      },
      {
        q: 'How soon after the first eye can I do the second?',
        a: 'Traditionally, surgeons wait one to two weeks between eyes. That gives the first eye time to heal and confirms everything went well before doing the second. For patients who are good candidates, I also offer same-day bilateral surgery through my CLEAR in a Day protocol, where both eyes are done in one session with independent sterile setups for each eye. I will tell you honestly which approach is right for your specific situation.',
      },
      {
        q: 'What is CLEAR in a Day?',
        a: 'CLEAR in a Day is my protocol for same-day bilateral cataract surgery. Both eyes are treated in a single session, but each eye gets a completely independent sterile setup. New instruments, new drapes, everything treated as a separate surgery. The advantages are real: one day at the surgery center, one round of arranging rides and time off work, and faster visual recovery because both eyes improve together. Not every patient is a candidate, and I will be upfront about whether it makes sense for you.',
      },
    ],
  },
  {
    category: 'About Lens Implants',
    id: 'lenses',
    questions: [
      {
        q: 'What is the best lens implant?',
        a: 'There is no single "best" lens. The right lens depends on your eyes, your lifestyle, and your goals. A golfer who wants sharp distance vision has different needs than someone who reads for hours every day. When we meet, I will examine your eyes, ask about what matters most to you, and give you my honest recommendation. I would rather you get the right lens for your life than the most expensive one on the shelf.',
      },
      {
        q: 'What is the difference between monofocal and multifocal?',
        a: 'A monofocal lens gives you clear vision at one distance, usually far away. Most patients with a monofocal lens still wear reading glasses. A multifocal or extended depth of focus lens is designed to give you a range of vision, so you can see at distance, intermediate, and sometimes near without glasses. Multifocals work very well for many patients, but they are not ideal for everyone. Some people notice halos or glare at night with these lenses. I will help you understand the tradeoffs so you can make a decision that fits your life.',
      },
      {
        q: 'Will I still need glasses after surgery?',
        a: 'It depends on the lens you choose and your goals. With a standard monofocal lens, most patients still need reading glasses. With a premium multifocal or extended depth lens, many patients find they rarely reach for glasses at all. But I am always honest about this: no lens can perfectly replicate the full range of focus your eye had when you were 20. The goal is to get you as close as possible to the visual freedom you want.',
      },
      {
        q: 'What is a toric lens?',
        a: 'A toric lens is designed to reduce astigmatism at the same time as your cataract removal. Astigmatism means your cornea is shaped more like a football than a basketball, which causes blurry or distorted vision. If you have significant astigmatism and we do not address it during surgery, your vision will still be blurry even after the cataract is gone. A toric lens addresses both problems at once. I use precise alignment techniques to position it exactly where it needs to be.',
      },
      {
        q: 'Can I change my lens implant later?',
        a: 'In most cases, yes, a lens implant can be exchanged, but it is a more involved procedure than the original surgery. That is why I spend so much time upfront helping patients choose the right lens the first time around. If you have had cataract surgery elsewhere and are unhappy with your result, a lens exchange or secondary lens implant may be an option. This is something I evaluate on a case-by-case basis.',
      },
    ],
  },
  {
    category: 'About Recovery',
    id: 'recovery',
    questions: [
      {
        q: 'How long is recovery?',
        a: 'Most patients notice improved vision within a day or two. The eye continues to heal and stabilize over the next few weeks. You will use prescription eye drops for about a month. Most people are back to their normal daily routine within a few days, though there are some temporary restrictions like avoiding heavy lifting, swimming, and getting water directly in your eye.',
      },
      {
        q: 'When can I drive after surgery?',
        a: 'Many patients can drive within a day or two after surgery, as long as their vision meets the legal requirement and they feel comfortable. I check your vision at your first follow-up visit, usually the day after surgery, and will let you know when it is safe to get behind the wheel. You will definitely need someone to drive you home on surgery day.',
      },
      {
        q: 'When can I exercise after surgery?',
        a: 'Light activity like walking is fine almost immediately. For more intense exercise like running, weightlifting, yoga, or swimming, I generally recommend waiting about one to two weeks. The main concern is anything that raises pressure in or around the eye, introduces bacteria, or risks impact to the eye while it is still healing. I will give you specific guidance based on what you like to do.',
      },
      {
        q: 'What eye drops will I need?',
        a: 'After surgery, you will use a combination of prescription eye drops, typically an antibiotic to prevent infection and an anti-inflammatory to control swelling. The exact regimen and duration depend on your specific situation, but most patients use drops for about three to four weeks. We will give you a clear schedule and walk you through everything before surgery day.',
      },
    ],
  },
  {
    category: 'About Dr. Tokuhara and Desert Vision Center',
    id: 'about-dvc',
    questions: [
      {
        q: 'Do I need a referral?',
        a: 'No. You do not need a referral to schedule a consultation with me. You can call us directly. Some insurance plans work better with a referral from your primary eye doctor, and our team can help you figure that out when you call. But the door is always open.',
      },
      {
        q: 'Does insurance cover cataract surgery?',
        a: 'Yes. Cataract surgery is a medically necessary procedure, and it is covered by Medicare and most private insurance plans. That includes the surgery itself and a standard monofocal lens implant. If you choose a premium lens, like a multifocal or toric, there is an additional out-of-pocket cost for the upgrade. We will explain all costs upfront so there are no surprises.',
      },
      {
        q: 'What makes Desert Vision Center different?',
        a: 'We are independent. That matters more than most people realize. We are not owned by a hospital system, a private equity group, or a corporate chain. Every decision I make is based on what is best for the patient sitting in front of me. I also focus specifically on complex and advanced cataract surgery. This is not a volume mill where everyone gets the same assembly-line experience. Every patient gets my full attention, a thorough evaluation, and an honest conversation about their options.',
      },
      {
        q: 'What if my case is complicated?',
        a: 'Complicated cases are a big part of what I do. Patients come to me after a difficult surgery elsewhere, with a dislocated lens implant, iris damage, a posterior capsule rupture, or other issues that need a surgeon comfortable with the unexpected. I also see patients whose anatomy makes standard surgery more challenging: dense cataracts, weak lens support, small pupils, previous eye trauma. If someone told you your case is too complex or there is nothing more they can do, it is worth getting a second opinion.',
      },
    ],
  },
];

// Build JSON-LD FAQ schema
const faqSchemaItems = faqData.flatMap((cat) =>
  cat.questions.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }))
);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchemaItems,
};

const sectionStyles = ['section-white', 'section-warm'];

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* PAGE HERO */}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/faq-hero-consultation.png"
          alt="Patient consultation at Desert Vision Center"
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.4) 0%, rgba(0,20,30,0.7) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <h1>Frequently Asked <strong>Questions</strong></h1>
          <p className="page-hero-sub">Real questions from real patients. Honest answers in plain language.</p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      {faqData.map((category, catIndex) => (
        <React.Fragment key={category.id}>
          <section
            id={category.id}
            className={`section ${sectionStyles[catIndex % 2]}`}
          >
            <div className="container content-narrow">
              <h2 className="section-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="faq-item">
                    <h3 className="faq-question">{item.q}</h3>
                    <p className="faq-answer prose">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {catIndex === 1 && (
            <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
              <div className="container content-narrow">
                <div className="content-image">
                  <Image
                    src="/media/stock-couple-outdoor-sunshine.jpg"
                    alt="Couple enjoying outdoor sunshine in the desert"
                    width={680}
                    height={453}
                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
              </div>
            </section>
          )}
          {catIndex === 2 && (
            <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
              <div className="container content-narrow">
                <div className="content-image">
                  <Image
                    src="/media/stock-seniors-outdoor-dining.jpg"
                    alt="Seniors enjoying an outdoor meal together"
                    width={680}
                    height={453}
                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
              </div>
            </section>
          )}
          {catIndex === 3 && (
            <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
              <div className="container content-narrow">
                <div className="content-image">
                  <Image
                    src="/media/stock-woman-outdoor-cafe.jpg"
                    alt="Woman relaxing at an outdoor cafe with clear vision"
                    width={680}
                    height={453}
                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Still have <strong>questions?</strong></h2>
          <p>That is exactly what a consultation is for. Bring your questions and I will give you honest answers about your eyes.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/cataract-surgery" className="btn-secondary">Learn About Cataract Surgery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
