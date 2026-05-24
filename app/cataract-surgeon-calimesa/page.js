import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
  StaggerChildren,
  ScaleOnScroll,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best cataract surgeon near Calimesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon who completed his residency at Loma Linda University, just minutes from Calimesa. He has performed over 20,000 surgeries, completed his residency under Dr. Howard Gimbel and a separate retina fellowship, and has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Calimesa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately 50 minutes east of Calimesa via Interstate 10 through the San Gorgonio Pass. The drive is straight, scenic, and avoids any complex navigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would a Calimesa resident drive past Loma Linda for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Tokuhara trained at Loma Linda University and brings that same world-class training to a physician-owned, independent practice. At Loma Linda, you may wait hours, see a different provider each visit, and have your surgery involve trainees. At Desert Vision Center, Dr. Tokuhara performs every surgery personally, consultations are unhurried, and the entire experience is built around you as an individual.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Calimesa residents have both eyes done in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. For Calimesa residents making the drive through the pass, this means both eyes treated in a single visit, significantly reducing total trips.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center accept Medicare for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades involve an additional investment, which is discussed transparently during your consultation. No surprises.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Calimesa', href: '/cataract-surgeon-calimesa' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon for Calimesa Residents | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Calimesa residents: Dr. Keith Tokuhara trained at Loma Linda and offers the same world-class expertise in a personal, physician-owned practice. 50 minutes east through the pass. 20,000+ surgeries. CLEAR in a Day available.',
  alternates: {
    canonical: '/cataract-surgeon-calimesa',
  },
  openGraph: {
    title: 'Cataract Surgeon for Calimesa Residents | Desert Vision Center',
    description: 'Loma Linda-trained cataract surgeon serving Calimesa from Desert Vision Center in Rancho Mirage. Same training, different experience. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-calimesa',
  },
};

export default function CataractSurgeonCalimesaPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-sunrise.mp4" overlayOpacity={0.55} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Calimesa</strong> Residents</h1>
          <p className="page-hero-sub">
            Most people drive through Calimesa without knowing it is there. The people who live here chose it on purpose. When your vision needs attention, the surgeon who trained at the institution down the road built something better just east through the pass.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Town at the <strong>Edge of the Pass</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Calimesa is a town most people experience at 70 miles per hour on the I-10. But the people who live here, in Calimesa Lakes, Mesa Verde, and the quiet streets along Calimesa Boulevard, chose it deliberately. Quiet neighborhoods. Affordable retirement. The kind of small-town feel that is getting harder to find anywhere in Southern California.
          </p>
          <p className="prose">
            You know the windmills at the top of the pass? Calimesa sits right at their western edge. That is where the Inland Empire ends and the desert begins. The San Gorgonio peaks rise to the north. Cherry Valley and Yucaipa are just up the road. Beaumont is the next exit east. It is a small community, but it sits at a geographic crossroads.
          </p>
          <p className="prose">
            When it comes to eye care, that crossroads gives you a choice. West to the Loma Linda hospital system, 15 to 20 minutes away. Or east through the pass to Desert Vision Center in Rancho Mirage, about 50 minutes on a straight, open highway. One is a large academic medical center. The other is a physician-owned practice built by a surgeon who trained at that very institution and chose to do things differently.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Same Training. <strong>Different Experience.</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I completed my ophthalmology residency at Loma Linda University under Dr. Howard Gimbel, one of the most influential cataract surgeons in the world. I lived in the area, drove the same roads Calimesa residents drive, and trained at the institution that is most Calimesa patients' default referral. I know exactly what that experience looks like from the inside.
          </p>
          <p className="prose">
            Large teaching hospitals do important work. But the patient experience in a system that size has real tradeoffs. At Loma Linda, you may wait two hours for an appointment. Parking is its own adventure. You might see a different provider each visit. Your surgery may involve residents or fellows. These are talented people, but the system shapes the experience.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/dvc-building-exterior.jpg"
              alt="Desert Vision Center exterior in Rancho Mirage with easy front-door parking"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>

          <p className="prose">
            At Desert Vision Center, you park in front of the building. You wait minutes, not hours. You see me every visit. I perform your surgery personally, start to finish. No residents, no handoffs. The training is the same. The experience is fundamentally different.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The 55+ Community <strong>Reality</strong></h2>
          </ScrollReveal>
          <p className="prose">
            A large portion of Calimesa's population lives in 55+ communities. Calimesa Lakes, Mesa Verde, and the neighborhoods along County Line Road are home to retirees who moved here for the affordability, the quiet, and the weather. Many are on Medicare and a pension. They are practical people who want straight answers.
          </p>
          <p className="prose">
            Cataracts are the most common reason this community needs an eye surgeon. Here is what I want Calimesa residents to know upfront: standard cataract surgery is covered by Medicare. You do not need to spend extra on a premium lens if it is not the right fit for your eyes and your life. I will tell you honestly whether the standard lens is the right choice for you, because sometimes it is.
          </p>
          <p className="prose">
            When a premium lens does make sense, whether it is an Extended Depth of Focus lens that broadens your clear range or a toric lens that reduces astigmatism, I explain the costs, the tradeoffs, and the realistic expectations before you make any decision. No pressure, no upselling.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-couple-painting-wall.jpeg" alt="Happy senior couple painting their home together, enjoying an active retirement" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why the Drive <strong>Matters Less Than the Surgeon</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Calimesa residents have closer options. I know that. Loma Linda is 15 minutes west. Beaumont has expanding medical offices. The question is not distance. The question is whether this surgery, the one that determines how you see for the rest of your life, deserves a surgeon who performs every procedure personally and has done so more than 20,000 times.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Loma Linda Training</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Residency under Dr. Howard Gimbel at Loma Linda University. The gold standard in cataract surgical technique, now applied in a private practice setting.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Retina Fellowship</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Additional fellowship training means I evaluate the entire eye, including the retina, macula, and optic nerve. Conditions other surgeons might miss, I catch and manage in-house.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Complex Case Specialist</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Patients with diabetes, glaucoma, prior surgeries, or cases other surgeons have declined. These are not occasional exceptions. They are a core part of my practice.</p>
              </div>
            </TiltCard>
          </div>

          <p className="prose">
            For Calimesa patients with diabetes or glaucoma alongside cataracts, my retina fellowship is especially relevant. I do not just remove the cataract and send you elsewhere for the rest. I evaluate the whole picture and manage it under one roof.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/night-driving-wind-turbines-cv.jpeg" alt="Senior man driving at night past wind turbines in the Coachella Valley, the familiar San Gorgonio Pass landmark for Calimesa residents" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services That Matter <strong>for Calimesa</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Not every service is equally relevant for every community. For Calimesa residents making the drive through the pass, these are the ones that matter most:
          </p>
          <ul className="content-list">
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in a single trip through the pass, instead of four or more separate drives. For Calimesa patients, this is the biggest logistical advantage I can offer. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Advanced cataract surgery:</strong> Precise, modern technique. I perform every procedure personally. No residents, no fellows, no handoffs. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>Diabetic eye care and glaucoma:</strong> Many Calimesa retirees manage diabetes or glaucoma alongside cataracts. My retina fellowship means both conditions are evaluated and treated in the same practice. <Link href="/diabetic-retinopathy">Diabetic eye care</Link> | <Link href="/glaucoma">Glaucoma</Link>.</li>
            <li><strong>Honest lens selection:</strong> EDOF lenses, toric lenses for astigmatism reduction, multifocal options. I match the lens to your eyes, your budget, and your life. If the standard Medicare-covered lens is right for you, I will say so. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Calimesa Patients <strong>Actually Ask</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The questions I hear from Calimesa patients are different from what I hear from someone in Rancho Mirage or Palm Desert. They tend to be practical:
          </p>
          <p className="prose">
            <strong>How many trips will this take?</strong> With CLEAR in a Day, eligible patients can have both eyes done in a single visit. Most patients need a pre-op evaluation, the surgery visit, and a few follow-ups. I work with out-of-area patients to minimize total trips.
          </p>
          <p className="prose">
            <strong>Is this covered by my insurance?</strong> Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades are an additional out-of-pocket cost, discussed in full before you commit to anything.
          </p>
          <p className="prose">
            <strong>Why not just go to Loma Linda?</strong> You absolutely can. They are excellent physicians. But a teaching hospital and a physician-owned practice offer different experiences. If you want your surgeon to perform every step of your procedure, see you at every visit, and build a plan around your specific eyes, that is what Desert Vision Center provides.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/patient-elderly-woman-smiling.jpg"
              alt="Happy patient after cataract surgery consultation"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Calimesa sits at the edge of the pass, between two healthcare worlds. To the west, a large hospital system. To the east, a surgeon who trained in that system and built something more personal. Fifty minutes through the windmills to a practice where your surgeon knows your name.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          </ScrollReveal>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Who is the best cataract surgeon near Calimesa?</h3>
              <p className="prose">Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage trained at nearby Loma Linda University, has performed over 20,000 surgeries, and completed his residency under Dr. Howard Gimbel and a separate retina fellowship. He has been a Palm Springs Life Top Doctor every year from 2019 through 2026.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Why would a Calimesa resident drive past Loma Linda for cataract surgery?</h3>
              <p className="prose">Dr. Tokuhara trained at Loma Linda and brings that same expertise to a physician-owned practice where he performs every surgery personally. No long waits, no rotating providers, no parking garage nightmares. Same world-class training, completely different patient experience.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Can Calimesa residents have both eyes done in one trip?</h3>
              <p className="prose">Yes. The CLEAR in a Day program allows eligible patients to have both eyes treated in a single visit, reducing total trips through the pass from four or more down to a few.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Does Desert Vision Center accept Medicare?</h3>
              <p className="prose">Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades involve an additional cost that is discussed transparently before any decisions are made.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Do I need a referral?</h3>
              <p className="prose">No referral is required. Calimesa residents can call 760.340.4700 or use the online contact form to schedule a consultation directly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Calimesa</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Calimesa, the drive is approximately 50 minutes.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head east on I-10 from Calimesa through the San Gorgonio Pass, past Beaumont and Banning. You will pass the windmill corridor and descend into the Coachella Valley. Exit at Bob Hope Drive and head south. The office is on your left, near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            The drive through the pass is direct and scenic. No complex navigation, no toll roads, no city traffic. Ample parking is available directly in front of the building.
          </p>

          <ScaleOnScroll startScale={0.9} endScale={1}>
            <div style={{textAlign: 'center', padding: '2rem 0'}}>
              <div style={{fontSize: '3rem', fontWeight: '700', color: 'var(--oasis)'}}>50 min</div>
              <div style={{fontSize: '1rem', opacity: 0.8}}>Straight east through the pass. No traffic. No stress.</div>
            </div>
          </ScaleOnScroll>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Calimesa residents: the surgeon who trained at <strong>Loma Linda is waiting just east of the pass.</strong></h2>
          <p>Same world-class training. A completely different experience. CLEAR in a Day means both eyes in one trip. Call us or schedule online. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
