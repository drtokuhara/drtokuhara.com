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
      name: 'Who is the best cataract surgeon near Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 20 minutes from Desert Hot Springs. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 20-minute drive from Desert Hot Springs via Indian Canyon Road or Gene Autry Trail to Interstate 10. The office has ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available near Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers advanced cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized plan for every patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara accept patients with glaucoma who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara specializes in complex cataract cases including patients with glaucoma, diabetes, pseudoexfoliation, and previous eye surgery. His retina fellowship training gives him a comprehensive understanding of the entire eye.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Desert Hot Springs residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Desert Hot Springs', href: '/cataract-surgeon-desert-hot-springs' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Desert Hot Springs | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Desert Hot Springs? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 20 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-desert-hot-springs',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Desert Hot Springs | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 20 minutes from Desert Hot Springs. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-desert-hot-springs',
  },
};

export default function CataractSurgeonDesertHotSpringsPage() {
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
          <h1>Cataract Surgeon in <strong>Desert Hot Springs</strong></h1>
          <p className="page-hero-sub">
            Desert Hot Springs residents know the value of healing. When cataracts threaten your vision, Desert Vision Center is 20 minutes south in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Desert Hot Springs Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Hot Springs is a city that people come to for renewal. The natural hot mineral springs, the quiet neighborhoods, the dramatic views of the San Jacinto and Little San Bernardino mountains. It is a place where retirees settle for the climate and the affordability, where families put down roots, and where the desert lifestyle means spending a lot of time outdoors.
          </p>
          <p className="prose">
            That outdoor lifestyle is part of what I love about the Coachella Valley, but it also means years of UV exposure that accelerate cataract development. I see many patients from Desert Hot Springs who notice their vision changing. Colors fading, glare intensifying on the drive down to Palm Springs, difficulty reading, or the mountains losing their sharpness. These are classic signs that cataracts are developing, and it is worth having them evaluated.
          </p>
          <p className="prose">
            My approach with Desert Hot Springs patients is the same as with every patient: a thorough examination, an honest conversation about what I find, and a plan that fits your eyes and your life. No shortcuts, no one-size-fits-all recommendations.
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
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors, no hospital system. I own my practice, and my only obligation is to my patients.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. His precision and technique are the foundation of my surgical approach.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, front to back, which means I catch things that cataract-only surgeons might miss.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled virtually every complication and anatomical variation that cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, previous eye surgeries, or cases other surgeons have declined regularly come to my practice.</li>
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
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient removal of cataracts using the latest techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means fewer trips down the hill. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. The right lens depends on your anatomy, your activities, and how you use your eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management of glaucoma and diabetic retinopathy, including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Hot Springs has a significant retiree community, and many of those residents are dealing with more than just cataracts. Glaucoma, macular degeneration, diabetic eye changes, or a history of other eye conditions. My retina fellowship training means I can evaluate and manage the whole picture in one practice, rather than sending you to multiple specialists across the Valley.
          </p>
          <p className="prose">
            I also understand that many Desert Hot Springs residents are on fixed incomes and want to make smart healthcare decisions. I never recommend the most expensive option for the sake of it. I recommend what is best for your eyes and your situation, and I explain why. Sometimes the standard lens is the right choice. I will tell you that honestly.
          </p>
          <p className="prose">
            Desert Vision Center is not a volume practice. I do not rush through evaluations, and I do not hand you off to a technician for the important conversations. You see me, you talk to me, and I perform your surgery myself.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Desert Hot Springs residents who want a thorough, honest cataract surgeon with deep experience and the ability to manage complex eyes consistently choose Desert Vision Center. The 20-minute drive south to Rancho Mirage leads to some of the best eye care in the region.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Desert Hot Springs</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Desert Hot Springs, the drive is approximately 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Indian Canyon Road:</strong> Head south on Indian Canyon Road through North Palm Springs. Continue south and merge onto Interstate 10 heading east briefly, then exit at Bob Hope Drive and head south. The office is on your left.
          </p>
          <p className="prose">
            <strong>Via Gene Autry Trail:</strong> Take Gene Autry Trail south to Interstate 10 heading west, then exit at Bob Hope Drive and head south.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. We keep our waiting times short, so you will not spend your afternoon in a lobby.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Desert Hot Springs?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 20 minutes away. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
