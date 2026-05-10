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
      name: 'Who is the best cataract surgeon near Calimesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon who completed his residency at Loma Linda University, near Calimesa. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Calimesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 50 minutes east of Calimesa via Interstate 10 through the San Gorgonio Pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Calimesa resident drive to Rancho Mirage for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at nearby Loma Linda University and offers the same world-class training in a physician-owned, independent practice. Calimesa sits at the gateway to the pass, making the drive east to Rancho Mirage straightforward. The CLEAR in a Day program lets eligible patients have both eyes done in one trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available at Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers advanced cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management for patients with diabetes, glaucoma, and other conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Calimesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Calimesa residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Calimesa', href: '/cataract-surgeon-calimesa' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Calimesa Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Calimesa residents: Dr. Keith Tokuhara trained at nearby Loma Linda and now offers personalized cataract care at Desert Vision Center in Rancho Mirage. 20,000+ surgeries. Top Doctor 2019-2026. Straight east through the pass.',
  alternates: {
    canonical: '/cataract-surgeon-calimesa',
  },
  openGraph: {
    title: 'Cataract Surgeon for Calimesa Residents | Desert Vision Center',
    description: 'Loma Linda-trained cataract surgeon serving Calimesa from Desert Vision Center in Rancho Mirage. Personalized care, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-calimesa',
  },
};

export default function CataractSurgeonCalimesaPage() {
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
          <h1>Cataract Surgeon for <strong>Calimesa</strong> Residents</h1>
          <p className="page-hero-sub">
            Calimesa sits at the gateway to the pass. Desert Vision Center in Rancho Mirage is a straight shot east on the I-10 - about 50 minutes to personalized, expert cataract care.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Calimesa Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Calimesa is a small, quiet city perched at the western edge of the San Gorgonio Pass, where the Inland Empire gives way to the desert. It is a community of retirees, families, and people who appreciate the space, the views, and a pace of life that bigger cities cannot offer. Many Calimesa residents split their healthcare between the Loma Linda and Inland Empire systems to the west and the desert communities to the east.
          </p>
          <p className="prose">
            I trained at Loma Linda University, just down the road from Calimesa. I completed my ophthalmology residency under Dr. Howard Gimbel and lived in the area for several years. I know the region, and I understand the healthcare landscape Calimesa residents navigate. The large hospital systems to the west are capable, but they are also busy, crowded, and impersonal.
          </p>
          <p className="prose">
            Desert Vision Center offers a different kind of experience. Physician-owned. Independent. Designed around the patient, not the system. The I-10 takes you straight from Calimesa through the pass and into the Coachella Valley. About 50 minutes, and you arrive at a practice where your surgeon knows your name, takes the time to explain everything, and performs your surgery personally.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Here is what makes the drive east worthwhile:
          </p>
          <ul className="content-list">
            <li><strong>Gimbel-trained during residency:</strong> I trained at Loma Linda under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. That foundation of precision and technique shapes every surgery I perform.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, front to back, which means I catch conditions other cataract surgeons might miss.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled virtually every complication and challenging case cataract surgery can present.</li>
            <li><strong>You see me, not a resident:</strong> I perform every surgery personally, from start to finish. No trainees, no handoffs.</li>
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no hospital bureaucracy, no private equity investors. My only obligation is to my patients.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior surgeries, or cases other surgeons have declined regularly find their way to my practice.</li>
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
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient cataract removal using the latest techniques. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one trip from Calimesa. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range, toric lenses for astigmatism, and multifocal options. I match the lens to your eyes and your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
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
            Calimesa's retiree community is growing, and cataract surgery is the most common reason these residents need an eye surgeon. Many are active, outdoorsy, and expect a lot from their vision, whether it is reading, hiking the pass trails, driving, or enjoying the panoramic views of the San Gorgonio peaks.
          </p>
          <p className="prose">
            I take the time to understand how you use your eyes every day. That conversation drives the lens recommendation, the surgical approach, and the expectations we set together. I do not give everyone the same lens or the same plan. Your eyes are unique, and your surgery should be too.
          </p>
          <p className="prose">
            My retina fellowship also means that if your exam reveals something beyond cataracts, whether it is diabetic changes, macular concerns, or early glaucoma, I can manage it right here rather than sending you to another specialist. One surgeon, one practice, comprehensive care.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Calimesa is closer to Desert Vision Center than most residents realize. Straight east through the pass, about 50 minutes door to door. For a surgery that affects your vision for the rest of your life, the right surgeon matters more than the shortest drive.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Calimesa</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Calimesa, the drive is approximately 50 minutes.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head east on I-10 from Calimesa through the San Gorgonio Pass, past Beaumont and Banning. Continue east into the Coachella Valley and exit at Bob Hope Drive. Head south. The office is on your left, near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            The drive through the pass is direct and scenic. There is ample parking in front of the building, and our CLEAR in a Day program means eligible patients can have both eyes done in a single trip.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Calimesa residents: <strong>experience the difference.</strong></h2>
          <p>Loma Linda training, independent practice, personalized care. Straight east through the pass. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
