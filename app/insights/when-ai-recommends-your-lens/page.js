import Link from 'next/link';
import Image from 'next/image';
import { articleSchema, breadcrumbSchema } from '../../schema';
import AuthorByline from '../../components/AuthorByline';
import {
  ScrollReveal,
  ParallaxImage,
  BlurReveal,
  LineDraw,
} from '../../components/ScrollAnimations';

export const metadata = {
  title: 'When AI Recommends Your Cataract Lens... But Your Eye Tells a Different Story',
  description: 'A 72-year-old patient used AI tools to research his cataract lens options. They all recommended the same lens. But his eyes told a different story. A reflection on the limits of AI in medicine.',
  alternates: { canonical: '/insights/when-ai-recommends-your-lens' },
  openGraph: {
    title: 'When AI Recommends Your Lens | Dr. Keith Tokuhara',
    description: 'AI is a powerful research tool for patients. But it does not examine your eyes. A real case showing why physician expertise still matters.',
    url: 'https://drtokuhara.com/insights/when-ai-recommends-your-lens',
  },
};

const jsonLd = [
  articleSchema({
    title: 'When AI Recommends Your Cataract Lens... But Your Eye Tells a Different Story',
    description: 'A patient used AI tools to choose his cataract lens. They all agreed. But a careful exam revealed findings that changed the conversation.',
    slug: '/insights/when-ai-recommends-your-lens',
  }),
  breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: 'When AI Recommends Your Lens', href: '/insights/when-ai-recommends-your-lens' },
  ]),
];

