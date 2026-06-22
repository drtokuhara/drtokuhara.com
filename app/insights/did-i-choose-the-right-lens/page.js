import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'Did I Choose the Right Lens? - Dr. Keith Tokuhara',
  description: 'You picked the standard lens. Now you are wondering if you missed out. Short answer: probably not. Dr. Tokuhara explains why the right lens is the one that matches your eye, not your wallet.',
  keywords: ['did I choose the right cataract lens', 'standard lens vs premium', 'post-surgical lens regret', 'monofocal lens outcomes', 'should I have gotten a premium lens'],
  alternates: { canonical: '/insights/did-i-choose-the-right-lens' },
  openGraph: {
    title: 'Did I Choose the Right Lens? | Dr. Keith Tokuhara',
    description: 'The standard monofocal lens delivers sharp distance vision with minimal side effects. If your vision is clear and comfortable, your lens is doing exactly what it was chosen to do.',
    url: 'https://drtokuhara.com/insights/did-i-choose-the-right-lens',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Did I Choose the Right Lens?',
    description: 'You picked the standard lens. Your vision is good. You are wondering if you missed out. Probably not.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Did I make a mistake choosing the standard lens for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your vision is clear and comfortable after surgery with a standard monofocal lens, you did not make a mistake. The standard lens delivers excellent distance vision with minimal visual side effects. Your surgeon recommended it based on your eye measurements, corneal health, lifestyle, and the anatomy of your specific case. That is precision, not settling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I notice cloudiness months after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloudiness that develops months or a year after cataract surgery is usually posterior capsule opacification (PCO), a normal biological response where the body grows a thin film behind the implanted lens. It is not a sign your lens is failing. A quick, painless YAG laser capsulotomy clears it up completely in about two minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do premium lenses have more side effects than standard lenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium lenses like multifocals and extended depth of focus lenses split light into multiple focal points to provide near, intermediate, and distance vision. This light-splitting can create halos around lights at night, reduced contrast sensitivity, and a neuroadaptation period where your brain learns to process the new optics. The standard monofocal lens focuses all available light at one distance, eliminating these tradeoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch to a premium lens after getting a standard lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, lens exchange is possible but involves a second surgery with additional risk, cost, and recovery time. Most patients who are happy with their distance vision after a standard lens do not pursue lens exchange. If you are experiencing actual functional problems, not just curiosity about what you might be missing, discuss it with your surgeon.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Did I Choose the Right Lens?',
    description: 'You picked the standard lens. Now you are wondering if you missed out. Short answer: probably not. The right lens is the one that matches your eye.',
    slug: '/insights/did-i-choose-the-right-lens',
    datePublished: '2026-06-21',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Did I Choose the Right Lens?', href: '/insights/did-i-choose-the-right-lens' },
  ]),
  faqSchema,
];

