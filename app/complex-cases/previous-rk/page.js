import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import {
  ScrollReveal,
  VideoBackground,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';
import RelatedComplexCases from '../../components/RelatedComplexCases';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Cataract Surgery After Radial Keratotomy (RK)',
    description: 'Radial keratotomy creates uniquely unpredictable corneas. Dr. Tokuhara explains the challenges of cataract surgery after RK and how he manages them.',
    slug: '/complex-cases/previous-rk',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'After Radial Keratotomy', href: '/complex-cases/previous-rk' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery After Radial Keratotomy (RK) - Desert Vision Center',
  description: 'Radial keratotomy permanently alters corneal behavior, making cataract surgery unpredictable. Dr. Tokuhara explains the unique challenges and his approach to managing post-RK eyes.',
  alternates: { canonical: '/complex-cases/previous-rk' },
  openGraph: {
    title: 'Cataract Surgery After RK | Dr. Keith Tokuhara',
    description: 'Post-RK eyes are among the most challenging for cataract surgery. Expert management at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/previous-rk',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can I have cataract surgery after radial keratotomy (RK)?", acceptedAnswer: { '@type': 'Answer', text: "Yes, but RK presents unique challenges. The corneal incisions from RK cause fluctuating vision and change corneal measurements. Lens power calculations must account for these alterations. Dr. Tokuhara uses specialized formulas and may stage the surgery to optimize results." } },
    { '@type': 'Question', name: "Why is cataract surgery more complex after RK?", acceptedAnswer: { '@type': 'Answer', text: "Radial keratotomy incisions permanently alter the corneal shape and weaken corneal structure. This makes lens power prediction more difficult. Multiple measurements with different devices, advanced formulas, and intraoperative verification help achieve the best possible outcome. In rare cases, the cornea can rupture along old RK incision lines during surgery, requiring intraoperative sutures." } }
  ],
};

export default function PreviousRKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-glass-horizon.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <h1>Cataract Surgery After <strong>Radial Keratotomy</strong></h1>
          <p className="page-hero-sub">RK was revolutionary in its time. Now it creates some of the most challenging cataract cases in ophthalmology.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">The RK <strong>Legacy</strong></h2>
          <p className="prose">
            Radial keratotomy was one of the earliest refractive surgery procedures, popular in the 1980s and early 1990s. Surgeons made radial incisions in the cornea to flatten it and reduce nearsightedness. It worked for many people at the time. But those incisions never fully heal, and the cornea they created behaves differently than a normal cornea for the rest of the patient's life.
          </p>
          <p className="prose">
            Decades later, those RK patients are developing cataracts. And the corneal changes from their RK surgery make cataract surgery significantly more complex than it would be in a normal eye or even a post-LASIK eye.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-live-music.jpg"
              alt="Couple enjoying a live music event - staying active and engaged in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Why RK Eyes Are <strong>So Challenging</strong></h2>
          <p className="prose">
            Post-RK eyes present a unique combination of problems:
          </p>
          <ul className="content-list">
            <li><strong>Progressive hyperopic shift:</strong> Over time, many RK patients continue to become more farsighted as the corneal incisions gradually flatten the cornea further. This means the eye that was corrected to good distance vision 30 years ago may now be significantly farsighted.</li>
            <li><strong>Diurnal fluctuation:</strong> RK corneas often change shape throughout the day. Patients notice their vision is different in the morning versus the evening. This makes it extremely difficult to get a single, reliable corneal measurement for IOL calculations.</li>
            <li><strong>Irregular astigmatism:</strong> The radial incisions create an irregular corneal surface that does not conform to the smooth curves that standard IOL formulas assume. This irregularity makes standard toric IOL planning unreliable.</li>
            <li><strong>Unpredictable corneal response:</strong> RK incisions weaken the structural integrity of the cornea. The changes in intraocular pressure during cataract surgery can cause the cornea to behave unpredictably.</li>
            <li><strong>RK corneal rupture:</strong> In rare cases, the cornea can split along the old RK incision lines during surgery. These areas were permanently weakened decades ago, and the mechanical forces of cataract surgery can reopen them. When this occurs, corneal sutures are placed intraoperatively to close the wound. The surgery can still be completed successfully, but the sutures may extend the total recovery time compared to a routine case. This is rare, but patients with RK incisions should know it is possible.</li>
            <li><strong>IOL calculation difficulty:</strong> Post-RK eyes have the same keratometry measurement problems as post-LASIK eyes, plus the additional challenges of irregular astigmatism and progressive hyperopic shift.</li>
          </ul>

          <h2 className="section-title">My Approach to <strong>Post-RK Cataracts</strong></h2>
          <p className="prose">
            I am very straightforward with post-RK patients: this is one of the most challenging scenarios in cataract surgery. The accuracy of lens implant calculations in post-RK eyes is lower than in any other category of patients. That is not a failing of the surgeon or the technology. It is a consequence of the corneal behavior these incisions create.
          </p>
          <p className="prose">
            Here is how I maximize accuracy:
          </p>
          <ul className="content-list">
            <li>Multiple measurements using different machines to account for variability across devices and capture the most accurate corneal data</li>
            <li>Topography-guided IOL calculations using both the central and paracentral cornea</li>
            <li>Multiple IOL formulas cross-referenced against each other</li>
            <li>Intraoperative aberrometry for real-time verification</li>
            <li>Honest preoperative counseling about the realistic range of outcomes</li>
          </ul>
          <p className="prose">
            I also discuss the possibility of a staged approach: using a lens exchange or a piggyback IOL if the initial result is not within the target range. Planning for that possibility upfront, rather than treating it as a failure, leads to better outcomes and less frustration.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-romantic-warm-interior.jpg"
              alt="Seniors enjoying an evening stroll under string lights"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">What You Should <strong>Expect</strong></h2>
          <p className="prose">
            If you had RK decades ago and are now facing cataract surgery, the most important thing is finding a surgeon who has significant experience with post-RK eyes and who will be honest with you about the limitations. The goal is excellent vision, and most post-RK patients achieve it. But the path may involve more fine-tuning than it would for a patient with a normal cornea, and you should know that going in.
          </p>
        </div>
      </section>

      <RelatedComplexCases current="previous-rk" />
      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Had RK years ago and now need <strong>cataract surgery?</strong></h2>
          <p>I understand the unique challenges of post-RK eyes. Let&rsquo;s evaluate your cornea and build a realistic, honest plan.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>
    </>
  );
}
