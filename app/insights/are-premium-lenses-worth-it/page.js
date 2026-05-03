import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Are Premium Lens Implants Worth It?',
  description: 'An honest reflection on premium versus standard lens implants. The answer depends on your life, your eyes, and the quality of your pre-surgical conversation.',
  alternates: { canonical: '/insights/are-premium-lenses-worth-it' },
  openGraph: {
    title: 'Are Premium Lens Implants Worth It? | Dr. Keith Tokuhara',
    description: 'The honest answer is: it depends on your life, not your budget. Dr. Tokuhara on what premium lenses can and cannot deliver.',
    url: 'https://drtokuhara.com/insights/are-premium-lenses-worth-it',
  },
};

const jsonLd = [
  articleSchema({
    title: 'Are Premium Lens Implants Worth It?',
    description: 'An honest reflection on what premium lenses deliver, who benefits most, and when a standard monofocal is the better choice.',
    slug: '/insights/are-premium-lenses-worth-it',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Are Premium Lens Implants Worth It?', href: '/insights/are-premium-lenses-worth-it' },
  ]),
];

export default function ArePremiumLensesWorthIt() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-balcony-golf-resort.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Lens Selection</span>
            <h1>Are Premium Lenses <strong>Worth It?</strong></h1>
            <p className="page-hero-sub">The honest answer is that it depends on your life, not your budget. Here is how I think about that question with every patient.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            I get asked this question constantly, and I understand why. Premium lens implants involve out-of-pocket costs. Insurance covers standard surgery. So patients want to know whether spending extra money makes sense for their situation.
          </p>
          <p>
            The honest answer is not a yes or no. It is a conversation. And the quality of that conversation is often more predictive of a patient's satisfaction than the lens itself.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What "Premium" <strong>Actually Means</strong></h2>
          <p>
            When surgeons and patients use the word premium, they are usually talking about one of three lens categories:
          </p>
          <ul className="content-list">
            <li><strong>Toric lenses</strong> reduce astigmatism as part of the cataract procedure, improving distance clarity without the distortion that uncorrected astigmatism causes.</li>
            <li><strong>Extended Depth of Focus (EDOF) lenses</strong> stretch the focal range from distance through intermediate, reducing glasses dependence without the hard tradeoffs of a multifocal design.</li>
            <li><strong>Multifocal and trifocal lenses</strong> split light into two or three distinct focal points, offering the possibility of clear near, intermediate, and distance vision all without glasses.</li>
          </ul>
          <p>
            Each category solves a different problem and comes with different tradeoffs. None of them are right for every eye.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The right lens is not the most expensive one or the newest one. It is the one that matches how your eye is built and how you want to live.</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/stock-couple-patio-scenic-view.jpg"
              alt="Couple enjoying a scenic view from their patio - the kind of moments clear vision makes better"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">What Premium Does <strong>Not Guarantee</strong></h2>
          <p>
            This is the part that does not always get communicated clearly before surgery.
          </p>
          <p>
            Premium lenses do not guarantee perfect vision. They do not guarantee you will never wear glasses again. They do not eliminate halos or glare in all cases. What they do is shift the probabilities, and for the right patient, that shift is significant.
          </p>
          <p>
            A patient who receives a multifocal lens with undiagnosed dry eye disease, an epiretinal membrane, or unrealistic expectations is likely to be disappointed, regardless of how technically excellent the surgery was. This is not a flaw in the lens. It is a flaw in the pre-operative process.
          </p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-couple-garden-blooming.jpg"
            alt="Couple walking through a blooming garden - the details that matter when vision is clear"
            width={1920}
            height={400}
            style={{width: "100%", height: "auto"}}
          />
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Patients Who Are <strong>Happiest</strong></h2>
          <p>
            After years of these conversations, I can describe the profile of a patient who tends to do very well with a premium lens.
          </p>
          <p>
            They have healthy eyes. No significant dry eye, no macular issues, no corneal irregularity. They have been given an honest explanation of the tradeoffs, including the possibility of some nighttime halos and the fact that occasional reading glasses may still be useful for very fine print. And critically, they have arrived at their decision because reducing glasses dependence genuinely matters to their daily life, not because they were told it was the obvious choice.
          </p>
          <p>
            That last point is not minor. When a patient chooses a premium lens because it aligns with how they actually live, the adaptation period feels manageable. They are invested in the outcome and patient with the process.
          </p>

          <LineDraw />

          <h2 className="section-title" style={{marginTop: '32px'}}>The Patients Who <strong>Regret It</strong></h2>
          <p>
            The patients who struggle are almost always the ones who were sold a promise instead of given an honest conversation. Someone told them they would never wear glasses again. Nobody mentioned that halos were possible. The decision was made in ten minutes.
          </p>
          <p>
            When the outcome falls even slightly short of a guaranteed promise, it feels like failure. The lens is fine. The expectation was the problem.
          </p>
          <BlurReveal><div className="insight-highlight">
            <p><strong>The single biggest predictor of premium lens satisfaction is not the lens or the surgeon. It is the honesty of the conversation that happened before the surgery.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Monofocal Is Not <strong>Second-Class</strong></h2>
          <p>
            I want to say this plainly because it does not get said often enough in marketing-heavy ophthalmology: a well-aimed monofocal lens is a completely excellent choice.
          </p>
          <p>
            Monofocal lenses have decades of safety data. They deliver outstanding distance vision. They do not cause halos or glare. And if a patient's eye has any features that limit premium lens performance, a monofocal targeted to their dominant distance will serve them far better than a premium lens that underperforms.
          </p>
          <p>
            Some of my most satisfied patients have standard monofocal lenses. They see clearly for the things they care about most, and they keep a pair of readers on the nightstand for fine print. That is a perfectly dignified outcome.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Real <strong>Question</strong></h2>
          <p>
            When I sit down with a patient to talk through lens options, I am not trying to sell an upgrade. I am trying to understand one thing: how much does glasses dependence actually bother you, in your daily life, right now?
          </p>
          <p>
            If the answer is "a lot," and your eyes are healthy candidates, a premium lens is likely worth the investment. If the answer is "not much," or if there are ocular factors that would limit performance, I will tell you that directly and recommend the best monofocal option for your prescription.
          </p>
          <p>
            As for cost: yes, premium lenses involve out-of-pocket expense. Insurance typically covers standard cataract surgery and a basic monofocal. The additional cost of a premium lens is real and should be part of the conversation. What it should not be is the primary driver of the decision in either direction.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>Premium lenses are worth it for the right patient with the right eyes and the right expectations. They are not worth it for a patient who was never given an honest picture of the tradeoffs. My job is to make sure every patient I see has enough information to answer the question for themselves, and to tell them clearly when their eye is not the right eye for a premium lens.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>All Lens Options Explained</h3>
              <p>Monofocal, toric, Extended Depth of Focus, and multifocal. The full picture in plain language.</p>
            </Link>
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix</h3>
              <p>Two excellent premium lenses. Different tradeoffs. How to decide which fits your life.</p>
            </Link>
            <Link href="/insights/three-things-patients-say" className="related-card">
              <h3>Three Things Patients Say</h3>
              <p>How three common statements in my exam room tell me which lens to recommend.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
