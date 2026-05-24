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
      name: 'Is there a cataract surgeon in Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no ophthalmologist or cataract surgeon based in Bermuda Dunes. Desert Vision Center in Rancho Mirage is approximately 15 minutes away and is the closest advanced cataract surgery practice. Dr. Keith Tokuhara is fellowship-trained with over 20,000 surgeries performed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Bermuda Dunes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 15-minute drive from Bermuda Dunes via Washington Street to Highway 111, or via Interstate 10 to the Bob Hope Drive exit. Ample parking is available in front of the building.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a pilot from Bermuda Dunes Airport get cataract surgery and keep flying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara has experience with patients who require specific visual standards for aviation medical certificates or professional licensing. He can discuss your FAA or occupational requirements during your consultation and plan surgery to support those standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What lens options are available for cataract surgery at Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Options include EDOF (Extended Depth of Focus) lenses for broader range of clear vision, toric lenses that reduce astigmatism, and multifocal lenses. Dr. Tokuhara matches lens selection to each patient individually based on eye anatomy, lifestyle, and visual priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral from my Bermuda Dunes optometrist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is required. Bermuda Dunes residents can call Desert Vision Center directly at 760.340.4700 or use the online contact form to schedule a consultation.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Bermuda Dunes', href: '/cataract-surgeon-bermuda-dunes' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Bermuda Dunes | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Bermuda Dunes residents: Dr. Keith Tokuhara at Desert Vision Center is 15 minutes away in Rancho Mirage. Fellowship-trained, 20,000+ surgeries, physician-owned. From pilots to retirees, personalized care for every patient.',
  alternates: {
    canonical: '/cataract-surgeon-bermuda-dunes',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Bermuda Dunes | Desert Vision Center',
    description: 'No eye surgeon in Bermuda Dunes? Dr. Tokuhara at Desert Vision Center is 15 minutes west. Fellowship-trained, complex case specialist, physician-owned. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-bermuda-dunes',
  },
};

export default function CataractSurgeonBermudaDunesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-blue-hour.mp4" overlayOpacity={0.55} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Bermuda Dunes</strong> Residents</h1>
          <p className="page-hero-sub">
            Bermuda Dunes is technically unincorporated Riverside County. No city hall, no city council. Just a quiet residential community, an airport, and people who chose this place because they prefer substance over flash.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Community That <strong>Chose Quiet</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Bermuda Dunes does not have the name recognition of Palm Springs or the resort reputation of Indian Wells. That is exactly why people live here. It is a neighborhood in the truest sense: residential streets anchored by the Bermuda Dunes Country Club, built in the 1960s, where mornings start with a walk, a cup of coffee on the patio, and maybe a round of golf before the heat sets in.
          </p>
          <p className="prose">
            Washington Street is your main artery. You drive north to the I-10 for Costco runs in Palm Desert, south to La Quinta and Indio for restaurants and shopping. The Bermuda Dunes Airport sits at the heart of the community, a general aviation field where private pilots keep their planes and flight schools train students. It is one of Bermuda Dunes' most distinctive features, and for residents who fly, it is the reason they live here.
          </p>
          <p className="prose">
            What Bermuda Dunes does not have is medical infrastructure. No hospital, no specialist offices, no ophthalmologist. For cataract surgery, you are driving to Indio, La Quinta, Palm Desert, or Rancho Mirage. The question is not how far. The question is who.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Vision <strong>Is Not Optional</strong></h2>
          </ScrollReveal>
          <p className="prose">
            For most people, cataracts are a quality-of-life issue. Reading becomes harder. Night driving gets uncomfortable. Colors fade. These are frustrating, but you adjust.
          </p>
          <p className="prose">
            For some Bermuda Dunes residents, the stakes are higher. If you fly out of Bermuda Dunes Airport, your vision is not just personal comfort. It is your FAA medical certificate. When your Aviation Medical Examiner flags cataracts at your flight physical, that is not something you can put off. You need a surgeon who understands that your visual requirements are specific, measurable, and non-negotiable.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-couple-convertible-desert.jpg"
              alt="Active couple enjoying clear desert vision while driving"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>

          <p className="prose">
            I have treated patients whose livelihoods depend on meeting specific visual acuity standards: pilots, commercial drivers, law enforcement, healthcare workers. I understand the documentation, the thresholds, and the importance of getting the outcome right on the first surgery. That precision comes from performing over 20,000 procedures and having the training to handle the full complexity of any eye.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Retiree <strong>Reality</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Most Bermuda Dunes residents are not pilots. They are retirees who moved here from Orange County, Los Angeles, or the Bay Area because this is where their budget met their quality of life. They wanted a real neighborhood: quiet streets, a patio with a mountain view, neighbors they actually know, and proximity to the rest of the Valley without the prices.
          </p>
          <p className="prose">
            For this community, cataract surgery comes down to a few practical concerns: Is it covered? How many appointments? Will the surgeon actually listen to me?
          </p>
          <p className="prose">
            Standard cataract surgery is covered by Medicare and most insurance plans. I discuss all costs upfront during your consultation, including the additional investment if a premium lens makes sense for you. There are no surprises and no pressure. If the standard lens is right for your eyes and your priorities, I will tell you that directly.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Independent Practice</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Physician-owned. No corporate chain, no private equity, no hospital system telling me how many patients to see per hour. The small-community feel of Bermuda Dunes extends to my office.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Gimbel-Trained Precision</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>I trained under Dr. Howard Gimbel at Loma Linda University. His influence on modern cataract surgery is immense, and his standards of precision are built into every procedure I perform.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Front-to-Back Expertise</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>My retina fellowship training means I see the whole eye. Diabetic changes, macular concerns, glaucoma, all managed in one practice. No bouncing between specialists.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Bermuda Dunes Patients <strong>Can Expect</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The daily activities that cataracts gradually erode are not dramatic. They are the things you do without thinking about them. The drive down Washington Street to get groceries. The morning walk through the neighborhood when the light is low. Reading the newspaper on the patio. Recognizing your neighbor across the street.
          </p>
          <p className="prose">
            My consultations start with understanding how you actually use your vision day to day. Not a checklist. A real conversation about what matters to you: distance, near, both, night driving, bright conditions. That conversation drives the lens recommendation, the surgical approach, and the expectations we set together.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-man-driving-truck-desert.jpeg" alt="Senior man confidently driving his truck through the open desert highway" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <p className="prose">
            For Bermuda Dunes residents, the services that matter most:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day:</strong> Both eyes treated in a single visit for eligible patients. Fewer total trips from Bermuda Dunes. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Personalized lens selection:</strong> EDOF lenses for extended range, toric lenses to reduce astigmatism, or the standard Medicare-covered lens. Matched to your eyes, your activities, and your honest preferences. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Advanced cataract surgery:</strong> I perform every procedure personally. No residents, no fellows, no handoffs. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>Complex case management:</strong> Patients with prior surgeries, difficult anatomy, or conditions like diabetes and glaucoma. These cases are a core part of my practice. <Link href="/complex-cases">Complex case expertise</Link>.</li>
          </ul>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-seniors-outdoor-dining.jpg"
              alt="Retirees enjoying outdoor dining with clear vision in the desert"
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
            <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          </ScrollReveal>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Is there a cataract surgeon in Bermuda Dunes?</h3>
              <p className="prose">No. Bermuda Dunes is an unincorporated community with no specialist medical offices. Desert Vision Center in Rancho Mirage is 15 minutes away and is the closest advanced cataract surgery practice.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>I am a pilot at Bermuda Dunes Airport. Can I get cataract surgery and keep my medical certificate?</h3>
              <p className="prose">Yes. Dr. Tokuhara works with patients who have specific visual acuity requirements for FAA medical certificates or professional licensing. He can discuss your standards during your consultation and plan surgery to support them.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>What does cataract surgery cost with Medicare?</h3>
              <p className="prose">Standard cataract surgery is covered by Medicare. Premium lens upgrades (EDOF, toric, multifocal) involve an additional out-of-pocket cost that is discussed transparently before any decisions are made.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Does Dr. Tokuhara handle complex cases?</h3>
              <p className="prose">Yes. Patients with diabetes, glaucoma, previous eye surgeries, dislocated lenses, and cases other surgeons have declined are a core part of his practice. His retina fellowship provides expertise most cataract surgeons do not have.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Do I need a referral?</h3>
              <p className="prose">No referral is required. Call 760.340.4700 or use the online contact form to schedule a consultation directly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Bermuda Dunes</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Bermuda Dunes, the drive is approximately 15 minutes.
          </p>
          <p className="prose">
            <strong>Via Washington Street:</strong> Head north on Washington Street to Highway 111, then west toward Rancho Mirage. Turn right on Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 and exit at Bob Hope Drive. Head south. The office is on your left.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. We keep our schedule on time, so you are in and out without the waiting-room marathon.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Bermuda Dunes is a community that chose quiet and substance. Desert Vision Center operates on the same principle. Fifteen minutes away, a physician-owned practice where your surgeon performs every procedure personally and takes the time to get your plan right.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Bermuda Dunes residents: your cataract surgeon is <strong>15 minutes west.</strong></h2>
          <p>Whether you need to keep your flight certificate current or simply want to read comfortably again, Desert Vision Center provides personalized, expert care. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
