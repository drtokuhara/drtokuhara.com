import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, physicianSchema } from '../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
  ScaleOnScroll,
} from '../components/ScrollAnimations';
import TiltCard from '../components/TiltCard';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an eye surgeon in Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no ophthalmologist or cataract surgeon based in Desert Hot Springs. Desert Vision Center in Rancho Mirage is approximately 20 minutes south and is the closest advanced cataract surgery practice. Dr. Keith Tokuhara is residency-trained in cataract surgery under Dr. Howard Gimbel with additional retina fellowship training with over 20,000 procedures performed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Desert Vision Center from Desert Hot Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desert Vision Center at 35900 Bob Hope Drive in Rancho Mirage is approximately a 20-minute drive from Desert Hot Springs. You can take Indian Canyon Road south to I-10 or Gene Autry Trail to the Bob Hope Drive exit. Ample parking is available in front of the building.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Desert Vision Center accept Medicare for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard cataract surgery is covered by Medicare and most insurance plans. Dr. Tokuhara discusses all costs transparently during your consultation. If the standard Medicare-covered lens is the right choice for your eyes, he will tell you that honestly. Premium lens upgrades involve additional costs that are explained upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Desert Hot Springs patients with glaucoma get cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dr. Tokuhara specializes in complex cases including patients with glaucoma, diabetes, pseudoexfoliation, and previous eye surgeries. His retina fellowship training gives him comprehensive expertise that most cataract-only surgeons lack. He manages both conditions in the same practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the standard lens covered by Medicare work for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For many patients, the standard monofocal lens covered by Medicare provides excellent distance vision and is the right choice. Dr. Tokuhara evaluates each patient individually and will recommend the standard lens when it genuinely suits your needs. He does not default to premium options.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cataract Surgeon for Desert Hot Springs', href: '/cataract-surgeon-desert-hot-springs' },
  ]),
  physicianSchema,
];

export const metadata = {
  title: 'Cataract Surgeon Near Desert Hot Springs | Dr. Keith Tokuhara | Desert Vision Center',
  description: 'Desert Hot Springs residents: Dr. Keith Tokuhara at Desert Vision Center is 20 minutes south. Fellowship-trained, 20,000+ surgeries. Honest lens recommendations. Medicare accepted. Fixed-income friendly.',
  alternates: {
    canonical: '/cataract-surgeon-desert-hot-springs',
  },
  openGraph: {
    title: 'Cataract Surgeon Near Desert Hot Springs | Desert Vision Center',
    description: 'No eye surgeon in Desert Hot Springs? Dr. Tokuhara at Desert Vision Center is 20 minutes south in Rancho Mirage. Fellowship-trained, complex case specialist. 760.340.4700.',
    url: 'https://drtokuhara.com/cataract-surgeon-desert-hot-springs',
  },
};

export default function CataractSurgeonDesertHotSpringsPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideoBackground src="/media/ambient-desert-sunrise-golden.mp4" overlayOpacity={0.55} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <h1>Cataract Surgeon for <strong>Desert Hot Springs</strong> Residents</h1>
          <p className="page-hero-sub">
            Desert Hot Springs sits above the Valley floor with views of San Jacinto that people in Palm Desert pay a fortune for. Clear vision means actually seeing them. Desert Vision Center is 20 minutes south.
          </p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Real <strong>Desert Hot Springs</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Hot Springs has a reputation as a wellness destination. The natural hot mineral springs, the boutique spas, the health retreats. That reputation is real, but it is not the whole story.
          </p>
          <p className="prose">
            Most people who actually live in Desert Hot Springs, the year-round, full-time residents, chose it for a simpler reason: it is where they could afford a home in the Coachella Valley. Retirees on fixed incomes. Working families. People who came for the quiet streets, the wide-open sky, and a cost of living that does not eat their entire pension. The views from Miracle Hill out over the Valley are some of the best anywhere, and you do not need a country club membership to enjoy them.
          </p>
          <p className="prose">
            DHS sits on the north side of the I-10, separated from the rest of the Valley by the San Andreas Fault. That geographic separation creates a practical reality: there is no hospital in town. No specialist offices. When you need medical care beyond the basics, you are driving south to Palm Springs or Rancho Mirage. For eye care specifically, Desert Vision Center is 20 minutes away, and for a community where getting to specialist care usually means half a day of logistics, that proximity matters.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Straight Talk <strong>About Cost</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know that cost is a real concern for many Desert Hot Springs patients. This is not a community where people throw money around. Many of my DHS patients are on Medicare and a pension, or they are working and managing tight budgets. They want to know upfront what this is going to cost and whether there will be surprises.
          </p>
          <p className="prose">
            Here is the truth: standard cataract surgery is covered by Medicare and most insurance plans. The procedure itself, the standard lens, the facility fee, the follow-up care. Covered. For many patients, the standard monofocal lens provides excellent distance vision, and I will tell you honestly when that is the right choice for your eyes.
          </p>

          <ScaleOnScroll startScale={0.9} endScale={1}>
            <div style={{textAlign: 'center', padding: '1.5rem', margin: '1.5rem 0', background: 'rgba(255,255,255,0.05)', borderRadius: '12px'}}>
              <div style={{fontSize: '1.2rem', fontWeight: '600', color: 'var(--oasis)', marginBottom: '0.5rem'}}>No-Upsell Promise</div>
              <div style={{fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>I never recommend the most expensive option just because it exists. If the standard lens is right for you, I say so. Directly.</div>
            </div>
          </ScaleOnScroll>

          <p className="prose">
            Premium lenses, the ones that provide extended range of focus or reduce astigmatism, involve an additional out-of-pocket cost. I explain exactly what that cost is, what the lens does differently, and what realistic expectations look like before you make any decision. No pressure. No upselling. If you decide the standard lens makes the most sense for your budget and your life, that is a perfectly good decision, and I support it fully.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/patient-elderly-man-calm.jpg"
              alt="Patient in comfortable consultation setting at Desert Vision Center"
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
            <h2 className="section-title">More Than <strong>Just Cataracts</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Hot Springs has a significant population of patients who are managing more than cataracts alone. Glaucoma. Diabetes. Macular degeneration. A history of other eye conditions or surgeries. For patients like this, choosing a cataract surgeon who can only do cataracts means bouncing between multiple specialists across the Valley. That is a lot of appointments, a lot of driving, and a lot of fragmented care.
          </p>
          <p className="prose">
            I completed a retina fellowship after my cataract training. That means when I examine your eyes, I am not just looking at the cataract. I am checking the retina for diabetic changes, evaluating the optic nerve for glaucoma progression, and looking at the macula for early degeneration. If I find something, I manage it right here. One surgeon, one practice, one relationship.
          </p>
          <p className="prose">
            For DHS patients managing diabetes in particular, this matters. Diabetic eye disease can affect cataract surgery planning, lens selection, and post-operative outcomes. A surgeon who understands both conditions, rather than looking at them separately, provides better, safer care.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Diabetes and Cataracts</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>I check the retina for diabetic damage during every cataract evaluation. Many DHS patients have both conditions. My retina fellowship means I manage them together, not separately.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Glaucoma and Cataracts</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Glaucoma complicates cataract surgery in specific ways. I plan around it. Some patients benefit from combined glaucoma-cataract procedures. I handle both.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 style={{marginBottom: '0.75rem', fontSize: '1.1rem'}}>Prior Surgeries</h3>
                <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Failed procedures from other surgeons, dislocated lenses, complications. I specialize in these cases. If another surgeon said no, I may still be able to help.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Respecting <strong>Your Time</strong></h2>
          </ScrollReveal>
          <p className="prose">
            I know 20 minutes can feel like a lot when you are coordinating transportation, working around someone else's schedule, or managing a fixed daily routine. Some DHS residents rely on family or friends for rides. Some avoid driving after a certain hour because of glare.
          </p>
          <p className="prose">
            My office runs on time. That is not a marketing claim. It is how I practice. When we schedule you for an appointment, you are seen at that time. We keep visits focused and productive so you are not spending half a day on one appointment.
          </p>
          <p className="prose">
            For patients who qualify, CLEAR in a Day lets you have both eyes treated in a single visit. That cuts the total number of trips from DHS roughly in half. Instead of four or more separate drives to Rancho Mirage, you are looking at a few total visits. For a community where every trip to a specialist takes real planning, that difference matters.
          </p>

          <div style={{margin: '2rem 0'}}>
            <Image src="/media/senior-woman-planting-succulents.jpeg" alt="Senior woman carefully planting succulents in her desert garden on a sunny day" width={800} height={450} style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Services for <strong>Desert Hot Springs Patients</strong></h2>
          </ScrollReveal>
          <ul className="content-list">
            <li><strong>CLEAR in a Day:</strong> Both eyes in a single visit for eligible patients. Fewer trips from DHS, faster visual recovery. <Link href="/clear-in-a-day">Learn about CLEAR in a Day</Link>.</li>
            <li><strong>Advanced cataract surgery:</strong> I perform every procedure personally. No residents, no fellows. 20,000+ surgeries of experience. <Link href="/cataract-surgery">Learn about cataract surgery</Link>.</li>
            <li><strong>Diabetic eye care:</strong> Retina evaluation, diabetic retinopathy management, and in-house injections and laser treatment. My retina fellowship training means your diabetes-related eye concerns are handled in the same practice as your cataracts. <Link href="/diabetic-retinopathy">Diabetic eye care</Link>.</li>
            <li><strong>Glaucoma management:</strong> Monitoring, medical treatment, and surgical options when needed. <Link href="/glaucoma">Glaucoma care</Link>.</li>
            <li><strong>Honest lens selection:</strong> Standard, EDOF, toric, or multifocal. I recommend what your eyes need, not what maximizes my billing. <Link href="/lens-implants-explained">Explore lens options</Link>.</li>
          </ul>

          <div style={{margin: '2rem 0'}}>
            <Image
              src="/media/stock-couple-desert-overlook.jpg"
              alt="Couple enjoying desert mountain views from an overlook"
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
            <h2 className="section-title">Frequently Asked <strong>Questions</strong></h2>
          </ScrollReveal>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Is there an eye surgeon in Desert Hot Springs?</h3>
              <p className="prose">No. DHS has no ophthalmologist. Desert Vision Center in Rancho Mirage is the closest advanced cataract surgery practice, 20 minutes south via Indian Canyon Road or Gene Autry Trail.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>Will the surgeon try to upsell me on an expensive lens?</h3>
              <p className="prose">No. I recommend the standard Medicare-covered lens when it is the right choice, and I say so directly. Premium lenses are discussed as options with transparent costs, never as pressure.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>What if I have diabetes and cataracts?</h3>
              <p className="prose">This is a specialty of my practice. My retina fellowship means I evaluate and manage diabetic eye disease alongside your cataract care. One surgeon, one practice, coordinated treatment.</p>
            </div>
            <div>
              <h3 style={{fontSize: '1.05rem', marginBottom: '0.5rem'}}>How many trips will I need to make?</h3>
              <p className="prose">Typically a pre-op evaluation, the surgery visit, and a few follow-ups. With CLEAR in a Day for eligible patients, both eyes are done in one visit, reducing total trips significantly.</p>
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
            <h2 className="section-title">Getting Here from <strong>Desert Hot Springs</strong></h2>
          </ScrollReveal>
          <p className="prose">
            Desert Vision Center is located at <strong>35900 Bob Hope Drive, Suite 175, Rancho Mirage, CA 92270</strong>. From Desert Hot Springs, the drive is approximately 20 minutes.
          </p>
          <p className="prose">
            <strong>Via Indian Canyon Road:</strong> Head south on Indian Canyon Road through North Palm Springs. Merge onto I-10 heading east briefly, then exit at Bob Hope Drive and head south. The office is on your left near the Eisenhower Medical Center area.
          </p>
          <p className="prose">
            <strong>Via Gene Autry Trail:</strong> Take Gene Autry Trail south to I-10 heading west, then exit at Bob Hope Drive and head south.
          </p>
          <p className="prose">
            Ample parking directly in front of the building. We run on time, so a 20-minute drive does not turn into a half-day ordeal.
          </p>

          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>DHS sits above the Valley with views most people pay a premium for. Clear vision means actually enjoying them. Twenty minutes south, a surgeon who treats every patient with the same thoroughness, regardless of where they live or what insurance they carry.</strong></p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Desert Hot Springs residents: honest, expert eye care is <strong>20 minutes south.</strong></h2>
          <p>Fellowship-trained surgeon. 20,000+ procedures. Transparent about costs. Medicare accepted. No upselling. No referral required.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
