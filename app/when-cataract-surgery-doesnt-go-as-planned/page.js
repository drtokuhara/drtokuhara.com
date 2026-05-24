import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
import {
  ScrollReveal,
  BlurReveal,
  LineDraw,
} from '../components/ScrollAnimations';
import PageFAQ from '../components/PageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do if my cataract surgery had a complication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not wait. Contact your surgeon for an honest assessment of what happened. If you are not getting clear answers or a plan, seek a second opinion from a surgeon who specializes in complex and revision cataract cases. Most complications are treatable, especially when addressed early.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is posterior capsule rupture during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posterior capsule rupture is a tear in the thin membrane that holds the lens implant in place. It occurs in roughly 1 to 2 percent of cataract surgeries. When managed by an experienced surgeon, most patients still achieve good vision. The key is recognizing it immediately and adjusting the surgical plan in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a dislocated lens implant be fixed after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A dislocated or subluxated lens implant can be repositioned or replaced. Dr. Tokuhara uses the Yamane technique, a sutureless method that anchors the lens directly into the wall of the eye. He was the first surgeon in the Coachella Valley to perform this technique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my vision still cloudy months after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common cause of cloudy vision months or years after cataract surgery is posterior capsule opacification (PCO), where the membrane behind the lens implant becomes hazy. This is not a complication but a normal healing response. It is treated with a painless, five-minute YAG laser capsulotomy in the office.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am unhappy with my premium lens after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are experiencing halos, glare, or blurry zones after a multifocal or extended depth of focus lens, the issue may be the lens itself, residual astigmatism, dry eye, or another treatable cause. A thorough evaluation can determine whether a lens exchange, additional procedure, or other treatment would help.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are retained lens fragments after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retained lens fragments are pieces of the cataract that remain in the eye after surgery, sometimes falling into the back of the eye. This can cause inflammation, elevated eye pressure, and blurred vision. A second procedure is needed to retrieve them. Dr. Tokuhara\'s retina fellowship training allows him to manage these cases that many cataract surgeons must refer out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need a second opinion after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your vision is not improving as expected, if you are experiencing new symptoms your surgeon cannot explain, or if you feel your concerns are not being taken seriously, a second opinion is reasonable. It does not mean your surgeon did anything wrong. It means you deserve clarity about what is happening and what options exist.',
      },
    },
  ],
};

export const metadata = {
  title: 'When Cataract Surgery Doesn\'t Go As Planned - Dr. Keith Tokuhara',
  description: 'Posterior capsule rupture, dislocated lenses, retained fragments, cloudy vision, unhappy with your premium lens. If something went wrong with your cataract surgery, Dr. Tokuhara specializes in figuring out what happened and what comes next.',
  keywords: [
    'cataract surgery complications',
    'cataract surgery went wrong',
    'dislocated lens implant',
    'posterior capsule rupture',
    'retained lens fragments after cataract surgery',
    'cloudy vision after cataract surgery',
    'unhappy with premium lens',
    'cataract surgery second opinion',
    'revision cataract surgery',
    'cataract surgery repair',
  ],
  alternates: { canonical: '/when-cataract-surgery-doesnt-go-as-planned' },
  openGraph: {
    title: 'When Cataract Surgery Doesn\'t Go As Planned | Dr. Keith Tokuhara',
    description: 'Complications are rare but real. If your surgery did not go as expected, most problems can be evaluated, explained, and often improved. Dr. Tokuhara specializes in complex and revision cataract cases.',
    url: 'https://drtokuhara.com/when-cataract-surgery-doesnt-go-as-planned',
    images: [{ url: '/media/hero-when-surgery-doesnt-go-as-planned.png', width: 1536, height: 1024 }],
  },
};

const jsonLd = [
  articleSchema({
    title: 'When Cataract Surgery Doesn\'t Go As Planned',
    description: 'A patient-centered guide to cataract surgery complications, what they mean, and what can be done. From a surgeon who specializes in the cases other practices refer out.',
    slug: '/when-cataract-surgery-doesnt-go-as-planned',
    datePublished: '2026-05-17',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'When Surgery Doesn\'t Go As Planned', href: '/when-cataract-surgery-doesnt-go-as-planned' },
  ]),
  faqSchema,
];

