import Image from 'next/image';
import Link from 'next/link';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  ScaleOnScroll,
  StaggerChildren,
  StaggerItem,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients whose cataracts developed from agricultural work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara regularly treats patients from Coachella and the eastern Valley whose cataracts developed earlier than typical due to years of UV exposure from farming, field work, and other outdoor labor. He understands the specific cataract patterns that result from prolonged sun exposure and creates personalized surgical plans for these patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Coachella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 30 minutes from Coachella via Interstate 10 or Highway 111.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery covered by Medicare or Medi-Cal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard cataract surgery is covered by Medicare and most insurance plans. Desert Vision Center discusses all costs upfront during your consultation. Premium lens upgrades involve an additional out-of-pocket cost, but Dr. Tokuhara will tell you honestly if the standard covered lens is the right choice for your eyes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from Borrego Health or my community health center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. You can call Desert Vision Center directly at 760.340.4700 or use the online contact form. If your primary doctor is at Borrego Health or another community health center, Dr. Tokuhara is happy to coordinate with your existing care team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can family members come to the appointment to help translate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara welcomes families into every consultation. Many Coachella patients bring a son, daughter, or other family member who helps with translation or medical decisions. Everyone in the room is part of the conversation.',
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
  description: 'Coachella residents: Dr. Tokuhara specializes in cataracts caused by years of outdoor agricultural work and UV exposure. Fellowship-trained in cataract and retina surgery. Diabetes expertise. Families welcome. 30 minutes west in Rancho Mirage.',
  alternates: {
    canonical: '/cataract-surgeon-coachella',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Coachella | Desert Vision Center',
    description: 'Fellowship-trained cataract and retina surgeon serving Coachella. UV and diabetes expertise. Families welcome. Cost transparency. 760.340.4700.',
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

      <VideoBackground src="/media/ambient-desert-sunrise-golden.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Coachella</strong></h1>
          <p className="page-hero-sub">
            An agricultural city. A close-knit community. Families who have spent decades working under the desert sun, and the eye care they have earned.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The City Behind <strong>the Name</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Coachella is an agricultural city. The date palms and vineyards that define the eastern Valley are tended by the families who live here. This is a community built on outdoor work, and that work comes with a cost to eye health.
          </p>
          <p className="prose">
            The music festival carries the city's name, but it happens in Indio, not here. The real Coachella is a close-knit community of nearly 46,000 people with deep Mexican and Mexican-American cultural roots. Pueblo Viejo, the old downtown along Sixth Street. Bagdouma Park on weekends. Desert Mirage High School. The Dia de los Muertos celebration in the fall. Multigenerational households where grandparents watch the kids while parents work, and where family decisions about healthcare are made together around the kitchen table.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/diverse-couple-walking-park-path.jpeg" alt="Active senior couple walking together along a tree-lined park path in the Coachella Valley" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            I see patients from Coachella who are in their early 50s with cataracts that have been accelerated by a lifetime of UV exposure from field work, farming, and construction. In someone who spent their career indoors, these cataracts might not develop until their 70s. The desert sun does not care about your age. It damages the lens of the eye year after year, and eventually, the cloudiness makes it hard to drive, hard to work, hard to see the faces of the people you love.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Making the Drive <strong>Worth It</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know the 30-minute drive to Rancho Mirage is a real commitment, especially if you work hourly and have to take a day off. I make every visit count.
          </p>
          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>Thorough evaluation the first time.</strong> I do not bring you back for tests that could have been done during the first visit. One comprehensive evaluation, a clear explanation, and a plan you understand.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>CLEAR in a Day.</strong> Eligible patients can have both eyes treated in a single visit. One trip from Coachella instead of multiple. One day away from work instead of several. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>No wasted trips.</strong> My office runs on schedule. You are not spending half a day in a waiting room. We respect your time because we know what it costs you to be here.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Your Family Belongs in <strong>the Room</strong></h2>
          </ScrollReveal>
          <p className="prose">
            In Coachella, healthcare decisions are family decisions. The daughter who researched surgeons online. The son who took the day off to drive his mother. The granddaughter who translates the medical terminology. They are not visitors in my consultation room. They are part of the conversation.
          </p>
          <p className="prose">
            I explain everything clearly. I answer every question from every family member. I do not move on until everyone understands the diagnosis, the options, and the plan. If a family member asks me to repeat something or explain it differently, I do. That is not an inconvenience. That is how good care works.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-family-golden-hour-walk.jpg" alt="Family walking together at golden hour, reflecting the multigenerational community of Coachella" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Diabetes, Retina, and <strong>the Whole Eye</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Diabetes is common in this community, and it complicates cataract surgery. A surgeon who only looks at the cataract is missing the bigger picture. Diabetic retinopathy, macular edema, and other changes in the back of the eye can affect both the surgical plan and the outcome.
          </p>
          <p className="prose">
            After completing my ophthalmology residency under Dr. Howard Gimbel at Loma Linda University, I pursued a retina fellowship specifically so I could manage these complex cases. When I evaluate your eyes, I check the retina for diabetic changes, assess the optic nerve, and build a surgical plan that accounts for everything. If I find diabetic eye disease, I treat it in-house with anti-VEGF injections and laser. You do not need to see a separate specialist.
          </p>
          <p className="prose">
            Many Coachella residents see their primary doctor at Borrego Health or another community health center. You do not need a referral from them to see me, but I am happy to coordinate with your existing care team. Your eye health does not exist in isolation from your overall health, and I communicate with your other providers when it helps your care.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/hispanic-shopkeeper-artisan-store.jpeg" alt="Friendly local shopkeeper standing behind the counter of his artisan store, representing the hardworking small business community of Coachella" width={800} height={500} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cost and <strong>Insurance</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know cost is the first question for many Coachella families, and I respect that by addressing it directly.
          </p>
          <p className="prose">
            Standard cataract surgery is covered by Medicare and most insurance plans. The procedure itself, the standard lens implant, the facility, the anesthesia: all covered. Premium lens upgrades that provide additional capabilities, like reducing dependence on reading glasses, involve an additional out-of-pocket cost. I explain those costs upfront so there are no surprises.
          </p>
          <p className="prose">
            If the standard lens covered by your insurance is the right choice for your eyes, I will tell you that. I have no financial incentive to push an upgrade. I own my practice. My recommendation is based on your eyes, your priorities, and what will give you the best outcome.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Coachella is an agricultural community where families have worked under the desert sun for generations. That work has a cost to eye health. Desert Vision Center is 30 minutes west, and the surgeon waiting there has the retina training, the surgical experience, and the respect for your time and family that this community deserves.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Coachella Patients</strong></h2>
          </ScrollReveal>
          <div style={{marginTop: '1.5rem'}}>
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} style={{marginBottom: '1rem', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem'}}>{faq.name}</summary>
                <p className="prose" style={{marginTop: '0.75rem'}}>{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
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
            <strong>Via Interstate 10:</strong> Head west on I-10 from Coachella. Take the Bob Hope Drive exit and head south. The office is on your left, near Eisenhower Health.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 west through Indio toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. For CLEAR in a Day patients, both eyes can be done in one trip.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Coachella families: your vision <strong>is worth the drive.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage. 30 minutes from Coachella. Fellowship-trained cataract and retina surgeon. Families welcome in every consultation. Cost discussed upfront. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
