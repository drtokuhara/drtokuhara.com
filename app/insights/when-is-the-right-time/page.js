import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

export const metadata = {
  title: 'When Is the Right Time for Cataract Surgery?',
  description: 'The question Dr. Tokuhara hears more than any other. There is no magic number. The right time depends on your life, not a chart.',
  alternates: { canonical: '/insights/when-is-the-right-time' },
  openGraph: {
    title: 'When Is the Right Time for Cataract Surgery? | Dr. Keith Tokuhara',
    description: 'A reflection on timing, personal thresholds, and why waiting feels safe but is never neutral.',
    url: 'https://drtokuhara.com/insights/when-is-the-right-time',
  },
};


const jsonLd = [
  articleSchema({
    title: 'When Is the Right Time for Cataract Surgery?',
    description: 'The right time depends on your life, not a chart. Dr. Tokuhara explains how to think about timing.',
    slug: '/insights/when-is-the-right-time',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Is the Right Time for Cataract Surgery?', href: '/insights/when-is-the-right-time' },
  ]),
];

export default function InsightWhenIsTheRightTime() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-outdoor-sunshine.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <span className="insight-hero-cluster">Decisions & Timing</span>
          <h1>When Is the <strong>Right Time?</strong></h1>
          <p className="page-hero-sub">The question I hear more than any other. There is no magic number. The right time depends on your life, not a chart.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <p className="body-lead">
            "Do I need surgery yet? Am I ready?"
          </p>
          <p>
            I hear some version of this every single day. And it tells me something important about the person asking: they already know surgery is in their future. They're not asking if. They're asking when.
          </p>
          <p>
            Most of the time, what they really want to know is whether they'd be making a mistake by acting now. Too early. Too hasty. Like they need permission.
          </p>
          <p>
            Here's what I've learned after thousands of these conversations: there is no magic number.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/x-patient-contemplation-waiting-room.jpg"
              alt="Patient contemplating the timing of cataract surgery in a waiting room"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">The Myth of <strong>"Bad Enough"</strong></h2>
          <p>
            Somewhere along the way, patients picked up the idea that cataracts need to be "ripe" before surgery makes sense. That you have to wait until your vision is terrible. That the worse it gets, the more justified you are in doing something about it.
          </p>
          <p>
            That's not how it works.
          </p>
          <p>
            No one experiences a cataract as a number on a chart. You experience it as a disruption. Headlights that didn't used to bother you. A book that takes more effort than it should. Colors that look washed out compared to how you remember them. A slow, quiet erosion of things you used to do without thinking.
          </p>
          <p>
            The real question isn't whether your cataract has reached some clinical threshold. It's whether your daily life has crossed a personal one.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Two <strong>Uncertainties</strong></h2>
          <p>
            Every patient sitting in my chair is weighing two things, whether they realize it or not:
          </p>
          <p>
            The first is the known inconvenience of their current vision. It's familiar. Manageable. They've adapted. It's not great, but it's predictable.
          </p>
          <p>
            The second is the unknown outcome of surgery. Will it work? What are the risks? Will I see better, or just differently?
          </p>
          <p>
            This is a genuinely difficult comparison, because humans are wired to tolerate what they know and fear what they don't. We'll put up with a surprising amount of discomfort before we'll accept uncertainty, even when the odds are overwhelmingly in our favor.
          </p>
          <p>
            So waiting often feels like the safe choice. But it's not a neutral choice. Vision doesn't pause while you decide. The things you give up while waiting don't come back on their own.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">When the Equation <strong>Flips</strong></h2>
          <p>
            Patients who tell me "I'm ready" have already resolved something internally. The expected benefit of surgery has clearly exceeded the comfort of the status quo. They didn't need me to tell them it was time. They needed me to confirm what they already felt.
          </p>
          <p>
            For everyone else, the most useful thing I can do isn't to declare them ready or not ready. It's to help them see their own equation clearly:
          </p>
          <p>
            <strong>What are you actually giving up right now?</strong> Not in theory. In your daily life. This week.
          </p>
          <p>
            <strong>What specifically worries you about surgery?</strong> Not vague fear. The actual concern. Because most of the time, it's something I can address directly.
          </p>
          <p>
            <strong>What would improvement realistically look like for you?</strong> Not perfection. Not 20-year-old eyes. But meaningful, noticeable improvement in the things that matter to you.
          </p>
          <p>
            When those three things become clear, the decision usually resolves itself. No pressure needed.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>You don't have to wait until it's unbearable. You don't need anyone's permission. The right time is when the cost of staying the same has started to exceed the cost of change, and only you can feel where that line is. My job is to make sure you have the information to draw it clearly.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '48px'}}>
            <Image
              src="/media/stock-couple-night-walk-dog.jpg"
              alt="Couple walking their dog at night - seeing clearly when it matters"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/insights/when-patients-wait" className="related-card">
              <h3>When Patients Wait</h3>
              <p>The psychology of timing in cataract surgery, and why guilt often follows a great outcome.</p>
            </Link>
            <Link href="/insights/permission-to-see-again" className="related-card">
              <h3>Permission to See Again</h3>
              <p>A woman spent six years caring for her husband. When she finally came in, she needed permission, not a plan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
