import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
} from '../components/ScrollAnimations';

const jsonLd = [
  articleSchema({
    title: 'The Clareon Lens: Next-Generation Lens Material for Cataract Surgery',
    description: 'Dr. Tokuhara was the first surgeon in the Coachella Valley to use the Clareon lens and Autonomy delivery system. Learn what makes this biomaterial and delivery approach different.',
    slug: '/clareon-lens',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Lens Implants Explained', href: '/lens-implants-explained' },
    { name: 'Clareon Lens', href: '/clareon-lens' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Clareon lens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Clareon is an intraocular lens made from a next-generation hydrophobic acrylic biomaterial. It features an engineered edge design that reduces optical artifacts like glare, glistenings, and dysphotopsia compared to older lens materials.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Autonomy delivery system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Autonomy preloaded delivery system uses compressed CO2 to deliver the Clareon lens with a single-handed press of a button. This eliminates the manual lens-folding and two-handed loading required by older delivery systems, reducing the risk of lens handling damage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Clareon lens the same power as the AcrySof lens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Clareon shares the same A-constant as the AcrySof aspheric lens, which has been used for over a decade. This means surgeons can use the same power calculations they have refined over years without adjustment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the Clareon lens reduce dysphotopsia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Clareon biomaterial and its engineered edge design are intended to reduce glistenings, positive dysphotopsia (arcs and streaks of light), and edge glare. Clinical data supports improved optical quality compared to older acrylic lens materials.',
        },
      },
    ],
  },
];

export const metadata = {
  title: 'The Clareon Lens: Next-Generation Lens Material for Cataract Surgery',
  description: 'Dr. Tokuhara was the first in the Coachella Valley to use the Clareon lens and Autonomy delivery system. Learn what makes this biomaterial and delivery approach different.',
  alternates: { canonical: '/clareon-lens' },
  openGraph: {
    title: 'Clareon Lens | Dr. Keith Tokuhara',
    description: 'A next-generation lens material with engineered edge design and single-handed delivery. First used in the Coachella Valley by Dr. Tokuhara.',
    url: 'https://drtokuhara.com/clareon-lens',
  },
};

