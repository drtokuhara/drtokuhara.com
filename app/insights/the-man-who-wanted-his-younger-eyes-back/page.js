import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  ParallaxImage,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Man Who Wanted His Younger Eyes Back | Dr. Keith Tokuhara, MD',
  description: 'A cataract surgery patient who wanted more than clear vision. He wanted to feel young again. A reflection on lens implant expectations, IOL selection, and why sometimes the most important decision is choosing to wait.',
  alternates: { canonical: '/insights/the-man-who-wanted-his-younger-eyes-back' },
  openGraph: {
    title: 'The Man Who Wanted His Younger Eyes Back | Dr. Keith Tokuhara',
    description: 'A reflection on expectations, aging, and why the strategic pause is sometimes the most sophisticated surgical decision.',
    url: 'https://drtokuhara.com/insights/the-man-who-wanted-his-younger-eyes-back',
  },
};


const jsonLd = [
  articleSchema({
    title: 'The Man Who Wanted His Younger Eyes Back',
    description: 'Sometimes the most important surgical decision is choosing to wait. A reflection on identity, expectations, and cataract surgery.',
    slug: '/insights/the-man-who-wanted-his-younger-eyes-back',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'The Man Who Wanted His Younger Eyes Back', href: '/insights/the-man-who-wanted-his-younger-eyes-back' },
  ]),
];

export default function InsightYoungerEyes() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-resort-pool.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Decisions &amp; Timing</span>
          <h1>The Man Who Wanted His <strong>Younger Eyes</strong> Back</h1>
          <p className="page-hero-sub">He didn't just want better vision. He wanted to feel the way he did before glasses became part of his identity. Sometimes the most important surgical decision is choosing to wait.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            He was 66 and came in for a second opinion. But within the first few minutes, it was clear this visit was not really about cataracts.
          </p>
          <p>
            He talked about losing his glasses constantly. Bending them. Breaking them. The inconvenience was real, but the frustration ran deeper than a pair of frames. What he described, without quite saying it, was a feeling of being diminished. Glasses had become a daily reminder that something about him had changed. He wanted them gone, not because they were impractical, but because they represented a version of himself he was trying to leave behind.
          </p>
          <BlurReveal><div className="pull-quote">
            <p>He wanted to see the way he used to see. Before the readers. Before the progressive lenses. Before the slow, quiet accumulation of dependence.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-elderly-man-calm.jpg"
              alt="Older man reflecting thoughtfully about his vision and future"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">The Expectation <strong>Gap</strong></h2>
          <p>
            His expectations were specific: complete freedom from glasses, perfect night driving, and zero side effects. When I hear all three in the same sentence, I pay attention. Not because they are unreasonable individually, but because together, they describe an outcome that no current technology can guarantee.
          </p>
          <p>
            This is a pattern I encounter often. Patients who are highly motivated, who have done their research, and who arrive with a mental image of what success looks like. The image is usually built from marketing language and best-case stories. It is almost never built from the tradeoffs that every surgical decision involves.
          </p>
          <p>
            His exam told a more complicated story. An early cataract, yes, but also prior corneal refractive surgery, mild maculopathy from a previous retinal condition, and ocular surface disease. Each of those factors narrows the range of what premium lens technology can do. Together, they made a multifocal implant a poor fit. Not because the lens is flawed, but because his eye was not the right environment for it.
          </p>
        </div>
      </section>

      {/* Full-bleed visual break */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-group-poolside-relaxing.jpg"
            alt="Friends relaxing poolside in the desert"
            width={1920}
            height={400}
            style={{width: "100%", height: "auto"}}
          />
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What He Was Really <strong>Asking</strong></h2>
          <p>
            The longer we talked, the clearer it became that his frustration with glasses was not just about optics. It was about aging. About the slow erosion of things he used to take for granted. Vision was the most tangible example, but it stood in for something larger.
          </p>
          <p>
            This is not unusual. Many patients arrive at the decision point for cataract surgery carrying more than a visual complaint. They carry a sense that something can be restored. That if the right technology exists, they should be able to get back what time has taken.
          </p>
          <BlurReveal><div className="insight-highlight">
            <p><strong>Surgery works best when expectations align with what the procedure can actually deliver.</strong> When the gap between hope and reality is too wide, even a technically successful surgery can feel like a failure.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Strategic <strong>Pause</strong></h2>
          <p>
            When I explained that proceeding now, with 20/30 vision and expectations that exceeded what any lens could reliably deliver, carried a high risk of disappointment, he listened. That matters. A patient who can hear nuance, who does not need a guarantee to feel respected, is a patient you can work with over time.
          </p>
          <p>
            Together, we reframed the decision. Not as a denial of treatment, but as a strategic pause. His cataract was early. His functional vision was intact. The right time for surgery would come, but it was not today. And when it arrived, we would have already aligned on what "better" realistically looks like.
          </p>
          <p>
            He left without a surgical date. But he also left without the quiet worry that he had missed his window or been dismissed. That is what a good second opinion should feel like.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>Choosing to wait is not the same as choosing to do nothing. In cataract surgery, timing matters as much as technique. If your vision is still functional and your expectations go beyond what current technology can promise, a thoughtful pause may protect you from an outcome that looks successful on paper but does not feel right in practice. The goal is not just better vision. It is vision that matches the life you are actually living.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '48px'}}>
            <Image
              src="/media/stock-seniors-evening-stroll.jpg"
              alt="Seniors enjoying an evening stroll under string lights"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A clear overview of the different lens options, what they do, and the tradeoffs involved in each.</p>
            </Link>
            <Link href="/insights/when-more-isnt-better" className="related-card">
              <h3>When More Isn't Better</h3>
              <p>When each procedure was supposed to be the fix, and the real answer was stepping back.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
