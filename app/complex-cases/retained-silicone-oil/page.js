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
    title: 'Retained Silicone Oil After Retina Surgery',
    description: 'Silicone oil used in retina surgery can cause cataracts, glaucoma, and visual disturbance. Dr. Tokuhara explains management options including combined removal and cataract surgery.',
    slug: '/complex-cases/retained-silicone-oil',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Retained Silicone Oil', href: '/complex-cases/retained-silicone-oil' },
  ]),
];

export const metadata = {
  title: 'Retained Silicone Oil After Retina Surgery - Cataract and Complication Management',
  description: 'Silicone oil from retina surgery can cause cataracts, emulsification, and glaucoma. Learn how Dr. Tokuhara manages these complex post-retina surgery complications.',
  alternates: { canonical: '/complex-cases/retained-silicone-oil' },
  openGraph: {
    title: 'Retained Silicone Oil Management | Dr. Keith Tokuhara',
    description: 'Expert management of retained silicone oil complications at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/retained-silicone-oil',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "What happens when silicone oil remains after retina surgery?", acceptedAnswer: { '@type': 'Answer', text: "Silicone oil is sometimes left in the eye long-term after complex retinal detachment repair. It can accelerate cataract formation and affect lens implant calculations. Cataract surgery in these eyes requires specialized techniques and careful management of the oil-eye interface." } },
    { '@type': 'Question', name: "Can cataract surgery be performed with silicone oil in the eye?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Dr. Tokuhara has experience performing cataract surgery in eyes with retained silicone oil. The procedure requires modified techniques and specialized lens calculations to account for the oil's optical properties. His dual fellowship in cataract and retina surgery provides the expertise needed for these complex cases." } }
  ],
};

export default function RetainedSiliconeOilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Retained Silicone Oil After <strong>Retina Surgery</strong></h1>
          <p className="page-hero-sub">The oil that saved your retina may now be causing new problems. Understanding your options is the first step.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">What Silicone Oil <strong>Does</strong></h2>
          <p className="prose">
            Silicone oil is a remarkable tool in retina surgery. When a patient has a complex retinal detachment, the retina surgeon may inject silicone oil into the eye to tamponade the retina - essentially holding it flat against the back wall of the eye while it heals. For many patients, silicone oil is the difference between saving their vision and losing it.
          </p>
          <p className="prose">
            But silicone oil was never meant to stay in the eye permanently. Over time, it can cause several complications:
          </p>
          <ul className="content-list">
            <li><strong>Cataract formation:</strong> Contact between silicone oil and the natural lens accelerates cataract development. This is the most common complication and the most frequent reason post-oil patients come to see me.</li>
            <li><strong>Emulsification:</strong> Over months or years, the oil can break down into tiny droplets that disperse throughout the eye. These emulsified oil droplets can migrate into the anterior chamber, coat the lens implant (if surgery has already been done), clog the drainage system, and cause chronic inflammation.</li>
            <li><strong>Glaucoma:</strong> Silicone oil can elevate intraocular pressure, either by physically blocking the drainage angle or through inflammatory mechanisms. This can damage the optic nerve over time.</li>
            <li><strong>Corneal damage:</strong> In eyes where the oil contacts the corneal endothelium (the inner surface of the cornea), there can be progressive endothelial cell loss, leading to corneal edema and vision loss.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-produce-market.jpg"
              alt="Couple shopping at a produce market - getting back to daily life after complex eye surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">The Surgical <strong>Approach</strong></h2>
          <p className="prose">
            Managing retained silicone oil often requires a coordinated approach between anterior segment surgery (what I do) and posterior segment surgery (what a retina specialist does). Depending on the situation, the plan may involve:
          </p>
          <ul className="content-list">
            <li><strong>Silicone oil removal:</strong> This is a vitreoretinal procedure. It may be done alone or combined with cataract surgery in a single session, depending on the surgical team and the patient's needs.</li>
            <li><strong>Cataract surgery with oil in place:</strong> In some cases, the retina surgeon determines that the oil should remain (either the retina is not stable enough for removal, or the patient declines further posterior surgery). Cataract surgery can still be performed with oil present, but it requires modifications to technique and IOL calculations.</li>
            <li><strong>Management of emulsified oil:</strong> If the oil has emulsified, I may need to remove oil droplets from the anterior chamber and clean the angle to manage pressure.</li>
            <li><strong>Secondary lens implantation:</strong> If the patient is aphakic (has no lens implant) after their retina surgery and oil removal, I can place a secondary lens using techniques like the Yamane flanged intrascleral fixation.</li>
          </ul>

          <h2 className="section-title">My Retina Training <strong>Advantage</strong></h2>
          <p className="prose">
            Because I am fellowship-trained in both cataract surgery and retina, I understand what the silicone oil is doing in the eye, why it was placed, and what the implications are for any anterior segment surgery. I can read the retina, assess its stability, and communicate effectively with the retina surgeon about timing and coordination. This is not a case where a cataract surgeon who does not understand the posterior segment can safely operate without that perspective.
          </p>
          <p className="prose">
            If you have silicone oil in your eye and are dealing with vision problems, elevated pressure, or cataracts, I can evaluate the situation comprehensively and work with your retina specialist to create a coordinated plan.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have silicone oil in your eye and experiencing <strong>complications?</strong></h2>
          <p>I understand both sides of your eye. Let&rsquo;s assess the situation and coordinate a plan with your retina team.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
