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
      name: 'Does Dr. Tokuhara have experience with diabetic patients who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a retina fellowship specifically to manage diabetic eye disease alongside cataract surgery. He evaluates the retina for diabetic retinopathy and macular edema during every cataract consultation, treats diabetic eye disease in-house with injections and laser, and plans cataract surgery around the full picture of eye health. This is critical for Thermal and Mecca patients, where diabetes rates are among the highest in the region.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Desert Vision Center from Thermal or Mecca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Thermal or Mecca, take Highway 86 north to Interstate 10, then head west on I-10 and exit at Bob Hope Drive in Rancho Mirage. Head south on Bob Hope Drive to the office at 35900 Bob Hope Drive, Suite 175. The drive is approximately 35 minutes. Alternatively, take Highway 111 west through Coachella and Indio toward Rancho Mirage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cataract surgery covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades involve an additional out-of-pocket cost. Desert Vision Center discusses all costs upfront during your consultation. If the standard lens is the right choice for your eyes, Dr. Tokuhara will tell you that honestly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from Borrego Health or Clinicas de Salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. You can call Desert Vision Center directly at 760.340.4700. Dr. Tokuhara is happy to coordinate with your primary care doctor at Borrego Health, Clinicas de Salud del Pueblo, or any other community health center.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can both eyes be treated in one visit to reduce the number of trips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for eligible patients. CLEAR in a Day is same-day bilateral cataract surgery where both eyes are treated in a single visit. For patients making a 35-minute drive from Thermal or Mecca, this means one trip instead of multiple, and less time away from work.',
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
  description: 'Thermal and Mecca residents: Dr. Tokuhara specializes in cataract surgery for patients with diabetes and UV-accelerated cataracts from agricultural work. Retina fellowship-trained. Families welcome. Coordinates with Borrego Health and community health centers.',
  alternates: {
    canonical: '/cataract-surgeon-thermal-mecca',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Thermal & Mecca | Desert Vision Center',
    description: 'Retina fellowship-trained cataract surgeon serving Thermal and Mecca. Diabetes and UV expertise. Coordinates with community health centers. 760.340.4700.',
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

      <VideoBackground src="/media/ambient-desert-golden-hour.mp4" overlayOpacity={0.65} overlayColor="10, 15, 25" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Thermal &amp; Mecca</strong></h1>
          <p className="page-hero-sub">
            Farming communities. Families who have worked under this sun for decades. A surgeon who understands what that means for your eyes.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Eyes of the <strong>Eastern Valley</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Thermal and Mecca are farming communities. The date palms, the vineyards, the produce fields that supply grocery stores across the country: they are tended by people who live here, along Avenue 66, near the date groves of Thermal, and in the smaller communities like Oasis and North Shore. This is hard, physical work under one of the most intense suns in Southern California.
          </p>
          <p className="prose">
            Years of working in that sun take a direct toll on the eyes. UV radiation damages the lens over time, causing cataracts to develop earlier and more aggressively than they would in someone who spent their career indoors. I see patients from Thermal and Mecca who are 49, 52, 55 years old with cataracts that are already significantly affecting their ability to work, drive, and see the faces of their families. In many communities, cataracts are a condition of the 70s. Here, they can be a condition of the 50s.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/seniors-landscaping-desert-backyard.jpeg" alt="Two active seniors working on desert landscaping in the eastern Coachella Valley" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Diabetes and <strong>Your Eyes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Diabetes is common in this community. It is one of the highest-prevalence areas in the Coachella Valley. And diabetes does not just cause cataracts. It damages the retina, the delicate tissue at the back of the eye that processes light into vision. Diabetic retinopathy, macular edema, and other changes can all affect whether cataract surgery is safe, how it should be planned, and what the long-term outcome will be.
          </p>
          <p className="prose">
            This is why my training matters specifically for Thermal and Mecca patients. After completing my ophthalmology residency under Dr. Howard Gimbel at Loma Linda University, I pursued a retina fellowship. That additional training means:
          </p>
          <StaggerChildren staggerDelay={0.1}>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>I check more than the cataract.</strong> Every evaluation includes a thorough retinal exam. I look for diabetic changes, macular edema, and other conditions that a cataract-only surgeon might miss or refer out.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>I treat diabetic eye disease in-house.</strong> Anti-VEGF injections, laser treatment, and ongoing monitoring. You do not need to see a separate retina specialist. <Link href="/diabetic-retinopathy">Learn about diabetic eye care</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{padding: '1.25rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '4px solid var(--oasis)'}}>
                <p className="prose" style={{margin: 0}}><strong>I plan surgery around the whole picture.</strong> If diabetic changes affect the timing or approach of your cataract surgery, I adjust the plan accordingly. One surgeon managing both conditions means better-coordinated care.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Working with Your <strong>Health Center</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Many patients from Thermal and Mecca see their primary doctor at Borrego Health, Clinicas de Salud del Pueblo, or another community health center. These clinics are often the first place a patient learns they have cataracts or diabetic eye disease.
          </p>
          <p className="prose">
            You do not need a referral from them to see me. But I am happy to work with your existing care team. If your primary doctor is managing your diabetes, I can coordinate with them on your eye health. Your eye care does not exist in isolation from your overall health, and I communicate with your other providers when it helps your care.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/dvc-building-exterior.jpg" alt="Desert Vision Center building exterior, approximately 35 minutes from Thermal and Mecca" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Practical Answers to <strong>Practical Questions</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know what the first questions are. Here are the honest answers:
          </p>
          <div style={{display: 'grid', gap: '1.25rem', marginTop: '1.5rem'}}>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px'}}>
              <p className="prose" style={{margin: 0}}><strong>How much does it cost?</strong> Standard cataract surgery is covered by Medicare and most insurance plans. Premium lenses involve an additional cost. I discuss everything upfront. No hidden fees. If the standard lens is right for your eyes, I tell you that.</p>
            </div>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px'}}>
              <p className="prose" style={{margin: 0}}><strong>How many days off work?</strong> The procedure takes 10 to 15 minutes per eye. Most patients return to normal activities within a day or two. CLEAR in a Day means eligible patients can have both eyes done in a single visit. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</p>
            </div>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px'}}>
              <p className="prose" style={{margin: 0}}><strong>Can my family come?</strong> Yes. Always. If your daughter drives you and translates, she is part of the conversation. I explain everything clearly and do not move on until everyone understands the plan.</p>
            </div>
            <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px'}}>
              <p className="prose" style={{margin: 0}}><strong>Is the 35-minute drive manageable?</strong> I schedule efficiently and respect your time. My office runs on schedule. You are not spending half a day waiting. And CLEAR in a Day means one trip instead of multiple for eligible patients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Who I Am and <strong>What I Do</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I am Dr. Keith Tokuhara. I built Desert Vision Center as a physician-owned practice because I believe every patient deserves a surgeon who takes the time to get the plan right. No corporate owner. No private equity. No one telling me how many patients to see in a day or which lens to recommend.
          </p>
          <p className="prose">
            I perform every surgery personally. No residents, no fellows, no handoffs. Over 20,000 procedures of experience means I have handled every type of complication and every anatomical variation cataract surgery can present. Patients who have been told their case is too complex, who have diabetes and glaucoma and prior eye surgery all at once, regularly find their way to my practice from across the Valley.
          </p>
          <p className="prose">
            I have been recognized as a Top Doctor by Palm Springs Life every year from 2019 through 2026, and named Best Cataract Surgeon in the Coachella Valley by NBC. But what matters most to my patients from Thermal and Mecca is simpler than any award: I take the time, I explain clearly, and I get it right.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/grandparent-watching-kids-soccer-park.jpeg" alt="Smiling grandparent watching children play soccer at a sunny desert park with palm trees and mountains" width={800} height={500} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Thermal and Mecca are the most underserved communities in the Coachella Valley. The families who live here have spent decades feeding this region, and they deserve a surgeon who understands what the desert sun does to eyes, who can manage diabetes and cataracts under one roof, and who treats every patient with the same thoroughness regardless of their zip code.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Thermal &amp; Mecca Patients</strong></h2>
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
            <h2 className="section-title">Getting Here from <strong>Thermal &amp; Mecca</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From the Thermal and Mecca area, the drive is approximately 35 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 86 and I-10:</strong> Whether you live along Avenue 66 in Mecca, near the date groves in Thermal, or in one of the smaller communities like Oasis or North Shore, the drive follows Highway 86 north to Interstate 10. Head west on I-10 and exit at Bob Hope Drive. Head south to the office.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Take Highway 111 west through Coachella and Indio toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. For CLEAR in a Day patients, both eyes can be done in one trip.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Thermal and Mecca: your eyes <strong>deserve expert care.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage. Fellowship-trained cataract and retina surgeon. Diabetes expertise. Families welcome. Coordinates with Borrego Health and community health centers. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
