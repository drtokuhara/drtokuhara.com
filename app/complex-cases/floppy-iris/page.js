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
      <section className="page-hero">
        <div className="container">
          <h1>Floppy Iris Syndrome <strong>(IFIS)</strong></h1>
          <p className="page-hero-sub">When the iris does not cooperate during surgery, preparation and technique make all the difference.</p>
        </div>
      </section>

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
            My approach starts well before surgery day. When I know IFIS is a possibility, I have several strategies ready:
          </p>
          <ul className="content-list">
            <li><strong>Preoperative pharmacologic dilation:</strong> I use a specific combination and timing of dilating drops designed to achieve the widest possible pupil before we start.</li>
            <li><strong>Intracameral epinephrine:</strong> Injected directly into the eye at the start of surgery, this helps maintain pupil dilation throughout the case.</li>
            <li><strong>Iris expansion devices:</strong> In moderate to severe cases, I use mechanical pupil expanders - small devices that gently hold the iris back and maintain a stable working space. These are placed at the beginning of the case and removed at the end.</li>
            <li><strong>Low-flow fluidics:</strong> I adjust the phacoemulsification settings to use lower flow rates, which reduces the turbulence inside the eye that makes a floppy iris worse.</li>
            <li><strong>Careful wound construction:</strong> The incisions are built to resist iris prolapse, and I monitor them throughout the case.</li>
          </ul>
          <p className="prose">
            The key is anticipation. When I know what I am walking into, I can prevent problems instead of reacting to them. The surgeons who get into trouble with IFIS are usually the ones who did not ask about medication history or did not plan for the possibility.
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

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Taking Flomax or a similar medication and need <strong>cataract surgery?</strong></h2>
          <p>I manage IFIS cases regularly. Let&rsquo;s discuss your situation and build a plan that accounts for your medication history.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
