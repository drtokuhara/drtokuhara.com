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
      name: 'Why do Palm Springs residents choose Desert Vision Center over local ophthalmologists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palm Springs has several ophthalmologists, but Dr. Tokuhara offers a combination that is difficult to find locally: cataract training under Dr. Howard Gimbel during residency plus a retina fellowship, over 20,000 procedures, a physician-owned independent practice with no corporate affiliations, and a consultation style built around thoroughness rather than volume. Many Palm Springs patients say the 20-minute drive was the easiest part of the decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from downtown Palm Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 20 minutes from downtown Palm Springs via Highway 111. The drive follows the main valley corridor through Cathedral City into Rancho Mirage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center welcome LGBTQ+ patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center welcomes every patient and treats every person with the same respect, thoroughness, and personalized attention. Dr. Tokuhara is proud to serve the diverse Palm Springs community.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dr. Tokuhara a good choice for patients with complicated eye histories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Complex cases are central to Dr. Tokuhara\'s practice. He is residency-trained in cataract surgery under Dr. Howard Gimbel with additional retina fellowship training and has performed over 20,000 procedures. He regularly treats patients with previous eye surgery, diabetes, glaucoma, dislocated lenses, and complications from prior procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from my Palm Springs doctor to see Dr. Tokuhara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is needed. Palm Springs residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon in Palm Springs', href: '/cataract-surgeon-palm-springs' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Palm Springs | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Palm Springs residents choose Desert Vision Center for a reason. Fellowship-trained cataract and retina surgeon, physician-owned practice, 20,000+ surgeries. Independent, inclusive, unhurried. 20 minutes east in Rancho Mirage.',
  alternates: {
    canonical: '/cataract-surgeon-palm-springs',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Palm Springs | Desert Vision Center',
    description: 'Independent, fellowship-trained cataract surgeon 20 minutes from Palm Springs. No corporate pressure. Every patient treated with respect. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-palm-springs',
  },
};

export default function CataractSurgeonPalmSpringsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-twilight.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon in <strong>Palm Springs</strong></h1>
          <p className="page-hero-sub">
            Palm Springs has ophthalmologists. Here is why patients make the 20-minute drive to Rancho Mirage instead.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A City That Knows <strong>What It Wants</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs is a city of contrasts. The same block can have a mid-century modern renovation next to a modest 1960s bungalow. The same neighborhood has retired executives, hospitality workers, artists, and seasonal visitors. Downtown Palm Canyon Drive pulses with energy during VillageFest on Thursday nights. Ruth Hardy Park fills with dog walkers and families on weekend mornings. The Aerial Tramway still takes your breath away on the hundredth ride.
          </p>
          <p className="prose">
            What unites this diverse community is a fierce independence and an allergy to anything that feels corporate or impersonal. Palm Springs residents chose this city for a reason, and they bring that same discernment to every decision, including who operates on their eyes.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-couple-evening-walk-dog.jpg" alt="Couple enjoying an evening walk in a Palm Springs neighborhood" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>

          <p className="prose">
            When cataracts begin to cloud your vision, the effects show up in the moments that define life here. The desert light that drew you to Palm Springs loses its vibrancy. Night driving along Palm Canyon Drive becomes uncertain. Reading at your favorite coffee shop requires stronger glasses every year. Watching a film at the Mary Pickford Theatre, browsing galleries on Arenas Road, recognizing a friend across the restaurant at VillageFest: all of it gradually diminishes.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Not Just Stay <strong>in Palm Springs?</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Fair question. Palm Springs has its own ophthalmologists, and Desert Regional Medical Center is right in town. Here is why patients make the drive to Desert Vision Center:
          </p>
          <p className="prose">
            I am Dr. Keith Tokuhara. I built Desert Vision Center as a physician-owned, independent practice. No corporate chain, no private equity investors, no hospital system telling me how to practice. I own the decisions. That independence means I never rush a consultation, never push a lens you do not need, and never hand you off to a different provider between visits. You see me from the first appointment through the last follow-up.
          </p>
          <p className="prose">
            My training is also different from most cataract surgeons. I completed my residency under Dr. Howard Gimbel at Loma Linda University, one of the most influential cataract surgeons in modern ophthalmology. Then I completed a retina fellowship, giving me combined residency and fellowship training across the entire eye. When I evaluate your cataracts, I am simultaneously assessing the retina, the optic nerve, and the full health of the eye in ways that most anterior segment surgeons cannot.
          </p>
          <p className="prose">
            After more than 20,000 surgeries, I have the experience to handle any situation the operating room can present. But what Palm Springs patients tell me they value most is the approach: thorough, honest, unhurried, and focused on getting the best result for their specific eyes and their specific life.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Every Patient. <strong>Every Person.</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs has one of the most prominent LGBTQ+ communities in the country. It is a community that values inclusive, respectful healthcare, and that has often had to fight for it. Desert Vision Center welcomes every patient and treats every person with the same respect and thoroughness. No exceptions, no qualifications.
          </p>
          <p className="prose">
            Palm Springs is also home to a significant working-class community. Hospitality workers, service industry employees, small business owners on Palm Canyon, people who keep this city running. Whether you are retired, still working in a hotel, running a gallery on North Palm Canyon, or anything in between, your vision matters. I never assume what lens option fits your life or budget. I ask, I listen, and I recommend honestly.
          </p>

          <div style={{margin: '2rem 0', borderRadius: '12px', overflow: 'hidden'}}>
            <Image src="/media/stock-group-cafe-outdoor.jpg" alt="Friends enjoying an outdoor cafe, the kind of daily Palm Springs life that depends on clear vision" width={800} height={500} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Palm Springs Patients</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Palm Springs patients tend to be thoughtful, well-read, and direct. Many have already researched cataract surgery extensively before their first visit. I welcome that. My consultations meet you where you are.
          </p>
          <StaggerChildren staggerDelay={0.08}>
            <StaggerItem>
              <div style={{marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid var(--oasis)'}}>
                <p className="prose"><strong>Premium lens selection tailored to your life.</strong> EDOF lenses for a broader range of clear vision. Toric lenses to reduce astigmatism. Multifocal options for patients who want maximum independence from glasses. I walk you through the tradeoffs honestly, whether you spend your days painting, reading, playing tennis, or all three. <Link href="/lens-implants-explained">Explore lens options</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid var(--oasis)'}}>
                <p className="prose"><strong>Advanced cataract surgery, personally performed.</strong> I handle every procedure from start to finish. No rotating surgeons, no residents, no handoffs. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid var(--oasis)'}}>
                <p className="prose"><strong>CLEAR in a Day.</strong> Same-day bilateral surgery for eligible patients. Both eyes in one visit means one trip from Palm Springs, not multiple. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid var(--oasis)'}}>
                <p className="prose"><strong>Complex and revision cases.</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, iris reconstruction. Cases other surgeons decline. <Link href="/complex-cases">See complex case expertise</Link>.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Research <strong>Patients</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I find that Palm Springs patients who have done the most research are often the most appreciative of their experience at Desert Vision Center. They have already read about lens options. They have already compared surgeons. They come in with specific questions about technique, outcomes, and what to expect. I welcome all of it.
          </p>
          <p className="prose">
            My background holds up to scrutiny. Training under Dr. Howard Gimbel, whose innovations in cataract surgery are used in operating rooms worldwide. A retina fellowship that gives me a perspective on the posterior segment most cataract surgeons simply do not have. Over 20,000 procedures. Recognition as a Top Doctor by Palm Springs Life every year from 2019 through 2026, and as Best Cataract Surgeon in the Coachella Valley by NBC. Ask me anything.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-asian-woman-smartphone-patio.jpeg" alt="Senior woman reading her smartphone while stepping in from her desert patio with mountain views" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Palm Springs is a city that values independence, quality, and authenticity. Desert Vision Center was built on the same principles. Physician-owned. No corporate pressure. A surgeon who takes the time to get it right, for every patient, every time.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Common Questions from <strong>Palm Springs Patients</strong></h2>
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
            <h2 className="section-title">Getting Here from <strong>Palm Springs</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From downtown Palm Springs, the drive is approximately 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Head southeast on Highway 111 through Cathedral City into Rancho Mirage. Turn left onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Take I-10 east to the Bob Hope Drive exit. Head south on Bob Hope Drive toward Highway 111. The office is on your left.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. No parking structures, no shuttles, no navigating a hospital campus.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Palm Springs: independent care for <strong>independent people.</strong></h2>
          <p>Desert Vision Center in Rancho Mirage. 20 minutes from Palm Springs. Physician-owned, fellowship-trained, and built for patients who expect excellence. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
