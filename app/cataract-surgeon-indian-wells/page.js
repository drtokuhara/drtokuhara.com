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
      name: 'Who is the best cataract surgeon near Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage is a fellowship-trained cataract surgeon approximately 10 minutes from Indian Wells. He trained under Dr. Howard Gimbel, completed a retina fellowship, and has performed over 20,000 surgeries. He specializes in complex cases and premium lens implants, and has been recognized as a Palm Springs Life Top Doctor every year from 2019 through 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 10-minute drive from Indian Wells via Highway 111. Ample parking is available directly in front of the building.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara offer premium lens implants for Indian Wells patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Desert Vision Center offers the full range of premium options including EDOF (Extended Depth of Focus) lenses for broader clear vision, toric lenses that reduce astigmatism, and multifocal lenses. Dr. Tokuhara personalizes every recommendation based on detailed evaluation of eye anatomy, lifestyle, and visual priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a technical conversation about lens options and surgical approach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara welcomes detailed questions about IOL materials, posterior capsule management, intraoperative aberrometry, and surgical technique. Many of his Indian Wells patients are retired physicians, engineers, and researchers who appreciate the ability to have a peer-level technical conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to schedule a cataract consultation from Indian Wells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No referral is needed. Many Indian Wells patients self-refer after researching cataract surgeons independently. Patients come to Desert Vision Center based on reputation and outcomes, not referral arrangements. Call 760.340.4700 or use the online contact form.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Indian Wells', href: '/cataract-surgeon-indian-wells' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Indian Wells | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Indian Wells residents: Dr. Keith Tokuhara at Desert Vision Center is 10 minutes away. Fellowship-trained, 20,000+ surgeries, premium lens specialist, complex case expert. No referral arrangements. Top Doctor 2019-2026.',
  alternates: {
    canonical: '/cataract-surgeon-indian-wells',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Indian Wells | Desert Vision Center',
    description: 'Fellowship-trained cataract surgeon Dr. Keith Tokuhara, 10 minutes from Indian Wells. Premium lenses, complex cases, physician-owned practice. No referral arrangements. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-indian-wells',
  },
};

export default function CataractSurgeonIndianWellsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-resort-sunrise.mp4" overlayOpacity={0.55} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Indian Wells</strong> Residents</h1>
          <p className="page-hero-sub">
            You have options. You could fly to the Stein Eye Institute or Bascom Palmer. But world-class, fellowship-trained cataract surgery is 10 minutes from home. And your surgeon will actually know your name.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Beyond the <strong>Tournament</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indian Wells is known for the BNP Paribas Open and the country clubs. What gets less attention is the community itself: approximately 5,700 year-round residents, most of them retirement-age, many of them former physicians, attorneys, engineers, and executives who researched their retirement the same way they researched everything in their careers.
          </p>
          <p className="prose">
            But Indian Wells is more than that reputation suggests. Yes, there are residents at The Reserve and Vintage Club. There are also schoolteachers who retired here on state pensions. People who moved from the Bay Area to be closer to grandchildren. Seasonal residents from the Midwest and Canada who spend October through April in the desert. A couple who runs a small business on Highway 111. Indian Wells may be the smallest city in the Valley, but the people who live here are more varied than the zip code implies.
          </p>
          <p className="prose">
            What they share is a low tolerance for mediocre healthcare. They do their homework. They ask informed questions. They do not choose a surgeon based on a billboard or a magazine ad. They choose based on training, outcomes, and whether the doctor treats them as an individual.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Kind of Conversation <strong>You Expect</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Many of my Indian Wells patients are retired professionals who approach cataract surgery the way they approached decisions in their careers: with thorough research and pointed questions. I do not just welcome that. I prefer it.
          </p>
          <p className="prose">
            If you want to discuss IOL material differences, posterior capsule management, or the decision framework for EDOF versus multifocal lenses, I can hold that conversation. If you want a surgeon who explains things at whatever level of detail you need, whether that is "tell me the bottom line" or "walk me through the biomechanics," that is how I practice.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-group-lounge-toast.jpg"
              alt="Active professionals enjoying clear-vision social moments"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>

          <p className="prose">
            This is not about flattering Indian Wells residents. It is about matching the consultation to the patient. A retired cardiologist asks different questions than a retired schoolteacher, and both deserve answers that actually address what they want to know. My job is to provide the clinical expertise and then let you make an informed decision.
          </p>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Not <strong>Beverly Hills?</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indian Wells residents have means. You could fly to UCLA's Stein Eye Institute, to Bascom Palmer in Miami, or to any of the premium eye centers in Beverly Hills. Some of my patients considered exactly that before coming to me. Here is what they found:
          </p>
          <p className="prose">
            The training that separates a truly skilled cataract surgeon from an adequate one is not geography. It is lineage. I trained under Dr. Howard Gimbel at Loma Linda University. Gimbel's contributions to phacoemulsification technique and capsulorrhexis are foundational to modern cataract surgery worldwide. After residency, I completed a retina fellowship, giving me training across the full anatomy of the eye, something most cataract-only surgeons do not have.
          </p>
          <p className="prose">
            That level of training exists 10 minutes from your home, in a physician-owned practice where I perform every surgery personally, you never wait hours, and your care is not shaped by a corporate scheduler or a private equity mandate.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>No Referral Arrangements</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Patients come to Desert Vision Center because of reputation and outcomes, not because of financial referral arrangements. That independence is central to how I practice.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>One Surgeon, Start to Finish</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>I perform every surgery personally. No residents, no fellows, no handoffs. The surgeon who evaluates your eyes is the surgeon in the operating room. Every time.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Complex Case Expertise</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Patients other surgeons have declined, prior surgical complications, dislocated lenses, eyes with multiple conditions. These cases are not occasional. They are a core part of my practice.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Seasonal Residents <strong>and Timing</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Indian Wells has a large population of seasonal residents who arrive in October and head home in April or May. Many of them are at the age where cataracts are developing, and they want their surgery done here, during season, with a surgeon they can see for follow-up visits before they leave.
          </p>
          <p className="prose">
            CLEAR in a Day, same-day bilateral cataract surgery for eligible patients, is especially valuable for seasonal residents. Both eyes treated in a single visit means your recovery happens during your desert stay. You see me for follow-up while you are still here. By the time you head back to Chicago, Minneapolis, or Toronto, your vision is settled and stable.
          </p>
          <p className="prose">
            I work with seasonal patients on scheduling that fits their calendar. If you arrive in November and want surgery scheduled for early December so follow-ups are complete by February, we can plan that. The key is not to wait until March and then rush.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-couple-patio-scenic-view.jpg"
              alt="Couple enjoying desert patio view during season"
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
            <h2 className="section-title">Precision in <strong>Lens Selection</strong></h2>
          </ScrollReveal>
          <p className="prose">
            For Indian Wells patients who are considering premium lens implants, the lens conversation is where the real expertise shows. This is not a menu you pick from. It is a clinical decision built on detailed evaluation of your eye anatomy, your visual priorities, and the honest assessment of what each lens can and cannot do.
          </p>
          <ul className="content-list">
            <li><strong>Extended Depth of Focus (EDOF) lenses:</strong> Designed to provide a continuous range of clear vision from distance through intermediate. Ideal for patients who want broad functional vision without the visual tradeoffs of a multifocal. <Link href="/lens-implants-explained">Lens options explained</Link>.</li>
            <li><strong>Toric lenses:</strong> Specifically designed to reduce astigmatism. The alignment in the operating room matters enormously. My 20,000+ surgeries include extensive experience with precise toric placement.</li>
            <li><strong>Advanced cataract surgery:</strong> I perform every procedure personally with intraoperative measurements guiding real-time decisions. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral surgery for eligible patients. Particularly valuable for seasonal residents and patients who prefer fewer total visits. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
          </ul>
          <p className="prose">
            I also manage complex cases: patients with previous LASIK, previous retina surgery, dislocated lenses, glaucoma, and other conditions that require surgical judgment beyond standard cataract technique. <Link href="/complex-cases">Complex case expertise</Link>.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Clear Vision <strong>Actually Means</strong></h2>
          </ScrollReveal>
          <p className="prose">
            The cliche version of this section would mention the tennis ball and the golf ball. Here is the version for people who actually live in Indian Wells:
          </p>
          <p className="prose">
            Reading the small print on your investment statements without reaching for a magnifier. Recognizing a friend across the dining room at Vue or Siena. Driving comfortably at dusk on Highway 111 when the headlights start to glare. Watching the sunset from your patio and seeing every color gradient instead of a washed-out blur. Enjoying the concert series at Indian Wells City Park without squinting at the performers.
          </p>
          <p className="prose">
            These are not luxury concerns. They are the daily texture of a life well-lived, and cataracts gradually erode every one of them. The surgery to fix it takes 10 to 15 minutes per eye. The impact lasts the rest of your life.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-man-watching-tv-desert-view.jpeg" alt="Senior man relaxing at home watching television with a desert mountain view through the window" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>You do not need to fly anywhere. Ten minutes from Indian Wells, a fellowship-trained surgeon with 20,000+ cases, no corporate pressure, no referral arrangements, and the ability to hold whatever level of conversation your questions require.</strong></p>
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
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Why choose DVC over flying to a major eye center?</h3>
              <p className="prose">Dr. Tokuhara trained under Dr. Howard Gimbel, whose contributions to phacoemulsification are foundational to modern cataract surgery worldwide. He completed an additional retina fellowship. This level of training, combined with 20,000+ surgeries, is 10 minutes from Indian Wells in a practice where he performs every surgery personally.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Can I get cataract surgery during season and be recovered before I leave?</h3>
              <p className="prose">Yes. Schedule surgery early in your season (November or December) and follow-up visits are complete well before you head home. CLEAR in a Day allows both eyes in a single visit for faster overall recovery.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Can I ask detailed technical questions about the procedure?</h3>
              <p className="prose">Absolutely. Dr. Tokuhara welcomes technical conversations about IOL materials, surgical technique, and clinical decision-making. Many Indian Wells patients are retired healthcare professionals or researchers who appreciate that level of dialogue.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Does Dr. Tokuhara have referral arrangements with local optometrists?</h3>
              <p className="prose">No. Patients come to Desert Vision Center based on reputation and outcomes, not financial referral arrangements. This independence is a deliberate feature of how the practice operates.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Do I need a referral?</h3>
              <p className="prose">No referral is needed. Many Indian Wells patients self-refer after independent research. Call 760.340.4700 or use the online contact form.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Indian Wells</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Indian Wells, the drive is approximately 10 minutes.
          </p>
          <p className="prose">
            <strong>From central Indian Wells:</strong> Head northwest on Highway 111 through Palm Desert toward Rancho Mirage. Turn right onto Bob Hope Drive. The office is on your right along the Eisenhower health corridor.
          </p>
          <p className="prose">
            <strong>From the Indian Wells Tennis Garden area:</strong> Take Miles Avenue or Washington Street north to Highway 111, then head west toward Rancho Mirage.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. Post-operative follow-up visits are typically brief, and the 10-minute drive makes the entire surgical experience convenient.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Indian Wells residents: the expertise you would fly to find <strong>is 10 minutes away.</strong></h2>
          <p>Fellowship-trained under Dr. Howard Gimbel. Retina fellowship. 20,000+ surgeries. Physician-owned, independent, no referral arrangements. Schedule your consultation.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
