import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema, faqSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'PanOptix vs PanOptix Pro: What Changed and Why It Matters - Dr. Keith Tokuhara',
  description: 'The PanOptix Pro is the newest version of the trifocal lens with improved optics and better performance. A side-by-side comparison from the first surgeon in the Coachella Valley to implant it.',
  alternates: { canonical: '/insights/panoptix-vs-panoptix-pro' },
  openGraph: {
    title: 'PanOptix vs PanOptix Pro: What Changed and Why It Matters | Dr. Keith Tokuhara',
    description: 'The PanOptix Pro is the newest version with improved optics. Here is what changed and what it means for your vision after cataract surgery.',
    url: 'https://drtokuhara.com/insights/panoptix-vs-panoptix-pro',
  },
};

const faqItems = [
  {
    question: 'What is the main difference between PanOptix and PanOptix Pro?',
    answer: 'The PanOptix Pro uses improved optical design to deliver better contrast and visual quality, particularly in low-light conditions. Both are trifocal lenses that provide distance, intermediate, and near vision, but the Pro version reduces some of the visual disturbances that occasionally affected the original PanOptix.'
  },
  {
    question: 'Is the PanOptix Pro worth the upgrade?',
    answer: 'For new patients choosing a lens, the PanOptix Pro is the current version and the one I recommend. For patients who already have the original PanOptix and are happy with their vision, there is no reason to exchange it. The original PanOptix remains an excellent lens.'
  },
  {
    question: 'Does the PanOptix Pro eliminate halos and glare?',
    answer: 'No trifocal lens eliminates all halos and glare. The PanOptix Pro reduces them compared to the original PanOptix, but some visual effects around lights at night are still possible, particularly in the first few months as the brain adapts.'
  },
  {
    question: 'Can I still get the original PanOptix?',
    answer: 'The PanOptix Pro has replaced the original PanOptix in most practices. Alcon transitioned to the Pro version because it delivers better optical performance with the same trifocal design.'
  },
  {
    question: 'Who was the first surgeon in the Coachella Valley to implant the PanOptix Pro?',
    answer: 'Dr. Tokuhara was the first surgeon in the Coachella Valley to implant the PanOptix Pro. His experience with both versions informs how he counsels patients on lens selection today.'
  }
];

const jsonLd = [
  articleSchema({
    title: 'PanOptix vs PanOptix Pro: What Changed and Why It Matters',
    description: 'The PanOptix Pro is the newest version of the trifocal lens with improved optics and better performance. A comparison from the first surgeon in the Coachella Valley to implant it.',
    slug: '/insights/panoptix-vs-panoptix-pro',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'PanOptix vs PanOptix Pro', href: '/insights/panoptix-vs-panoptix-pro' },
  ]),
  faqSchema(faqItems),
];

