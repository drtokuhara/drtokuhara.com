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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens during cataract pre-op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During pre-op, you check in and are greeted by nursing staff. You receive dilating eye drops, an IV is placed for fluids and sedation, and the anesthesia provider reviews your care plan. Dr. Tokuhara marks the surgical eye and reviews the plan with you. The pre-op nurses answer questions and ensure you are comfortable before heading to the operating room.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to get undressed for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You do not need to change into a gown. You can wear comfortable clothes and keep your shoes on. You will receive a bonnet and shoe covers that go right over your clothes. Wear something comfortable and a light sweater, as it is cooler in the surgical facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I keep my hearing aids and dentures in during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can leave your hearing aids and dentures in during cataract surgery. Remove jewelry and watches, and leave valuables at home. Your cell phone will be placed in a belongings bag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I need an IV for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a small IV is placed, usually in the right hand, for fluids and mild sedation. If you are a difficult IV stick, let the nursing team know ahead of time so they can take extra steps to make it comfortable.',
      },
    },
  ],
};

export const metadata = {
  title: 'What Happens in Cataract Pre-Op: A Step-by-Step Guide',
  description: 'A detailed walkthrough of what happens in the pre-operative area before cataract surgery. From check-in to the operating room, Dr. Tokuhara and his nursing team explain every step.',
  alternates: { canonical: '/cataract-pre-op' },
  openGraph: {
    title: 'Cataract Pre-Op Guide | Dr. Keith Tokuhara',
    description: 'What to wear, what to expect, and how the nursing team prepares you for cataract surgery. No surprises.',
    url: 'https://drtokuhara.com/cataract-pre-op',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Before Surgery', href: '/cataract-pre-op' },
]);

export default function CataractPreOp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-light-as-information.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>What Happens in <strong>Cataract Pre-Op</strong></h1></ScrollReveal>
          <p className="page-hero-sub">The waiting is the hardest part. Here is exactly what happens so nothing catches you off guard.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Most of the anxiety around cataract surgery is not about the surgery itself. It is about the unknown: what happens when I walk through the door, who will be there, what will they do to me before I go in?
          </p>
          <p>
            I asked two of our pre-op nurses, Megan and Kristen, to walk you through exactly what happens. Because when you know what to expect, the anxiety drops considerably.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-brunch-patio.jpg" alt="Couple relaxed and comfortable enjoying time together before surgery day" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHAT TO WEAR */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Before You <strong>Arrive</strong></h2>
          <ul className="content-list">
            <li><strong>Wear something comfortable.</strong> You do not need to get undressed. Everything goes right over your clothes and shoes.</li>
            <li><strong>Bring a light sweater.</strong> The surgical facility is kept cool for sterile reasons.</li>
            <li><strong>Leave jewelry and watches at home.</strong> Keep valuables out of the mix.</li>
            <li><strong>Hearing aids and dentures can stay in.</strong> You need to hear us and we need to talk with you.</li>
            <li><strong>Your phone goes in a belongings bag.</strong> You will get it back afterward.</li>
          </ul>
          <p>
            You will receive a bonnet and shoe covers when you arrive. That is it. No gowns, no complicated prep. We want this to be as simple and comfortable as possible.
          </p>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Step by <strong>Step</strong></h2>

          <div className="insight-list">
            <div className="insight-item">
              <strong>1. Check-in and greeting</strong>
              <p>Our nursing team greets you and gets you settled. This is when the anxiety usually peaks, and it is our job to bring it down. We answer questions, explain what is coming, and make sure you feel taken care of.</p>
            </div>
            <div className="insight-item">
              <strong>2. Dilating eye drops</strong>
              <p>We place drops in your surgical eye to dilate the pupil. This gives Dr. Tokuhara the view he needs to perform the procedure. The drops take a few minutes to work.</p>
            </div>
            <div className="insight-item">
              <strong>3. IV placement</strong>
              <p>A small IV is placed, usually in the right hand. This is for fluids and the mild sedation that keeps you relaxed during surgery. If you are a difficult stick, tell us ahead of time. There are things we can do to make it more comfortable.</p>
            </div>
            <div className="insight-item">
              <strong>4. Anesthesia provider visit</strong>
              <p>The anesthesia team comes by to review your health history, answer questions, and explain what the sedation will feel like. You will be relaxed but awake during surgery.</p>
            </div>
            <div className="insight-item">
              <strong>5. Dr. Tokuhara marks your eye</strong>
              <p>I come in personally before every surgery. I mark the operative eye, review the surgical plan one more time, and answer any last questions. This is your moment to ask anything that is on your mind.</p>
            </div>
            <div className="insight-item">
              <strong>6. The operating room nurse visits</strong>
              <p>The nurse who will be with you during the actual surgery comes by to introduce herself and let you know what to expect once you are in the room.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-resort-promenade-night.jpg" alt="Seniors enjoying an evening walk at a resort - the life patients are eager to return to after surgery" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHAT PATIENTS SAY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients <strong>Tell Us</strong></h2>

          <BlurReveal><div className="pull-quote">
            <p>"I wish I had come sooner."</p>
          </div></BlurReveal>

          <p>
            Our nurses hear this constantly. The waiting, the research, the anxiety that builds up before surgery is almost always worse than the actual experience. Once you are in the chair, the IV is in, and the team is talking you through it, the nervousness fades.
          </p>
          <p>
            And when patients come back for their second eye? They are usually excited. They know what to expect, they know how good the result was on the first eye, and they are ready.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>"They can't believe how much they didn't see before. Everything is clearer, crisper, brighter. They have likened it to cleaning a dirty window."</strong></p>
            <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>- Kristen, Pre-Op Nurse</p>
          </div></BlurReveal>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Watch the <strong>Walkthrough</strong></h2>
          <p>
            Megan and Kristen walk you through the entire pre-op experience in this video. If you are scheduled for surgery, this is worth watching the night before.
          </p>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '24px'}}>
            <iframe
              src="https://www.youtube.com/embed/XeELWvMkBY8"
              title="What Happens in Cataract Pre-Op - Desert Vision Center"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Surgery is a team effort. From the pre-op nurses who calm your nerves, to the surgical tech who double-checks every instrument, to the anesthesiologist who keeps you comfortable, to the recovery team who watches over you afterward, every person has an important role. I am grateful to work with a team that takes the human side of surgery as seriously as the technical side. That is what makes a quick escape out of here possible.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What happens during the actual procedure.</p>
            </Link>
            <Link href="/ready-for-surgery" className="related-card">
              <h3>Ready for Surgery</h3>
              <p>Recovery expectations and post-operative care.</p>
            </Link>
            <Link href="/patient-journey" className="related-card">
              <h3>Your Journey</h3>
              <p>The full path from first visit to clear vision.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
