import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../schema';
import AuthorByline from '../components/AuthorByline';
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
      name: 'Is cataract surgery safe for someone with only one seeing eye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it requires exceptional care and preparation. The stakes are higher than standard cataract surgery because there is no backup eye. With the right surgeon, thorough preoperative evaluation, and a detailed surgical plan, monocular cataract surgery can be performed safely and with excellent outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does monocular cataract surgery require extra preparation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When only one eye functions, any complication - however rare - could result in total vision loss. A surgeon treating a monocular patient must account for every possible scenario, spend more time in evaluation, and have the training to handle complex intraoperative situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What qualifications should a surgeon have to operate on a monocular patient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Look for a surgeon with dual fellowship training in both cataract and retinal surgery. This dual expertise means the surgeon understands the risks from both the front and back of the eye. Dr. Tokuhara's fellowship training covers both cataract and retinal surgery, which is specifically relevant for monocular cases.",
      },
    },
    {
      '@type': 'Question',
      name: 'Harold Baird saw three surgeons before choosing Dr. Tokuhara. What should I look for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for a surgeon who spends real time with you - not a few minutes - and runs out of answers before you run out of questions. The first consultation should feel thorough, not rushed. For monocular surgery, you want someone who treats your case with the weight it deserves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a monocular cataract patient achieve good vision without glasses after surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Harold Baird went from minus 4.25 nearsighted to no glasses needed after his surgery with Dr. Tokuhara, achieving 20/20 or better vision with no astigmatism. The goal of precise lens power selection applies equally - and arguably more carefully - to monocular patients.',
      },
    },
  ],
};

const jsonLd = [
  faqSchema,
  articleSchema({
    title: 'Cataract Surgery in a Monocular Eye: When Your Only Seeing Eye Needs Surgery',
    description: 'When your only functioning eye develops a cataract, the stakes are the highest in all of cataract surgery. Dr. Tokuhara explains the preparation, the approach, and the results.',
    slug: '/monocular-cataract-surgery',
    datePublished: '2026-05-03',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Monocular Cataract Surgery', href: '/monocular-cataract-surgery' },
  ]),
];

export const metadata = {
  title: 'Cataract Surgery in a Monocular Eye: When Your Only Seeing Eye Needs Surgery',
  description: 'When your only functioning eye develops a cataract, the stakes are higher than any other cataract surgery. Dr. Tokuhara explains his approach to monocular patients - and the result Harold Baird achieved: 20/20 vision, no glasses.',
  alternates: {
    canonical: '/monocular-cataract-surgery',
  },
  openGraph: {
    title: 'Monocular Cataract Surgery | Dr. Keith Tokuhara',
    description: 'High-stakes cataract surgery for patients with only one functioning eye. Dual fellowship training, thorough evaluation, and exceptional results.',
    url: 'https://drtokuhara.com/monocular-cataract-surgery',
  },
};

export default function MonocularCataractSurgeryPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="page-hero">
        <div className="container">
          <KineticText
            text="Cataract Surgery in a Monocular Eye"
            Tag="h1"
            mode="word"
            staggerDelay={0.05}
          />
          <ScrollReveal direction="up" delay={0.3} once={true}>
            <p className="page-hero-sub">
              When your only functioning eye develops a cataract, the stakes are the highest in all of cataract surgery. Here is how I approach these cases.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline date="May 3, 2026" />

          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">What <strong>Monocular Vision</strong> Means</h2>
          </ScrollReveal>
          <p className="prose">
            Monocular patients are people who have functional vision in only one eye. The other eye may have been blind from birth, lost to injury, or damaged by a prior condition like a retinal detachment. Whatever the reason, there is only one eye doing all the visual work. And when that eye develops a cataract, that patient faces a decision unlike any other in eye care.
          </p>
          <p className="prose">
            This is not like standard cataract surgery, where a patient has a second eye as a backup. Here, if something goes wrong - if a rare but serious complication occurs - the patient has no vision left to fall back on. That reality changes everything about how the surgery should be planned and performed.
          </p>

          <div className="content-image" style={{ margin: '32px 0' }}>
            <Image
              src="/media/stock-man-portrait-outdoor-dining.jpg"
              alt="Man reading comfortably - what monocular patients are working to preserve"
              width={680}
              height={453}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <h2 className="section-title">The Highest-Stakes <strong>Cataract Surgery</strong></h2>
          <p className="prose">
            When I say this is the highest-stakes cataract surgery, I mean it precisely. Standard cataract surgery carries a very small risk of serious complications - posterior capsule rupture, retinal detachment, infection, elevated pressure. These risks are low, and for a patient with two seeing eyes, they are manageable. The other eye provides vision while the affected eye recovers or is treated.
          </p>
          <p className="prose">
            For a monocular patient, the same low probability events carry a completely different consequence. There is no second eye. The margin for error is smaller, the psychological stakes are higher, and the preparation must be correspondingly more thorough.
          </p>
          <p className="prose">
            This is why I believe monocular patients deserve a surgeon who specifically acknowledges the stakes, rather than treating the case like any other cataract. The technical steps of cataract surgery are the same. But the thinking before, during, and after must be different.
          </p>

          <LineDraw style={{ margin: '40px auto', maxWidth: '160px' }} color="var(--oasis)" />

          <h2 className="section-title">Harold Baird: <strong>Scared Out of His Mind</strong></h2>
          <p className="prose">
            Harold Baird came to me from Michigan. He had been blind in his left eye since the age of five. In 1982, his right eye - his only seeing eye - suffered a retinal detachment. He survived that. But over the years, a cataract developed in that same eye. The eye that had already been through so much.
          </p>
          <p className="prose">
            He saw three different surgeons before he came to me. He was, in his own words, "scared out of their mind." And he had every right to be. Anyone in his position who is not scared probably does not fully understand what is at stake.
          </p>
          <p className="prose">
            When Harold came to my office, I did something I do with every monocular patient: I took a lot of time. His first exam was 70 minutes. We went through everything. His history, his prior retinal surgery, the state of his eye now, the lens options, the risks, the plan. By the time we finished, Harold said he had run out of questions.
          </p>

          <BlurReveal>
            <div className="pull-quote">
              <p>"I ran out of questions. He answered everything I had."</p>
              <cite>Harold Baird, Michigan</cite>
            </div>
          </BlurReveal>

          <p className="prose">
            Harold's surgery went very well. He achieved 20/20 or better vision. No astigmatism. He went from minus 4.25 nearsighted to needing no glasses at all. For someone who had been managing with only one compromised eye his whole adult life, that result was life-changing.
          </p>

          <div className="video-section" style={{ marginTop: '32px' }}>
            <div className="video-grid video-grid-1">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/vdD3lBubt58"
                    title="Harold Baird: Cataract Surgery in a Monocular Eye - Dr. Tokuhara"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="video-label">Harold Baird: Cataract Surgery in His Only Seeing Eye</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">How I Approach <strong>Monocular Cases</strong></h2>
          <p className="prose">
            My approach to monocular cataract surgery starts long before the operating room. Here is what that looks like:
          </p>
          <ul className="content-list">
            <li>
              <strong>Extra time at consultation:</strong> I do not rush monocular evaluations. Harold's first exam was 70 minutes. I want every question answered before the patient leaves, and I want to understand their specific history thoroughly - especially if there has been prior retinal surgery.
            </li>
            <li>
              <strong>Complete retinal assessment:</strong> My dual fellowship training covers both cataract surgery and retinal surgery. I know how to evaluate the back of the eye, and I know what prior retinal surgery means for the surgical approach. For a patient with a history of retinal detachment, this knowledge is directly relevant.
            </li>
            <li>
              <strong>Thorough preoperative imaging:</strong> Advanced biometry, optical coherence tomography, and careful review of prior surgical records give me the full picture before we start.
            </li>
            <li>
              <strong>Honest risk discussion:</strong> I do not minimize the risks to make the patient feel better. I explain them accurately, in proportion to their actual probability, and I explain what I would do if a complication occurred. Patients deserve honesty, not false reassurance.
            </li>
            <li>
              <strong>Precise lens selection:</strong> For monocular patients, getting the target refraction right matters enormously. There is no second eye to compensate. I take lens calculations seriously for every patient, and for monocular patients that care is even more critical.
            </li>
          </ul>

          <BlurReveal>
            <div className="clinic-thought">
              <h3>What I tell monocular patients</h3>
              <p>
                <em>I will not tell you this surgery carries no risk. Every surgery does. What I will tell you is that I know exactly what is at stake, I will prepare more thoroughly than you have ever experienced, and I will treat your eye with the same level of focus I would want a surgeon to give to my own only eye. That is the standard I hold myself to for every monocular case.</em>
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="section section-white" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="container content-narrow">
          <div className="content-image">
            <Image src="/media/stock-seniors-evening-stroll.jpg" alt="Seniors enjoying an evening walk - the confident, independent life that good surgical outcomes make possible" width={680} height={453} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">Why Dual Fellowship <strong>Training Matters</strong></h2>
          <p className="prose">
            Most cataract surgeons complete a single fellowship in anterior segment surgery. I completed fellowship training that covers both cataract surgery and retinal surgery under Dr. Howard Gimbel at Loma Linda University - one of the most respected cataract training programs in the world.
          </p>
          <p className="prose">
            For most cataract patients, retinal training is not specifically relevant. For monocular patients - especially those who have had prior retinal surgery, retinal detachments, or retained silicone oil - it changes everything. I understand the anatomy, the prior interventions, and the risks from the back of the eye, not just the front.
          </p>
          <p className="prose">
            Harold Baird had a retinal detachment repair in 1982. Understanding exactly what was done, what the current retinal anatomy looks like, and how to protect it during cataract surgery is part of why his outcome was as good as it was.
          </p>

          <h2 className="section-title">The Emotional <strong>Weight</strong></h2>
          <p className="prose">
            I want to be direct about something: monocular patients are often terrified. Harold described himself as "scared out of their mind," and that is not an unusual reaction. It is a rational one. When your only eye needs surgery, the fear is proportionate to the reality.
          </p>
          <p className="prose">
            Part of my job - a part I take seriously - is to sit with that fear honestly. Not to minimize it or talk past it, but to give patients the information and the presence they need to make a confident decision. For some patients, that means spending 70 minutes on the first visit. For some, it means multiple consultations before they feel ready.
          </p>
          <p className="prose">
            There is no pressure. The decision to proceed with monocular cataract surgery should be made from a place of understanding and genuine confidence, not urgency. If you leave my office with unanswered questions, I have not done my job.
          </p>
        </div>
      </section>

      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image src="/media/stock-couple-outdoor-sunshine.jpg" alt="Couple enjoying a sunny day outdoors - the confident, independent life that careful monocular surgery can restore" width={1920} height={400} style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 30%'}} />
        </div>
      </section>

      <LineDraw style={{ margin: '0 auto', maxWidth: '200px' }} color="var(--oasis)" />

      <section className="section section-warm">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}>
            <h2 className="section-title">Related <strong>Resources</strong></h2>
          </ScrollReveal>
          <div className="related-grid">
            <Link href="/cataract-surgery" className="related-card">
              <h3>Cataract Surgery Overview</h3>
              <p>What to expect from cataract surgery: timing, lens options, recovery, and what makes this such a successful procedure.</p>
            </Link>
            <Link href="/complex-cases" className="related-card">
              <h3>Complex Cases</h3>
              <p>Monocular surgery is one of many high-stakes situations Dr. Tokuhara has specialized training for.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>What to look for when the surgery matters most - questions to ask, credentials to check, and red flags to avoid.</p>
            </Link>
            <Link href="/cataract-surgery-complications" className="related-card">
              <h3>Cataract Surgery Complications</h3>
              <p>An honest look at what can go wrong, how rare it is, and how complications are managed.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Is your only seeing eye <strong>developing a cataract?</strong></h2>
          <p>I understand the stakes. I&rsquo;ll take the time this deserves - thorough evaluation, complete answers, and a plan you can trust.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <a href="tel:7603404700" className="btn-secondary">Call 760.340.4700</a>
            <Link href="/choosing-your-surgeon" className="btn-secondary">How to Choose Your Surgeon</Link>
          </div>
        </div>
      </section>
    </>
  );
}