export default function InsightPanOptixComparison() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-lens-refraction-v2.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Lens Options</span>
          <h1>PanOptix vs PanOptix Pro: <strong>What Changed and Why It Matters</strong></h1>
          <p className="page-hero-sub">The Pro is the newer version with improved optics. Here is what that means for your vision.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The PanOptix was already one of the best trifocal lenses available. The PanOptix Pro is better. Not radically different, not a complete redesign, but meaningfully improved in ways that matter to patients who want the best possible vision at all distances.
          </p>
          <p>
            I was the first surgeon in the Coachella Valley to implant the PanOptix Pro. I have implanted both versions, counseled patients through the transition, and watched how each lens performs over time. Here is what changed, what stayed the same, and how to think about the difference.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Changed</strong></h2>
          <p>
            Alcon redesigned the optical platform to improve contrast and reduce some of the minor visual disturbances that occasionally affected the original PanOptix. The Pro version uses a refined diffractive pattern that distributes light more efficiently across the three focal points: distance, intermediate (around 24 inches), and near (around 16 inches).
          </p>
          <p>
            The result is sharper vision in low-light conditions, slightly better contrast, and fewer reports of halos around lights at night. Not zero halos (no trifocal can promise that), but reduced frequency and intensity compared to the original PanOptix.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The PanOptix Pro delivers the same trifocal range as the original PanOptix, but with cleaner optics and better image quality across all three distances.</strong></p>
          </div></BlurReveal>

          <p>
            This is not a revolutionary change. It is an iterative improvement. But in lens technology, iterative improvements matter. The difference between good and great is often found in small refinements that accumulate over time.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-wide">
          <ScrollReveal direction="up">
            <Image
              src="/media/tool-image-generation/panoptix-comparison-lenses---7f1c82f1-0d9c-4c28-8345-fef2a43d0def.png"
              alt="PanOptix and PanOptix Pro lens comparison illustration"
              width={1200}
              height={675}
              className="content-image"
              style={{marginTop: '32px', marginBottom: '32px'}}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Stayed <strong>the Same</strong></h2>
          <p>
            The core trifocal design is unchanged. Both lenses provide functional vision at distance, intermediate, and near. Both are excellent for patients who want to minimize dependence on glasses after cataract surgery. Both work well for active lifestyles, reading, computer use, and driving.
          </p>
          <p>
            The original PanOptix was not replaced because it failed. It was replaced because Alcon found a way to make it better. Patients who received the original PanOptix and are happy with their vision have no reason to pursue a lens exchange. The original PanOptix remains an outstanding lens.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Benefits Most from the <strong>PanOptix Pro</strong></h2>
          <p>
            For patients choosing a lens today, the PanOptix Pro is the version I recommend. The improved optics come at no additional cost (both are premium lenses with the same out-of-pocket expense), so there is no reason to select the older version.
          </p>
          <p>
            Patients who are particularly sensitive to visual disturbances, who do significant night driving, or who want the absolute best optical performance available in a trifocal lens will appreciate the refinements in the Pro version.
          </p>
          <p>
            That said, lens selection is not just about the newest technology. It is about matching the lens to the patient's visual goals, lifestyle, ocular anatomy, and expectations. The PanOptix Pro is an excellent lens, but it is not the right lens for everyone. Some patients are better served by an EDOF lens like the Vivity, others by a standard monofocal lens with reading glasses.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How This Fits Into Lens <strong>Selection</strong></h2>
          <p>
            The conversation about PanOptix versus PanOptix Pro only matters if you have already decided that a trifocal lens is the right choice for you. Before that, there are more fundamental questions: Do you want glasses-free vision at all distances? Are you willing to accept some visual trade-offs (halos, reduced contrast) in exchange for that independence? Do you do significant night driving? Do you have other ocular conditions that might affect premium lens performance?
          </p>
          <p>
            I walk through these questions with every patient during the pre-operative consultation. The goal is not to sell a premium lens. The goal is to match the lens to the patient. Sometimes that lens is the PanOptix Pro. Sometimes it is the <Link href="/insights/choosing-the-standard-lens">standard monofocal lens</Link>. Sometimes it is <Link href="/insights/panoptix-vs-vivity">something in between</Link>.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The best lens is not the newest lens. The best lens is the one that fits your eyes, your life, and your expectations.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Matters</strong></h2>
          <p>
            The PanOptix Pro is a better lens than the original PanOptix. That is not marketing. That is optical physics. But better does not mean right for everyone. Lens selection is still about matching technology to biology, lifestyle to expectations, and patient goals to surgical outcomes.
          </p>
          <p>
            If you are considering a trifocal lens, the PanOptix Pro deserves serious consideration. But so do the alternatives. The conversation should always start with your vision goals, not with the lens manufacturer's latest release.
          </p>
          <p>
            That is the conversation we have during your consultation. Not which lens is newest, but which lens is right.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow text-center">
          <div className="section-divider" style={{margin: '48px auto'}} />
          <p><strong>Questions about lens selection?</strong></p>
          <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
