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
      name: 'Who is the best cataract surgeon in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center is a fellowship-trained cataract surgeon located right in Rancho Mirage at 35900 Bob Hope Drive. He has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026 and was named Best Cataract Surgeon in the Coachella Valley by NBC. He specializes in complex cases, premium lens implants, and patients with conditions like diabetes, glaucoma, and previous eye surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Desert Vision Center in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center is located at 35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270. The office is situated along the Eisenhower health corridor with easy access from Highway 111 and ample parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cataract surgery options are available in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center offers the full range of cataract surgery options including standard and laser-assisted cataract surgery, premium lens implants (EDOF, toric, and multifocal), CLEAR in a Day same-day bilateral surgery, and complex case management for patients with prior eye surgery or complications. Dr. Tokuhara personalizes every treatment plan based on each patient\'s eyes, lifestyle, and visual goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara accept new patients in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center welcomes new patients and no referral is required. You can call 760.340.4700 or use the online contact form to schedule a consultation. Many patients self-refer after researching cataract surgeons in the area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Desert Vision Center different from other eye clinics in Rancho Mirage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center is physician-owned and independent, not affiliated with private equity or corporate chains. Dr. Tokuhara trained under Dr. Howard Gimbel during residency, completed a retina fellowship, and has performed over 20,000 surgeries. He personally manages every case from consultation through post-operative care with no hand-offs to other providers.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Rancho Mirage', href: '/cataract-surgeon-rancho-mirage' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon in Rancho Mirage | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Dr. Keith Tokuhara is a fellowship-trained cataract surgeon in Rancho Mirage, CA. Located at 35900 Bob Hope Dr, Desert Vision Center offers advanced cataract surgery, premium lens implants, and complex case expertise. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-rancho-mirage',
  },
  openGraph: {
    title: 'Cataract Surgeon in Rancho Mirage | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara. Located in Rancho Mirage along the Eisenhower health corridor. Advanced cataract surgery, premium lenses, complex cases.',
    url: 'https://drtokuhara.com/cataract-surgeon-rancho-mirage',
  },
};

export default function CataractSurgeonRanchoMiragePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-resort-sunrise.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Rancho Mirage</strong></h1>
          <p className="page-hero-sub">
            Desert Vision Center is right here in Rancho Mirage, along the Eisenhower health corridor. Fellowship-trained expertise. Physician-owned. Your eyes, your surgeon, your city.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your <strong>Neighborhood</strong> Cataract Surgeon</h2>
          </ScrollReveal>
          <p className="prose">
            I chose Rancho Mirage deliberately. This city has a history of attracting world-class medical care, and the Eisenhower health corridor along Bob Hope Drive is one of the most respected medical addresses in the desert. Desert Vision Center sits at 35900 Bob Hope Drive, Suite 175, surrounded by the kind of medical infrastructure that supports excellent patient outcomes.
          </p>
          <p className="prose">
            For Rancho Mirage residents, having a fellowship-trained cataract surgeon within minutes of home is not a convenience. It is an advantage. Post-operative visits are easy to keep. If a question comes up after surgery, you are not driving across the valley. And when you are choosing someone to operate on your eyes, knowing that your surgeon is invested in the same community where you live and play matters.
          </p>
          <p className="prose">
            Rancho Mirage residents set a high standard for their care. Whether you are part of the medical community along Bob Hope Drive, raising a family near Rancho Mirage High School, enjoying retirement at one of the city's well-known country clubs, or simply appreciate the pace of life here, the expectation is the same: quality without compromise. I built my practice around that expectation. Unhurried consultations, personalized surgical plans, and outcomes that let you get back to the life you came here to live.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Choose <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is physician-owned and independent. I do not work for a corporate chain, a private equity group, or a hospital system. That independence means every clinical decision is made for one reason: what is best for your eyes.
          </p>
          <ul className="content-list">
            <li><strong>Fellowship-trained surgical expertise:</strong> I trained under Dr. Howard Gimbel during residency, one of the most influential cataract surgeons in the world. I also completed a retina fellowship, giving me a depth of understanding that most cataract-only surgeons do not have.</li>
            <li><strong>Over 20,000 surgeries:</strong> Volume matters in surgery. The more cases a surgeon has performed, the better equipped they are to handle the unexpected. I have managed virtually every complication and anatomical variation that cataract surgery can present.</li>
            <li><strong>Complex case specialist:</strong> Patients who have been told their case is too complicated, who had a previous surgery that did not go as planned, or who have conditions like diabetes, glaucoma, pseudoexfoliation, or prior retina surgery often find their way to my practice. These cases are not side projects for me. They are a core part of what I do.</li>
            <li><strong>No referral kickbacks:</strong> I do not pay for patient referrals or participate in arrangements where financial incentives influence who operates on your eyes. Patients come to Desert Vision Center because of reputation, outcomes, and word of mouth.</li>
            <li><strong>Top Doctor recognition:</strong> Palm Springs Life Top Doctor every year from 2019 through 2026. Named Best Cataract Surgeon in the Coachella Valley by NBC.</li>
          </ul>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services at <strong>Desert Vision Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Every patient receives a thorough evaluation and a treatment plan built around their specific eyes, lifestyle, and visual priorities. Here is what we offer:
          </p>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Using the latest techniques and technology to remove cataracts safely and precisely. I personally perform every surgery from start to finish.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes treated in one visit, reducing recovery time and the number of office visits. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium lens implants:</strong> EDOF lenses for extended range of vision, toric lenses that reduce astigmatism, and multifocal options for patients who want to minimize dependence on glasses. I help each patient find the lens that matches how they actually use their eyes. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision cases:</strong> Dislocated lenses, complications from previous surgery, Yamane sutured lenses, iris reconstruction, and cases other surgeons have declined. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma management:</strong> Comprehensive glaucoma care including monitoring, medical management, and surgical options when needed. <Link href="/glaucoma">Learn about glaucoma care</Link>.</li>
            <li><strong>Diabetic eye care:</strong> As a retina fellowship-trained surgeon, I manage diabetic retinopathy in-house, including injections and laser treatment. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes Dr. Tokuhara <strong>Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Training defines a surgeon. During my residency at Loma Linda University, I trained under Dr. Howard Gimbel, a pioneer in cataract surgery whose techniques are used worldwide. That experience shaped my approach to every case: precision, planning, and respect for the anatomy in front of you.
          </p>
          <p className="prose">
            After residency, I completed a fellowship in retina surgery. Most cataract surgeons have never operated in the back of the eye. I have. That dual perspective means I understand the full picture of your eye's health, not just the lens. When I see a patient with diabetic changes, macular concerns, or a history of retina surgery, I am not referring out and hoping for the best. I am integrating that knowledge into your cataract surgical plan.
          </p>
          <p className="prose">
            Over 20,000 surgeries later, I have seen virtually every variation and complication that cataract surgery can produce. That experience is not a number on a wall. It is the reason I can look at a challenging case and say, with confidence, that I have a plan.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Rancho Mirage residents have access to some of the finest healthcare in the country. Desert Vision Center was built to meet that standard: fellowship-trained, physician-owned, and focused entirely on delivering the best possible outcome for every patient.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Office Is <strong>Right Here</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. We are along the Eisenhower health corridor with easy access from Highway 111.
          </p>
          <p className="prose">
            For Rancho Mirage residents, the office is typically a 5 to 10 minute drive from most neighborhoods, including the communities around Country Club Drive, Frank Sinatra Drive, and Gerald Ford Drive. There is ample parking directly in front of the building.
          </p>
          <p className="prose">
            This proximity matters for cataract surgery patients. Post-operative care involves several follow-up visits, and being close to your surgeon's office makes the entire process easier. If anything comes up between scheduled visits, you can reach us quickly.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to see a cataract surgeon in <strong>Rancho Mirage?</strong></h2>
          <p>Desert Vision Center is right here in your city. Call us or send a message to schedule a consultation. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
