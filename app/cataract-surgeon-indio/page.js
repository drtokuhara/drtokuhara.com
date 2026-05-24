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
import TiltCard from '../components/TiltCard';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients whose cataracts developed from outdoor work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara regularly treats patients from Indio and the eastern Valley whose cataracts developed earlier than typical due to years of UV exposure from agriculture, construction, landscaping, and other outdoor work. He provides thorough evaluations and personalized surgical plans for these patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 25 minutes from central Indio via Interstate 10 or Highway 111. The office has ample parking directly in front of the building.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades involve an additional out-of-pocket cost. Desert Vision Center discusses all costs upfront during your consultation so there are no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can family members come to the consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many Indio patients bring family members who help with translation or medical decisions. Dr. Tokuhara welcomes families into the consultation and ensures everyone understands the diagnosis, options, and plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both eyes done in one visit to avoid multiple trips from Indio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for eligible patients. CLEAR in a Day is same-day bilateral cataract surgery where both eyes are treated in a single visit. This is especially valuable for Indio patients who need to minimize time away from work. Dr. Tokuhara evaluates whether you qualify during your consultation.',
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
  description: 'Indio residents: Dr. Tokuhara treats cataracts caused by UV exposure, diabetes, and outdoor work. Fellowship-trained in cataract and retina surgery. 20,000+ procedures. Cost-transparent. Families welcome. 25 minutes west in Rancho Mirage.',
  alternates: {
    canonical: '/cataract-surgeon-indio',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Indio | Desert Vision Center',
    description: 'Fellowship-trained cataract and retina surgeon, 25 minutes from Indio. Expertise in UV-related cataracts, diabetic eyes, and complex cases. 760.340.4700.',
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

      <VideoBackground src="/media/ambient-desert-sunrise.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Indio</strong></h1>
          <p className="page-hero-sub">
            The Date Capital of the World. A century of agricultural history, a community of hard-working families, and a growing need for advanced eye care.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A City Built Under <strong>the Desert Sun</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indio is the Date Capital of the World. That is not a marketing slogan. It is a century of agricultural history visible in the groves that still line Highway 111 and Avenue 44. The people who built this city worked under the desert sun, and many still do. Agriculture, construction, county government at the Larson Justice Center, the festival economy at the Empire Polo Club, retail and service jobs along Monroe Street. Indio is the largest city in the Coachella Valley, and it is a working city.
          </p>
          <p className="prose">
            That outdoor life has a cost. Years of UV exposure accelerate cataract development. I see patients from Indio who are in their 50s with cataracts that, in someone who spent their career indoors, would not develop until their 70s. Date farm supervisors, landscapers, construction workers, people who have spent decades under one of the most intense suns in Southern California. When their vision starts to blur, when glare makes the drive home on the I-10 difficult, when colors lose their richness, cataracts are usually the reason.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cost, Time, and <strong>Straight Answers</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know what matters to working families in Indio. Not a sales pitch. Straight answers to three questions: What is wrong with my eyes? What will it cost? How fast can I get back to work?
          </p>

          <div style={{display: 'grid', gap: '1.25rem', marginTop: '1.5rem'}}>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
              <p className="prose" style={{margin: 0}}><strong>Insurance and cost.</strong> Standard cataract surgery is covered by Medicare and most insurance plans. Premium lenses involve an additional out-of-pocket cost. I discuss everything upfront during your consultation. No surprises, no hidden fees.</p>
            </div>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
              <p className="prose" style={{margin: 0}}><strong>Time off work.</strong> The surgery itself takes 10 to 15 minutes per eye. Most patients return to normal activities within a day or two. CLEAR in a Day means eligible patients can have both eyes treated in a single visit, so one day away from work instead of multiple. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</p>
            </div>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
              <p className="prose" style={{margin: 0}}><strong>Honest recommendations.</strong> If the standard lens covered by Medicare is the right choice for your eyes, I will tell you that. I do not push the most expensive option because it exists. I push the option that matches your anatomy, your lifestyle, and your priorities.</p>
            </div>
          </div>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/worker-hardhat-desert-mountains.jpeg" alt="Active senior professional holding a hard hat in the sunny Coachella Valley desert, representing the outdoor workers of Indio" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Families Are Part of <strong>the Process</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Many of my Indio patients bring a son, a daughter, or a spouse to their appointment. Sometimes that family member is the one who found Desert Vision Center online, made the phone call, and is driving their parent to the consultation. Sometimes they help with translation. Either way, they are welcome in the room.
          </p>
          <p className="prose">
            I explain everything clearly. I make sure both the patient and their family understand the diagnosis, the options, and the plan. If your daughter has questions about what recovery looks like, or your husband wants to understand the difference between lens types, I answer every question. No one leaves my office confused about what comes next.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/diverse-couple-watching-grandkids-park.jpeg" alt="Happy diverse couple watching their grandchildren play at a sunny park with palm trees" width={800} height={500} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Desert Vision Center <strong>for Indio</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indio has eye care options, including optometrists along Monroe Street and the JFK Memorial Hospital system. For advanced cataract surgery, here is what I bring to Indio patients specifically:
          </p>
          <StaggerChildren staggerDelay={0.08}>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>Retina expertise for diabetic eyes.</strong> Diabetes is common in this community. My retina fellowship means I evaluate and manage diabetic retinopathy, macular edema, and cataracts together, in-house. You do not need a separate retina specialist. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>UV-accelerated cataracts.</strong> I understand the specific cataract patterns that develop from years of outdoor work. These cases sometimes present differently than age-related cataracts, and my experience with over 20,000 surgeries means I have seen every variation. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>Gimbel training, independent practice.</strong> I learned cataract surgery from Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in modern ophthalmology. I built my own practice so I could apply that training without corporate constraints. No one tells me how many patients to see or which lens to recommend.</p>
              </TiltCard>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Indio Patients <strong>Can Expect</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Every surgery performed by me personally.</strong> No residents, no fellows, no handoffs. Over 20,000 procedures of experience behind every case.</li>
            <li><strong>A real consultation, not an assembly line.</strong> I examine your eyes, explain what I find, discuss your options, and answer every question. Nobody rushes you through.</li>
            <li><strong>Lens options that fit your life.</strong> EDOF lenses for extended range, toric lenses to reduce astigmatism, multifocal options, and the standard Medicare-covered lens. I match the recommendation to your eyes and your budget. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex case capability.</strong> Patients with diabetes, glaucoma, prior eye surgery, or complications from other procedures come to my practice from across the Valley. I do not refer these cases out. <Link href="/complex-cases">See complex case expertise</Link>.</li>
          </ul>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Whether you are heading to Shields for a date shake, watching your grandkids at a school soccer game, or driving home from work on Monroe Street, clear vision changes the quality of everything. Desert Vision Center is 25 minutes west, and the drive is worth it.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Indio Patients</strong></h2>
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
            <h2 className="section-title">Getting Here from <strong>Indio</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From central Indio, the drive is approximately 25 minutes.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 from Indio. Take the Bob Hope Drive exit and head south. The office is on your left, near Eisenhower Health.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 west through La Quinta and Indian Wells toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. CLEAR in a Day means eligible patients can handle both eyes in a single trip from Indio.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Indio: advanced eye care, <strong>straight answers, fair cost.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage. 25 minutes from Indio. Fellowship-trained cataract and retina surgeon. Families welcome. Insurance and cost discussed upfront. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
