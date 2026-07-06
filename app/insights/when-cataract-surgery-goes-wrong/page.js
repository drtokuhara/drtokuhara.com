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
  title: 'What Happens When Cataract Surgery Goes Wrong (And How We Fix It) - Dr. Keith Tokuhara',
  description: 'An honest look at cataract surgery complications from a surgeon who specializes in fixing them. Dropped lenses, capsule tears, IOL exchanges, and why experience matters most when the unexpected happens.',
  keywords: ['cataract surgery complications', 'what can go wrong during cataract surgery', 'cataract surgery risks', 'cataract surgery problems', 'IOL exchange'],
  alternates: { canonical: '/insights/when-cataract-surgery-goes-wrong' },
  openGraph: {
    title: 'What Happens When Cataract Surgery Goes Wrong (And How We Fix It) | Dr. Keith Tokuhara',
    description: 'Complications are rare but real. What separates a good surgeon is how they handle the unexpected. An honest look from a surgeon who specializes in complex and revision cases.',
    url: 'https://drtokuhara.com/insights/when-cataract-surgery-goes-wrong',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Happens When Cataract Surgery Goes Wrong (And How We Fix It)',
    description: 'Every surgeon encounters complications. The question is whether yours can manage them. A surgeon with 20,000+ cases explains what can happen and how it gets fixed.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common complications of cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common complications include posterior capsule tear, retained lens fragments, corneal edema, elevated eye pressure, infection (endophthalmitis), and cystoid macular edema. Serious complications are rare, occurring in roughly 1 to 2 percent of cases, but they do happen and require prompt, skilled management.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the lens drops during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If lens fragments or the entire nucleus drops into the vitreous cavity, a second procedure called a pars plana vitrectomy is typically needed to retrieve the material. A surgeon with retinal training can often manage this without referring the patient elsewhere, reducing the number of procedures and recovery time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a cataract surgery lens implant be replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An IOL (intraocular lens) exchange is a real procedure performed when the original implant is the wrong power, has become dislocated, or is causing visual symptoms the patient cannot tolerate. It requires an experienced surgeon because removing a lens implant from inside the eye is more complex than placing one.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do complications occur during cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cataract surgery has a success rate above 98 percent. Significant complications occur in roughly 1 to 2 percent of procedures. Most complications are manageable when recognized and treated promptly by an experienced surgeon. The risk is real but low.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I have problems after cataract surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact your surgeon immediately if you experience sudden vision loss, severe pain, increasing redness, flashes of light, or a sudden increase in floaters after surgery. Most post-operative issues are treatable, especially when caught early. If your surgeon is unavailable or you feel your concerns are not being addressed, seek a second opinion from a surgeon who specializes in complex and revision cataract cases.',
      },
    },
  ],
};

const jsonLd = [
  articleSchema({
    title: 'What Happens When Cataract Surgery Goes Wrong (And How We Fix It)',
    description: 'An honest look at cataract surgery complications, what causes them, how they are managed, and why surgical experience matters most when the unexpected happens.',
    slug: '/insights/when-cataract-surgery-goes-wrong',
    datePublished: '2026-05-13',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When Cataract Surgery Goes Wrong', href: '/insights/when-cataract-surgery-goes-wrong' },
  ]),
  faqSchema,
];

