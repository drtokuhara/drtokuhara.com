import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';
import AudioNarration from '../components/AudioNarration';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is cataract surgery safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cataract surgery is one of the safest elective surgical procedures in medicine. More than 4 million procedures are performed in the United States every year, with an overall success rate exceeding 99 percent. Serious complications are rare, and the vast majority of patients see meaningful improvement in vision.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the success rate of cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The success rate for cataract surgery exceeds 99 percent when measured by the absence of serious complications. Most patients experience significant improvement in visual clarity, contrast sensitivity, and quality of life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the risks of cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possible risks include infection, inflammation, elevated eye pressure, and posterior capsule opacification, which is a common, easily treated cloudiness that can develop months after surgery. Rare but serious complications include retinal detachment and severe infection. An experienced surgeon will discuss your individual risk profile before surgery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes cataract surgery safer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern cataract surgery uses phacoemulsification through a very small incision. The small incision reduces astigmatism, heals quickly, and requires no sutures in most cases. Topical anesthesia eliminates injection-based risks. Outpatient surgery minimizes hospital-associated risks. High surgeon volume and fellowship training further reduce complication rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should be extra careful about cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Patients with pseudoexfoliation syndrome, Fuchs dystrophy, prior retinal surgery, prior LASIK or radial keratotomy, glaucoma, or diabetes require more careful evaluation and planning. These are not automatically higher-risk situations, but they require a surgeon with specific experience managing them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I have the right surgeon for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for a surgeon who performs high surgical volume, has fellowship training in medical retina, is transparent about risks and complication rates, and takes time to understand your eyes and goals. Volume builds instinct. Training builds judgment. Transparency builds trust.',
      },
    },
  ],
};

export const metadata = {
  title: 'Is Cataract Surgery Safe? An Honest Answer',
  description: 'Cataract surgery has a success rate exceeding 99 percent and over 4 million procedures are performed annually in the US. An honest look at the safety record, the real risks, and what makes outcomes better.',
  alternates: { canonical: '/is-cataract-surgery-safe' },
  openGraph: {
    title: 'Is Cataract Surgery Safe? An Honest Answer | Dr. Keith Tokuhara',
    description: 'One of the safest surgeries in medicine - but safety depends on more than statistics. Dr. Tokuhara explains what makes cataract surgery safe, what risks exist, and why the right surgeon matters.',
    url: 'https://drtokuhara.com/is-cataract-surgery-safe',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Is Surgery Safe?', href: '/is-cataract-surgery-safe' },
]);

