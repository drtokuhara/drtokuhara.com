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
      name: 'Who is the best cataract surgeon near Cathedral City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon just minutes from Cathedral City. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Cathedral City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 5 to 10 minutes from Cathedral City. As the neighboring city, Rancho Mirage is one of the closest destinations from Cathedral City along Highway 111.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center accept patients without a referral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. No referral is required. Cathedral City residents can call Desert Vision Center at 760.340.4700 or use the online contact form to schedule a consultation directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cataract surgery does Dr. Tokuhara perform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara performs advanced cataract surgery including standard and laser-assisted procedures, premium lens implants (EDOF, toric, multifocal), CLEAR in a Day same-day bilateral surgery, and complex revision surgery for patients with prior complications or challenging eye conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dr. Tokuhara treat patients who have diabetes and need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara is fellowship-trained in retina surgery and regularly manages cataract patients with diabetes, diabetic retinopathy, glaucoma, and other complicating conditions. He provides comprehensive eye care in-house, including anti-VEGF injections for diabetic eye disease.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Cathedral City', href: '/cataract-surgeon-cathedral-city' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Cathedral City | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Cathedral City residents: Dr. Keith Tokuhara at Desert Vision Center is just minutes away in neighboring Rancho Mirage. Fellowship-trained cataract surgeon, 20,000+ surgeries, premium lens implants, complex case expertise. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-cathedral-city',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Cathedral City | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara in neighboring Rancho Mirage. Advanced cataract surgery, premium lenses, complex cases. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-cathedral-city',
  },
};

export default function CataractSurgeonCathedralCityPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-blue-hour.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Cathedral City</strong></h1>
          <p className="page-hero-sub">
            Cathedral City is right next door to Rancho Mirage, making Desert Vision Center one of the closest cataract surgery practices for Cathedral City residents.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Closest Fellowship-Trained <strong>Cataract Surgeon</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Cathedral City and Rancho Mirage share a border. Desert Vision Center at 35900 Bob Hope Drive is likely closer to your home than many services you already use regularly. That proximity is a genuine advantage when it comes to cataract surgery, because the process involves multiple visits: the initial consultation, pre-operative measurements, the surgery itself, and several follow-up appointments.
          </p>
          <p className="prose">
            Cathedral City is a vibrant, growing community. Families, retirees, working professionals, and seasonal residents all call it home. I see patients from Cathedral City with a wide range of needs, from straightforward cataracts to complex cases involving diabetes, glaucoma, or previous eye surgery. Whatever your situation, you deserve a surgeon who takes the time to understand your eyes and your priorities.
          </p>
          <p className="prose">
            Many Cathedral City residents tell me they appreciate that Desert Vision Center feels different from larger, impersonal practices. I personally handle every consultation and every surgery. There is no rotating cast of providers. You see the same surgeon from the first visit through your last follow-up.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Physician-owned and independent:</strong> No corporate chain, no private equity investors. I own my practice, which means every clinical decision is based solely on what is best for your eyes.</li>
            <li><strong>Gimbel-trained during residency:</strong> I learned cataract surgery from Dr. Howard Gimbel at Loma Linda University, one of the most influential surgeons in the field. That training set the standard for every procedure I perform.</li>
            <li><strong>Retina fellowship:</strong> After residency, I completed a fellowship in retina surgery. This gives me a complete understanding of the eye and the ability to manage patients with diabetic retinopathy, macular conditions, and previous retina surgery.</li>
            <li><strong>Over 20,000 surgeries:</strong> Extensive surgical experience means I have encountered and successfully managed virtually every complication and variation that cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients with difficult conditions, prior complications, or cases other surgeons have declined come to Desert Vision Center regularly. These cases are central to my practice.</li>
            <li><strong>Top Doctor 2019-2026:</strong> Recognized by Palm Springs Life every year. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services <strong>Available</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, modern technique performed personally by Dr. Tokuhara from start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit, minimizing time away from work and daily responsibilities. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options. I help you find the lens that matches your eyes and your lifestyle. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Dislocated lenses, Yamane sutured lenses, iris reconstruction, and management of prior surgical complications. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Diabetic eye care:</strong> As a retina fellowship-trained surgeon, I manage diabetic retinopathy in-house, including anti-VEGF injections and laser treatment. This is especially relevant for Cathedral City's patient population. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</li>
            <li><strong>Glaucoma and dry eye:</strong> Comprehensive management of glaucoma and desert-related dry eye disease. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/dry-eyes-desert">Dry eye</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Choosing a cataract surgeon is one of the most important healthcare decisions you will make. The surgery takes minutes, but the lens in your eye will be there for the rest of your life. Training, experience, and careful personalization all matter.
          </p>
          <p className="prose">
            I trained under Dr. Howard Gimbel during my residency, which gave me a foundation in surgical precision that I carry into every case. My subsequent retina fellowship means I understand the entire eye, not just the lens. When I evaluate your eyes, I am looking at the retina, the optic nerve, the cornea, and the overall health of the eye, all of which influence both the surgical plan and the long-term outcome.
          </p>
          <p className="prose">
            With more than 20,000 surgeries behind me, I have the experience to manage straightforward cases efficiently and complex cases with confidence. For Cathedral City patients with diabetes, which is more prevalent in our community than state averages, having a surgeon who is fellowship-trained in retina and manages diabetic eye disease in-house is a meaningful advantage.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Cathedral City residents have a fellowship-trained cataract surgeon just minutes away. Desert Vision Center is the closest advanced cataract practice to Cathedral City, with the full range of lens options, complex case expertise, and the personalized care that every patient deserves.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Cathedral City</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Cathedral City, the drive is approximately 5 to 10 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Head southeast on Highway 111 from Cathedral City into Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Date Palm Drive:</strong> Take Date Palm Drive south to Highway 111, then head east into Rancho Mirage and turn right onto Bob Hope Drive.
          </p>
          <p className="prose">
            As the neighboring city to Rancho Mirage, Cathedral City residents have the shortest drive of any community we serve. There is ample parking directly in front of the building, and our appointment scheduling minimizes wait times.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Cathedral City residents: world-class cataract care is <strong>next door.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage is just minutes from Cathedral City. Call or send a message to schedule a consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
