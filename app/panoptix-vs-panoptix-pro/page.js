import Link from 'next/link';
import { breadcrumbSchema } from '../schema';
import Image from 'next/image';
import {
  ScrollReveal,
  LineDraw,
  VideoBackground,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between PanOptix and PanOptix Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PanOptix Pro is the next generation of Alcon\'s trifocal lens. Both share the same three focal points (distance, 60 cm intermediate, and 40 cm near). The Pro version gets more light to the retina, reduces light scatter, improves contrast sensitivity, and adds enhanced UV and blue-violet light filtering. Patients can achieve 20/20 at all three distances with the Pro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I exchange my PanOptix for a PanOptix Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you already have PanOptix and are happy with your vision, there is no medical reason to exchange the lens. Lens exchange carries surgical risks, and the improvement from original to Pro, while real, is not dramatic enough to justify an operation for a satisfied patient. If you are scheduling cataract surgery now, the PanOptix Pro is the current standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who was the first surgeon to implant PanOptix Pro in the Coachella Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Keith Tokuhara at Desert Vision Center in Rancho Mirage was the first surgeon in the Coachella Valley to implant the PanOptix Pro lens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a good candidate for PanOptix Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PanOptix Pro is appropriate for patients with healthy corneas, stable tear film, no significant macular disease, and realistic expectations. The candidacy criteria are the same as for the original PanOptix. Conditions such as corneal irregularity, epiretinal membrane, or significant dry eye may limit performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PanOptix Pro a trifocal lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PanOptix Pro is a trifocal intraocular lens made by Alcon. It provides three focal points: distance, 60 cm (intermediate), and 40 cm (near). The Pro version refines the light management of the original design but retains the same trifocal architecture.',
      },
    },
  ],
};

export const metadata = {
  title: 'PanOptix vs PanOptix Pro: What Changed and Does It Matter?',
  description: 'Dr. Tokuhara was the first surgeon in the Coachella Valley to implant the PanOptix Pro. An honest comparison of both generations, what improved, and whether it matters for your surgery.',
  alternates: { canonical: '/panoptix-vs-panoptix-pro' },
  openGraph: {
    title: 'PanOptix vs PanOptix Pro | Dr. Keith Tokuhara',
    description: 'A real-world comparison of both generations of Alcon\'s trifocal lens, including a patient who has one of each.',
    url: 'https://drtokuhara.com/panoptix-vs-panoptix-pro',
  },
};


const pageBreadcrumbs = breadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'PanOptix vs PanOptix Pro', href: '/panoptix-vs-panoptix-pro' },
]);