export default function IsCataractSurgerySafePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-desert-moonrise.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Is Cataract Surgery <strong>Safe?</strong></h1>
            <p className="page-hero-sub">An honest answer: yes, with important context about what that means for your eyes specifically.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <AudioNarration src="/audio/narrations/is-cataract-surgery-safe.mp3" title="Is Cataract Surgery Safe?" />

      {/* THE SHORT ANSWER */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Short <strong>Answer</strong></h2>
          </ScrollReveal>
          <p className="body-lead">
            Yes. Cataract surgery is one of the safest elective surgical procedures in all of medicine. More than 4 million procedures are performed in the United States every year, with an overall success rate exceeding 99 percent.
          </p>
          <p>
            That is not marketing. That is the published literature, confirmed by decades of outcomes data from practices around the world.
          </p>
          <p>
            But that is also the population-level answer. Your individual situation may involve factors that shift the risk profile. And surgery performed by a high-volume, fellowship-trained surgeon is meaningfully different from surgery performed by someone with limited experience in complex cases. The statistics are reassuring. The specific details of your eyes and your surgeon matter too.
          </p>
          <div className="content-image" style={{marginTop: '32px'}}>
            <Image
              src="/media/patient-couple-consultation.jpg"
              alt="Patient consultation at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT SAFE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What Makes It <strong>Safe</strong></h2>
          </ScrollReveal>
          <p>
            Modern cataract surgery bears little resemblance to the procedure of even 20 years ago. Several advances have made it both more effective and safer:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>Small-incision phacoemulsification.</strong>
              <p>The cloudy lens is removed through an incision typically less than 3mm. This reduces astigmatism compared to older large-incision techniques, heals without sutures in most cases, and significantly lowers infection risk.</p>
            </div>
            <div className="insight-item">
              <strong>Topical anesthesia.</strong>
              <p>Eye drops numb the eye for surgery. There is no needle near the eye, no injection behind the eye, and no general anesthesia required. This removes an entire category of risk that older approaches carried.</p>
            </div>
            <div className="insight-item">
              <strong>Outpatient procedure.</strong>
              <p>The surgery itself takes 10 to 15 minutes for most straightforward cases. Including check-in, preparation, and a brief recovery observation, most patients are at the surgery center for about two hours total. You go home the same day.</p>
            </div>
            <div className="insight-item">
              <strong>Quick recovery.</strong>
              <p>Most patients notice improved vision within 24 hours. Full visual stabilization typically occurs by 4 to 6 weeks. There are no stitches to remove and no prolonged activity restrictions for most patients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE RISKS THAT DO EXIST */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The Risks That <strong>Do Exist</strong></h2>
          </ScrollReveal>
          <p>
            Being honest about safety means acknowledging that cataract surgery, like all surgery, carries real risks. Most are uncommon. Most are manageable when recognized and addressed appropriately.
          </p>
          <p>
            Common and expected: mild inflammation, light sensitivity, and fluctuating vision in the first days after surgery are normal. Posterior capsule opacification, a cloudiness that develops months to years later, occurs in up to 30 percent of patients and is treated quickly with a brief laser procedure.
          </p>
          <p>
            Less common but important: elevated eye pressure, persistent corneal swelling, and retinal detachment are more serious. Dropped nuclear fragments require additional surgery to remove. These happen in a small fraction of cases, but they happen. A surgeon who tells you complications never occur is not being honest with you.
          </p>
          <BlurReveal>
            <div className="insight-highlight">
              <p><strong>For a complete look at what can go wrong and how I manage it,</strong> see the <Link href="/cataract-surgery-complications" style={{color: '#fff', textDecoration: 'underline'}}>Cataract Surgery Complications guide</Link>.</p>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* SAFER WITH THE RIGHT SURGEON */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Safer With the <strong>Right Surgeon</strong></h2>
          </ScrollReveal>
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/complex-cases-surgical-precision.jpg"
              alt="Precision in cataract surgery - experience and volume make a measurable difference"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <p>
            Surgical volume is not vanity. A surgeon who has performed thousands of procedures has seen a range of complications, unusual anatomy, and unexpected intraoperative findings that a surgeon with 500 cases has not. This experience builds the instinct to recognize a problem early and respond before it escalates.
          </p>
          <p>
            Fellowship training in medical retina provides specialized preparation that residency alone does not. Understanding the full eye, from the front to the back, teaches not just cataract technique but the judgment to recognize retinal issues, manage post-operative complications, and make integrated treatment decisions.
          </p>
          <p>
            Complication management is as important as complication avoidance. The best surgeons are not the ones who never have complications. They are the ones who recognize complications quickly, handle them skillfully, and communicate honestly with patients throughout.
          </p>
          <p>
            I have performed more than 20,000 eye procedures. My fellowship training in medical retina, which gives me a perspective on the full visual system that most cataract surgeons do not have. I also take on complex and revision cases referred by other surgeons. For more on what that training means in practice, see the <Link href="/choosing-your-surgeon">Choosing Your Surgeon</Link> guide.
          </p>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Conditions That Need <strong>Extra Planning</strong></h2>
          </ScrollReveal>
          <p>
            Certain pre-existing conditions increase the complexity of cataract surgery. They do not make surgery impossible or necessarily more dangerous. But they require a surgeon with the experience and preparation to manage them:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong><Link href="/complex-cases/pseudoexfoliation" style={{color: 'var(--night-horizon)'}}>Pseudoexfoliation syndrome.</Link></strong>
              <p>Weakened zonular fibers can lead to complications during surgery. Specialized tools and technique adjustments are needed.</p>
            </div>
            <div className="insight-item">
              <strong>Prior corneal refractive surgery (<Link href="/complex-cases/previous-lasik" style={{color: 'var(--night-horizon)'}}>LASIK</Link>, <Link href="/complex-cases/previous-rk" style={{color: 'var(--night-horizon)'}}>RK</Link>).</strong>
              <p>Previous corneal procedures alter the measurements used to select lens power. Standard formulas can produce inaccurate results. Specialized calculations are required.</p>
            </div>
            <div className="insight-item">
              <strong><Link href="/complex-cases/fuchs-dystrophy" style={{color: 'var(--night-horizon)'}}>Fuchs endothelial dystrophy.</Link></strong>
              <p>Corneal swelling is more likely after surgery. Surgical technique and lens selection must account for corneal health before and after the procedure.</p>
            </div>
            <div className="insight-item">
              <strong><Link href="/complex-cases/diabetes" style={{color: 'var(--night-horizon)'}}>Diabetes</Link>, <Link href="/complex-cases/glaucoma-and-cataract" style={{color: 'var(--night-horizon)'}}>glaucoma</Link>, <Link href="/complex-cases/previous-retina-surgery" style={{color: 'var(--night-horizon)'}}>prior retinal surgery</Link>.</strong>
              <p>Each presents distinct surgical challenges that require evaluation during the pre-operative workup. An experienced surgeon plans for these during preparation, not during surgery.</p>
            </div>
          </div>
          <p>
            If any of these apply to you, it is not a reason to avoid surgery. It is a reason to seek a surgeon with specific experience. See <Link href="/complex-cases">complex cataract cases</Link> for more detail on each condition.
          </p>

          <div className="clinic-thought" style={{marginTop: '32px'}}>
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients often ask me if cataract surgery is safe, and I tell them yes. But then I tell them the rest: that the statistics are population-level, that their individual risk profile depends on their eyes and their surgeon, and that being in the right hands changes the equation significantly. I have performed more than 20,000 eye procedures. What I offer is not just technique. It is the experience to recognize when something unusual is happening and the judgment to respond. That combination is what safety actually looks like in practice.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE BREAK */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-garden-blooming.jpg" alt="Couple enjoying a bright garden with blooming flowers and clear vision" width={1920} height={500} style={{width: '100%', height: 'auto'}} />
        </div>
      </section>

      {/* DR T IMAGE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image">
            <Image
              src="/media/Dr-Tokuhara.jpg"
              alt="Dr. Keith Tokuhara, fellowship-trained cataract surgeon at Desert Vision Center"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <div className="content-image-caption">Dr. Keith Tokuhara. Fellowship-trained in medical retina. More than 20,000 eye procedures. The surgeon other surgeons call when things get complicated.</div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>A complete, honest look at what can go wrong during and after cataract surgery, and how complications are managed.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>Volume, training, communication, and the questions that reveal whether a surgeon is right for your eyes.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Surgery when other conditions are involved. How prior history and other eye diseases affect planning.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>About Cataract Surgery</h3>
              <p>What the procedure involves from start to finish, in plain language.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
