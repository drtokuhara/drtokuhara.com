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
    title: 'Pseudoexfoliation Syndrome and Cataract Surgery',
    description: 'Pseudoexfoliation weakens the lens support system, making cataract surgery higher risk. Dr. Tokuhara explains the condition, surgical challenges, and his approach.',
    slug: '/complex-cases/pseudoexfoliation',
    datePublished: '2026-05-01',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Complex Cases', href: '/complex-cases' },
    { name: 'Pseudoexfoliation', href: '/complex-cases/pseudoexfoliation' },
  ]),
];

export const metadata = {
  title: 'Pseudoexfoliation Syndrome and Cataract Surgery - Weak Zonules, Higher Risk',
  description: 'Pseudoexfoliation syndrome weakens the zonules that hold your lens in place, making cataract surgery more complex. Learn how Dr. Tokuhara manages these cases with capsular tension rings and staged approaches.',
  alternates: { canonical: '/complex-cases/pseudoexfoliation' },
  openGraph: {
    title: 'Pseudoexfoliation & Cataract Surgery | Dr. Keith Tokuhara',
    description: 'Weak zonules from pseudoexfoliation require expert surgical planning. Desert Vision Center.',
    url: 'https://drtokuhara.com/complex-cases/pseudoexfoliation',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [

    { '@type': 'Question', name: "What is pseudoexfoliation and how does it affect cataract surgery?", acceptedAnswer: { '@type': 'Answer', text: "Pseudoexfoliation syndrome produces flaky protein deposits that accumulate on the lens capsule and weaken the zonular fibers that hold the lens in place. This increases the risk of lens instability during and after cataract surgery. An experienced surgeon uses specialized techniques to manage this safely." } },
    { '@type': 'Question', name: "Is cataract surgery riskier with pseudoexfoliation?", acceptedAnswer: { '@type': 'Answer', text: "Pseudoexfoliation does increase surgical complexity because the lens support structures may be weakened. However, an experienced surgeon who recognizes and plans for this can achieve excellent outcomes. Dr. Tokuhara evaluates zonular integrity before surgery and uses capsular support devices when needed." } }
  ],
};

export default function PseudoexfoliationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero">
        <div className="container">
          <h1>Pseudoexfoliation <strong>Syndrome</strong></h1>
          <p className="page-hero-sub">When the support system holding your lens in place is compromised, the entire surgical approach changes.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 1, 2026" />

          <h2 className="section-title">What Is <strong>Pseudoexfoliation?</strong></h2>
          <p className="prose">
            Pseudoexfoliation syndrome, sometimes called PXF or PEX, is a condition where the eye produces an abnormal protein material that accumulates on structures inside the eye, including the lens capsule, the zonules (the tiny fibers that hold the lens in place), the iris, and the drainage system. It is one of the most common identifiable causes of open-angle glaucoma worldwide.
          </p>
          <p className="prose">
            For cataract surgery, pseudoexfoliation matters because it weakens the zonules. Think of the zonules as suspension cables holding your lens centered behind the pupil. When those cables fray or break, the lens becomes unstable. It may tilt, shift, or in advanced cases, partially dislocate. Operating on an eye with weak zonules requires a fundamentally different surgical approach than operating on an eye with healthy support.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-group-dinner-party-outdoor.jpg"
              alt="Active seniors enjoying an outdoor dinner in the desert - living well with age-related eye conditions"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">The Surgical <strong>Challenge</strong></h2>
          <p className="prose">
            In a standard cataract surgery, I rely on the zonules to hold the lens capsule steady while I work. I make an opening in the front of the capsule, break up and remove the cataract, and place a new lens implant inside that capsular bag. The zonules keep everything centered and stable.
          </p>
          <p className="prose">
            With pseudoexfoliation, those zonules may be stretched, thinned, or partially broken. The capsular bag is unstable. If I apply the same forces I would use in a normal case, I risk tearing the capsule or completely dislocating the bag and its contents. The pupil is often small and dilates poorly, adding another layer of difficulty. And because pseudoexfoliation also affects the eye's drainage system, there may be elevated eye pressure to manage as well.
          </p>

          <h2 className="section-title">My <strong>Approach</strong></h2>
          <p className="prose">
            When I identify pseudoexfoliation before surgery, the entire plan changes:
          </p>
          <ul className="content-list">
            <li><strong>Capsular tension rings (CTR):</strong> These are small, flexible rings that I place inside the capsular bag to redistribute the stress evenly. They stabilize a compromised bag and help maintain lens centration long-term.</li>
            <li><strong>Capsule retractors and iris hooks:</strong> In severe cases, I use specialized hooks to support the capsule during surgery and pupil expanders to maintain adequate working space.</li>
            <li><strong>Modified surgical technique:</strong> Lower flow rates, gentler aspiration, and meticulous attention to the capsule at every step. I avoid maneuvers that would stress already weakened zonules.</li>
            <li><strong>Staged approaches:</strong> In some advanced cases, the safest path is to stage the procedure. I may perform initial capsular stabilization and cataract removal, then place the lens implant in a second procedure once I know the capsular bag will remain stable.</li>
          </ul>
          <p className="prose">
            The critical thing is recognizing pseudoexfoliation before surgery. I look for it at every preoperative exam: the characteristic white, flaky material on the lens and iris, the decentered pupil, the poor dilation. Knowing what I am dealing with means I can prepare the right instruments, plan the right technique, and avoid the surprises that lead to complications.
          </p>

          <div className="content-image" style={{margin: '32px 0'}}>
            <Image
              src="/media/stock-couple-brunch-patio.jpg"
              alt="Seniors toasting at an outdoor dinner gathering in the Coachella Valley"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">Long-Term <strong>Considerations</strong></h2>
          <p className="prose">
            Even after successful surgery, pseudoexfoliation does not go away. The condition can continue to affect the eye, and there is a higher risk of the lens implant shifting position years later as the zonules continue to weaken. That is why I follow these patients closely and why I use capsular tension rings - they provide a long-term stabilization benefit, not just an intraoperative one.
          </p>
          <p className="prose">
            If you have been told you have pseudoexfoliation, it does not mean you cannot have cataract surgery. It means you need a surgeon who recognizes the condition, respects it, and has the techniques to manage it. This is one of the complex scenarios I handle routinely.
          </p>
        </div>
      </section>

      <LineDraw style={{margin: "0 auto", maxWidth: "200px"}} color="var(--oasis)" />
      <section className="cta">
        <div className="container">
          <h2>Diagnosed with pseudoexfoliation and considering <strong>cataract surgery?</strong></h2>
          <p>I&rsquo;ll evaluate your zonular integrity, plan the right approach, and make sure your lens implant stays where it belongs.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/complex-cases" className="btn-secondary">Back to Complex Cases</Link>
          </div>
        </div>
      </section>
    </>
  );
}
