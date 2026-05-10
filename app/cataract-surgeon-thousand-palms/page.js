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
      name: 'Who is the best cataract surgeon near Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 15 minutes from Thousand Palms. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 15-minute drive from Thousand Palms via Bob Hope Drive or Interstate 10. The office has ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available near Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers advanced cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized plan for every patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients with diabetes who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a fellowship in retina surgery and specializes in complex cataract cases including patients with diabetes, diabetic retinopathy, glaucoma, and other complicating conditions. He manages these conditions in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Thousand Palms residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Thousand Palms', href: '/cataract-surgeon-thousand-palms' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Thousand Palms | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Thousand Palms? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 15 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-thousand-palms',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Thousand Palms | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 15 minutes from Thousand Palms. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-thousand-palms',
  },
};

export default function CataractSurgeonThousandPalmsPage() {
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
          <h1>Cataract Surgeon in <strong>Thousand Palms</strong></h1>
          <p className="page-hero-sub">
            Thousand Palms residents are closer to Desert Vision Center than many people realize. Just 15 minutes down Bob Hope Drive to some of the best cataract care in the Coachella Valley.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Thousand Palms Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Thousand Palms is a community that sits right along the I-10 corridor, positioned between Palm Springs and the eastern Valley. It is home to the Coachella Valley Preserve, a growing residential population, and people who enjoy the more relaxed, affordable side of desert living. The community is close-knit, practical, and values straightforward service.
          </p>
          <p className="prose">
            I see patients from Thousand Palms who are often surprised at how close Desert Vision Center actually is. Bob Hope Drive connects directly from the I-10 area to our office in Rancho Mirage. It is a 15-minute drive, and for many Thousand Palms residents, that is shorter than the drive to some of the bigger medical centers in the Valley.
          </p>
          <p className="prose">
            My approach is simple and consistent: a thorough examination, an honest conversation about what I find, and a treatment plan tailored to your eyes and your life. Whether you are still working, enjoying retirement, or somewhere in between, I factor in how you actually use your vision every day.
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
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. That foundation of precision shapes everything I do.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. I understand the entire eye, which means I catch things that cataract-only surgeons might miss.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled virtually every complication and challenging situation cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior surgeries, or cases other surgeons have declined regularly come to my practice.</li>
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
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means less time away from your routine. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses for astigmatism, and multifocal options. The right lens depends on your eyes and your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
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
            Thousand Palms residents sometimes feel caught between the medical infrastructure of Palm Springs to the west and the eastern Valley communities. Desert Vision Center is geographically central and easy to reach, but more importantly, it offers a level of personalized care that bigger facilities cannot match.
          </p>
          <p className="prose">
            You will not sit in a crowded waiting room here. You will not be seen by a different doctor than the one you researched. You will not be handed a one-page brochure about your lens options and told to choose. I sit with you, explain what I see, walk through your options, and answer every question until you feel confident in the plan.
          </p>
          <p className="prose">
            My retina fellowship also means that if I find something beyond cataracts during your exam, whether it is diabetic changes, macular concerns, or early glaucoma, I can evaluate and manage those conditions right here rather than sending you elsewhere.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Thousand Palms residents who want a cataract surgeon with deep experience, honest communication, and the ability to handle complex eyes choose Desert Vision Center. The 15-minute drive to Rancho Mirage puts you in one of the best-equipped eye care practices in the region.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Thousand Palms</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Thousand Palms, the drive is approximately 15 minutes.
          </p>
          <p className="prose">
            <strong>Via Bob Hope Drive:</strong> Head south on Bob Hope Drive directly from the Thousand Palms area. The office is on your right, near the Eisenhower Medical Center area. This is the most direct route.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 briefly and exit at Bob Hope Drive. Head south to the office.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. We keep waiting times short and the process efficient.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Thousand Palms?</strong></h2>
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
