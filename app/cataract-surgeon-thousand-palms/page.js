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
      name: 'Is there a cataract surgeon in Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no ophthalmologist or cataract surgeon based in Thousand Palms. However, Desert Vision Center in Rancho Mirage is approximately 15 minutes away via Bob Hope Drive, which connects directly from the Thousand Palms area to the office. Dr. Keith Tokuhara is a fellowship-trained cataract surgeon with over 20,000 procedures performed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Thousand Palms to Desert Vision Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most direct route is Bob Hope Drive, which runs straight from the Thousand Palms area south to Desert Vision Center in Rancho Mirage. The drive is approximately 15 minutes with no highway driving required. You can also take I-10 West briefly and exit at Bob Hope Drive heading south.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center accept Medicare patients from Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Dr. Tokuhara discusses all costs upfront during your consultation, including any additional investment for premium lens options, so there are no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both eyes done in one visit from Thousand Palms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara offers CLEAR in a Day, same-day bilateral cataract surgery for eligible patients. Both eyes treated in a single visit means fewer trips and a faster return to your routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dr. Tokuhara treat patients with diabetes and cataracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara completed a retina fellowship in addition to his cataract training, which means he evaluates the entire eye, including checking for diabetic retinopathy and other retinal conditions. He manages both cataracts and diabetic eye issues in-house.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Thousand Palms', href: '/cataract-surgeon-thousand-palms' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Thousand Palms | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Thousand Palms residents: Desert Vision Center is 15 minutes straight down Bob Hope Drive. Dr. Tokuhara is fellowship-trained with 20,000+ surgeries. Medicare accepted. No referral needed.',
  alternates: {
    canonical: '/cataract-surgeon-thousand-palms',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Thousand Palms | Desert Vision Center',
    description: 'No eye surgeon in Thousand Palms? Dr. Tokuhara at Desert Vision Center is 15 minutes south on Bob Hope Drive. Fellowship-trained, physician-owned, complex case specialist. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-thousand-palms',
  },
};

