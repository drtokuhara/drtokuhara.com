import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens in the recovery room after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After cataract surgery, you are moved to the recovery room where a nurse checks your vital signs, you receive a snack and something to drink, and your IV is removed. A protective shield is taped over your eye. You spend approximately 20 minutes in recovery before a family member or driver takes you home. Post-operative instructions are reviewed with you before you leave.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the anesthesia for cataract surgery like general anesthesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Cataract surgery uses a much lighter form of sedation than general anesthesia - typically IV sedation combined with numbing eye drops. You are relaxed and comfortable but not deeply unconscious. Most patients describe feeling calm and drowsy, not knocked out. Recovery is much faster, with none of the prolonged grogginess that follows general anesthesia.',
      },
    },
    {
      '@type': 'Question',
      name: 'When can I resume normal activities after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients can read, watch television, and resume light activities the day of surgery or the following morning. Dr. Tokuhara provides his personal phone number so patients can reach him directly with any concerns. Normal activities in moderation are generally fine from the start. More strenuous activities like swimming or heavy lifting have a longer restriction period, which is reviewed during your pre-operative appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is placed on my eye at the end of cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At the end of surgery, a clear plastic shield is placed over your eye and secured with tape. This shield protects the eye during the immediate post-operative period and is typically worn at night during the first week of recovery to prevent accidental rubbing during sleep. Your nursing team will review exactly when and how to use the shield.',
      },
    },
  ],
};

export const metadata = {
  title: 'Cataract Recovery: What Happens After Surgery in the Recovery Room',
  description: 'Dr. Tokuhara walks through the cataract surgery recovery process step by step - what happens in the recovery room, what to expect when you get home, and when to call.',
  alternates: { canonical: '/cataract-recovery' },
  openGraph: {
    title: 'Cataract Recovery: What to Expect After Surgery | Dr. Keith Tokuhara',
    description: 'The recovery room after cataract surgery is calmer than most patients expect. Dr. Tokuhara explains exactly what happens, step by step.',
    url: 'https://drtokuhara.com/cataract-recovery',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Recovery', href: '/cataract-recovery' },
]);

