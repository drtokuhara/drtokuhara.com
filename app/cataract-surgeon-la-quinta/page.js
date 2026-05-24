import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
  ScaleOnScroll,
  StaggerChildren,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon near La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 15 to 20 minutes from La Quinta. He has performed over 20,000 surgeries, trained under Dr. Howard Gimbel during residency and completed a retina fellowship, and has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 15 to 20 minutes from La Quinta via Highway 111 or Interstate 10. The office has ample parking and is located along the Eisenhower health corridor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get both eyes done in one visit from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit means fewer trips between La Quinta and the office and a faster return to your routine, whether that means work, family, or activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center serve working families from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many La Quinta patients are working parents, teachers, healthcare workers, and professionals who need to minimize time away from their responsibilities. CLEAR in a Day and efficient scheduling are designed to get patients back to their routine quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to see Dr. Tokuhara from La Quinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. La Quinta residents can call Desert Vision Center at 760.340.4700 or use the online contact form to schedule a consultation directly.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for La Quinta', href: '/cataract-surgeon-la-quinta' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near La Quinta | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'La Quinta residents: Dr. Keith Tokuhara at Desert Vision Center offers fellowship-trained cataract surgery for families, retirees, and working professionals. 20,000+ surgeries. 15-20 minutes from La Quinta. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-la-quinta',
  },
  openGraph: {
    title: 'Cataract Surgeon Near La Quinta | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon serving La Quinta families, retirees, and working professionals. Premium lenses, complex cases, physician-owned practice. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-la-quinta',
  },
};

export default function CataractSurgeonLaQuintaPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-twilight.mp4" overlayOpacity={0.55} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>La Quinta</strong> Residents</h1>
          <p className="page-hero-sub">
            La Quinta has two identities. The one in the travel magazines is PGA West and the resort. The one people actually live in is Fritz Burns Park on Saturday mornings, kids' soccer leagues, and the hiking trails up in the Cove. Both depend on clear vision.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The La Quinta <strong>People Actually Live In</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Yes, PGA West is here. So is the La Quinta Resort, the Arts Festival in March, and some of the most photographed golf courses in the desert. But La Quinta's population is 41,000 people, and the vast majority of them are not teeing off at the Stadium Course on a Tuesday morning.
          </p>
          <p className="prose">
            South of Highway 111, La Quinta is a city of families. Kids at La Quinta High School. Parents commuting to Palm Desert or Rancho Mirage for work. Grocery shopping at Ralphs on Washington Street. Weekend mornings at Fritz Burns Park, where the farmers market sets up in season and kids' sports leagues fill the fields. The neighborhoods are newer, growing, and increasingly diverse, with a significant and growing Hispanic and Latino population.
          </p>
          <p className="prose">
            Then there is the Cove. La Quinta Cove, the original part of town nestled against the Santa Rosa Mountains, has a different character entirely: bohemian, artsy, quieter. Galleries and small studios. Hiking trails like Bear Creek and the Cove Oasis trail that start right from the neighborhoods. Retirees who moved here for the mountain proximity and the creative community, not the golf.
          </p>
          <p className="prose">
            Old Town La Quinta, along the main strip, is still developing. Restaurants, a few shops, and a growing sense of a walkable center. It is a city that is building its identity in real time.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Working Parents, <strong>Working Vision</strong></h2>
          </ScrollReveal>
          <p className="prose">
            If you are a working parent in La Quinta, taking multiple days off for eye surgery is not simple. You are coordinating childcare, commute schedules, maybe covering for a coworker. You need to know exactly how much time this requires and how quickly you get back to normal.
          </p>
          <p className="prose">
            CLEAR in a Day was designed for people like you. Same-day bilateral cataract surgery for eligible patients means both eyes are treated in a single visit. Instead of separate surgeries weeks apart, each requiring its own day off and recovery period, the process is consolidated. Most patients notice significant improvement within a day or two.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-family-golden-hour-walk.jpg"
              alt="Family walking together during golden hour in the desert"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>

          <p className="prose">
            For La Quinta residents whose jobs depend on their vision, CDL drivers, nurses, teachers, dental hygienists, construction workers, cataract surgery is not optional once vision starts affecting your ability to work safely. I have treated patients who needed to pass a DOT physical, maintain a professional license, or simply read charts and screens clearly enough to do their jobs. The surgical plan accounts for those specific requirements.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Active at <strong>Every Age</strong></h2>
          </ScrollReveal>
          <p className="prose">
            La Quinta's retiree community is active in a way that goes well beyond golf. Hiking Bear Creek trail in the early morning before the heat. Playing pickleball at the community courts. Volunteering at the Arts Festival. Walking the dog through the Cove neighborhoods at sunset. Reading on the patio with the Santa Rosa Mountains as a backdrop.
          </p>
          <p className="prose">
            Cataracts erode these activities gradually. Colors fade. Contrast drops. Night driving becomes stressful. Reading requires better light and a bigger font. Most people compensate for months or years before realizing how much vision they have lost.
          </p>
          <p className="prose">
            I start every consultation with a conversation about how you actually use your eyes. Not a checklist. A real discussion about what matters at arm's length, at distance, in bright light, and in dim conditions. That conversation drives the entire plan, from lens selection to surgical approach to the expectations we set together.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Outdoor Vision</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Hikers, cyclists, and trail runners need contrast and distance clarity. EDOF lenses provide a continuous range of sharp vision from intermediate through distance, ideal for active outdoor life.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Reading and Detail Work</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Artists in the Cove, readers, craftspeople, and anyone whose activities happen at arm's length. Multifocal and EDOF lenses can reduce or eliminate dependence on reading glasses.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Night Driving Confidence</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>The drive home on Highway 111 after dinner in Palm Desert. The headlight glare that makes you grip the wheel. Standard or toric lenses can dramatically improve night driving comfort and safety.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">A Growing Community <strong>Deserves Growing Access</strong></h2>
          </ScrollReveal>
          <p className="prose">
            La Quinta is the fastest-growing city on the south side of the Valley. New neighborhoods, new families, a growing medical infrastructure along Washington Street. But for advanced cataract surgery, most La Quinta residents still drive west to Palm Desert or Rancho Mirage. That is standard, and the 15 to 20 minute drive to Desert Vision Center is genuinely easy.
          </p>
          <p className="prose">
            What I want La Quinta residents to know is that the care you receive at DVC is not a compromise. It is not "good enough for the desert." It is fellowship-level training, 20,000+ surgeries of experience, and a physician-owned practice where every surgical decision is made for one reason: what is best for your eyes.
          </p>
          <p className="prose">
            La Quinta's growing Hispanic and Latino population deserves the same access and the same clarity about the process. Families are welcome in every consultation. If a family member helps with questions or decision-making, they are part of the conversation. I explain everything clearly and make sure everyone in the room understands the plan before we move forward.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-couple-farmers-market.jpg"
              alt="Couple shopping at a farmers market with clear vision"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Dr. Tokuhara <strong>for La Quinta</strong></h2>
          </ScrollReveal>
          <p className="prose">
            La Quinta patients tend to ask sharp, specific questions. They have done their research. They want to understand why one lens versus another, what realistic outcomes look like, and whether the surgeon they are considering has handled cases like theirs. Here is the short version:
          </p>
          <ul className="content-list">
            <li><strong>Gimbel-trained precision:</strong> Residency under Dr. Howard Gimbel at Loma Linda University. The gold standard in cataract surgical technique.</li>
            <li><strong>Retina fellowship:</strong> I evaluate the complete eye. Diabetic retinopathy, macular degeneration, glaucoma. If your exam reveals something beyond cataracts, I handle it in-house. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
            <li><strong>20,000+ surgeries:</strong> Experience that shows when something unexpected happens in the operating room. Complications, anatomical variations, challenging cases. I have seen and managed virtually all of them.</li>
            <li><strong>Complex cases welcome:</strong> Prior surgeries, dislocated lenses, failed procedures, multiple eye conditions. These are not exceptions. They are a core part of my practice. <Link href="/complex-cases">Complex case expertise</Link>.</li>
            <li><strong>Independent, physician-owned:</strong> No corporate chain, no private equity. My surgical decisions are driven by your eyes, not a business model.</li>
          </ul>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/diverse-couple-portrait-park-bench.jpeg" alt="Smiling diverse senior couple enjoying a sunny day at the park, representing La Quinta's active community" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          </ScrollReveal>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>I am a working parent. How much time off do I need?</h3>
              <p className="prose">With CLEAR in a Day, eligible patients have both eyes done in a single visit. Most people notice significant improvement within a day or two. Many return to desk work and daily activities within a few days. Strenuous physical work may require a bit longer.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>My job requires passing a vision test. Can cataract surgery help?</h3>
              <p className="prose">Yes. I work with patients who need to meet specific visual standards for DOT physicals, professional licenses, and occupational requirements. The surgical plan takes those requirements into account.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Can family members come to the consultation?</h3>
              <p className="prose">Absolutely. Families are part of the process. If a family member helps with questions, translation, or decision-making, they are welcome and included in the conversation.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Is cataract surgery covered by insurance?</h3>
              <p className="prose">Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades are an additional investment, discussed transparently before any decisions are made.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Do I need a referral?</h3>
              <p className="prose">No referral required. Call 760.340.4700 or use the online contact form to schedule directly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>La Quinta</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From La Quinta, the drive is approximately 15 to 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Highway 111:</strong> Head northwest on Highway 111 through Indian Wells and Palm Desert toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Take I-10 west to the Bob Hope Drive exit. Head south on Bob Hope Drive. The office is on your left before you reach Highway 111.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. For CLEAR in a Day patients, both eyes treated in one visit means fewer total trips from La Quinta.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Whether you are hiking the Cove trails at dawn, dropping kids at school, commuting to Palm Desert for work, or reading on the patio after dinner, clear vision shapes every part of life in La Quinta. Desert Vision Center is 15 to 20 minutes away. No referral required.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>La Quinta residents: ready to see clearly <strong>again?</strong></h2>
          <p>Whether you are back at work next week, hiking the Cove on Saturday, or watching your kids play at Fritz Burns Park, the surgical plan is built around your life. Fellowship-trained. 20,000+ surgeries. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
