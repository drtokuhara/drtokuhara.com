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
      name: 'Who is the best cataract surgeon near Coachella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 30 minutes from Coachella. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Coachella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 30-minute drive from Coachella via Interstate 10 or Highway 111. The office has ample parking and is easily accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara see patients with diabetes who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a fellowship in retina surgery and specializes in complex cataract cases including patients with diabetes, diabetic retinopathy, glaucoma, and other complicating conditions. He manages these conditions in-house rather than referring out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available near Coachella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers standard and laser-assisted cataract surgery, premium lens implants including EDOF, toric, and multifocal lenses, CLEAR in a Day same-day bilateral surgery, and complex case management. Dr. Tokuhara creates a personalized plan for every patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Coachella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Coachella residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Coachella', href: '/cataract-surgeon-coachella' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Coachella | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Coachella? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 30 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026. Premium lenses and complex case expertise.',
  alternates: {
    canonical: '/cataract-surgeon-coachella',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Coachella | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 30 minutes from Coachella. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-coachella',
  },
};

export default function CataractSurgeonCoachellaPage() {
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
          <h1>Cataract Surgeon in <strong>Coachella</strong></h1>
          <p className="page-hero-sub">
            Coachella is one of the fastest-growing communities in the Valley. When cataracts threaten the vision you depend on, Desert Vision Center is 30 minutes west in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Coachella Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Coachella is a community built on hard work, family, and resilience. Many of my patients from Coachella have spent years working outdoors in agriculture, construction, or under the relentless desert sun. That UV exposure is a major contributor to cataract development, and it is why I see patients from this part of the Valley who develop cataracts earlier or more aggressively than average.
          </p>
          <p className="prose">
            I understand that the drive to Rancho Mirage is a commitment, and I respect the time it takes. That is exactly why I make every visit count. Thorough examinations, clear communication, honest advice, and no wasted trips. For patients who qualify, our CLEAR in a Day program lets you have both eyes done in a single visit, which can mean one trip from Coachella instead of multiple.
          </p>
          <p className="prose">
            I also know that many Coachella residents have family members who translate for them or help with medical decisions. My office welcomes families into the consultation. I explain everything clearly, answer every question, and make sure both the patient and their family understand the plan.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Here is what sets Desert Vision Center apart from the options closer to Coachella:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors. I own my practice, which means my only obligation is to my patients. You will never feel like a number here.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. That foundation of precision and technique shapes every surgery I perform.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. This means I understand the entire eye, front to back, and I can manage complications and conditions that most cataract surgeons would refer out.</li>
            <li><strong>Over 20,000 surgeries:</strong> That volume means I have handled virtually every challenge cataract surgery can present. Experience is not something you can shortcut.</li>
            <li><strong>Complex case specialist:</strong> Patients with diabetes, glaucoma, prior eye surgeries, or previous procedures that did not go well regularly come to my practice from across the Valley.</li>
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
            Every treatment plan at Desert Vision Center is individualized. I evaluate your eyes, listen to your priorities, and build a plan from there.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient removal of cataracts using the latest surgical techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means fewer drives from Coachella and less time away from work and family. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. I match the lens to your eyes and your life. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction, and other cases that require advanced surgical skill. <Link href="/complex-cases">See complex case expertise</Link>.</li>
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
            Diabetes is more prevalent in the eastern Coachella Valley than in many parts of the region. As someone who completed a retina fellowship specifically to manage conditions like diabetic retinopathy, I bring a level of expertise to diabetic cataract patients that most cataract surgeons simply do not have. I am not just removing a cloudy lens. I am evaluating the entire eye, checking for diabetic changes in the retina, and planning a surgery that accounts for everything.
          </p>
          <p className="prose">
            Many patients from Coachella also tell me they have experienced rushed appointments elsewhere, where the doctor spent more time looking at a screen than at their eyes. That will not happen here. My consultations are thorough and personal. I explain what I see, what it means, and what your options are, and I do not move on until every question is answered.
          </p>
          <p className="prose">
            I believe every patient in the Coachella Valley deserves the same quality of care, regardless of which city they live in. The 30-minute drive to Desert Vision Center is an investment in your vision that pays back for years.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Coachella residents who want a cataract surgeon with deep experience, honest communication, and the skills to handle diabetes, glaucoma, and complex eyes consistently choose Desert Vision Center. We welcome your family into the consultation and make every visit count.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Coachella</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Coachella, the drive is approximately 30 minutes.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 from Coachella. Take the Bob Hope Drive exit and head south. The office is on your left, near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 west through Indio, La Quinta, and Indian Wells toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. For CLEAR in a Day patients, both eyes can be done in one trip, saving you a second drive from Coachella.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Coachella?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 30 minutes away. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
