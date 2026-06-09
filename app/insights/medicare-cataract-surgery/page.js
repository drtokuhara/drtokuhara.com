import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import AudioNarration from '../../components/AudioNarration';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  KineticText,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: "Medicare and Cataract Surgery: What's Covered and What's Not - Dr. Keith Tokuhara",
  description: 'Medicare covers standard cataract surgery with a monofocal lens. Premium lenses like toric, EDOF, and multifocal involve out-of-pocket upgrades. Laser-assisted surgery costs extra. A clear explanation of what is covered, what is not, and how to make an informed decision.',
  keywords: ['Medicare cataract surgery coverage 2026', 'premium lens out of pocket', 'cataract surgery cost Medicare', 'toric lens Medicare'],
  alternates: { canonical: '/insights/medicare-cataract-surgery' },
  openGraph: {
    title: "Medicare and Cataract Surgery: What's Covered and What's Not | Dr. Keith Tokuhara",
    description: 'Medicare covers standard surgery with a monofocal lens. Premium lenses and laser-assisted surgery involve out-of-pocket costs. A transparent breakdown.',
    url: 'https://drtokuhara.com/insights/medicare-cataract-surgery',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Medicare and Cataract Surgery: What's Covered and What's Not",
    description: 'A clear explanation of Medicare coverage for cataract surgery, premium lens upgrades, and out-of-pocket costs. No surprises.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Medicare cover cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Medicare Part B covers medically necessary cataract surgery, including the surgeon's fee, the facility fee, anesthesia, and a standard monofocal intraocular lens. You are responsible for the Part B deductible and coinsurance, unless you have a Medicare Supplement plan that covers these amounts.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare cover premium lenses for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare covers the cost of a standard monofocal lens. If you choose a premium lens like a toric lens for astigmatism correction, an extended depth of focus lens, or a multifocal lens, you pay the difference between the standard lens and the upgraded lens out of pocket. This is called a premium lens upgrade.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a premium lens upgrade cost with Medicare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The out-of-pocket cost for a premium lens upgrade varies by practice, geographic location, and the specific lens selected. Your surgeon's office will provide a detailed breakdown during the consultation. Medicare allows patients to pay for these upgrades, but the cost is not covered by Medicare or most supplemental plans.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare cover laser-assisted cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Medicare covers standard manual cataract surgery. If your surgeon offers femtosecond laser-assisted cataract surgery, the laser portion is considered an elective upgrade and involves an additional out-of-pocket fee. The rest of the surgery is still covered by Medicare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have a Medicare Advantage plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Advantage plans (Part C) must cover everything Original Medicare covers, including cataract surgery. However, coverage details, network restrictions, and out-of-pocket costs vary by plan. Check with your plan administrator and confirm that your surgeon is in-network before scheduling surgery.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: "Medicare and Cataract Surgery: What's Covered and What's Not",
    description: 'Medicare covers standard cataract surgery with a monofocal lens. Premium lenses like toric, EDOF, and multifocal involve out-of-pocket upgrades. Laser-assisted surgery costs extra. A clear explanation of what is covered, what is not, and how to make an informed decision.',
    slug: '/insights/medicare-cataract-surgery',
    datePublished: '2026-05-14',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Medicare and Cataract Surgery', href: '/insights/medicare-cataract-surgery' },
  ]),
  faqSchema,
];

