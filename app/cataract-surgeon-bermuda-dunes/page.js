import Link from 'next/link';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon near Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 15 minutes from Bermuda Dunes. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 15-minute drive from Bermuda Dunes via Washington Street or Interstate 10. The office has ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options are available for cataract surgery near Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers a full range of lens implants including EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. Dr. Tokuhara matches lens selection to each patient\'s anatomy, lifestyle, and visual priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara handle complex cataract cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara specializes in complex cataract cases including patients with diabetes, glaucoma, pseudoexfoliation, previous LASIK, prior retina surgery, and failed procedures from other surgeons. His retina fellowship gives him expertise most cataract surgeons do not have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Bermuda Dunes residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Bermuda Dunes', href: '/cataract-surgeon-bermuda-dunes' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Bermuda Dunes | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Bermuda Dunes? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 15 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-bermuda-dunes',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Bermuda Dunes | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 15 minutes from Bermuda Dunes. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-bermuda-dunes',
  },
};

export default function CataractSurgeonBermudaDunesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-golden-hour.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Bermuda Dunes</strong></h1>
          <p className="page-hero-sub">
            Bermuda Dunes residents enjoy a quieter pace and a strong sense of community. When cataracts start affecting your vision, Desert Vision Center is just 15 minutes away in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Bermuda Dunes Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Bermuda Dunes is one of the Coachella Valley's best-kept secrets. A tight-knit community centered around the Bermuda Dunes Country Club, the airport, and quiet residential neighborhoods where people value privacy, relaxation, and a slower pace. Many residents are retirees who came for the golf, the weather, and a community that feels more like a small town than a desert suburb.
          </p>
          <p className="prose">
            When cataracts begin affecting your ability to enjoy that lifestyle, whether it is difficulty tracking the golf ball, struggling with glare on the drive to the grocery store, or finding that your reading vision is not what it used to be, it is time for a thorough evaluation. I see patients from Bermuda Dunes regularly, and the conversation often starts with a simple observation: things just look different than they used to.
          </p>
          <p className="prose">
            My consultations are thorough and personal. I take the time to understand how you use your eyes, what matters to you, and what your expectations are. Then I give you my honest recommendation. No pressure, no upselling, just clear information so you can make the best decision for your vision.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Here is what sets Desert Vision Center apart:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors. I own my practice, and my only obligation is to my patients. The small-town feel that Bermuda Dunes residents value extends to my office.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. His precision and standards shape every surgery I perform.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, front to back, which means I can catch and manage conditions that other cataract surgeons might miss.</li>
            <li><strong>Over 20,000 surgeries:</strong> That volume means I have seen virtually every variation and complication cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior surgeries, or cases other surgeons have declined are a regular part of my practice.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cataract Surgery <strong>Services</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every treatment plan is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient removal of cataracts using the latest techniques. I perform every surgery personally. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means less disruption to your routine. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range, toric lenses for astigmatism, and multifocal options. The right lens depends on your anatomy, your activities, and how you use your eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Bermuda Dunes residents are often active golfers, and golf is one of the activities most affected by cataracts. Contrast sensitivity drops, making it harder to track a white ball against a bright sky. Depth perception changes, affecting putting and distance judgment. Glare from the morning sun on the fairway becomes blinding rather than just bright.
          </p>
          <p className="prose">
            I have this conversation regularly with patients from the Bermuda Dunes Country Club and other courses in the area. The lens choice matters enormously for golfers because different lenses affect contrast, glare, and distance vision differently. I take the time to understand how you play and what matters most to your game, and I match the lens to those priorities.
          </p>
          <p className="prose">
            This level of personalization is what sets Desert Vision Center apart from practices that recommend the same lens to everyone. Your eyes are unique, your life is unique, and your surgical plan should be too.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Bermuda Dunes residents who value personalized care, honest advice, and a surgeon who takes the time to understand their lifestyle consistently find their way to Desert Vision Center. The 15-minute drive to Rancho Mirage is one of the easiest parts of the process.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Bermuda Dunes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Bermuda Dunes, the drive is approximately 15 minutes.
          </p>
          <p className="prose">
            <strong>Via Washington Street:</strong> Head north on Washington Street to Highway 111, then head west toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 and exit at Bob Hope Drive. Head south and the office will be on your left.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. We keep our waiting times short, and the office is easily accessible.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Bermuda Dunes?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 15 minutes away. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
