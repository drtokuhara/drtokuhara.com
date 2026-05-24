import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
  VideoBackground,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'The Standard Lens Is Not a Consolation Prize - Dr. Keith Tokuhara',
  description: 'The standard monofocal lens delivers excellent distance vision after cataract surgery. For many patients, it is the right choice. Not a downgrade, not a compromise. Dr. Tokuhara explains when and why the standard lens is genuinely the best option.',
  keywords: ['standard lens cataract surgery', 'monofocal lens vs premium', 'Medicare cataract lens', 'standard IOL results', 'monofocal lens outcomes'],
  alternates: { canonical: '/insights/choosing-the-standard-lens' },
  openGraph: {
    title: 'The Standard Lens Is Not a Consolation Prize | Dr. Keith Tokuhara',
    description: 'The standard monofocal lens delivers excellent vision. For many patients, it is the right choice. Not a downgrade. A surgeon who recommends it when it fits is a surgeon you can trust.',
    url: 'https://drtokuhara.com/insights/choosing-the-standard-lens',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Standard Lens Is Not a Consolation Prize',
    description: 'For many patients, the standard monofocal lens is the best choice after cataract surgery. Not a compromise. The right lens matches your life, not your wallet.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the standard monofocal lens a good choice for cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The standard monofocal lens has decades of safety data and delivers excellent distance vision. It is the most commonly implanted lens in cataract surgery worldwide. Many patients see 20/20 or 20/25 at distance and use inexpensive reading glasses for close work. It is a proven, reliable choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the standard lens better than a premium lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard monofocal lens is often the better choice for patients with macular degeneration or other retinal conditions, patients who do not mind using reading glasses, patients whose eye measurements favor a single focal point, and patients who want to avoid the visual tradeoffs of multifocal lenses such as halos and glare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare cover the standard cataract lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Medicare Part B covers medically necessary cataract surgery including the surgeon fee, facility fee, anesthesia, and a standard monofocal lens implant. Patients are responsible for the Part B deductible and 20% coinsurance unless a Medicare Supplement plan covers those amounts. Premium lens upgrades involve additional out-of-pocket cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I need glasses after cataract surgery with a standard lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients who receive a standard monofocal lens optimized for distance will need reading glasses for close-up tasks like reading, phone use, and detailed work. Distance vision is typically excellent. Many patients find this a perfectly acceptable tradeoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some surgeons push premium lenses over the standard lens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium lenses generate additional revenue for the practice because the upgrade fee is paid out of pocket by the patient. Some practices emphasize premium lenses for financial reasons rather than clinical ones. A surgeon who recommends the standard lens when it is genuinely the best fit is prioritizing your outcome over revenue.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'The Standard Lens Is Not a Consolation Prize',
    description: 'The standard monofocal lens delivers excellent distance vision after cataract surgery. For many patients, it is the right choice. Not a downgrade, not a compromise.',
    slug: '/insights/choosing-the-standard-lens',
    datePublished: '2026-05-17',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'Choosing the Standard Lens', href: '/insights/choosing-the-standard-lens' },
  ]),
  faqSchema,
];