export default function InsightMedicareCataractSurgery() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-architectural-precision.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/medicare-cataract-surgery.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Insurance / Decision Support</span>
          <h1>Medicare and Cataract Surgery: <strong>What's Covered and What's Not</strong></h1>
          <p className="page-hero-sub">Medicare covers standard surgery with a monofocal lens. Premium lenses and laser-assisted surgery involve out-of-pocket costs. A transparent breakdown.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            One of the most common questions patients ask during a cataract consultation is: "Will my insurance cover this?" For Medicare beneficiaries, the answer is straightforward in principle but often confusing in practice. Medicare covers cataract surgery. But it does not cover everything related to cataract surgery. Understanding what is included and what involves out-of-pocket cost helps you make an informed decision without financial surprise.
          </p>
          <p>
            This is not about upselling. It is about transparency. Medicare was designed to cover medically necessary care, and cataract surgery qualifies when your vision impairment affects daily function. But the program distinguishes between what is medically necessary and what is elective enhancement. That distinction determines what you pay.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Medicare <strong>Covers</strong></h2>
          <p>
            Medicare Part B covers medically necessary cataract surgery. This includes the surgeon's professional fee, the ambulatory surgery center or hospital facility fee, anesthesia, and a standard monofocal intraocular lens. A monofocal lens is designed to provide clear vision at one focal distance, typically optimized for distance vision. Most patients who receive a monofocal lens will need reading glasses for near tasks.
          </p>
          <p>
            Medicare also covers preoperative evaluation and postoperative follow-up visits related to the surgery. This includes the measurements, scans, and exams necessary to plan the procedure and monitor your recovery.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If you choose a standard monofocal lens and standard manual cataract surgery, your out-of-pocket cost is limited to your Medicare Part B deductible and the 20% coinsurance, unless you have a Medicare Supplement plan (Medigap) that covers these amounts. For most patients, this means cataract surgery is affordable and predictable.</strong></p>
          </div></BlurReveal>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-elderly-woman-smiling.jpg"
              alt="Smiling elderly woman feeling confident about her cataract surgery coverage"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Medicare Does <strong>Not Cover</strong></h2>
          <p>
            Medicare does not cover premium lens upgrades or elective surgical enhancements. This is where confusion often arises. The program distinguishes between restoring medically necessary vision and providing enhanced visual outcomes that go beyond medical necessity.
          </p>

          <h3>Premium Lens Upgrades</h3>
          <p>
            If you choose a lens other than a standard monofocal, you will pay an out-of-pocket upgrade fee. Premium lenses include:
          </p>

          <ul className="insight-list">
            <li><strong>Toric lenses:</strong> These lenses reduce astigmatism, providing clearer distance vision without glasses for patients with significant corneal astigmatism. Medicare covers the standard lens portion, but the toric upgrade involves an additional fee.</li>
            <li><strong>Extended Depth of Focus (EDOF) lenses:</strong> These lenses provide a continuous range of vision from distance to intermediate, reducing dependence on glasses for activities like computer work and dashboard viewing. The upgrade fee covers the difference between a standard monofocal and the EDOF lens.</li>
            <li><strong>Multifocal lenses:</strong> These lenses provide multiple focal points, allowing for distance, intermediate, and near vision with less dependence on glasses. Multifocal lenses involve the highest upgrade cost and are not appropriate for every patient.</li>
          </ul>

          <p>
            The out-of-pocket cost for premium lens upgrades varies by practice, geographic location, and the specific lens technology. Your surgeon's office will provide a detailed cost breakdown during your consultation.
          </p>

          <h3>Laser-Assisted Cataract Surgery</h3>
          <p>
            Medicare does not cover femtosecond laser-assisted cataract surgery. The laser automates certain steps of the procedure, such as creating corneal incisions and fragmenting the cataract. Some surgeons promote this as more precise or safer, though the clinical evidence does not show a significant difference in outcomes for routine cases compared to manual surgery performed by an experienced surgeon.
          </p>
          <p>
            If you choose laser-assisted surgery, you will pay an additional out-of-pocket fee for the laser portion. The rest of the procedure remains covered by Medicare.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How to Think About <strong>Upgrades</strong></h2>
          <p>
            The decision to pay for a premium lens or laser-assisted surgery should be based on your visual needs, your lifestyle, and realistic expectations, not pressure or marketing. A standard monofocal lens provides excellent vision for most patients. It is not a compromise. It is a proven, effective solution.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The right lens is the one that matches your eyes and your life. Not the one with the highest price tag."</p>
          </div></BlurReveal>

          <p>
            Premium lenses are valuable for the right patient. A working professional who spends hours at a computer and wants to minimize glasses for intermediate distances may benefit significantly from an EDOF lens. A patient with high astigmatism who wants clearer uncorrected distance vision may find a toric lens worth the upgrade. But a patient with macular degeneration, significant dry eye, or unrealistic expectations about eliminating all glasses may not benefit from a premium lens at all.
          </p>
          <p>
            Your surgeon should guide this decision based on clinical judgment, not revenue. If the conversation feels like a sales pitch, or if premium lenses are presented as universally superior without discussing tradeoffs, consider seeking a <Link href="/insights/second-opinion-cataract-surgery">second opinion</Link>.
          </p>

          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/honest-consultation-trust.png"
              alt="Doctor and patient having an honest, transparent consultation about surgical options"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <BlurReveal><div className="pull-quote">
            <p>"The conversation should never feel transactional. It should feel collaborative."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Medicare Advantage <strong>Plans</strong></h2>
          <p>
            If you have a Medicare Advantage plan (Part C) instead of Original Medicare, your coverage works differently. Medicare Advantage plans are required to cover everything Original Medicare covers, including cataract surgery. However, these plans operate within networks, and your out-of-pocket costs depend on whether your surgeon is in-network and what your specific plan's cost-sharing structure looks like.
          </p>
          <p>
            Some Medicare Advantage plans include additional benefits, such as coverage for routine eye exams or discounts on eyewear. But premium lens upgrades and laser-assisted surgery are still out-of-pocket expenses in most cases.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If you have a Medicare Advantage plan, confirm that your surgeon is in-network before scheduling surgery. Also ask whether your plan requires prior authorization for cataract surgery. Failing to obtain authorization can result in denied claims and unexpected bills.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Medigap and Supplemental <strong>Coverage</strong></h2>
          <p>
            If you have a Medicare Supplement plan (Medigap), it typically covers your Part B deductible and the 20% coinsurance for cataract surgery. This means your out-of-pocket cost for a standard monofocal lens surgery is often zero, beyond your monthly Medigap premium.
          </p>
          <p>
            Medigap plans do not cover premium lens upgrades or laser-assisted surgery fees. These remain out-of-pocket expenses regardless of your supplemental coverage.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What About <strong>Medicaid?</strong></h2>
          <p>
            If you have both Medicare and Medicaid (dual eligibility), Medicaid may cover your Medicare cost-sharing, including the Part B deductible and coinsurance. This effectively makes standard cataract surgery with a monofocal lens fully covered for dual-eligible patients.
          </p>
          <p>
            Premium lens upgrades and laser-assisted surgery are not covered by Medicaid. These remain out-of-pocket expenses.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Financial <strong>Transparency</strong></h2>
          <p>
            Any reputable practice will provide a clear, written estimate of your out-of-pocket costs before you schedule surgery. This estimate should itemize what Medicare covers and what you are responsible for paying. If a practice is vague about costs, or if you feel pressured to commit before understanding the financial details, that is a red flag.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"You should never walk out of a cataract consultation unsure of what you will pay. Transparency is not optional."</p>
          </div></BlurReveal>

          <p>
            Some practices offer payment plans or financing options for premium lens upgrades. This can make the cost more manageable, but make sure you understand the terms, including interest rates and fees.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Is the Upgrade <strong>Worth It?</strong></h2>
          <p>
            The value of a premium lens upgrade is personal. It depends on your visual goals, your tolerance for glasses, and your financial situation. There is no universal right answer.
          </p>
          <p>
            For some patients, reducing dependence on glasses is worth the investment. For others, wearing reading glasses for close-up tasks is a perfectly acceptable tradeoff for avoiding out-of-pocket costs. Both approaches are valid.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>What matters is that the decision is yours, made with full information and without pressure. A surgeon who respects that will present options, explain tradeoffs, and support whatever choice you make.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I do not benefit financially from steering patients toward premium lenses. My goal is to match the right lens to the right patient. For some, that is a monofocal lens covered entirely by Medicare. For others, it is a toric or EDOF lens that reduces their dependence on glasses in ways that genuinely improve their quality of life. The conversation should never feel transactional. It should feel collaborative. And the cost should be transparent from the beginning, not a surprise discovered after you have already committed.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Options</h3>
              <p>Monofocal, toric, extended depth of focus, and multifocal lenses explained.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>The five things that actually matter when selecting your surgeon.</p>
            </Link>
            <Link href="/insights/second-opinion-cataract-surgery" className="related-card">
              <h3>Second Opinion on Cataract Surgery</h3>
              <p>When and why seeking another perspective matters.</p>
            </Link>
            <Link href="/insights/cataract-pre-op-appointment" className="related-card">
              <h3>What to Expect at Your Pre-Op Appointment</h3>
              <p>The evaluation visit where lens selection and surgical planning happen.</p>
            </Link>
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on premium versus standard lens implants.</p>
            </Link>
            <Link href="/insights/choosing-the-standard-lens" className="related-card">
              <h3>Choosing the Standard Lens</h3>
              <p>Sometimes the standard monofocal lens is exactly the right choice.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Have <strong>Questions?</strong></h2>
            <p style={{marginBottom: '24px'}}>If you want a transparent conversation about Medicare coverage, lens options, and out-of-pocket costs, I would welcome the opportunity to discuss your specific situation.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
