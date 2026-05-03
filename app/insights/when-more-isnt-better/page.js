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
  title: 'When More Isn\'t Better',
  description: 'A patient had cataract surgery with a multifocal IOL, then YAG capsulotomy, then LASIK enhancement. A year later, vision was still unsatisfactory. A reflection on multifocal lens complications and the cascade of interventions.',
  alternates: { canonical: '/insights/when-more-isnt-better' },
  openGraph: {
    title: 'When More Isn\'t Better | Dr. Keith Tokuhara',
    description: 'A reflection on multifocal lens expectations, the cascade of interventions, and what happens when each fix creates the need for the next one.',
    url: 'https://drtokuhara.com/insights/when-more-isnt-better',
  },
};


const jsonLd = [
  articleSchema({
    title: 'When More Isn\'t Better',
    description: 'Sometimes the answer is not another procedure. A reflection on over-treatment in cataract surgery.',
    slug: '/insights/when-more-isnt-better',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When More Isn\'t Better', href: '/insights/when-more-isnt-better' },
  ]),
];

export default function InsightWhenMore() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-night-walk-dog.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Expectations & Reality</span>
          <h1>When More Isn't <strong>Better</strong></h1>
          <p className="page-hero-sub">She had the surgery. Then the laser. Then the LASIK. A year later, she still wasn't seeing the way she expected. Sometimes the hardest step is stopping.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            She was 32 and had already been through three procedures on one eye.
          </p>
          <p>
            Cataract surgery at a well-known center. A multifocal intraocular lens, the kind designed to reduce dependence on glasses at all distances. The surgery was reportedly difficult, lasting around 45 minutes. The recovery was more painful than expected. And despite waiting for things to settle, her vision never felt right.
          </p>
          <p>
            At three months, she had a YAG capsulotomy, a laser procedure to clear haziness behind the lens. When that didn't resolve her symptoms, she underwent LASIK to correct residual refractive error. Now, a full year after the original surgery, she was sitting in my office for a second opinion.
          </p>
          <BlurReveal><div className="pull-quote">
            <p>Her chart said 20/25. Her experience said something very different.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/x-confident-man-outside-clinic.jpg"
              alt="Man standing confidently outside a medical clinic"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">The Gap Between the Chart and <strong>Real Life</strong></h2>
          <p>
            This is something I see more often than most people realize. A patient reads 20/25 on the eye chart, and from a clinical standpoint, that's a good number. But numbers don't capture glare. They don't capture halos around headlights at night. They don't capture the feeling that something is off every time you open your eyes.
          </p>
          <p>
            When she described her symptoms, severe glare, persistent halos, a sense that her vision was never truly crisp, I believed her. Not because I doubted her previous doctors, but because I could see the reasons in the exam.
          </p>
          <p>
            The capsulorhexis, the circular opening made during surgery to access the cataract, was unusually large. That likely allowed the lens to shift slightly, introducing tilt and instability. The tilt induced astigmatism. The LASIK addressed the refractive error on paper, but combining corneal refractive surgery with a multifocal optic created new problems: worsened ocular surface disease, which amplified the very symptoms she was trying to fix.
          </p>
        </div>
      </section>

      {/* Full-bleed visual break */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-man-walking-dog-sunset.png"
            alt="Man walking his dog at sunset"
            width={1920}
            height={400}
            style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 30%'}}
          />
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Cascade <strong>Problem</strong></h2>
          <p>
            What happened to this patient is something I think about a lot. Each intervention was a logical response to the problem in front of it. Vision hazy after surgery? Do a YAG. Still not sharp? Try LASIK. Each step made sense in isolation. But taken together, they formed a cascade where each fix introduced the conditions for the next problem.
          </p>
          <p>
            This is the risk of chasing perfection in a complex optical system. The more aggressively you try to eliminate every limitation, the more you risk introducing new ones. Especially with multifocal lenses, which split light into multiple focal points and are inherently more sensitive to any disruption in the optical pathway.
          </p>
          <p>
            For a 32-year-old with high visual demands, night driving, extended screen work, and an expectation of crisp, clear contrast vision, a simpler optical system may have been the better starting point. That's not hindsight bias. That's the conversation that should happen before the first procedure, not after the third.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What I Told <strong>Her</strong></h2>
          <p>
            I didn't tell her that her previous surgeon did something wrong. I don't know the full context of those decisions. What I told her was this: her experience is real. The gap between what the chart says and what she feels is not imagined. There are identifiable reasons for her symptoms, and understanding those reasons is the first step toward figuring out what, if anything, comes next.
          </p>
          <BlurReveal><div className="insight-highlight">
            <p><strong>Sometimes the most important thing a second opinion offers isn't a new plan. It's validation that what you're experiencing makes sense.</strong> That you're not being difficult. That your discomfort deserves an explanation, not dismissal.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>If you're considering a premium or multifocal lens implant, the conversation should start with your tolerance for tradeoffs, not with the technology's capabilities. Every lens design involves compromise. The question isn't which lens is the best. It's which lens is the best fit for your eyes, your lifestyle, and your expectations. And if you've had a result that doesn't feel right, you deserve a thorough explanation, not just reassurance that the numbers look fine.</em>
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
              src="/media/stock-couple-produce-market.jpg"
              alt="Couple at a produce market - returning to daily life with clear vision"
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
            <Link href="/insights/the-number-that-wasnt-the-problem" className="related-card">
              <h3>The Number That Wasn't the Problem</h3>
              <p>When a patient's astigmatism number looked fixable but the real issue was something no lens could address.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
