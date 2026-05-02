import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

export const metadata = {
  title: 'When Patients Wait: The Psychology of Timing in Cataract Surgery',
  description: 'A 76-year-old woman had a perfect outcome but regretted waiting. A reflection on outcome bias, anxiety avoidance, and the psychology of surgical timing.',
  alternates: { canonical: '/insights/when-patients-wait' },
  openGraph: {
    title: 'When Patients Wait | Dr. Keith Tokuhara',
    description: 'The psychology behind surgical timing, why guilt follows great outcomes, and why readiness is not the same as candidacy.',
    url: 'https://drtokuhara.com/insights/when-patients-wait',
  },
};


const jsonLd = [
  articleSchema({
    title: 'When Patients Wait',
    description: 'A reflection on outcome bias, anxiety avoidance, and the psychology of surgical timing.',
    slug: '/insights/when-patients-wait',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Patients Wait', href: '/insights/when-patients-wait' },
  ]),
];

export default function InsightWhenPatientsWait() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-woman-outdoor-cafe.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <span className="insight-hero-cluster">Decisions & Timing</span>
          <h1>When Patients <strong>Wait</strong></h1>
          <p className="page-hero-sub">Her outcome was excellent. Her biggest regret was that she didn't do it sooner. The psychology of timing in cataract surgery.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <p className="body-lead">
            A 76-year-old woman returned to clinic this week for her routine follow-up. I first met her four years ago.
          </p>
          <p>
            At that time, her vision measured 20/40-2. She technically qualified for cataract surgery, but functionally she was still managing. I told her there was no urgency.
          </p>
          <p>
            Like many patients, she had other things going on in life. More importantly, she was anxious about surgery. So she waited.
          </p>
          <p>
            Two years later, her vision declined to 20/50. At that point, she felt ready and elected to proceed. The surgery went smoothly. Her outcome was excellent. She achieved glasses-free vision and was happy.
          </p>
          <p>
            But at her visit this week, two years after surgery, she brought up something unexpected. Not dissatisfaction. Not a complication. Guilt.
          </p>
          <p>
            She told me her biggest regret was that she waited.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/lifestyle-man-morning-coffee.jpg"
              alt="Man enjoying morning coffee, reflecting on decisions"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">The Psychology of <strong>"Waiting Too Long"</strong></h2>
          <p>
            From a purely ophthalmic standpoint, her course was completely appropriate. She did not harm her eye by waiting. Her surgical outcome was not compromised. This is not a case of delay leading to worse anatomy or a more complex operation.
          </p>
          <p>
            But psychologically, the experience was very real.
          </p>
          <p>
            Patients often reinterpret the past through the clarity of a successful outcome. Once the fear is gone and the benefit is obvious, the prior hesitation can feel irrational in hindsight. That's where guilt creeps in.
          </p>
          <p>
            There are a few forces at play here:
          </p>
          <p>
            <strong>Outcome bias.</strong> Once patients see a great result, they assume the decision should have been obvious earlier. The uncertainty they felt at the time gets erased. They judge their past self using information they didn't have yet.
          </p>
          <p>
            <strong>Anxiety avoidance.</strong> Her delay wasn't due to neglect or poor judgment. It was protective. Anxiety around surgery is a powerful driver of avoidance. Avoidance reduces stress in the short term, which reinforces the behavior. That's not weakness. That's human neurobiology doing its job.
          </p>
          <p>
            <strong>Retrospective self-criticism.</strong> After the fact, patients often replace fear with self-judgment: "I should have done this sooner." This is less about the surgery and more about how we relate to our past decisions.
          </p>
          <p>
            What's interesting is that the guilt persists even when the outcome is excellent. It's not tied to harm. It's tied to identity. Patients want to see themselves as decisive, rational, and in control. Delay challenges that self-image.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">A Philosophical Lens: Timing, Agency, and <strong>Readiness</strong></h2>
          <p>
            There's a deeper question underneath this: When is the right time to act?
          </p>
          <p>
            In medicine, we tend to frame readiness in clinical terms. Visual acuity thresholds. Functional impairment. Surgical risk.
          </p>
          <p>
            But patients don't live in that framework alone. Their decisions sit at the intersection of biology, emotion, and life context.
          </p>
          <p>
            <strong>The illusion of the "optimal timeline."</strong> It's tempting to believe there is a single correct moment when surgery should have happened. But in reality, that moment doesn't exist in a vacuum. It depends on psychological readiness, not just clinical indication. A technically "earlier" surgery is not necessarily a better decision if the patient is not mentally prepared.
          </p>
          <p>
            <strong>The role of courage.</strong> We often define courage as acting quickly or decisively. But in cases like this, courage is quieter. It's the eventual willingness to face something that once felt overwhelming. She didn't fail for waiting. She succeeded in getting there.
          </p>
          <p>
            <strong>Compassion toward the past self.</strong> There's a philosophical idea that we should judge past decisions based on the information and emotional capacity we had at the time, not what we know now. Her earlier self wasn't wrong. She was responding honestly to fear.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Ophthalmologist's <strong>Role</strong></h2>
          <p>
            Cases like this are a reminder that cataract surgery is not just a technical decision. It's a psychological one.
          </p>
          <p>
            We often focus on answering, "Do you need surgery?"
          </p>
          <p>
            But patients are really asking something else: "Am I ready?"
          </p>
          <p>
            Those are not the same question.
          </p>
          <p>
            And sometimes, when patients ask that question, they're not ready yet. Not because their cataract isn't advanced enough, but because they haven't crossed the psychological threshold.
          </p>
          <p>
            That's not a failure of counseling. It's part of the process.
          </p>
          <p>
            Our role is not just to identify candidacy, but to normalize the timeline. To make space for hesitation without framing it as a mistake.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What I Told <strong>Her</strong></h2>
          <p>
            I told her she shouldn't feel guilty.
          </p>
          <p>
            She made the right decision at the time she made it. She allowed herself to move at a pace that respected her fear. And when she was ready, she acted.
          </p>
          <p>
            What matters is not the two years she waited.
          </p>
          <p>
            What matters is that she ultimately chose to move forward, and she now gets to live with the benefits of that decision every day.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>For patients, the lesson is simple: There is no perfect time for cataract surgery. There is only your time. For surgeons, the lesson is just as important: A good outcome is not just visual acuity. It's helping patients arrive at the decision without carrying unnecessary regret afterward. Because sometimes, the hardest part of cataract surgery isn't the operation. It's getting to the point where the patient is ready to say yes.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '48px'}}>
            <Image
              src="/media/stock-seniors-resort-promenade-night.jpg"
              alt="Seniors walking along a resort promenade at night - enjoying life with clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/insights/when-is-the-right-time" className="related-card">
              <h3>When Is the Right Time?</h3>
              <p>The myth of "bad enough" and why the right time depends on your life, not a number on a chart.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>A woman delayed care for six years. She didn't need a surgical plan. She needed permission.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
