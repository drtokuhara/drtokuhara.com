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
  title: 'The Standard Lens Was the Right Call - Dr. Keith Tokuhara',
  description: 'A patient researched premium lenses, asked all the questions, then chose the standard monofocal lens on his surgeon\'s recommendation. Six months later, no regrets. Why the standard lens is sometimes the best decision.',
  keywords: ['standard lens satisfaction', 'monofocal lens results', 'standard vs premium cataract lens', 'cataract surgery standard lens', 'monofocal IOL patient experience'],
  alternates: { canonical: '/insights/the-standard-lens-was-the-right-call' },
  openGraph: {
    title: 'The Standard Lens Was the Right Call | Dr. Keith Tokuhara',
    description: 'He researched premium lenses, asked every question, and then chose the standard lens. Six months later, he has no regrets. A patient story about trusting the recommendation.',
    url: 'https://drtokuhara.com/insights/the-standard-lens-was-the-right-call',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Standard Lens Was the Right Call',
    description: 'He researched every premium option, the multifocal, the extended depth of focus lens. Then he chose the standard lens. Six months later, he has no regrets.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you get good vision with a standard monofocal lens after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The standard monofocal lens delivers excellent distance vision after cataract surgery. Most patients see 20/20 or 20/25 at distance and use inexpensive reading glasses for close work. The standard lens has the longest track record of any IOL and produces clean, high-contrast vision with minimal visual side effects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a surgeon recommend a standard lens instead of a premium lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A surgeon may recommend the standard lens when a patient has dry eye, corneal irregularity, prior LASIK, or other conditions that could reduce the performance of a multifocal or extended depth of focus lens. The standard lens minimizes visual side effects like halos and starbursts. Recommending it when it fits best is a sign of a surgeon prioritizing outcomes over revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I regret choosing a standard lens over a premium lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many patients who choose the standard monofocal lens are highly satisfied with their results. Distance vision is typically excellent, and reading glasses are a simple, affordable solution for close work. The key is matching the lens to your specific eye measurements, lifestyle, and expectations. When the standard lens is the right match, patients rarely regret it.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Standard Lens Was the Right Call',
    description: 'A patient researched premium lenses, asked all the questions, then chose the standard monofocal lens. Six months later, no regrets. Why the standard lens is sometimes the best decision.',
    slug: '/insights/the-standard-lens-was-the-right-call',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Standard Lens Was the Right Call', href: '/insights/the-standard-lens-was-the-right-call' },
  ]),
  faqSchema,
];

export default function InsightStandardLensRightCall() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-decision-moment.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Decisions &amp; Timing</span>
          <h1>The Standard Lens Was the <strong>Right Call</strong></h1>
          <p className="page-hero-sub">He researched every premium option, the multifocal, the extended depth of focus lens. Then he chose the standard lens. Six months later, he has no regrets.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            A patient came in uncertain. He had been reading about premium lenses online, asking on Nextdoor, scrolling through Reddit threads at midnight. Everyone had an opinion. The premium options sounded incredible. The multifocal promised everything at once.
          </p>
          <p>
            He came to the consultation with a list of questions. Good questions. He wanted to know about every premium option available, the extended depth of focus lenses, the toric for his mild astigmatism. He had done his homework.
          </p>
          <p>
            After examining his eyes, running the dry eye screening, taking corneal measurements, and evaluating his tear film, I recommended the standard monofocal lens. Set for distance.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Surprise on <strong>His Face</strong></h2>
          <p>
            He was surprised. Maybe even a little disappointed. He expected to hear about the latest technology. He expected me to recommend the option that sounded the most advanced.
          </p>
          <p>
            I explained. His corneal surface was slightly irregular from dry eye. A multifocal lens would amplify halos and glare, especially at night. The extended depth of focus lens would give him some intermediate range, but with his corneal surface, the tradeoffs were real.
          </p>
          <p>
            The standard lens, set for distance, would give him the cleanest, most reliable vision.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"When I recommend the standard lens, it is not because I am cutting corners. It is because I am being precise."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Six Months <strong>Later</strong></h2>
          <p>
            He came back for his six-month visit. Driving without glasses. Playing golf. Reading menus on his phone with a pair of inexpensive readers from the drugstore.
          </p>
          <p>
            He told me he was glad he listened. He said the decision felt counterintuitive at first, like choosing the basic option when he could afford the upgrade. But then he realized it was not basic. It was matched.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/elderly-man-courtyard-desert.jpg"
              alt="Senior man relaxing in a desert courtyard with mountain views"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Not a Consolation <strong>Prize</strong></h2>
          <p>
            The standard lens is not a consolation prize. It is a decision. For patients with certain corneal conditions, dry eye, prior LASIK, or specific visual demands, it can outperform a premium lens. Not in theory. In practice, in real-world vision, in the way life actually looks day to day.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>What patients actually experience with a standard monofocal lens: clear distance vision, minimal visual side effects, no halos or starbursts from the lens itself, and a proven track record spanning decades of cataract surgery.</strong></p>
          </div></BlurReveal>

          <p>
            The premium lenses are excellent. I implant them often and my patients love them. But they are excellent for the right patients. When I see eyes that will do better with a standard lens, that is what I recommend. Every time.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Right Lens for <strong>Your Eyes</strong></h2>
          <p>
            The best lens is the one matched to your measurements, your lifestyle, and your expectations. Sometimes that is the premium option. Sometimes it is the standard one. Either way, you will see clearly.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The standard lens is not a compromise. For a lot of patients, it is the cleanest, most reliable vision I can give them."</p>
          </div></BlurReveal>

          <p>
            Choosing the standard lens is not settling. It is trusting a surgeon who looked at your eyes and made a recommendation based on what he saw, not what costs more.
          </p>
          <p>
            If you leave a consultation and the surgeon recommends the standard lens, pay attention. It might mean you found a surgeon who cares more about your outcome than the upgrade fee.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>Choosing the Standard Lens</h3>
              <p>The clinical perspective on when and why the standard monofocal lens is the best fit.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to the lens options available for cataract surgery.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest look at when premium lenses deliver and when they do not.</p>
            </Link>
            <Link href="/cataract-recovery" className="related-card">
              <h3>Cataract Recovery</h3>
              <p>What to expect in the days and weeks after surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