export default function ClareonLens() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <section className="page-hero page-hero-image" style={{ background: 'linear-gradient(135deg, #0a1a24 0%, #07424e 100%)', minHeight: '45vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <h1>The <strong>Clareon Lens</strong></h1>
            <p className="page-hero-sub">A next-generation biomaterial with engineered edge design. I was the first surgeon in the Coachella Valley to use it, and I have not looked back.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <p className="body-lead">
            Every generation of lens material is a step forward. The Clareon represents Alcon's current best in hydrophobic acrylic biomaterial, and the Autonomy preloaded delivery system that comes with it changes how the lens reaches the eye during surgery.
          </p>
          <p>
            I was the first surgeon in the Coachella Valley to use the Clareon lens with the Autonomy delivery system. Being early to new technology is not something I do for novelty. I do it because I evaluate the clinical evidence first, and when the evidence supports a change, I make it. In this case, the change is meaningful in two distinct ways: the material itself, and the way it is delivered.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-outdoor-sunshine.jpg" alt="Couple enjoying the outdoors - the clear, artifact-free vision the Clareon lens is designed to deliver" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* THE MATERIAL */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">The <strong>Biomaterial</strong></h2>
          </ScrollReveal>
          <p>
            The Clareon lens is made from a hydrophobic acrylic biomaterial engineered to reduce two of the most common optical artifacts associated with older acrylic lenses: glistenings and dysphotopsia.
          </p>
          <p>
            Glistenings are microvacuoles that can form within the lens body over time, causing light scatter that degrades contrast. The Clareon material is more resistant to glistening formation than earlier hydrophobic acrylics, which is particularly relevant for patients who have decades ahead of them after surgery.
          </p>
          <p>
            Dysphotopsia refers to unwanted optical phenomena patients sometimes experience after cataract surgery, including arcs, streaks, or edges of light in peripheral vision. The Clareon's square-edge design is engineered to reduce the optical edge effects that contribute to this experience. Patients troubled by positive dysphotopsia are among those who benefit most from this design.
          </p>
          <BlurReveal>
            <div className="clinic-thought">
              <h3>A note on A-constants</h3>
              <p>
                <em>The Clareon shares the same A-constant as the AcrySof aspheric lens I have used for over a decade. That matters for surgeons who have built highly refined calculation algorithms based on their own outcome data. Moving to Clareon does not require recalibrating those formulas. The lens fits seamlessly into the precision workflow we already use.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* DELIVERY SYSTEM COMPARISON */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Old System vs. <strong>Autonomy</strong></h2>
          </ScrollReveal>
          <p>
            The way a lens is loaded and inserted matters more than most patients realize. Every step of handling introduces a small risk of damage to the lens or the eye. Simpler, more controlled delivery reduces that risk.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '32px 0' }}>
            <div className="lens-tradeoff" style={{ margin: 0 }}>
              <p><strong>Old system (Monarch)</strong></p>
              <p>Fold the lens manually, load the cartridge by hand, insert the loaded cartridge into the Monarch injector, advance the lens using a two-handed screw mechanism. Requires meticulous setup and precise coordination at a critical moment in surgery.</p>
            </div>
            <div className="lens-tradeoff" style={{ margin: 0 }}>
              <p><strong>Autonomy system</strong></p>
              <p>Snap the preloaded cartridge into the injector, press one button. Compressed CO2 propels the lens through the wound. One-handed delivery. No manual lens-folding. No two-handed coordination required.</p>
            </div>
          </div>
          <p>
            The Autonomy system opens faster and does not stick during delivery. In practice, this translates to a smoother wound passage and a more predictable unfolding inside the eye. Less handling at every step means less opportunity for damage and less surgical time at the most critical phase of the procedure.
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Watch: <strong>Clareon in the OR</strong></h2>
          </ScrollReveal>
          <p>In this video I walk through the Clareon lens and Autonomy delivery system, including a comparison with the older loading method and what you can see inside the eye.</p>
          <div className="video-wrapper" style={{ marginTop: '24px' }}>
            <iframe
              src="https://www.youtube.com/embed/85V5DGG6Rw0"
              title="Clareon Lens: Cataract Surgery with Dr. Tokuhara"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-outdoor-toast.jpg" alt="Seniors raising a toast outdoors - celebrating clear, comfortable vision for years to come" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Why This <strong>Matters for Patients</strong></h2>
          </ScrollReveal>
          <p>
            Most patients never see the delivery system. They are not in the room when the lens is loaded. But the consequences of how a lens is handled reach them in recovery, and in the years that follow.
          </p>
          <div style={{ margin: '24px 0' }}>
            <BlurReveal>
              <p style={{ marginBottom: '16px' }}>
                <strong>Fewer optical artifacts.</strong><br />
                The Clareon biomaterial and edge design reduce the likelihood of glistenings and dysphotopsia, which can appear years after surgery with older lens materials. Patients are not aware of these risks at the time of surgery. Preventing them matters.
              </p>
            </BlurReveal>
            <BlurReveal>
              <p style={{ marginBottom: '16px' }}>
                <strong>Less lens handling, less risk.</strong><br />
                The preloaded Autonomy system eliminates the manual folding and loading steps that introduce the most variability into delivery. A simpler process is a safer process. This is not a small thing during surgery.
              </p>
            </BlurReveal>
            <BlurReveal>
              <p style={{ marginBottom: '0' }}>
                <strong>Faster, smoother surgery.</strong><br />
                Single-handed delivery shortens the most technically demanding phase of the procedure. Less time with an instrument in the eye is always better for both the surgeon and the patient.
              </p>
            </BlurReveal>
          </div>
          <div className="pull-quote">
            <p>Moving to the Clareon was not a marketing decision. It was a clinical one. The evidence supported it, the delivery was better, and the results have confirmed it was the right move.</p>
          </div>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-patio-scenic-view.jpg" alt="Couple enjoying a scenic view from their patio - the vivid, clear world a quality lens implant reveals" width={1920} height={400} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* CTA */}
      <section className="section section-warm">
        <div className="container content-narrow" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to <strong>Discuss Your Options?</strong></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            If you are considering cataract surgery, the lens choice is one of the most important parts of the conversation. I am happy to walk through all the options with you.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/lens-implants-explained" className="btn-secondary">All Lens Options</Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Related <strong>Reading</strong></h2>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>The full breakdown of monofocal, toric, Extended Depth of Focus, and multifocal lens options with honest tradeoffs.</p>
            </Link>
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>What happens before, during, and after surgery at Desert Vision Center.</p>
            </Link>
            <Link href="/laser-cataract-surgery" className="related-card">
              <h3>Laser Cataract Surgery</h3>
              <p>How laser technology adds precision to the incision and fragmentation steps of cataract surgery.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
