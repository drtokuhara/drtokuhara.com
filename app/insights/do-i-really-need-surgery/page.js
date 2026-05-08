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
  title: '"Do I Really Need Cataract Surgery Yet?" - A Patient Story',
  description: 'A 70-year-old man was told surgery could eliminate his glasses. His vision was 20/25+. After an honest conversation, we decided together to wait. Sometimes the best surgery is the one you do not do yet.',
  alternates: { canonical: '/insights/do-i-really-need-surgery' },
  openGraph: {
    title: 'Do I Really Need Cataract Surgery Yet? | Dr. Keith Tokuhara',
    description: 'Just because cataracts can be fixed does not mean they need to be fixed right now. A reflection on timing, honesty, and knowing when to wait.',
    url: 'https://drtokuhara.com/insights/do-i-really-need-surgery',
  },
};

const jsonLd = [
  articleSchema({
    title: 'Do I Really Need Cataract Surgery Yet?',
    description: 'A patient was told surgery could fix everything. His exam told a different story. A reflection on surgical timing and restraint.',
    slug: '/insights/do-i-really-need-surgery',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Do I Really Need Surgery Yet?', href: '/insights/do-i-really-need-surgery' },
  ]),
];

export default function InsightDoINeedSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-iris-closeup-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Surgical Restraint</span>
          <h1>"Do I Really Need Cataract Surgery <strong>Yet?"</strong></h1>
          <p className="page-hero-sub">Just because something can be fixed does not mean it needs to be fixed right now.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            A 70-year-old man recently came in to see me for a cataract consultation. He had just been told during a routine eye exam that he had cataracts and that surgery could "fix everything" and even eliminate his need for glasses.
          </p>
          <p>
            For him, that was exciting. He had been farsighted his whole life and wore fairly strong glasses. The idea of being free from them sounded almost too good to pass up.
          </p>
          <p>
            But when we looked a little closer, the story changed.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Exam <strong>Showed</strong></h2>
          <p>
            With his glasses on, he was seeing 20/25+ in both eyes. More importantly, when I asked him about his day-to-day life, he was not struggling. He was reading, driving, and functioning just fine.
          </p>
          <p>
            On exam, he did have early cataracts, but they were not advanced. We also found a mild corneal surface condition and some very early age-related changes in the retina. These are subtle findings, but they matter when considering surgery, especially if we are talking about premium lens implants designed to reduce dependence on glasses.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Honest <strong>Conversation</strong></h2>
          <p>
            Modern cataract surgery is remarkable, and lens implants today can do more than ever before. But they are not perfect. Some patients experience nighttime halos or glare. Contrast sensitivity can be reduced. And certain eye conditions can limit how well these lenses perform.
          </p>
          <p>
            In his case, the most important question was not "Can we do surgery?"
          </p>

          <BlurReveal><div className="pull-quote">
            <p>It was: "Do we need to?"</p>
          </div></BlurReveal>

          <p>
            By the end of the visit, he said something telling. He admitted he had some hesitation all along and had mainly come in because he felt he <em>should</em> move forward after what he had been told.
          </p>
          <p>
            We decided together to wait.
          </p>
          <p>
            Not because surgery is bad, but because timing matters. Cataract surgery is best done when a patient is truly experiencing visual limitations that affect their quality of life.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-couple-lawn-sunset-coachella.jpg"
              alt="Couple enjoying a Coachella Valley sunset"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">The <strong>Takeaway</strong></h2>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Just because something can be fixed does not mean it needs to be fixed right now.</strong></p>
          </div></BlurReveal>

          <p>
            Good medical care is not just about offering the latest technology. It is about matching the right treatment to the right patient at the right time.
          </p>
          <p>
            If you are asking yourself, "Am I ready for cataract surgery?" that question alone is worth exploring. The answer is not always immediate, and it should not be rushed.
          </p>
          <p>
            Sometimes, the best decision is to wait until your eyes, and your life, tell you it is time.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>There is a version of medicine where the surgeon says yes to everything because surgery is revenue. There is another version where the surgeon says "not yet" because that is what is right. I know which version I want to practice. And I know which version patients deserve.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/when-is-the-right-time" className="related-card">
              <h3>When Is the Right Time?</h3>
              <p>The question I hear more than any other. There is no magic number.</p>
            </Link>
            <Link href="/insights/when-ai-recommends-your-lens" className="related-card">
              <h3>When AI Recommends Your Lens</h3>
              <p>A patient used AI to choose his lens. His eyes told a different story.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on premium vs standard lenses.</p>
            </Link>
            <Link href="/ethical-cataract-care" className="related-card">
              <h3>Ethical Cataract Care</h3>
              <p>Why financial incentives should never influence your surgical recommendation.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
