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
      name: 'Why do Palm Desert patients choose Desert Vision Center over local ophthalmologists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palm Desert has several ophthalmologists, and patients have options. Those who choose Desert Vision Center consistently cite the thorough consultation, the honest lens recommendation, and the confidence that comes from a fellowship-trained surgeon who has performed over 20,000 procedures. Many Palm Desert patients come in after a second-opinion consultation because they did not feel heard elsewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Palm Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 10 minutes from central Palm Desert via Highway 111 or Bob Hope Drive. Most Palm Desert residents find the drive shorter than they expected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat working-age patients who need cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While cataracts are more common in patients over 60, Dr. Tokuhara regularly sees working-age patients from Palm Desert, including teachers, healthcare workers, small business owners, and students. CLEAR in a Day same-day bilateral surgery is especially valuable for patients who cannot take multiple days off work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options does Dr. Tokuhara recommend for Palm Desert patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara does not have a default recommendation. He evaluates your eyes, listens to your priorities, and matches the lens to your anatomy and lifestyle. Options include EDOF lenses for extended range of vision, toric lenses to reduce astigmatism, multifocal options, and the standard lens covered by Medicare. He will tell you honestly if the standard lens is the right choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from my Palm Desert doctor to see Dr. Tokuhara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Many Palm Desert patients self-refer after researching cataract surgeons. Call 760.340.4700 or use the online contact form to schedule.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Palm Desert', href: '/cataract-surgeon-palm-desert' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Palm Desert | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Palm Desert residents: Dr. Tokuhara at Desert Vision Center is 10 minutes away. Thorough consultations, honest lens recommendations, 20,000+ surgeries. The second opinion that becomes the first choice.',
  alternates: {
    canonical: '/cataract-surgeon-palm-desert',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Palm Desert | Desert Vision Center',
    description: 'Ten minutes from Palm Desert. Fellowship-trained, physician-owned, and built around honest consultations. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-palm-desert',
  },
};

