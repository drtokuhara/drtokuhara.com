import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery After LASIK',
    description: 'Prior LASIK changes how lens implant power is calculated. Dr. Tokuhara explains the challenges and how to avoid refractive surprises.',
    slug: '/complex-cases/previous-lasik',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'After LASIK', href: '/complex-cases/previous-lasik' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery After LASIK - Avoiding Refractive Surprises',
  description: 'LASIK changes your cornea permanently, making IOL calculations for cataract surgery more complex. Learn how Dr. Tokuhara uses advanced formulas and manages expectations for post-LASIK patients.',
  alternates: { canonical: '/complex-cases/previous-lasik' },
  openGraph: {
    title: 'Cataract Surgery After LASIK | Dr. Keith Tokuhara',
    description: 'Post-LASIK eyes need modified IOL calculations to avoid refractive surprises. Expert planning at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/previous-lasik',
  },
};

export default function PreviousLasikPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Cataract Surgery After <strong>LASIK</strong></h1>
          <p className="page-hero-sub">Your LASIK was a great decision then. Now it adds a layer of complexity that requires careful planning.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">The <strong>Problem</strong></h2>
          <p className="prose">
            LASIK works by reshaping your cornea to correct your vision. It does this beautifully, and millions of people have benefited from it. But that reshaped cornea creates a specific problem when it comes time for cataract surgery years later: the standard formulas used to calculate lens implant power do not work correctly on corneas that have been altered by LASIK.
          </p>
          <p className="prose">
            Here is why. Lens implant calculations depend on accurate corneal curvature measurements to predict how light will bend through the new lens. Standard instruments measure the front surface of the cornea and use a mathematical assumption about the relationship between the front and back surfaces. LASIK changes the front surface but not the back, breaking that assumption. The result is that standard measurements overestimate or underestimate the corneal power, leading to the wrong lens implant being chosen.
          </p>
          <p className="prose">
            In practical terms, this means a patient who should end up with clear distance vision might end up significantly nearsighted or farsighted after surgery. That is called a refractive surprise, and it is the single biggest concern for post-LASIK cataract patients.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-group-cycling-sunny.jpg"
              alt="Active group cycling on a sunny desert road - staying active with clear vision"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">How I Handle <strong>Post-LASIK Eyes</strong></h2>
          <p className="prose">
            The key is using the right tools and the right formulas. I use multiple advanced IOL calculation methods specifically designed for post-refractive surgery eyes:
          </p>
          <ul className="content-list">
            <li><strong>Historical method:</strong> If pre-LASIK data is available (your original corneal measurements and refraction), this can be used to calculate the corneal power change. Bring your old LASIK records if you have them.</li>
            <li><strong>No-history methods:</strong> Modern formulas like the Barrett True-K, Shammas, and Haigis-L can estimate post-LASIK corneal power without needing pre-LASIK data. I use multiple formulas and cross-reference them.</li>
            <li><strong>Posterior corneal surface measurement:</strong> Advanced instruments like the Pentacam measure both the front and back surfaces of the cornea directly, bypassing the assumption that standard instruments rely on.</li>
            <li><strong>Intraoperative aberrometry:</strong> Real-time wavefront measurements taken during surgery to verify the lens power before I implant it.</li>
          </ul>
          <p className="prose">
            I use all of these approaches together, not just one. When the results converge, I have high confidence. When they diverge, I know to be cautious and I discuss the uncertainty with you honestly.
          </p>

          <h2 className="section-title">Managing <strong>Expectations</strong></h2>
          <p className="prose">
            I will always be honest with you: post-LASIK cataract surgery carries a higher chance of needing a refinement procedure compared to eyes that never had refractive surgery. The variability in IOL calculations means there is a wider margin of error, even with the best technology and formulas available today.
          </p>
          <p className="prose">
            That does not mean the outcome will be bad. Most post-LASIK patients do very well. But it means I set expectations realistically. If there is a residual refractive error after surgery, options include glasses, a laser enhancement, or in some cases a lens exchange. I would rather you know that upfront than be surprised later.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-family-golden-hour-walk.jpg"
              alt="Family enjoying a golden hour walk with their dog - the clear vision lifestyle"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Bring Your <strong>Records</strong></h2>
          <p className="prose">
            If you had LASIK, PRK, or any corneal refractive surgery, bring whatever records you have to your consultation. Your pre-LASIK measurements, your LASIK operative report, and your pre-LASIK refraction are all valuable for improving the accuracy of your IOL calculations. If you do not have them, do not worry - I have methods that work without historical data. But every piece of information helps.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Had LASIK and now need <strong>cataract surgery?</strong></h2>
          <p>I use advanced calculation methods designed specifically for post-LASIK eyes. Let&rsquo;s plan your surgery with precision.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
