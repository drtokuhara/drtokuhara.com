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
    title: 'Glaucoma and Cataract Surgery - Combined MIGS Procedures',
    description: 'When glaucoma and cataracts coexist, combined surgery with MIGS can address both conditions. Dr. Tokuhara explains iStent, KDB, Hydrus, canaloplasty (Omni), and pressure management.',
    slug: '/complex-cases/glaucoma-and-cataract',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Glaucoma & Cataract', href: '/complex-cases/glaucoma-and-cataract' },
  ]),
];

export const metadata = {
  title: 'Glaucoma and Cataract Surgery - MIGS, iStent, and Combined Procedures',
  description: 'Glaucoma adds complexity to cataract surgery. Learn about MIGS (minimally invasive glaucoma surgery), iStent, KDB Goniotomy, and how Dr. Tokuhara manages both conditions in one procedure.',
  alternates: { canonical: '/complex-cases/glaucoma-and-cataract' },
  openGraph: {
    title: 'Glaucoma & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Combined cataract and glaucoma surgery with MIGS at Desert Vision Center. iStent, KDB, Hydrus, Omni, and expert pressure management.',
    url: 'https://drtokuhara.com/complex-cases/glaucoma-and-cataract',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "Can glaucoma and cataract surgery be done at the same time?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Combined cataract and glaucoma surgery is common and can be advantageous. Cataract removal alone can lower eye pressure modestly. When combined with minimally invasive glaucoma surgery (MIGS), patients may achieve both better vision and better pressure control in a single procedure." } },
    { '@type': 'Question', name: "Does cataract surgery help with glaucoma?", acceptedAnswer: { '@type': 'Answer', text: "Cataract surgery can lower intraocular pressure by 1-3 mmHg on average. For some patients, this reduction combined with MIGS procedures may reduce or eliminate the need for glaucoma eye drops. Dr. Tokuhara evaluates each case to determine the optimal combined approach." } }
  ],
};

export default function GlaucomaAndCataractPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Glaucoma and <strong>Cataract Surgery</strong></h1>
          <p className="page-hero-sub">Two conditions, one surgical opportunity. When done right, we can address both at the same time.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">Two Problems, <strong>One Surgery</strong></h2>
          <p className="prose">
            Glaucoma and cataracts frequently coexist. They are both age-related, and many of the patients I see for cataract surgery are already managing glaucoma with drops, laser, or both. The good news is that cataract surgery creates a natural opportunity to address glaucoma at the same time, using a category of procedures called MIGS: Minimally Invasive Glaucoma Surgery.
          </p>
          <p className="prose">
            MIGS procedures are performed through the same tiny incision used for cataract surgery. They add minimal time to the procedure, carry very low additional risk, and can meaningfully reduce eye pressure or decrease a patient's dependence on glaucoma drops. For the right patient, combining cataract and glaucoma surgery in a single session is one of the most efficient things we can do.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-seniors-pickleball-desert.jpg"
              alt="Seniors playing bocce ball on a desert lawn with palm trees - active living with managed eye conditions"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">MIGS Options I <strong>Offer</strong></h2>
          <p className="prose">
            Not all MIGS devices and techniques are the same. I select the approach based on your specific glaucoma type, severity, and anatomy:
          </p>
          <ul className="content-list">
            <li><strong>iStent / iStent inject:</strong> The smallest medical device ever implanted in the human body. These tiny titanium stents are placed in the trabecular meshwork to create a permanent bypass for aqueous fluid drainage. They are ideal for mild to moderate open-angle glaucoma and can reduce pressure enough to eliminate one or more glaucoma medications.</li>
            <li><strong>KDB Goniotomy (Kahook Dual Blade):</strong> A technique where I use a specialized blade to remove a strip of the trabecular meshwork, the tissue that is blocking fluid drainage in most open-angle glaucoma. I was the first surgeon in the Coachella Valley to perform KDB Goniotomy. It is a more aggressive approach than iStent and can produce a greater pressure reduction.</li>
            <li><strong>Canaloplasty (Omni Surgical System):</strong> Uses a microcatheter to open and expand Schlemm's canal, the eye's natural drainage system, around its full 360 degrees. This restores the outflow pathway that glaucoma has compromised. It can be combined with trabecular meshwork removal for a comprehensive approach to the entire drainage angle.</li>
            <li><strong>Hydrus Microstent:</strong> A crescent-shaped scaffold placed inside Schlemm's canal to keep it expanded across approximately 90 degrees. It spans three clock hours of the drainage system, providing a larger outflow area than point-access devices. Well suited for mild to moderate open-angle glaucoma.</li>
            <li><strong>Goniosynechialysis:</strong> In some eyes, the drainage angle has become partially closed by adhesions (peripheral anterior synechiae). I can break these adhesions open during cataract surgery to restore drainage.</li>
          </ul>

          <h2 className="section-title">The Glaucoma-Cataract <strong>Decision</strong></h2>
          <p className="prose">
            Not every glaucoma patient needs or benefits from MIGS at the time of cataract surgery. Here is how I think about it:
          </p>
          <ul className="content-list">
            <li>If your glaucoma is well-controlled on one drop and your pressures are stable, cataract surgery alone may be sufficient. Cataract removal itself often lowers eye pressure slightly.</li>
            <li>If you are on two or more drops, experiencing side effects, or struggling with adherence, adding MIGS can reduce your medication burden meaningfully.</li>
            <li>If your glaucoma is moderate to advanced, MIGS may not be enough on its own, and we need to discuss whether a more traditional glaucoma surgery is appropriate either combined with or separate from cataract surgery.</li>
            <li>If you have had prior glaucoma surgery (trabeculectomy, tube shunt), the cataract surgery itself requires additional planning around existing devices and altered anatomy.</li>
          </ul>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-seniors-bocce-action.jpg"
              alt="Active seniors enjoying a bocce ball game outdoors"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Lens Considerations with <strong>Glaucoma</strong></h2>
          <p className="prose">
            Glaucoma also affects lens implant selection. Patients with significant glaucomatous optic nerve damage may not be ideal candidates for multifocal lens implants, because these lenses split light into multiple focal points and can reduce contrast sensitivity. For a patient whose contrast sensitivity is already compromised by glaucoma, a monofocal or EDOF lens typically delivers better functional vision.
          </p>
          <p className="prose">
            This is one of the conversations where honesty matters most. I will never recommend a premium multifocal lens to a glaucoma patient who is unlikely to tolerate it well, even if they are hoping for spectacle independence. Getting the lens choice right is more important than making a sale.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Have glaucoma and need <strong>cataract surgery?</strong></h2>
          <p>I&rsquo;ll evaluate whether a combined approach makes sense for your eyes and your glaucoma management plan.</p>
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
