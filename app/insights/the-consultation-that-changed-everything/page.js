import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Consultation That Changed Everything',
  description: 'Most patients have seen doctors who spend 5 to 10 minutes with them. At Desert Vision Center, consultations run 30 to 60 minutes or more. This is what a consultation should feel like.',
  alternates: { canonical: '/insights/the-consultation-that-changed-everything' },
  openGraph: {
    title: 'The Consultation That Changed Everything | Dr. Keith Tokuhara',
    description: 'What happens when a patient finally gets a consultation that is unhurried, honest, and thorough. The moment when anxiety becomes confidence.',
    url: 'https://drtokuhara.com/insights/the-consultation-that-changed-everything',
  },
};

const jsonLd = [
  articleSchema({
    title: 'The Consultation That Changed Everything',
    description: 'A reflection on what a good cataract consultation looks and feels like, and why time and honesty matter more than any technology in the room.',
    slug: '/insights/the-consultation-that-changed-everything',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Consultation That Changed Everything', href: '/insights/the-consultation-that-changed-everything' },
  ]),
];

export default function InsightConsultationChangedEverything() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <VideoBackground
        src="/media/ambient-desert-twilight.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Philosophy of Care</span>
            <h1>The Consultation That <strong>Changed Everything</strong></h1>
            <p className="page-hero-sub">When a patient finally gets the time and honesty they deserve, something shifts. It is not about surgery. It is about feeling understood.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Harold Baird had been to three ophthalmologists before he came to see me. Each visit had lasted about ten minutes. He left every one of them with a prescription or a recommendation but without answers to the questions that were actually keeping him up at night.
          </p>
          <p>
            His first appointment with me lasted 70 minutes.
          </p>
          <p>
            That is not a typo. Seventy minutes. Not because something was complicated or because there was a problem to solve, but because Harold had questions, and questions deserve real answers.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Most Consultations <strong>Actually Look Like</strong></h2>
          <p>
            I want to be honest about what is common in eye care, because I think patients deserve to know. The typical ophthalmology practice is designed to see high volumes of patients. That means appointments are often 10 to 15 minutes, sometimes less. A technician takes measurements. The doctor comes in, reviews the data, gives a recommendation, and moves to the next room.
          </p>
          <p>
            That model works for routine care. A quick post-operative check. A glasses prescription refill. A screening for a patient who has no concerns.
          </p>
          <p>
            It does not work for a patient who is trying to decide whether to have surgery. It especially does not work for a patient who is nervous, who has researched their condition extensively and found conflicting information, or who has specific visual goals they have never been given space to articulate.
          </p>
          <p>
            For those patients, a ten-minute consultation is not a consultation. It is a transaction.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-seniors-outdoor-dining.jpg"
              alt="Seniors engaged in unhurried conversation outdoors - the quality of attention a good consultation should provide"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What a Good Consultation <strong>Actually Involves</strong></h2>
          <p>
            By the time Harold sat down with me, I had already reviewed his records. His optometrist had flagged cataracts and recommended surgery. His biometry was done. The technical case for surgery was straightforward.
          </p>
          <p>
            But Harold wanted to understand what lens options actually meant in daily life. He was a retired landscape architect who spent hours reading architectural drawings. He played golf three times a week. He drove at night to visit his daughter. He had specific, real visual needs that no lens recommendation could address without understanding them first.
          </p>
          <p>
            So we talked through all of it. I explained the difference between a monofocal and an extended depth-of-focus lens not as a feature sheet but as a set of tradeoffs tied to his specific activities. I told him honestly where the technology works well and where it falls short. I described what to expect from recovery. I also told him what I could not guarantee, and why certain things about lens selection involve uncertainty even after the most thorough evaluation.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"I finally feel like I understand what I am deciding."</p>
          </div></BlurReveal>

          <p>
            That is what Harold said at the end of the appointment. Not "I am ready for surgery." Not "sign me up." He said he finally understood what he was deciding.
          </p>
          <p>
            That is the goal.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Moment Anxiety Becomes <strong>Confidence</strong></h2>
          <p>
            There is a specific shift that happens in a good consultation, and I have seen it enough times to recognize it. A patient arrives guarded. Maybe a little anxious. They have been told what to do by another doctor, or they have read things online that scared them, or they just do not feel like anyone has really listened to their specific situation.
          </p>
          <p>
            At some point in the appointment, something changes. They start asking follow-up questions instead of just absorbing information. Their posture relaxes. They might laugh about something. They start talking about what they want their vision to do for them, not just what they are worried about losing.
          </p>
          <p>
            That shift is not the result of a sales pitch. It is not produced by technology or a beautiful facility or a brochure. It happens when a person feels that the doctor in the room has genuinely heard them and is giving them honest, complete information to make their own decision.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>A good consultation is not about convincing someone to have surgery. It is about giving someone enough information to make the right decision for themselves, even if that decision is to wait.</strong></p>
          </div></BlurReveal>

          <p>
            Harold scheduled surgery for six weeks later. His outcome was excellent. But what I remember most about his case is not the surgery. It is that by the end of our first appointment, he went from a man who felt confused and pressured to a man who felt clear and in control.
          </p>
          <p>
            That clarity, before a single instrument touches the eye, is the foundation of good surgical care.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-couple-brunch-patio.jpg"
              alt="Couple at a relaxed outdoor setting - the kind of unhurried, honest exchange that defines a good consultation"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="clinic-thought">
            <h3>What this means practically</h3>
            <p>
              <em>I book my consultations differently than most practices. My new patient appointments are long by design. Not every patient needs 70 minutes, but every patient gets as much time as their situation requires. You should never leave a consultation feeling like you did not have space to ask what mattered to you.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>"Do I Really Need Surgery Yet?"</h3>
              <p>A 70-year-old man was told surgery would fix everything. The honest exam told a different story.</p>
            </Link>
            <Link href="/insights/five-questions-before-surgery" className="related-card">
              <h3>5 Questions to Ask Before Surgery</h3>
              <p>What to ask your surgeon before cataract surgery, and what the answers reveal about the practice.</p>
            </Link>
            <Link href="/ethical-cataract-care" className="related-card">
              <h3>Ethical Cataract Care</h3>
              <p>Why financial incentives should never influence a surgical recommendation.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
