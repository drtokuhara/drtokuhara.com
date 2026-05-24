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
      name: 'Who is the best cataract surgeon near Cathedral City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a cataract surgeon with retina fellowship training just 5 to 10 minutes from Cathedral City. With over 20,000 surgeries, retina fellowship training that is especially relevant for patients with diabetes, and recognition as a Top Doctor every year from 2019 through 2026, he offers Cathedral City residents access to advanced eye care right next door.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Cathedral City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 5 to 10 minutes from most Cathedral City neighborhoods. Cathedral City and Rancho Mirage share a border, making DVC one of the closest specialist practices for Cathedral City residents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dr. Tokuhara treat patients who have diabetes and need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a retina fellowship specifically training him to manage diabetic eye disease. He evaluates the retina for diabetic changes during every cataract consultation, manages diabetic retinopathy in-house with anti-VEGF injections and laser, and plans cataract surgery around the full picture of eye health. This is especially relevant for Cathedral City, where diabetes rates are higher than the regional average.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery covered by insurance for Cathedral City residents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades involve an additional out-of-pocket cost. Desert Vision Center discusses all costs upfront during your consultation so there are no surprises. No referral is required to schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara welcome family members in the consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many Cathedral City patients bring a family member who helps with translation or medical decisions. Dr. Tokuhara welcomes families into the consultation room and ensures everyone involved understands the diagnosis, the plan, and what to expect.',
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
  description: 'Cathedral City residents: Desert Vision Center is 5 minutes away in neighboring Rancho Mirage. Dr. Tokuhara is fellowship-trained in cataract and retina surgery, with special expertise in diabetic eye care. Over 20,000 surgeries. Families welcome.',
  alternates: {
    canonical: '/cataract-surgeon-cathedral-city',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Cathedral City | Desert Vision Center',
    description: 'Five minutes from Cathedral City. Fellowship-trained in cataract and retina surgery. Diabetic eye care expertise. Families welcome. 760.340.4700.',
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
            Five minutes from Date Palm Drive. A cataract surgeon with retina fellowship training who understands the health needs of this community.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Cat City <strong>Deserves Better</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Cathedral City is a working city. Not a resort town, not a retirement village. A place where families have lived for generations, where people work hard, and where neighbors actually know each other. It is the most affordable and most diverse city in the central Valley, and it is home to more than 55,000 people who deserve the same quality of eye care as any zip code in the Coachella Valley.
          </p>
          <p className="prose">
            Yet Cathedral City has no hospital within city limits. For specialist care, residents have always traveled to neighboring cities. The good news: Desert Vision Center sits right across the border in Rancho Mirage. For most Cathedral City homes, it is closer than the Costco in Palm Desert. Five to ten minutes on Highway 111 or Date Palm Drive, and you are at the front door of a physician-owned practice where your surgeon performs every procedure personally.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Diabetes, Cataracts, and <strong>Why Training Matters</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Diabetes rates in Cathedral City are higher than the Valley average. I see this directly in my patient population. Many Cathedral City patients come to me not just with cataracts but with diabetic changes in the retina that need monitoring and management. This is where my background makes a specific difference.
          </p>
          <p className="prose">
            After completing my ophthalmology residency under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in the world, I pursued a retina fellowship. That additional training means I evaluate the entire eye during every cataract consultation. I check for diabetic retinopathy, macular edema, and other conditions that many cataract surgeons would refer out. When I find diabetic changes, I manage them in-house with anti-VEGF injections and laser treatment. You do not need to see a separate retina specialist.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/dr-t-slit-lamp-patient-view.jpg" alt="Dr. Tokuhara performing a comprehensive eye examination at Desert Vision Center" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            For a community where diabetes and outdoor UV exposure are both common risk factors for early cataract development, having a surgeon who is residency-trained in cataract surgery under Dr. Howard Gimbel with additional retina fellowship training is not a luxury. It is the right standard of care.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Families Are Part of <strong>the Conversation</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Many of my Cathedral City patients bring a son, a daughter, a spouse, or a grandchild to their appointment. Sometimes that family member helps with translation. Sometimes they are the one who researched surgeons, made the appointment, and is helping navigate the medical system for a parent or grandparent. Either way, they are welcome.
          </p>
          <p className="prose">
            I explain everything clearly and make sure everyone in the room understands the diagnosis, the options, and the plan. I do not rush through consultations. If your daughter has questions about recovery, or your husband wants to understand the difference between lens options, I answer every question until we are all on the same page.
          </p>
          <p className="prose">
            I also know that cost is a real concern for many Cathedral City families. Standard cataract surgery is covered by Medicare and most insurance plans. During your consultation, we discuss all costs upfront. No surprises. If the standard lens covered by Medicare is the right choice for your eyes, I will tell you that honestly.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What I Offer Cathedral City <strong>Patients</strong></h2>
          </ScrollReveal>
          <StaggerChildren staggerDelay={0.08}>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>Diabetic eye care and cataract surgery under one roof.</strong> My retina fellowship means I evaluate and manage diabetic retinopathy, macular edema, and cataracts together. No referrals to a separate specialist. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>CLEAR in a Day for working patients.</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes treated in one visit means less time away from work and fewer days off. Especially valuable if you cannot afford multiple days away from your job. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>Advanced cataract surgery, personally performed.</strong> I perform every procedure from start to finish. No residents, no fellows, no handoffs. Over 20,000 surgeries of experience behind every case. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="insight-highlight" style={{marginBottom: '1.5rem', padding: '1.5rem'}}>
                <p><strong>Lens options matched to your life.</strong> Extended depth of focus (EDOF) lenses, toric lenses to reduce astigmatism, multifocal options, or the standard lens covered by insurance. I walk you through every choice honestly and recommend what fits your eyes and your budget. <Link href="/lens-implants-explained">Explore lens options</Link>.</p>
              </TiltCard>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Closest Advanced Eye Care <strong>to Cathedral City</strong></h2>
          </ScrollReveal>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/dvc-building-exterior.jpg" alt="Desert Vision Center building exterior in Rancho Mirage, just minutes from Cathedral City" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            Cathedral City and Rancho Mirage share a border. Desert Vision Center sits along the Bob Hope Drive medical corridor, near Eisenhower Health. For a city where getting to specialist care usually means driving across the Valley, having a cataract surgeon with retina fellowship training five minutes away changes the equation.
          </p>
          <p className="prose">
            I built my practice as a physician-owned, independent office because I believe clinical decisions should be based solely on what is best for the patient. No corporate owner sets my schedule. No quota determines how many patients I see. When you walk in, you see me, talk to me, and I perform your surgery myself. That is how it should work.
          </p>
          <p className="prose">
            With more than 20,000 surgeries and recognition as a Top Doctor every year from 2019 through 2026, I have the experience to handle straightforward cases efficiently and complex cases with confidence. Patients who have been told their case is too difficult, who had a prior surgery that did not go well, or who have other eye conditions like glaucoma regularly find their way to my practice.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-couple-sunlit-bedroom.jpeg" alt="Happy senior couple in a bright, sun-filled bedroom, enjoying the simple moments of clear vision" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Cathedral City has a cataract surgeon with retina fellowship training five minutes away. Diabetes expertise, family-friendly consultations, honest cost conversations, and a surgeon who performs every procedure personally. That is what is waiting at Desert Vision Center.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Cathedral City Patients</strong></h2>
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
            Ample parking is available directly in front of the building. We keep appointment times on schedule so you are not spending half your day in a waiting room.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Cathedral City: world-class eye care is <strong>five minutes away.</strong></h2>
          <p>Desert Vision Center in neighboring Rancho Mirage. Fellowship-trained cataract and retina surgeon. Families welcome. Cost transparency from day one. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
