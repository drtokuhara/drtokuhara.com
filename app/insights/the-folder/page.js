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
  title: 'The Folder - Dr. Keith Tokuhara',
  description: 'He brought a three-ring binder with tabs labeled by lens type. Three months of research in one folder. Then his surgeon showed him what his eye was actually telling them.',
  keywords: ['cataract lens research', 'choosing cataract lens', 'lens decision overwhelm', 'biometry measurements', 'personalized cataract surgery'],
  alternates: { canonical: '/insights/the-folder' },
  openGraph: {
    title: 'The Folder | Dr. Keith Tokuhara',
    description: 'Three months of research. Printouts from four websites. A Reddit thread. Two YouTube transcripts. All in a three-ring binder. Then his surgeon said something he hadn\'t read anywhere.',
    url: 'https://drtokuhara.com/insights/the-folder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Folder',
    description: 'He brought three months of lens research in a binder. His surgeon looked at his measurements and made the complex decision simple.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much research should I do before choosing a cataract lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research is valuable. It helps you understand your options and ask better questions. But general information from websites and forums cannot replace specific biometry measurements from your eye. The best approach: learn enough to have an informed conversation with your surgeon, then let your actual eye anatomy guide the final decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do biometry measurements tell a cataract surgeon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biometry measurements capture corneal curvature, axial length (eye length), anterior chamber depth, and lens thickness. These measurements tell the surgeon which lens power you need and which lens type will perform best in your specific eye. They make the difference between a general recommendation and a personalized one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring my cataract research to the consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A good surgeon welcomes questions and research. Your job is to learn enough to ask good questions. The surgeon\'s job is to match those questions to your actual eye measurements. The consultation is where general information meets specific anatomy.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Folder',
    description: 'He brought a three-ring binder with tabs labeled by lens type. Three months of research in one folder. Then his surgeon showed him what his eye was actually telling them.',
    slug: '/insights/the-folder',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Folder', href: '/insights/the-folder' },
  ]),
  faqSchema,
];

export default function InsightTheFolder() {
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
          <h1>The <strong>Folder</strong></h1>
          <p className="page-hero-sub">He brought three months of research in a three-ring binder. His surgeon looked at the measurements and made the complex decision simple.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            He brought a three-ring binder. Tabs labeled by lens type. Printouts from four different medical websites, a Reddit thread, and two YouTube transcripts. He had been researching for three months.
          </p>
          <p>
            His wife sat in the corner with her arms crossed. She had heard enough about astigmatism-correcting lenses to last a lifetime.
          </p>
          <p>
            Dr. Tokuhara picked up the binder, flipped through a few pages, and set it down.
          </p>
          <p>
            "You've done your homework. Let me show you what your eye is actually telling us."
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Numbers <strong>Said</strong></h2>
          <p>
            He pulled up the biometry scan. Walked through the numbers. Corneal curvature, axial length, the small astigmatism in the right eye, none in the left.
          </p>
          <p>
            Then he said something the man hadn't read in any of his research:
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"For your left eye, the standard lens is going to give you the cleanest result. No visual tradeoffs. For the right, we should correct that astigmatism with a toric lens. You won't need to worry about the premium multifocal decision for either eye. It doesn't fit your measurements."</p>
          </div></BlurReveal>

          <p>
            The man was quiet for a moment. Three months of research had been building toward a big, complex decision. And the surgeon just made it simple.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">That's <strong>It?</strong></h2>
          <p>
            His wife uncrossed her arms.
          </p>
          <p>
            "That's it?"
          </p>
          <p>
            "That's it. Unless you want to talk through it more. We have time."
          </p>
          <p>
            They talked for another twenty minutes. Not because they needed to. Because they finally could, with someone who wasn't trying to sell them something.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/elderly-man-courtyard-desert.jpg"
              alt="Senior man in contemplation, desert setting"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Research Meets <strong>Reality</strong></h2>
          <p>
            The research was valuable. It helped him understand the landscape, the terminology, the tradeoffs. It gave him the foundation to ask good questions.
          </p>
          <p>
            But it couldn't tell him what his specific eyes needed. That required measurements. Real data from his cornea, his anterior chamber, his axial length.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>General research tells you what's possible. Biometry tells you what's best for your eyes. The consultation is where the two meet.</strong></p>
          </div></BlurReveal>

          <p>
            The folder wasn't wasted effort. It was preparation. It meant he could have a conversation instead of a lecture. But the decision wasn't in the folder. It was in the measurements.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Bring Your <strong>Questions</strong></h2>
          <p>
            If you've been researching cataract lenses for weeks or months, you're not wasting time. You're getting ready for the right conversation.
          </p>
          <p>
            Bring your folder. Bring your questions. Bring your list of concerns.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Your job was to learn enough to ask good questions. My job is to match those questions to your actual anatomy. Let's do this together."</p>
          </div></BlurReveal>

          <p>
            The surgeon who spends twenty minutes walking you through your specific measurements instead of repeating generic talking points is the one who understands the difference between information and precision.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to the lens options available for cataract surgery.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>Choosing the Standard Lens</h3>
              <p>When the standard monofocal lens is the right decision.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>What to look for beyond credentials and marketing.</p>
            </Link>
            <Link href="/cataract-pre-op" className="related-card">
              <h3>Cataract Pre-Op</h3>
              <p>What happens at your pre-operative appointment.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
