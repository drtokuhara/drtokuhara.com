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
  title: 'How to Navigate Cataract Surgery with an HMO - Dr. Keith Tokuhara',
  description: 'If you have an HMO, the system can feel rigid. You don\'t always get to choose your surgeon. Here\'s what you should know about your options, how to request a different surgeon, and what to expect.',
  keywords: ['HMO cataract surgery', 'SCAN cataract surgery', 'Medicare Advantage cataract surgery', 'choose cataract surgeon HMO', 'switch HMO surgeon'],
  alternates: { canonical: '/insights/how-to-navigate-cataract-surgery-with-hmo' },
  openGraph: {
    title: 'How to Navigate Cataract Surgery with an HMO | Dr. Keith Tokuhara',
    description: 'HMOs cover cataract surgery. You may have more choice than you think. Here\'s how to navigate the system.',
    url: 'https://drtokuhara.com/insights/how-to-navigate-cataract-surgery-with-hmo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Navigate Cataract Surgery with an HMO',
    description: 'You may have more choice than you think. Here\'s what you should know.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does my HMO cover cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Advantage HMOs, SCAN, and most managed care plans cover medically necessary cataract surgery, including the facility, anesthesia, surgeon, and a standard lens implant. You will likely need a referral from your primary care physician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose a different surgeon with my HMO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many HMO patients assume they must see the surgeon their plan assigned. In some cases, that\'s true. In others, your plan\'s network includes multiple surgeons, and you can request a specific one. It\'s worth calling your plan and asking: "Can I choose a different ophthalmologist within the network?"',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m unhappy with my HMO referral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HMOs have a process for requesting a different provider. If you feel your surgical consultation was rushed, if you didn\'t get your questions answered, or if the surgeon who was assigned to you is no longer practicing, you have the right to ask for someone else. Your primary care physician can submit a new referral.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'How to Navigate Cataract Surgery with an HMO',
    description: 'If you have an HMO, you already know the system can feel rigid. You get referred to a specific doctor. You don\'t always get to choose. Here\'s what you should know.',
    slug: '/insights/how-to-navigate-cataract-surgery-with-hmo',
    datePublished: '2026-07-12',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'How to Navigate Cataract Surgery with an HMO', href: '/insights/how-to-navigate-cataract-surgery-with-hmo' },
  ]),
  faqSchema,
];

export default function InsightHMONavigation() {
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
            <h1>How to Navigate Cataract Surgery <strong>with an HMO</strong></h1>
            <p className="page-hero-sub">You may have more choice than you think. Here's what you should know.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            If you have an HMO, you already know the system can feel rigid. You get referred to a specific doctor. You don't always get to choose. And when it comes to something like cataract surgery, that lack of control can be uncomfortable.
          </p>
          <p>
            Here's what you should know.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Your HMO <strong>Covers Cataract Surgery</strong></h2>
          <p>
            Medicare Advantage HMOs, SCAN, and most managed care plans cover medically necessary cataract surgery, including the facility, anesthesia, surgeon, and a standard lens implant. You will likely need a referral from your primary care physician.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">You May Have More Choice <strong>Than You Think</strong></h2>
          <p>
            Many HMO patients assume they must see the surgeon their plan assigned. In some cases, that's true. In others, your plan's network includes multiple surgeons, and you can request a specific one. It's worth calling your plan and asking: "Can I choose a different ophthalmologist within the network?" Sometimes the answer is yes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">If You're Unhappy with Your Referral, <strong>Escalate</strong></h2>
          <p>
            HMOs have a process for requesting a different provider. If you feel your surgical consultation was rushed, if you didn't get your questions answered, or if the surgeon who was assigned to you is no longer practicing, you have the right to ask for someone else. Your primary care physician can submit a new referral.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>Premium Lenses?</strong></h2>
          <p>
            If you want a multifocal, extended depth of focus, or Light Adjustable Lens, there's an out-of-pocket cost beyond what any insurance covers. That part doesn't change with an HMO. What does change is how you access the surgeon. Some HMOs allow you to see an out-of-network surgeon for the surgical portion if you pay the difference. Others don't. This is a conversation to have with both your insurance plan and the surgeon's office.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Our <strong>Approach</strong></h2>
          <p>
            Desert Vision Center works with most insurance plans, including Medicare Advantage and several HMOs in the Coachella Valley. The team checks your benefits before anything is scheduled. If we can see you, we'll tell you how. If we can't, we'll tell you that too, and point you in the right direction.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"Nobody should feel stuck with a surgeon they didn't choose. Sometimes the system makes it harder to switch. But harder doesn't mean impossible."</p>
          </div></BlurReveal>

          <p style={{marginTop: '2rem', fontWeight: 600}}>
            Desert Vision Center: <a href="tel:+17603404700" style={{color: '#007d95', textDecoration: 'none'}}>(760) 340-4700</a>
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="cta-inline">
            <h2>Questions about your HMO coverage?</h2>
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
            <li><Link href="/insights/does-insurance-cover-cataract-surgery">Does My Insurance Cover Cataract Surgery?</Link></li>
            <li><Link href="/insights/cataract-referral-kickbacks">The Truth About Referral Kickbacks</Link></li>
            <li><Link href="/insights/how-to-choose-a-cataract-surgeon">How to Choose a Cataract Surgeon</Link></li>
            <li><Link href="/insights/second-opinion-cataract-surgery">Getting a Second Opinion</Link></li>
            <li><Link href="/choosing-your-surgeon">Choosing Your Surgeon</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
