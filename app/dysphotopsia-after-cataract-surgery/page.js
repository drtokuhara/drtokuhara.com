import Link from 'next/link';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  VideoBackground,
  StaggerChildren,
  StaggerItem,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is dysphotopsia after cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dysphotopsia refers to unwanted visual symptoms that can occur after cataract surgery, caused by the way light interacts with the artificial lens implant. There are two types: positive dysphotopsia (seeing arcs, streaks, or crescents of light) and negative dysphotopsia (a dark shadow or curtain in your peripheral vision). Both are related to the edge design of the lens implant and how light refracts at the lens-capsule interface.' },
    },
    {
      '@type': 'Question',
      name: 'How common is dysphotopsia after cataract surgery?',
      acceptedAnswer: { '@type': 'Answer', text: 'Positive dysphotopsia (light arcs or streaks) is reported by up to 15% of patients in the early weeks after surgery, though most cases resolve within a few months. Negative dysphotopsia (dark shadows in peripheral vision) is less common, affecting roughly 0.5-3% of patients persistently. The vast majority of dysphotopsia improves or resolves completely as the brain adapts through a process called neuroadaptation.' },
    },
    {
      '@type': 'Question',
      name: 'Does dysphotopsia go away on its own?',
      acceptedAnswer: { '@type': 'Answer', text: 'In most cases, yes. The brain gradually adapts to the new optical system through neuroadaptation. Positive dysphotopsia usually resolves within weeks to a few months. Negative dysphotopsia can take longer, sometimes six months or more, but the majority of cases improve significantly with time. Only a very small percentage of patients have symptoms persistent enough to consider intervention.' },
    },
    {
      '@type': 'Question',
      name: 'Can dysphotopsia be treated if it does not resolve?',
      acceptedAnswer: { '@type': 'Answer', text: 'For persistent negative dysphotopsia that significantly affects quality of life, options include reverse optic capture (repositioning the lens so the optic sits in front of the capsule opening) and, as a last resort, IOL exchange to a lens with a different design. These interventions are rarely needed. Dr. Tokuhara emphasizes thorough pre-operative discussion and careful lens selection to minimize the risk from the start.' },
    },
    {
      '@type': 'Question',
      name: 'Who is at higher risk for dysphotopsia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Risk factors include smaller pupil size (which allows less room for light to clear the lens edge), certain square-edge lens designs, high refractive corrections, and a large difference between the size of the natural lens and the implant. Patients with very light-colored irises may also notice symptoms more readily because their irises transmit more light. Dr. Tokuhara considers these factors during lens selection.' },
    },
  ],
};

export const metadata = {
  title: 'Dysphotopsia After Cataract Surgery: Understanding Light Arcs, Shadows, and What to Expect',
  description: 'A complete guide to dysphotopsia after cataract surgery. What causes light arcs and peripheral shadows, who is at risk, when they resolve, and treatment options. By Dr. Keith Tokuhara, Coachella Valley.',
  alternates: { canonical: '/dysphotopsia-after-cataract-surgery' },
  openGraph: {
    title: 'Dysphotopsia After Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Seeing arcs of light or dark shadows after cataract surgery? Here is what is happening, why it happens, and what to do about it.',
    url: 'https://drtokuhara.com/dysphotopsia-after-cataract-surgery',
  },
};

export default function DysphotopsiaAfterCataractSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground
        src="/media/ambient-glass-horizon.mp4"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '55vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <p style={{fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--oasis)', marginBottom: '16px', fontWeight: 600}}>Unwanted Visual Symptoms After Lens Implantation</p>
          </ScrollReveal>
          <KineticText text="Dysphotopsia After Cataract Surgery" Tag="h1" mode="word" staggerDelay={0.06} />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub" style={{maxWidth: '650px', margin: '16px auto 0'}}>Arcs of light. Dark shadows at the edge of your vision. They are real, they are common, and in most cases, they resolve on their own.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <p className="body-lead">
              "I see a crescent of light on one side." "There is a shadow, like a curtain, at the edge of my vision."
            </p>
          </ScrollReveal>
          <p>
            These are two of the most common concerns I hear in the weeks after cataract surgery. Patients are understandably worried. They had surgery to see better, and now they are seeing something they did not have before.
          </p>
          <p>
            These symptoms have a name: <strong>dysphotopsia</strong>. It is not a sign that something went wrong. It is a consequence of the physics of light passing through an artificial lens that is smaller, thinner, and shaped differently than the natural lens it replaced.
          </p>
          <p>
            Understanding what dysphotopsia is, why it happens, and what to expect can make the difference between weeks of anxiety and the calm patience that allows your brain to do what it does best: adapt.
          </p>
        </div>
      </section>

      {/* THE TWO TYPES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Two Types of <strong>Dysphotopsia</strong></h2>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.15}>
            <StaggerItem>
              <div style={{background: 'var(--white)', padding: '28px 28px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid var(--oasis)'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '12px', color: 'var(--night-horizon)'}}>Positive Dysphotopsia</h3>
                <p style={{marginBottom: '12px'}}>
                  <strong>What you see:</strong> An arc, crescent, or streak of light, usually on the temporal side (toward your ear). Some patients describe it as a bright line or a flash that appears in certain lighting conditions.
                </p>
                <p style={{marginBottom: '12px'}}>
                  <strong>Why it happens:</strong> Light hitting the edge of the lens implant is refracted or reflected internally, creating a visible artifact. Square-edge lens designs, which are standard because they help prevent posterior capsule opacification, are more likely to produce this effect.
                </p>
                <p style={{margin: 0}}>
                  <strong>The good news:</strong> This type almost always resolves within weeks to a few months. Your brain learns to ignore the artifact through neuroadaptation.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{background: 'var(--white)', padding: '28px 28px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid var(--night-horizon)'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '12px', color: 'var(--night-horizon)'}}>Negative Dysphotopsia</h3>
                <p style={{marginBottom: '12px'}}>
                  <strong>What you see:</strong> A dark shadow, crescent, or curtain-like area in your peripheral vision, typically on the nasal side (toward your nose). It can look like something is blocking part of your visual field.
                </p>
                <p style={{marginBottom: '12px'}}>
                  <strong>Why it happens:</strong> This is more complex. The leading theory involves a gap between the edge of the lens implant and the iris, creating a shadow zone on the peripheral retina where light is not reaching. The natural lens was much larger and sat closer to the iris, so this gap did not exist before surgery.
                </p>
                <p style={{margin: 0}}>
                  <strong>The timeline:</strong> Negative dysphotopsia can be more persistent than positive dysphotopsia. Most cases still improve significantly over three to six months. A small number of patients have symptoms that last longer.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* WHY IT HAPPENS - DEEPER EXPLANATION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why Does This <strong>Happen?</strong></h2>
          </ScrollReveal>
          <p>
            Your natural lens is about 9 to 10 millimeters in diameter and sits snugly against the back of the iris. It has a gradual transition zone at its edges. Light passes through it smoothly.
          </p>
          <p>
            An artificial lens implant is typically 6 millimeters across, with well-defined, engineered edges. Those sharp edges serve an important purpose: they create a barrier that slows the migration of cells that would otherwise cloud the capsule behind the lens (posterior capsule opacification). But those same sharp edges also interact with light differently.
          </p>
          <ul className="content-list">
            <li><strong>Light that hits the edge</strong> can be reflected or refracted in unexpected directions, producing visible arcs or streaks (positive dysphotopsia)</li>
            <li><strong>The gap between the lens edge and the iris</strong> can create a zone where light does not reach the peripheral retina, producing the perception of a dark shadow (negative dysphotopsia)</li>
            <li><strong>The capsular bag itself</strong> can act as a secondary optical element, bending light at the lens-capsule interface in ways that contribute to both types</li>
          </ul>
          <p>
            In other words, dysphotopsia is not a defect. It is a trade-off. The lens designs that best prevent complications also create the conditions that make these optical phenomena possible.
          </p>
        </div>
      </section>

      {/* WHO IS AT RISK */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Who Is at <strong>Higher Risk?</strong></h2>
          </ScrollReveal>
          <p>
            Not everyone experiences dysphotopsia. Several factors make it more likely:
          </p>
          <StaggerChildren className="insight-list" staggerDelay={0.1}>
            <StaggerItem>
              <div className="insight-item">
                <strong>Smaller pupil size</strong>
                <p>A smaller pupil means light passes closer to the edge of the lens implant, increasing the likelihood of edge-related optical effects.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>Certain lens designs</strong>
                <p>Square-edge designs (used to prevent PCO) are more associated with dysphotopsia than round-edge designs. Some newer lens platforms have modified edge profiles to reduce this.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>High refractive corrections</strong>
                <p>Patients who need very high or very low power lens implants may have a greater mismatch between lens geometry and the capsular bag, contributing to optical artifacts.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>Large capsular bag relative to implant size</strong>
                <p>When the natural lens was very large and the replacement is standard size, the gap between the lens edge and the iris can be more pronounced.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="insight-item">
                <strong>Light-colored irises</strong>
                <p>Lighter irises transmit more light through the tissue itself, which can amplify the perception of unwanted light phenomena.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* NEUROADAPTATION */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Neuroadaptation: Your Brain's <strong>Built-In Solution</strong></h2>
          </ScrollReveal>
          <p>
            Here is something remarkable about the human visual system: your brain is constantly filtering what you see. Right now, you are not aware of your nose in your visual field, even though it is always there. You do not see the blood vessels on the surface of your own retina, even though they cast shadows on the photoreceptors beneath them.
          </p>
          <p>
            Your brain learns to suppress stable, predictable visual artifacts. This process is called <strong>neuroadaptation</strong>, and it is the primary reason most dysphotopsia resolves without any treatment at all.
          </p>

          <BlurReveal><div className="insight-highlight" style={{marginTop: '24px'}}>
            <p><strong>The timeline varies by individual, but the pattern is consistent. Positive dysphotopsia typically fades within weeks to a few months. Negative dysphotopsia can take three to six months, sometimes longer. The key is patience.</strong></p>
          </div></BlurReveal>

          <p style={{marginTop: '24px'}}>
            I tell my patients: if the symptoms are not interfering with your daily activities, the best treatment is time. Your brain is working on the problem even when you are not thinking about it.
          </p>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">When Symptoms <strong>Persist</strong></h2>
          </ScrollReveal>
          <p>
            For the small percentage of patients whose dysphotopsia does not resolve with time and significantly affects their quality of life, there are options:
          </p>

          <StaggerChildren staggerDelay={0.12}>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>1</div>
                <div>
                  <strong>Observation (most common approach)</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>Because the vast majority of cases improve, waiting is almost always the first recommendation. I follow patients closely and reassess at regular intervals.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>2</div>
                <div>
                  <strong>Reverse optic capture</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>For persistent negative dysphotopsia, the lens optic can be repositioned so it sits in front of the capsule opening rather than behind it. This changes the light dynamics at the lens edge and can eliminate the shadow. It is a less invasive option than full lens exchange.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start'}}>
                <div style={{minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--night-horizon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, flexShrink: 0}}>3</div>
                <div>
                  <strong>IOL exchange (last resort)</strong>
                  <p style={{margin: '4px 0 0', color: 'var(--text-light)', fontSize: '15px'}}>In rare cases where symptoms are debilitating and other options have been exhausted, the lens implant can be exchanged for one with a different edge design or diameter. This is a more complex surgery and is reserved for cases where the impact on quality of life justifies the additional risk.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* DR. T'S APPROACH */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">My Approach: Prevention <strong>Through Preparation</strong></h2>
          </ScrollReveal>
          <p>
            The best way to manage dysphotopsia is to set realistic expectations before surgery. Not every patient will have a perfectly seamless visual transition from natural lens to implant. Most will. But the patients who struggle the most are often those who were never told these symptoms were possible.
          </p>
          <p>
            Here is how I approach it:
          </p>
          <ul className="content-list">
            <li><strong>Thorough pre-operative discussion.</strong> I talk about dysphotopsia with every cataract patient before surgery. Knowing it is a possibility, and knowing it is almost always temporary, makes a significant difference in how patients experience it.</li>
            <li><strong>Careful lens selection.</strong> I consider pupil size, iris color, capsular bag dimensions, and refractive target when choosing a lens. Certain lens platforms have edge profiles that reduce the risk of dysphotopsia, and I factor this into every decision.</li>
            <li><strong>Close follow-up.</strong> If a patient reports dysphotopsia symptoms, I do not dismiss them. I validate what they are seeing, explain the mechanism, and establish a timeline for reassessment.</li>
            <li><strong>Intervention when warranted.</strong> For the rare patient whose symptoms persist and significantly affect daily life, I have the training and experience to perform reverse optic capture or <Link href="/complex-cases" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>lens exchange</Link> when necessary.</li>
          </ul>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The patients who handle dysphotopsia best are the ones who knew it could happen. Not because knowing makes the symptoms less real, but because it removes the fear. Fear amplifies perception. When a patient sees an arc of light and thinks "something is wrong," every glance becomes a test. When that same patient knows "this is a common optical artifact and my brain will learn to tune it out," the arc loses its power. Information is not just a courtesy. It is part of the treatment.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Experiencing Unwanted Visual <strong>Symptoms?</strong></h2>
            <p style={{maxWidth: '520px', margin: '0 auto 32px', color: 'var(--text-light)'}}>If you are seeing arcs of light, streaks, or dark shadows after cataract surgery, a careful evaluation can determine the cause and whether intervention is needed.</p>
          </ScrollReveal>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Learn <strong>More</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Surgery</h3>
              <p>Why you might see rings around lights, and when they resolve.</p>
            </Link>
            <Link href="/blurry-vision-after-cataract-surgery" className="related-card">
              <h3>Blurry Vision After Surgery</h3>
              <p>All the reasons vision can blur after cataract surgery.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>How different lens designs affect your vision.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Complications Guide</h3>
              <p>The comprehensive guide to everything that can happen after surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