export default function InsightChoosingTheStandardLens() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <VideoBackground
        src="/media/ambient-desert-golden-hour.mp4"
        poster="/media/hero-standard-lens-cataract-surgery.png"
        overlayOpacity={0.55}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
            <span className="insight-hero-cluster">Lens Selection</span>
            <h1>The Standard Lens Is Not a <strong>Consolation Prize</strong></h1>
            <p className="page-hero-sub">For many patients, the standard monofocal lens is the right choice. Not a downgrade, not a compromise. The right lens matches your life, not your wallet.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            There is a quiet anxiety that patients carry into cataract consultations. Not about the surgery itself, but about the lens. They have heard from friends, from online forums, from well-meaning family members that the "basic" lens is somehow inferior. That choosing it means settling. That they are leaving better vision on the table because they could not afford the upgrade.
          </p>
          <p>
            That is not true. And it needs to be said clearly, by a surgeon who implants premium lenses regularly and still recommends the standard monofocal when it is the right choice.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Standard Lens <strong>Actually Delivers</strong></h2>
          <p>
            The standard monofocal lens is the most commonly implanted intraocular lens in cataract surgery worldwide. It has decades of safety data. It delivers excellent distance vision. Patients routinely see 20/20 or 20/25 after surgery with a well-aimed monofocal lens.
          </p>
          <p>
            That is not a consolation result. That is outstanding distance vision from a lens with a proven track record, no halos, no glare, no contrast sensitivity tradeoffs. For the things most patients care about most, driving, watching television, seeing faces clearly across a room, recognizing birds in the yard, the monofocal lens does exactly what it is supposed to do.
          </p>
          <p>
            The tradeoff is straightforward: you will likely need reading glasses for close-up tasks. Books, phone screens, restaurant menus, medication labels. For many patients, that tradeoff is perfectly reasonable.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"I had a patient last week who chose the standard lens. She is seeing 20/25. She is thrilled. She asked me if she made a mistake not getting the premium. I told her she made the best decision for her eyes."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/hero-standard-lens-cataract-surgery.png"
              alt="Patient enjoying clear distance vision after cataract surgery with a standard lens"
              width={680}
              height={383}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">When the Standard Lens Is <strong>Genuinely Better</strong></h2>
          <p>
            This is the part that does not get discussed enough. There are clinical situations where a standard monofocal lens is not just an acceptable choice. It is the better choice.
          </p>

          <h3>Macular degeneration or other retinal conditions</h3>
          <p>
            Multifocal and trifocal lenses split light into multiple focal points. That light-splitting reduces contrast sensitivity. For a patient with macular degeneration, an epiretinal membrane, or other retinal pathology, that reduction in contrast can make vision worse, not better. A monofocal lens puts all available light at one focal point, maximizing clarity where it matters most.
          </p>

          <h3>Patients who genuinely do not mind reading glasses</h3>
          <p>
            Some patients have worn reading glasses for decades and do not consider them a burden. For these patients, eliminating readers is not a priority. Spending thousands of dollars on a premium lens to solve a problem they do not have does not make sense. That is not settling. That is clarity about what matters.
          </p>

          <h3>Eye measurements that favor a single focal point</h3>
          <p>
            Corneal irregularity, previous refractive surgery, or unusual biometry can reduce the predictability of premium lens outcomes. When measurements suggest that a premium lens may not perform to its full potential, a monofocal lens targeted to the patient's dominant distance is the more reliable choice.
          </p>

          <h3>Patients who want to avoid halos and glare</h3>
          <p>
            Multifocal lenses create concentric rings that split light, which can produce halos around lights at night. Most patients adapt. Some do not. For patients who drive extensively at night, or who are particularly sensitive to visual disturbances, a monofocal lens eliminates this concern entirely.
          </p>

          <LineDraw />
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-couple-lawn-sunset-coachella.jpg"
            alt="Couple enjoying a sunset view in the Coachella Valley - the moments that matter with clear vision"
            width={1920}
            height={400}
            style={{width: "100%", height: "auto"}}
          />
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Revenue <strong>Question</strong></h2>
          <p>
            Here is something that rarely gets said out loud: premium lenses generate significantly more revenue for the surgeon and the practice than standard lenses. The upgrade fee is paid directly by the patient, outside of insurance. It is a meaningful financial incentive.
          </p>
          <p>
            That does not make premium lenses bad. They are excellent technology when matched to the right patient. But it does mean that a surgeon who recommends the standard lens, when it is genuinely the best fit for your eyes, is choosing your outcome over revenue. That is worth noticing.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If the standard lens is the right choice for your eyes, that is what I am going to recommend. I do not make more money by being honest with you. But I sleep better.</strong></p>
          </div></BlurReveal>

          <p>
            The practices that push hardest on premium lenses are not always the ones that understand them best. Understanding means knowing when not to use one. A surgeon who can explain why you should not get a premium lens demonstrates the same expertise as one who explains why you should.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What Medicare <strong>Covers</strong></h2>
          <p>
            Medicare Part B covers medically necessary cataract surgery. That includes the surgeon's fee, the facility, the anesthesia, and a standard monofocal lens implant. It also covers pre-operative measurements and post-operative care for 90 days.
          </p>
          <p>
            That is not a stripped-down version of surgery. That is cataract surgery. The same procedure, the same skill, the same attention to planning and execution. The standard lens is not "the Medicare lens" in a derogatory sense. It is the lens that Medicare recognizes as medically appropriate, because it is.
          </p>
          <p>
            If you choose a premium lens, a toric lens that reduces astigmatism, an Extended Depth of Focus (EDOF) lens, or a multifocal, you pay the difference between the standard and the upgrade out of pocket. The surgery itself is still covered. You are paying for additional lens technology, not for a better surgeon or a safer procedure.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The most expensive thing you can do is delay surgery because you do not understand the billing. Cataracts get worse. Your vision deteriorates. Daily life gets harder."</p>
          </div></BlurReveal>

          <p>
            If you have a Medicare Advantage plan (like SCAN, Alignment, or UnitedHealthcare), your network and coverage may differ from Original Medicare. Call your plan and ask specifically about cataract surgery coverage and which surgeons are in-network. If your in-network surgeon has left the area, you may have more options than you think.
          </p>
          <p style={{marginTop: '16px'}}>
            <Link href="/insights/medicare-cataract-surgery" style={{fontWeight: 600}}>Read the full Medicare coverage guide →</Link>
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Reading Glasses Are <strong>Not a Failure</strong></h2>
          <p>
            Somewhere along the way, the marketing around premium lenses created an unspoken hierarchy: glasses-free is the goal, and anything less is a compromise. That framing serves revenue. It does not serve patients.
          </p>
          <p>
            Reading glasses are inexpensive. They are available everywhere. They work perfectly well. A pair on the nightstand, one in the kitchen, one in the car. For patients who have worn readers comfortably for years, the idea of paying thousands of dollars to eliminate them is a solution looking for a problem.
          </p>
          <p>
            There is no shame in keeping a pair of reading glasses after cataract surgery. There is no downgrade in choosing a lens that gives you outstanding distance vision and asking your dollar-store readers to handle the close-up work. That is a practical, dignified, completely reasonable choice.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The Right Lens Matches <strong>Your Life</strong></h2>
          <p>
            When I sit down with a patient to discuss lens options, I am not trying to sell anything. I am trying to understand how they use their eyes. What matters to them. What bothers them about glasses and what does not. How they spend their days.
          </p>
          <p>
            For a working professional who spends hours at a computer and wants to reduce glasses dependence across multiple distances, an EDOF or multifocal lens may be genuinely worth the investment. For a retired teacher who reads for pleasure and does not mind reaching for her readers, the standard lens is not a fallback. It is exactly right.
          </p>
          <p>
            Both choices are valid. Both lead to excellent surgical outcomes. The difference is in the lifestyle fit, not in the quality of care.
          </p>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>The right lens is the one that matches your life. Not the most expensive one. Not the newest one. The one that fits how your eye is built and how you want to see the world. If that is a premium lens, I will tell you. If it is a standard monofocal, I will tell you that too. And I will mean it the same way both times.</em>
            </p>
          </div></BlurReveal>

          <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/insights/are-premium-lenses-worth-it" className="related-card">
              <h3>Are Premium Lenses Worth It?</h3>
              <p>An honest reflection on what premium lenses deliver and when they make sense.</p>
            </Link>
            <Link href="/insights/medicare-cataract-surgery" className="related-card">
              <h3>Medicare and Cataract Surgery</h3>
              <p>What is covered, what is not, and where the real out-of-pocket costs come from.</p>
            </Link>
            <Link href="/insights/three-things-patients-say" className="related-card">
              <h3>Three Things Patients Say</h3>
              <p>How three common statements in the exam room reveal which lens fits your life.</p>
            </Link>
            <Link href="/insights/the-lens-nobody-talks-about" className="related-card">
              <h3>The Lens Nobody Talks About</h3>
              <p>A patient convinced he needed a multifocal. His eyes told a different story.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
