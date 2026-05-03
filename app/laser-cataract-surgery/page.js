import Link from 'next/link';
import Image from 'next/image';
import {
  ScrollReveal,
  KineticText,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is laser cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser cataract surgery uses a femtosecond laser to perform key steps of the procedure with computer-guided precision. The laser creates the incision, opens the capsule, and breaks the cataract into smaller pieces before the surgeon completes the removal and lens implant placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is laser cataract surgery better than traditional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser cataract surgery offers enhanced precision for certain steps, particularly capsulotomy creation and astigmatism correction. For most patients, the visual outcomes are comparable to skilled traditional surgery. The laser is most beneficial for patients receiving premium lens implants where precision in capsule opening and lens positioning directly affects visual quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is laser cataract surgery painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Like traditional cataract surgery, the laser-assisted procedure uses numbing drops and mild sedation. Most patients feel pressure but no pain. The laser portion adds only a few minutes to the procedure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover laser cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insurance typically covers the standard cataract surgery portion. The femtosecond laser component is usually considered an upgrade and may involve an additional out-of-pocket cost. Dr. Tokuhara discusses all costs transparently during the consultation.',
      },
    },
  ],
};

export const metadata = {
  title: 'Laser Cataract Surgery: Precision, Technology, and What It Means for Your Vision',
  description: 'How femtosecond laser technology enhances cataract surgery precision. Dr. Tokuhara explains the technology, who benefits most, and what to expect.',
  alternates: { canonical: '/laser-cataract-surgery' },
  openGraph: {
    title: 'Laser Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Computer-guided laser precision for cataract surgery. Dr. Tokuhara explains the technology and when it makes the biggest difference.',
    url: 'https://drtokuhara.com/laser-cataract-surgery',
  },
};

