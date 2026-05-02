import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery After Previous Retina Surgery',
    description: 'Vitrectomy accelerates cataract formation and changes the surgical environment. Dr. Tokuhara explains how prior retina surgery affects cataract management.',
    slug: '/complex-cases/previous-retina-surgery',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'After Retina Surgery', href: '/complex-cases/previous-retina-surgery' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery After Retina Surgery - Vitrectomy, Gas, Silicone Oil',
  description: 'Previous retina surgery changes everything about cataract surgery. Learn how Dr. Tokuhara navigates post-vitrectomy cataracts, zonular changes, and eyes with a history of gas or silicone oil.',
  alternates: { canonical: '/complex-cases/previous-retina-surgery' },
  openGraph: {
    title: 'Cataract Surgery After Retina Surgery | Dr. Keith Tokuhara',
    description: 'Post-vitrectomy cataracts require specialized expertise. Dr. Tokuhara is both cataract and retina fellowship-trained.',
    url: 'https://drtokuhara.com/complex-cases/previous-retina-surgery',
  },
};

export default function PreviousRetinaSurgeryPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Cataract Surgery After <strong>Retina Surgery</strong></h1>
          <p className="page-hero-sub">Vitrectomy changes the eye in ways that matter for cataract surgery. Having a surgeon who understands both makes all the difference.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">Why Retina Surgery <strong>Accelerates Cataracts</strong></h2>
          <p className="prose">
            If you have had a vitrectomy - surgery to remove the vitreous gel from the back of your eye - you almost certainly will develop a cataract, if you have not already. This is not a risk factor. It is a near certainty. Most patients who have had a vitrectomy develop a visually significant cataract within one to two years.
          </p>
          <p className="prose">
            The vitreous gel serves as a protective buffer for the lens. Once it is removed, the lens is exposed to higher oxygen concentrations and altered fluid dynamics inside the eye. This accelerates the protein breakdown that causes cataracts. It is not your retina surgeon's fault. It is simply a biological consequence of the procedure.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-sunset-cooking.jpg"
              alt="Couple enjoying sunset cooking outdoors - getting back to life after eye surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">What Makes These Cases <strong>Different</strong></h2>
          <p className="prose">
            Operating on a post-vitrectomy eye presents several distinct challenges:
          </p>
          <ul className="content-list">
            <li><strong>Altered fluid dynamics:</strong> Without the vitreous, the posterior chamber is filled with aqueous fluid that behaves differently during surgery. The posterior capsule is less supported and more prone to movement, making every step of the procedure more delicate.</li>
            <li><strong>Deeper anterior chamber instability:</strong> The eye tends to be less pressurized and more prone to fluctuations during phacoemulsification. This requires careful management of fluidics and flow rates.</li>
            <li><strong>Zonular integrity:</strong> Depending on the original retinal condition and the techniques used during vitrectomy, the zonules may be weakened. Scleral buckling, in particular, can alter the anatomy significantly.</li>
            <li><strong>Gas or silicone oil history:</strong> If silicone oil was used during retina surgery and is still present, cataract surgery must account for the oil. If gas was used, IOL power calculations may be affected. The timing of surgery relative to gas absorption matters.</li>
            <li><strong>Retinal status:</strong> The retina must be stable before cataract surgery. If there is active retinal pathology, the timing and approach need careful coordination.</li>
          </ul>

          <h2 className="section-title">My Unique <strong>Advantage</strong></h2>
          <p className="prose">
            Here is where my training makes a real difference. I am fellowship-trained in both cataract surgery and retina. I trained under Dr. Howard Gimbel, one of the most respected cataract surgeons in the world, and I completed a retina fellowship at Loma Linda University. I understand the posterior segment. I know what the retina surgeon did, why they did it, and how it changes the eye I am now operating on.
          </p>
          <p className="prose">
            Most cataract surgeons have limited retinal training. They can handle a straightforward post-vitrectomy cataract, but when the case involves residual silicone oil, a scleral buckle, compromised zonules, or an unstable retina, they are outside their comfort zone. I am not. These are the cases I trained for.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-outdoor-sunshine.jpg"
              alt="Couple enjoying the outdoor sunshine after successful eye surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Coordination and <strong>Timing</strong></h2>
          <p className="prose">
            Timing is critical in post-retina cataract surgery. I work closely with your retina specialist to ensure the retina is stable and the eye is ready. If silicone oil needs to be removed, we coordinate whether that happens before, during, or as a combined procedure with the cataract surgery. If a gas bubble was placed, I wait until it has fully absorbed and the eye has stabilized before proceeding.
          </p>
          <p className="prose">
            The goal is always the same: restore the best possible vision while protecting the retinal work that was done to save your sight. That requires a surgeon who speaks both languages - cataract and retina - fluently.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Had retina surgery and now developing a <strong>cataract?</strong></h2>
          <p>I understand both sides of the equation. Let&rsquo;s evaluate your eye and build a plan that protects your retina while restoring your vision.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
