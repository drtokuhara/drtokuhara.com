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
  title: 'The Lens We Didn\'t Implant - Dr. Keith Tokuhara',
  description: 'An 80-year-old patient was planned for a toric lens to correct astigmatism. Intraoperative measurements told a different story. Dr. Tokuhara changed course mid-surgery and chose a standard lens instead. It was the right call.',
  keywords: ['intraoperative aberrometry cataract surgery', 'ORA cataract surgery', 'toric lens vs standard lens', 'astigmatism cataract surgery', 'changing lens during cataract surgery'],
  alternates: { canonical: '/insights/the-lens-we-didnt-implant' },
  openGraph: {
    title: 'The Lens We Didn\'t Implant | Dr. Keith Tokuhara',
    description: 'Every measurement said toric. The operating room said otherwise. When intraoperative data contradicts the plan, the best surgeons listen.',
    url: 'https://drtokuhara.com/insights/the-lens-we-didnt-implant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lens We Didn\'t Implant',
    description: 'Sometimes the most valuable lens is the one you choose not to use. A story about precision, adaptability, and putting the patient first.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can a surgeon change the lens implant during cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. With intraoperative aberrometry (such as the ORA system), surgeons can take real-time measurements after the cataract is removed. If these measurements differ from preoperative predictions, the surgeon can choose a different lens power or type before placing the implant. This adaptability is one of the advantages of having multiple lens options available in the operating room.' } },
    { '@type': 'Question', name: 'What is intraoperative aberrometry in cataract surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Intraoperative aberrometry is a technology that measures the eye during surgery, after the cataract has been removed but before the new lens is placed. It provides real-time data about the eye\'s refractive state and astigmatism, allowing the surgeon to verify or adjust the lens selection based on what the eye actually needs at that moment.' } },
    { '@type': 'Question', name: 'Is a toric lens always better for astigmatism?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. A toric lens is designed to reduce astigmatism, but the amount of astigmatism can change once the cataract is removed and the corneal incision is made. If the remaining astigmatism is minimal, a standard aspheric lens may provide a better result than a toric lens, which could overcorrect and introduce new visual issues.' } },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Lens We Didn\'t Implant',
    description: 'An 80-year-old patient was planned for a toric lens. Intraoperative measurements told a different story. The best outcome came from changing the plan.',
    slug: '/insights/the-lens-we-didnt-implant',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Patient Stories', href: '/insights' },
    { name: 'The Lens We Didn\'t Implant', href: '/insights/the-lens-we-didnt-implant' },
  ]),
  faqSchema,
];

export default function InsightLensWeDidntImplant() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Honest Answers</span>
          <h1>The Lens We <strong>Didn&rsquo;t Implant</strong></h1>
          <p className="page-hero-sub">Every measurement said toric. The operating room said otherwise. The most valuable lens was the one we chose not to use.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Most patients assume that by the time cataract surgery begins, every decision has already been made.
          </p>
          <p>
            Usually, they are right.
          </p>
          <p>
            Long before surgery, we perform detailed measurements of the eye. We evaluate the shape of the cornea, calculate the power of the lens implant, and determine whether a patient might benefit from a specialty lens designed to reduce astigmatism.
          </p>
          <p>
            For one 80-year-old gentleman, all the signs pointed in the same direction.
          </p>
          <p>
            His vision in the right eye had declined to 20/40 from a cataract. His glasses contained nearly two diopters of astigmatism. Corneal topography confirmed significant astigmatism, and our preoperative calculations consistently predicted that a toric lens implant would provide the best visual outcome.
          </p>
          <p>
            Everything lined up. The plan was straightforward: remove the cataract and implant a toric lens.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Then Something <strong>Unexpected Happened</strong></h2>
          <p>
            After the cataract was removed, but before the lens implant was placed, we performed intraoperative aberrometry. This technology allows us to take measurements inside the operating room after the cloudy lens has been removed.
          </p>
          <p>
            Most of the time, these measurements confirm what we already expected.
          </p>
          <p>
            This time they did not.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>To our surprise, the measurements showed that only about 0.6 diopters of astigmatism remained after accounting for cataract removal and the effect of the corneal incision itself.</strong></p>
          </div></BlurReveal>

          <p>
            Suddenly, the eye in front of us looked very different from the eye we had predicted before surgery.
          </p>
          <p>
            The original plan called for a toric lens. The new information suggested that a toric lens might actually overcorrect his astigmatism.
          </p>
          <p>
            So we changed course.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Decision That <strong>Mattered</strong></h2>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-elderly-man-calm.jpg"
              alt="Elderly man with a calm, confident expression after a positive medical outcome"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <p>
            Instead of implanting the premium toric lens, we chose a standard aspheric lens that better matched what the eye actually needed.
          </p>
          <p>
            The result was excellent.
          </p>
          <p>
            After surgery, he achieved outstanding vision without glasses and was delighted with the outcome. Just as importantly, he appreciated that we had saved him the additional expense of a premium lens that, in retrospect, would not have served him well.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Predicting vs. <strong>Knowing</strong></h2>
          <p>
            What makes this case memorable is not the technology itself. It is what the technology allowed us to do.
          </p>
          <p>
            Medicine often begins with predictions. We gather data, analyze measurements, and build the best possible plan. But there is a difference between predicting what an eye needs and knowing what an eye needs.
          </p>
          <p>
            Sometimes the final and most important piece of information arrives only after surgery has already begun.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>The goal is not to prove that our preoperative calculations were correct. The goal is to give each patient the best possible outcome.</p>
          </div></BlurReveal>

          <p>
            Most of the time, our preoperative measurements and intraoperative findings agree beautifully.
          </p>
          <p>
            Occasionally, they do not.
          </p>
          <p>
            When that happens, the willingness to listen to new information can make all the difference.
          </p>
          <p>
            In this case, the most valuable lens was the one we chose not to implant.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00313d 0%, #004d5c 100%)', color: '#fff'}}>
        <div className="container content-narrow" style={{textAlign: 'center', padding: '48px 0'}}>
          <h2 style={{fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '12px', fontFamily: 'var(--serif)'}}>Precision That <strong>Adapts</strong></h2>
          <p style={{color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6}}>Every patient deserves a surgeon who listens to what the eye is saying, even when it says something unexpected.</p>
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
            <h2 className="section-title">Learn <strong>More</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/what-is-ora-machine" className="related-card">
              <h3>What Is the ORA Machine?</h3>
              <p>Intraoperative aberrometry explained: when it helps, when it does not, and why it is not a substitute for surgical judgment.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>The Standard Lens Is Not a Consolation Prize</h3>
              <p>Why the monofocal lens is the right choice for many patients.</p>
            </Link>
            <Link href="/toric-lens-astigmatism" className="related-card">
              <h3>Toric Lens and Astigmatism</h3>
              <p>How toric lenses reduce astigmatism during cataract surgery and who benefits most.</p>
            </Link>
            <Link href="/insights/the-standard-lens-was-the-right-call" className="related-card">
              <h3>The Standard Lens Was the Right Call</h3>
              <p>A patient who chose the standard lens and has no regrets.</p>
            </Link>
            <Link href="/insights/when-more-isnt-better" className="related-card">
              <h3>When More Isn't Better</h3>
              <p>Why more technology or a more expensive lens does not always mean a better outcome.</p>
            </Link>
            <Link href="/insights/the-bicycle-rider-and-the-binoculars" className="related-card">
              <h3>The Bicycle Rider and the Binoculars</h3>
              <p>A cyclist described anisometropia better than any textbook. A story about how both eyes work together.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
