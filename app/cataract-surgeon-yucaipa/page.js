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
      name: 'Who is the best cataract surgeon near Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon who completed his residency at Loma Linda University, just minutes from Yucaipa. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately one hour east of Yucaipa via Interstate 10 through the San Gorgonio Pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Yucaipa resident drive to Rancho Mirage for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at Loma Linda University, near Yucaipa, and offers the same caliber of training in a physician-owned, independent practice with personalized attention and shorter wait times. His CLEAR in a Day program lets eligible patients have both eyes done in one trip.',
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
      name: 'Do I need a referral to see Dr. Tokuhara from Yucaipa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Yucaipa residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Yucaipa', href: '/cataract-surgeon-yucaipa' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Yucaipa Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Yucaipa residents: Dr. Keith Tokuhara trained at nearby Loma Linda and now offers personalized cataract care at Desert Vision Center in Rancho Mirage. 20,000+ surgeries, Top Doctor 2019-2026. One hour east on the I-10.',
  alternates: {
    canonical: '/cataract-surgeon-yucaipa',
  },
  openGraph: {
    title: 'Cataract Surgeon for Yucaipa Residents | Desert Vision Center',
    description: 'Loma Linda-trained cataract surgeon Dr. Keith Tokuhara serves Yucaipa residents from Desert Vision Center in Rancho Mirage. Personalized care, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-yucaipa',
  },
};

export default function CataractSurgeonYucaipaPage() {
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
          <h1>Cataract Surgeon for <strong>Yucaipa</strong> Residents</h1>
          <p className="page-hero-sub">
            I trained at Loma Linda, just down the hill from Yucaipa. Now I practice the way I always wanted to: personalized, unhurried, and independent. One hour east through the pass.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Surgeon Who Knows <strong>Your Area</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yucaipa is a community that has been growing steadily while holding onto its small-town character. The apple orchards on Oak Glen Road, the Wildwood Canyon trails, the family neighborhoods, and a retiree population that chose the Inland Empire for its weather, its affordability, and its slower pace. It is the kind of place where people take care of each other and expect their doctor to do the same.
          </p>
          <p className="prose">
            I know the area well. I completed my ophthalmology residency at Loma Linda University, just down the hill from Yucaipa, and lived in the region for several years. I trained under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. That training was exceptional, and I carry it into every surgery I perform.
          </p>
          <p className="prose">
            But I also learned something during those years: large hospital systems, no matter how prestigious, are not always the best setting for patient care. The parking, the waiting, the feeling of being one chart among thousands. After my fellowship, I chose to build something different. Desert Vision Center is physician-owned, independent, and designed around the patient, not the system.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yucaipa residents have options closer to home, including the Loma Linda system I trained at. Here is why many patients from the pass corridor make the drive east:
          </p>
          <ul className="content-list">
            <li><strong>You see me, not a resident:</strong> At an academic medical center, your surgery may involve trainees. At Desert Vision Center, I perform every surgery personally, from start to finish.</li>
            <li><strong>Gimbel-trained during residency:</strong> Same Loma Linda training. Same world-class foundation. Applied in a setting where I can give you my full attention.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, front to back, which means I catch things other cataract surgeons might miss.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have seen virtually every complication and challenging case cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior surgeries, or cases other surgeons have declined regularly come to my practice.</li>
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no hospital bureaucracy. My only obligation is to my patients.</li>
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
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient cataract removal using the latest techniques. I perform every surgery personally. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one trip from Yucaipa instead of making the drive twice. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range, toric lenses for astigmatism, and multifocal options. I match the lens to your eyes, your activities, and your priorities. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other advanced cases. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> Comprehensive management including in-house injections and laser treatment. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes This <strong>Worth the Drive</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yucaipa has a significant and growing retiree population, and cataracts are the most common reason these residents need eye surgery. Many Yucaipa retirees are active: hiking Wildwood Canyon, visiting Oak Glen, gardening, reading, driving to see grandkids. When cataracts start interfering with those activities, the next step matters.
          </p>
          <p className="prose">
            Your default option might be the hospital system down the hill. And that is a reasonable choice. But if you have ever sat in a waiting room for two hours, felt rushed through an appointment, or been handed a brochure instead of a real conversation about your lens options, you know there is a difference between care and processing.
          </p>
          <p className="prose">
            At Desert Vision Center, the experience is different. I take the time to understand how you use your eyes, what activities matter most to you, and what your expectations are. Then I give you an honest recommendation, not the most expensive one, not the fastest one, but the right one. My retina fellowship means I evaluate your whole eye, not just the cataract, catching conditions that other surgeons might miss.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Yucaipa residents who value personalized care over institutional convenience consistently find their way to Desert Vision Center. I trained at the institution down the hill from you. Now I practice the way that training deserves to be practiced: with precision, honesty, and the time to do things right.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Yucaipa</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Yucaipa, the drive is approximately one hour.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head east on I-10 from Yucaipa through Beaumont, Banning, and the San Gorgonio Pass. Continue east into the Coachella Valley and exit at Bob Hope Drive. Head south. The office is on your left, near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            The drive through the pass is direct and scenic. There is ample parking in front of the building, and our CLEAR in a Day program means eligible patients can have both eyes done in a single trip.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Yucaipa residents: <strong>experience the difference.</strong></h2>
          <p>Loma Linda training, independent practice, personalized care. One hour east through the pass. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