export default function InsightAILens() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="page-hero page-hero-image" style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          src="/media/stock-couple-outdoor-sunshine.jpg"
          alt=""
          fill
          style={{objectFit: 'cover', objectPosition: 'center 30%'}}
          priority
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,20,30,0.35) 0%, rgba(0,20,30,0.75) 100%)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2}} className="container">
          <ScrollReveal direction="up" once={true}>
          <span className="insight-hero-cluster">Clinical Judgment</span>
          <h1>When AI Recommends Your Lens... But Your Eye Tells a <strong>Different Story</strong></h1>
          <p className="page-hero-sub">AI can help you research. It cannot examine your eyes. A real case that shows why the conversation still matters.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <AuthorByline />
          <div className="section-divider" style={{margin: '32px auto'}} />
          <p className="body-lead body-lead-dropcap">
            He came prepared. More prepared than most patients I see.
          </p>
          <p>
            A 72-year-old man walked into my clinic for a cataract consultation carrying a folder filled with research. He had done what many patients are now doing: he had consulted multiple AI tools to help guide his decision.
          </p>
          <p>
            Interestingly, they all gave him the same answer: a specific type of advanced lens called an Extended Depth of Focus lens.
          </p>
          <p>
            On paper, it made sense.
          </p>
          <p>
            But medicine is rarely just "on paper."
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">What the Exam <strong>Revealed</strong></h2>
          <p>
            When I examined his eyes, I found a few important details that no AI tool could have known:
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>A mild wrinkle on the retina</strong>
              <p>Called an epiretinal membrane. It is a thin layer of scar tissue on the surface of the macula. Even a mild one can affect contrast sensitivity and fine visual quality, especially with premium lens designs that rely on precise light distribution.</p>
            </div>
            <div className="insight-item">
              <strong>Subtle corneal irregularities</strong>
              <p>From years of contact lens wear. These surface changes can scatter light in ways that degrade the performance of advanced optics. A standard exam might miss them. Detailed topography does not.</p>
            </div>
          </div>
          <p>
            These are the kinds of nuances that can affect how well certain premium lenses perform, especially when it comes to contrast and clarity.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Conversation</strong></h2>
          <p>
            We had a long conversation. Not the kind where I tell someone what to do. The kind where I lay out what I see, what it means, and what the realistic range of outcomes looks like.
          </p>
          <p>
            I explained that while the lens he chose is excellent and FDA-approved, patients with even mild retinal changes do not always get the same crisp quality of vision. I wanted him to understand that he might not achieve perfect 20/20.
          </p>
          <p>
            To his credit, he listened carefully.
          </p>

          <BlurReveal><div className="insight-highlight">
            <p><strong>And then he made a thoughtful decision: he still wanted to move forward.</strong></p>
          </div></BlurReveal>

          <p>
            Not because he ignored what I told him. Because he understood the tradeoffs and decided the potential benefit was worth it for his life.
          </p>
          <p>
            That is informed consent at its best.
          </p>
        </div>
      </section>

      {/* Full-bleed visual break */}
      <section style={{padding: 0}}>
        <div className="editorial-image-break">
          <Image
            src="/media/stock-group-cafe-outdoor.jpg"
            alt="Friends gathered at an outdoor cafe in the sunshine"
            width={1920}
            height={400}
            style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 30%'}}
          />
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <h2 className="section-title">The <strong>Outcome</strong></h2>
          <p>
            Two weeks after surgery, he came back.
          </p>
          <p>
            His vision measured 20/25. Not perfect on the chart.
          </p>
          <p>
            But his reaction told the real story.
          </p>

          <BlurReveal><div className="pull-quote">
            <p>He was happy.</p>
          </div></BlurReveal>

          <p>
            Before surgery, he was 20/50 and dependent on contact lenses. Now he could see clearly enough to drive, use his phone, and work on his computer, all without contacts.
          </p>
          <p>
            That was a meaningful improvement in his life.
          </p>
          <p>
            Success is not always about achieving "perfect" vision. It is about achieving the vision that works for your life.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <h2 className="section-title">What This Means for <strong>AI in Medicine</strong></h2>
          <p>
            AI is becoming a powerful tool for patients. It can help you learn, explore options, and feel more involved in your care. I am genuinely glad patients are doing their research.
          </p>
          <p>
            But it has limits.
          </p>
          <div className="insight-list">
            <div className="insight-item">
              <strong>AI only knows what you tell it.</strong>
              <p>It cannot feel the texture of your cornea or see the subtle membrane on your retina.</p>
            </div>
            <div className="insight-item">
              <strong>It does not examine your eyes.</strong>
              <p>No questionnaire replaces a slit lamp exam, topography, and OCT imaging.</p>
            </div>
            <div className="insight-item">
              <strong>It cannot always personalize recommendations the way a physician can.</strong>
              <p>Medicine at its best integrates data with judgment, experience, and the ability to read the human being sitting across from you.</p>
            </div>
          </div>
          <p>
            The best decisions happen when your research and your doctor's expertise come together. Not in competition, but in collaboration.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container content-narrow">
          <BlurReveal><div className="clinic-thought">
            <h3>The takeaway</h3>
            <p>
              <em>Come prepared. Do your research. Ask AI anything you want. But then sit down with a surgeon who will actually look at your eyes, tell you what they find, and help you make a decision that accounts for the things no algorithm can see. That is where the best outcomes live: at the intersection of your questions and your doctor's experience.</em>
            </p>
          </div></BlurReveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container content-narrow">
          <ScrollReveal direction="up" once={true}><h2 className="section-title">Related <strong>Reading</strong></h2></ScrollReveal>
          <div className="related-grid">
            <Link href="/lens-implants-explained" className="related-card">
              <h3>Lens Implants Explained</h3>
              <p>Monofocal, toric, EDOF, and multifocal. What each lens does and who it works best for.</p>
            </Link>
            <Link href="/vivity-vs-panoptix" className="related-card">
              <h3>Vivity vs PanOptix</h3>
              <p>A detailed comparison of two popular premium lens options and how to choose.</p>
            </Link>
            <Link href="/choosing-your-surgeon" className="related-card">
              <h3>Choosing Your Surgeon</h3>
              <p>The questions nobody tells you to ask, and the red flags to watch for.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
