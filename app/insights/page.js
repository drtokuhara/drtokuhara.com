import Link from 'next/link';

export const metadata = {
  title: 'Insights from the Clinic',
  description: 'Clinical reflections from Dr. Keith Tokuhara — real stories, real decisions, and the things about eye care that don\'t fit in a brochure.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights from the Clinic | Dr. Keith Tokuhara',
    description: 'Real clinical stories and reflections on cataracts, surgery decisions, and patient care from a Coachella Valley ophthalmologist.',
    url: 'https://drtokuhara.com/insights',
  },
};

const insights = [
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
];

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Insights from the <strong>Clinic</strong></h1>
          <p className="page-hero-sub">These aren't medical articles. They're reflections — on the patients I see, the decisions we navigate together, and what I've learned about the space between a diagnosis and a choice.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
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