const pageFaqs = [
  { q: 'What should I do if my cataract surgery had a complication?', a: 'Do not wait. Contact your surgeon for an honest assessment of what happened. If you are not getting clear answers or a plan, seek a second opinion from a surgeon who specializes in complex and revision cataract cases. Most complications are treatable, especially when addressed early.' },
  { q: 'What is posterior capsule rupture during cataract surgery?', a: 'Posterior capsule rupture is a tear in the thin membrane that holds the lens implant in place. It occurs in roughly 1 to 2 percent of cataract surgeries. When managed by an experienced surgeon, most patients still achieve good vision. The key is recognizing it immediately and adjusting the surgical plan in real time.' },
  { q: 'Can a dislocated lens implant be fixed after cataract surgery?', a: 'Yes. A dislocated or subluxated lens implant can be repositioned or replaced. Dr. Tokuhara uses the Yamane technique, a sutureless method that anchors the lens directly into the wall of the eye. He was the first surgeon in the Coachella Valley to perform this technique.' },
  { q: 'Why is my vision still cloudy months after cataract surgery?', a: 'The most common cause of cloudy vision months or years after cataract surgery is posterior capsule opacification (PCO), where the membrane behind the lens implant becomes hazy. This is not a complication but a normal healing response. It is treated with a painless, five-minute YAG laser capsulotomy in the office.' },
  { q: 'What if I am unhappy with my premium lens after cataract surgery?', a: 'If you are experiencing halos, glare, or blurry zones after a multifocal or extended depth of focus lens, the issue may be the lens itself, residual astigmatism, dry eye, or another treatable cause. A thorough evaluation can determine whether a lens exchange, additional procedure, or other treatment would help.' },
  { q: 'What are retained lens fragments after cataract surgery?', a: 'Retained lens fragments are pieces of the cataract that remain in the eye after surgery, sometimes falling into the back of the eye. This can cause inflammation, elevated eye pressure, and blurred vision. A second procedure is needed to retrieve them. Dr. Tokuhara\'s retina fellowship training allows him to manage these cases that many cataract surgeons must refer out.' },
  { q: 'How do I know if I need a second opinion after cataract surgery?', a: 'If your vision is not improving as expected, if you are experiencing new symptoms your surgeon cannot explain, or if you feel your concerns are not being taken seriously, a second opinion is reasonable. It does not mean your surgeon did anything wrong. It means you deserve clarity about what is happening and what options exist.' },
];

