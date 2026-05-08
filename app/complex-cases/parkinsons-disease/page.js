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
    title: 'Cataract Surgery for Patients with Parkinson\'s Disease',
    description: 'Parkinson\'s presents unique challenges for cataract surgery including tremor, positioning, and medication timing. Dr. Tokuhara explains his approach.',
    slug: '/complex-cases/parkinsons-disease',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Parkinson\'s Disease', href: '/complex-cases/parkinsons-disease' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery with Parkinson\'s Disease - Tremor Management and Surgical Adaptations',
  description: 'Parkinson\'s disease creates unique challenges for cataract surgery. Learn how Dr. Tokuhara manages tremor, positioning difficulties, and medication timing to deliver safe, successful outcomes.',
  alternates: { canonical: '/complex-cases/parkinsons-disease' },
  openGraph: {
    title: 'Cataract Surgery & Parkinson\'s Disease | Dr. Keith Tokuhara',
    description: 'Expert cataract surgery for patients with Parkinson\'s disease. Tremor management and adapted techniques at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/parkinsons-disease',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Is cataract surgery safe for Parkinson's patients?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Cataract surgery is generally safe for patients with Parkinson's disease. Better vision can improve balance, reduce fall risk, and enhance quality of life. The surgical team accommodates any movement or tremor concerns during the procedure through appropriate sedation and positioning." } },
    { '@type': 'Question', name: "How does Parkinson's affect cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Parkinson's disease can affect eye movement control and may cause dry eye. Tremors during surgery are managed with appropriate sedation. Dr. Tokuhara plans for these factors and coordinates with the patient's neurologist when needed to optimize timing and medication management around surgery." } }
  ],
};

export default function ParkinsonsDiseasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-light-tunnel.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <h1>Cataract Surgery with <strong>Parkinson&rsquo;s Disease</strong></h1>
          <p className="page-hero-sub">Tremor, positioning challenges, and medication management add complexity, but they do not make surgery impossible.</p>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">Why Parkinson&rsquo;s <strong>Matters</strong></h2>
          <p className="prose">
            Cataract surgery is performed under a microscope with instruments measured in fractions of a millimeter. It requires the patient to lie relatively still, look in a specific direction, and cooperate for about 10 to 15 minutes. For most patients, this is straightforward. For patients with Parkinson's disease, each of these requirements can become a significant challenge.
          </p>
          <p className="prose">
            Tremor is the most obvious concern. A resting tremor that involves the head, neck, or eyes can make the surgical field unstable. But tremor is only part of the picture. Parkinson's also causes rigidity, which can make it difficult for patients to lie flat and turn their head into the correct position. Bradykinesia (slowness of movement) can make it hard for patients to follow instructions during surgery. And the on-off fluctuations that many Parkinson's patients experience mean that their level of cooperation can change significantly depending on when they last took their medication.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/elderly-man-walker-desert-path.jpg"
              alt="Elderly man with a walker on a desert pathway, representing Parkinson's patients navigating daily life with determination"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">My Surgical <strong>Adaptations</strong></h2>
          <p className="prose">
            I take a systematic approach to cataract surgery in Parkinson's patients:
          </p>
          <ul className="content-list">
            <li><strong>Medication timing:</strong> I coordinate with the patient and their neurologist to schedule surgery during the patient's best "on" period, when their medications are at peak effect and tremor is minimized.</li>
            <li><strong>Enhanced sedation coordination:</strong> I work closely with the anesthesia team to provide the right level of sedation. Too little, and the tremor may make surgery difficult. Too much, and the patient may become confused or agitated. Finding the right balance requires experience and communication.</li>
            <li><strong>Head stabilization:</strong> I use positioning aids and gentle stabilization techniques to minimize head movement during the procedure. Every small reduction in movement translates directly to surgical precision.</li>
            <li><strong>Efficient surgical technique:</strong> I plan the surgery to be as efficient as possible, minimizing the total time the patient needs to remain still. My experience with complex cases means I can adapt quickly if the patient moves or the tremor increases.</li>
            <li><strong>Lens selection counseling:</strong> I have an honest conversation about which lens implant makes sense. Patients with Parkinson's may benefit from a lens that is more forgiving of small positioning variations and less dependent on perfect centration.</li>
          </ul>

          <h2 className="section-title">The Visual Benefit <strong>Is Real</strong></h2>
          <p className="prose">
            Parkinson's patients often benefit enormously from cataract surgery. Vision problems compound the challenges they already face. Reduced contrast sensitivity, glare, and dim vision make balance worse, increase fall risk, and reduce independence. Restoring clear vision can meaningfully improve a Parkinson's patient's quality of life, safety, and ability to remain independent.
          </p>
          <p className="prose">
            The surgical challenges are real, but they are manageable with the right preparation and the right surgeon. I have operated on many patients with Parkinson's, and the gratitude they express afterward reminds me why this work matters.
          </p>
        </div>
      </section>

      
      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/elderly-man-walker-courtyard-mountains.jpg" alt="Elderly man with a walker in a landscaped courtyard with mountain views" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
          <div className="content-image-caption" style={{textAlign: 'center', marginTop: '8px'}}>Clear vision reduces fall risk and supports the independence that matters most to Parkinson's patients.</div>
        </div>
      </section>

      <RelatedComplexCases current="parkinsons-disease" />
      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have Parkinson&rsquo;s and struggling with your <strong>vision?</strong></h2>
          <p>I&rsquo;ll work with you and your neurologist to plan a safe, effective approach to cataract surgery.</p>
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
