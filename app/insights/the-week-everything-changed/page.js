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
  title: 'The Week Everything Changed - Dr. Keith Tokuhara',
  description: 'Her monovision cataract surgery was perfect. Then her husband was diagnosed with cancer. The visual system she chose no longer matched the life she was about to live. Dr. Tokuhara exchanged the lens.',
  keywords: ['monovision cataract surgery', 'lens exchange after cataract surgery', 'IOL exchange', 'cataract surgery life changes', 'monovision vs distance vision cataract'],
  alternates: { canonical: '/insights/the-week-everything-changed' },
  openGraph: {
    title: 'The Week Everything Changed | Dr. Keith Tokuhara',
    description: 'Two weeks after surgery, her life changed completely. The lens that was perfect for the life she had was wrong for the life she was about to live.',
    url: 'https://drtokuhara.com/insights/the-week-everything-changed',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Week Everything Changed',
    description: 'Successful cataract surgery is not about creating perfect vision for the life someone has today. It is about the life they are actually going to live.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is monovision in cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Monovision is a strategy where one eye is set for distance vision and the other is set for near vision. This can reduce or eliminate the need for reading glasses. Many patients who have successfully worn monovision contact lenses are good candidates for this approach with cataract surgery. However, monovision involves tradeoffs, including slightly reduced depth perception, which can affect activities like driving.' } },
    { '@type': 'Question', name: 'Can a lens implant be exchanged after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In the early postoperative period, a lens implant can be exchanged for a different one if the original choice no longer meets the patient\'s needs. The window for a straightforward exchange is typically within the first few weeks to months after surgery, before the lens capsule fully heals around the implant. This is one reason surgeons discuss expectations carefully before and after surgery.' } },
    { '@type': 'Question', name: 'What if my lifestyle changes after cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Life changes can sometimes shift visual priorities. A patient who valued reading without glasses may later need confident distance vision for driving. In some cases, a lens exchange or enhancement procedure can adjust the visual outcome. The most important step is communicating any changes in your needs to your surgeon so the options can be discussed.' } },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Week Everything Changed',
    description: 'Her monovision cataract surgery was perfect. Then her husband was diagnosed with cancer. The lens she chose no longer matched the life she was about to live.',
    slug: '/insights/the-week-everything-changed',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Patient Stories', href: '/insights' },
    { name: 'The Week Everything Changed', href: '/insights/the-week-everything-changed' },
  ]),
  faqSchema,
];

export default function InsightWeekEverythingChanged() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-desert-twilight-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Real Patient Stories</span>
          <h1>The Week Everything <strong>Changed</strong></h1>
          <p className="page-hero-sub">Two weeks after surgery, her life changed completely. The lens that was perfect for the life she had was wrong for the life she was about to live.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            One of the most important lessons I have learned about cataract surgery has very little to do with cataracts.
          </p>
          <p>
            It has to do with life.
          </p>
          <p>
            Several years ago, I met a 78-year-old woman who came to see me because her vision was gradually becoming more difficult despite wearing contact lenses.
          </p>
          <p>
            Even with her best correction, her vision had declined to about 20/40 in both eyes from cataracts.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Plan</strong></h2>
          <p>
            As we discussed her options, the choice seemed straightforward.
          </p>
          <p>
            For years she had successfully worn monovision contact lenses. One eye was set for distance. The other was set for near. Her brain had adapted beautifully to the arrangement, and she loved the freedom of functioning without reading glasses.
          </p>
          <p>
            So when it came time for cataract surgery, we decided to recreate the same visual system she had already been enjoying for years.
          </p>
          <p>
            The surgeries went beautifully.
          </p>
          <p>
            The day after her second surgery, she was thrilled.
          </p>
          <p>
            She could read her phone without glasses. She could see across the room without glasses. She laughed as she told me she had eaten breakfast that morning without reaching for either contact lenses or reading glasses for the first time since middle school.
          </p>
          <p>
            Everything was working exactly as planned.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Then Something <strong>Changed</strong></h2>
          <p>
            She came back about ten days later.
          </p>
          <p>
            Something had changed. Not her vision. Her life.
          </p>
          <p>
            She told me that her husband had just been diagnosed with cancer.
          </p>
          <p>
            The news had been sudden. And with that diagnosis came a realization.
          </p>
          <p>
            For years, her husband had done nearly all of the driving. Now she would be responsible for it. Not occasionally. Constantly. Doctor appointments. Treatments. The daily weight of being the one behind the wheel.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>&ldquo;Two weeks ago, this was exactly what I wanted.&rdquo;</p>
          </div></BlurReveal>

          <p>
            And she was right. It was.
          </p>
          <p>
            The problem was not the surgery. The problem was that neither of us could have predicted what was about to happen.
          </p>
          <p>
            Monovision can be wonderful for many patients, especially those who value reading and other near activities without glasses. But it does involve compromises. Depth perception can be slightly reduced, and some patients feel more comfortable driving when both eyes are optimized for distance vision.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Exchange</strong></h2>
          <p>
            Because we were still early in the postoperative period, we had options.
          </p>
          <p>
            After discussing the situation, we made the decision to exchange the lens implant in her near eye and convert her visual system from monovision to distance vision in both eyes.
          </p>
          <p>
            The second surgery went well. She gained the confidence she wanted behind the wheel.
          </p>
          <p>
            She told me later that knowing we could adjust gave her more relief than the surgery itself.
          </p>
          <p>
            The tradeoff was exactly what we expected. She now needed reading glasses for near work. And she was completely happy with that.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Three Years <strong>Later</strong></h2>
          <p>
            A few years later, she returned for a follow-up visit.
          </p>
          <p>
            By then it had been three years since those surgeries. She was still driving regularly. Still caring for her family. Still using reading glasses. Still pleased with her decision.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>When we choose a lens implant, we spend a lot of time talking about hobbies, occupations, reading habits, and driving needs. Those conversations matter. But they all share one hidden assumption: that tomorrow will look a lot like today.</strong></p>
          </div></BlurReveal>

          <p>
            Sometimes it does. Sometimes it does not.
          </p>
          <p>
            A cancer diagnosis. The loss of a spouse. A new grandchild. A move across the country.
          </p>
          <p>
            Life has a way of rewriting the script when we least expect it.
          </p>
          <p>
            What I remember most about this patient is not the lens exchange. It is the reminder that successful cataract surgery is not about creating perfect vision for the life someone has today. It is about giving them the vision they need for the life they are actually going to live.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Your Vision, Your <strong>Life</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>The right lens depends on your life, not just your eyes. That conversation starts here.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">More <strong>Stories</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/the-patient-i-never-saw-again" className="related-card">
              <h3>The Patient I Never Saw Again</h3>
              <p>His vision went from count fingers to 20/20 overnight. Then he disappeared. Twenty years later, the question remains.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>Why the monofocal lens is the right choice for many patients.</p>
            </Link>
            <Link href="/insights/not-every-patient-wants-the-same-vision" className="related-card">
              <h3>Not Every Patient Wants the Same Vision</h3>
              <p>The best lens depends on how you live, not what the brochure says.</p>
            </Link>
            <Link href="/insights/the-lens-we-didnt-implant" className="related-card">
              <h3>The Lens We Didn't Implant</h3>
              <p>Every measurement said toric. The operating room said otherwise.</p>
            </Link>
            <Link href="/insights/the-bicycle-rider-and-the-binoculars" className="related-card">
              <h3>The Bicycle Rider and the Binoculars</h3>
              <p>A cyclist described the vision imbalance between his eyes better than any textbook.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>A complete guide to the lens options available during cataract surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
