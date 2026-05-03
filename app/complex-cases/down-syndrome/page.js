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
    title: 'Cataract Surgery for Patients with Down Syndrome',
    description: 'Down syndrome patients develop cataracts earlier and present unique anatomical and cooperation challenges. Dr. Tokuhara explains his compassionate, adapted approach.',
    slug: '/complex-cases/down-syndrome',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Down Syndrome', href: '/complex-cases/down-syndrome' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery for Patients with Down Syndrome - Desert Vision Center',
  description: 'Patients with Down syndrome develop cataracts earlier and require adapted surgical approaches. Learn how Dr. Tokuhara manages anatomical considerations, cooperation challenges, and anesthesia planning.',
  alternates: { canonical: '/complex-cases/down-syndrome' },
  openGraph: {
    title: 'Cataract Surgery & Down Syndrome | Dr. Keith Tokuhara',
    description: 'Compassionate, adapted cataract surgery for patients with Down syndrome at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/down-syndrome',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can patients with Down syndrome have cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Patients with Down syndrome can develop cataracts at a younger age than the general population. Surgery is safe and effective with appropriate accommodations for the patient's comfort and cooperation during the procedure. Improved vision can significantly enhance quality of life and independence." } },
    { '@type': 'Question', name: "Why do people with Down syndrome get cataracts earlier?", acceptedAnswer: { '@type': 'Answer', text: "People with Down syndrome have a higher prevalence of early-onset cataracts due to genetic factors affecting lens protein structure. Regular eye exams are important for early detection, and surgery is recommended when vision loss affects daily function." } }
  ],
};

export default function DownSyndromePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Cataract Surgery and <strong>Down Syndrome</strong></h1>
          <p className="page-hero-sub">Earlier cataracts, unique anatomy, and specific care needs. Every patient deserves a surgeon who adapts to them.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">Why Down Syndrome Patients Need <strong>Specialized Care</strong></h2>
          <p className="prose">
            Patients with Down syndrome (trisomy 21) develop cataracts much earlier than the general population. While most people develop visually significant cataracts in their 60s and 70s, individuals with Down syndrome may develop them in their 30s, 40s, or even earlier. The cataracts can be dense, progress quickly, and significantly impact an already complex visual system.
          </p>
          <p className="prose">
            Beyond the timing, several anatomical and physiological features of Down syndrome affect how I plan and perform cataract surgery:
          </p>
          <ul className="content-list">
            <li><strong>Smaller orbits and palpebral fissures:</strong> The eye sockets and eyelid openings tend to be smaller, which can limit surgical access and make instrumentation more challenging.</li>
            <li><strong>Keratoconus:</strong> Down syndrome is associated with a significantly higher incidence of keratoconus, a condition where the cornea thins and bulges into a cone shape. This affects both corneal measurements for IOL calculations and the optical quality of any lens implanted.</li>
            <li><strong>Shallow anterior chambers:</strong> The space in the front of the eye may be shallower than typical, requiring careful fluid management during surgery.</li>
            <li><strong>Atlantoaxial instability:</strong> Some patients with Down syndrome have instability in the upper cervical spine, which requires special positioning precautions during surgery and anesthesia.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-family-outdoor-portrait.jpg"
              alt="Family portrait outdoors in natural light - families caring for loved ones with special needs"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Cooperation and <strong>Anesthesia</strong></h2>
          <p className="prose">
            Cataract surgery is typically performed under local anesthesia with the patient awake and cooperative. For many patients with Down syndrome, especially those with significant intellectual disability, this is not feasible. They may not be able to lie still, follow instructions, or tolerate the procedure while awake.
          </p>
          <p className="prose">
            In these cases, I coordinate with an anesthesiology team experienced in caring for patients with Down syndrome to perform the surgery under general anesthesia. This requires additional preoperative planning, including cardiac evaluation (congenital heart disease is common in Down syndrome), airway assessment, and cervical spine clearance if atlantoaxial instability is a concern.
          </p>
          <p className="prose">
            The surgical technique itself is adapted as well. I plan for a more efficient procedure, knowing that under general anesthesia I want to minimize total time while still maintaining the precision the surgery demands.
          </p>

          <h2 className="section-title">Working with <strong>Families and Caregivers</strong></h2>
          <p className="prose">
            For patients with Down syndrome, the surgical journey involves the entire support system. I communicate with families and caregivers at every step: explaining what to expect, how to prepare the patient, what postoperative care looks like, and how to administer eye drops. I take the time to ensure everyone understands the plan, because the success of cataract surgery does not end in the operating room. It depends on what happens in the days and weeks after.
          </p>
          <p className="prose">
            Restoring clear vision for a patient with Down syndrome can be transformative. It improves their ability to engage with the world, participate in activities, and maintain the independence they have. These are among the most rewarding cases I perform.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Caring for someone with Down syndrome who needs <strong>cataract surgery?</strong></h2>
          <p>I&rsquo;ll work with your family and care team to create a safe, compassionate surgical plan.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
