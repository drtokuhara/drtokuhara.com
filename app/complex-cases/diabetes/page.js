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
    title: 'Diabetes, Diabetic Retinopathy, and Cataract Surgery',
    description: 'Diabetes affects every aspect of cataract surgery, from timing to lens choice to recovery. Dr. Tokuhara explains how he manages diabetic patients with his dual cataract and retina training.',
    slug: '/complex-cases/diabetes',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Diabetes', href: '/complex-cases/diabetes' },
  ]),
];

export const metadata = {
  title: 'Diabetes and Cataract Surgery - Retinopathy, Timing, and Expert Management',
  description: 'Diabetes adds complexity to cataract surgery through retinopathy, macular edema, and slower healing. Dr. Tokuhara, with dual cataract and retina fellowship training, manages the complete picture.',
  alternates: { canonical: '/complex-cases/diabetes' },
  openGraph: {
    title: 'Diabetes & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Expert cataract surgery for diabetic patients with retinopathy screening and DME management. Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/diabetes',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can diabetics have cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Diabetic patients can and often should have cataract surgery, as cataracts can worsen faster with diabetes. However, the timing and approach require careful coordination with diabetic retinal health. Uncontrolled blood sugar and active diabetic retinopathy may need to be addressed before or alongside cataract surgery." } },
    { '@type': 'Question', name: "Does diabetes affect cataract surgery outcomes?", acceptedAnswer: { '@type': 'Answer', text: "Diabetes can influence healing, increase the risk of macular swelling after surgery, and affect premium lens implant performance. Dr. Tokuhara evaluates diabetic eye health thoroughly before surgery and monitors closely afterward to optimize outcomes." } }
  ],
};

export default function DiabetesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Diabetes and <strong>Cataract Surgery</strong></h1>
          <p className="page-hero-sub">Diabetes affects the entire eye. Cataract surgery in diabetic patients requires a surgeon who sees the complete picture.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">How Diabetes Affects <strong>Cataract Surgery</strong></h2>
          <p className="prose">
            Diabetic patients develop cataracts earlier and more aggressively than non-diabetic patients. Fluctuations in blood sugar cause changes in the lens that accelerate clouding. But the cataract itself is often the simpler problem to solve. The real complexity comes from what diabetes does to the rest of the eye.
          </p>
          <p className="prose">
            Diabetic retinopathy, diabetic macular edema (DME), compromised blood vessel integrity, and a tendency toward more aggressive postoperative inflammation all change the surgical equation. A surgeon who only looks at the cataract is missing the bigger picture.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-seniors-shopping-market.jpg"
              alt="Seniors shopping at a market - managing health conditions while staying active"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Diabetic Retinopathy <strong>Screening</strong></h2>
          <p className="prose">
            Before any diabetic patient has cataract surgery, I perform a thorough retinal evaluation. The severity of diabetic retinopathy directly affects my surgical planning:
          </p>
          <ul className="content-list">
            <li><strong>No retinopathy or mild NPDR:</strong> Cataract surgery can typically proceed with standard timing. I still monitor the retina carefully after surgery, as the surgical inflammation can occasionally accelerate retinopathy progression.</li>
            <li><strong>Moderate to severe NPDR:</strong> The retina needs attention before or alongside cataract surgery. Because I am retina-trained, I perform pan-retinal photocoagulation and anti-VEGF injections myself, in-house, to stabilize the retina before proceeding with cataract removal. This is the true advantage of choosing a cataract surgeon with retina fellowship training: I manage both the diabetic retinopathy and the cataract surgery as a single, cohesive treatment plan rather than splitting your care between two separate doctors.</li>
            <li><strong>Proliferative diabetic retinopathy (PDR):</strong> Active PDR significantly increases the risk of surgical complications including vitreous hemorrhage and neovascular glaucoma. The retinopathy must be treated and stabilized before cataract surgery, except in cases where the cataract is so dense that it prevents adequate retinal treatment.</li>
          </ul>

          <h2 className="section-title">Diabetic Macular <strong>Edema</strong></h2>
          <p className="prose">
            DME is swelling in the central retina caused by leaking blood vessels. It is the most common cause of vision loss in diabetic patients. If a patient has active DME at the time of cataract surgery, the surgery can worsen it. Conversely, untreated DME limits the visual improvement that cataract surgery can deliver.
          </p>
          <p className="prose">
            My approach is to screen for DME with OCT imaging before surgery. If DME is present, I treat it with anti-VEGF injections before proceeding with cataract surgery. This staged approach protects the macula and maximizes the visual benefit of cataract removal. In some cases, I may administer an anti-VEGF injection at the time of cataract surgery to provide additional protection.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-market-sunlight.jpg"
              alt="Couple shopping together in the sunlight - living actively with well-managed diabetes"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Lens Selection for <strong>Diabetic Patients</strong></h2>
          <p className="prose">
            Diabetes affects lens implant selection significantly:
          </p>
          <ul className="content-list">
            <li>Multifocal IOLs are generally not ideal for patients with diabetic retinopathy or macular edema, as these conditions reduce contrast sensitivity and multifocal lenses compound that effect.</li>
            <li>Monofocal or EDOF lenses typically deliver the best functional vision for diabetic patients.</li>
            <li>Toric IOLs to reduce astigmatism are still appropriate if the patient has stable astigmatism.</li>
            <li>I also consider the long-term trajectory - a patient with well-controlled diabetes and no retinopathy today may have a different retinal status in 10 years, and the lens choice should account for that possibility.</li>
          </ul>

          <h2 className="section-title">My Retina Training <strong>Makes the Difference</strong></h2>
          <p className="prose">
            Because I am fellowship-trained in retina, I can evaluate diabetic retinopathy, read OCT scans, perform retinal imaging, and make treatment decisions about the retina - not just the cataract. Most cataract surgeons refer diabetic retinopathy management entirely to a retina specialist. I do it all in-house. I perform the anti-VEGF injections, the laser photocoagulation, and the cataract surgery. One surgeon, one cohesive plan, one set of eyes watching everything. That means fewer appointments, no coordination gaps between separate doctors, and a surgeon who understands your entire eye at every step.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have diabetes and developing <strong>cataracts?</strong></h2>
          <p>I&rsquo;ll evaluate both your cataract and your retina, and build a plan that protects your complete visual system.</p>
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