export default function CataractSurgeonPalmDesertPage() {
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
          <h1>Cataract Surgeon in <strong>Palm Desert</strong></h1>
          <p className="page-hero-sub">
            The second opinion that becomes the first choice. Ten minutes from Palm Desert in Rancho Mirage.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Patient Who Kept <strong>Looking</strong></h2>
          </ScrollReveal>
          <p className="prose">
            There is a pattern I see regularly. A patient from Palm Desert comes in for a cataract evaluation. They have already seen another surgeon who gave them a quick assessment, recommended the most expensive lens, and sent them on their way. They did not feel heard. They did not feel confident. So they kept looking.
          </p>
          <p className="prose">
            When they sit down in my consultation room, the experience is different. I take the time to examine their eyes thoroughly. I explain what I see, show them the imaging, and discuss their options in the context of their actual life. If they spend their mornings hiking the Bump and Grind Trail and their evenings reading, that shapes the lens conversation. If they are on Medicare and want to know whether the standard lens is genuinely adequate for their eyes, I tell them honestly. Sometimes it is.
          </p>
          <p className="prose">
            By the end of that first conversation, most of these patients say the same thing: "This is what I was looking for."
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Real <strong>Palm Desert</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Desert is the most lived-in city in the Valley. It is where people actually do their grocery shopping, take their kids to school, and build their daily routines. The reputation is El Paseo galleries and Desert Willow fairways, and those are real. But so are the young families near College of the Desert, the retirees walking laps at the Living Desert on weekday mornings, and the working professionals who commute along Highway 111.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-farmers-market.jpg" alt="Couple enjoying a morning at a local farmers market, the kind of everyday Palm Desert life that depends on clear vision" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            From the 55+ communities around Sun City to the student apartments near COD, Palm Desert has a broader economic mix than people expect. I see that full range in my patient population. Retired executives. Teachers. Healthcare workers. College students with early cataracts from a lifetime under the desert sun. Small business owners who need to get back to work fast. The approach is the same for everyone: thorough evaluation, honest conversation, personalized plan.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why My Practice <strong>Is Different</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Desert has ophthalmologists. You have choices. Here is why patients choose to drive 10 minutes to Desert Vision Center:
          </p>
          <div style={{display: 'grid', gap: '1.5rem', marginTop: '1.5rem'}}>
            <TiltCard className="insight-highlight" style={{padding: '1.5rem'}}>
              <p><strong>Honest lens recommendations.</strong> I give you my genuine opinion about which lens fits your eyes and your life, even when that means steering you away from the more expensive option. If the standard lens covered by Medicare is the right choice, I will tell you. I do not have a financial incentive to upsell, because I own my practice and answer only to my patients.</p>
            </TiltCard>
            <TiltCard className="insight-highlight" style={{padding: '1.5rem'}}>
              <p><strong>Residency and fellowship training.</strong> I trained under Dr. Howard Gimbel at Loma Linda, one of the most influential cataract surgeons in the world. Then I completed a retina fellowship. That combination means I evaluate the entire eye, not just the lens. Diabetic changes, macular conditions, glaucoma, prior retina surgery: I see the full picture and factor it all into your plan.</p>
            </TiltCard>
            <TiltCard className="insight-highlight" style={{padding: '1.5rem'}}>
              <p><strong>Physician-owned independence.</strong> No corporate chain, no private equity investors, no hospital system. I set my own schedule, my own standards, and my own pace. That independence shows up in every consultation: unhurried, thorough, personal.</p>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">For the Working <strong>Palm Desert</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Many of my Palm Desert patients are still working. Teachers at the schools along Cook Street. Healthcare workers at the medical offices on Highway 111. Small business owners. COD staff and faculty. They cannot take weeks off for surgery, and they need a clear explanation of what to expect.
          </p>
          <p className="prose">
            CLEAR in a Day was designed for patients like this. Eligible patients can have both eyes treated in a single visit. That means one day away from work, not multiple. The typical cataract procedure itself takes 10 to 15 minutes per eye. Most patients return to normal activities within a day or two. For working patients, that efficiency matters.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-seniors-outdoor-dining.jpg" alt="Active retirees enjoying outdoor dining in the Coachella Valley" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            For Palm Desert retirees, the calculation is different but the standard is the same. Whether you are walking El Paseo after lunch, hiking the Bump and Grind at dawn, taking a watercolor class at COD, or driving to the Saturday farmers market at Civic Center Park, clear vision shapes the quality of every day. The lens we choose together should match the life you actually live.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Full Range of <strong>What I Do</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise technique, personally performed from start to finish. No handoffs, no rotating surgeons. Over 20,000 procedures. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Both eyes in one visit for eligible patients. One trip from Palm Desert. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Premium and standard lens options:</strong> EDOF, toric, multifocal, and the standard Medicare-covered lens. The right choice depends on your eyes, not my revenue. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Complex and revision surgery:</strong> Patients turned away elsewhere. Dislocated lenses, Yamane sutured IOLs, iris reconstruction, failed prior procedures. These cases are central to my practice, not referrals I avoid. <Link href="/complex-cases">See complex case expertise</Link>.</li>
            <li><strong>Glaucoma and diabetic eye care:</strong> In-house management including injections and laser. My retina fellowship means you do not need a separate specialist. <Link href="/glaucoma">Glaucoma</Link> | <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
          </ul>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/diverse-couple-closeup-portrait.jpeg" alt="Close-up portrait of a happy senior couple with bright, clear eyes smiling at the camera" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Palm Desert patients who value thoroughness, honesty, and precision consistently find their way to Desert Vision Center. The 10-minute drive to Rancho Mirage is one of the easiest decisions in the process. The hard part was finding a surgeon they trust. Now they have.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Palm Desert Patients</strong></h2>
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
            <h2 className="section-title">Getting Here from <strong>Palm Desert</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From central Palm Desert, the drive is approximately 10 minutes.
          </p>
          <p className="prose">
            <strong>From El Paseo / central Palm Desert:</strong> Head northwest on Highway 111 toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right, near Eisenhower Health.
          </p>
          <p className="prose">
            <strong>From Sun City / south Palm Desert:</strong> Take Washington Street or Cook Street north to Highway 111, then head west toward Rancho Mirage. Turn right on Bob Hope Drive.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. No parking garages, no campus navigation. Walk from your car to the front door in under a minute.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Palm Desert: the surgeon who <strong>listens first.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage. Ten minutes from Palm Desert. Thorough consultations, honest recommendations, and a fellowship-trained surgeon who performs every procedure personally. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
