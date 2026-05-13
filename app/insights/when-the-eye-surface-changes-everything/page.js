import Link from 'next/link';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'When the Eye Surface Changes Everything | Dr. Keith Tokuhara',
  description: 'Advanced lens implants can only perform as well as the eye surface allows. Dry eye and corneal irregularity can make premium IOL adjustments unpredictable. Why patient selection matters more than technology selection.',
  alternates: { canonical: '/insights/when-the-eye-surface-changes-everything' },
  openGraph: {
    title: 'When the Eye Surface Changes Everything | Dr. Keith Tokuhara',
    description: 'She did everything right after cataract surgery. The problem was not the lens. It was the surface of the eye. A reflection on why the most advanced technology is not always the best choice.',
    url: 'https://drtokuhara.com/insights/when-the-eye-surface-changes-everything',
  },
};

const jsonLd = [
  articleSchema({
    title: 'When the Eye Surface Changes Everything',
    description: 'Advanced lens implants can only perform as well as the eye surface allows. A reflection on dry eye, corneal irregularity, and why patient selection matters more than technology selection.',
    slug: '/insights/when-the-eye-surface-changes-everything',
    datePublished: '2026-05-10',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When the Eye Surface Changes Everything', href: '/insights/when-the-eye-surface-changes-everything' },
  ]),
];

export default function InsightWhenTheEyeSurfaceChangesEverything() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/eye-iris-detail-warm.mp4"
        poster="/media/when-the-eye-surface-changes-everything-hero.png"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Clinical Insight</span>
          <h1>When the Eye Surface Changes <strong>Everything</strong></h1>
          <p className="page-hero-sub">She did everything right after surgery. Attended every appointment. Drove hours for each visit. The lens was fine. The problem was the surface of her eye, and no amount of adjustment was going to fix it.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            An 82-year-old woman recently came to my office for a second opinion. She had undergone cataract surgery at another facility in Los Angeles and received a newer lens implant designed to allow doctors to fine-tune vision after the procedure using special light treatments. The concept behind the technology is genuinely appealing: rather than committing to a single prescription at the time of surgery, the doctor can make precise adjustments afterward.
          </p>
          <p>
            She had done everything right. She attended every follow-up visit, underwent repeated measurements and dilation exams, sat patiently through multiple adjustment treatments. She made several long drives back and forth to Los Angeles, each time hoping this would be the visit that finally brought clarity.
          </p>
          <p>
            It never came.
          </p>
          <p>
            By the time she reached my office, she was exhausted. Not just physically from the travel, but emotionally. She had spent months investing time, money, and hope into a process that kept promising improvement but never quite delivered it.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Examination <strong>Revealed</strong></h2>
          <p>
            When I examined her eyes, the lens implants themselves looked well positioned and healthy. Her retina was normal. By every standard measure, the surgery had been technically successful.
          </p>
          <p>
            But the front surface of her eye told a different story.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>She had significant dry eye disease and irregularities across the corneal surface, including areas of mild corneal haze. These surface problems were causing her vision to fluctuate from visit to visit, making every measurement slightly different, and every adjustment based on those measurements less predictable than it needed to be.</strong></p>
          </div></BlurReveal>

          <p>
            This is something many patients do not realize, and it is one of the most important things I try to explain during consultations. Advanced lens implants can only perform as well as the surface of the eye allows. The lens sits inside the eye. Light has to pass through the cornea and the tear film before it ever reaches the implant. If that front surface is dry, irregular, or unstable, even the most sophisticated lens technology cannot fully compensate.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Technology <strong>Paradox</strong></h2>
          <p>
            Newer lens technologies that allow post-operative fine-tuning depend on extremely precise measurements taken after surgery. The idea is elegant: measure the eye once it has healed, then dial in the prescription with remarkable accuracy. In the right patient, the results can be excellent.
          </p>
          <p>
            But that precision cuts both ways.
          </p>
          <p>
            If the eye surface is dry or irregular, the measurements themselves become unreliable. They shift from one visit to the next, not because the lens has changed, but because the surface through which we are measuring keeps changing. Each adjustment is based on a snapshot that may not represent the eye's true state.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>When the foundation is unstable, precision built on top of it becomes unpredictable. The technology is only as reliable as the surface it depends on.</p>
          </div></BlurReveal>

          <p>
            For patients with significant dry eye disease or corneal irregularity, a standard monofocal lens implant may sometimes provide a more stable and satisfying result than a premium technology lens. It is not a lesser choice. It is a different kind of precision: the precision of matching the right solution to the right eye.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Emotional <strong>Cost</strong></h2>
          <p>
            One of the hardest parts of situations like this has nothing to do with the eye itself. It is the emotional toll. Patients often invest significant money in premium lens technology, expecting a transformative result. They invest time traveling to appointments. They invest hope with each visit, trusting that the next adjustment will be the one that finally works.
          </p>
          <p>
            When it does not, disappointment can build quietly, visit after visit. Patients start to wonder whether something went wrong, whether they made a bad decision, whether their vision will ever feel right. That kind of slow-building frustration is real, and it deserves to be acknowledged.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The surgery can be technically successful and the patient can still be suffering. These two things are not contradictions. They are a reminder that outcomes are measured not just in visual acuity, but in how the patient actually experiences their vision day to day.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Patient Selection Over Technology <strong>Selection</strong></h2>
          <p>
            Modern cataract surgery offers remarkable options. The range of lens implants available today is broader and more capable than at any point in the history of the field. That is genuinely exciting.
          </p>
          <p>
            But more options also means more responsibility. Not every eye is a good candidate for every lens. The surgeon's role is not simply to offer the newest or most expensive technology. It is to evaluate each patient's eyes carefully, understand their surface health, their visual goals, their anatomy, and then recommend the option most likely to provide stable, comfortable, functional vision for that individual.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>Sometimes the best outcome comes not from choosing the most advanced lens, but from choosing the most appropriate one. That distinction matters more than most people realize.</p>
          </div></BlurReveal>

          <p>
            This is not a criticism of any particular technology. These are remarkable innovations, and in the right patient, they deliver outstanding results. But the right patient is the key phrase. Patient selection is, in many ways, the most important decision a cataract surgeon makes, and it happens before the surgery ever begins.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The most advanced technology is not always the best technology for every eye. A careful evaluation of the whole eye, including the surface, the tear film, and the corneal health, is what allows a surgeon to match the right lens to the right patient. When that match is right, the results speak for themselves. When it is wrong, no amount of adjustment will close the gap.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/do-i-really-need-surgery" className="related-card">
              <h3>Do I Really Need Surgery Yet?</h3>
              <p>Sometimes the answer is not yet. Timing and honest evaluation matter.</p>
            </Link>
            <Link href="/insights/the-consultation-that-changed-everything" className="related-card">
              <h3>The Consultation That Changed Everything</h3>
              <p>What a thorough consultation actually looks like, and why it matters.</p>
            </Link>
            <Link href="/insights/when-the-unexpected-leads-to-the-right-outcome" className="related-card">
              <h3>When the Unexpected Leads to the Right Outcome</h3>
              <p>A complicated cataract surgery revealed an undiagnosed condition that changed the entire clinical picture.</p>
            </Link>
            <Link href="/insights/the-eye-you-least-suspect" className="related-card">
              <h3>The Eye You Least Suspect</h3>
              <p>He assumed his right eye was getting worse. The real problem was in his left.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
