import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'When the Unexpected Leads to the Right Outcome | Dr. Keith Tokuhara',
  description: 'A complicated cataract surgery with a posterior capsule rupture revealed undiagnosed keratoconus. What initially looked like a devastating complication ultimately prevented a worse refractive outcome. A reflection on humility in medicine.',
  alternates: { canonical: '/insights/when-the-unexpected-leads-to-the-right-outcome' },
  openGraph: {
    title: 'When the Unexpected Leads to the Right Outcome | Dr. Keith Tokuhara',
    description: 'His cataract surgery did not go as planned. His vision dropped to almost nothing. But the complication revealed a hidden condition that changed the entire story.',
    url: 'https://drtokuhara.com/insights/when-the-unexpected-leads-to-the-right-outcome',
  },
};

const jsonLd = [
  articleSchema({
    title: 'When the Unexpected Leads to the Right Outcome',
    description: 'A complicated cataract surgery revealed undiagnosed keratoconus. What appeared to be a devastating surgical complication ultimately prevented a worse refractive outcome. A reflection on complexity and humility in medicine.',
    slug: '/insights/when-the-unexpected-leads-to-the-right-outcome',
    datePublished: '2026-05-10',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When the Unexpected Leads to the Right Outcome', href: '/insights/when-the-unexpected-leads-to-the-right-outcome' },
  ]),
];

export default function InsightWhenTheUnexpectedLeadsToTheRightOutcome() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/eye-iris-detail-warm.mp4"
        poster="/media/when-the-unexpected-leads-to-the-right-outcome-hero.png"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Patient Stories</span>
          <h1>When the Unexpected Leads to the Right <strong>Outcome</strong></h1>
          <p className="page-hero-sub">His cataract surgery did not go as planned. His vision dropped to almost nothing. But the complication revealed a hidden condition that changed the entire story, and ultimately led to a better result than anyone expected.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            One of the most important lessons I have learned in ophthalmology is that medicine is not always straightforward. Sometimes situations that initially appear disastrous evolve into something far more nuanced once the full clinical picture becomes clear.
          </p>
          <p>
            A 70-year-old patient recently came to my office for a second opinion after experiencing complications during cataract surgery performed elsewhere. Before his surgery, he had hoped to reduce his dependence on glasses. He specifically wanted a toric lens implant, a type of lens designed to correct astigmatism at the time of cataract removal.
          </p>
          <p>
            During the original surgery, however, complications occurred. The posterior capsule, the delicate membrane that supports the lens implant inside the eye, ruptured. The toric lens could not be safely placed. A different lens was used instead. After surgery, his vision was dramatically worse, leaving him frightened, frustrated, and searching for answers.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Assessing the <strong>Damage</strong></h2>
          <p>
            When I examined him, his vision in the affected eye had declined to hand-motion level, meaning he could only detect movement directly in front of him. There was mild corneal swelling, residual vitreous gel extending into the front chamber of the eye, and retained lens material left behind from the original surgery. The ruptured posterior capsule was clearly evident.
          </p>
          <p>
            For a patient who went into elective surgery expecting clearer vision, this was devastating. He could barely see out of the eye. He did not know whether his vision would recover. He did not know whether the original surgeon had made a mistake. He was, understandably, scared.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>In moments like these, the first thing a patient needs is honesty. I explained that the three-piece lens implant that had been placed was actually an appropriate choice given the loss of capsular support during surgery. The complication was real and serious, but the intraoperative decision-making appeared sound under the circumstances.</strong></p>
          </div></BlurReveal>

          <p>
            That matters. Patients who come for second opinions are often bracing themselves for confirmation that something went terribly wrong. Sometimes it did. But sometimes, as in this case, the situation is more complex than it first appears, and the original team made reasonable choices under difficult conditions.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Stabilizing the <strong>Eye</strong></h2>
          <p>
            The priority was clear: stabilize the eye and give it the best possible chance to heal. We proceeded with urgent surgery to remove the remaining vitreous strands and retained lens fragments that were sustaining inflammation and preventing recovery.
          </p>
          <p>
            The procedure went well. Over the following weeks, the eye healed steadily. Inflammation subsided. The corneal swelling resolved. And his vision, which had been reduced to almost nothing, began to return.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>Ultimately, his best-corrected vision recovered to 20/30. For an eye that had been at hand-motion level, that is a meaningful and significant recovery.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Hidden <strong>Chapter</strong></h2>
          <p>
            Once the eye had fully stabilized, we performed detailed corneal imaging and topography, the kind of careful mapping that reveals the true shape and health of the corneal surface. That is when a much deeper part of the story emerged.
          </p>
          <p>
            The patient had previously undiagnosed keratoconus.
          </p>
          <p>
            Keratoconus is a condition in which the cornea develops an irregular, cone-like shape. It creates a type of astigmatism that is unpredictable and difficult to correct with standard approaches. In many cases, toric lens implants, the very lens this patient had originally wanted, do not perform reliably in eyes with significant keratoconus because the irregular astigmatism does not follow the predictable patterns that toric lenses are designed to correct.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>What initially appeared to be a devastating surgical complication may have inadvertently prevented a refractive outcome that would have left this patient dissatisfied long-term. The toric lens he wanted would likely have underperformed in an eye with undiagnosed keratoconus. The standard lens that was placed instead, chosen out of necessity during a difficult moment in surgery, turned out to be the more appropriate choice all along.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Moving <strong>Forward</strong></h2>
          <p>
            When it came time to perform cataract surgery on the patient's other eye, we had the full picture. Knowing about the keratoconus, we chose a standard monofocal lens implant rather than a toric. The surgery was uncomplicated. The patient achieved excellent functional vision in both eyes with the assistance of glasses for astigmatism correction.
          </p>
          <p>
            He could see. He could function. He had confidence in his vision again. The journey to get there looked nothing like what anyone had planned, but the destination was a good one.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients Deserve During <strong>Difficulty</strong></h2>
          <p>
            Cases like this are emotionally difficult for patients. Cataract surgery is elective. Most people walk into the operating room expecting clearer vision and a quick recovery. When complications occur, that expectation collapses, and what follows is often fear, anxiety, loss of trust, and uncertainty about whether things will ever be right again.
          </p>
          <p>
            One of the most important parts of caring for these patients is not the surgery itself, but communication. Patients deserve honesty about what happened. They deserve education about why it happened and what comes next. They deserve reassurance that is grounded in reality, not empty promises. And they deserve the time and space to process a difficult experience with a doctor who is willing to sit with them through it.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>Outcomes are not always binary. They are not simply "success" or "failure." Sometimes unexpected events reveal underlying conditions that completely change our understanding of the situation.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Medicine requires both technical skill and humility. Even with modern technology and careful planning, there are moments when the full story only becomes visible over time. This patient's journey did not follow the expected path. But in the end, he regained meaningful vision, regained confidence, and moved forward successfully. Sometimes the best we can do is stay attentive, stay honest, and trust that the complete picture will reveal itself when we are patient enough to look for it.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/when-the-eye-surface-changes-everything" className="related-card">
              <h3>When the Eye Surface Changes Everything</h3>
              <p>Advanced lens implants can only perform as well as the eye surface allows. Why patient selection matters more than technology.</p>
            </Link>
            <Link href="/insights/the-eye-you-least-suspect" className="related-card">
              <h3>The Eye You Least Suspect</h3>
              <p>He assumed his right eye was getting worse. The real problem was in his left.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the answer is not yet. Timing and honest evaluation matter.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