export default function InsightDidIChooseTheRightLens() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        poster="/media/hero-standard-lens-cataract-surgery.png"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Post-Decision</span>
            <h1>Did I Choose the <strong>Right Lens?</strong></h1>
            <p className="page-hero-sub">You picked the standard lens. Now you are wondering if you missed out. Short answer: probably not.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            You picked the standard lens. Or maybe your surgeon recommended it and you went along with their judgment. Now you are a few weeks out, your vision is good, maybe even great, and you are wondering: did I miss out on something better?
          </p>
          <p>
            Short answer: probably not.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Standard Lens <strong>Actually Does</strong></h2>
          <p>
            The standard monofocal lens has been the backbone of cataract surgery for decades. It is reliable. The optics are clean. For most patients, it delivers sharp distance vision with minimal visual side effects. No halos. No glare. No adaptation period.
          </p>
          <p>
            Premium lenses offer more range. Some let you read without glasses. Others adjust for intermediate distances. But they come with tradeoffs that are not always obvious from the brochure. Halos around lights at night. A period of neuroadaptation where your brain learns to process the new optics. Occasionally, outcomes that require additional procedures to fine-tune.
          </p>
          <p>
            Your surgeon looked at your eye measurements, your corneal health, your lifestyle, and the anatomy of your specific case. If they recommended the standard lens, it is because the data pointed there.
          </p>
          <p>
            That is not settling. That is precision.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The patients who do best long-term are not the ones who got the most expensive lens. They are the ones whose lens matched their eye."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">If Your Vision Is Clear, <strong>You Made the Right Call</strong></h2>
          <p>
            If your vision is clear and comfortable after surgery with the standard lens, that is success. You are seeing what the lens was chosen to deliver. Distance vision without the compromises of splitting light across multiple focal points.
          </p>
          <p>
            The anxiety around "did I pick the right lens" usually comes from reading online forums where everyone has an opinion about premium lenses. Someone says they love their multifocal. Someone else says they hate the halos. Someone regrets not getting the Extended Depth of Focus lens. Someone wishes they had just stuck with the standard.
          </p>
          <p>
            None of those experiences apply to your eyes. Your cornea is different. Your retina is different. Your lifestyle is different. The right lens is the one that gives you the vision you need without the side effects you do not. If that is what you have, you made the right call.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">About That <strong>Cloudiness</strong></h2>
          <p>
            One more thing: if you are noticing some cloudiness developing months or even a year after surgery, that is not your lens failing. It is a normal biological response called posterior capsule opacification.
          </p>
          <p>
            The body grows a thin film behind the implanted lens. It is common. It is not a sign of a problem with your surgery or your lens choice. A quick, painless YAG laser treatment clears it up completely. Your surgeon can address it in about two minutes.
          </p>
          <p>
            This happens regardless of whether you chose a standard lens or a premium lens. It is not something you could have avoided by spending more money. It is just biology.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The cloudiness you are seeing is not your lens. It is a film that grew behind it. Two minutes of laser. Problem solved.</strong></p>
          </div></BlurReveal>

          <p style={{marginTop: '24px'}}>
            <Link href="/yag-laser-capsulotomy" style={{fontWeight: 600}}>Read more about YAG laser capsulotomy →</Link>
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Right Lens Matches <strong>Your Life</strong></h2>
          <p>
            The right lens is the one that gives you the vision you need without the side effects you do not. If that is what you have, you made the right call.
          </p>
          <p>
            If you are genuinely struggling with your vision, not just curious about what you might have gotten with a different lens, talk to your surgeon. Lens exchange is possible, but it involves a second surgery with additional risk, cost, and recovery time. Most patients who are happy with their distance vision after a standard lens do not pursue it.
          </p>
          <p>
            But if your vision is clear, if you are seeing well at distance and using inexpensive reading glasses for close work, if you are not struggling with halos or glare or contrast issues, then you have exactly what the standard lens was designed to deliver. That is not a compromise. That is success.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The lens that delivers clear, comfortable vision matched to your anatomy is the right lens. Not the newest one. Not the most expensive one. The one that fits. If your vision is good and you are living your life without thinking about your eyes, that is the outcome we were aiming for. You got it.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Questions About Your Vision?</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>For many patients, the standard monofocal lens is the right choice. Not a downgrade. A deliberate decision.</p>
            </Link>
            <Link href="/yag-laser-capsulotomy" className="related-card">
              <h3>YAG Laser Capsulotomy</h3>
              <p>What to expect when cloudiness develops after cataract surgery, and why it is not something to worry about.</p>
            </Link>
            <Link href="/multifocal-vs-monofocal" className="related-card">
              <h3>Multifocal vs Monofocal: An Honest Comparison</h3>
              <p>Sharp distance vision with readers, or glasses freedom with halos at night? The real tradeoffs explained.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on what premium lenses deliver and when they make sense.</p>
            </Link>
            <Link href="/insights/life-after-cataract-surgery" className="related-card">
              <h3>Life After Cataract Surgery</h3>
              <p>What to expect in the weeks and months after your procedure, including normal changes and when to call.</p>
            </Link>
            <Link href="/insights/first-week-after-cataract-surgery" className="related-card">
              <h3>The First Week After Cataract Surgery</h3>
              <p>Recovery expectations, drop schedules, and what is normal in the early days after surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
