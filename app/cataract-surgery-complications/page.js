import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How common are cataract surgery complications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery has a success rate exceeding 99%. Serious complications like posterior capsule rupture occur in approximately 1-3% of cases. Harvard\'s Massachusetts Eye and Ear reported their rate at 1.7% in 2018. While rare, having an experienced surgeon who can manage complications is essential.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is posterior capsule rupture during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posterior capsule rupture occurs when the thin membrane behind the cataract breaks during surgery. This can allow cataract fragments to fall toward the retina, cause vitreous to pull forward (risking retinal detachment), or compromise the support structure for the lens implant. An experienced surgeon can manage this complication during the procedure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can iris damage from cataract surgery be repaired?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Iris damage, often caused by iris prolapse through incision sites during surgery, can be repaired with microsurgical suturing techniques. Dr. Tokuhara regularly performs iris repair surgery for patients who experienced this complication elsewhere, restoring pupil shape and reducing debilitating glare symptoms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still get a premium lens implant if I had a complication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases of posterior capsule rupture, premium toric or multifocal lenses cannot be safely placed in the traditional position. However, there are advanced techniques like reverse optic capture and intrascleral fixation (Yamane technique) that can provide good outcomes with alternative lens placement strategies.',
      },
    },
  ],
};

export const metadata = {
  title: 'Cataract Surgery Complications: What Can Go Wrong and How I Handle It',
  description: 'An honest look at cataract surgery complications including posterior capsule rupture and iris damage. Dr. Tokuhara explains what can happen, how he manages it, and why experience matters.',
  alternates: { canonical: '/cataract-surgery-complications' },
  openGraph: {
    title: 'Cataract Surgery Complications | Dr. Keith Tokuhara',
    description: 'What can go wrong during cataract surgery, how complications are managed, and why choosing an experienced surgeon matters more than you think.',
    url: 'https://drtokuhara.com/cataract-surgery-complications',
  },
};

