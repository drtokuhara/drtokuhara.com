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
  title: 'Does My Insurance Cover Cataract Surgery? - Dr. Keith Tokuhara',
  description: 'Almost certainly some of it. The longer answer depends on your specific plan. Dr. Tokuhara explains what Medicare covers, what it doesn\'t, and how to navigate HMO and Advantage plans in the Coachella Valley.',
  keywords: ['does Medicare cover cataract surgery', 'cataract surgery insurance coverage', 'what does insurance pay for cataract surgery', 'Medicare Advantage cataract surgery', 'HMO cataract surgery coverage'],
  alternates: { canonical: '/insights/does-insurance-cover-cataract-surgery' },
  openGraph: {
    title: 'Does My Insurance Cover Cataract Surgery? | Dr. Keith Tokuhara',
    description: 'Medicare Part B covers cataract surgery when medically necessary. Premium lenses involve additional cost. HMO and Advantage plans may limit your surgeon choice.',
    url: 'https://drtokuhara.com/insights/does-insurance-cover-cataract-surgery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does My Insurance Cover Cataract Surgery?',
    description: 'Almost certainly some of it. The longer answer depends on your plan.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Medicare cover cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Part B covers cataract surgery when your doctor determines it is medically necessary, meaning your cataract is affecting your daily life, driving, or ability to read. The surgery itself, facility fee, anesthesia, and a standard intraocular lens are all covered. Your out-of-pocket share depends on whether you have a supplement, an Advantage plan, or original Medicare alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Medicare not cover for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium lens technology (multifocal, extended depth of focus, Light Adjustable Lens) involves an additional cost beyond what Medicare pays. That additional cost varies by lens type and by practice. If your surgeon recommends a premium lens, they should explain both the clinical reasoning and the cost before you agree to anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do HMO and Medicare Advantage plans work for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some plans limit which surgeons you can see. Some require a referral from your primary care physician. Some patients discover their designated surgeon has moved or retired, and they are not sure how to switch. Call Desert Vision Center at (760) 340-4700 to check your specific plan benefits before scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the standard lens covered by insurance a downgrade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A standard lens implant covered by Medicare produces excellent vision for most patients. It is not the cheap option. It is the most-tested, most-proven lens in cataract surgery. If your surgeon recommended it, there is probably a good clinical reason.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'Does My Insurance Cover Cataract Surgery?',
    description: 'The short answer: almost certainly some of it. The longer answer depends on your specific plan, and that is where confusion usually starts.',
    slug: '/insights/does-insurance-cover-cataract-surgery',
    datePublished: '2026-07-05',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Does My Insurance Cover Cataract Surgery?', href: '/insights/does-insurance-cover-cataract-surgery' },
  ]),
  faqSchema,
];

export default function InsightDoesInsuranceCoverCataractSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        poster="/media/hero-insurance-cataract-surgery.png"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Insurance & Coverage</span>
            <h1>Does My Insurance <strong>Cover Cataract Surgery?</strong></h1>
            <p className="page-hero-sub">The short answer: almost certainly some of it. The longer answer depends on your specific plan.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            The short answer: almost certainly some of it. The longer answer depends on your specific plan, and that is where confusion usually starts.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Medicare <strong>Covers</strong></h2>
          <p>
            Medicare Part B covers cataract surgery when your doctor determines it is medically necessary, meaning your cataract is affecting your daily life, your driving, your ability to read. The surgery itself, the facility fee, the anesthesia, and a standard intraocular lens are all covered. Your out-of-pocket share depends on whether you have a supplement, an Advantage plan, or original Medicare alone.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Medicare <strong>Doesn't Cover</strong></h2>
          <p>
            Premium lens technology (multifocal, extended depth of focus, Light Adjustable Lens) involves an additional cost beyond what Medicare pays. That additional cost varies by lens type and by practice. If your surgeon recommends a premium lens, they should explain both the clinical reasoning and the cost before you agree to anything.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What If You Have an HMO or <strong>Advantage Plan?</strong></h2>
          <p>
            This is where patients in the Coachella Valley get stuck. Some plans limit which surgeons you can see. Some require a referral from your primary care physician. Some patients discover their designated surgeon has moved or retired, and they are not sure how to switch.
          </p>
          <p>
            Here is what we suggest: call us. The team at Desert Vision Center checks insurance benefits before scheduling. They will tell you what your plan covers, what your estimated cost will be, and whether a referral is needed. No surprises. No commitment. Just clarity.
          </p>
          <p style={{marginTop: '1.5rem', fontWeight: 600}}>
            Desert Vision Center: <a href="tel:+17603404700" style={{color: '#007d95', textDecoration: 'none'}}>(760) 340-4700</a>
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Important Thing to <strong>Understand</strong></h2>
          <p>
            Insurance affects which options are presented to you. It should never affect the quality of your care. A standard lens implant covered by Medicare produces excellent vision for most patients. It is not the "cheap option." It is the most-tested, most-proven lens in cataract surgery. If your surgeon recommended it, there is probably a good clinical reason.
          </p>
          <p>
            If you are unsure whether you received the right lens, or whether a different option would have been better for your situation, you can always get a second opinion. That is what it is there for.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Insurance affects which options are presented to you. It should never affect the quality of your care."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients <strong>Really Want to Know</strong></h2>
          
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.75rem'}}>Did my insurance shortchange me?</h3>
            <p>
              No. The standard lens delivers excellent optics for most patients. Your surgeon did not recommend it because of your insurance. They recommended it because it matched your eye measurements, corneal health, and lifestyle.
            </p>
          </div>

          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.75rem'}}>Should I pay out of pocket for a premium lens?</h3>
            <p>
              That depends on your goals, your willingness to adapt to new optics, and whether the tradeoffs (possible halos, neuroadaptation time, higher side effect risk) are worth the additional range for you. If your surgeon offers you a choice, listen to the clinical reasoning, not just the marketing.
            </p>
          </div>

          <div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.75rem'}}>What if I don't understand my coverage?</h3>
            <p>
              Call Desert Vision Center at <a href="tel:+17603404700" style={{color: '#007d95', textDecoration: 'none'}}>(760) 340-4700</a>. The team checks insurance benefits and explains coverage every day. You will get a clear answer before you schedule anything.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="cta-inline">
            <h2>Questions about your coverage?</h2>
            <p>The team at Desert Vision Center will check your benefits and explain your options before you schedule. No surprises.</p>
            <a href="https://desertvisioncenter.com/contact" className="btn-primary">Contact Desert Vision Center</a>
            <p style={{marginTop: '1rem', fontSize: '0.95rem', color: '#555'}}>
              Desert Vision Center<br />
              39000 Bob Hope Drive, Wright Building, Suite 105<br />
              Rancho Mirage, CA 92270<br />
              <a href="tel:+17603404700" style={{color: '#007d95', textDecoration: 'none', fontWeight: 600}}>(760) 340-4700</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Topics</strong></h2>
          <ul className="related-links">
            <li><Link href="/insights/how-to-navigate-cataract-surgery-with-hmo">Navigating Cataract Surgery With an HMO</Link></li>
            <li><Link href="/insights/medicare-cataract-surgery">Medicare and Cataract Surgery</Link></li>
            <li><Link href="/insights/did-i-choose-the-right-lens">Did I Choose the Right Lens?</Link></li>
            <li><Link href="/lens-implants-explained">Lens Implants Explained</Link></li>
            <li><Link href="/understand-your-options">Understand Your Options</Link></li>
            <li><Link href="/choosing-your-surgeon">Choosing Your Surgeon</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