export default function WhenSurgeryDoesntGoAsPlanned() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* HERO */}
      <section className="page-hero page-hero-image" style={{minHeight: '50vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/hero-when-surgery-doesnt-go-as-planned.png"
          alt="A quiet moment of reflection - finding clarity after uncertainty"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,20,30,0.55), rgba(0,20,30,0.7))'}} />
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <ScrollReveal direction="up" once={true}>
            <h1>When Cataract Surgery Doesn't Go <strong>As Planned</strong></h1>
          </ScrollReveal>
          <p className="page-hero-sub">If something went wrong, you deserve answers, not silence. Most complications can be evaluated, explained, and often improved.</p>
        </div>
      </section>

      {/* OPENING - EMPATHY FIRST */}
      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead">
            You were told cataract surgery would be straightforward. You expected to see clearly. And now something is not right.
          </p>
          <p>
            Maybe your vision is blurry when it should be sharp. Maybe you see halos or glare that were not there before. Maybe you were told there was a complication during surgery and no one has clearly explained what that means for you. Maybe it has been months and you still do not feel like things are the way they should be.
          </p>
          <p>
            If that is where you are, this page is for you.
          </p>
          <p>
            Cataract surgery has one of the highest success rates of any surgery performed today. But "highest success rate" still means a small number of cases do not go perfectly. If you are in that small number, the statistic does not comfort you. What matters is what happens next.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* COMPLICATIONS OVERVIEW */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Might Have <strong>Happened</strong></h2>
          <p>
            These are the most common situations that bring patients to Dr. Tokuhara after surgery elsewhere. Each one is different. Each one has options.
          </p>
        </div>
      </section>

      {/* PCR */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Posterior Capsule <strong>Rupture</strong></h2>
          <p>
            During cataract surgery, the natural lens sits inside a thin membrane called the capsule. The surgeon opens the front, removes the cloudy lens, and places the new implant inside. The back wall of the capsule, just two to four micrometers thin, stays intact to support the implant.
          </p>
          <p>
            When that back wall tears, it is called a posterior capsule rupture. It happens in roughly 1 to 2 percent of cataract surgeries. It can happen to any surgeon, with any patient. What separates outcomes is how the surgeon responds in the next sixty seconds.
          </p>
          <p>
            When managed by a surgeon with the training to recognize it instantly and adapt the plan, most patients still achieve good vision. When it is not managed well, it can lead to lens fragments falling into the back of the eye, the need for additional surgery, or a lens implant that does not stay centered.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>Dr. Tokuhara has managed hundreds of capsule rupture cases, both his own and those referred from other surgeons. His cataract training during residency under Dr. Howard Gimbel at Loma Linda drilled one principle: your reaction to the complication is the problem. Stay calm. Assess. Adapt.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* DISLOCATED LENS */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Dislocated Lens <strong>Implant</strong></h2>
          <p>
            The lens implant placed during cataract surgery is designed to last a lifetime. In most cases, it does. But sometimes, weeks, months, or even years later, the support structures weaken and the lens shifts out of position. Patients describe it as shaky vision, a feeling that the world moves when their eyes move, or a sudden change in how clearly they see.
          </p>
          <p>
            This requires a second procedure to reposition or replace the lens. Dr. Tokuhara was the first surgeon in the Coachella Valley to perform the <Link href="/yamane-technique" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>Yamane technique</Link>, a sutureless method that anchors the lens haptics directly into the wall of the eye. No stitches. No large incisions. A stable, centered implant.
          </p>
          <p>
            If your lens has shifted and your surgeon is recommending referral, this is the kind of case Dr. Tokuhara sees regularly.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* RETAINED FRAGMENTS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Retained Lens <strong>Fragments</strong></h2>
          <p>
            Sometimes, pieces of the cataract are left behind during surgery. They may remain in the front of the eye, or they may fall through a capsule tear into the vitreous, the gel-filled space behind the lens. When this happens, patients often experience persistent inflammation, elevated eye pressure, and blurred vision that does not improve with time.
          </p>
          <p>
            Retrieving retained fragments requires a second procedure. Many cataract surgeons refer these cases to a retinal specialist because the fragments are in the back of the eye. Dr. Tokuhara's retina fellowship training means he can evaluate and manage these cases directly, reducing the number of surgeons, facilities, and procedures involved.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>The best time to address retained fragments is promptly. Waiting can lead to chronic inflammation, retinal damage, and elevated pressure that becomes harder to control. If you were told "we'll watch it," get a second opinion.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* CLOUDY VISION AFTER SURGERY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Cloudy Vision <strong>After Surgery</strong></h2>
          <p>
            If your vision was clear after cataract surgery and then gradually became cloudy again, the most likely cause is posterior capsule opacification (PCO). This is not a complication and it does not mean your surgery failed. It is a normal part of how some eyes heal. Cells on the capsule behind your lens implant multiply and create a hazy film.
          </p>
          <p>
            The treatment is a <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>YAG laser capsulotomy</Link>: a painless, five-minute in-office procedure that clears the cloudiness permanently. No incision. No anesthesia. Your vision typically clears within hours.
          </p>
          <p>
            Up to 20 to 30 percent of patients develop PCO within five years of surgery. If this is what you are experiencing, the fix is one of the most straightforward in all of ophthalmology.
          </p>
          <p>
            However, not all cloudy vision after surgery is PCO. Persistent corneal swelling, cystoid macular edema, or other issues can also cause blur. A thorough evaluation is the first step to understanding what is happening and what to do about it.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* UNHAPPY WITH PREMIUM LENS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Unhappy With Your <strong>Premium Lens</strong></h2>
          <p>
            You invested in a multifocal or extended depth of focus (EDOF) lens because you wanted to reduce your dependence on glasses. But now you see halos around lights at night. Or glare that makes driving uncomfortable. Or blurry zones at certain distances that were not part of the expectation.
          </p>
          <p>
            Before assuming the lens is wrong, understand this: many of these symptoms have treatable causes that have nothing to do with the lens itself.
          </p>
          <ul className="content-list">
            <li><strong>Residual astigmatism.</strong> Even a small amount of uncorrected astigmatism can degrade the performance of a premium lens. This may be treatable with a follow-up procedure or laser enhancement.</li>
            <li><strong>Dry eye.</strong> An unstable tear film distorts the optical surface of your eye, creating glare and blur that mimics a lens problem. Aggressive dry eye treatment often resolves the symptoms.</li>
            <li><strong>Posterior capsule opacification.</strong> The hazy film described above can reduce the clarity of any lens, but it is especially noticeable with premium optics. A <Link href="/yag-laser-capsulotomy" style={{color: 'var(--night-horizon)', textDecoration: 'underline'}}>YAG capsulotomy</Link> may be all you need.</li>
            <li><strong>Neuroadaptation.</strong> Some patients need weeks or months for their brain to adjust to a new optical system, particularly with multifocal lenses.</li>
          </ul>
          <p>
            If the lens truly is the problem, a lens exchange is an option. It is a more complex surgery than the original, but Dr. Tokuhara performs IOL exchanges and secondary lens implantation regularly. The goal is always to understand the full picture first and intervene only when the diagnosis is clear.
          </p>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* MICRO-STORY */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Sometimes, the Problem Is What You Were <strong>Told</strong></h2>
          <p>
            Not every situation that brings patients here is a surgical complication. Sometimes the problem is that someone was told their options were limited when they were not.
          </p>
          <p>
            She was 82 and sharp. Read the newspaper every morning without glasses. Drove herself to every appointment. Her doctor said she had cataracts in both eyes and needed surgery. That part she understood.
          </p>
          <p>
            What she did not understand was why the surgeon told her she was too old for a premium lens. He did not explain the reasoning. Just said it was not recommended for her age group. She should go with the standard option.
          </p>
          <p>
            She went home and told her daughter. Her daughter went online. Two hours later, they had a list of questions and an appointment at Desert Vision Center.
          </p>
          <p>
            Dr. Tokuhara spent forty minutes with her. He looked at the measurements. He looked at her eyes. He told her that age alone does not disqualify anyone from a premium lens. What matters is the health of the eye, the stability of the measurements, and the patient's visual goals. Her eyes were healthy. Her measurements were stable. She wanted to keep reading the newspaper.
          </p>
          <p>
            They talked through the options. She chose the Vivity lens. Extended depth of focus. Good distance. Good intermediate. Functional reading for most tasks.
          </p>
          <p>
            After surgery, she came back for her one-week check. She was reading the newspaper again. No glasses.
          </p>
          <p>
            She asked Dr. Tokuhara if the other surgeon was wrong.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"He was not wrong about being careful. He was wrong about what careful means."</p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white"><div className="container content-narrow"><LineDraw /></div></section>

      {/* WHY DR. T */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Patients Come Here <strong>After</strong></h2>
          <p>
            A significant part of Dr. Tokuhara's practice involves seeing patients who experienced complications from cataract surgery performed elsewhere, or who were told there was nothing more that could be done.
          </p>
          <ul className="content-list">
            <li><strong>Cataract training under Dr. Howard Gimbel during residency at Loma Linda</strong> provided the foundation for managing the most technically demanding cataract complications, including capsule rupture management techniques still taught worldwide.</li>
            <li><strong>Retina fellowship training</strong> means he evaluates both the front and back of the eye. Many complications involve both. Most cataract surgeons can only manage one.</li>
            <li><strong>First surgeon in the Coachella Valley to perform the <Link href="/yamane-technique" style={{color: 'var(--night-horizon)'}}>Yamane technique</Link></strong> for sutureless secondary lens fixation.</li>
            <li><strong>Physician-owned, independent practice.</strong> No corporate protocol telling him to refer out instead of managing the case himself. No assembly-line schedule that leaves no room for the unexpected.</li>
          </ul>

          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>Every surgeon has complications. The question is what they do next. Do they manage it themselves, or do they send you somewhere else and hope for the best? I would rather be the surgeon you never need for a revision case. But if you do need one, I want you to know that the problem can usually be solved, and that solving it is something I do regularly, not reluctantly.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      {/* WHAT TO DO NOW */}
      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What to Do <strong>Now</strong></h2>

          <div style={{display: 'grid', gap: '16px', marginTop: '24px'}}>
            <div style={{background: 'var(--white)', padding: '24px', borderRadius: '8px', borderLeft: '3px solid var(--oasis)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px'}}>1. Do not wait.</h3>
              <p style={{margin: 0, fontSize: '15px'}}>Complications addressed early tend to have better outcomes than ones left alone hoping they will improve. If something does not feel right, trust that instinct.</p>
            </div>
            <div style={{background: 'var(--white)', padding: '24px', borderRadius: '8px', borderLeft: '3px solid var(--oasis)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px'}}>2. Get clear answers.</h3>
              <p style={{margin: 0, fontSize: '15px'}}>You deserve to understand what happened. If your surgeon is not explaining clearly, a second opinion is not disloyal. It is responsible.</p>
            </div>
            <div style={{background: 'var(--white)', padding: '24px', borderRadius: '8px', borderLeft: '3px solid var(--oasis)'}}>
              <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '8px'}}>3. Know that most problems have solutions.</h3>
              <p style={{margin: 0, fontSize: '15px'}}>Not every case can be fixed perfectly. But most can be improved significantly. The first step is understanding exactly what happened.</p>
            </div>
          </div>

          <div style={{marginTop: '40px', textAlign: 'center'}}>
            <p style={{marginBottom: '24px', fontSize: '17px'}}>Dr. Tokuhara sees complex and revision cases every week. If you have questions about what happened with your surgery, start with a conversation.</p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
              <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">When to Call <strong>Immediately</strong></h2>
          <p>These symptoms after cataract surgery need same-day evaluation:</p>
          <ul className="content-list">
            <li><strong>Sudden decrease in vision</strong></li>
            <li><strong>Increasing pain</strong> not relieved by over-the-counter medication</li>
            <li><strong>Flashes of light</strong> or a sudden increase in floaters</li>
            <li><strong>A shadow or curtain</strong> in your peripheral vision</li>
            <li><strong>Increasing redness</strong> that gets worse after the first day</li>
          </ul>
          <p>
            These do not necessarily mean something is wrong. But they warrant prompt evaluation. The earlier a problem is identified, the better the outcome.
          </p>
        </div>
      </section>

      <PageFAQ faqs={pageFaqs} />

      {/* RELATED */}
      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Learn <strong>More</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Cataract Surgery Complications</h3>
              <p>A comprehensive clinical reference for every major complication, with research data and management strategies.</p>
            </Link>
            <Link href="/yamane-technique" className="related-card">
              <h3>Yamane Technique</h3>
              <p>Sutureless lens fixation for dislocated implants, explained step by step.</p>
            </Link>
            <Link href="/yag-laser-capsulotomy" className="related-card">
              <h3>YAG Laser Capsulotomy</h3>
              <p>The five-minute fix for cloudy vision after cataract surgery.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>When other eye conditions make cataract surgery more challenging.</p>
            </Link>
            <Link href="/insights/when-cataract-surgery-goes-wrong" className="related-card">
              <h3>When Cataract Surgery Goes Wrong</h3>
              <p>An honest look at capsule tears, dropped lenses, IOL exchanges, and why experience matters most.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>Why experience and honesty matter more than marketing.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
