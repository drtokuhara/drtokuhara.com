import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';

const jsonLd = [
  articleSchema({
    title: 'Fuchs Dystrophy and Cataract Surgery',
    description: 'Fuchs endothelial dystrophy affects the cornea and complicates cataract surgery. Dr. Tokuhara explains combined DMEK/DSAEK approaches and timing decisions.',
    slug: '/complex-cases/fuchs-dystrophy',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Fuchs Dystrophy', href: '/complex-cases/fuchs-dystrophy' },
  ]),
];

export const metadata = {
  title: 'Fuchs Dystrophy and Cataract Surgery - Corneal Endothelial Considerations',
  description: 'Fuchs dystrophy weakens the corneal endothelium, making cataract surgery higher risk. Learn about combined DMEK/DSAEK procedures and how Dr. Tokuhara protects your cornea.',
  alternates: { canonical: '/complex-cases/fuchs-dystrophy' },
  openGraph: {
    title: 'Fuchs Dystrophy & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Expert management of Fuchs dystrophy during cataract surgery. Combined approaches and corneal protection at Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/fuchs-dystrophy',
  },
};

export default function FuchsDystrophyPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Fuchs Dystrophy and <strong>Cataract Surgery</strong></h1>
          <p className="page-hero-sub">When the inner layer of your cornea is failing, cataract surgery requires extra planning and sometimes a combined approach.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">Understanding <strong>Fuchs Dystrophy</strong></h2>
          <p className="prose">
            Fuchs endothelial corneal dystrophy is a condition where the endothelial cells - the single layer of cells lining the inner surface of your cornea - gradually deteriorate and die. These cells are responsible for pumping excess fluid out of the cornea to keep it clear. As they fail, the cornea swells, becomes hazy, and vision deteriorates.
          </p>
          <p className="prose">
            In its early stages, Fuchs may cause morning blurriness that improves as the day goes on (because evaporation helps dehydrate the cornea). As it progresses, the blur becomes constant, and eventually the cornea can develop painful blisters on its surface (bullous keratopathy). Fuchs is one of the most common reasons for corneal transplant surgery.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-night-restaurant.jpg"
              alt="Couple enjoying dinner at a restaurant at night - seeing clearly in all lighting conditions"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Why Fuchs Complicates <strong>Cataract Surgery</strong></h2>
          <p className="prose">
            Cataract surgery puts stress on the corneal endothelium. The ultrasonic energy used to break up the cataract, the surgical instruments inside the eye, and the fluid dynamics during the procedure all cause some endothelial cell loss. In a healthy eye, this loss is minimal and the remaining cells compensate by spreading out. In an eye with Fuchs dystrophy, the endothelium is already compromised. The cells that remain are working overtime just to keep the cornea clear, and the additional stress of surgery can push the cornea past its tipping point.
          </p>
          <p className="prose">
            The result can be persistent corneal edema after cataract surgery: a cloudy, swollen cornea that does not clear up, even though the cataract has been successfully removed and the lens implant is perfect. The surgery was technically successful, but the cornea cannot recover.
          </p>

          <h2 className="section-title">Timing and <strong>Combined Approaches</strong></h2>
          <p className="prose">
            The critical decision with Fuchs and cataracts is timing and whether to combine procedures:
          </p>
          <ul className="content-list">
            <li><strong>Mild Fuchs with cataracts:</strong> If the endothelial cell count is adequate and the cornea is clear, I may proceed with cataract surgery alone, using gentle techniques to minimize endothelial trauma. I use dispersive viscoelastics to coat and protect the endothelium, keep ultrasonic energy as low as possible, and monitor the cornea carefully after surgery.</li>
            <li><strong>Moderate Fuchs with cataracts:</strong> This is the gray zone where clinical judgment matters most. The cornea may be functional now, but cataract surgery could tip it over the edge. I discuss the risk honestly and we decide together whether to proceed with cataract surgery alone and accept the possibility of needing a corneal procedure later, or combine both upfront.</li>
            <li><strong>Advanced Fuchs with cataracts:</strong> When the cornea is already edematous or the endothelial cell count is critically low, a combined approach is typically best. Cataract surgery is performed simultaneously with a corneal endothelial transplant, either DMEK (Descemet Membrane Endothelial Keratoplasty) or DSAEK (Descemet Stripping Automated Endothelial Keratoplasty).</li>
          </ul>

          <h2 className="section-title">DMEK vs. <strong>DSAEK</strong></h2>
          <p className="prose">
            Both are partial-thickness corneal transplants that replace only the diseased endothelial layer, leaving the rest of the cornea intact:
          </p>
          <ul className="content-list">
            <li><strong>DMEK:</strong> Replaces just the Descemet membrane and endothelium. Fastest visual recovery, best optical quality, lowest rejection rate. But the tissue is very thin and delicate, making the surgery technically demanding.</li>
            <li><strong>DSAEK:</strong> Replaces a slightly thicker layer including a thin stromal component. More robust tissue handling, reliable attachment, slightly slower visual recovery. Often preferred when the anterior chamber anatomy is complex or when I anticipate the thinner DMEK tissue will be difficult to position.</li>
          </ul>
          <p className="prose">
            I coordinate these combined procedures with corneal specialists, and the choice between DMEK and DSAEK depends on the individual eye's anatomy, the severity of the Fuchs, and what will give the best long-term result.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Have Fuchs dystrophy and developing <strong>cataracts?</strong></h2>
          <p>I&rsquo;ll evaluate your endothelial cell count and help you decide the right timing and approach for your situation.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