export default function CataractSurgeonThousandPalmsPage() {
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
          <h1>Cataract Surgeon for <strong>Thousand Palms</strong> Residents</h1>
          <p className="page-hero-sub">
            Thousand Palms often gets overlooked. But here is something most residents do not realize: Bob Hope Drive runs straight from your community to Desert Vision Center's front door. Fifteen minutes. No freeway required.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Community <strong>Between</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Thousand Palms is not Palm Springs. It is not Indio. It is not quite anywhere on the tourist map. But the people who live here, in the manufactured home communities along Varner Road, in the neighborhoods near the I-10, and in the newer developments spreading east, know what they have: affordable homes, the Coachella Valley Preserve practically in the backyard, and a community that is quieter than its more famous neighbors.
          </p>
          <p className="prose">
            The Thousand Palms Oasis at the Coachella Valley Preserve is one of the most beautiful spots in the entire desert. Native Washingtonia fan palms, the kind the community is named for, growing alongside spring-fed pools at the base of the Indio Hills. If you have hiked those trails, you know how much clear vision matters when you are navigating rocky desert paths and scanning for wildlife.
          </p>
          <p className="prose">
            But Thousand Palms residents also know the reality of living in a community with minimal medical infrastructure. There is no hospital here. No specialist offices. For most healthcare beyond the basics, you are driving somewhere else. The good news is that "somewhere else" for eye care is closer than most people think.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-man-moving-desert-mountains.jpeg" alt="Active senior man carrying a moving box with desert mountains in the background, representing independent living in the Coachella Valley" width={800} height={500} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Fifteen Minutes <strong>Down Bob Hope Drive</strong></h2>
          </ScrollReveal>

          <ScaleOnScroll startScale={0.9} endScale={1}>
            <div style={{textAlign: 'center', padding: '1.5rem 0 2rem'}}>
              <div style={{fontSize: '3.5rem', fontWeight: '700', color: 'var(--oasis)'}}>15 min</div>
              <div style={{fontSize: '1.05rem', opacity: 0.8}}>Bob Hope Drive. Straight south. No freeway, no traffic, no hassle.</div>
            </div>
          </ScaleOnScroll>

          <p className="prose">
            Bob Hope Drive literally connects Thousand Palms to Desert Vision Center's doorstep. Head south from the I-10 area, pass through the Eisenhower Medical Center corridor, and you are there. For a community where getting to specialist care usually means navigating across the Valley, this is one of the most direct routes to an advanced eye care practice anywhere in the region.
          </p>
          <p className="prose">
            That matters. Not because 15 minutes is some remarkable distance, but because Thousand Palms residents should not have to settle for whatever is closest. You deserve the same quality of care that patients in Palm Desert or Indian Wells receive. The only difference is that most of those patients do not realize they share a surgeon with their neighbors from Thousand Palms.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/dvc-building-exterior.jpg"
              alt="Desert Vision Center building in Rancho Mirage with easy front-door parking"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Practical Care for <strong>Practical People</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Thousand Palms is a practical community. People here are not looking for the flashiest marketing or the biggest name. They want a doctor who is going to be straight with them, explain what is happening, and not make them feel rushed or judged for waiting too long to come in.
          </p>
          <p className="prose">
            That is exactly how I practice. When you come to Desert Vision Center, I examine your eyes thoroughly, explain what I find in plain language, and give you my honest recommendation. If the standard lens covered by Medicare is the right choice for your eyes, I tell you that. If a premium lens would genuinely improve your outcome, I explain why, what it costs, and what the realistic expectations are. Then you decide.
          </p>
          <p className="prose">
            Many of my Thousand Palms patients are retirees on fixed incomes. Some are still working. Some are managing diabetes or glaucoma alongside their cataracts. Whatever your situation, I factor it into the plan. Your eyes are unique. Your life circumstances are unique. The surgery should reflect both.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/patient-elderly-man-calm.jpg"
              alt="Calm patient during eye care consultation"
              width={800}
              height={450}
              style={{width: '100%', height: 'auto', borderRadius: '12px'}}
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What I Bring to <strong>Your Care</strong></h2>
          </ScrollReveal>
          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-asian-man-desert-mountains.jpeg" alt="Senior man getting ready for an active day with desert mountains visible through the bedroom window" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>

          <p className="prose">
            Thousand Palms does not have its own ophthalmologist, so when you need cataract surgery, you are choosing from surgeons across the Valley. Here is what you are getting at Desert Vision Center:
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Your Surgeon. Every Time.</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>I perform every surgery personally. No residents, no fellows, no handoffs to an associate. The surgeon you consulted with is the surgeon in the operating room.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>The Whole Eye, Not Just the Cataract</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>My retina fellowship means I evaluate the full picture: cataracts, diabetic changes, macular concerns, glaucoma. One surgeon, one practice, comprehensive care.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>20,000+ Surgeries</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Experience compounds. After this many procedures, I have seen and managed virtually every complication, anatomical variation, and challenging situation cataract surgery can present.</p>
              </div>
            </TiltCard>
          </div>

          <p className="prose">
            I am also a complex case specialist. Patients with diabetes, glaucoma, prior failed surgeries, or cases other surgeons have declined regularly come to my practice. If your eyes present challenges, I do not refer you elsewhere. I handle them.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Thousand Palms Patients</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>Advanced cataract surgery:</strong> Precise, modern technique performed by me personally, start to finish. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>CLEAR in a Day:</strong> Same-day bilateral cataract surgery for eligible patients. Both eyes in one visit. For Thousand Palms residents, that means fewer total appointments, less time coordinating rides, and a faster return to normal. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Honest lens selection:</strong> EDOF lenses for broader range, toric lenses to reduce astigmatism, multifocal options. I match the lens to your eyes and your life. If the standard lens is the best fit, I say so. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
            <li><strong>Diabetic eye care:</strong> Many Thousand Palms patients manage diabetes. My retina fellowship means I check for diabetic retinopathy and manage it in the same practice where I treat your cataracts. <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
            <li><strong>Complex and revision cases:</strong> Dislocated lenses, failed prior procedures, Yamane sutured lenses, and other cases that require advanced surgical skill. <Link href="/complex-cases">Complex case expertise</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          </ScrollReveal>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Is there a cataract surgeon in Thousand Palms?</h3>
              <p className="prose">There is no ophthalmologist based in Thousand Palms. Desert Vision Center in Rancho Mirage is the closest advanced eye surgery practice, 15 minutes south on Bob Hope Drive.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Does Desert Vision Center accept Medicare?</h3>
              <p className="prose">Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Premium lens upgrades are an additional cost, discussed in full before you make any decision.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>What if I have diabetes and cataracts?</h3>
              <p className="prose">Dr. Tokuhara completed a retina fellowship specifically to manage complex eye conditions like diabetic retinopathy. He evaluates the entire eye, not just the cataract, and manages both conditions in-house.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Can I get both eyes done at once?</h3>
              <p className="prose">Eligible patients can have both eyes treated on the same day through the CLEAR in a Day program. This means fewer total visits and a faster visual recovery.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Do I need a referral?</h3>
              <p className="prose">No referral is required. Call 760.340.4700 or use the online contact form to schedule directly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Getting Here from <strong>Thousand Palms</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Thousand Palms, the drive is approximately 15 minutes.
          </p>
          <p className="prose">
            <strong>Via Bob Hope Drive (recommended):</strong> Head south on Bob Hope Drive from the Thousand Palms area. The road runs directly to Desert Vision Center near the Eisenhower Medical Center corridor. No freeway needed.
          </p>
          <p className="prose">
            <strong>Via Interstate 10:</strong> Head west on I-10 briefly and exit at Bob Hope Drive. Head south to the office.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. We run on time, so you will not spend your morning in a waiting room.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>Thousand Palms may not have its own ophthalmologist, but it has something better: a 15-minute straight shot to one of the most experienced cataract surgeons in the Coachella Valley. Bob Hope Drive connects you directly. No referral required.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Thousand Palms residents: world-class eye care is <strong>15 minutes south.</strong></h2>
          <p>Bob Hope Drive takes you straight to Desert Vision Center. Fellowship-trained surgeon, 20,000+ procedures, honest recommendations. Medicare accepted. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
