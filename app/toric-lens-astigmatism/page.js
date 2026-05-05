import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is astigmatism and how does it affect vision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astigmatism occurs when the cornea, the clear front surface of the eye, is shaped more like a football than a basketball - curved more steeply in one direction than another. This unequal curvature means light focuses at multiple points rather than one, causing blur and distortion at all distances. Think of looking into a carnival mirror: reflections are stretched and warped rather than clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a toric lens implant reduce astigmatism?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A toric lens implant has different optical power in different meridians, designed to neutralize the unequal curvature of the cornea. During implantation, the lens is rotated to a specific axis where its corrective power aligns precisely with the axis of the corneal astigmatism. This reduces the astigmatism, allowing light to focus more cleanly on the retina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I a candidate for a toric lens even if I have macular degeneration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A toric lens can still reduce astigmatism even in patients with macular degeneration or other retinal conditions. While the macular condition may limit overall visual acuity, reducing astigmatism can still improve the quality of whatever vision is available. The toric lens is often the best option even when posterior segment pathology is present.',
      },
    },
    {
      '@type': 'Question',
      name: 'What measurements are needed before placing a toric lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accurate toric lens placement requires detailed corneal topography to map the shape and axis of the astigmatism, as well as biometry to calculate the correct lens power. I use corneal topography to visualize the characteristic propeller or figure-8 shape of astigmatism, and the Aura measurement system to refine the axis calculations before surgery. On Sunday evenings before surgery, I review each patient\'s measurements personally to confirm the toric axis.',
      },
    },
  ],
};

export const metadata = {
  title: 'Toric Lens Implants: Reducing Astigmatism During Cataract Surgery',
  description: 'Dr. Tokuhara explains toric lens implants - how they reduce astigmatism during cataract surgery, what measurements are required, and who benefits most from this option.',
  alternates: { canonical: '/toric-lens-astigmatism' },
  openGraph: {
    title: 'Toric Lens Implants: Reducing Astigmatism | Dr. Keith Tokuhara',
    description: 'If you have astigmatism, a toric lens implant during cataract surgery may reduce it at the same time. Dr. Tokuhara explains how it works.',
    url: 'https://drtokuhara.com/toric-lens-astigmatism',
  },
};