export default function PanOptixVsPanOptixPro() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <VideoBackground src="/media/ambient-glass-horizon.mp4" overlayOpacity={0.6} overlayColor="0, 20, 30" className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>PanOptix vs <strong>PanOptix Pro</strong></h1></ScrollReveal>
          <p className="page-hero-sub">Same trifocal architecture. A meaningful optical refinement. Here is what actually changed, and whether it matters for your surgery.</p>
        </div>
      </VideoBackground>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            I was the first surgeon in the Coachella Valley to implant the PanOptix Pro. That distinction came with an early clinical education, including a patient who had the original PanOptix in one eye and the Pro in the other, and could compare both directly within 24 hours of her second surgery.
          </p>
          <p>
            That comparison is worth sharing in detail. But first, the basics.
          </p>
          <p>
            Both lenses are made by Alcon. Both are trifocal intraocular lenses. Both deliver three focal points: distance, 60 cm for intermediate tasks like a computer screen or dashboard, and 40 cm for near work like reading. The architecture is the same. What improved in the Pro is in the optics themselves.
          </p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-sunny-pathway-luxury.jpg" alt="Couple walking together outdoors at a resort - clear vision for an active lifestyle" width={1920} height={400} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* WHAT THEY SHARE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Both Lenses <strong>Share</strong></h2>
          <p>
            Before getting into what changed, it helps to understand what did not. PanOptix and PanOptix Pro are both trifocal lenses built on the same fundamental design. Everything on this list applies to both generations:
          </p>
          <ul className="content-list">
            <li>Three distinct focal points: distance, 60 cm intermediate, and 40 cm near</li>
            <li>Reduces dependence on glasses for most daily activities</li>
            <li>Made by Alcon with a well-established safety and efficacy record</li>
            <li>Requires a healthy cornea, stable tear film, and no significant macular disease</li>
            <li>Some patients notice halos or glare at night, especially in the first few months</li>
            <li>Brain adaptation typically occurs over weeks to months</li>
          </ul>
          <p style={{marginTop: '16px'}}>
            If your eye is not a good candidate for PanOptix, it is not a good candidate for PanOptix Pro either. The clinical requirements are identical.
          </p>
        </div>
      </section>

      {/* WHAT CHANGED IN THE PRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What the Pro <strong>Improved</strong></h2>
          <p>
            The PanOptix Pro is not a rebrand or a marketing update. The changes are optical and measurable:
          </p>

          <div className="compare-grid" style={{marginTop: '32px'}}>
            <div style={{background: 'var(--white)', padding: '28px', borderRadius: '12px', borderTop: '3px solid var(--night-horizon)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--night-horizon)', marginBottom: '12px'}}>PanOptix (Original)</h3>
              <ul style={{fontSize: '15px', lineHeight: '1.8', color: 'var(--text)', paddingLeft: '20px'}}>
                <li>Trifocal: distance, 60 cm, 40 cm</li>
                <li>Strong near and intermediate vision</li>
                <li>Standard UV filtering</li>
                <li>Proven long-term track record</li>
              </ul>
            </div>
            <div style={{background: 'var(--white)', padding: '28px', borderRadius: '12px', borderTop: '3px solid var(--canyon)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--canyon)', marginBottom: '12px'}}>PanOptix Pro</h3>
              <ul style={{fontSize: '15px', lineHeight: '1.8', color: 'var(--text)', paddingLeft: '20px'}}>
                <li>More light reaching the retina</li>
                <li>Less light scatter, improved contrast sensitivity</li>
                <li>Enhanced UV and blue-violet light filtering</li>
                <li>20/20 achievable at all three distances</li>
              </ul>
            </div>
          </div>

          <p style={{marginTop: '24px'}}>
            More light reaching the retina translates to brighter, clearer images. Less scatter means fewer halos under comparable conditions. The blue-violet filtering is built into the lens material itself. Together, these refinements represent a genuine improvement in visual quality.
          </p>
        </div>
      </section>

      {/* REAL PATIENT STORY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">A Patient Who Has <strong>Both</strong></h2>
          <p>
            One of my patients had the original PanOptix implanted in her right eye by a different surgeon. She was happy with the lens but not with the experience at that practice. When it came time for her left eye, she came to Desert Vision Center. By that point, the PanOptix Pro had just launched.
          </p>
          <p>
            After a thorough consultation, she decided to go with the Pro in her left eye. Within 24 hours, she noticed the difference.
          </p>
          <div className="clinic-thought" style={{marginTop: '24px'}}>
            <p>
              <em>"If I look through just my right eye, it is a little duller. If I close my right eye and look through my left, there is a brightness, a clearness, a sharper image. I am thrilled."</em>
            </p>
          </div>
          <p style={{marginTop: '16px'}}>
            That firsthand side-by-side comparison is rare. It confirms what the engineering data suggests: the Pro is a meaningful refinement, not just a version number update.
          </p>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/Yomf55PktXU"
              title="PanOptix vs PanOptix Pro - Patient Testimonial"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SHOULD YOU UPGRADE */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Should You <strong>Upgrade?</strong></h2>
          <p>
            This question comes up regularly, especially from patients who had the original PanOptix and are now hearing about the Pro.
          </p>

          <LineDraw />

          <div style={{marginTop: '32px', marginBottom: '32px'}}>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '12px'}}>If you already have PanOptix and are happy:</h3>
            <p>
              There is no medical reason to exchange the lens. Lens exchange is a real surgical procedure with its own risks, including potential capsular damage and refractive surprises. The improvement from original to Pro is real but incremental. For a satisfied patient, the risk-benefit calculation does not support surgery.
            </p>
          </div>

          <div>
            <h3 style={{fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '12px'}}>If you are scheduling cataract surgery now:</h3>
            <p>
              The PanOptix Pro is the current standard. If you are a good candidate for a trifocal lens, there is no reason to choose the earlier generation. The Pro is what I implant today, and it represents a real improvement over an already excellent lens.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-poolside-resort.jpg" alt="Seniors relaxing by the pool at a desert resort - the active lifestyle clear vision supports" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* NOT FOR EVERYONE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Not Every Eye Is a <strong>Candidate</strong></h2>
          <p>
            PanOptix Pro carries the same candidacy requirements as the original. A thorough pre-operative evaluation is essential before recommending it. Conditions that can limit the performance of this lens include:
          </p>
          <ul className="content-list">
            <li>Corneal irregularity or scarring</li>
            <li>Significant dry eye disease</li>
            <li>Epiretinal membrane</li>
            <li>Macular degeneration</li>
            <li>Advanced glaucoma</li>
            <li>Diabetic retinopathy</li>
          </ul>
          <p>
            If your eye does not meet the candidacy criteria for a trifocal lens, alternatives like the Vivity Extended Depth of Focus lens or a well-targeted monofocal can still deliver excellent outcomes. The goal is always the right lens for your eye, not the newest lens on the shelf.
          </p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-seniors-formal-resort-dusk.jpg" alt="Seniors enjoying an evening out at a resort - the social moments that depend on clear vision" width={1920} height={400} style={{width: "100%", height: "auto"}} />
        </div>
      </section>

      {/* FIRST IN CV + VIDEO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">First in the <strong>Coachella Valley</strong></h2>
          <p>
            I was the first surgeon in the Coachella Valley to implant the PanOptix Pro. That early access gave me more cases and more follow-up data before most surgeons in this region had completed their first implant. I have seen how this lens performs across a wide range of prescriptions, corneal shapes, and patient expectations.
          </p>
          <p>
            That clinical depth is what guides my recommendations. Not a product brochure alone, and not a single conference abstract.
          </p>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/i7ME2ufk1iM"
              title="First PanOptix Pro Implanted in the Coachella Valley"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The question patients often ask is "Pro or original?" But the more important question is "Is a trifocal lens right for this eye?" Get that right and the generation question takes care of itself. If a trifocal is the correct choice, the Pro is what I use. If a trifocal is not the correct choice, no version of it will perform the way we both want it to.</em>
            </p>
          </div>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix</h3>
              <p>Extended Depth of Focus or trifocal? How to choose between two premium lens approaches.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>All Lens Options Explained</h3>
              <p>Monofocal, toric, Extended Depth of Focus, and multifocal. The full picture.</p>
            </Link>
            <Link href="/halos-after-cataract-surgery" className="related-card">
              <h3>Halos After Cataract Surgery</h3>
              <p>What causes them, how long they last, and when to be concerned.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