export default function InsightWhenSurgeryGoesWrong() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <VideoBackground
        src="/media/ambient-precision-instrument.mp4"
        overlayOpacity={0.6}
        overlayColor="0, 20, 30"
        className="page-hero page-hero-image"
        style={{minHeight: '50vh', display: 'flex', alignItems: 'center'}}
        bottomOverlay={<AudioNarration src="/audio/narrations/when-cataract-surgery-goes-wrong.mp3" />}
      >
        <div className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Complications & Trust</span>
          <h1>What Happens When Cataract Surgery <strong>Goes Wrong</strong></h1>
          <p className="page-hero-sub">Every surgeon encounters complications. The question is whether your surgeon can manage them.</p>
          </ScrollReveal>
        </div>
      </VideoBackground>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            Nobody wants to talk about this. Not surgeons. Not patients. Not the marketing departments that build websites promising perfect outcomes. But complications during cataract surgery are real. They are rare, and they are almost always manageable, but pretending they do not exist does patients a disservice.
          </p>
          <p>
            I am going to be direct about this because I think you deserve directness. Cataract surgery is the most commonly performed surgery in the world, with a success rate above 98 percent. The vast majority of patients walk out seeing better than they have in years. But 98 percent is not 100 percent. And the 1 to 2 percent who experience a complication deserve to know what can happen, why it happens, and what separates a surgeon who can manage it from one who cannot.
          </p>
          <p>
            I write this not to frighten you. I write it because the patients I see who are most afraid are often the ones who were given no real information. Fear grows in silence. Honesty is the antidote.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The Capsule <strong>Tear</strong></h2>
          <p>
            The most well-known complication in cataract surgery is a posterior capsule tear. To understand it, you need to know a little anatomy. Your natural lens sits inside a thin, transparent bag called the capsule. During surgery, we open the front of this bag, remove the cloudy lens inside, and place a new artificial lens implant in the same bag. The back wall of the capsule, the posterior capsule, stays intact to support the new lens.
          </p>
          <p>
            Sometimes that back wall tears. It can happen because the cataract is unusually dense. It can happen because the zonules, the tiny fibers holding the bag in place, are weak. It can happen for reasons that are not always predictable. When it happens, the surgeon must make immediate decisions: Can the lens implant still go in the bag? Does it need to go in front of the bag? Have lens fragments fallen behind the bag into the vitreous cavity?
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>A capsule tear is not a failure. It is a known risk of surgery. What matters is what your surgeon does in the next sixty seconds. A well-trained surgeon adjusts the plan in real time, stabilizes the eye, and completes the procedure safely. A less experienced surgeon may panic, and panic in the operating room creates real problems.</strong></p>
          </div></BlurReveal>

          <p>
            My training under <Link href="/insights/what-i-learned-from-the-surgeon-who-trained-me">Dr. Howard Gimbel</Link> drilled one principle into me that I carry into every case: your reaction to the complication is the problem. Stay calm. Assess. Adapt. The eye does not care about your ego. It cares about what you do next.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/complex-cases-patient-hope.jpg"
              alt="Patient looking hopeful after a complex case consultation, finding clarity after uncertainty"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <BlurReveal><div className="pull-quote">
            <p>&ldquo;Fear grows in silence. Honesty is the antidote.&rdquo;</p>
          </div></BlurReveal>
          <h2 className="section-title">The Dropped <strong>Lens</strong></h2>
          <p>
            Sometimes, during or after surgery, lens material falls through the capsule into the vitreous cavity, the gel-filled space behind the lens. This is called a <Link href="/dropped-lens-after-cataract-surgery">dropped nucleus or retained lens fragments</Link>. It happens in roughly 0.3 to 1 percent of cataract surgeries, more often with very dense cataracts or weak zonular support.
          </p>
          <p>
            When this happens, a second procedure is usually required: a pars plana vitrectomy. This is a retinal surgery technique that allows the surgeon to go into the back of the eye, remove the vitreous gel, and retrieve the lens material. It sounds dramatic, and it is a real surgery, but the outcomes are generally very good when performed promptly and by an experienced surgeon.
          </p>
          <p>
            Here is where training matters in a way most patients never consider. Many cataract surgeons are not trained in vitreoretinal surgery. If a lens drops during their case, they close the eye and refer the patient to a retinal specialist, sometimes at a different facility, sometimes days later. That delay can cause inflammation, elevated eye pressure, and retinal damage.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The best time to manage a dropped lens is during the original surgery, not a week later in someone else's operating room."</p>
          </div></BlurReveal>

          <p>
            Because I completed a fellowship in vitreoretinal surgery, I can manage dropped lens fragments without referring out. This does not happen often. But when it does, the ability to handle it immediately, in one setting, under one surgeon, makes a meaningful difference in the outcome.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Corneal <strong>Problems</strong></h2>
          <p>
            The cornea, the clear front window of the eye, can be affected by cataract surgery. Most commonly, this appears as corneal edema, a swelling that makes the cornea cloudy and vision hazy. Some degree of corneal swelling is normal in the first day or two after surgery. In most patients, it resolves on its own.
          </p>
          <p>
            In rare cases, especially in eyes with pre-existing corneal conditions like Fuchs' dystrophy, the swelling persists. The inner lining of the cornea, called the endothelium, does not recover. When this happens, a corneal transplant may eventually be needed.
          </p>
          <p>
            This is why the pre-operative evaluation matters so much. A thorough surgeon checks the corneal endothelium before surgery. If the cell count is borderline, the surgical approach may need to be modified: less ultrasound energy, more viscoelastic protection, a gentler technique overall. These adjustments are not dramatic. But they require awareness, and awareness comes from experience.
          </p>
          <p>
            I tell patients with borderline corneas exactly what the risks are. Not to scare them, but so the decision is made with full information. Sometimes we proceed with modifications. Sometimes we decide to wait. Either way, the patient is part of that decision.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/patient-distress-concern.png"
              alt="Patient expressing concern, the kind of worry that brings people seeking a second opinion"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">IOL Exchange: When the Lens <strong>Needs to Change</strong></h2>
          <p>
            Not every complication happens during surgery. Sometimes the issue surfaces weeks or months later: a lens implant that is the wrong power, a multifocal lens causing intolerable glare and halos, or a lens that has shifted out of position.
          </p>
          <p>
            An IOL exchange, removing the original implant and replacing it, is a real procedure. It is more complex than the original cataract surgery because the new lens was designed to sit inside the capsular bag, and removing it means working within scar tissue and a healed eye. It requires precision, patience, and experience.
          </p>
          <p>
            I perform IOL exchanges and secondary lens implantation regularly. Many of these patients were originally operated on elsewhere and referred to me because their surgeon did not have the training or comfort level to perform the revision. The <Link href="/yamane-technique">Yamane technique</Link>, a sutureless method of fixating a lens when the capsular bag is no longer usable, is one of several approaches I use depending on the anatomy of the eye.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>If you are experiencing persistent visual problems after cataract surgery, such as constant glare, halos, blurred vision, or double images, do not assume it is "just how it is now." These symptoms may be fixable. A second opinion from a surgeon who handles revision cases can clarify your options.</strong></p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">Infection: Rare, but <strong>Serious</strong></h2>
          <p>
            Endophthalmitis, an infection inside the eye, is the complication every surgeon takes most seriously. It occurs in roughly 1 in 1,000 to 1 in 3,000 cataract surgeries. The rate has decreased significantly with modern sterile techniques, antibiotics, and surgical protocols.
          </p>
          <p>
            When it happens, it is an emergency. Symptoms typically appear within the first few days after surgery: increasing pain, worsening vision, significant redness, and swelling. Treatment must be immediate, usually involving injection of antibiotics directly into the eye and sometimes a vitrectomy to clear the infection.
          </p>
          <p>
            The reason I mention this is not to frighten anyone. It is because the single most important factor in managing endophthalmitis is speed. If you experience sudden pain and vision loss after cataract surgery, call your surgeon immediately. Do not wait to see if it gets better. Hours matter.
          </p>
          <p>
            Every step of my surgical protocol, from the pre-operative preparation to the technique itself to the post-operative regimen, is designed to minimize infection risk. But no protocol eliminates it entirely. Being aware of the signs means you can act quickly if they appear.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <div className="content-image" style={{marginBottom: '32px'}}>
            <Image
              src="/media/honest-consultation-trust.png"
              alt="Doctor and patient in an honest, trust-building conversation about surgical outcomes"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <h2 className="section-title">Why Experience <strong>Matters Most</strong></h2>
          <p>
            I want to be clear: cataract surgery is safe. It is one of the safest and most predictable surgeries in all of medicine. The complication rate is low. The vast majority of patients have excellent outcomes.
          </p>
          <p>
            But safety is not just about what happens when everything goes right. It is about what happens when something does not. A working parent who depends on their vision for their livelihood. A grandparent who wants to see their grandchildren clearly. An artist, a driver, a reader, a teacher. Every patient has a life that depends on the outcome of those 10 to 15 minutes.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>"The difference between a complication and a crisis is the surgeon's ability to manage it."</p>
          </div></BlurReveal>

          <p>
            Over 20,000 procedures, I have seen capsule tears, dropped lenses, corneal decompensation, dislocated implants, and every variation in between. I do not say this to boast. I say it because when you sit across from a surgeon and ask, "What happens if something goes wrong?", you deserve an answer that comes from experience, not theory.
          </p>
          <p>
            The surgeons I respect most are not the ones who claim they never have complications. They are the ones who tell you honestly what they have encountered, how they handled it, and what they learned. That honesty is not a weakness. It is the foundation of trust.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What Patients Can <strong>Do</strong></h2>
          <p>
            You cannot prevent every complication. But you can do several things that meaningfully improve your odds:
          </p>
          <ul className="insight-list">
            <li><strong>Choose your surgeon carefully.</strong> Ask about training, volume, and complication management capability. <Link href="/insights/how-to-choose-a-cataract-surgeon">Here is a guide</Link> for what to look for.</li>
            <li><strong>Follow pre-operative instructions exactly.</strong> The drops, the fasting, the medication adjustments: they exist for a reason.</li>
            <li><strong>Attend every follow-up appointment.</strong> Some complications develop in the days and weeks after surgery. Early detection changes outcomes.</li>
            <li><strong>Know the warning signs.</strong> Sudden pain, sudden vision loss, increasing redness, or new flashes and floaters after surgery mean you call your surgeon immediately.</li>
            <li><strong>Do not settle for "that's normal."</strong> If something feels wrong after surgery, trust your instincts. Seek a second opinion if you need to.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>A thought from the clinic</h3>
            <p>
              <em>I have spent years fixing problems that other surgeons could not. Not because those surgeons were bad, but because complications sometimes exceed a surgeon's training. The patients I see in these situations are often scared, frustrated, and feeling like they were let down. Part of my job is restoring their vision. The other part is restoring their confidence that the problem can be solved. If you are reading this because something went wrong with your surgery, know this: most complications are fixable. You may need a surgeon with specific training to fix them, but the solution usually exists. Do not give up on your vision.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>The cases other surgeons refer out. A look at what makes a case complex and how we approach it.</p>
            </Link>
            <Link href="/yamane-technique" className="related-card">
              <h3>Yamane Technique</h3>
              <p>Sutureless secondary lens fixation for eyes without capsular support.</p>
            </Link>
            <Link href="/dropped-lens-after-cataract-surgery" className="related-card">
              <h3>Dropped Lens After Cataract Surgery</h3>
              <p>What happens when lens material falls into the back of the eye, and how it is retrieved.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Cataract Surgery Complications</h3>
              <p>A comprehensive look at what can go wrong and how each complication is managed.</p>
            </Link>
            <Link href="/insights/when-your-case-isnt-routine" className="related-card">
              <h3>When Your Case Isn't Routine</h3>
              <p>Not every cataract surgery is straightforward. Here is how an experienced surgeon approaches the cases other doctors refer out.</p>
            </Link>
            <Link href="/insights/how-to-choose-a-cataract-surgeon" className="related-card">
              <h3>How to Choose a Cataract Surgeon</h3>
              <p>Five things that actually matter when selecting the surgeon for your eyes.</p>
            </Link>
            <Link href="/insights/when-experience-speaks" className="related-card">
              <h3>When Experience Speaks</h3>
              <p>The principles a surgeon carries into every operating room are invisible. But they determine everything.</p>
            </Link>
            <Link href="/insights/why-i-do-my-own-post-op" className="related-card">
              <h3>Why I Do My Own Post-Op Care</h3>
              <p>Complications are caught sooner when the operating surgeon does every follow-up exam.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow" style={{textAlign: 'center'}}>
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Need a Second <strong>Opinion?</strong></h2>
            <p style={{marginBottom: '24px'}}>If you have experienced a complication or are not satisfied with your surgical outcome, I am happy to evaluate your situation and discuss your options honestly.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