export default function LaserCataractSurgery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal direction="up" once={true}><h1>Laser Cataract <strong>Surgery</strong></h1></ScrollReveal>
          <p className="page-hero-sub">There is nothing more precise than a computer-guided laser. When it comes to cataract surgery, precision is key.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container content-narrow">
          <p className="body-lead">
            When patients ask about "laser cataract surgery," they are usually asking about one specific technology: the femtosecond laser. It is a tool that allows me to perform critical steps of the cataract procedure with computer-guided precision that goes beyond what the human hand alone can achieve.
          </p>
          <p>
            That said, the laser is a tool, not a magic wand. It enhances what a skilled surgeon does. It does not replace surgical judgment, experience, or the ability to manage the unexpected. Understanding what the laser actually does, and where it makes the biggest difference, will help you make a more informed decision.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-bocce-desert.jpg" alt="Active seniors in the desert enjoying activities - the active life laser precision makes possible" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* WHAT THE LASER DOES */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Laser <strong>Actually Does</strong></h2>
          <p>
            The femtosecond laser performs three key steps of cataract surgery with remarkable precision:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>1. Creates the corneal incision</strong>
              <p>A precise, self-sealing incision at the exact location and depth programmed by the surgeon. This can also include arcuate incisions that help reduce astigmatism.</p>
            </div>
            <div className="insight-item">
              <strong>2. Opens the capsule (capsulotomy)</strong>
              <p>The laser creates a perfectly circular opening in the front of the lens capsule. This precision matters because a well-centered, symmetrical opening helps the new lens implant sit in the optimal position, which directly affects visual quality.</p>
            </div>
            <div className="insight-item">
              <strong>3. Breaks up the cataract</strong>
              <p>The laser subdivides the cataract into millions of smaller pieces before the surgeon uses instruments to remove them. This means less ultrasound energy is needed inside the eye, which can be gentler on surrounding tissue.</p>
            </div>
          </div>
          <p>
            After the laser performs these steps, the surgical team moves the patient to the operating room for the remainder of the procedure: removing the cataract fragments, taking final measurements, and placing the new lens implant.
          </p>
        </div>
      </section>

      {/* WHO BENEFITS MOST */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Who Benefits <strong>Most</strong></h2>
          <p>
            The laser enhances precision for all cataract surgery patients. But it makes the biggest measurable difference in specific situations:
          </p>
          <ul className="content-list">
            <li><strong>Premium lens implants (toric, EDOF, multifocal):</strong> These lenses depend on precise positioning inside the capsule. The laser's perfectly centered capsulotomy helps ensure the lens sits exactly where it should.</li>
            <li><strong>Astigmatism correction:</strong> Laser-created arcuate incisions are more precise and reproducible than manual blade incisions for treating corneal astigmatism.</li>
            <li><strong>Dense cataracts:</strong> Pre-fragmenting a very hard cataract with the laser reduces the ultrasound energy needed inside the eye, potentially lowering the risk of corneal swelling.</li>
          </ul>
          <p>
            For patients choosing a standard monofocal lens with minimal astigmatism, the visual outcomes of skilled traditional surgery and laser-assisted surgery are often comparable. The laser is an enhancement, not a requirement.
          </p>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-group-cycling-sunny.jpg" alt="Group cycling on a sunny day - the active life that cataract surgery with laser precision enables" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">A Patient's <strong>Perspective</strong></h2>
          <p>
            One of my patients, Christina, chose laser-assisted surgery for both eyes. She came from a technology background and valued the precision the laser offers. After her procedure, she shared her experience:
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The actual surgical procedure, the one which caused me so much anxiety, was amazingly quick and absolutely painless. Everyone always says, 'I wish I would have done it sooner.' They are looking at scenes like this beautiful desert and enjoying it so much more. It is life-changing."</p>
          </div></BlurReveal>

          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginTop: '32px'}}>
            <iframe
              src="https://www.youtube.com/embed/3vEQKShP_Tg"
              title="Laser Cataract Surgery with Dr. Tokuhara"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What to <strong>Expect</strong></h2>
          <p>
            The laser-assisted procedure follows the same overall path as traditional cataract surgery, with the laser step added before the manual portion:
          </p>
          <ul className="content-list">
            <li>You receive numbing drops and mild sedation, just like traditional surgery</li>
            <li>The laser portion takes a few additional minutes</li>
            <li>You may see a red or green light during the laser, but you will not feel pain</li>
            <li>After the laser, you move to the operating room for the remainder of the procedure</li>
            <li>Total procedure time is still well under 30 minutes</li>
            <li>Recovery is the same as traditional cataract surgery</li>
          </ul>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-couple-patio-scenic-view.jpg" alt="Couple taking in a scenic view from their patio - the clear distances that precise cataract surgery delivers" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* COST TRANSPARENCY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Cost <strong>Transparency</strong></h2>
          <p>
            Insurance covers standard cataract surgery. The femtosecond laser is typically considered an upgrade, similar to premium lens implants, and may involve an additional out-of-pocket cost.
          </p>
          <p>
            I believe in complete transparency about costs before you make any decisions. During your consultation, we will discuss whether the laser makes a meaningful difference for your specific situation and what the costs would be. I will never recommend a technology you do not need just because it is available.
          </p>
        </div>
      </section>

      {/* CLINIC THOUGHT */}
      <section className="section section-white">
        <div className="container content-narrow">
          <div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Technology is a wonderful thing when it serves the patient. The femtosecond laser genuinely enhances precision in ways that matter. But I never want a patient to feel that traditional surgery is somehow inferior. A skilled surgeon with steady hands and decades of experience can deliver outstanding results with or without a laser. The laser makes certain things more reproducible. It does not replace the judgment, adaptability, and care that define good surgery.</em>
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Learn <strong>More</strong></h2>
          <div className="related-grid">
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery</h3>
              <p>The full walkthrough of what happens during cataract surgery.</p>
            </Link>
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Understanding your lens options and how to choose.</p>
            </Link>
            <Link href="/ready-for-surgery" className="related-card">
              <h3>Ready for Surgery</h3>
              <p>What to expect before, during, and after your procedure.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
