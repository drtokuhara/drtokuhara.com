import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara - real stories, real decisions, and the things about eye care that don\'t fit in a brochure.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights from the Clinic | Dr. Keith Tokuhara',
    description: 'Real clinical stories and reflections on cataracts, surgery decisions, and patient care from a Coachella Valley ophthalmologist.',
    url: 'https://drtokuhara.com/insights',
  },
};

const insights = [
  {
    slug: 'when-is-the-right-time',
    title: 'When Is the Right Time for Cataract Surgery?',
    date: 'April 2026',
    description: 'The question I hear more than any other. There is no magic number. The right time depends on your life, not a chart.',
    cluster: 'Decisions & Timing',
  },
  {
    slug: 'when-patients-wait',
    title: 'When Patients Wait',
    date: 'April 2026',
    description: 'Her outcome was excellent. Her biggest regret was that she didn\'t do it sooner. The psychology of timing, outcome bias, and why readiness is not the same as candidacy.',
    cluster: 'Decisions & Timing',
  },
  {
    slug: 'the-man-who-wanted-his-younger-eyes-back',
    title: 'The Man Who Wanted His Younger Eyes Back',
    date: 'April 2026',
    description: 'He didn\'t just want better vision. He wanted to feel the way he did before glasses became part of his identity. Sometimes the most important surgical decision is choosing to wait.',
    cluster: 'Decisions & Timing',
  },
  {
    slug: 'when-guilt-replaces-explanation',
    title: 'When Guilt Replaces Explanation',
    date: 'April 2026',
    description: 'A patient was told his cataract complication was his fault. It wasn\'t. What happens when blame replaces compassion in medicine.',
    cluster: 'Ethics & Trust',
  },
  {
    slug: 'the-reader-who-almost-gave-up-her-books',
    title: 'The Reader Who Almost Gave Up Her Books',
    date: 'April 2026',
    description: 'An 81-year-old avid reader delayed surgery for years because nobody told her she had a choice about how she would see afterward.',
    cluster: 'Lens Selection',
  },
  {
    slug: 'permission-to-see-again',
    title: 'Permission to See Again',
    date: 'April 2026',
    description: 'A woman spent six years caring for her husband. When she finally came in for her own eyes, she didn\'t need a surgical plan. She needed permission.',
    cluster: 'Decision Making',
  },
  {
    slug: 'the-number-that-wasnt-the-problem',
    title: 'The Number That Wasn\'t the Problem',
    date: 'April 2026',
    description: 'A man with keratoconus saw residual astigmatism after cataract surgery and wanted a lens exchange. The real answer was understanding why that number wasn\'t what it seemed.',
    cluster: 'Surgical Restraint',
  },
  {
    slug: 'when-more-isnt-better',
    title: 'When More Isn\'t Better',
    date: 'April 2026',
    description: 'A 32-year-old had a multifocal lens, then a YAG, then LASIK. A year later she still wasn\'t seeing right. Sometimes each fix creates the need for the next one.',
    cluster: 'Expectations & Reality',
  },
  {
    slug: 'twenty-years-forward',
    title: 'Twenty Years Forward',
    date: 'April 2026',
    description: 'She chose a multifocal lens at 68. Now at 88 with macular degeneration, that decision looks different. What this teaches about lens choices, tradeoffs, and making decisions for a future you cannot predict.',
    cluster: 'Lens Selection',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-market-sunlight.jpg"
          alt="Couple browsing a sunlit market together"
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.4) 0%, rgba(0,20,30,0.7) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <h1>Insights from the <strong>Clinic</strong></h1>
          <p className="page-hero-sub">These aren't medical articles. They're reflections - on the patients I see, the decisions we navigate together, and what I've learned about the space between a diagnosis and a choice.</p>
        </div>
      </section>

      <section className="section section-white" style={{paddingBottom: 0}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="content-image">
            <Image
              src="/media/20210109_095037.jpg"
              alt="Inside Desert Vision Center - where these conversations happen"
              width={800}
              height={380}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="content-image" style={{maxWidth: '800px', margin: '0 auto 48px'}}>
            <Image
              src="/media/stock-seniors-outdoor-toast.jpg"
              alt="Seniors toasting at an outdoor dinner - the moments that matter after cataract surgery"
              width={800}
              height={533}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <div className="insights-grid">
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="insight-card">
                <span className="insight-cluster">{insight.cluster}</span>
                <h2 className="insight-card-title">{insight.title}</h2>
                <p className="insight-card-desc">{insight.description}</p>
                <span className="insight-date">{insight.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