export default function ToricLensAstigmatismPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-polished-surface.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>Toric Lens Implants <strong>and Astigmatism</strong></h1>
          </ScrollReveal>
          <p className="page-hero-sub">If you have been told you have astigmatism, this page is written for you.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            Astigmatism is one of the most common reasons patients come to me still wearing glasses after cataract surgery at another practice. They had their cataracts removed, they have a lens implant, and yet they still depend on glasses for basic distance vision. Often, the explanation is simple: their astigmatism was never addressed.
          </p>
          <p>
            Cataract surgery gives us a remarkable opportunity. We are already removing the natural lens and placing an implant. That implant can be a standard lens - or it can be a toric lens, specifically designed to reduce the astigmatism that was causing blur before surgery. The decision to use a toric lens takes only a few additional measurements. The difference in outcomes, for the right patient, can be significant.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-sunny-pathway-luxury.jpg" alt="Couple walking a sunny path together - the clear, confident vision a toric lens can restore" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHAT IS ASTIGMATISM */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What <strong>Astigmatism</strong> Actually Is</h2>
          <p>
            Your cornea - the clear dome at the front of your eye - is ideally shaped like the surface of a perfect sphere: curved equally in all directions. In a cornea with astigmatism, the curvature is unequal. It is steeper in one meridian and flatter in another, more like the side of a football than a basketball.
          </p>
          <p>
            The best analogy I have found is a carnival mirror. When you stand in front of a flat mirror, the reflection is accurate. When the mirror is warped or curved unevenly, the reflection stretches and distorts - features become elongated, proportions are wrong. Your vision through a cornea with significant astigmatism has something of that quality. Things are not simply blurry in the way a weak prescription would make them blurry. They are distorted, smeared, oriented along a particular axis.
          </p>
          <p>
            The axis matters, and it is specific to each person. When I look at a corneal topography map of a patient with astigmatism, I see a characteristic shape: a propeller, or a figure-8, with two zones of steep curvature running along a consistent axis. That axis is exactly what we need to target.
          </p>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/uCbLzD-KXe4"
              title="Toric Lens Implants and Astigmatism - Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p style={{fontSize: '14px', color: 'var(--text-light)', marginTop: '8px'}}>My full explanation of toric lenses - including the corneal topography images that show the propeller shape of astigmatism.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <LineDraw />
        </div>
      </section>

      {/* HOW TORIC LENSES WORK */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How a Toric Lens <strong>Reduces Astigmatism</strong></h2>
          <p>
            A toric lens implant is built with a specific optical profile: it has more refractive power in one meridian than another. This asymmetry is intentional. It is designed to neutralize the asymmetry of the cornea.
          </p>
          <p>
            During implantation, I do not simply place the lens. I rotate it to a very specific angle - the axis where its corrective power aligns with the steep meridian of the corneal astigmatism. At that angle, the lens and the cornea work together rather than against each other. The result is that astigmatism is reduced, and vision at distance is clearer without glasses.
          </p>
          <p>
            The word I use deliberately here is <em>reduces</em>. A toric lens reduces astigmatism. It works with the geometry of your cornea, and the degree of reduction depends on accurate measurements, careful alignment during surgery, and a lens cylinder that closely matches your corneal astigmatism. It is not a guarantee of zero astigmatism. But for most patients with meaningful astigmatism, the toric lens produces a significant improvement.
          </p>

          <BlurReveal className="pull-quote">
            <p>"I review every toric lens patient's measurements myself on Sunday evenings before their Monday surgery. The axis is everything. A toric lens placed at the wrong angle does not reduce astigmatism - it changes it. This is not the kind of planning I delegate."</p>
          </BlurReveal>
        </div>
      </section>

      {/* MEASUREMENTS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Planning <strong>Process</strong></h2>
          <p>
            Getting a toric lens right starts with getting the measurements right. Two are essential.
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <p><strong>Corneal topography</strong> maps the shape of your cornea in precise detail. I look for the propeller or figure-8 pattern that indicates astigmatism, and I identify the axis - the direction the steep curvature runs. This tells me where the toric lens needs to be oriented.</p>
            </div>
            <div className="insight-item">
              <p><strong>The Aura measurement system</strong> refines the axis calculation. It gives me a second, independent data source to cross-check against the topography. When both measurements agree, I have confidence in the axis. When they differ, I investigate why before I proceed.</p>
            </div>
          </div>
          <p>
            Then, on Sunday evenings before my Monday surgeries, I sit down with each patient's file. I look at the topography, check the Aura data, confirm the toric axis, and enter the final lens parameters. This is planning I do personally, not something that gets handed off. The toric lens calculation is too important to rush through.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-group-tennis-sunny.jpg" alt="Group playing tennis on a sunny day - the active lifestyle that clear, astigmatism-free vision supports" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Who Benefits from <strong>a Toric Lens</strong></h2>
          <p>
            A toric lens is worth considering if:
          </p>
          <ul className="content-list">
            <li>You have been told you have astigmatism of 0.75 diopters or more</li>
            <li>You currently wear glasses or toric contact lenses that address your astigmatism</li>
            <li>You want to reduce your dependence on distance glasses after cataract surgery</li>
            <li>Your topography shows consistent, well-defined astigmatism on a clear axis</li>
          </ul>

          <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>What about macular degeneration or other retinal conditions?</h3>
          <p>
            This is a question I hear often. Patients who have macular degeneration or other retinal pathology sometimes assume that a toric lens is not worth it - that the premium option does not apply to them because their underlying condition limits their vision anyway.
          </p>
          <p>
            I disagree with that framing. A toric lens reduces astigmatism regardless of what is happening at the macula. Whatever vision is available through a macular condition, it will be clearer without astigmatism than with it. The toric lens is often the best option even when posterior segment pathology is present. Reducing one source of optical degradation is still worth doing, even when another source cannot be eliminated.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Patients often come to me for a second opinion after cataract surgery elsewhere, frustrated that they are still wearing glasses. When I ask about their astigmatism, they sometimes say, "nobody told me I had astigmatism." I look at their topography and the propeller shape is right there, obvious. It was measurable before surgery. The toric option was available. It just was not offered, or was not explained clearly. This is exactly the kind of gap I am trying to close with pages like this one. If you know you have astigmatism, ask about toric lenses. It is a reasonable question, and it deserves a complete answer.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>The full range of lens options - monofocal, toric, EDOF, and multifocal - and how we choose together.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What the procedure involves from start to finish, including how lens selection fits into the process.</p>
            </Link>
            <Link href="/understand-your-options" className="related-card">
              <h3>Understand Your Options</h3>
              <p>A guided look at the decisions you will make before cataract surgery, and how to think through them.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
