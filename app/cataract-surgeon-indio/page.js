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
      name: 'Who is the best cataract surgeon near Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 25 minutes from Indio. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 25-minute drive from central Indio via Interstate 10 or Highway 111. The office has ample parking and is easily accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients who work outdoors or in agriculture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara regularly treats patients whose work involves significant UV exposure, including those in agriculture and outdoor industries. Prolonged sun exposure is a known risk factor for cataracts, and he provides thorough evaluations and personalized treatment plans for patients with accelerated cataract development.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options are available for cataract surgery near Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers a full range of lens implants including EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. Dr. Tokuhara matches lens selection to each patient\'s anatomy, lifestyle, and visual priorities rather than recommending one lens for everyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Indio residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Indio', href: '/cataract-surgeon-indio' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Indio | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Looking for a cataract surgeon near Indio? Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is just 25 minutes away. Fellowship-trained, 20,000+ surgeries, Top Doctor 2019-2026. Premium lenses and complex case expertise.',
  alternates: {
    canonical: '/cataract-surgeon-indio',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Indio | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, just 25 minutes from Indio. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-indio',
  },
};

export default function CataractSurgeonIndioPage() {
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
          <h1>Cataract Surgeon in <strong>Indio</strong></h1>
          <p className="page-hero-sub">
            Indio is the fastest-growing city in the Coachella Valley, and its residents deserve a cataract surgeon who matches that momentum. Desert Vision Center is 25 minutes west in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Indio Residents Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indio is a city in motion. New neighborhoods, new families, a growing economy anchored by agriculture, the date palm industry, and the international spotlight that comes with the Coachella Valley Music and Arts Festival. It is a diverse community where people work hard, spend time outdoors, and value straightforward, honest healthcare.
          </p>
          <p className="prose">
            I see many patients from Indio, and a theme runs through those conversations: years of UV exposure from outdoor work or an active desert lifestyle have accelerated their cataracts. Agriculture, construction, landscaping, festival logistics, or simply spending decades under the Coachella Valley sun. All of it adds up. When vision starts to blur, glare becomes a problem on the drive home on the I-10, or colors lose their richness, cataracts are often the reason.
          </p>
          <p className="prose">
            My approach with every Indio patient is the same as with every patient: thorough examination, honest conversation about what I find, and a personalized plan. No assembly-line medicine. No upselling. Just a clear explanation of your options and my best recommendation based on decades of surgical experience.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            When you are researching cataract surgeons, here is what matters about Desert Vision Center:
          </p>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors, no hospital system dictating how I practice. I own my practice, which means my only obligation is to my patients.</li>
            <li><strong>Gimbel-trained during residency:</strong> I trained under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world. His standards for precision and technique are the foundation of everything I do in the operating room.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. This means I understand the entire eye, front to back. When I evaluate your cataracts, I am also assessing the retina, the optic nerve, and conditions that other cataract surgeons might miss or refer out.</li>
            <li><strong>Over 20,000 surgeries:</strong> That experience means I have handled virtually every complication, anatomical variation, and challenging situation that cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been told their case is too complicated, who had a previous surgery that did not go well, or who have diabetes, glaucoma, or other complicating conditions find their way to my practice.</li>
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
            Every treatment plan at Desert Vision Center is individualized. I do not have a default recommendation. I evaluate your eyes, listen to your priorities, and build a plan from there.
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, efficient removal of cataracts using the latest surgical techniques. I perform every surgery personally from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit means fewer drives from Indio and less time away from work. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. The right lens depends on your anatomy, your activities, and how you use your eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
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
            Many of my Indio patients tell me they appreciate the fact that I take the time to explain everything. They have questions about UV damage and cataracts, about whether outdoor work contributed to their condition, about what lens will work best for someone who is still working, still driving, still active. I answer all of those questions because an informed patient makes a better decision.
          </p>
          <p className="prose">
            I also see patients from Indio who have diabetes or early diabetic eye changes. My retina fellowship means I can evaluate and manage those conditions in-house rather than sending you to a separate specialist. When your cataract surgeon also understands diabetic retinopathy and macular disease, you get more coordinated, more complete care.
          </p>
          <p className="prose">
            Desert Vision Center is not a volume practice. I do not rush through evaluations, and I do not hand you off to a technician for the important conversations. You see me, you talk to me, and I perform your surgery myself.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Indio residents who want a cataract surgeon with deep experience, honest communication, and the ability to handle complex eyes consistently choose Desert Vision Center. The 25-minute drive west on the I-10 leads to some of the best cataract care in the region.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Indio</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From central Indio, the drive is approximately 25 minutes.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 from Indio. Take the Bob Hope Drive exit and head south. The office is on your left, just past the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 (also known as the main corridor through the Valley) west through La Quinta and Indian Wells toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            There is ample parking directly in front of the building. We keep our waiting times short, and the CLEAR in a Day option means eligible patients can have both eyes done in a single trip from Indio.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for a cataract surgeon near <strong>Indio?</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just 25 minutes away. Call us or send a message to schedule your consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