export default function CataractRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "VideoObject", "name": "Cataract Recovery:  What happens after surgery in the recovery room?", "description": "After cataract surgery, you're brought to the recovery unit.  In this video, Dr. Tokuhara talks to the surgery nurses ab", "thumbnailUrl": "https://i.ytimg.com/vi/7mkouTcQWOo/maxresdefault.jpg", "uploadDate": "2023-03-12", "duration": "PT3M46S", "contentUrl": "https://www.youtube.com/watch?v=7mkouTcQWOo", "embedUrl": "https://www.youtube.com/embed/7mkouTcQWOo"}) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-desert-sunrise-v2.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}} bottomOverlay={<AudioNarration src="/audio/narrations/cataract-recovery.mp3" />}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Cataract <strong>Recovery</strong></h1>
          </ScrollReveal>
          <p className="page-hero-sub">What actually happens after surgery - in the recovery room and when you get home.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Most patients are surprised by how easy recovery is. They have prepared themselves for something difficult, and then they find that the hardest part was the anticipation.
          </p>
          <p>
            Cataract surgery is not like general surgery. There is no lengthy hospitalization, no deep anesthesia to shake off, no recovery that stretches across weeks. For the vast majority of patients, the day of surgery ends with a snack in the recovery room, a ride home with a family member, and an afternoon spent reading or watching television.
          </p>
          <p>
            I want to walk you through exactly what recovery looks like, from the moment surgery ends to the moment you leave the surgical center. Knowing what to expect reduces anxiety. And less anxiety makes for a better experience overall.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-romantic-warm-interior.jpg" alt="Couple relaxing comfortably at home - the easy, familiar recovery that follows cataract surgery" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">A Walk Through <strong>the Recovery Room</strong></h2>
          <p>
            I recorded this video to show patients exactly what the recovery experience looks like. You will see the recovery room, hear from the nursing team, and understand the sequence of events between the end of surgery and going home.
          </p>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '24px'}}>
            <iframe
              src="https://www.youtube.com/embed/7mkouTcQWOo"
              title="Cataract Surgery Recovery Room - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>The actual cataract surgery recovery room - nurses, monitors, and what you can expect when surgery is done.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <LineDraw />
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Step by Step: <strong>What Happens</strong></h2>

          <div className="insight-list">
            <div className="insight-item">
              <p><strong>In the operating room, at the end of surgery:</strong> I place a clear protective shield over your eye and secure it with medical tape. This shield stays on until your first post-operative appointment. It is lightweight, and most patients barely notice it.</p>
            </div>
            <div className="insight-item">
              <p><strong>Moving to the recovery room:</strong> You are transferred to a comfortable recovery area. Monitors track your vital signs. A nurse is with you - checking that everything looks right, making sure you are comfortable, and answering any immediate questions.</p>
            </div>
            <div className="insight-item">
              <p><strong>Snack and something to drink:</strong> You are offered something to eat and drink. This is one of the things that surprises patients most - the mood in the recovery room is calm, almost cheerful. You have been through something significant, and the team around you celebrates that with you.</p>
            </div>
            <div className="insight-item">
              <p><strong>IV removal:</strong> Once your nurse confirms everything looks good, the IV is removed. This is a clear signal that you are moving toward discharge.</p>
            </div>
            <div className="insight-item">
              <p><strong>Post-operative instructions:</strong> Your nurse reviews your discharge instructions - which drops to use, how to use the shield at night, activities to avoid, and what symptoms would warrant a call. You are given my direct phone number. Not an answering service. My number.</p>
            </div>
            <div className="insight-item">
              <p><strong>Going home:</strong> A family member or trusted friend drives you home. The total time from end of surgery to leaving the surgical center is approximately 20 minutes - sometimes a little less, sometimes a little more depending on how your recovery is going.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-outdoor-dining.jpg" alt="Seniors enjoying a meal outdoors - the simple pleasures patients can return to soon after cataract surgery" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* LIGHTER THAN GENERAL ANESTHESIA */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Not Like <strong>General Anesthesia</strong></h2>
          <p>
            Many patients who have had general anesthesia for other procedures expect cataract surgery recovery to feel similar. It does not.
          </p>
          <p>
            Cataract surgery uses IV sedation combined with numbing eye drops. You are comfortable and relaxed during the procedure - not fighting anxiety, not in pain, but also not deeply unconscious. Many patients have described it as feeling like a calm, drowsy afternoon. When surgery ends, you emerge quickly. There is no hours-long grogginess, no prolonged nausea, no fighting to wake up.
          </p>
          <p>
            The sedation is calibrated carefully. The goal is that you are relaxed enough to remain still during a delicate procedure, but not so deeply sedated that recovery becomes its own challenge. Most patients are pleasantly surprised at how clear-headed they feel by the time they are in the recovery room.
          </p>

          <BlurReveal className="pull-quote">
            <p>"Our nursing team has been doing this together for years. They know how to take care of people in those first twenty minutes after surgery. They are passionate about what they do, and they celebrate every operation. Walking through the recovery room, you can feel that."</p>
          </BlurReveal>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What You Can Do <strong>That Day</strong></h2>
          <p>
            Unlike general surgery, cataract surgery recovery does not require you to do very little. In fact, gentle activity is fine - and for most patients, preferable to lying in a dark room worrying.
          </p>
          <ul className="content-list">
            <li><strong>Reading</strong> - yes, you can read the same day, or the next morning at the latest</li>
            <li><strong>Watching television</strong> - comfortable and encouraged</li>
            <li><strong>Normal household activities</strong> - walking around, cooking, light tasks</li>
            <li><strong>Using your phone or computer</strong> - fine in moderation</li>
          </ul>
          <p>
            The main restrictions in the first day or two are around rubbing the eye and exposing it to water. Both can disrupt the healing incisions. Your post-operative instructions cover these specifics in detail.
          </p>
          <p>
            What about driving? You cannot drive yourself home from surgery. Most patients can resume driving within a few days, once vision in the operated eye meets the standard requirement. I confirm this at your first post-operative appointment.
          </p>
        </div>
      </section>

      {/* WHEN TO CALL */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When to <strong>Call Me</strong></h2>
          <p>
            Most cataract surgery recovery is smooth. But I want you to have a way to reach me if anything feels wrong. You will leave the surgical center with my direct phone number. Please use it if you experience:
          </p>
          <ul className="content-list">
            <li>Sudden significant decrease in vision</li>
            <li>Pain that increases rather than gradually improving</li>
            <li>Increasing redness that is getting worse, not better</li>
            <li>New flashes of light or a sudden increase in floaters</li>
            <li>A shadow or curtain appearing in your peripheral vision</li>
          </ul>
          <p>
            Most calls I receive are reassurance calls - a patient who noticed something unexpected and wanted to confirm it was normal. I welcome those calls. Catching a true complication early is always better than waiting. But the majority of the time, I am able to say: what you are experiencing is completely normal, and you are going to be fine.
          </p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-garden-blooming.jpg" alt="Couple in a blooming garden enjoying a bright, clear day" width={1920} height={400} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The recovery room is one of my favorite places in the surgical center. Surgery is over, everything went well, and the patient is usually starting to realize that the thing they were dreading for months was actually manageable. There is a lightness in the room. Our nurses have been doing this long enough that they genuinely love this moment - the moment a patient opens their operated eye for the first time and says, "wait, I can already see the clock." That reaction, every single time, never gets old.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <PageFAQ faqs={[
        { q: 'What happens in the recovery room after cataract surgery?', a: 'After cataract surgery, you are moved to the recovery room where a nurse checks your vital signs, you receive a snack and something to drink, and your IV is removed. A protective shield is taped over your eye. You spend approximately 20 minutes in recovery before a family member or driver takes you home.' },
        { q: 'Is the anesthesia for cataract surgery like general anesthesia?', a: 'No. Cataract surgery uses a much lighter form of sedation than general anesthesia, typically IV sedation combined with numbing eye drops. You are relaxed and comfortable but not deeply unconscious. Most patients describe feeling calm and drowsy, not knocked out. Recovery is much faster.' },
        { q: 'When can I resume normal activities after cataract surgery?', a: 'Most patients can read, watch television, and resume light activities the day of surgery or the following morning. Dr. Tokuhara provides his personal phone number so patients can reach him directly with any concerns. More strenuous activities like swimming or heavy lifting have a longer restriction period.' },
        { q: 'What is placed on my eye at the end of cataract surgery?', a: 'A clear plastic shield is placed over your eye and secured with tape. This shield protects the eye during the immediate post-operative period and is typically worn at night during the first week of recovery to prevent accidental rubbing during sleep.' },
      ]} />

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/ready-for-surgery" className="related-card">
              <h3>Ready for Surgery</h3>
              <p>Everything you need to know to prepare for your surgery day - what to bring, what to expect, and how the day unfolds.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Cataract Pre-Op</h3>
              <p>The pre-operative process: measurements, appointments, and the steps that happen before surgery day.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure itself involves, from start to finish, in plain language.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
