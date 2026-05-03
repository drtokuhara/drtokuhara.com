import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  ParallaxImage,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Number That Wasn\'t the Problem',
  description: 'A keratoconus patient questioned his cataract surgery outcome when he saw residual astigmatism. A reflection on toric lens implants, IOL power calculations with irregular corneas, and surgical restraint.',
  alternates: { canonical: '/insights/the-number-that-wasnt-the-problem' },
  openGraph: {
    title: 'The Number That Wasn\'t the Problem | Dr. Keith Tokuhara',
    description: 'A reflection on surgical restraint, keratoconus, and why "can we do it" is a very different question from "should we."',
    url: 'https://drtokuhara.com/insights/the-number-that-wasnt-the-problem',
  },
};


const jsonLd = [
  articleSchema({
    title: 'The Number That Wasn\'t the Problem',
    description: 'A 79-year-old man with keratoconus questioned his cataract surgery. The real issue was understanding where the number came from.',
    slug: '/insights/the-number-that-wasnt-the-problem',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Number That Wasn\'t the Problem', href: '/insights/the-number-that-wasnt-the-problem' },
  ]),
];

export default function InsightTheNumber() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-friends-indoor-portrait.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Surgical Restraint</span>
          <h1>The Number That Wasn't the <strong>Problem</strong></h1>
          <p className="page-hero-sub">Sometimes a patient sees a number on a report and assumes there must be a fix. The harder conversation is explaining why that number isn't what it seems.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            His surgery went exactly as planned.
          </p>
          <p>
            He was 79. Both eyes had cataracts, and we removed them without complication. But his left eye had something else going on: keratoconus. That's a condition where the cornea, the clear front surface of the eye, is irregularly shaped. It distorts the way light enters, and no lens implant can fully correct that distortion.
          </p>
          <p>
            Before surgery, I explained this in detail. We reviewed his corneal imaging together. I recommended a standard monofocal lens rather than a toric lens, because a toric is designed to correct regular, symmetric astigmatism. His astigmatism was neither regular nor symmetric. It came from the cornea's irregular shape, not from anything a lens implant could address.
          </p>
          <p>
            He understood. He agreed. We moved forward.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Then He Saw the <strong>Number</strong></h2>
          <p>
            At his one-week follow-up, his left eye measured 20/30. That's a good result, especially for an eye with keratoconus. But the report also showed about 2 diopters of residual astigmatism. And that number changed the way he felt about everything.
          </p>
          <BlurReveal><div className="pull-quote">
            <p>"Should I have gotten the toric lens? Could we swap it out?"</p>
          </div></BlurReveal>
          <p>
            I could hear the second-guessing in his voice. He wasn't asking because something went wrong. He was asking because the number on the page made it look like something could be better. And when you see a number that seems fixable, it's hard not to wonder.
          </p>
          <p>
            Technically, yes, I could exchange the lens. It was early enough. The surgery itself would not be difficult. But the question that matters more than "can we" is always "should we."
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Problem Wasn't the <strong>Lens</strong></h2>
          <p>
            We pulled up his corneal imaging again, side by side, before and after surgery. The cornea looked the same. That was the point.
          </p>
          <div style={{margin: '32px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}}>
            <Image
              src="/media/keratoconus-topography.jpg"
              alt="Corneal topography showing irregular astigmatism from keratoconus - the color pattern reveals the asymmetric curvature that no lens implant can correct"
              width={800}
              height={500}
              style={{width: '100%', height: 'auto', display: 'block'}}
            />
            <p style={{fontSize: '13px', color: '#7a7a8e', textAlign: 'center', padding: '12px 16px', background: '#faf8f5', fontStyle: 'italic', lineHeight: '1.5'}}>
              Corneal topography of keratoconus. The irregular color pattern shows asymmetric curvature that a toric lens cannot correct. This is the map that told the real story.
            </p>
          </div>
          <p> His astigmatism wasn't coming from the implant. It was coming from the irregular corneal surface, the same keratoconus we had discussed before surgery.
          </p>
          <p>
            A toric lens corrects astigmatism that follows a predictable, symmetric pattern. His didn't. Even a perfectly positioned toric implant would still leave him with distorted vision because the source of the problem is the cornea, not the lens. Swapping the implant would add surgical risk without meaningful visual benefit.
          </p>
          <p>
            That's a hard thing to hear when you're staring at a number that feels like it should have a solution.
          </p>
          <p>
            So we reframed the conversation. The goal was never to eliminate every diopter on paper. The goal was to optimize his functional vision within the reality of his corneal anatomy. And for that, once healing was complete, rigid or scleral contact lenses would do what no implant could: reshape the light at the corneal surface, where the irregularity actually lives.
          </p>
        </div>
      </section>

      {/* Full-bleed visual break */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-couple-live-music.jpg"
            alt="Couple enjoying live music outdoors"
            width={1920}
            height={400}
            style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 30%'}}
          />
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Restraint <strong>Matters</strong></h2>
          <p>
            There is a bias in surgery, and in medicine generally, that doing more is always better. That the premium option should always outperform the standard one. That if a technology exists, it should be used.
          </p>
          <p>
            But experience teaches the opposite. Sometimes the most sophisticated decision is the one where you hold back. Where you recognize that pursuing a perfect number would actually make things worse. Where you choose the approach that respects the anatomy rather than fights it.
          </p>
          <BlurReveal><div className="insight-highlight">
            <p><strong>Not every deviation from a target number represents a failure.</strong> And not every imperfection is best addressed with more surgery.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>If you have an eye condition like keratoconus, or irregular astigmatism from any cause, the premium lens option may not be the best lens option. A good outcome is defined by alignment between your anatomy, your expectations, and your strategy. Not by chasing a number on a report. Sometimes the right call is the one that sounds less impressive but fits you better.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '48px'}}>
            <Image
              src="/media/stock-group-cafe-outdoor.jpg"
              alt="Group of friends at an outdoor cafe in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>How different lens types work, what they correct, and how to think about the tradeoffs.</p>
            </Link>
            <Link href="/insights/when-more-isnt-better" className="related-card">
              <h3>When More Isn't Better</h3>
              <p>A young woman's experience with a multifocal lens and the cascade of interventions that followed.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
