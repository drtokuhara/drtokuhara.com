import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Aphakia After Retina Surgery - Secondary Lens Implantation with the Yamane Technique',
    description: 'Left without a lens after retina surgery? Dr. Tokuhara explains how secondary lens implantation using the Yamane technique can restore focus and change your life.',
    slug: '/complex-cases/aphakia-after-retina',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Aphakia After Retina Surgery', href: '/complex-cases/aphakia-after-retina' },
  ]),
];

export const metadata = {
  title: 'Aphakia After Retina Surgery - Yamane Secondary Lens Implantation',
  description: 'Left without a lens implant after retina surgery? Secondary lens implantation using the Yamane technique can restore focus. Dr. Tokuhara was the first in the Coachella Valley to perform this technique.',
  alternates: { canonical: '/complex-cases/aphakia-after-retina' },
  openGraph: {
    title: 'Secondary Lens Implantation After Retina Surgery | Dr. Keith Tokuhara',
    description: 'Yamane technique for aphakic eyes after retina surgery. First in the Coachella Valley. Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/aphakia-after-retina',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "What is aphakia after retina surgery?", acceptedAnswer: { '@type': 'Answer', text: "Aphakia means the eye has no lens implant. This can occur when a lens implant cannot be placed during the original surgery, when the lens dislocates after retina surgery, or when the lens must be removed to treat a retinal problem. Secondary lens implantation can restore focused vision." } },
    { '@type': 'Question', name: "Can a lens implant be placed after retina surgery?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Secondary intraocular lens implantation is possible even in complex eyes that have had retina surgery. Techniques like the Yamane intrascleral fixation method allow lens placement without relying on capsule support. Dr. Tokuhara's dual training in cataract and retina surgery is particularly valuable for these cases." } }
  ],
};

export default function AphakiaAfterRetinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Aphakia After <strong>Retina Surgery</strong></h1>
          <p className="page-hero-sub">Left without a lens implant after a complex retina procedure? The Yamane technique can restore your focus.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">What Is <strong>Aphakia?</strong></h2>
          <p className="prose">
            Aphakia means being without a lens. After complex retina surgery - especially cases involving retinal detachment repair, vitrectomy with silicone oil, or complicated cases where the lens capsule was damaged - some patients are left without a lens implant. The natural lens may have been removed during the retina procedure, or the capsular bag that would normally hold a lens implant may have been damaged or removed entirely.
          </p>
          <p className="prose">
            Without a lens, the eye cannot focus. Vision is extremely blurry at all distances. Patients are typically left wearing very thick, heavy glasses (aphakic spectacles) or a contact lens. For many patients, especially elderly ones, this is impractical, uncomfortable, and isolating. The weight and distortion of aphakic glasses, the difficulty of handling contact lenses, and the loss of binocular vision (since the other eye usually has a lens) make this situation genuinely debilitating.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-night-walk-dog.jpg"
              alt="Couple walking their dog at night - restored vision and restored independence"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">The Yamane <strong>Technique</strong></h2>
          <p className="prose">
            The Yamane flanged intrascleral fixation technique is a modern, sutureless method for placing a lens implant in an eye that has no capsular bag to hold it. I thread the haptics (the thin arms of the lens implant) through small tunnels in the sclera (the white wall of the eye), then create small flanges at the ends that lock the lens securely in place. No sutures are needed, and the lens is centered and stable.
          </p>
          <p className="prose">
            I was the first surgeon in the Coachella Valley to perform the Yamane technique. It has become my preferred approach for secondary lens implantation because of its reliability, stability, and minimal tissue disruption.
          </p>
          <p className="prose">
            Compared to older techniques like iris-sutured or scleral-sutured lenses, the Yamane technique offers several advantages:
          </p>
          <ul className="content-list">
            <li>No sutures to erode, break, or cause irritation over time</li>
            <li>Better long-term lens centration and stability</li>
            <li>Lower risk of suture-related complications like endophthalmitis</li>
            <li>Faster recovery and less postoperative inflammation</li>
          </ul>

          <h2 className="section-title">The Life-Changing <strong>Impact</strong></h2>
          <p className="prose">
            I want to be direct about what this surgery means for patients. Going from aphakia - wearing thick glasses, struggling to see, unable to drive, feeling dependent on others - to having a properly centered lens implant inside the eye is transformative. Patients regain functional vision. They can see clearly without heavy glasses. Their two eyes can work together again.
          </p>
          <p className="prose">
            I have had patients cry in the exam chair the day after this surgery. Not because of pain, but because they can see their grandchildren's faces for the first time in years. That is not an exaggeration. That is the reality of what secondary lens implantation does for people who thought they had no options left.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-group-cafe-outdoor.jpg"
              alt="Group of friends enjoying an outdoor cafe - social connection restored with clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Coordination with Your <strong>Retina Specialist</strong></h2>
          <p className="prose">
            Before I place a secondary lens, the retina must be stable. I evaluate the retinal status carefully and coordinate with your retina surgeon to confirm that the eye is ready. If silicone oil is still present, it may need to be removed before or during the lens implantation. If there is residual retinal pathology, I wait until the retina is stable and the risk of further intervention is low.
          </p>
          <p className="prose">
            My dual training in cataract surgery and retina means I can assess the posterior segment myself, rather than relying entirely on another surgeon's report. I know what I am looking at, and I know when the eye is ready.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Left without a lens after retina surgery? <strong>There are options.</strong></h2>
          <p>The Yamane technique can restore your focus and your independence. Let&rsquo;s evaluate your eye and discuss what&rsquo;s possible.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
