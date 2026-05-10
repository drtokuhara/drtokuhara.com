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
      name: 'Who is the best cataract surgeon near Thermal or Mecca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 35 minutes from the Thermal and Mecca area. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Thermal and Mecca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 35-minute drive from Thermal and Mecca via Highway 86 to Interstate 10 or Highway 111. The office has ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients with diabetes who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a fellowship in retina surgery and specializes in complex cataract cases including patients with diabetes, diabetic retinopathy, glaucoma, and other conditions. He evaluates and manages diabetic eye disease in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients with UV-related cataract damage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many patients from the eastern Coachella Valley have developed cataracts accelerated by years of UV exposure from outdoor work. Dr. Tokuhara provides thorough evaluations and personalized surgical plans for these patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Thermal or Mecca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Residents of Thermal and Mecca can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Thermal & Mecca', href: '/cataract-surgeon-thermal-mecca' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Thermal & Mecca | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Thermal or Mecca? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is approximately 35 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-thermal-mecca',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Thermal & Mecca | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, serving Thermal and Mecca from Rancho Mirage. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-thermal-mecca',
  },
};

export default function CataractSurgeonThermalMeccaPage() {
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
          <h1>Cataract Surgeon for <strong>Thermal &amp; Mecca</strong></h1>
          <p className="page-hero-sub">
            The eastern Coachella Valley deserves access to the same quality of cataract care as anywhere else. Desert Vision Center in Rancho Mirage is approximately 35 minutes away.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Thermal and Mecca Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Thermal and Mecca are the agricultural backbone of the Coachella Valley. Date farms, produce operations, and the hard-working families who keep this region fed. The eastern Valley is also one of the most sun-exposed areas in Southern California, and that UV exposure has a direct impact on eye health. Cataracts develop earlier and more aggressively in people who spend years working outdoors without consistent UV protection.
          </p>
          <p className="prose">
            I see patients from this part of the Valley who are often younger than the typical cataract patient but whose cataracts are already significantly affecting their vision and their ability to work. If you have noticed your vision getting cloudy, colors fading, difficulty driving at night, or increasing glare in the afternoon sun, cataracts may be the cause.
          </p>
          <p className="prose">
            I understand the drive to Rancho Mirage is longer than ideal, and I respect that time. That is why I make every visit count. Thorough examinations, clear explanations, and efficient scheduling. For patients who qualify, our CLEAR in a Day program allows both eyes to be treated in a single visit.
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
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors. I own my practice, and my only obligation is to my patients.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. That foundation of precision shapes every surgery I perform.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, which is critical for patients with diabetes and other systemic conditions that affect eye health.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled virtually every challenge cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior eye surgery, and complications from other procedures regularly come to my practice from across the Valley.</li>
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
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient cataract removal. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means one trip from the eastern Valley instead of multiple. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF, toric, and multifocal options. I match the lens to your eyes and your life, not the other way around. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
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
            Diabetes rates in the eastern Coachella Valley are among the highest in the region. As someone with fellowship training in retina surgery, I bring specialized expertise for diabetic cataract patients. I am not just removing a cloudy lens. I am evaluating the retina for diabetic changes, checking for macular edema, and planning a surgery that accounts for the whole picture. Many cataract surgeons would refer these patients out. I manage them in-house.
          </p>
          <p className="prose">
            I welcome families into the consultation. If a family member translates or helps with medical decisions, they are part of the conversation. I explain everything clearly, answer every question, and make sure everyone involved understands the plan.
          </p>
          <p className="prose">
            I believe every patient in the Coachella Valley deserves the same level of care, and I mean that. The zip code you live in should not determine the quality of your cataract surgery. When you make the drive to Desert Vision Center, you are going to get a thorough evaluation, an honest recommendation, and a surgeon who has performed over 20,000 procedures.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Thermal and Mecca residents who want a cataract surgeon with the skill to handle diabetes, glaucoma, and complex eyes choose Desert Vision Center. We make every visit count, and our CLEAR in a Day option means eligible patients can have both eyes treated in a single trip.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Thermal &amp; Mecca</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From the Thermal and Mecca area, the drive is approximately 35 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 86 and I-10:</strong> Take Highway 86 north from Mecca or Thermal to Interstate 10. Head west on I-10 and exit at Bob Hope Drive. Head south to the office.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 west through Coachella and Indio toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. For CLEAR in a Day patients, both eyes can be done in one trip, which is especially valuable for those making a longer drive.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Thermal or Mecca?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage serves the entire Coachella Valley. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