export default function CataractSurgeryComplications() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Cataract Surgery <strong>Complications</strong></h1></ScrollReveal>
          <p className="page-hero-sub">What can go wrong, how I handle it, and why this page exists at all.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Most surgeon websites do not have a page like this. I think that is a mistake.
          </p>
          <p>
            Cataract surgery is one of the safest, most successful procedures in all of medicine. The success rate exceeds 99%. But "safe" does not mean "risk-free," and pretending complications do not exist does not serve patients. It just means they are unprepared if something does happen.
          </p>
          <p>
            I would rather you understand the risks honestly than be surprised by them later. And I would rather you know that if a complication occurs, your surgeon has both the training and the temperament to handle it.
          </p>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Why Experience with Complications <strong>Matters</strong></h2>
          <p>
            I regularly see patients for second-opinion consultations after complications from cataract surgery performed elsewhere. This is a significant part of my practice. With fellowship training in medical retina, I am uniquely positioned to manage both the anterior segment complications of cataract surgery and the posterior segment consequences that can follow.
          </p>
          <p>
            Here is what I have learned from those consultations: the complication itself is rarely what causes the most damage. <strong>It is how the complication is managed, and how the patient is treated afterward, that determines the outcome.</strong>
          </p>
          <p>
            Complications happen to every surgeon. The question is whether your surgeon is prepared, skilled enough to manage the unexpected, and honest enough to tell you what happened.
          </p>
        </div>
      </section>

      {/* POSTERIOR CAPSULE RUPTURE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Posterior Capsule <strong>Rupture</strong></h2>
          <p>
            During cataract surgery, the natural lens sits inside a thin membrane called the capsule. We open the front of the capsule to access and remove the cataract, and we intentionally leave the back of the capsule intact. It is a delicate structure, just two to four micrometers thin, and it provides the structural support for the new lens implant.
          </p>
          <p>
            In approximately 1 to 3 percent of cataract surgeries, the posterior capsule breaks during the procedure. Harvard's Massachusetts Eye and Ear reported their rate at 1.7% in 2018. Certain factors increase the risk: previous retina surgery, intravitreal injections, trauma, and the density of the cataract itself.
          </p>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>What happens when the capsule breaks</h3>
          <p>Three things can go wrong:</p>
          <ul className="content-list">
            <li><strong>Cataract fragments can fall toward the retina.</strong> If pieces drop to the back of the eye, a secondary surgery with a vitreoretinal surgeon may be needed to retrieve them safely.</li>
            <li><strong>Vitreous can migrate forward.</strong> The clear, gel-like substance in the center of the eye can shift forward through the broken capsule. As it moves, it can pull on the retina and potentially cause a detachment.</li>
            <li><strong>The lens implant loses its support.</strong> Without an intact capsule, the new lens can dislocate or fall to the back of the eye.</li>
          </ul>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>How I manage it</h3>
          <p>
            An experienced surgeon who anticipates this possibility can manage it during the same procedure:
          </p>
          <ul className="content-list">
            <li><strong>Anterior vitrectomy</strong> to carefully remove any vitreous that has migrated forward, minimizing traction on the retina</li>
            <li><strong>Safe removal of cataract fragments</strong> without causing additional damage</li>
            <li><strong>Alternative lens placement</strong> using the sulcus (a pocket of space between the capsule and iris) with optic capture to secure the lens</li>
            <li><strong>Intrascleral fixation (Yamane technique)</strong> for cases where the capsule is too compromised for sulcus placement, anchoring the lens haptics directly into the sclera without sutures</li>
          </ul>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>Can you still get a premium lens?</h3>
          <p>
            Usually, no. Once the posterior capsule is broken, the structural support needed for toric and multifocal lenses is compromised. These lenses can easily dislocate without proper capsule support.
          </p>
          <p>
            However, there are exceptions. Techniques like reverse optic capture, first described by Dr. Gimbel, can allow toric or multifocal placement in the right circumstances, as long as the anterior capsulorrhexis is appropriately sized and centered. These are advanced techniques that require significant surgical experience.
          </p>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/7VkbQx36LeI"
              title="Posterior Capsule Rupture Explained - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>My detailed explanation of posterior capsule rupture, with anatomy diagrams and management strategies.</p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <LineDraw />
        </div>
      </section>

      {/* IRIS DAMAGE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Iris Damage <strong>Repair</strong></h2>
          <p>
            One of the most common complications I see from surgeries performed elsewhere is iris damage. The iris, the colored part of your eye, is incredibly delicate. During surgery, instruments pass through small incisions near the edge of the iris. If the iris prolapses (bulges outward) through these incisions due to poor fluidics or surgical control, it can sustain permanent structural damage.
          </p>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>A patient's story</h3>
          <p>
            A 73-year-old woman came to me after two years of debilitating glare following her cataract surgery at another practice. Her vision measured 20/30 in one eye and 20/40 in the other, numbers that look reasonable on paper. But her lived experience was anything but reasonable.
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <p>She could not tolerate bright lights. Even the darkest sunglasses were not enough.</p>
            </div>
            <div className="insight-item">
              <p>She kept the windows of her house closed just to block the sun.</p>
            </div>
            <div className="insight-item">
              <p>She could not drive. She relied entirely on her husband for transportation.</p>
            </div>
            <div className="insight-item">
              <p>She went to the grocery store only in the early morning or late evening to avoid light.</p>
            </div>
          </div>
          <p>
            When I examined her, I found iris damage at the incision sites in both eyes. The iris had prolapsed during surgery, and the damaged areas were allowing uncontrolled light to flood into her eyes. Under the microscope, I could see light passing directly through the damaged iris tissue, a finding called transillumination.
          </p>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>How I repaired it</h3>
          <p>
            Using microsurgical suturing techniques, I placed stitches to reconnect the damaged portions of the iris and rebuild the pupil sphincter muscle. Think of it like carefully tying laces to close gaps in a delicate fabric.
          </p>
          <p>
            The damaged areas at the incision sites were closed, and the pupil was reshaped to its natural, round form. On the first day after surgery, the result was clear:
          </p>
          <ul className="content-list">
            <li>20/20 vision</li>
            <li>Glare symptoms resolved</li>
            <li>She could drive again</li>
            <li>She could go to the grocery store without sunglasses</li>
          </ul>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/B8sM9Xa5mus"
              title="Iris Damage Repair After Cataract Surgery - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>Before and after photographs and a full explanation of the iris repair technique.</p>
        </div>
      </section>

      {/* WHAT TO WATCH FOR */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What to Watch For <strong>After Surgery</strong></h2>
          <p>
            Most cataract surgeries are uneventful, and recovery is smooth. But it is important to know when to call your surgeon. Contact your doctor promptly if you experience:
          </p>
          <ul className="content-list">
            <li>Sudden decrease in vision</li>
            <li>Increasing pain that is not relieved by over-the-counter medication</li>
            <li>Flashes of light or a sudden increase in floaters</li>
            <li>A shadow or curtain appearing in your peripheral vision</li>
            <li>Increasing redness that worsens after the first day</li>
          </ul>
          <p>
            These symptoms do not necessarily mean something is wrong. But they warrant prompt evaluation. The earlier a complication is identified, the better the outcome.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have spent years thinking about why some surgeons avoid talking about complications. I think it comes from a good place, a desire to reassure, to not frighten patients away from a procedure that will genuinely improve their lives. But reassurance built on incomplete information is fragile. I would rather a patient walk into surgery with clear eyes, literally and figuratively, than discover after the fact that they were never told what was possible. Trust is not built by hiding risk. It is built by facing it together.</em>
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Cataract surgery when other eye conditions are involved.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>Why experience, honesty, and surgical skill matter more than marketing.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the standard procedure involves from start to finish.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
