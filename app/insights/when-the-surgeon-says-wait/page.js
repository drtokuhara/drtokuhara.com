import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  VideoBackground,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'When the Surgeon Says Wait',
  description: 'A reflection on why saying "not yet" is sometimes the most important thing a cataract surgeon can say - and why building trust means being willing to say no.',
  alternates: { canonical: '/insights/when-the-surgeon-says-wait' },
  openGraph: {
    title: 'When the Surgeon Says Wait | Dr. Keith Tokuhara',
    description: 'Many surgeons default to yes because surgery generates revenue. A reflection on the courage it takes to tell a patient they are not ready - and why that honesty builds lasting trust.',
    url: 'https://drtokuhara.com/insights/when-the-surgeon-says-wait',
  },
};

const jsonLd = [
  articleSchema({
    title: 'When the Surgeon Says Wait',
    description: 'A reflection on surgical restraint and the courage it takes to tell a patient they are not ready for surgery.',
    slug: '/insights/when-the-surgeon-says-wait',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When the Surgeon Says Wait', href: '/insights/when-the-surgeon-says-wait' },
  ]),
];

export default function WhenTheSurgeonSaysWait() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <VideoBackground
        src="/media/ambient-ink-clarity.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Surgical Restraint</span>
            <h1>When the Surgeon <strong>Says Wait</strong></h1>
            <p className="page-hero-sub">Saying no takes more courage than saying yes. A reflection on what it means to hold back when holding back is the right answer.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* AUTHOR + INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 2026" />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The easiest thing to say in a pre-operative consultation is yes. The schedule is open. The staff is ready. The patient is sitting there hoping to hear that surgery will fix their problem. And frankly, cataract surgery generates revenue. The path of least resistance runs straight toward the operating room.
          </p>
          <p>
            I have been doing this long enough to understand that pressure. I have also been doing this long enough to know that giving in to it is a form of harm.
          </p>
          <p>
            Not every cataract is ready to come out. Not every patient who believes they need surgery actually does. And telling someone that is not a failure of care. It is the highest expression of it.
          </p>
        </div>
      </section>

      {/* THE INCENTIVE PROBLEM */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Incentive <strong>Problem</strong></h2>
          </ScrollReveal>
          <p>
            Fee-for-service medicine creates a structural incentive to operate. A surgeon who says "not yet" loses a case. A surgeon who says "let's schedule it" gains one. Over the course of a career, that pressure compounds. It shapes how surgeons think without them always realizing it.
          </p>
          <p>
            I am not suggesting that most surgeons are acting in bad faith. I believe most cataract surgeons genuinely want good outcomes for their patients. But the environment in which they practice nudges them toward volume, and volume nudges them toward shorter consultations and faster decisions.
          </p>

          <BlurReveal>
            <div className="pull-quote">
              <p>When a surgeon is incentivized to operate, the threshold for "ready" shifts quietly over time.</p>
            </div>
          </BlurReveal>

          <p>
            I think about this because my practice is independent. I do not have a hospital system pushing me toward throughput. I am not part of a chain where my productivity is tracked against a benchmark. That freedom makes it easier to say the things that are true, even when they are inconvenient.
          </p>
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-couple-patio-scenic-view.jpg"
              alt="Patient at a scenic patio - the goal is to preserve the life you love"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">My <strong>Philosophy</strong></h2>
          </ScrollReveal>
          <p>
            My general rule is this: if the cataract is not affecting your daily life in a meaningful way, the risk-benefit calculation does not favor surgery today. That is not always what patients want to hear. But it is what they deserve to hear.
          </p>
          <p>
            There are patients with early cataracts who drive at night, read without difficulty, and play golf without squinting. Their refraction has shifted somewhat and an eye chart shows mild reduction in best-corrected acuity. On paper, they are surgical candidates. In practice, their life is not being disrupted. I see no compelling reason to put that life at risk, even a small risk, for a benefit they may not notice.
          </p>
          <p>
            The right answer in those cases is: come back in a year. Sooner if something changes. Let the cataract mature to the point where the exchange is clearly worth it.
          </p>
          <p>
            Patients sometimes leave that conversation frustrated. They came in expecting a surgical date. I understand the frustration. But most of them come back, and most of them thank me for waiting.
          </p>
        </div>
      </section>

      {/* REAL STORIES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Happens When <strong>Patients Come Back</strong></h2>
          </ScrollReveal>
          <p>
            A few years ago, I saw a 71-year-old man who had been told by another surgeon he was "a good candidate" and could schedule whenever he was ready. When he came to me for a second opinion, I looked at his examination and said: not yet.
          </p>
          <p>
            He was surprised. He had already started preparing himself emotionally for surgery. But his best-corrected visual acuity was still functional. His cataract was nuclear but early. His symptoms were mild and inconsistent. I told him to come back in 18 months.
          </p>
          <p>
            When he returned, the picture was different. His acuity had dropped, his contrast sensitivity was reduced, and he was telling me about difficulty reading the menu at restaurants. Now we had a clear case for surgery. We operated, and the improvement was dramatic. He told me the difference was "like switching from an old television to a new one." He also said he was glad we had waited, because now he could actually feel the change.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>A dramatic improvement is only possible if there was something real to improve.</strong> Premature surgery steals that contrast.</p>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* THE PANOPTIX PRO PATIENT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Patient Who Could <strong>Wait</strong></h2>
          </ScrollReveal>
          <p>
            I recently cared for a patient who had seen me for a consultation about premium lens options. She had done her research, watched videos, and came in with a specific lens in mind. She was motivated and informed, and she asked directly about the PanOptix Pro.
          </p>
          <p>
            After examining her, I told her she was a candidate for a premium lens when the time came. But I also told her that her cataract was not yet affecting her quality of life in the ways she had described fearing. She was not ready for surgery yet.
          </p>
          <p>
            She told me later that this was the part of our conversation she valued most. Not the explanation of the lens technology, not the comparison of options. The fact that I told her she could wait, and that waiting was not failure.
          </p>
          <p>
            That patient's experience is captured in a video on our site. What strikes me, watching it back, is how relieved she looks. Not because surgery was imminent. Because she had been given honest information and could make a decision without feeling rushed.
          </p>
        </div>
      </section>

      {/* TRUST */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">How Trust Is <strong>Actually Built</strong></h2>
          </ScrollReveal>
          <p>
            There is a version of patient relationship that runs on optimism and reassurance. The surgeon says yes to everything, frames every situation as manageable, and the patient feels good walking out of every appointment.
          </p>
          <p>
            I do not think that is trust. I think it is comfort. They are not the same thing.
          </p>
          <p>
            Trust, in my experience, comes from the opposite. It comes from the consultation where I said the lens they wanted was not the right choice for their eye. From the visit where I told them the cataract was not ready. From the moment where I could have made an easier call and chose not to.
          </p>
          <p>
            Patients remember when a doctor told them something inconvenient and it turned out to be right. That is the foundation of a long relationship. And in cataract surgery, where patients may need follow-up care, a YAG procedure, or eventually the other eye, a long relationship is worth building.
          </p>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>The takeaway</h3>
              <p>
                <em>Every time I tell a patient to wait, I am making a bet that honesty will serve them better than a surgical date. I have made that bet enough times to know it pays. Patients who are told the truth, even when it is inconvenient, tend to come back. They tend to trust the recommendation when surgery is finally recommended. And the outcomes tend to be better because the decision was made at the right time for the right reasons. That is the kind of practice I want to run.</em>
              </p>
            </div>
          </BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Reading</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/the-man-who-wanted-his-younger-eyes-back" className="related-card">
              <h3>The Man Who Wanted His Younger Eyes Back</h3>
              <p>He wanted better vision but his cataract was early. Why we chose to wait, and what happened next.</p>
            </Link>
            <Link href="/insights/when-patients-wait" className="related-card">
              <h3>When Patients Wait</h3>
              <p>The psychology of timing, outcome bias, and why readiness is not the same as candidacy.</p>
            </Link>
            <Link href="/ethical-cataract-care" className="related-card">
              <h3>Ethical Cataract Care</h3>
              <p>Why financial incentives in medicine can distort surgical decisions, and what to look for.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
