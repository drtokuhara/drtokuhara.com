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
    title: 'Floppy Iris Syndrome (IFIS) and Cataract Surgery',
    description: 'IFIS makes cataract surgery unpredictable. Dr. Tokuhara explains how medications like tamsulosin cause it and how he manages it safely.',
    slug: '/complex-cases/floppy-iris',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Floppy Iris Syndrome', href: '/complex-cases/floppy-iris' },
  ]),
];

export const metadata = {
  title: 'Floppy Iris Syndrome (IFIS) and Cataract Surgery - What You Need to Know',
  description: 'Intraoperative Floppy Iris Syndrome makes cataract surgery more complex. Learn about the tamsulosin/Flomax connection and how Dr. Tokuhara manages IFIS safely at Desert Vision Center.',
  alternates: { canonical: '/complex-cases/floppy-iris' },
  openGraph: {
    title: 'Floppy Iris Syndrome & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'IFIS from tamsulosin/Flomax creates surgical challenges. Expert management at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/floppy-iris',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "What is floppy iris syndrome during cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Intraoperative Floppy Iris Syndrome (IFIS) causes the iris to billow, prolapse, and constrict during cataract surgery. It is most commonly associated with alpha-blocker medications like tamsulosin (Flomax) used for prostate conditions. An experienced surgeon anticipates and manages this with specialized techniques." } },
    { '@type': 'Question', name: "Should I stop Flomax before cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Do not stop or change any medications without consulting your doctors. Stopping alpha-blockers before surgery does not reliably prevent IFIS. What matters most is that your surgeon knows your medication history and is experienced in managing floppy iris. Dr. Tokuhara uses pupil expansion devices and modified techniques for these cases." } }
  ],
};

export default function FloppyIrisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <h1>Floppy Iris Syndrome <strong>(IFIS)</strong></h1>
          <p className="page-hero-sub">When the iris does not cooperate during surgery, preparation and technique make all the difference.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">What Is <strong>IFIS?</strong></h2>
          <p className="prose">
            Intraoperative Floppy Iris Syndrome, or IFIS, is exactly what it sounds like. During cataract surgery, the iris - the colored part of your eye that controls the pupil - behaves unpredictably. It billows inward, the pupil constricts unexpectedly, and the iris can prolapse through the surgical incisions. For a surgeon who is not expecting it, this turns a routine case into a genuinely difficult one.
          </p>
          <p className="prose">
            IFIS was first described in 2005 and is strongly associated with a class of medications called alpha-1 adrenergic antagonists. The most well-known is tamsulosin, sold as Flomax, which is commonly prescribed for benign prostatic hyperplasia (BPH) - an enlarged prostate. Other medications in this class include alfuzosin, doxazosin, and terazosin. Even finasteride, commonly known as Propecia or Proscar, has been linked to IFIS in some studies.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-men-car-show.jpg"
              alt="Active senior men enjoying a classic car show in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Why It <strong>Matters</strong></h2>
          <p className="prose">
            Here is the thing that surprises most patients: stopping the medication before surgery does not reliably prevent IFIS. The changes to the iris muscle are often permanent or at least very long-lasting. I have seen IFIS in patients who stopped tamsulosin years before their cataract surgery. The iris has a memory, and once these medications alter the smooth muscle, it may never fully return to normal behavior.
          </p>
          <p className="prose">
            This is why disclosure matters. If you have ever taken tamsulosin, alfuzosin, or any alpha blocker - even briefly, even years ago - I need to know. It changes how I plan the surgery, what instruments I prepare, and what techniques I use. It does not mean surgery cannot be done safely. It means I need to be ready.
          </p>

          <h2 className="section-title">How I Manage <strong>IFIS</strong></h2>
          <p className="prose">
            I remember in 2005 when the fax came through our office about the FDA warning label for Flomax. It was sent to every cataract surgeon in the country. That was the moment we finally understood what we had been experiencing in our surgeries but could not pinpoint the cause. In the 20 years since, ophthalmologists have dramatically improved our approaches for IFIS. And in my practice, I have perfected a surgical style that optimizes outcomes for these patients.
          </p>
          <p className="prose">
            My approach depends on what I see. Not every IFIS case is the same:
          </p>
          <ul className="content-list">
            <li><strong>Small pupil technique:</strong> Sometimes I can perform the entire surgery through a small pupil without needing any expansion device. This requires a refined surgical technique and the confidence to work in a tighter space, but it avoids the manipulation of placing and removing a device.</li>
            <li><strong>Iris expansion devices:</strong> When I see clear evidence of IFIS behavior early in surgery, the safer approach is to go ahead and place an expansion device. Over the years, I have used iris hooks, the Malyugin ring, and Visitec iRings depending on the scenario. Each has strengths, and I choose based on the specific anatomy and behavior of the iris.</li>
            <li><strong>Intracameral epinephrine:</strong> Injected directly into the eye at the start of surgery to help maintain pupil dilation throughout the case.</li>
            <li><strong>Low-flow fluidics:</strong> I adjust the phacoemulsification settings to reduce turbulence inside the eye that makes a floppy iris worse.</li>
            <li><strong>Prophylactic corneal suture:</strong> If there is any theoretical risk to wound integrity, I will sometimes place a corneal suture at the incision site. This is extremely rare, but having it in my toolbox means I can secure the wound immediately if the iris puts pressure on it.</li>
          </ul>
          <p className="prose">
            The key is anticipation and adaptability. I have been managing IFIS for two decades. The surgeons who get into trouble are usually the ones who did not ask about medication history, did not plan for the possibility, or only have one approach in their toolkit.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-friends-indoor-portrait.jpg"
              alt="Two men in a bright indoor space - staying informed about how medications affect eye surgery"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">What You Should <strong>Know</strong></h2>
          <p className="prose">
            If you are taking or have ever taken tamsulosin, Flomax, or any similar prostate medication, tell your eye doctor before cataract surgery. Do not assume they will find it in your chart. Do not assume it does not matter because you stopped years ago. This single piece of information can be the difference between a smooth surgery and a complicated one.
          </p>
          <p className="prose">
            IFIS does not mean you cannot have excellent cataract surgery. It means you need a surgeon who knows to expect it and knows what to do when the iris starts misbehaving. That is what I do every week.
          </p>
        </div>
      </section>

      <RelatedComplexCases current="floppy-iris" />
      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Taking Flomax or a similar medication and need <strong>cataract surgery?</strong></h2>
          <p>I manage IFIS cases regularly. Let&rsquo;s discuss your situation and build a plan that accounts for your medication history.</p>
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
